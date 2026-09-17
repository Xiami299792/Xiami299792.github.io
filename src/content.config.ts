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
    /** 标签，用于 /tags 聚合 */
    tags: z.array(z.string()).default([]),
    /** 一句话摘要：列表页、SEO 描述、RSS 都用它，建议 40~80 字 */
    summary: z.string(),
    /** 最后修改时间，可选，列表页会显示「已更新」 */
    updated: z.coerce.date().optional(),
    /** 封面图，写 public 下的路径，如 /images/2026/03/foo.png，可选 */
    cover: z.string().optional(),
    /** 草稿：本地 dev 能看到，构建上线时自动排除 */
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
