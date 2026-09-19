#!/usr/bin/env node
/**
 * 新建一篇文章，自动带上正确的 frontmatter。
 *
 * 用法：
 *   pnpm new tech "Astro 的 islands 架构"
 *   pnpm new essay "关于早起这件事"
 *   pnpm new tech "Midjourney：出图" --series skill-picks --part 出图 --section hard
 *
 * 加了 --series 就会建到 src/content/posts/<category>/<series>/ 下（系列文章按目录归类），
 * 并自动补上 series / order（接在该系列现有最大序号之后）/ part。
 *
 * 生成：src/content/posts/<category>/[<series>/]<slug>.md
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const CATEGORIES = ['tech', 'essay'];
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const argv = process.argv.slice(2);
const category = argv[0];

/** 取 --xxx 后面的值 */
function flag(name) {
  const i = argv.indexOf('--' + name);
  return i >= 0 ? argv[i + 1] : undefined;
}
const series = flag('series');
const part = flag('part');
const section = flag('section');

/** 把 flag 与它们的值剔掉，剩下的就是标题 */
const title = argv
  .slice(1)
  .filter((a, i, arr) => {
    if (a.startsWith('--')) return false;
    const prev = arr[i - 1];
    return !(prev && prev.startsWith('--'));
  })
  .join(' ')
  .trim();

if (!category || !CATEGORIES.includes(category)) {
  console.error(`用法：pnpm new <${CATEGORIES.join('|')}> "文章标题" [--series slug --part 小栏目 --section soft|hard]`);
  process.exit(1);
}

if (!title) {
  console.error('缺少标题。用法：pnpm new ' + category + ' "文章标题"');
  process.exit(1);
}

/** 把标题转成安全的文件名，中文原样保留 */
function toSlug(text) {
  return (
    text
      .trim()
      .toLowerCase()
      .replace(/[\s_]+/g, '-')
      // 去掉 Windows / URL 里不安全的字符，保留中日韩文字
      .replace(/[\\/:*?"<>|#%&{}$!'@+`=~^[\]]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') || 'untitled'
  );
}

const now = new Date();
const pad = (n) => String(n).padStart(2, '0');
const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

const slug = toSlug(title);
// 系列文章按系列名建子目录（和 dsh-guide 的组织方式一致）
const dir = series
  ? join(root, 'src', 'content', 'posts', category, toSlug(series))
  : join(root, 'src', 'content', 'posts', category);
const file = join(dir, `${slug}.md`);

if (existsSync(file)) {
  console.error(`文件已存在：${file}`);
  process.exit(1);
}

/** 接在该系列现有最大 order 之后，省得每次自己数 */
function nextOrder() {
  if (!series || !existsSync(dir)) return 1;
  let max = 0;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.md')) continue;
    const m = /^order:\s*(\d+)/m.exec(readFileSync(join(dir, f), 'utf-8'));
    if (m) max = Math.max(max, Number(m[1]));
  }
  return max + 1;
}
const order = nextOrder();

const fm = [`title: ${title}`, `date: ${date}`, `category: ${category}`];
if (section) fm.push(`section: ${section}`);
if (series) {
  fm.push(`series: ${series}`, `order: ${order}`);
  if (part) fm.push(`part: ${part}`);
}
fm.push('tags: []', 'summary: 这里写一句话摘要，会用在列表页、SEO 描述和 RSS 里。', 'draft: true');

const frontmatter = `---
${fm.join('\n')}
---

正文从这里开始。写完把 draft 改成 false 就会发布。

## 小标题
`;

mkdirSync(dir, { recursive: true });
writeFileSync(file, frontmatter, 'utf-8');

const rel = file.slice(root.length + 1).replace(/\\/g, '/');
console.log(`已创建 ${rel}`);
console.log('提示：draft: true 表示草稿，本地 pnpm dev 可见，构建上线时自动跳过。');
