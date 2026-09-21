import { getCollection, type CollectionEntry } from 'astro:content';
import { TECH_SECTIONS, type TechSectionKey } from '../consts';

export type Post = CollectionEntry<'posts'>;

/** 已发布文章，按日期倒序。开发模式包含草稿，方便预览。 */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection(
    'posts',
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return posts.sort((a, b) => {
    const diff = b.data.date.getTime() - a.data.date.getTime();
    if (diff !== 0) return diff;
    // 同一天发布的（比如一个系列一次性上线）按系列序号排，读起来是顺序的
    const orderDiff = (a.data.order ?? 0) - (b.data.order ?? 0);
    if (orderDiff !== 0) return orderDiff;
    return a.data.title.localeCompare(b.data.title, 'zh-CN');
  });
}

/** 按分类筛选 */
export async function getPostsByCategory(category: Post['data']['category']): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.category === category);
}

/**
 * 把技术文章按板块分组（软科普 / 硬指南）。
 * 顺序跟随 consts.ts 里 TECH_SECTIONS 的声明顺序，空板块不返回。
 * 没写 section 的文章归到「硬指南」。
 */
export function groupByTechSection(
  posts: Post[],
): { key: TechSectionKey; posts: Post[] }[] {
  return (Object.keys(TECH_SECTIONS) as TechSectionKey[])
    .map((key) => ({
      key,
      posts: posts.filter((post) => (post.data.section ?? 'hard') === key),
    }))
    .filter((group) => group.posts.length > 0);
}

/**
 * 把一组文章拆成「系列」与「不属于系列的文章」两部分。首页按栏目铺开时用：
 * 成系列的收成一块（点进去才是章节列表），剩下的照常按文章行排。
 * 系列按在传入顺序里首次出现的先后排列（也就是最新的系列在前），系列内按 order 升序。
 */
export function splitSeries(posts: Post[]): {
  series: { key: string; posts: Post[] }[];
  loose: Post[];
} {
  const keys: string[] = [];
  for (const post of posts) {
    const key = post.data.series;
    if (key && !keys.includes(key)) keys.push(key);
  }
  return {
    series: keys.map((key) => ({
      key,
      posts: posts
        .filter((post) => post.data.series === key)
        .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0)),
    })),
    loose: posts.filter((post) => !post.data.series),
  };
}

/**
 * 文章的 URL slug。
 * 兼容模式下 entry.id 会带上 .md 后缀，这里统一剥掉，
 * 这样无论用哪种 loader，链接都是 /posts/tech/xxx/。
 */
export function postSlug(post: Post): string {
  return post.id.replace(/\.(md|mdx)$/i, '');
}

/** 文章页面路径（未加 base） */
export function postPath(post: Post): string {
  return `/posts/${postSlug(post)}/`;
}

/** 取某个系列的全部文章，按 order 升序 */
export async function getSeriesPosts(series: string): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts
    .filter((post) => post.data.series === series)
    .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
}

/** 某个系列里出现过的所有分部（基础篇 / 进阶篇 …），保持出现顺序 */
export function seriesParts(posts: Post[]): string[] {
  const seen: string[] = [];
  for (const post of posts) {
    const part = post.data.part;
    if (part && !seen.includes(part)) seen.push(part);
  }
  return seen;
}

/** 找出当前文章在系列中的上一篇 / 下一篇 */
export function seriesNeighbors(posts: Post[], current: Post) {
  const index = posts.findIndex((post) => post.id === current.id);
  return {
    index,
    total: posts.length,
    prev: index > 0 ? posts[index - 1] : undefined,
    next: index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}

/** 全站所有系列及其文章数（只统计有已发布文章的系列） */
export async function getSeriesOverview(): Promise<{ key: string; posts: Post[] }[]> {
  const posts = await getPublishedPosts();
  const keys: string[] = [];
  for (const post of posts) {
    const key = post.data.series;
    if (key && !keys.includes(key)) keys.push(key);
  }
  return keys.map((key) => ({
    key,
    posts: posts
      .filter((post) => post.data.series === key)
      .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0)),
  }));
}

/** 格式化日期：2026-03-01 */
export function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** 估算阅读时长（中文按 350 字/分钟，英文按 200 词/分钟粗算） */
export function readingTime(body: string | undefined): string {
  if (!body) return '';
  const cjk = (body.match(/[\u4e00-\u9fa5]/g) ?? []).length;
  const words = (body.match(/[A-Za-z0-9]+/g) ?? []).length;
  const minutes = Math.max(1, Math.round(cjk / 350 + words / 200));
  return `${minutes} 分钟`;
}
