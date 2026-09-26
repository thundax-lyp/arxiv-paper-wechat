---
title: "arXiv Agent 与大模型研究简报｜2026-09-25｜入选论文全览 1/2"
author: "Thundax"
summary: "本期重点关注科研与工具代理的可靠性：如何独立核查实验结果、在并发环境中保护提交、让技能流程和任务规格真正约束执行。训练与评测论文也提示，更多推理、记忆或代理协作未必自动带来更可靠的结论。"
description: "本期重点关注科研与工具代理的可靠性：如何独立核查实验结果、在并发环境中保护提交、让技能流程和任务规格真正约束执行。训练与评测论文也提示，更多推理、记忆或代理协作未必自动带来更可靠的结论。"
---

# arXiv Agent 与大模型研究简报｜2026-09-25｜入选论文全览 1/2

本期重点关注科研与工具代理的可靠性：如何独立核查实验结果、在并发环境中保护提交、让技能流程和任务规格真正约束执行。训练与评测论文也提示，更多推理、记忆或代理协作未必自动带来更可靠的结论。

本期入选论文全览。

## 智能体系统与工具使用

### 把智能体技能编译成可执行状态机

HEXIS: Compiling Skills into Extended Finite State Machines

🌟🌟🌟

把代理技能编译成带状态和转移条件的机器，减少步骤遗漏与控制流误用。把步骤、变量和转移条件从技能中提取，并用既有轨迹检查修订；四组基准平均成功率提高十六点一个百分点。编译器依赖技能文档及开发轨迹覆盖；静态检查不能保证未知场景的状态内推理。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30123)

### 代理记忆更新的证据应限定使用范围

Scope Before You Persist: Preventing Cross-Family Interference in Agent Memory

🌟🌟

把记忆更新的检验证据限定到相应任务族，减少跨任务调用时的有害迁移。把技能只用于经过验证的任务族后，跨任务损害由八次中的六次降为零，重复任务流的平均收益提高。实验为冻结模型的代码修复任务流，不能直接外推到所有长期记忆场景。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29144)

### 智能体何时可以忘记旧推理

When Can Agents Forget Their Reasoning? ICLR for Long-Horizon Agent Context Compression

🌟🌟

用冻结代理模型估计推理片段的信息量，压缩长期轨迹而保留动作和观察。保留动作和观察，只压缩信息量较低的推理片段；二百六十项任务中令牌消耗下降且平均任务收益小幅上升。实验使用特定执行模型与工作任务；局部删减影响后续行为，节省比例不能线性外推。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29875)

### 把技能发现变成工具权限控制

Progressive Skill Discovery as Access Control for Tool-Using LLM Agents: Structural Governance through Role-Scoped Capability Delivery

🌟🌟

将技能发现与角色权限绑定，让工具在学习相应能力后才进入智能体可调用范围。受控实验中，未经授权的调用和参数越界没有执行；任务得分还受模型是否正确发现技能影响。授权层和领域工具主要在模拟环境验证，不能直接推断真实企业部署效果。

[阅读论文 PDF](https://arxiv.org/pdf/2609.28693)

### 从失败转折点修订智能体技能

A Wrong Turn Does Not Ruin the Journey: Deviation-Guided Skill Self-Evolution for LLM Agents

🌟🌟

定位失败轨迹中开始偏离的节点，再用教师续写改进技能而非重写整段经验。保留有效前缀，比较学生的错误后续与教师的成功后续，多个工具任务上的技能更新优于对照方法。依赖更强教师模型与回归门控；其成本和复杂环境下的稳健性尚未充分比较。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29154)

### 跨会话多模态记忆保留证据来源

C3M: Cross-Session Multimodal Memory Maintenance for Long-Horizon Tasks

🌟

维护有来源指针的跨会话多模态索引，保留视觉细节与冲突记录供后续检索。有界索引保存文本图像来源，检索时按预算展开原始证据，避免把相似但互相冲突的记录合并。主要在固定基准和预算下验证，真实长期会话的写入冲突与隐私治理仍待考察。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29735)

### 先整理环境再让智能体自我改进

Breaking the Environment Wall: Evolving LLM Agent Environments for Recursive Self-Improvement

🌟🌟

把工作环境的资料组织、版本核验与难例生成纳入代理自改进闭环。系统组织分散文件、核对版本并生成新难例；九种模型配置在三十项任务上评分通过率提高。相当一部分增益来自所设工作空间噪声与评分规则，广泛迁移尚需独立验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29773)

## 大模型推理与规划

### 让模型决定何时需要长推理

CounterRoute: Self-Routed Reasoning via Hierarchical Counterfactual Credit Assignment

🌟🌟

