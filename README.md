# 拾光集 · Astro 个人博客

一个用 **Astro + Markdown + GitHub Pages** 搭的纯静态个人博客，双栏目：**技术笔记** 与 **生活随笔**。

无数据库、无服务器、无运维。文章是仓库里的 Markdown 文件，`git push` 即上线。

---

## 快速开始

```bash
pnpm install     # 安装依赖
pnpm dev         # 本地预览  →  http://localhost:4321
pnpm build       # 构建到 dist/（含搜索索引）
pnpm preview     # 预览构建产物（搜索功能只有构建后才可用）
pnpm new tech "文章标题"    # 新建一篇技术笔记
pnpm new essay "文章标题"   # 新建一篇生活随笔
```

> 改了 `package.json` 的依赖之后，记得手动跑一次 `pnpm install`——
> 本项目在 `pnpm-workspace.yaml` 里关掉了 `verifyDepsBeforeRun`，构建前不会自动装依赖。

---

## 上线到 GitHub Pages（约 10 分钟）

### 1. 建仓库

在 GitHub 上新建一个 **public** 仓库，名字必须是：

```
你的用户名.github.io
```

这样站点部署在根路径 `https://你的用户名.github.io`，配置最省事。

> 如果你想用别的仓库名（如 `blog`），网址会变成 `https://你的用户名.github.io/blog`，
> 这时必须把 `src/consts.ts` 里的 `SITE.base` 改成 `'/blog/'`，否则所有 CSS 和图片都会 404。

### 2. 改三个地方

| 文件 | 改什么 |
| --- | --- |
| `src/consts.ts` | `SITE.title` / `subtitle` / `description` / `author` / `url`（改成你的 `https://用户名.github.io`） |
| `src/pages/about.astro` | 「关于」页的自我介绍和联系方式 |
| `public/favicon.svg` | 换成你自己的图标（没有就保留默认的蓝色方块） |

### 3. 推上去

```bash
git init
git add .
git commit -m "chore: init blog"
git branch -M main
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

### 4. 打开 Pages

仓库页面 → **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。

推完等待约 1 分钟，Actions 跑完就能访问 `https://你的用户名.github.io` 了。
之后每次 `git push` 都会自动重新部署。

---

## 写文章

一篇 Markdown 放在 `src/content/posts/tech/` 或 `src/content/posts/essay/` 下：

```markdown
---
title: 用 Astro 搭一个纯静态博客
date: 2026-03-01
category: tech          # tech | essay，决定首页分栏和配色
tags: [Astro, 静态站点]  # 会生成 /tags/xxx/ 页面
summary: 一句话摘要，用于列表页、SEO 描述和 RSS。
updated: 2026-03-05     # 可选，显示「已更新」
cover: /images/2026/03/foo.png   # 可选，放 public/ 下的路径
draft: false            # true = 草稿，本地可见，构建上线时自动跳过
---

正文……
```

目录名只影响 URL（`/posts/tech/xxx/`），真正决定分类的是 frontmatter 里的 `category`。

### 支持的写法

| 写法 | 说明 |
| --- | --- |
| ` ```js ` 代码块 | Shiki 高亮，亮/暗双主题自动切换 |
| `$E = mc^2$` | 行内公式（KaTeX） |
| `$$ ... $$` | 独立成行的公式 |
| 表格 / 引用 / 脚注 | 标准 GFM 全支持 |
| `## 标题` | 自动生成目录（条目多时默认折叠，点标题展开） |

### 系列文章

多篇文章需要按顺序读时，用 `series` 把她们串起来：自动生成上下章导航和系列目录页。

```yaml
series: dsh-guide   # 系列 slug，需要在 src/consts.ts 的 SERIES 里登记
order: 3            # 系列内序号，从 1 开始
part: 基础篇         # 可选，系列目录页按它分组
```

然后在 `src/consts.ts` 的 `SERIES` 里补一条：

```ts
'dsh-guide': {
  title: 'DSH 使用指南（大一新生版）',
  subtitle: '从装上到用明白',
  description: '系列简介，显示在系列目录页和首页。',
  author: '田飞扬',
  note: '应睿信科协邀请写作，核对于 2026 年 9 月。',
},
```

效果：文章页顶部出现系列横幅、底部是「上一篇 / 下一篇（3/9）」，
`/series/dsh-guide/` 是完整目录，`/series/` 汇总全部系列，导航栏也有入口。
不属于任何系列的文章照旧显示全站的「更新的一篇 / 更早的一篇」。

### 插入图片

放进 `public/images/2026/03/`，正文里写绝对路径：

```markdown
![描述](/images/2026/03/foo.png)
```

建议先把图片压到 200KB 以内再提交。

---

## 三个可选功能

### 评论（Giscus）

基于 GitHub Discussions，零后端零成本，但评论者需要 GitHub 账号——对技术博客来说这反而能挡住垃圾评论。

1. 仓库必须是 public，在 **Settings → General → Features** 勾选 **Discussions**
2. 安装 App：https://github.com/apps/giscus
3. 打开 https://giscus.app/zh-CN ，填入仓库名，复制生成的 `repoId` 和 `categoryId`
4. 填进 `src/consts.ts` 的 `GISCUS`，并把 `enabled` 改成 `true`

