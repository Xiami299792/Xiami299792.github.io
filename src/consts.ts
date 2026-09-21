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

/** 三条内容线：技术 / 随笔 / 伴学 */
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
  study: {
    key: 'study',
    label: '伴学',
    description: '课堂笔记与整理，一门课一门课地记下去。',
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
  'skill-picks': {
    title: 'Skill 推荐',
    // 下面三句（副标题、系列简介、说明）留空给作者自己写。
    // 空着不会渲染空框：系列页只在有内容时才显示简介块，副标题也会自动省略分隔符。
    subtitle: '',
    description: '',
    author: '夏弥',
    note: '',
  },
  'math-analysis': {
    title: '工科数学分析',
    subtitle: '课堂笔记整理',
    description: '',
    author: '夏弥',
    note: '',
  },
  'c-programming': {
    title: 'C 语言程序设计',
    subtitle: '课堂笔记整理',
    description: '',
    author: '夏弥',
    note: '',
  },
} as const;

export type SeriesKey = keyof typeof SERIES;

/** 顶部导航（路径不要带 base，代码里会自动补） */
export const NAV = [
  { href: '/', label: '首页' },
  { href: '/projects/', label: '项目' },
  { href: '/archive/', label: '归档' },
  { href: '/search/', label: '搜索' },
  { href: '/about/', label: '关于' },
] as const;

/**
 * 评论：Giscus（基于 GitHub Discussions，零后端零成本）
 *
 * 为什么是它：这个站点是 GitHub Pages 纯静态托管，没有任何后端，
 * 评论必须有地方收和存。Giscus 把这件事交给仓库自带的 Discussions，
 * 于是不需要数据库、不需要服务器、不会挂、也不花钱。
 *
 * 代价：评论者需要 GitHub 账号并授权 giscus app。
 * 若要「不登录、只填昵称」的评论，得另起一个后端（如 Supabase），
 * 前端换掉 components/Giscus.astro 即可，consts 里这块不用动。
 *
 * 三项前置条件（缺一项 giscus.app 就会报「无法在该仓库上使用」）：
 *   1. 仓库是公开的
 *   2. 仓库 Settings → General → Features 勾上 Discussions
 *   3. 安装 giscus app：https://github.com/apps/giscus
 * 分类选 Announcements，因为公告类下只有维护者和 giscus 能建帖，
 * 访客照样能评论和点反应，只是不能在你仓库里乱开帖。
 */
export const GISCUS = {
  enabled: true,
  repo: 'Xiami299792/Xiami299792.github.io',
  repoId: 'R_kgDOUeex_g',
  category: 'Announcements',
  categoryId: 'DIC_kwDOUeex_s4DGAEu',
  mapping: 'pathname',
  lang: 'zh-CN',
} as const;

/**
 * 评论：Waline（免登录，只填昵称）
 *
 * 未启用。留在这儿是因为它是「不登录也能评论」的现成方案，
 * 组件也写好了（components/Comment.astro），前端不用重写。
 *
 * 服务端不在这个仓库里。GitHub Pages 不跑代码，Waline 必须另有地方部署。
 * 已知走不通的路：Vercel 对部分地区返回 403；腾讯云开发的一键部署模板
 * 依赖 2022 年就停更的 @waline/cloudbase，本地装依赖会卡在 better-sqlite3
 * 的原生编译。若将来要启用，优先考虑 Supabase 自建一个轻量后端。
 *
 * 免登录同样是两处开关：组件里的 login: 'disable'，加上服务端的 LOGIN=disable。
 * 只配一处不生效。
 */
export const WALINE = {
  serverURL: '',
  lang: 'zh-CN',
  /** 同一浏览器只记一个昵称，见 Comment.astro 的昵称锁定说明 */
  lockNickname: true,
} as const;
