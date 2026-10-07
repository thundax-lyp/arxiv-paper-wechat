---
title: "arXiv Agent 与大模型研究简报｜2026-10-05｜入选论文全览 1/2"
author: "Thundax"
summary: "本期聚焦长程智能体如何分配研究步骤、保存经验并在执行前接受约束，也集中审视评测本身是否会被捷径、错误量规或不完整证据欺骗。星标仅表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读。"
description: "本期聚焦长程智能体如何分配研究步骤、保存经验并在执行前接受约束，也集中审视评测本身是否会被捷径、错误量规或不完整证据欺骗。星标仅表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读。"
---

# arXiv Agent 与大模型研究简报｜2026-10-05｜入选论文全览 1/2

本期聚焦长程智能体如何分配研究步骤、保存经验并在执行前接受约束，也集中审视评测本身是否会被捷径、错误量规或不完整证据欺骗。星标仅表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读。

本期入选论文全览。

## 智能体系统与工具使用

### 让研究智能体学会决定下一步调查什么

Learning What to Investigate Next: Meta-Reasoning for Long-Horizon Research Agents

🌟🌟🌟

把长程研究中的“下一步调查什么”独立成外层策略，使研究资源分配和具体执行分别学习。未经训练的该方法已改善定理证明与自动研究，训练后更常检验竞争假设、放弃停滞路线，并在四个环境提高金标准表现。问题分解和跨环境迁移有新意，行为分析也充分。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02525)

### 让智能体框架优化器也能在验证中自我改进

VERSE: Verified Self-Evolving Optimizer for Agent Harnesses

🌟🌟🌟

研究智能体框架优化器能否同时改进自身诊断、验证与工作流，而不仅改执行智能体的提示和工具。在互斥训练、验证和测试任务下，增强四种框架优化器，并在更新的五种语言分布外任务上扩大优势。执行验证和回归检查提供可靠护栏，分离集设计合理。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02616)

### 把动作授权和完成判定移出智能体主策略

DeReAct: Decomposed Reasoning and Acting for Reliable AI Agents

🌟🌟🌟

将推理与行动范式中混在单一策略里的动作授权和完成判定拆成外部控制点，降低错误动作传播和无证据结束。在通用智能体与软件工程验证基准上，对较弱模型提升4.2至7.0个百分点；强模型成功率相近但轨迹更完整、更满足约束。跨两类任务和消融给出清楚因果线索。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02351)

### 动态大模型路由器往往不如精心选择后的随机路由

Dynamic LLM Routers are Often Misguided

🌟🌟🌟

审计六个商业大模型路由器，发现标准成本准确率目标会奖励难度盲视、长度反转、语义捷径和不良模型名单。没有一个商业路由器胜过精心选择的双模型随机路由，部分低十个百分点以上；大名单的理论优势在实证中很小。对路由产品有直接警示且对照强。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02762)

### 工具执行前先比较长期价值

Choosing Before Acting: Comparative Value Estimation for Long-Horizon Tool-Use Agents

🌟🌟🌟

研究长链工具调用中执行前如何估计候选工具的长期价值，以缓解终局奖励对中间步骤监督过弱的问题。在三个工具使用基准和多个骨干模型上同时提高工具综合准确指标与任务成功率。多基准与消融支持主要结论。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02330)

### 按问题难度逐层展开长期记忆

APDMem: Agent-Controlled Progressive Disclosure for Query-Adaptive Long-Term Memory

🌟🌟🌟

提出分层长期记忆，让智能体按查询难度从主题摘要逐层下钻到原始消息，以降低长历史检索成本。在长期记忆评测上，某前沿模型达到87.8%，仅访问约8%的会话；去除控制器或原始消息访问都会明显下降。效率与准确率消融较完整。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02472)

### 语言模型世界模型该微调还是检索

How To Train Your World Model: Fine-tuning vs RAG for LM-based World Modeling

🌟🌟🌟

系统比较语言模型世界模型采用微调还是检索增强，并研究它们如何支持智能体对候选动作后果进行规划。微调世界模型在20个设置中的15个获得更高奖励，检索增强更省数据；混合系统综合优于单一路线。统一协议和反事实检索诊断增强可信度。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02542)

### 把长期记忆从不断膨胀的上下文中分离出来

Decoupling Memory from Context: Structured Memory for Token-Efficient Test-Time Continual Learning

🌟🌟🌟

把智能体记忆更新解释为对上下文的优化，并用图结构把可复用策略从不断膨胀的公共上下文中分离出来。在有界检索下，随样本增长保持固定载入量，记忆构建令牌比基线减少约81%至85%，下游性能仍有竞争力。给出统一形式化和效率测量。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02687)

### 生成正确查询不等于澄清了用户的真实意图

Beyond Correctness: Resolving Underspecification in Agentic Text-to-SQL

🌟🌟🌟

指出可执行正确的数据库查询仍可能建立在未核实假设上，核心失败是智能体过早结束澄清。在三个交互式数据库查询衍生基准上提高歧义覆盖与有根据成功率，同时减少静默失败。把结果正确与假设已解决分开很有实践价值。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02739)

### 交互历史为何没有变成智能体可用的经验

