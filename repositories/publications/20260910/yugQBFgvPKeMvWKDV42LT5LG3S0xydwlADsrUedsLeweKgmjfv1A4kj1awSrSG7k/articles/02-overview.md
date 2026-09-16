---
title: "arXiv Agent 与大模型研究简报｜2026-09-10｜入选论文全览"
author: "Thundax"
summary: "这期集中看智能体怎样挑选可执行工具、核对程序义务，以及让记忆和多模型协作更可控。另有研究提醒：答案暂时稳定不等于推理已完成，过程证据比最终分数更能解释成败。"
description: "这期集中看智能体怎样挑选可执行工具、核对程序义务，以及让记忆和多模型协作更可控。另有研究提醒：答案暂时稳定不等于推理已完成，过程证据比最终分数更能解释成败。"
---

# arXiv Agent 与大模型研究简报｜2026-09-10｜入选论文全览

这期集中看智能体怎样挑选可执行工具、核对程序义务，以及让记忆和多模型协作更可控。另有研究提醒：答案暂时稳定不等于推理已完成，过程证据比最终分数更能解释成败。

本期入选论文全览。

## Agent系统与工具使用

### 工具列表要把前置步骤排进来

The Menu Is an Execution Prior: State-Path Tool Menus for Online Agents

🌟🌟🌟

智能体只看得到短工具菜单时，相关性排序容易漏掉产生输入的前置工具。论文按状态路径检索并排序可执行链，在ToolBench将在线成功率由0.737提高到0.898；菜单仍在执行前固定，遇到新观察不能动态修正。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09395)

### 用语义关系整理冲突和重复的智能体记忆

ROAM: Robust Organization of Atomic Memories for Agents through Semantic Relations

🌟🌟🌟

ROAM先判定新旧原子记忆是等价、包含、冲突还是独立，再把有效主记录与证据分开，检索时使用融合视图。受控基准中回答准确率最多提高29.8个百分点；结果依赖有限检索预算和基准历史。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09778)

### 让智能体提示优化遵守可检查的修改范围

RobustSGPO: Search-Space Control for Agent Harness Evolution

🌟🌟

RobustSGPO把智能体工作流的优化拆成修改请求、补丁构造、检查和回退搜索。AgentX任务上的实验表明权限调度与结构化操作可改善完成度；结果主要来自单一工作流，跨任务族迁移仍有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09646)

### 环境变了，旧操作记忆还可靠么

Procedural Memory Under Change: Reuse and Interference in Controlled Web Tasks

🌟🌟

论文比较网页任务中存储程序遇到界面变化后的复用与干扰。受控阶段冻结记忆后追踪失败模式，发现某些预设不匹配并未造成预期错误；早期案例有人协助，不能据此声称自主记忆适应。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09774)

### 跨智能体共享记忆由内核统一管控

Kernel-Managed Shared Memory for System-Wide Personalization

🌟🌟

论文让专职智能体写结构化记忆，系统内核统一检索、隐私过滤和提示注入防护。在AIOS的1800次试验中，相比未管理外部记忆有改进；可见性保障取决于身份解析正确，且不等于记忆内容完整性。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10144)

### 智能体应忘掉的是当前使用权而非原始记录

What Should an Agent Forget? Separating What Is Stored from What Is Used

🌟🌟

RD-Forget保留原始观察档案，再按查询构造可用记忆视图，避免旧事实污染现状问答而又丢失历史证据。多个记忆基准上它优于比较方法；评测与回答采用同一模型家族，独立性有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10263)

### 个人记忆何时过期，要看事实类型

Fortunate Recall: Ontology-Driven Memory Lifecycle Management for Persistent Coherence in LLMs

🌟🌟

Fortunate Recall按个人事实类型制定衰减、覆盖与时间有效性规则，把生命周期决策放在模型抽取后的确定性层。多配置实验显示检索收益；判定大多依赖LLM评审，尚缺人类验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10413)

## LLM推理与规划

### 答案反复一致，推理也未必结束

Stable Answers, Unfinished Reasoning: Why Self-Consensus Is Not a Safe Early-Exit Signal

🌟🌟🌟

