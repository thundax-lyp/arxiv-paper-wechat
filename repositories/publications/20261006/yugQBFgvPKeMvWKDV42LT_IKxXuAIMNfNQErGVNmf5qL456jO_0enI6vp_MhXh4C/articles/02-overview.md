---
title: "arXiv Agent 与大模型研究简报｜2026-10-06｜入选论文全览 1/2"
author: "Thundax"
summary: "本期集中看智能体的可验证行动：工具调用是否按原意执行、记忆和检索证据是否仍有效、多智能体传递的内容能否保留来源，以及评测分数能否支撑真实部署判断。以下全览帮助按问题筛选，精选则展开方法、结果与局限。"
description: "本期集中看智能体的可验证行动：工具调用是否按原意执行、记忆和检索证据是否仍有效、多智能体传递的内容能否保留来源，以及评测分数能否支撑真实部署判断。以下全览帮助按问题筛选，精选则展开方法、结果与局限。"
---

# arXiv Agent 与大模型研究简报｜2026-10-06｜入选论文全览 1/2

本期集中看智能体的可验证行动：工具调用是否按原意执行、记忆和检索证据是否仍有效、多智能体传递的内容能否保留来源，以及评测分数能否支撑真实部署判断。以下全览帮助按问题筛选，精选则展开方法、结果与局限。

本期入选论文全览。

## 智能体系统与工具使用

### 工具调用发出后，实际执行的还是原意吗

Do Tool Calls Execute as Intended? Measuring and Repairing Intent-Execution Correspondence in LLM Agents

🌟🌟🌟

面对工具调用发出后，实际执行的还是原意吗这一问题，论文逐跳记录工具调用在框架传递中的变形，并以安全传输或拒绝修复。商业环境部署的修复机制恢复百分之七十九点二被变形调用的故障。需要注意：基准从所观察的执行路径构建，其他框架的故障分布仍需实测。

