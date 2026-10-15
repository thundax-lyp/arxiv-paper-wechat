---
title: "arXiv Agent 与大模型研究简报｜2026-10-15｜入选论文全览 2/2"
author: "Thundax"
summary: "本期关注智能体如何把证据、协作与交付接成完整闭环：发现冲突之后是否真正修复，记忆带来的增益究竟来自哪里，以及长会话的计算能否少做重复工作。另有技能学习、推理压缩和训练评测的新方法。"
description: "本期关注智能体如何把证据、协作与交付接成完整闭环：发现冲突之后是否真正修复，记忆带来的增益究竟来自哪里，以及长会话的计算能否少做重复工作。另有技能学习、推理压缩和训练评测的新方法。"
---

# arXiv Agent 与大模型研究简报｜2026-10-15｜入选论文全览 2/2

本期关注智能体如何把证据、协作与交付接成完整闭环：发现冲突之后是否真正修复，记忆带来的增益究竟来自哪里，以及长会话的计算能否少做重复工作。另有技能学习、推理压缩和训练评测的新方法。

本期入选论文全览。

## 评测与安全

### 移除记忆后掉分，不能证明这份记忆真的有用

Evaluating Compressed Memory: Dependence, Utility, and Content Benefit

🌟🌟🌟

模型依赖记忆，与记忆优于替代方案，是两件事。研究同时使用置零、独立训练的无记忆模型、常数输入及跨文档交换作对照。在科学问答中，部分置零损失也可由不含当前文档事实的常数输入恢复。结果没有否定记忆，而是要求将依赖、实际效用和内容净收益分开报告。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19373)

### 模型排行榜的顺序稳定，胜率估计却可能失准

Similar Models, Broken Odds: Where Luce's Axiom Fails in Chatbot Arena

🌟🌟

一个总分未必能准确描述所有模型对战。对约180万竞技场投票的分析发现，同版本族模型的胜负比分数差预测得更分明。加入少量校正参数可改善留出投票预测，但主要收益来自平局，榜单顺序几乎不变。这提示应区分排名用途与胜率校准，也不能直接外推到偏好训练。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19095)

### 决策模型抗扰动，不代表能抵抗提示注入

DecisionRobust: Benchmarking Robustness for JEV Style Decision Models Across Text and Vision

🌟🌟

只返回候选概率的模型，也可能被文本、图像和恶意指令误导。研究对类型化决策模型构建多种攻击，并先检查扰动是否仍保留正确标签。标签核验显著降低表面攻击成功率，不同攻击下的稳健程度也不一致。评测覆盖多类模型，但仍以单次决策为单位，未测完整工作流的后续损害。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19118)

### 评判写作指标，不能只看与人类分数的相关性

Fantastic Metrics and How to Find Them: Meta-Evaluating Metrics for Multi-lingual Style-Personalized Generation

🌟🌟

指标与人类评分相关，并不代表它能准确判断质量。研究在十种语言、四个写作维度上，将指标输出校准为人类评分，并参照常数预测和人类一致性比较能力。校准后，一些简单文本指标可匹敌强模型裁判。结论依赖语言、任务和标注分布，没有一种指标在所有设置中都最好。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19166)

### 估计模型的罕见失败，可以把采样留给危险前缀

Weighted Ensemble Sampling for Rare-Event Estimation in Language Models

🌟🌟

普通随机采样很难估计低概率但严重的失败。研究让所有续写仍来自原模型，只按前缀风险分箱并重新分配带权样本，理论上保持概率估计无偏。毒性故事与越狱实验显示效率收益。最有效的风险坐标需要内部表示，且估计的是既定打分器定义的事件，不能覆盖未知风险。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19202)

### 多模态遗忘评测，先分清忘掉实例还是概念

Are We Really Measuring Forgetting? Pitfalls in Evaluating Machine Unlearning for Multimodal LLMs

🌟🌟

在参与遗忘训练的样本上答不出来，可能只是局部拟合。研究使用真实概念、严格留出样本和各方法独立调参，并同时检查图文与纯文本问答。重新比较后，简单方法可超过新方法，超参甚至反转排序。实验采用低秩更新，结果不等同全参数模型或实际数据删除保证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19613)

### 日语工具智能体基准，修复的不只是翻译

J-tau: A Fully Localized Japanese Benchmark for Tool-Agent-User Interaction

🌟🌟

把客服对话翻成日语，工具参数、姓名地址和评分仍可能不一致。研究在航空、零售与电信任务中同步本地化实体、人工复核，并修复原基准的不可解任务与聚合错误。相比纯机器翻译，框架性失败减少。不过用户模拟器和虚构实体仍会影响成绩，不能将所有差异归因语言能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19638)

### 智能体做完工作，用户未必看得懂回复

Measuring and Reducing Unusable Replies of LLM Agents

🌟🌟🌟

最终回复可能引用用户没见过的文件，或沿用工作中临时发明的标签。研究让读者模型仅使用请求者可见信息检查理解缺口，480条回复中约54%未通过；干预子集加入明确要求或二次改写后失败减少。项目为脚本协作，比例不能直接外推真实用户，但揭示了任务完成之外的交付问题。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19659)

### 评分规则不能一律等权，重要性也需要核对

Not All Criteria Matter: Importance-Aware Criteria Weighting for Rubric-Based LLM Evaluation

🌟🌟

格式要求与核心事实被同等计分，可能扭曲回答质量。研究让模型成对比较各规则重要性，检查循环矛盾后推导权重，在多种偏好基准及下游训练中优于均权。不过比较次数随规则数平方增长，领域知识不足也会造成错误权重。该方法让评分标准更可检查，未消除裁判偏差。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19915)
