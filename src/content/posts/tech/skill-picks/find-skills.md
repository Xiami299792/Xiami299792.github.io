---
title: find-skills：寻找技能的技能
date: 2026-09-19
category: tech
section: hard
series: skill-picks
order: 8
part: 通用栏目
draft: false
---

技能生态已经大到一种程度，你根本不知道有什么可用。

只知道有个东西能帮上忙，但不知道叫什么，也不知道在哪儿。find-skills 解决的就是这个搜索问题。

## 它做什么

你问一句有没有能做什么事的技能，它去三个地方找。

官方插件市场，GitHub，还有社区整理的精选清单。然后把你已经装过的剔掉，返回最匹配的 5 个，每个都带链接。排序规则是先相关度，再热度。

它的边界也很清楚，只推荐，不安装，不碰你的系统。看完要不要装是你的事。这种克制的设计我挺欣赏，很多工具的通病就是恨不得替你操作完。

## 怎么装

让 Agent 自己装。

```text
帮我安装这个 skill：https://github.com/oleksbard/claude-find-skill
```

放到用户级目录之后，每个项目里都能用，不用每个仓库装一遍。

## 怎么用

就是在任意会话里直接问。

```text
/find-skill is there a skill for writing changelogs?
/find-skill find me a skill that reviews terraform
/find-skill what skills exist for screenshots?
```

## 什么时候用

接到一个不熟悉的任务之前先问一句。这事可能已经有现成技能了，比自己从头解释一遍要求强得多。

再就是定期扫一遍。每隔一阵子问几个泛问题，有没有管文档的、有没有管部署的，慢慢把工具箱补齐。

<!-- 待补：记一次它给你找出来、你真的装上了的技能。比空讲有用 -->

## 什么时候别用

它按热度排序，而热不等于适合你。看到候选之后值得点进去看看，最近有没有更新，issue 里有没有人喊坑，许可证是什么。

Windows 上有个已知问题，`npx skills` 可能输出为空。遇到就用兼容版 KimYx0207/findskill，112 个 star。

它是搜索，不是评估。五个候选里哪个真能用，有没有偷偷读你的文件，得你自己看 `SKILL.md`。

还有，技能装多了是负担。一次装一个，用不上就删。这话我也得跟自己说一遍。

**上游**：[oleksbard/claude-find-skill](https://github.com/oleksbard/claude-find-skill) · ⭐ 10 · MIT · 2026-09-19 核对
