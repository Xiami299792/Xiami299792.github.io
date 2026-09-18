/**
 * 项目清单。
 *
 * 项目只在这里登记元信息，卡片直接链到项目本身 —— 不再写介绍文档、
 * 也不生成详情页。要加项目就往下面的数组里加一条。
 */

export type Project = {
  /** 项目名 */
  title: string;
  /** 一句话说明，卡片上显示一行 */
  summary: string;
  /** 年份 */
  year: string;
  /** 站内路径（如 /quiz/）或外链 */
  href: string;
  /** 外链才需要置 true，会新开标签页 */
  external?: boolean;
  /** 技术栈，做成小标签 */
  stack: string[];
  /** 状态，如「站内可玩」「已归档」 */
  status?: string;
};

export const PROJECTS: Project[] = [
  {
    title: '军事理论刷题',
    summary: '把群里的 PDF 题库做成手机上点开就能刷的网页，不用注册、不用装 App。',
    year: '2026',
    href: '/quiz/',
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: '站内可玩',
  },
];
