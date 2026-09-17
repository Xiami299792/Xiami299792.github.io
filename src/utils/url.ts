/**
 * base 路径工具。
 * 所有站内绝对链接都过一遍 withBase()，
 * 这样从 GitHub 用户站换到项目站（或多绑一个子路径域名）时只改 consts.ts 一处。
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/')) path = `/${path}`;
  return `${base}${path}`;
}

/** 判断导航项是否处于激活状态 */
export function isActive(currentPath: string, href: string): boolean {
  const target = withBase(href);
  if (href === '/') {
    return currentPath === target || currentPath === target.replace(/\/$/, '');
  }
  return currentPath.startsWith(target);
}
