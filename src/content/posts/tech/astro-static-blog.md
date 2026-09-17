---
title: 用 Astro 搭一个纯静态博客：我踩过的坑
date: 2026-03-01
category: tech
tags: [Astro, 静态站点, GitHub Pages]
summary: 从选型到上线，记录纯静态博客的完整链路，以及 base 路径、深色模式闪烁、评论方案这几个最容易卡住的地方。
---

搭这个博客之前我试过三种方案，最后落在 Astro + GitHub Pages 上。这篇把当时踩到的坑整理一下。

## 为什么是静态站点

个人博客的本质是「一堆文章 + 一个列表页」。既然是只读内容，就不需要数据库、不需要服务端渲染、更不需要一台 7×24 的服务器。

静态站的好处很直接：

- 构建产物就是 HTML/CSS，扔到任何地方都能跑
- 没有后端 = 没有被攻击面 = 不用运维
- 换托管商只需要重新传一次产物，内容零改动

## 三个必须提前想清楚的问题

| 问题 | 想错的后果 |
| --- | --- |
| 仓库名是什么 | 项目站要额外配 `base`，否则全部资源 404 |
| 要不要自定义域名 | 影响 `site` 配置和 CNAME 文件 |
| 评论怎么处理 | 想用自建评论就等于自建后端，成本翻十倍 |

第一条尤其重要。GitHub Pages 有两种仓库：

```txt
用户名.github.io   →  https://用户名.github.io          （根路径，最省事）
任意名字           →  https://用户名.github.io/仓库名    （子路径，必须配 base）
```

如果选了第二种，`astro.config.mjs` 里必须写：

```js
export default defineConfig({
  site: 'https://用户名.github.io',
  base: '/仓库名/',
});
```

## 深色模式的闪烁问题

一开始我用 `@media (prefers-color-scheme: dark)` 做暗色主题，结果手动切换后会有一瞬间的白屏。

解决方法是在 `<head>` 里塞一段同步执行的脚本，在浏览器绘制之前就把 `data-theme` 定下来：

```html
<script is:inline>
  (function () {
    var saved = localStorage.getItem('theme');
    var prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = saved || (prefersDark ? 'dark' : 'light');
  })();
</script>
```

这样 CSS 里只需要一份 `:root[data-theme='dark']`，不用再写媒体查询兜底。

## 评论：别自建

自建评论意味着：数据库、鉴权、垃圾过滤、备份、续费。为了几条评论不值得。

Giscus 直接挂在 GitHub Discussions 上，配置只要三个值：

1. 仓库打开 Discussions
2. 安装 [giscus App](https://github.com/apps/giscus)
3. 在 [giscus.app](https://giscus.app/zh-CN) 填仓库名，拿到 `repoId` 和 `categoryId`

代价是评论者必须有 GitHub 账号——对技术博客来说这反而是优点，垃圾评论天然少。

## 构建速度的一点数据

同一批 200 篇 Markdown，本机冷启动构建耗时大约是：

$$
T \approx 0.9n + 1.4 \quad (\text{秒})
$$

其中 $n$ 是文章数。换算下来 200 篇不到 4 秒，塞进 CI 完全无感。

## 最后

真正的门槛从来不是工具，是持续写。先把架子搭起来，主题丑一点没关系——写完 20 篇再谈美化。
