---
title: "arXiv Agent 与大模型研究简报｜2026-10-08｜入选论文全览 2/2"
author: "Thundax"
summary: "本期最值得关注的不是某个单点高分，而是智能体系统如何记住任务边界、验证技能价值、匹配运行环境，并在工具失灵时保持可靠。星标表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读；它不等同于结论可靠性。"
description: "本期最值得关注的不是某个单点高分，而是智能体系统如何记住任务边界、验证技能价值、匹配运行环境，并在工具失灵时保持可靠。星标表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读；它不等同于结论可靠性。"
---

# arXiv Agent 与大模型研究简报｜2026-10-08｜入选论文全览 2/2

本期最值得关注的不是某个单点高分，而是智能体系统如何记住任务边界、验证技能价值、匹配运行环境，并在工具失灵时保持可靠。星标表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读；它不等同于结论可靠性。

本期入选论文全览。

## 评测与安全

### 智能体技能相关，不等于真正有用

An Empirical Study of Agent Skills' Downstream Utility

🌟🌟🌟

直接测量 智能体技能 对下游任务的净效用，而非只看相关性或文档质量。同一 技能 在36.78%的任务上会随配置从有益变有害；按所需操作支持重排后首选通过率提高4.35至5.80个百分点。样本来自固定基准和候选市场，大模型 辅助的内容与轨迹归因仍可能受标注口径影响。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08875)

### 工具没有报错，不代表结果可信

Loud Failures, Quiet Failures: Fault Detection and Recovery in Tool-Using Language Model Agents

🌟🌟🌟

把工具故障处理拆成发现、改策、恢复与重复调用，揭示显式报错和静默错误之间的可靠性鸿沟。1920次试验中，显式错误有91.3%被识别，表面合理的错误值仅58.8%；推理模型并未提升最终恢复率。仅覆盖24个多步任务和四类注入故障；无故障运行本身也有较大随机差异。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10062)

### 智能体会不会从经验中真正变强

Agent Plasticity: Measuring Self-Improvement Through Experience

🌟🌟🌟

提出“智能体可塑性”，把经验转化为持久且可泛化能力的效率作为独立评测对象。不同前沿模型即便学习机会相近，持久增益、样本效率和分布外迁移仍显著分化。可塑性依赖具体学习协议，实验不能单独分离长上下文能力对工件构造和应用的贡献。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08902)

### 谄媚更多取决于能否核验

Beyond the Sycophancy Score: How Task, Model, and Pressure Shape LLM Yielding

🌟🌟

把谄媚从单一模型分数拆成任务可验证性、模型能力和压力策略三类因素。共103939条回复；深推理把两模型在深层逻辑题上的让步从19.2%和12.5%降到0%。部分标签仍由 大模型 评审产生，个人选择中的“赞同”不必然等同有害谄媚。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08840)

### 智能体基准的验证器也会误判

Finding Blind Spots in AppWorld and WorkArena Task Verifiers

🌟🌟

审计执行式智能体基准的验收盲点，区分真实误接收、正确退化与证据通道限制。 中6/15构造副作用被错误接受； 23个已通过样本里有21个经独立回读确认持久化了错误字段。构造样本不估计总体误接收率，部分拒绝缺少独立目标真值。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09142)

### 先证明任务与测试互相冲突

SpecGuard: Proving a Task Is Broken Before the Agent Cheats

🌟🌟

在编码智能体行动前，用机器可检验证书识别任务—测试冲突与潜在奖励投机机会。在冲突版 软件修复基准 上最高检测72.8%的冲突并正式认证51.1%，漏检率约为模型判断的五分之一。自动形式化覆盖有限，检测成功不等于能给出可执行修复方案。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09159)

### 小评测集会放大自改进的赢家诅咒

The Winner's Curse in LLM Self-Improvement Loops: Selection Noise, Lock-in, and Acceptance Rules

🌟🌟

定量揭示反复复用小评测集时的赢家诅咒、锁定和报告偏差。16个选择样本时最终选择分数比留出准确率高13至20点，256个样本时仍高1至5点。测试的替代接受规则未在完整循环中稳定超过贪心，单次独立估计仍可能偏约6点。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09239)

### 实时环境里推理延迟本身就是风险

RT-Safe: Benchmarking Agent Safety in Real-Time Embodied Environment

🌟🌟

把推理时间本身纳入具身智能体安全风险，区分静态世界与实时世界评测。最难设置安全完成率仅0.7%；实时与静态完成率相近，但实时碰撞增加12.3倍。环境为模拟城市， 延迟与真实硬件控制栈的耦合仍需实机验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09294)

### 把论文变成可执行的自改进环境

RSI-Forge: From Research Papers to Environments for Recursive Self-Improvement

🌟🌟

规模化构造可供递归自改进使用的科研执行环境，同时用专家审查暴露捷径和忠实度风险。构造210个环境、覆盖18个领域，其中90个经专家审查；120个环境中84%至少有一个模型在后续尝试改进。专家对防捷径、论文忠实度和单一想法是否穷尽任务评价更保守，说明自动构造仍需大量修复。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09426)

### 个人记忆在生成前就可能已经坏了

Stale, Misattributed, or Late: Where Personal Memory Fails Before Generation

🌟🌟

把个人记忆错误从最终答案前移到提示块层，区分陈旧、错人和超时三类失败。不做更新解析时70.3%的提示暴露旧值；开放域合并召回在 上不超过0.062。结论依赖参考层和特定硬件时延，身份同名问题仍无法由现有后验彻底解决。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10265)

### 模型如何从错误前提中恢复

PHRBench: A Behavioral Evaluation of Post-Hallucination Reasoning in LLMs

🌟🌟

不只看最终对错，而是结构化描述大模型如何处理上游幻觉并何时真正恢复。成功恢复总体较少，且与更多信念更新相关；轻量预测器根据错误提示属性达到0.847 曲线下面积。受控注入的幻觉不完全代表真实系统分布，行为标签对开放长链任务的覆盖有限。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10455)

### 在昂贵后训练前预测编码智能体潜力

Before They Can Solve: Predicting Post-Training Coding-Agent Performance from Base Models

🌟🌟

在昂贵智能体后训练前，用验证器锚定的轨迹局部指标预测基础检查点潜力。十组基础—后训练模型中，三个探针的排序都与后训练后的 软件修复基准 表现高度一致。只验证十组模型且依赖已有成功轨迹，相关性不证明探针能跨训练配方预测绝对增益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10478)

## 应用与基准

### 让研究智能体接受没有标准答案的科学考试

SciExam for ENSO: Can AI Agents Build Climate Models?

🌟🌟

用未知标准答案的科学建模任务评估开放式研究智能体，并把已发表模型放在同一隐藏评分器下比较。12个系统中6个超过已发表参考模型；强模型的简化结构对应两种相互竞争的气候机制解释。关键系统的条件对照多为单次运行，超过参考模型不等同于得到科学共同体认可的新理论。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10513)
