import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** 已发布文章，按日期倒序。开发模式包含草稿，方便预览。 */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection(
    'posts',
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** 按分类筛选 */
export async function getPostsByCategory(category: Post['data']['category']): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.category === category);
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
