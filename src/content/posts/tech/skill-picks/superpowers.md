---
title: Superpowers：给编码 Agent 装一套工程方法论
date: 2026-09-19
category: tech
section: hard
series: skill-picks
order: 6
part: 代码栏目
tags: [AI, Skill, 工程, 工作流]
summary: "从问清需求到收尾合并，15+ 个可组合技能强制 Agent 按工程流程走。"
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

**一句话**：不是让 Agent 更快写代码，而是让它**先想清楚再写**——一整套可组合的软件开发方法论。

**它的流程**（每个环节都是一个独立技能）：

1. `brainstorming` —— 动手前先问你到底要什么，把设计分块给你确认，存成设计文档
2. `using-git-worktrees` —— 开隔离工作区、跑通基线测试
3. `writing-plans` —— 拆成 2~5 分钟一个的小任务，每个任务都写清文件路径、完整代码和验证步骤
4. `subagent-driven-development` / `executing-plans` —— 每个任务派一个全新 subagent + 两段审查，或在当前会话里逐个做、最后整体审一次（最省）
5. `test-driven-development` —— 强制红-绿-重构，**在测试之前写的代码会被删掉**
6. `requesting-code-review` —— 按严重度报问题，致命问题直接卡住进度
7. `finishing-a-development-branch` —— 验证测试、给出合并/PR/保留/丢弃的选择

另外还有 `systematic-debugging`（四阶段根因定位）、`verification-before-completion`、`writing-skills` 等。支持 Claude Code、Codex、Cursor、Gemini CLI 等 16 种 Agent。

**上游**：[obra/superpowers](https://github.com/obra/superpowers) · ⭐ 288,593 · MIT · 2026-09-19 核对
