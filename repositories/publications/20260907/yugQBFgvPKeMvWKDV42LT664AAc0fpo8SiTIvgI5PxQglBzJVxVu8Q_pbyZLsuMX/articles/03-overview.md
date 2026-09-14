---
title: "arXiv Agent 与大模型研究简报｜2026-09-07｜入选论文全览 2/2"
author: "Thundax"
summary: "工具增多、模型升级、训练题目变少，代理真的会更可靠吗？本期从执行框架演化、记忆迁移和证据使用切入，同时关注混合电脑操作与在线蒸馏。重点不是孤立的分数提升，而是收益在什么条件下成立，以及怎样把结论变成可检验的研究与工程实践。"
description: "工具增多、模型升级、训练题目变少，代理真的会更可靠吗？本期从执行框架演化、记忆迁移和证据使用切入，同时关注混合电脑操作与在线蒸馏。重点不是孤立的分数提升，而是收益在什么条件下成立，以及怎样把结论变成可检验的研究与工程实践。"
---

# arXiv Agent 与大模型研究简报｜2026-09-07｜入选论文全览 2/2

工具增多、模型升级、训练题目变少，代理真的会更可靠吗？本期从执行框架演化、记忆迁移和证据使用切入，同时关注混合电脑操作与在线蒸馏。重点不是孤立的分数提升，而是收益在什么条件下成立，以及怎样把结论变成可检验的研究与工程实践。

本期入选论文全览。

## 应用与基准

### 懂性能术语，距离写对性能模型还有多远？

PerfReasoning: How Well Do LLMs Reason on Hardware Performance?

🌟🌟

PerfReasoning用可计算的硬件映射题，分别测知识问答、周期预测与可执行性能建模。强模型能答对大量知识题，生成正确性能代码却明显更难，强化学习可改善但未消除落差。标签由Timeloop分析模型提供，覆盖的算子和存储层级有限；结果不能直接等同真实芯片优化能力。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04476)

### 手机代理听得懂老年用户的原话吗？

ElderBench: Benchmarking Autonomous Mobile Agents for Older Adults

🌟🌟

ElderBench从28位受访者收集自然需求，构建249个Android任务，保留口语省略和隐含意图，而不先改成标准化命令。它用在线执行和离线任务图兼顾真实性与敏感操作限制，暴露现有代理的理解和执行缺口。不过单轮任务表现不是长期辅助效果，两种协议也需分开解读。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04850)

### 企业SQL代理：模式导航、修复和验证缺一不可

A Cost-Aware Agentic Architecture for NL-to-SQL over Nested Enterprise Schemas, with a New Benchmark

🌟

面对嵌套企业模式，这项工作让代理浏览知识图谱、按错误类型修复单个查询，再做静态、计划与语义检查，改善了内部任务表现。值得借鉴的是验证层次，而非孤立的高分：主任务依赖合成数据和模型裁判，Spider也只用了小子集，不能直接与完整公开排行榜比较。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04641)

### 让LLM搜索启发式，优化真正的下游代价

LLM-Driven Algorithm Design for Quantum Circuit Synthesis based on Binary Decision Diagrams

🌟

QuantumEvo让LLM进化生成决策图变量排序程序，直接按量子电路代价而非图大小选择候选。找到的启发式在148个函数中105个追平或超过最佳基线，严格领先仅20个，不能忽略平局。它展示了目标对齐的算法搜索思路，收益仍受综合流程、搜索预算和运行时约束。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05327)