### 自定义域名

1. 在域名商加一条 CNAME 记录指向 `你的用户名.github.io`
2. 仓库 **Settings → Pages → Custom domain** 填域名并保存
3. **同时**把项目根目录的 `CNAME.example` 复制成 `public/CNAME`，内容只写你的域名一行

第 3 步必须做，否则每次自动部署都会被清掉自定义域名。

### 搜索

`pnpm build` 会自动跑 Pagefind 生成索引（只索引文章正文）。
开发模式（`pnpm dev`）下搜索页会提示索引未生成，属正常现象，用 `pnpm build && pnpm preview` 验证。

---

## 目录结构

```
.
├─ .github/workflows/deploy.yml   GitHub Actions 自动部署
├─ CNAME.example                  自定义域名模板（复制到 public/CNAME）
├─ public/
│  ├─ favicon.svg                 站点图标
│  └─ images/                     文章配图（按年月分目录）
├─ scripts/new-post.mjs           pnpm new 的实现
├─ src/
│  ├─ consts.ts                   ★ 站点配置、导航、系列、Giscus —— 上线只改这里
│  ├─ content.config.ts           文章集合的字段定义与校验
│  ├─ content/posts/
│  │  ├─ tech/dsh-guide/          DSH 使用指南系列（9 篇）
│  │  └─ essay/                   生活随笔
│  ├─ components/
│  │  ├─ Header.astro  Footer.astro
│  │  ├─ PostCard.astro           列表页卡片
│  │  └─ Giscus.astro             评论区
│  ├─ layouts/
│  │  ├─ BaseLayout.astro         HTML 骨架、SEO、主题切换
│  │  └─ PostLayout.astro         文章页：系列横幅 / 目录 / 正文 / 上下篇 / 评论
│  ├─ pages/
│  │  ├─ index.astro              首页（系列连载 + 技术 / 随笔 分栏）
│  │  ├─ posts/[...id].astro      文章详情
│  │  ├─ series/                  系列总览与系列目录页
│  │  ├─ category/[category].astro
│  │  ├─ tags/                    标签索引与标签页
│  │  ├─ archive.astro            按年份归档
│  │  ├─ search.astro             Pagefind 搜索
│  │  ├─ about.astro  404.astro
│  │  └─ rss.xml.ts               RSS 订阅
│  ├─ styles/global.css           ★ 全部样式，配色改这里的 CSS 变量
│  └─ utils/                      URL 拼接、文章排序/阅读时长
└─ pnpm-workspace.yaml            pnpm 11 的构建脚本与依赖校验设置
```

---

## 想改外观

所有颜色、字体、圆角、宽度都是 `src/styles/global.css` 顶部的 CSS 变量：

```css
:root {
  --bg: #fbfaf7;        /* 页面底色 */
  --text: #1c1c19;      /* 正文颜色 */
  --accent: #2563eb;    /* 强调色 */
  --tech: #2563eb;      /* 技术笔记的配色 */
  --essay: #b96a0c;     /* 生活随笔的配色 */
  --content-width: 720px;  /* 正文阅读宽度 */
}
```

深色主题在下面的 `:root[data-theme='dark']` 里，改对应的几个值即可。
主题切换逻辑在 `src/layouts/BaseLayout.astro`，首次渲染前同步写 `data-theme`，所以不会有白屏闪烁。

---

## 环境说明

本项目使用 **Astro 7**，有以下两个和旧教程不一样的地方，已在配置里处理好：

1. **Markdown 插件**：Astro 7 用 `markdown.processor: unified({...})` 取代了旧的 `remarkPlugins` / `rehypePlugins`，同时 `@astrojs/markdown-remark` 不再默认安装。两者都已配好。
2. **内容集合**：Astro 7 默认的 `glob` loader 依赖 `tinyglobby → picomatch`（CJS），在 Vite 8 的 module runner 下会报 `require is not defined`。因此 `astro.config.mjs` 里开启了 `legacy.collectionsBackwardsCompat`，集合改用 `import.meta.glob` 实现。集合的字段定义、`getCollection`、`render()` 用法都不受影响。等上游修复后可以删掉这一行并换回 `loader: glob({...})`。

---

## 常见问题

**`pnpm build` 报 `ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION`**
registry 开了供应链策略，拦截刚发布不久的包。等一天再装，或临时用
`pnpm install --config.minimumReleaseAge=0`。

**图片 404 / 样式全丢**
说明部署在子路径但没配 `base`。把 `src/consts.ts` 的 `SITE.base` 改成 `'/仓库名/'`。

**改了自定义域名后每次部署都被重置**
`public/CNAME` 文件没建，见上面「自定义域名」第 3 步。

**搜索页提示索引未生成**
本地 `pnpm dev` 下必然如此（索引在构建期生成）。线上站点或 `pnpm preview` 正常。

**`git` 提交后出现整文件 diff**
Windows 换行符问题：`git config --global core.autocrlf input`。
