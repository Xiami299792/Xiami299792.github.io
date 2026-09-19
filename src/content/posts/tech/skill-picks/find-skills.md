---
title: find-skills：让 Agent 帮你找技能
date: 2026-09-19
category: tech
section: hard
series: skill-picks
order: 9
part: 通用栏目
tags: [AI, Skill, 检索]
summary: "问一句「有没有能 X 的技能」，它去市场、GitHub 和清单里找，排掉你已装的，给前 5 个。"
draft: true
---

<!--
  骨架：下面的简介是我照官方仓库（或本机 SKILL.md）写的研究结果，2026-09-19 核对。
  正文你自己写；建议围绕这四件事展开，写完把 draft 改成 false，本文就会出现在
  /series/skill-picks/ 的「通用栏目」里。写完可以删掉这段注释。

  1. 它解决什么类型的事（什么时候该想起它）
  2. 怎么装、怎么触发、大概成本
  3. 产出长什么样（贴一个你自己跑出来的例子）
  4. 什么时候别用它（边界与坑）
-->

**一句话**：问一句"有没有能 X 的技能？"，它去**官方插件市场 + GitHub + 精选清单**里搜，**排掉你已经装过的**，返回最匹配的 5 个和链接。

**它的边界**：只推荐，**不安装、不碰你的系统**；排序先看相关度、再看热度。

**一个坑**：Windows 上用它可能遇到 `npx skills` 输出为空，可以用兼容版 [KimYx0207/findskill](https://github.com/KimYx0207/findskill)（⭐ 112）。

**上游**：[oleksbard/claude-find-skill](https://github.com/oleksbard/claude-find-skill) · ⭐ 10 · MIT · 2026-09-19 核对
