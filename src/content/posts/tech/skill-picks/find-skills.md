---
title: find-skills：让 Agent 帮你找技能
date: 2026-09-19
category: tech
section: hard
series: skill-picks
order: 9
part: 通用栏目
draft: true
---

<!--
  这一篇的正文已经写好了（简介与事实照官方仓库核对，2026-09-19）；
  标了「待补」的 HTML 注释处，是留给你的个人经历，我没有替你编。
  改完把 draft 改成 false 就会发布，并出现在 /series/skill-picks/ 的「通用栏目」下。
-->

技能生态已经大到一种程度：**你根本不知道有什么可用**。只知道有个东西能帮上忙，但不知道叫什么、在哪儿。

find-skills 解决的就是这个搜索问题。

## 它做什么

你问一句"有没有能 X 的技能？"，它去三个地方找：

1. 官方插件市场
2. GitHub
3. 社区整理的精选清单（awesome 列表一类）

然后**把你已经装过的剔掉**，返回最匹配的 **5 个**，每个都带链接。排序规则是先相关度、再热度。

它的边界也很清楚：**只推荐，不安装，不碰你的系统**。看完要不要装是你的事。

## 怎么装

```sh
git clone https://github.com/oleksbard/claude-find-skill.git
cp -R claude-find-skill/find-skill ~/.claude/skills/find-skill
```

放到用户级目录后，**每个项目里都能用**（不用每个仓库装一遍）。

## 怎么用

就是在任意会话里直接问：

```text
/find-skill is there a skill for writing changelogs?
/find-skill find me a skill that reviews terraform
/find-skill what skills exist for screenshots?
```

## 什么时候用

- **接到一个不熟悉的任务之前**先问一句：这事可能已经有现成技能了，比自己从头解释一遍要求强
- **定期扫一遍**：每隔一阵子问几个泛问题（"有没有管文档的""有没有管部署的"），慢慢把工具箱补齐
- 想给某个重复劳动找解法，但不知道关键词怎么写的时候

<!-- 待补：记一次它给你找出来、你真的装上了的技能，比空讲有用 -->

## 什么时候别用

- **它按热度排序**，而热不等于适合你。看到候选之后值得点进去看看：最近有没有更新、issue 里有没有人喊坑、许可证是什么
- **Windows 上有个已知问题**：`npx skills` 可能输出为空。遇到就用兼容版 [KimYx0207/findskill](https://github.com/KimYx0207/findskill)（⭐ 112）
- **它是搜索，不是评估**。五个候选里哪个真能用、有没有偷偷读你的文件，得你自己看 `SKILL.md`
- 技能装多了是负担。一次装一个，用不上就删

**上游**：[oleksbard/claude-find-skill](https://github.com/oleksbard/claude-find-skill) · ⭐ 10 · MIT · 2026-09-19 核对
