---
title: "arXiv Agent 与大模型研究简报｜2026-11-26｜入选论文全览"
author: "Thundax"
summary: "本期从几项实际决策出发：何时给代码智能体增加子智能体，如何检查运行框架的改动是否迁移，以及怎样定位长期助手用错记忆的原因。评测研究还追查了英语置信阈值迁移后失准、技能增益混入评分器差异，以及具身策略自我改进时的独立验收问题。"
description: "本期从几项实际决策出发：何时给代码智能体增加子智能体，如何检查运行框架的改动是否迁移，以及怎样定位长期助手用错记忆的原因。评测研究还追查了英语置信阈值迁移后失准、技能增益混入评分器差异，以及具身策略自我改进时的独立验收问题。"
---

# arXiv Agent 与大模型研究简报｜2026-11-26｜入选论文全览

本期从几项实际决策出发：何时给代码智能体增加子智能体，如何检查运行框架的改动是否迁移，以及怎样定位长期助手用错记忆的原因。评测研究还追查了英语置信阈值迁移后失准、技能增益混入评分器差异，以及具身策略自我改进时的独立验收问题。

本期入选论文全览。

## 智能体系统与工具使用

### 怎样让代码智能体的改进迁移到新任务

TransHarness: From Benchmark Overfitting to Transferable Harness Evolution

🌟🌟🌟

适合设置智能体框架更新的回归门槛

