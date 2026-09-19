---
title: Humanizer-zh：去掉中文里的 AI 味
date: 2026-09-19
category: tech
section: hard
series: skill-picks
order: 5
part: 演示栏目
tags: [AI, Skill, 写作]
summary: "按维基百科「AI 写作特征」清单，把机器味的中文改回人话。"
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

**一句话**：把 AI 生成的中文改写得更像人写的——照着维基百科的「Signs of AI writing」特征清单逐条清。

**它是什么**：核心文件翻译自 [blader/humanizer](https://github.com/blader/humanizer) 并升级到 v2.5.1，实用工具部分（核心规则、快速检查清单）参考了 [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop)；针对中文做了适配。适合三类用法：审 AI 写的稿子、给自己的文章降温、以及学习识别 AI 写作的常见套路。

**上游**：[Show-Chan97/Humanizer-zh](https://github.com/Show-Chan97/Humanizer-zh) · ⭐ 13 · MIT（原项目 blader/humanizer ⭐ 50,000）· 2026-09-19 核对
