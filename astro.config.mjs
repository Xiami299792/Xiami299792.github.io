// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import { SITE } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
  // 站点最终地址，sitemap / RSS / canonical 都依赖它
  site: SITE.url,

  // 用户站（仓库名 = 用户名.github.io）保持 '/'；
  // 若用项目站（仓库名如 blog），改成 '/blog/'，否则所有资源会 404
  base: SITE.base,

  trailingSlash: 'ignore',

  integrations: [sitemap()],

  markdown: {
    // Astro 7 起用 markdown.processor 取代旧的 remarkPlugins / rehypePlugins。
    // unified() 就是原来那套 remark + rehype 管线，只是换了个显式的写法。
    processor: unified({
      // 数学公式：$...$ 行内，$$...$$ 独立成行
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      // 亮/暗双主题，配合 global.css 里的 --shiki-* 切换
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },

  devToolbar: { enabled: false },

  // Astro 7 默认走新的 content layer（glob loader）；该 loader 依赖 tinyglobby ->
  // picomatch（CJS），在 Vite 8 的 module runner 里会被当成 ESM 执行而报
  // "require is not defined"。开启向后兼容模式后，集合改用 import.meta.glob 实现，
  // 绕开这个问题。等上游修复后可以删掉这行并换回 loader: glob({...})。
  legacy: { collectionsBackwardsCompat: true },
});
