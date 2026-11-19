---
title: "arXiv Agent 与大模型研究简报｜2026-11-19｜入选论文全览"
author: "Thundax"
summary: "本期关注两件事：怎样减少语言模型生成的计算与存储开销，以及怎样判断核验步骤真的提高了可靠性。效率论文要看硬件、训练规模和比较基准；可靠性论文则提醒我们，把来源选择、报告表述、接口故障与模型行为分别测清楚。"
description: "本期关注两件事：怎样减少语言模型生成的计算与存储开销，以及怎样判断核验步骤真的提高了可靠性。效率论文要看硬件、训练规模和比较基准；可靠性论文则提醒我们，把来源选择、报告表述、接口故障与模型行为分别测清楚。"
---

# arXiv Agent 与大模型研究简报｜2026-11-19｜入选论文全览

本期关注两件事：怎样减少语言模型生成的计算与存储开销，以及怎样判断核验步骤真的提高了可靠性。效率论文要看硬件、训练规模和比较基准；可靠性论文则提醒我们，把来源选择、报告表述、接口故障与模型行为分别测清楚。

本期入选论文全览。

## 智能体系统与工具使用

### 把异步反应收进目标计划，让智能体知道为何响应

Encapsulating Reactive Behaviour in Goal-based Plans for Programming BDI Agents

🌟

传统信念—愿望—意图智能体常把事件反应与目标计划分散定义。作者将子计划、完成条件和反应规则封装进同一目标作用域，并扩展两个解释器。合同网实验显示可线性扩展且优于原版，但性能证据限于特定程序，代码地址仍为占位，也未验证语言模型工作流。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23496)

## 大模型推理与规划

### 投机解码的草稿模型，可以比目标模型更窄

NarrowSpec: Draft Hidden Width Need Not Match the Target in Speculative Decoding

🌟🌟🌟

使用目标隐藏状态的草稿模型常继承目标宽度。这项研究从头训练半宽或四分之一宽草稿，并合并边界投影以减少计算。相对完整宽度草稿，两类方法在两目标上都有解码收益，低带宽设备更明显。但每变体只有一次训练，键值注意力未缩小，超长上下文收益尚不清楚。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23835)

### 模型表示了规则和证据，不代表输出就会遵守

A Mechanistic Analysis of In-Context Learning and Out-of-Context Hallucination

🌟🌟

作者通过匹配反事实和激活干预，分析规则与证据片段如何影响关键词元。结果表明，相关信息即使已在内部表示，也需要足够、方向一致的贡献才能改变选择；增强贡献可修复部分事实错误。实验限于三个中小开放模型及受控任务，尚不是通用幻觉修复方案。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24000)

## 多智能体与协作

### 错误信念一旦站稳，更多推理未必能把它拉回来

Tracking Representations in LLM Reasoning Traces for Iterated Games

🌟🌟

研究在重复博弈中逐句追踪对手判断与行动，并结合句子消融及内部激活读出，发现错误假设可能自我强化。对以牙还牙对手，最终判断错误的轮次中有九成多曾出现正确判断。不过，实验仅使用一个模型及固定策略对手，最近十轮历史也可能不足以唯一识别对手。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23403)

### 同样的需求种子，也未必得到同样的多智能体供应链

MANGO Arena: Same Seeds, Different Chains Evaluating LLM Agents in a Disrupted Supply Chain

🌟🌟

四个语言模型智能体经营串联供应链，试点出现明显订单波动放大。更关键的是，调用失败曾被算成不下单；即使没有失败，同种子重复运行的上游波动也相差约十七倍。样本仅三种子，无法据此稳定排名模型，但对区分环境故障、真实动作和运行不确定性很有启发。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23613)

## 大模型训练与对齐

### 让各层共用词组记忆，同时保留各自的读取方式

Chorus: Shared N-gram Embeddings with Layer-wise Adaptation

🌟🌟🌟

词组查表能增加语言模型容量，但逐层建表浪费内存。这项研究将词元和词组表示共享，再让各层依当前状态缩放、投影。在小主干实验中，十二亿表参数的预测损失优于九十六亿参数对照；优化器状态也显著减少。不过，最大主干仅一亿三千三百万参数，尚不能推断大模型的收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23386)

### 让扩散语言模型学会插入和删除，修复整段错位

Beyond Replacement: Levenshtein Editing for Diffusion Language Models

🌟🌟🌟

扩散生成只替换词元时，漏字或多字会让后续位置整体错位。作者用序列对齐生成插入删除监督，再让模型多阶段修复自己的中间结果。十二基准平均分由五十四点八六升至五十七点一，并行程度也提高；不过只测一个底座，超大生成块仍明显退化，尚无实际延迟结论。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23750)

## 评测与安全

### 模型认定问题尚未解决，却把新研究说得像旧工作

Language Models Make New Research Sound Old

🌟🌟🌟

论文将普通科研建议与独立的“是否已有研究”判断对照，发现模型常夸大相关论文的覆盖。在四十个新论文问题上，一款模型独立判断百分之九十八尚未研究，却仅百分之八明确说明；逐篇核查后重建答案可缓解。但开放标签和回答判定存在不确定性，真实研究者决策尚未测量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23546)

### 要求核验资料时，也要看提示把谁设为优先来源

FutureBench: A Renewable Framework for Evaluating Knowledge-Context Conflict in LLMs

🌟🌟🌟

研究用真实、伪造和信息不足的片段测试知识冲突，发现“核验且优先片段”可能替换模型原本正确的答案。但单独比较时，核验也能降低片段优先带来的错误采纳。结论提醒我们分开评估核验与来源优先级；实验限于英文单段问答，不能直接代表真实检索系统。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23601)

### 生成的金融因果解释，能为预测增加多少信息

Can LLMs Understand What They Predict? Evaluating Latent Causal Structure Inference in Financial Markets

🌟🌟

研究让六种模型根据新闻事件与历史市场数据生成传播图，再检验图能否改善固定预测器的重建。多数图未胜过仅用历史观测，还出现关系重复和解释与方向矛盾。其价值在于检验解释的增量效用，但预测好坏并不直接证明因果图正确，结论也依赖评估器。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23533)

### 匿名化工具换了语言和地区，保护效果可能跟着变

Localizing Text Anonymization for Trustworthy AI: Extending RAT-Bench to Malaysian Microdata and PII

🌟🌟

研究把人口参照、身份格式和对话语言本地化到马来西亚，用模型攻击者测量匿名化后的重识别。语言模型匿名器在两语言显式条件下表现较好，但仍有百分之二十三至二十九的成功识别。测试仅一百个高风险合成记录，效用主要看词面相似，不能当作总体实际泄漏率。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23704)

## 应用与基准

### 先检验偏好能否还原历史，再决定是否重新生成

ReflectRec: Cycle-Consistency Preference Verification for LLM-based Recommendation

🌟🌟

推荐管线将偏好文本反向用于找回历史物品，以召回率触发再生成，并检索相似用户的后续行为。完整方案胜过所比语言模型基线，但单独检索解码更强，再生成的总体增益很小；严格时间截断后，百万规模电影数据上的检索增益不显著。中间表示核验值得借鉴，效果不能过度归因。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23969)
