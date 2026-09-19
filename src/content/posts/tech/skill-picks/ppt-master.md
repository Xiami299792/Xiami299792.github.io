---
title: PPT Master：把文档直接变成真的 PPTX
date: 2026-09-19
category: tech
section: hard
series: skill-picks
order: 3
part: 演示栏目
draft: true
---

<!--
  这一篇的正文已经写好了（简介与事实照官方仓库核对，2026-09-19）；
  标了「待补」的 HTML 注释处，是留给你的个人经历，我没有替你编。
  改完把 draft 改成 false 就会发布，并出现在 /series/skill-picks/ 的「演示栏目」下。
-->

让 AI 做 PPT 早就不新鲜了，但多数工具给你的是一堆**图片**——想改一个字都得重新生成。PPT Master 的卖点只有一句：给你**真的 PowerPoint**。

## "真的"到什么程度

它交付的是 PowerPoint 的原生对象模型，而且做得挺深：

- 原生形状和连接线，**调整手柄是能用的**
- 按需生成**带数据的图表**和表格
- 完整的文字 / 图片 / 填充 / 效果模型——点任何一个元素都能继续用 PowerPoint 原生方式改
- 走模板路线时，能给出带**母版和版式**的文件（`p:sldMaster` / `p:sldLayout` 继承关系是真的）

作者很坦诚地写了一份「PowerPoint ↔ SVG 能力对照」文档，逐项说明现在覆盖到哪；并且明确说 **SmartArt 是故意不做的**——不是缺口，是选择。

## 四条使用路线

1. **从文档生成**（主流程）：丢一个 PDF / DOCX / 网页 / 一句话题目进去
2. **从参考资料提炼模板**：把品牌、风格、版式、整套 deck 结构抽出来复用
3. **往已有 `.pptx` 里填内容**：保留原设计，只换内容，每条路线都写明"哪些东西会被保留"
4. **给成品加原生转场、动画和旁白**（旁白可以直接从讲者备注生成）

## 三个承诺

| 承诺 | 具体是 |
| --- | --- |
| 成本透明 | 免费开源，只花模型的钱，不再叠一层 PPT 订阅 |
| 数据留在本机 | 除了和模型通信，整条流水线都在你机器上跑 |
| 不锁平台 | Claude、GPT、Gemini、Kimi 都能驱动，任何支持 Agent 的 IDE 都行 |

你只需要做三件事：**装 Python、装一个 AI 工具、把素材丢进去。**

<!-- 待补：放一份你自己生成的 pptx，截图 + 说明改动了哪里 -->

## 什么时候别用它

- 作者自己在 README 里写了一句话："**这是工具，不是许愿池**"（`harness + model = agent`）。素材越糊，出来的越糊
- 要装 Python 环境，比纯网页类技能门槛高一点
- 需要 SmartArt 的场景它明确不做
- 只想快速贴个图、做两页凑数的话，直接手做更快

**上游**：[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) · ⭐ 55,227 · MIT · 2026-09-19 核对
给 Claude Code 的封装：[opencentra/ppt-master-skill](https://github.com/opencentra/ppt-master-skill)
