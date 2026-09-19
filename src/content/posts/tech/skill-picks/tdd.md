---
title: TDD：先写一个会失败的测试
date: 2026-09-19
category: tech
section: hard
series: skill-picks
order: 7
part: 代码栏目
tags: [AI, Skill, 测试, TDD]
summary: "Superpowers 里的测试驱动技能：红-绿-重构，没测试先写的代码会被删掉。"
draft: true
---

<!--
  骨架：下面的简介是我照官方仓库（或本机 SKILL.md）写的研究结果，2026-09-19 核对。
  正文你自己写；建议围绕这四件事展开，写完把 draft 改成 false，本文就会出现在
  /series/skill-picks/ 的「代码栏目」里。写完可以删掉这段注释。

  1. 它解决什么类型的事（什么时候该想起它）
  2. 怎么装、怎么触发、大概成本
  3. 产出长什么样（贴一个你自己跑出来的例子）
  4. 什么时候别用它（边界与坑）
-->

**一句话**：Superpowers 里的 `test-driven-development` 技能——实现之前先写测试，而且**要亲眼看它失败**。

**它怎么执行**：写一个会失败的测试 → 运行、确认它真的失败 → 写刚好能让它通过的最小实现 → 运行、确认通过 → 提交。技能里最狠的一条是：**在测试之前写下的代码会被删掉**。自带一份"测试反模式"参考，用来识别假测试（比如断言写得太松、测实现细节而不是行为）。

**为什么单独拎出来讲**：它和 `superpowers` 里其它技能是配套的——设计（brainstorming）→ 计划（writing-plans）→ 实现（本技能）→ 审查（requesting-code-review）。单独装也行，但配合起来才完整。

**上游**：[obra/superpowers](https://github.com/obra/superpowers)（`test-driven-development` 技能）· ⭐ 288,593 · MIT · 2026-09-19 核对