论文用冻结推理轨迹测试3520种基于自一致的提前停止规则，没有规则同时过预注册的安全与节省门槛。32% token 节省时约九分之一停止落在后来被模型放弃的答案上；结论针对固定探针和数学基准。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09989)

### 长上下文推理能否并行整理分段记忆

ConvMem: Convolutional Memory for Long-Context Reasoning

🌟🌟

ConvMem把长文本切块，在多通道层级汇总中并行组合证据，避免顺序记忆更新的高延迟。基准显示速度和回答表现的潜力；并行降低延迟不一定降低总token消耗，结论受任务与配置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10441)

### 部分可观测环境里给智能体显式信念状态

Belief-State Engine: Augmenting LLMs for Principled Planning Under Partial Observability

🌟🌟

Belief-State Engine在语言模型外维护隐藏状态概率，并将信念摘要送给规划策略，针对观察含糊时的过早承诺。论文提出可实现接口和实验协议；关键效果证据仍弱，当前更适合作架构假说阅读。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10036)

## 多智能体与协作

### 多模型结果能否由明确规则合并

UnitBoost: Managing Compound LLM Systems with a Merge Operator, Not a Model

🌟🌟🌟

UnitBoost让工作模型提出候选事实，由可审计的单元合并算子选取有证据的答案片段，并把缺口送入下一轮。多个语言任务中它超过输入匹配的生成式管理者；前提是任务能拆成稳定单元，耦合约束可能增加修复成本。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09815)

### 技能何时适合交给子智能体执行

Subagents vs Agent Skills: Executing Reusable Knowledge for Long-Horizon Agentic Tasks

🌟🌟🌟

论文比较把技能说明放进主上下文与让子智能体在独立上下文执行。SkillsBench实验显示，技能有清楚输入输出契约时，子智能体更能抵抗上下文膨胀；原有缺少契约的技能未呈现这种优势，通信也增加总 token 成本。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09233)

## LLM训练与对齐

### 用可控干预给诊断智能体制造可验证奖励

TRACE: Training Reasoning Agents for Causal Exploration with Synthesized Rewards

🌟🌟

TRACE在模拟器中注入隐藏干预并生成观察，让诊断智能体用工具查因，同时以干预真值作强化学习奖励。它把难以人工核实的因果分析变成可训练任务；效果仍依赖模拟器与真实问题的吻合。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10315)

### 后训练如何保留多条成功策略

Direct Diversity Optimization for Diverse Successful Trajectories in Preference Post-Training

🌟🌟

DDO从同一决策状态收集不同成功分支，再用相对目标赔率训练智能体，避免偏好训练把成功策略挤成单一路径。三个顺序任务基准支持策略覆盖改进；方法依赖可重建状态和共同成功判据。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10052)

## 评测与安全

### 程序看似完成时，如何发现漏掉的义务

ContractEval: Query-Conditioned Execution Matching for Procedural Instruction Conformance

🌟🌟🌟

ContractEval先把流程说明变成当前问题的执行义务，再对照回答或轨迹定位漏检、错分支和顺序错误。受控注入实验中，普通答案评审漏掉许多结构性失败；金标准图可全数定位，但自动抽取仍受校准影响。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09458)

### 怎样证明研究智能体真的发现了新方法

Scores Alone Do Not Prove Discovery: The Discovery Certification Protocol for Auditing AI Research Agents

🌟🌟

论文提出发现认证协议：先在封闭测试上确认收益，再给匹配智能体相同起点与可见资料，检查它们能否复现目标结果。两个受控审计展示了流程，但认证仍依赖独立审计方、任务适配器和注册条件。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09219)

### 深度研究怎样跨网页和数据库核对证据

Benchmarking Hybrid Deep Research Across Database Querying and Web Search

🌟🌟

HybridDeepResearch用380道需要网页搜索与SQL共同回答的任务，测量跨工具传递约束的能力。高难子集上强模型Pass@8约为50%至54%，方向性证据交接尤难；所用数据库和公开网页语料仍是受控环境。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09410)

### 长期对话记忆要支持个性化建议

