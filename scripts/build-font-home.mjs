#!/usr/bin/env node
/**
 * 生成首页专用的汇文明朝体子集。
 *
 * 起因：首页报头「新世界 · 科学与文化」是纯中文，而 Alfa Slab One 只带 latin 子集，
 * 汉字只能回退到系统黑体 —— 实测两个字体对「新世界」的测宽完全相同（120 = 120），
 * 等于报头的字形设计根本没生效。西文标题（如 "Science & Culture"）是正常的。
 *
 * 解法：给首页单独切一份子集，只带首页会出现的字（外壳 + 站名 + 栏目名 + 所有文章标题摘要）。
 * 产物提交进仓库，CI 不需要 Python。
 *
 * 用法：node scripts/build-font-home.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const POSTS_DIR = path.join(ROOT, 'src', 'content', 'posts');
const OUT = path.join(ROOT, 'public', 'fonts', 'huiwen-home.woff2');

function keepChar(c) {
  const n = c.codePointAt(0);
  return (
    (n >= 0x20 && n <= 0x7e) ||
    (n >= 0x4e00 && n <= 0x9fff) ||
    (n >= 0x3000 && n <= 0x303f) ||
    (n >= 0xff00 && n <= 0xffef) ||
    (n >= 0x2000 && n <= 0x206f) ||
    n === 0x00b7 || n === 0x2103 || n === 0x00d7
  );
}
const pick = (t) => [...t].filter(keepChar);

const chars = new Set();

// 1) 外壳：常量、导航、布局、组件
const shell = [path.join(ROOT, 'src', 'consts.ts')];
for (const sub of ['components', 'layouts', 'utils']) {
  const dir = path.join(ROOT, 'src', sub);
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir)) {
      if (/\.(astro|ts|js|mjs)$/.test(f)) shell.push(path.join(dir, f));
    }
  }
}
// 首页模板本身
shell.push(path.join(ROOT, 'src', 'pages', 'index.astro'));
for (const f of shell) {
  if (fs.existsSync(f)) pick(fs.readFileSync(f, 'utf8')).forEach((c) => chars.add(c));
}

// 2) 所有文章的标题与摘要 —— 首页每张卡片都会显示
let postCount = 0;
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.md')) {
      postCount++;
      const text = fs.readFileSync(p, 'utf8');
      const fm = text.startsWith('---') ? text.slice(3, text.indexOf('\n---', 3)) : '';
      pick(fm).forEach((c) => chars.add(c));
    }
  }
};
walk(POSTS_DIR);

// 3) 首页上会出现的固定字样（按钮、计数、系列说明等）
pick(
  '首页 项目 归档 搜索 关于 技术 随笔 伴学 软科普 硬指南 篇 系列 进入系列看章节 查看全部 ' +
    '更新的一篇 更早的一篇 目录 本站 文章 暂无 共 Science Culture Since ' +
    '把技术讲明白 一个记录技术学习与日常思考的个人博客',
).forEach((c) => chars.add(c));

const srcCandidates = [
  process.env.HUIWEN_SRC,
  path.join(ROOT, '..', 'huiwen-mincho-gbk.ttf'),
  path.join(ROOT, 'src', 'styles', 'fonts', 'huiwen-mincho-subset.woff2'),
].filter(Boolean);
const src = srcCandidates.find((p) => fs.existsSync(p));
if (!src) throw new Error('找不到汇文明朝体源文件');

const txt = OUT + '.txt';
fs.writeFileSync(txt, [...chars].join(''), 'utf8');
execFileSync(
  'python',
  ['-m', 'fontTools.subset', src, `--text-file=${txt}`, `--output-file=${OUT}`,
   '--flavor=woff2', '--layout-features=*', '--desubroutinize', '--no-hinting'],
  { stdio: 'inherit' },
);
fs.unlinkSync(txt);

const kb = fs.statSync(OUT).size / 1024;
console.log(`扫描 ${postCount} 篇文章；首页子集 ${chars.size} 字 → ${kb.toFixed(0)} KB`);
console.log(`产物：${path.relative(ROOT, OUT)}（请一并提交）`);
