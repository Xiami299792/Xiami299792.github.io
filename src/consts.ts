/**
 * 站点级配置 —— 上线前只需要改这个文件
 */

export const SITE = {
  /** 浏览器标签页 / 站内显示的名字 */
  title: '新世界 · 科学与文化',
  /** 顶栏左上角用的短名 —— 全名太长，栏目页挤不下 */
  shortTitle: '新世界',
  /** 首页副标题（已不拼进 <title>，站名自己就是一句话；留着备用） */
  subtitle: '科学与文化',
  /** SEO 描述 + RSS 描述 */
  description: '一个记录技术学习与日常思考的个人博客。',
  author: '夏弥',
  lang: 'zh-CN',

  /**
   * 部署后的站点地址。
   * GitHub 用户站（仓库名 = 你的用户名.github.io）填：https://你的用户名.github.io
   * 绑了自定义域名就填：https://blog.你的域名.com
   */
  url: 'https://xiami299792.github.io',

  /**
   * 用户站填 '/'；
   * 项目站（仓库名如 blog，网址形如 用户名.github.io/blog）必须填 '/blog/'
   */
  base: '/',
} as const;

/** 两条内容线：技术 / 随笔 */
export const CATEGORIES = {
  tech: {
    key: 'tech',
    label: '技术',
    description: '把技术讲明白，写给不打算成为专家的人。',
  },
  essay: {
    key: 'essay',
    label: '随笔',
    description: '日常、阅读，以及一些没什么用但想说的想法。',
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

/**
 * 技术分类下的两个板块 —— 首页和分类页都按它分组，不混在一起。
 * 文章 frontmatter 里写 section: 'soft' | 'hard'。
 */
export const TECH_SECTIONS = {
  soft: {
    key: 'soft',
    label: '软科普',
    hint: '讲原理、讲来龙去脉',
  },
  hard: {
    key: 'hard',
    label: '硬指南',
    hint: '手把手、可照着做',
  },
} as const;

export type TechSectionKey = keyof typeof TECH_SECTIONS;

/**
 * 系列文章。
 *
 * 和分类的区别：分类是「内容属于哪个栏目」，系列是「这几篇要按顺序读」。
 * 文章 frontmatter 里写 series: 'dsh-guide' + order: 3 就会自动串成上下章导航，
 * 并在 /series/dsh-guide/ 生成系列目录页。
 */
export const SERIES = {
  'dsh-guide': {
    title: 'DSH 使用指南（大一新生版）',
    subtitle: '从装上到用明白',
    description:
      '一本写给大一新生的 DeepSeek Harness 入门手册：怎么装、怎么配、怎么把话说清楚，最后做出一个真有人在用的东西。',
    author: '夏弥',
    note: '应睿信科协邀请写作，核对于 2026 年 9 月。',
  },
} as const;

export type SeriesKey = keyof typeof SERIES;

/** 顶部导航（路径不要带 base，代码里会自动补） */
export const NAV = [
  { href: '/', label: '首页' },
  { href: '/projects/', label: '项目' },
  { href: '/series/', label: '系列' },
  { href: '/archive/', label: '归档' },
  { href: '/search/', label: '搜索' },
  { href: '/about/', label: '关于' },
] as const;

/**
 * 评论：Giscus（基于 GitHub Discussions，零后端零成本）
 *
 * 现状：repoId 已填（取自 GitHub API 的仓库 node_id）。
 * 还差两步，都需要仓库管理权限，只能由站长本人做：
 *   1. 仓库 Settings → General → Features 勾选 Discussions
 *   2. 安装 Giscus App：https://github.com/apps/giscus
 *   3. 打开 https://giscus.app/zh-CN 填入仓库名，复制生成的 categoryId 填到下面
 *   4. 把 enabled 改成 true
 *
 * 未配置时评论区整块不渲染（访客看不到半成品）。
 */
export const GISCUS = {
  enabled: false,
  repo: 'Xiami299792/Xiami299792.github.io',
  repoId: 'R_kgDOUeex_g',
  category: 'Announcements',
  categoryId: '',
  mapping: 'pathname',
  lang: 'zh-CN',
} as const;
