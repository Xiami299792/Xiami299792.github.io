#!/usr/bin/env node
/**
 * 新建一篇文章，自动带上正确的 frontmatter。
 *
 * 用法：
 *   pnpm new tech "Astro 的 islands 架构"
 *   pnpm new essay "关于早起这件事"
 *
 * 生成：src/content/posts/<category>/<slug>.md
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const CATEGORIES = ['tech', 'essay'];
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const [category, ...rest] = process.argv.slice(2);
const title = rest.join(' ').trim();

if (!category || !CATEGORIES.includes(category)) {
  console.error(`用法：pnpm new <${CATEGORIES.join('|')}> "文章标题"`);
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
const dir = join(root, 'src', 'content', 'posts', category);
const file = join(dir, `${slug}.md`);

if (existsSync(file)) {
  console.error(`文件已存在：${file}`);
  process.exit(1);
}

const frontmatter = `---
title: ${title}
date: ${date}
category: ${category}
tags: []
summary: 这里写一句话摘要，会用在列表页、SEO 描述和 RSS 里。
draft: true
---

正文从这里开始。写完把 draft 改成 false 就会发布。

## 小标题
`;

mkdirSync(dir, { recursive: true });
writeFileSync(file, frontmatter, 'utf-8');

const rel = file.slice(root.length + 1).replace(/\\/g, '/');
console.log(`已创建 ${rel}`);
console.log('提示：draft: true 表示草稿，本地 pnpm dev 可见，构建上线时自动跳过。');