[阅读论文 PDF](https://arxiv.org/pdf/2610.04375)

### 让编码智能体学会可靠修复与验证

Teaching Agents to Code Reliably

🌟🌟🌟

面对让编码智能体学会可靠修复与验证这一问题，论文训练代码智能体扩大定位与编辑多样性，并用错误补丁训练验证器。摘要报告一次通过率达百分之四十三，八次采样达百分之六十点七，验证器精确率由百分之二十六点八升至四十一点七。需要注意：性能仍受任务集和训练成本约束，自写测试的误验风险未消失。

[阅读论文 PDF](https://arxiv.org/pdf/2610.03984)

### 智能体知道检索无用，为何还不停下

Judged Useless, Queried Anyway: Tool-Using Agents Rarely Turn Their Own Evidence Judgments into Stopping Decisions

🌟🌟🌟

面对智能体知道检索无用，为何还不停下这一问题，论文分开记录智能体对证据有用性的判断及继续调用工具的行动。七个智能体几乎都能识别失效来源，仍常继续查询；强制整合步骤后停止随证据变化。需要注意：受控检索失败环境不能直接推广到开放网页搜索。

[阅读论文 PDF](https://arxiv.org/pdf/2610.06191)

### 代码变了，编码智能体的旧记忆还能信吗

MemTrace: State-Consistent Memory for Long-Horizon Coding Agents

🌟🌟

面对代码变了，编码智能体的旧记忆还能信吗这一问题，论文用不可变执行轨迹和仓库状态图保存记忆，复用前核对证据是否仍有效。三个长程编码基准报告改进，其中深度软件任务一次通过率提高二十一点二个百分点。需要注意：主要验证于编码任务和两个框架，记忆维护成本与迁移性需另测。

[阅读论文 PDF](https://arxiv.org/pdf/2610.04838)

### 让模型与智能体框架在可验证环境中共同进化

VERA: Scaling Verifiable Environments for Agentic co-Evolution

🌟🌟

面对让模型与智能体框架在可验证环境中共同进化这一问题，论文从轨迹生成可核验可重启环境，并交替更新模型与智能体技能。两类长程工作任务中共同演化带来性能提升，并报告跨任务迁移。需要注意：评判与归因依赖同一强模型，完整基线主要限于九十亿参数量级。

[阅读论文 PDF](https://arxiv.org/pdf/2610.05923)

### 让智能体框架与推理引擎交换运行信息

Can Agent Harnesses and Inference Engines Hear Each Other? The HEAR Protocol for Agentic LLM Serving

🌟🌟

面对让智能体框架与推理引擎交换运行信息这一问题，论文双向传递框架的工作流意图和推理引擎的缓存队列状态。报告批处理加速一点六一倍，两类搜索任务端到端加速一点二三与二点四五倍。需要注意：收益取决于负载和引擎能力，任务质量无观察下降不代表所有场景不变。

[阅读论文 PDF](https://arxiv.org/pdf/2610.06597)

### 用可校准的自我验证训练网页智能体

CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling

🌟🌟

面对用可校准的自我验证训练网页智能体这一问题，论文用经校准的自我验证问题筛选网页轨迹信号，复用于训练和测试时选择。多个网页环境报告训练改进和跨模型迁移，在线网页设置也观察到收益。需要注意：只训练一种开放模型，校准依赖训练期强模型评判与网址条件。

[阅读论文 PDF](https://arxiv.org/pdf/2610.06829)

### 工具配置一变，智能体为何又开始调用错误

Understanding and Mitigating Hallucination Escape in Tool-Using LLM Agents

🌟🌟

面对工具配置一变，智能体为何又开始调用错误这一问题，论文跨六种工具配置检验幻觉逃逸，用冲突感知门控和配置派生增强修复。工具选择幻觉下降九个百分点，跨配置均值下降二十三点七个百分点。需要注意：参数值错误收益较小，易混淆工具和新架构仍是边界。

[阅读论文 PDF](https://arxiv.org/pdf/2610.04409)

### 证据变更后，智能体该修记忆还是重读资料

When Evidence Changes: Evaluating Memory Repair and Re-reading in Language-Model Agents

🌟

面对证据变更后，智能体该修记忆还是重读资料这一问题，论文比较证据撤销或替换后的全量重读、来源过滤重读、缓存重建和局部图修复。短记录下记忆管线成本至少为全量重读两倍；长记录重复使用后可能回本，来源过滤重读仍最省。需要注意：仅两种七十亿参数模型和重症监护记录；替换实验的主要确认性检验未显著。

[阅读论文 PDF](https://arxiv.org/pdf/2610.03902)

### 文件改了，智能体上下文却没有更新

When Agent Context Goes Stale: Incoherence in Volatile Agent Context

🌟

面对文件改了，智能体上下文却没有更新这一问题，论文将工具观察与可变文件关联，变化后更新、标注或抑制旧上下文。受控文件变更任务中三个模型均恢复到当前状态，较最强非预言基线节省百分之四十六点四令牌。需要注意：只测四十个本地文件任务，原型主要监控经补丁工具的写入。

[阅读论文 PDF](https://arxiv.org/pdf/2610.05281)

### 让科研智能体自己规划实验搜索

AgentDiscover: Autonomous Discovery with Minimal Search Scaffolding

🌟

面对让科研智能体自己规划实验搜索这一问题，论文由编码智能体自主规划程序搜索并用数据库记录实验与候选关系。二十四项科学和优化任务上，相同模型预算下若干任务优于固定搜索框架。需要注意：可执行评分器是前提，历史竞赛成绩不能等同当前真实科研发现。

[阅读论文 PDF](https://arxiv.org/pdf/2610.05334)

### 用交互轨迹重建智能体的模拟环境

From Traces to Agentic Worlds: Agentic Language World Models for Interactive Environment Simulation

🌟

面对用交互轨迹重建智能体的模拟环境这一问题，论文从交互轨迹重建环境知识册，让世界模型智能体维护持久状态并回应行动。九个环境中下一步观察和长程一致性优于提示式模拟。需要注意：真实系统不可用时难核对全部状态，模拟成功不能直接当现实任务成功。

[阅读论文 PDF](https://arxiv.org/pdf/2610.06100)

## 检索增强生成与知识检索

### 知识库受污染时，检索增强生成还能可靠吗

RAGStress: A controlled benchmark for evaluating retrieval-augmented generation under knowledge-base degradation

🌟🌟

面对知识库受污染时，检索增强生成还能可靠吗这一问题，论文对同一知识库施加事实、数字、相关性和矛盾四类不同强度污染。五万余次条件评估显示语义失真危害最大，干净库准确率不能预测抗污染性。需要注意：多选题和单一生成器构造污染，外部真实知识库迁移有限。

[阅读论文 PDF](https://arxiv.org/pdf/2610.04691)

### 让搜索智能体决定如何处理检索结果

Programmatic Search Agents: Extending Agentic Search Beyond Query Reformulation

🌟🌟

面对让搜索智能体决定如何处理检索结果这一问题，论文允许搜索智能体编排本地程序处理候选、复用证据并选择展示内容。两项基准较固定查询接口提升四与七点五六个百分点，最终步令牌减少约三成。需要注意：代码尚待批准发布，结论限于所测后端与任务。

[阅读论文 PDF](https://arxiv.org/pdf/2610.06689)

### 为复杂多步问题训练开放式证据检索器

T-Search: An Open Agentic Retriever and Playground for Hard Multi-Step Search

🌟🌟

面对为复杂多步问题训练开放式证据检索器这一问题，论文训练多轮证据检索器，只返回排序证据和简短理由，交由下游模型回答。七项英俄基准的一次运行证据召回率为百分之五十六，较基座高十四点四个百分点。需要注意：证据召回不等于最终答案正确率，固定语料设置也不同于开放网络。

[阅读论文 PDF](https://arxiv.org/pdf/2610.06782)

## 多智能体与协作

### 多智能体证明搜索如何把错误积累成知识

Viva La Vida: Verification and Accumulation Failures in Multi-Agent Proof Search

🌟🌟🌟

面对多智能体证明搜索如何把错误积累成知识这一问题，论文逐步追踪多智能体证明器的核验、失败原因与引理入库来源。十二次待审证明无一获一致通过，其中十次因解析或接口问题使批准不可能；拒绝论证仍被抽取成引理。需要注意：只有三个系统运行，不能把个案频率推广到其他证明系统。

[阅读论文 PDF](https://arxiv.org/pdf/2610.04829)

### 多智能体为何把同一证据的转述算成多份

Copies or Sources? Measuring How LLM Aggregators Count Restated Evidence in Multi-Agent Systems

🌟🌟🌟

面对多智能体为何把同一证据的转述算成多份这一问题，论文固定原始证据，仅重复转述，估计聚合器把副本当新来源的权重。四个模型给转述副本赋予非零权重；按来源引用的协议使过早承诺从百分之十一点二降至一点一。需要注意：实验依赖可计数来源和报告概率，复杂社会证据中的依赖关系更难辨认。

[阅读论文 PDF](https://arxiv.org/pdf/2610.06192)

### 多智能体辩论什么时候优于多数投票

When Debate Helps: Proposal Supply and Verification-Aware Readout in Multi-Agent Reasoning

🌟🌟

面对多智能体辩论什么时候优于多数投票这一问题，论文将辩论拆成正确提案供给和证据敏感的最终读出，控制提案集合验证效果。在匹配预算的推理任务中改善多数投票并观察到额外交互收益。需要注意：收益随模型和任务变化，不能推断辩论普遍优于投票。

[阅读论文 PDF](https://arxiv.org/pdf/2610.04686)

### 多智能体分工何时抵得过交接损耗

Attention Tax, Handoff Tax: A Stylised Model of When Multi-Agent LLM Systems Help

🌟

面对多智能体分工何时抵得过交接损耗这一问题，论文建立上下文注意力损耗、交接损耗和共享失败的简化可靠性模型。账本任务预测分工优势约在深度十出现，深度二十以上实测方向一致。需要注意：模型强依赖简化假设，单类账本任务不支持普遍阈值。

[阅读论文 PDF](https://arxiv.org/pdf/2610.06069)

### 让多智能体以结构化产物协调代码任务

AECP: Artifact-Exclusive Communication Protocol for Multi-Agent Code Generation

🌟

面对让多智能体以结构化产物协调代码任务这一问题，论文要求协作智能体只通过结构化产物交换信息，并由框架核查接口承诺。三个仓库生成基准和二十例攻击测试显示更稳的接口协作及较低恶意传播。需要注意：基准以新建仓库和受控攻击为主，既有复杂仓库的交接成本仍需测量。

[阅读论文 PDF](https://arxiv.org/pdf/2610.06481)