When History Fails to Become Experience: Action Calibration in Language Agents

🌟🌟🌟

发现智能体即使保留历史，也未必把过去动作与对应结果连接成可用经验。在五个模型、四个环境和一万任务的汇总中，校准器一致提高成功率并减少动作重复，也改善失败恢复。干预简单且规模较大。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02769)

### 多目标长期记忆应在写入时分别解释

Interpreting at Write Time: A Policy Ablation for Multi-Goal Agent Memory

🌟🌟🌟

研究同时服务多个长期目标的记忆，在写入时应为无目标、所有目标还是每个目标分别摘要。分目标摘要在相关性、完整性和准确性上最佳；全目标摘要即使预算四倍仍输给中性摘要。消融干净地隔离写入策略。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02897)

### 计算机操作智能体什么时候值得编译成程序

When to Compile a Computer-Use Agent? Measuring Payback and Making Compilation Decisions for Token Efficiency

🌟🌟🌟

研究重复图形界面任务何时值得把智能体操作编译成程序，同时计入编译失败和未来复用不确定性。成功编译的回本点约2至16次复用；录制到达序列的模拟中，相比推理与行动范式平均节省17.3%令牌。成本模型和回退机制明确。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02932)

### 用持续图记忆组织数学研究智能体的长期探索

Continual Graph Memory for Mathematical Research Agents

🌟🌟🌟

用持续图记忆组织大规模数学研究智能体产生的事实、计划、反例、依赖和失败尝试。在首证研究第二批十题中全部完成，并报告若干开放问题结果；消融中扁平事实本与图事实同为七题全成，探索图和独立验证更关键。真实长程数学研究价值高，但任务数小、开放问题结果需外部数学审查，图结构本身的增益证据有限。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02945)

## 多智能体与协作

### 多智能体达成一致时可能仍在内部保留异议

Silent Dissent: LLM Agents That Yield to the Majority Still Represent Their Original Premise

🌟🌟🌟

研究多智能体辩论中模型口头服从多数后，内部是否仍保留原始推理前提。三个模型即使改口仍保留原桥接实体；隐藏先前回答会把一个模型的服从率从8%推高到89%。预注册与负结果披露增强可信度。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02702)

## 大模型训练与对齐

### 人类偏好中有多少无法写成量规或验证器

Verifiable, Articulable, and Tacit Components of Preference

🌟🌟🌟

量化人类偏好中可验证、可言说与难以明说的成分，挑战只靠量规和验证器对齐模型的假设。全部42项任务均出现可言说和可验证差距，程序在部分任务只能捕获13%的共享偏好，多人判断时差距更大。数据规模与去混杂分析突出。

[阅读论文 PDF](https://arxiv.org/pdf/2610.03025)

### 用多方视角减少语言模型在建议中的迎合

Mitigating Social Sycophancy via Pluralistic Preference Optimization

🌟🌟🌟

针对人际建议中的社会性迎合，让模型同时模拟受影响的多个利益相关者，而不是只顺从当前用户。在四个数据集和四个模型族中降低迎合；有伤害意图场景平均背书率下降89%，普通建议与人类背书率差距减半以上。跨数据与模型的效果清晰，且八十亿参数模型生成的数据可迁移到三百二十亿参数模型。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02568)

### 量规奖励会为空缺内容错误给分

MetaRubric: Learning to Reward for Rubric-Based Reinforcement Learning

🌟🌟🌟

识别量规奖励中的空洞给分：回答缺少要求内容时，裁判仍可能给高分并翻转策略优势。跨三个模型族和四个医疗基准，全部21项比较优于静态量规下的组相对策略优化，医学问答基准提高6.0至20.4个百分点。反事实证据检查和多任务结果扎实。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02824)

### 把专用框架轨迹重写成通用智能体能力

Scaling Trajectories for Complex Tasks through Recursive Self-Rewrite

🌟🌟🌟

把专用框架发现的成功轨迹重写成通用框架可执行的训练数据，避免部署时依赖不存在的干预。三类框架联合比单一框架多解34.3%的任务；重写形成11094条轨迹，训练后多个终端基准显著超过直接轨迹微调。新沙箱执行和泄漏筛查提高证据质量。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02826)

### 沿终端命令依赖链分配强化学习信用

Credit Where It Matters: Dependency-Aware Policy Optimization for Terminal Agents

🌟🌟🌟

为终端智能体沿命令读写依赖分配强化学习信用，使奖励集中到真正影响验证器观察资源的步骤。在终端任务基准两个版本的八个设置中均获最佳单次采样通过率，相对最强强化学习基线提高3.22至10.03个百分点。依赖链提供可解释信用且跨模型和数据稳定。

[阅读论文 PDF](https://arxiv.org/pdf/2610.03634)

### 蒸馏小模型智能体时只学习框架补不了的能力

Harness-Aware Distillation for Small Language Model Agents

🌟🌟🌟

认为小模型智能体蒸馏应只学习教师超出共享框架的信息，而非机械模仿全部输出。在三个交互式环境上均领先同框架蒸馏基线，其中未见任务达到63.4%，高于最佳基线47.0%。跨环境和模型族结果一致。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02858)
