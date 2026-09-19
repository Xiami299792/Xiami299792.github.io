---
title: Humanizer-zh：去掉中文里的 AI 味
date: 2026-09-19
category: tech
section: hard
series: skill-picks
order: 5
part: 演示栏目
draft: true
---

<!--
  这一篇的正文已经写好了（简介与事实照官方仓库核对，2026-09-19）；
  标了「待补」的 HTML 注释处，是留给你的个人经历，我没有替你编。
  改完把 draft 改成 false 就会发布，并出现在 /series/skill-picks/ 的「演示栏目」下。
-->

AI 写的中文有一股味。不是错，是**太顺**：三个字一断句、爱用排比、爱在段末总结一句"综上所述"、爱写"值得注意的是""不仅…而且…"。

Humanizer-zh 干的就是把这种味道清掉。

## 它是什么

一份**清单式**的技能：核心文件翻译自 [blader/humanizer](https://github.com/blader/humanizer) 并升级到 v2.5.1，实用工具部分（核心规则、快速检查清单）参考了 [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop)。它照的底本是维基百科的 [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) 指南——那是一条条具体特征，不是"感觉不对"。

三种用法：

1. **审稿** —— 让它标出哪些句子像 AI 写的，你自己决定改不改
2. **降温** —— 把整段丢进去，让它按清单重写
3. **学识别** —— 读它的清单，下次自己一眼看出来

## 怎么装

```bash
# 最省事：一条命令装到正确目录
npx skills add https://github.com/Show-Chan97/Humanizer-zh.git

# 或者手动 clone
git clone https://github.com/Show-Chan97/Humanizer-zh.git ~/.claude/skills/Humanizer-zh
```

OpenCode 用户放 `~/.config/opencode/skills/` 也行（它也会扫 `~/.claude/skills/`，所以只克隆一次就够）。

<!-- 待补：贴一段"改前 / 改后"的对照，这是这篇最有说服力的部分 -->

## 什么时候别用它

- **它是去痕，不是变好**。把 AI 味去掉，不会自动让文章有观点；一篇没观点的稿子洗干净了还是没观点
- **用过头会磨平你自己的语气**。它的目标是"像人写的"，不是"像你写的"——最后一遍最好自己过
- **别拿它做不该做的事**。比如把 AI 生成的课程论文洗一遍交上去，这属于学术诚信问题，技能本身没问题，用法有问题
- 已经是你自己手写的东西，别丢进去——它会照清单改掉你本来有意为之的重复和短句

**上游**：[Show-Chan97/Humanizer-zh](https://github.com/Show-Chan97/Humanizer-zh) · ⭐ 13 · MIT（原项目 blader/humanizer ⭐ 50,000）· 2026-09-19 核对