通过反事实采样分别训练是否深思与如何作答，使模型按题目选择推理模式。成对采样训练选择模式与回答内容，在测试模型上平均生成令牌减少约四成到五成，同时保持或提高总体准确率。只研究二元模式与单轮问题；配对采样增加训练开销。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29109)

### 把推理长度留给真正受益的问题

To Think or Not to Think: Allocating Reasoning Where It Helps

🌟🌟

根据在线采样判断延长推理是否有益，把计算分配给部分可解的问题。在线比较不同推理长度的收益，在数学测试中准确率最多提高四个百分点，生成长度同时减少约三成七。数学基准和所测模型支持收益，对开放任务及跨轮推理尚无同等证据。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29664)

### 用结构约束引导长程推理探索

SAGE: Mitigating Long-Horizon Reasoning Biases via Topological Guidance

🌟

用局部可行性的结构引导长程推理，试图缓解稀疏奖励下的错误分支累积。局部可行性与几何信号抑制错误分支累积，多个基准优于对照方法，个别数学问题提升显著。不同任务的可行性约束需要构建，报告的高倍增益集中在特定数学问题。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30192)

## 检索增强生成与知识检索

### 知识编辑可能悄悄削弱证据辨别力

Sequential knowledge editing breaks a model's ability to tell good evidence from bad, without costing it accuracy

🌟🌟🌟

发现顺序知识编辑可能损害模型判断检索证据可信度的能力，常规编辑指标却看不出来。一千次顺序编辑后，常规事实指标仍好看，未编辑事实上的证据仲裁却变差，检索问答准确率也下降。效应幅度随编辑方法、模型和随机种子变化，个别事实的风险预测并不普适。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29587)

### 深度搜索代理分开规划与证据综合

IterSynth: Rethinking Deep Search Agents via Role-Decoupled Iterative Synthesis

🌟🌟🌟

将深度搜索拆为规划和综合角色，并把渐进摘要作为持续更新的检索状态。规划器提出下一步信息需求，综合器维护持续摘要；八十亿参数模型在五个长程搜索基准优于同档先前代理。多个基准支持方法价值，但角色分工与训练奖励的独立贡献仍依赖消融设置。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29444)

### 检索问答该直接返回还是再修订

Return or Revise? Learning When Revision Helps Retrieval-Augmented QA

🌟🌟

将检索增强问答中的修订决策建模为可能修好或损害当前答案的成对结果。用成对结果训练修订决策，多个设置比只估计草稿正确率更好；但另一个现成答案有时是更强选择。离线标签依赖共同的语义判官，在线生成修订与开放任务中可能出现分布差异。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30087)

### 把文档版本规则提前编译进问答索引

Ingest-Time Fact Compilation for Cost-Efficient and Reliable Question Answering over Revised Corpora

🌟🌟

在文档摄取时编译修订、撤销与来源优先级，减少每次问答重复重建事实状态。摄取时解决撤销、修订和来源优先级后，低成本模型在治理密集问答中更可靠，重复查询消耗明显降低。实验聚焦治理规则明确的语料；事实抽取或权威规则出错会在索引中持续传播。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29661)

## 多智能体与协作

### 多智能体辩论中的欺骗随占比扩散

How does Adversarial Influence Scale in Multi-Agent Systems?

🌟🌟

用受控多代理辩论测量欺骗者占比、位置和协作方式如何影响正确代理。受控实验显示正确代理的倒戈更多取决于欺骗者比例而非团队人数，少数欺骗者也能持续影响结论。结果取决于匿名讨论与特定任务协议，不能直接代表所有社会协作场景。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30028)

### 多智能体网络怎样识别隐性退化

MeshHeal: Two-Timescale Self-Healing for Gray Failures in Decentralized LLM Agent Networks

🌟🌟

用快速复核与慢速故障检测两层机制处理多智能体网络中持续低质但仍响应的节点。快速复核拦截当下低质输出，慢速检测调整路由；受控退化实验中准确率和令牌开销均优于所比基线。代理能力差异由受控后端配置模拟，真实开放网络中的故障模式尚未充分验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29015)

## 大模型训练与对齐

### 特权信息蒸馏为何会教坏多轮代理

From Self-Distillation to Self-Practice: Privileged Information for Multi-Turn Agents

🌟🌟🌟

显示特权信息蒸馏会让多轮代理模仿不可见信息下的动作，改用困难任务的提示重采样。把额外信息放进困难任务的采样提示，而不复制教师令牌，两个代理基准的三种学生模型均优于普通强化学习。结论建立在所测两类代理基准和学生模型上，分析器成本与跨场景迁移仍需考察。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29051)

