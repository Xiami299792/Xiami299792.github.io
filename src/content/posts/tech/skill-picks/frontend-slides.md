---
title: frontend-slides：让 Agent 用前端手艺做幻灯片
date: 2026-09-19
category: tech
section: hard
series: skill-picks
order: 2
part: 演示栏目
tags: [AI, Skill, 演示, 前端]
summary: "零依赖、单文件的 HTML 演示：动画丰富，双击即播，还能把 PPT 转过来。"
draft: true
---

<!--
  骨架：下面的简介是我照官方仓库（或本机 SKILL.md）写的研究结果，2026-09-19 核对。
  正文你自己写；建议围绕这四件事展开，写完把 draft 改成 false，本文就会出现在
  /series/skill-picks/ 的「演示栏目」里。写完可以删掉这段注释。

  1. 它解决什么类型的事（什么时候该想起它）
  2. 怎么装、怎么触发、大概成本
  3. 产出长什么样（贴一个你自己跑出来的例子）
  4. 什么时候别用它（边界与坑）
-->

**一句话**：让编码 Agent 直接做出**零依赖的单文件 HTML 演示**，动画丰富、双击就能播。

**它是什么**：一个 Agent 技能（一份结构化的 `SKILL.md` 指令集），把"做幻灯片"当成"写前端"来做——HTML 内联 CSS/JS，没有 npm、没有构建工具。几条硬规矩：演示稿必须是 **1920×1080 固定舞台整体缩放**（手机上也是 16:9，绝不为了适配而重排内容）；鼓励先给视觉预览让人挑，而不是问"你想要什么风格"；技能里专门写了一节反"AI 味"的设计要求（别再用 Inter / Roboto、别用紫渐变、别套模板化布局）。也支持把现成的 PPT/PPTX 转成网页版。

**上游**：[zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) · ⭐ 29,523 · 2026-09-19 核对
**本机**：已装（`~/.dsh/skills/frontend-slides`）
