---
title: Superpowers：给编码 Agent 装一套工程方法论
date: 2026-09-19
category: tech
section: hard
series: skill-picks
order: 6
part: 代码栏目
draft: true
---

<!--
  这一篇的正文已经写好了（简介与事实照官方仓库核对，2026-09-19）；
  标了「待补」的 HTML 注释处，是留给你的个人经历，我没有替你编。
  改完把 draft 改成 false 就会发布，并出现在 /series/skill-picks/ 的「代码栏目」下。
-->

Agent 写代码最大的问题，往往不是"不会写"，而是**太急着写**。你话还没说完，它已经生成了三个文件。

Superpowers 就是冲这件事来的：它不提升 Agent 的编码能力，它改变的是一件更根本的事——**先想清楚，再动手**。

## 一条完整的流程

它把软件工程拆成一串可以组合的技能，每个环节都是独立的一份说明书：

| 顺序 | 技能 | 干什么 |
| --- | --- | --- |
| 1 | `brainstorming` | 动手前先问你到底要什么，把设计分块给你确认，存成设计文档 |
| 2 | `using-git-worktrees` | 开一个隔离的工作区，跑通基线测试再开始 |
| 3 | `writing-plans` | 拆成 2~5 分钟一个的小任务，每个都写清文件路径、完整代码、验证步骤 |
| 4 | `subagent-driven-development` / `executing-plans` | 每个任务派一个全新 subagent 加两段审查（最彻底），或在当前会话里逐个做、最后整体审一次（最省） |
| 5 | `test-driven-development` | 强制红-绿-重构（下一篇细讲） |
| 6 | `requesting-code-review` | 对着计划审查，按严重度报问题，**致命问题直接卡住进度** |
| 7 | `finishing-a-development-branch` | 验证测试，给出合并 / PR / 保留 / 丢弃的选择，清理工作区 |

计划那一环写得很到位：它的标准是"**一个热情但没品味、没判断力、不了解项目、还讨厌写测试的初级工程师照着也能做对**"。

除了主流程，还有一批配套技能：`systematic-debugging`（四阶段根因定位，含根因追踪、纵深防御、条件等待）、`verification-before-completion`（确保真的修好了）、`receiving-code-review`（怎么回应评审意见）、`dispatching-parallel-agents`（并发 subagent）、`writing-skills`（按最佳实践写新技能）。

## 四条哲学

README 里列得很清楚，也解释了它为什么这么设计：

- **TDD**：永远先写测试
- **系统化优于临时应付**：流程优于猜
- **降低复杂度**：简单是首要目标
- **证据优于声明**：宣布成功之前先验证

## 怎么装

Claude Code 有两条路：

```text
# 官方插件市场
/plugin install superpowers@claude-plugins-official

# 作者自己的市场
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```

它另外支持 Codex、Cursor、Gemini CLI、Copilot CLI、OpenCode、Qwen Code、Kimi Code 等十几种工具，各自的安装命令 README 里都列了。装完发一句 `Let's make a react todo list` 验证：**能在写代码前自动触发 `brainstorming`**，就说明装对了。

<!-- 待补：放一次你实际用它的记录（比如"它先问了我 7 个问题，最后交出的计划长这样"），比任何介绍都有说服力 -->

## 什么时候别用

- **小改动别走全流程**。改一行文案也让 Agent 走一遍 brainstorm→plan→subagent 审查，纯属浪费时间；它自己也把"一次性原型"列进 TDD 的例外
- **subagent 模式很贵**。每个任务一个新上下文 + 两段审查，token 消耗明显高于直接做
- **它是一套约定，不是自动化**。288,593 个 star 说明认可它的人多，但流程再全，判断还是你的——计划写歪了，后面每一步都会认真地歪下去
- 顺手说一句：网上有文章写"25 万 Star 的 Superpowers"，实测是 **288,593**，那篇还说少了

**上游**：[obra/superpowers](https://github.com/obra/superpowers) · ⭐ 288,593 · MIT · 2026-09-19 核对
