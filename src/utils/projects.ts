import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/**
 * 已发布的项目，按 order 升序（order 相同按年份倒序）。
 * 开发模式包含草稿，方便预览。
 */
export async function getProjects(): Promise<Project[]> {
  const items = await getCollection(
    'projects',
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return items.sort((a, b) => {
    const d = (a.data.order ?? 0) - (b.data.order ?? 0);
    if (d !== 0) return d;
    return b.data.year.localeCompare(a.data.year);
  });
}

/**
 * 项目的 URL slug。
 * 兼容模式下 entry.id 会带 .md 后缀（跟文章是同一个坑），统一剥掉。
 */
export function projectSlug(project: Project): string {
  return project.id.replace(/\.(md|mdx)$/i, '');
}

export function projectPath(project: Project): string {
  return `/projects/${projectSlug(project)}/`;
}