[阅读论文 PDF](https://arxiv.org/pdf/2611.33757)

### 并行子智能体何时值得额外成本

When Are Parallel Subagents Effective for Coding? An Empirical Study on Repository Construction

🌟🌟🌟

有助于决定何时先改善主智能体再委派

[阅读论文 PDF](https://arxiv.org/pdf/2611.33893)

### 用版本化记忆定位助手反复答错的原因

HoMe: Toward Practical Harness Optimization of Memory Systems for AI Assistants

🌟🌟🌟

为记忆系统的可观察性和实验成本提供实践依据

[阅读论文 PDF](https://arxiv.org/pdf/2611.34624)

### 用可追溯的原始对话构建长期记忆

MGMem: An Efficient, Deterministic, and Provenance-Preserving Framework for Long-Horizon Agent Memory

🌟🌟

适合衡量记忆索引的成本与溯源

[阅读论文 PDF](https://arxiv.org/pdf/2611.33174)

### 按执行轨迹给主模型划分委派范围

Partial Routing: Trace-Tuned Delegation for Resource-Efficient Agentic Workflows

🌟🌟

适合定位应外包的环节及仅优化计划的收益

[阅读论文 PDF](https://arxiv.org/pdf/2611.33402)

### 失败经验拓宽工具选择，成功经验缩短执行

Failure Broadens, Success Sharpens: Continual Adaptation of Tool-Use Agents Across Diverse Tasks with Dual-Polarity Memory

🌟🌟

适合设计持续积累的工具记忆

[阅读论文 PDF](https://arxiv.org/pdf/2611.33612)

### 从成功轨迹学会分解任务与判断进度

MetaDecomp: Adaptive Task Decomposition via Meta-Learned Procedural Memory

🌟🌟

提示程序记忆应测量适用范围

[阅读论文 PDF](https://arxiv.org/pdf/2611.33822)

### 把上下文压缩的决定交给模型

Letting Models Manage Their Own Context: Where We Stand

🌟🌟

可指导上下文工具和缓存接口设计

[阅读论文 PDF](https://arxiv.org/pdf/2611.34147)

### 检索到正确记忆后仍应检查模型有没有用对

TASK Memory: Beyond Text-Only Memory with Activation Steering and Knowledge Editing against Memory Hallucination

🌟🌟

有助于分开评估记忆召回率与使用正确率

[阅读论文 PDF](https://arxiv.org/pdf/2611.34762)

### 让视觉智能体主动取证并核验结论

EVA: Evidence-seeking Visual Agent for Hallucination-Resistant Multimodal Reasoning

🌟🌟

适合设计有可观测证据的视觉代理

[阅读论文 PDF](https://arxiv.org/pdf/2611.33706)

## 大模型推理与规划

### 候选答案应先通过可验证的硬约束

Constraint-Aware Test-Time Scoring for LLM and VLM Candidate Selection

🌟🌟

适合设计候选筛选器

[阅读论文 PDF](https://arxiv.org/pdf/2611.33161)

### 同一道题也会因呈现方式而变难

Extraneous Cognitive Load in Large Language Models

🌟🌟

适合排查长提示推理退化

[阅读论文 PDF](https://arxiv.org/pdf/2611.33197)

### 为逻辑推理样本验证不可跳过的步骤

Certify What You Plant: Shortcut-Free Proof Depth in Logical Reasoning Data

🌟🌟

适合检查训练数据里的推理捷径

[阅读论文 PDF](https://arxiv.org/pdf/2611.33303)

### 在环境继续变化时学会停止思考并行动

Learning to Reason in Real-Time

🌟🌟

揭示模型算力和行动时机的共同约束

[阅读论文 PDF](https://arxiv.org/pdf/2611.33513)

## 检索增强生成与知识检索

### 检索的多级重排需要逐级对照

When Rerankers Work Together: Better and Faster Reranking without Joint Training

🌟🌟

能用于避免重排上线时误判增益

[阅读论文 PDF](https://arxiv.org/pdf/2611.33844)

### 让检索先覆盖长文的必备条款

CA-RAG: Constraint-Aligned Retrieval for Structurally Faithful Long-Form Generation

🌟

帮助设计有结构要求的长文生成

[阅读论文 PDF](https://arxiv.org/pdf/2611.33497)

## 多智能体与协作

### 多人协作该传递事实还是概率

What Must LLM Agents Communicate? From Information Loss to Communication Failures

🌟🌟

帮助选择消息协议和失败归因

[阅读论文 PDF](https://arxiv.org/pdf/2611.33318)

### 把协作验收奖励绑定到证据

PROVE: Mitigating Long-Horizon LLM Collusion with Reinforcement Learning from Verified Evidence

🌟🌟

适合思考多智能体的核验与奖励设计

[阅读论文 PDF](https://arxiv.org/pdf/2611.34215)

### 按每次请求的预算动态组织多智能体

MeterRouter: Budget-Aware Dynamic Routing for Multi-Agent Systems

🌟🌟

适合比较不同的协作成本控制策略

[阅读论文 PDF](https://arxiv.org/pdf/2611.34327)

### 把智能体协作拆成可测的消息路由

CypherMAS: Benchmarking Routing Reliability in LLM-Based Multi-Agent Systems

🌟

用于诊断拓扑和消息发送故障

[阅读论文 PDF](https://arxiv.org/pdf/2611.33242)

## 大模型训练与对齐

### 用递推更新缩小连续知识编辑与批量编辑的差距

Rethinking Sequential Locate-Then-Edit: Optimality and Stability

🌟🌟

适合需要持续事实更新的模型维护

[阅读论文 PDF](https://arxiv.org/pdf/2611.33692)

### 让线性注意力的循环状态在长序列中保持稳定

Stable Gated DeltaNet-2: Understanding and Mitigating Recurrent State Instability

🌟🌟

适合分析长上下文训练中的数值故障

[阅读论文 PDF](https://arxiv.org/pdf/2611.34051)

### 把人工客服示范拆成可核验主张

Learning from Unreliable Operator References: Claim-Level Rewards for Customer Support Agents

🌟🌟

有助于建设可验证的任务示范

[阅读论文 PDF](https://arxiv.org/pdf/2611.34341)

### 长程智能体蒸馏应回放关键决策

Collect for Coverage, Replay with Evidence: Adaptive and Efficient On-Policy Distillation for Long-Horizon Agents

🌟🌟

适合优化高成本迷航轨迹的蒸馏

[阅读论文 PDF](https://arxiv.org/pdf/2611.34756)

### 循环语言模型可从更深的自身预测学习

Learning from Recurrence: Internalizing Depth-Induced Preferences in Looped Language Models

🌟🌟

帮助分析循环推理的计算和训练策略

[阅读论文 PDF](https://arxiv.org/pdf/2611.33468)

### 扩散模型蒸馏要覆盖学生自己的生成轨迹

Rethinking Knowledge Distillation for Diffusion Language Models

🌟

为扩散语言模型训练消融提供参照

[阅读论文 PDF](https://arxiv.org/pdf/2611.33670)

### 单独有效的软提示技能合用时可能失灵

When Skills Fail to Compose: Compatibility and Retention in Language Models

🌟🌟

为技能库构造组合与替换测试提供思路

[阅读论文 PDF](https://arxiv.org/pdf/2611.34398)

### 把测试时失败反馈转成参数更新

vSFT: Learning to Verbally Tune Agents at Test Time

🌟

适合比较上下文适配和参数适配

[阅读论文 PDF](https://arxiv.org/pdf/2611.34440)

## 评测与安全

### 英语置信阈值迁移后会高估正确率

Lost in Translation, Not in Confidence: Benchmarking and Calibrating Multilingual Decision Models

🌟🌟🌟

部署多语种路由和防护阈值前值得读

[阅读论文 PDF](https://arxiv.org/pdf/2611.33307)

### 给自我改进的具身策略设独立验收

Keep or Roll Back? Out-of-Loop Judges for Self-Improving VLA and End-to-End Embodied Policies

🌟🌟🌟

能帮助设计闭环更新保留与回滚

[阅读论文 PDF](https://arxiv.org/pdf/2611.33794)

### 技能基准的提升混入了评分器和框架差异

What Does Skill Lift Actually Measure? A Source-Code-Level Audit and Noise-Aware Reanalysis of SkillsBench

🌟🌟🌟

帮助检查技能评测有没有把评分规则当作能力

[阅读论文 PDF](https://arxiv.org/pdf/2611.33943)

### 形式化证明的难点是补齐定义与引理

AutoformBench: A Lean Formalization Benchmark for Advanced Mathematics

🌟🌟

为形式化智能体评测提供更贴近工作的任务

[阅读论文 PDF](https://arxiv.org/pdf/2611.33165)

### 医学智能体读过技能仍可能用不起来

MedSkill-E$^\{2\}$: Evaluating and Evolving Skills for Medical Agents

🌟🌟

可用于分辨技能发现和技能执行故障

[阅读论文 PDF](https://arxiv.org/pdf/2611.34250)

### 用有依赖的长任务流评估自演化

EvoLink-Bench: A Benchmark for Evaluating Self-Evolving Agents in Long-Horizon Interdependent Task Streams

🌟🌟

可用于评估自演化前后是否真正复用经验

[阅读论文 PDF](https://arxiv.org/pdf/2611.34400)

### 让研究智能体在限时内迭代初始方案

REE: A Scientific Research Entrance Exam for AI Agents

🌟🌟

适合对照研究智能体如何改进既有算法

[阅读论文 PDF](https://arxiv.org/pdf/2611.34646)

### 深度研究报告需要分别衡量覆盖广度与深度

DRBench Pro: A Knowledge-Centric Benchmark for Professional Deep Research Agents

🌟🌟

适合比较研究智能体报告的知识结构

[阅读论文 PDF](https://arxiv.org/pdf/2611.34852)

### 增加审查投入仍会漏过近半错误补丁

How Much Effort Does an AI Code Reviewer Need? Evidence from Claude 5\.5 Models on Plausible-but-Wrong Patches

🌟🌟

为审查代理的上线门槛提供配对实验思路

[阅读论文 PDF](https://arxiv.org/pdf/2611.33639)

### 可编辑三维重建还要验证物体关系

Asset4D-Bench: Benchmarking Coding Agents for Editable 3D and 4D Reconstruction

🌟

适合定义可编辑产物的验收

[阅读论文 PDF](https://arxiv.org/pdf/2611.33728)

### 多步任务的用户模拟器也会走错流程

Reliable User Simulation in Complex Multi-Step Workflows

🌟🌟

有助于构造可靠的闭环助手评测

[阅读论文 PDF](https://arxiv.org/pdf/2611.34044)

### 英语自演化收益不会自动抹平语言差距

IRTIQA: Evolving in English, Evaluated in Urdu -- Does Agent Self-Evolution Transfer from English to Urdu and Code-Switched Input?

🌟

有助于为运行框架增设多语言回归检查

[阅读论文 PDF](https://arxiv.org/pdf/2611.34303)
