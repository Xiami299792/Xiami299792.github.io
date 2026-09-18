#!/usr/bin/env node
/**
 * 为随笔页生成「按页精确裁剪」的汇文明朝体子集。
 *
 * 背景：仓库里那份 huiwen-mincho-subset.woff2 是 3.4MB（GB2312-1 全集，每字约 800 字节，
 * 是 Noto/思源宋体那类字体的四倍）。手机上 3.4MB 常常还没下载完就被划走了，
 * 正文于是回退到系统字体 —— 安卓是黑体，看起来就是「随笔里没有明朝体」。
 * 每篇文章只带自己用到的字，随笔页从 3412KB 降到 200~450KB，配上 preload 基本感觉不到切换。
 *
 * 用法：
 *   pnpm fonts           只重建过期/缺失的
 *   pnpm fonts --force   全部重建
 *
 * 产物：public/fonts/huiwen-*.woff2 —— 提交进仓库，所以 CI 构建不需要 Python。
 * 源字体：优先用工作区里 44MB 的 huiwen-mincho-gbk.ttf（字更全），
 *        找不到就退回仓库内的 GB2312-1 母版 woff2（会少几个生僻字）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const POSTS_DIR = path.join(ROOT, 'src', 'content', 'posts');
const OUT_DIR = path.join(ROOT, 'public', 'fonts');
const FORCE = process.argv.includes('--force');

/** 只保留「需要由这份字体负责」的字符：汉字 + 中文标点 + ASCII。
    带 ASCII 是为了不改变现在的西文/数字外观（字体栈里 Huiwen Mincho 排第一）。 */
function keepChar(c) {
  const n = c.codePointAt(0);
  return (
    (n >= 0x20 && n <= 0x7e) ||            // ASCII 可打印
    (n >= 0x4e00 && n <= 0x9fff) ||        // 汉字
    (n >= 0x3000 && n <= 0x303f) ||        // 中文标点
    (n >= 0xff00 && n <= 0xffef) ||        // 全角
    (n >= 0x2000 && n <= 0x206f) ||        // ——、……、引号等
    n === 0x00b7 || n === 0x2103 || n === 0x00d7
  );
}
const pick = (text) => new Set([...text].filter(keepChar));

function findSource() {
  const candidates = [
    process.env.HUIWEN_SRC,
    path.join(ROOT, '..', 'huiwen-mincho-gbk.ttf'),
    path.join(ROOT, 'src', 'styles', 'fonts', 'huiwen-mincho-subset.woff2'),
  ].filter(Boolean);
  for (const p of candidates) if (fs.existsSync(p)) return p;
  throw new Error('找不到汇文明朝体源文件（可用环境变量 HUIWEN_SRC 指定）');
}

function findPython() {
  for (const cmd of [process.env.PYTHON, 'python', 'python3'].filter(Boolean)) {
    try {
      execFileSync(cmd, ['-c', 'import fontTools'], { stdio: 'ignore' });
      return cmd;
    } catch { /* 换下一个 */ }
  }
  throw new Error('需要 Python + fontTools：pip install fonttools brotli');
}

/** 页面外壳里会出现的中文：导航、按钮、上一篇/下一篇、阅读时长…… 每份子集都要带上。
    只扫组件/布局/工具/常量这几个「模板」位置 —— src/pages 里有整篇自我介绍那种长文，
    扫进来会把每份子集都撑大几百 KB。 */
function chromeChars() {
  const chars = new Set();
  const files = [path.join(ROOT, 'src', 'consts.ts')];
  for (const sub of ['components', 'layouts', 'utils']) {
    const dir = path.join(ROOT, 'src', sub);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (/\.(astro|ts|js|mjs)$/.test(f)) files.push(path.join(dir, f));
    }
  }
  for (const f of files) {
    for (const c of pick(fs.readFileSync(f, 'utf8'))) chars.add(c);
  }
  return chars;
}

function readPosts() {
  const out = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.md')) {
        const text = fs.readFileSync(p, 'utf8');
        const fm = text.startsWith('---') ? text.slice(3, text.indexOf('\n---', 3)) : '';
        const get = (k) => (new RegExp(`^${k}:\\s*(.+)$`, 'm').exec(fm)?.[1] || '').trim().replace(/^['"]|['"]$/g, '');
        out.push({
          id: path.relative(POSTS_DIR, p).replace(/\\/g, '/').replace(/\.md$/, ''),
          category: get('category'),
          title: get('title'),
          summary: get('summary'),
          text,
        });
      }
    }
  };
  walk(POSTS_DIR);
  return out;
}

function subset(src, python, chars, dest, label) {
  const textFile = dest + '.txt';
  fs.writeFileSync(textFile, [...chars].join(''), 'utf8');
  execFileSync(
    python,
    ['-m', 'fontTools.subset', src, `--text-file=${textFile}`, `--output-file=${dest}`,
     '--flavor=woff2', '--layout-features=*', '--desubroutinize', '--no-hinting'],
    { stdio: 'ignore' },
  );
  fs.unlinkSync(textFile);
  const kb = fs.statSync(dest).size / 1024;
  console.log(`  ${label.padEnd(28)} ${String(chars.size).padStart(5)} 字 → ${kb.toFixed(0).padStart(4)} KB`);
  return kb;
}

// ---------------------------------------------------------------- 主流程
const src = findSource();
const python = findPython();
const posts = readPosts();
const chrome = chromeChars();
const titles = new Set();
for (const p of posts) pick(`${p.title}${p.summary}`).forEach((c) => titles.add(c));   // 上一篇/下一篇会显示别的标题

const essayPosts = posts.filter((p) => p.category === 'essay');
if (!essayPosts.length) throw new Error('没有找到随笔（category: essay）');

fs.mkdirSync(OUT_DIR, { recursive: true });
console.log(`源字体：${path.relative(ROOT, src)}`);
console.log(`外壳用字 ${chrome.size} 个 / 标题用字 ${titles.size} 个\n`);

const jobs = essayPosts.map((p) => ({
  dest: path.join(OUT_DIR, `huiwen-${p.id.replace(/\//g, '-')}.woff2`),
  chars: new Set([...chrome, ...titles, ...pick(p.text)]),
  label: p.id,
}));

// 栏目页 /category/essay/：只列标题和摘要，不需要正文全部用字
jobs.push({
  dest: path.join(OUT_DIR, 'huiwen-essay-list.woff2'),
  chars: new Set([
    ...chrome,
    ...pick(essayPosts.map((p) => `${p.title}${p.summary}`).join('')),
    ...pick('共 篇 这个分类下还没有文章 更新的一篇 更早的一篇'),
  ]),
  label: 'category/essay（栏目页）',
});

let total = 0;
for (const j of jobs) {
  if (!FORCE && fs.existsSync(j.dest) && fs.statSync(j.dest).mtimeMs > Math.max(fs.statSync(src).mtimeMs, ...essayPosts.map((p) => fs.statSync(path.join(POSTS_DIR, p.id + '.md')).mtimeMs))) {
    console.log(`  ${j.label.padEnd(28)} 跳过（未过期）`);
    continue;
  }
  total += subset(src, python, j.chars, j.dest, j.label);
}
console.log(`\n生成完毕，共 ${total.toFixed(0)} KB；产物请一并提交（CI 不需要 Python）`);
