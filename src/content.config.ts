import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

/**
 * 文章集合。
 *
 * 一个集合 + category 字段，比拆成两个集合更省事：
 * 归档、标签、RSS 都只需要遍历一次，而首页按 category 分栏展示。
 * 文件放在 src/content/posts/tech/ 和 src/content/posts/essay/ 下，
 * 目录名只影响 URL（/posts/tech/xxx），真正生效的是 frontmatter 里的 category。
 */
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    /** 文章标题 */
    title: z.string(),
    /** 发布日期，写 2026-03-01 或 2026-03-01 10:00 都可以 */
    date: z.coerce.date(),
    /** 分类，决定首页分栏和配色 */
    category: z.enum(['tech', 'essay']),
    /**
     * 板块（只对 category: tech 有意义）。
     * tech 下分两块，列表页与首页都按它分组，不混在一起：
     *   soft = 软科普（讲原理、讲来龙去脉）
     *   hard = 硬指南（手把手、可照着做）
     * 见 consts.ts 的 TECH_SECTIONS。
     */
    section: z.enum(['soft', 'hard']).optional(),
    /** 标签，用于 /tags 聚合 */
    tags: z.array(z.string()).default([]),
    /**
     * 一句话摘要（可选）。列表页、SEO 描述、RSS 都用它。
     * 不写就不显示导语 —— 宁可空着，也不要为了填满而凑一句。
     */
    summary: z.string().optional(),
    /** 系列 slug（见 consts.ts 的 SERIES）。同一系列的文章会串成上下章导航 */
    series: z.string().optional(),
    /** 系列内的序号，从 1 开始 */
    order: z.number().optional(),
    /** 系列内的分部，如「基础篇」「进阶篇」，只用于系列目录页分组展示 */
    part: z.string().optional(),
    /** 最后修改时间，可选，列表页会显示「已更新」 */
    updated: z.coerce.date().optional(),
    /** 封面图，写 public 下的路径，如 /images/2026/03/foo.png，可选 */
    cover: z.string().optional(),
    /** 草稿：本地 dev 能看到，构建上线时自动排除 */
    draft: z.boolean().default(false),
  }),
});

/**
 * 单页内容（目前只有「关于」）。
 * 放在 src/content/pages/ 下，一页一个 Markdown 文件，改内容不用碰 .astro。
 */
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { posts, pages };
