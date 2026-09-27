// 把单行的 $$…$$ 改成独占一行的围栏写法。
// remark-math 只把「$$ 单独占一行」的块认成 display math；写成一行时会被当成行内公式，
// 于是公式不居中、\lim 的极限符号也压不到下面，站点里 .katex-display 的样式全是死代码。
//
// 只动换行，不动一个字：脚本跑完会逐文件比对「去掉所有空白后」的字符串是否完全一致。
// 用法：node scripts/fix-display-math.mjs [--write]
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'src/content/posts';
const write = process.argv.includes('--write');

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

let changed = 0;
for (const file of walk(ROOT)) {
  const src = fs.readFileSync(file, 'utf8');
  const lines = src.split(/\r?\n/);
  const oddities = [];
  const out = [];
  let hits = 0;

  for (const line of lines) {
    if (!line.includes('$$')) {
      out.push(line);
      continue;
    }
    // 独占一行的围栏（已经是正确写法）原样保留
    if (/^\s*\$\$\s*$/.test(line)) {
      out.push(line);
      continue;
    }
    // 单行 $$公式$$ —— 前后不能有别的内容，否则人工看一眼
    const m = line.match(/^(\s*)\$\$(.+)\$\$(\s*)$/);
    if (!m) {
      oddities.push(line);
      out.push(line);
      continue;
    }
    const [, indent, body, tail] = m;
    out.push(`${indent}$$`);
    out.push(`${indent}${body.trim()}`);
    out.push(`${indent}$$${tail}`);
    hits++;
  }

  const next = out.join('\n');
  const same = src.replace(/\s+/g, '') === next.replace(/\s+/g, '');
  const status = same ? 'ok ' : '文本变了!!';
  if (hits || oddities.length) {
    console.log(`${file}  改写 ${hits} 处  ${status}`);
    oddities.slice(0, 5).forEach((l) => console.log('   ⚠ 没识别的行: ' + l.slice(0, 90)));
  }
  if (!same) {
    console.log('   ✗ 已跳过该文件（拒绝写入）');
    continue;
  }
  if (hits && write) {
    fs.writeFileSync(file, next);
    changed++;
  }
}
console.log(write ? `\n写回 ${changed} 个文件` : '\n（预演，没有写入；加 --write 才落盘）');
