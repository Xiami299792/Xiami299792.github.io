import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../consts';
import { getPublishedPosts, postPath } from '../utils/posts';
import { withBase } from '../utils/url';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    trailingSlash: true,
    customData: `<language>${SITE.lang}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary ?? '',
      link: withBase(postPath(post)),
      categories: [post.data.category, ...post.data.tags],
    })),
  });
}
