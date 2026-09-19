---
title: PPT Master：把文档直接变成真的 PPTX
date: 2026-09-19
category: tech
section: hard
series: skill-picks
order: 3
part: 演示栏目
draft: false
---

让 AI 做 PPT 早就不新鲜了。但多数工具给你的是一堆图片，想改一个字都得重新生成。

PPT Master 的卖点只有一句，它给你真的 PowerPoint。

## 真的到什么程度

它交付的是 PowerPoint 的原生对象模型，而且做得挺深。

原生形状和连接线，调整手柄是能用的。按需生成带数据的图表和表格。完整的文字、图片、填充、效果模型，点任何一个元素都能继续用 PowerPoint 原生方式改。走模板路线的时候，它还能给出带母版和版式的文件，`p:sldMaster` 和 `p:sldLayout` 的继承关系是真的。

作者很坦诚，专门写了一份 PowerPoint 和 SVG 的能力对照文档，逐项说明现在覆盖到哪。

这种事很少有人愿意做。

这种事很少有人愿意做。并且明确说 SmartArt 是故意不做的。不是缺口，是选择。这种把边界写在明面上的做法，我挺欣赏。

## 四条使用路线

主流程是从文档生成，丢一个 PDF、DOCX、网页或者干脆一句话题目进去。

另外三条，从参考资料里提炼模板，把品牌、风格、版式、整套结构抽出来复用。往已有 `.pptx` 里填内容，保留原设计只换内容，每条路线都写明哪些东西会被保留。还有给成品加原生的转场、动画和旁白，旁白可以直接从讲者备注生成。

## 三个承诺

| 承诺 | 具体是 |
| --- | --- |
| 成本透明 | 免费开源，只花模型的钱，不再叠一层 PPT 订阅 |
| 数据留在本机 | 除了和模型通信，整条流水线都在你机器上跑 |
| 不锁平台 | Claude、GPT、Gemini、Kimi 都能驱动，任何支持 Agent 的 IDE 都行 |

你需要做的就三件事，装 Python、装一个能跑 Agent 的工具（Claude Code、Codex、Cursor 都行）、把素材丢进去。

<!-- 待补：放一份你自己生成的 pptx，截图加一句你改了哪里。最好挑那种「本来以为要重做」的页面 -->

## 什么时候别用它

README 里有一句话我印象很深，这是工具，不是许愿池。素材越糊，出来的越糊，这点它自己不装。

它要装 Python 环境，比纯网页类的技能门槛高一点。需要 SmartArt 的场景它明确不做。如果只是想快速贴个图、凑两页交差，手做反而更快。

**上游**：[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) · ⭐ 55,227 · MIT · 2026-09-19 核对

## 怎么装

也是让 Agent 自己来。跟它说一句。

```text
帮我安装这个 skill：https://github.com/opencentra/ppt-master-skill
```

装好之后直接说「帮我把这份 PDF 做成 PPT」。唯一需要你自己动手的是本机先有 Python，这个 Agent 装不了。