### 从零数据自博弈开始预训练语言模型

Self-Play Pretraining with Zero Data

🌟🌟🌟

让生成器与预测器从随机初始化共同学习可计算序列，探索无需自然文本的预训练。生成器提出可计算程序，预测器学习其输出；概念验证在自然数据上的零样本损失随计算量呈规律下降。属于概念验证；计算序列不能提供真实世界的偶然事实，规模与实用性仍未证明。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30063)

### 工具调用训练需要分开评价动作与总结

SLCA-GRPO: Resolving Cross-Segment Credit Misattribution in Tool-Calling RL

🌟🌟

把工具调用和自然语言总结分段赋予训练信号，减少工具决策被总结文本梯度干扰。分段传递训练信号后，七十亿参数模型在工具调用基准取得不同幅度提升，同时减少多余工具使用。核心增益在所测工具调用基准上成立，模拟工具环境与真实接口之间仍有差距。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29050)

### 任务无关的词也可能传递训练能力

Post-Training Leaves Behavioral Shadows on Unrelated Decisions

🌟

表明任务无关的单词选择可能传递教师后训练能力，并用主动探测放大该信号。仅用教师对普通词的选择训练学生，在主要代码实验中相较严格对照提升了五点多个百分点。机制与跨家族泛化仍未充分确立；所测单词探针对共享祖先模型有特殊依赖。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29233)

### 用轨迹图为智能体训练分配步骤收益

Back to the Definition: Estimating Step-Level Advantages via Trajectory Graphs for Agentic Reinforcement Learning

🌟🌟

把多条轨迹合成图来估计步骤价值，纠正多轮智能体强化学习的粗粒度归因。把多次运行合为状态图并反向估计价值，多个多轮任务相较常见组相对优化方法取得提升。图中的状态合并质量影响价值估计，实验增益不能证明真实状态值已被准确恢复。

[阅读论文 PDF](https://arxiv.org/pdf/2609.28963)

### 交替蒸馏与强化学习训练多模态智能体

Pistis Technical Report

🌟🌟

报告多模态模型的交替蒸馏和强化学习后训练流程及两个专门化版本。两个规模版本超过各自基座，自动优化执行框架也在不增加交互预算时提升表现。技术报告包含大量系统组件，贡献归因和训练资源可复现性仍有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.28554)

### 让多模态模型纠正高置信度幻觉

DEEPO: Dual-Entropy Enhanced Policy Optimization for Hallucination in MLLMs

🌟🌟

针对多模态幻觉中的全组错误和过度自信梯度弱点设计双阶段优化。双阶段训练在视频推理任务上相互增益，比对照方法高出四个百分点，并保持准确率。主要在所测视觉语言基准验证，专家前缀与梯度预条件的成本需与收益一起衡量。

[阅读论文 PDF](https://arxiv.org/pdf/2609.28570)

### 小型搜索代理不能照搬稀疏奖励

Reinforcement Learning with Verifiable Rewards for Small Search Agents

🌟

在小参数检索代理上比较不同可验证奖励形状，检验只按答案匹配训练的局限。在同一小模型和训练任务的九次实验中，只奖励完全匹配答案的方案表现最差，连其直接优化的指标也落后。只测试单一模型大小和训练数据集，不能概括所有小模型搜索代理。

[阅读论文 PDF](https://arxiv.org/pdf/2609.28765)

### 连续扩散语言模型开始挑战推理任务

ELF-REG: Scaling Continuous Diffusion Language Models to Reasoning Tasks

🌟

以表示对齐和全局潜变量改进连续扩散语言模型的数学与代码推理。中间表示对齐改善数学与代码题表现，较同规模扩散基线更好；早停还可减少生成步骤。与自回归模型仍有明显差距，早停速度优势依赖具体精度和步数条件。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29102)

### 知识编辑也要找到准确的触发位置

ALOE: Semantically Addressed Low-Rank Operators for Knowledge Editing

🌟

把知识编辑拆为语义地址和写入方向，减少改动影响相邻事实。把语义地址和参数写入放进同一层，多组事实编辑基准保持较高成功率与局部性。验证集中于有限模型与事实编辑基准，实际长期连锁编辑的稳定性仍待观察。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29269)

### 公开大模型后训练的八阶段配方

Rufus-Air: An Open LLM Post-Training Recipe

🌟

公开大型语言模型分阶段后训练流程，覆盖推理、代码、工具代理和偏好对齐。从监督微调到推理、代码、搜索代理及偏好对齐的阶段记录显示，数据难度筛选和奖励可靠性影响训练顺序。多阶段效果可能受训练数据和顺序影响，完整复现成本高，单阶段因果归因有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.29421)