PRAGMA: Evaluating Personalized Guidance with Memory Alignment in Lifelong Conversations

🌟🌟

PRAGMA评测长期对话里的开放式建议：不仅查是否取回事实，也查回答是否用对用户偏好和变化。受控构造让记忆系统暴露简单召回指标之外的弱点；对话历史主要由生成流程构成，真实用户迁移仍待验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09664)

### 研究智能体检索论文后，预测趋势更准吗

RAP: Research Attention Prediction Reveals Target-Conditioned Evidence Acquisition Biases

🌟🌟

RAP让研究智能体在时间受限论文库里检索并预测278个领域的方向占比。搜索通常有帮助，但四个诊断模型在组合预测上仍不及精确计数的EWMA基线；方向标签本身由模型辅助构造。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10092)

### 研究想法里哪些缺口会妨碍忠实实现

IdeaAMBIG: Benchmarking Implementation-Critical Gaps in Research-Idea Specifications

🌟🌟

IdeaAMBIG从论文、代码和复现材料整理660个单缺陷规格，评测模型能否定位关键方法缺口并提出澄清。人类研究者验证了部分样本；实例集中在AI/NLP，单缺陷设置未覆盖真实项目的多重歧义。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10539)

### 把 AI 科学家的研究过程纳入评测

OpenDiscoveryTrace: Process Traces for Evaluating AI Scientist Workflows

🌟🌟

OpenDiscoveryTrace收集558条科学智能体完整轨迹，记录工具调用、错误和修订，补足只看最终成果的评测。初步分析显示过程差异可能被最终成功率掩盖；但行为判断依赖模型评审，不能直接等同科研质量。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09203)

### 用多步黑盒攻击检查智能体风险

Black-Box Red Teaming of Agentic AI: A Taxonomy-Driven Framework for Automated Risk Discovery

🌟🌟

论文把智能体可观察风险分为七类，自动生成跨工具、多步骤攻击情景，并结合人工核验。它覆盖了单轮问答评测难触及的操作风险；分类和模型评审能发现问题，却不足以证明任意部署系统安全。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09647)

### 法律智能体幻觉要追到工具调用链

LexAgentHallu: A Hierarchical Benchmark for Profiling Hallucinations in Legal Agents

🌟🌟

LexAgentHallu按工具调用、推理与法律引用的连锁错误组织分层基准，避免只看最终答案是否流畅。它帮助定位误引判例的产生过程；法律任务范围与评审方式限制了结论向其他高风险领域外推。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09754)

### 给企业工具智能体一个有真值的测试场

The Era by Eon Benchmark: A Generated Enterprise Estate with Exact Ground Truth for Benchmarking LLM Agents

🌟🌟

Era by Eon生成虚构企业、各类业务系统及可计算的答案，避免在客户生产数据上评测智能体。研究在一个固定企业场景测九个模型；33种问题虽可重复，仍不足以代表多行业和真实系统变化。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09853)

### 评测语言模型能否改进自己的基础设施

$Φ$-Bench: Can Large Language Models Engineer the Infrastructure That Powers Them?

🌟🌟

Φ-Bench用85项任务覆盖九个LLM基础设施领域，从指定优化目标延伸到开放工程问题，考察长时程编码智能体。任务更接近系统实践；但构造流程含智能体生成，实际工程维护价值仍需单独核验。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10226)

### 跨上下文复用 KV 缓存要修复哪些信息

KVShareArena: KV-Cache Reuse Across Contexts and Model Checkpoints

🌟🌟

KVShareArena测试检索片段和智能体报告在新上下文、甚至不同模型检查点间复用KV缓存。免费位置对齐只在来源相互独立时足够，跨来源依赖需要付费修复；主要排名基于单个8B模型。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10266)

### 跨设备 GUI 智能体如何传递任务状态

JarvisGUI: Towards Cross-Device GUI Agents with Dynamic Task Composition

🌟🌟

JarvisGUI动态拼接Android、Windows和Ubuntu上的操作任务，用类型约束与终态检查评测跨设备智能体。它揭示单设备静态任务无法覆盖的状态传递难题；复现实验依赖Docker和KVM环境。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10451)
