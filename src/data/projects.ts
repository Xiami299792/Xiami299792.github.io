/**
 * 项目清单。
 *
 * 只登记「这是什么项目」——不写介绍、不写描述、不生成详情页。
 * 卡片上只有名字、年份和技术标签，点进去就是成品本身。
 * 要加项目就往下面的数组里加一条。
 */

export type Project = {
  /** 项目名 */
  title: string;
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
    year: '2026',
    href: '/quiz/',
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: '站内可玩',
  },
];
