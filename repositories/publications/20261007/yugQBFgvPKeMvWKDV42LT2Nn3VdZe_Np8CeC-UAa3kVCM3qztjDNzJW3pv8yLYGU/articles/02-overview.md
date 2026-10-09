---
title: "arXiv Agent 与大模型研究简报｜2026-10-07｜入选论文全览"
author: "Thundax"
summary: "本期重点观察智能体如何取得证据、何时可以行动，以及长期记忆与多层门禁是否真的提升可靠性。另有长文检索、协作调度和科学研究工作流的实证结果。"
description: "本期重点观察智能体如何取得证据、何时可以行动，以及长期记忆与多层门禁是否真的提升可靠性。另有长文检索、协作调度和科学研究工作流的实证结果。"
---

# arXiv Agent 与大模型研究简报｜2026-10-07｜入选论文全览

本期重点观察智能体如何取得证据、何时可以行动，以及长期记忆与多层门禁是否真的提升可靠性。另有长文检索、协作调度和科学研究工作流的实证结果。

本期入选论文全览。

## 智能体系统与工具使用

### 研究智能体如何避免把高分误报为发现

EPOCH: Reliable Discovery through Evidence-Governed Search

🌟🌟🌟

自动研究系统会搜出得分更高的程序，却可能把脆弱结果包装成发现。论文用任务契约、证伪、准入和独立重放约束主张；在算法任务上平均标准化得分为0.65，所比最强基线为0.53。多个内部任务仍需外部独立复核。

[阅读论文 PDF](https://arxiv.org/pdf/2610.06986)

### 长期记忆应按信息类别决定是否写入

When to Remember, When to Abstain: Category-Conditioned Retention for Reliable Agent Memory

🌟🌟

助手记住用户偏好前，须先判断话语是否足以支持该断言。研究按语义类别设置不同写入门槛，在合成人物数据上把无依据保留率由6.2%降到4.0%，同时较统一门槛保有更广覆盖；数字依赖模型裁判，不能直接视作真实用户效果。

[阅读论文 PDF](https://arxiv.org/pdf/2610.07100)

### 只追加记忆能否减少网页智能体遗忘

AMBER: Training Long-Horizon Web Agents through Append-Only Memory

🌟🌟

长任务中的反复改写可能删去先前错误和纠正。研究让网页智能体边行动边写只追加记忆，凭任务结果奖励训练。在所测网页任务中，平均成功率较覆写记忆高4.09个百分点；记录会随行动累积，超长任务仍需另设计压缩。

[阅读论文 PDF](https://arxiv.org/pdf/2610.07118)

### 把用户的计划当事实，是记忆写入错误

AgentMemGate: Addressing Speculation Contamination in Conversational Assistant Memory

🌟🌟

“可能搬家”与“已经搬家”会导向不同后续行动。研究在写入资料库前区分猜测、已完成事件和更正，未决计划不直接变成事实；留出对话显示现有系统确有此类误写。评估基于构造场景，开放式记忆的抽取遗漏仍需处理。

[阅读论文 PDF](https://arxiv.org/pdf/2610.07707)

## 大模型推理与规划

### 为模型生成的规划启发式提供机器证明

LeanPlan: Optimal Planning with LLM-Generated Heuristics and Admissibility Proofs

🌟🌟

语言模型写出的搜索捷径可能很快，却未必保证找到最优方案。论文让智能体同时生成启发式、适用假设及形式化证明，交由证明内核检查后用于搜索；在竞赛及新增领域测试可行性。适用范围受领域形式化与证明成本制约。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08246)

### 让模型规划证明步骤，由符号引擎负责数字

SCOPE: Certified Theorem Proving with a Language Model as the Policy Planner

🌟

长数值证明只要一处数字错误就会整条失效。研究限制语言模型在算子词表内规划，数值由符号引擎执行，最终交编译器认证；在218题中以小模型通过191题。题集和词表均较受控，不能据此推断一般数学证明能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08319)

## 检索增强生成与知识检索

### 不生成摘要，也能做好长文层级检索

Tree Navigation Without LLM Summaries: A Matched-Cost Study of Hierarchical Retrieval for Long-Document QA

🌟🌟🌟

长文问答常需从不同段落拼接证据。研究把原文片段组织成确定性树，用词法与向量信号导航，最后只交付原片段。在匹配成本的比较中，它优于所测层级方案，并与最强平面检索打平；主结果依赖复现基线，不能概括全部摘要树设置。

[阅读论文 PDF](https://arxiv.org/pdf/2610.06902)

### 用同一语言模型处理长上下文与语料检索

UNREAL: Unifying Retrieval and Long-Context with a Single Model

🌟🌟

长上下文和海量语料都需要找到决定答案的证据。研究从冻结模型内部状态形成查询，并学习片段表示，在大规模维基百科索引上提高多跳证据召回。多向量片段增加存储成本；训练与评估主要围绕维基问答，异构领域迁移待验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08463)

### 检索增强系统调参先诊断错误发生在哪

Agentic AutoRAG: RAG Pipeline Optimization through Reasoning-Driven Agents

🌟

只用总分搜索检索增强系统配置，会混淆取证失败与生成失败。论文在冻结测验上逐题归因，再由智能体提出下一组参数；三个任务前十次试验的最佳配置，达到或超过若干统计方法三十次试验的留出质量。自动生成测验与裁判仍会带入偏差。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08452)

## 多智能体与协作

### 并行编码智能体先规划接口与合并顺序

Verifying Coordination in Parallel Coding Agents: NP-Bench and a Scheduling Planner

🌟

多个编码智能体各自测试通过，集成后仍可能因重叠修改或接口变化失败。论文按工作范围预先分区，再按依赖排序合并；九个确定性场景中规划方案全部通过。真实智能体实验范围较窄，效果取决于任务范围是否能事先声明。

[阅读论文 PDF](https://arxiv.org/pdf/2610.07261)

### 让多智能体规划与选人分开学习

Decoupled Multi-Agent Orchestration

🌟

固定工作者池容易让编排方案随人员更换失效。论文先生成任务依赖，再用探针和在线反馈选择执行者；在留出与分布外任务中报告质量和开销改善。额外规划本身消耗推理资源，迁移效果也取决于探针能否代表真实能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.07556)

### 并行智能体为什么有时比串行更慢

SquidAgent: Parallelize Wisely, Coordinate Efficiently

🌟

拆分任务后，执行者常重复重建背景，还要花时间协调输出。论文把这些开销纳入并行决策，再用上下文分叉和确定性层级调度减少浪费；九项任务显示时延与代币收益。调度器对工作量的预估可偏离实际数倍，收益随任务结构变化。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08647)

## 大模型训练与对齐

### 教模型从多篇文献中合成研究构想

IdeaAnchor: Teaching LLMs to Turn Literature into Research Ideas

🌟

从论文找研究空白需要理解每篇先前工作的角色，而非仅拼接摘要。论文从已发表成果挖掘论文关系与目标约束，作为示范、自蒸馏和强化学习的训练信号，并在专家复核的评测上报告改善。训练样例由成功论文逆推，可能偏向已有研究路径。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08781)

## 评测与安全

### 检索相关的记忆，也可能无权交给智能体

The Right Memory in the Wrong Context: Verifying Retrieval Admissibility in Long-Term Agent Memory

🌟🌟🌟

长期记忆系统可能找到正确主题，却把属于他人或不符当前授权的资料送入提示。研究先标记记忆可用性，再分别追踪必要证据召回、提示暴露和最终泄露。冻结排序回顾中前20条必要证据召回由0.432升至0.533；答案准确率提升不能单独证明泄露风险下降。

[阅读论文 PDF](https://arxiv.org/pdf/2610.07309)

### 多重行动门禁的错误并不会自动相互抵消

Evaluate the Stack, Not the Layer: Do Deterministic and LLM Gates for Agent Actions Fail Independently?

🌟🌟🌟

叠加两个模型裁判，常被想象为获得两层独立保护。研究在1119条已标注行动上测得，两个裁判只相当于约1.2至1.4个独立层；规则加裁判接近两层。实验没有自适应攻击，而且人工复核如何计分会改变若干结论。

[阅读论文 PDF](https://arxiv.org/pdf/2610.07359)

### 工具智能体如何从证据走到行动

From Evidence to Action: How Tool-Using Agents Fail

🌟🌟🌟

工具智能体可能在尚未查清前提时就改动外部状态。研究用六类业务、五级任务协议和证据账本分离判断、调查、单步与多步行动；十种模型及运行框架组合显示静态判断和真实执行差距明显。基准能定位断点，尚不能替代开放环境实测。

[阅读论文 PDF](https://arxiv.org/pdf/2610.07753)

### 让网页智能体在变化的提示注入中训练

AdvSim2Real : Training Web Agents Against Adaptive Prompt Injection in a Web World Model

🌟🌟🌟

恶意网页会把任务数据和劫持指令混在一起。论文在冻结网页模拟器中共同更新任务难度、注入攻击者和执行智能体；在150项任务上，面对未见过的强攻击者时完成率较基础模型相对提高33.6%。真实浏览器迁移有初步证据，安全保证仍需更广泛测试。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08773)

### 何时把问题从小模型升级到大模型

Evaluating Escalation Signals for LLM Routing: Targets, Controls, and Five Ways to Fool Yourself

🌟🌟

小模型不确定并不意味着大模型一定能答对。论文区分预测小模型错误与预测升级收益，用语义分歧信号做成本匹配实验；在所测数学任务中，升级后的准确率较随机分流最多高九个百分点。早期合成任务的优势却可由简单难度规则解释。

[阅读论文 PDF](https://arxiv.org/pdf/2610.07354)

### 能否预测何时压缩智能体上下文会伤害任务

Does an Agent's History Tell You When Compaction Will Hurt? A Modest, Bounded Effect on the TRACE Paired-Replay Corpus

🌟🌟

按固定代币数压缩对不同任务阶段可能有不同影响。研究在590个成对重放边界上检查先前轨迹是否能预测后续错误或重复操作；最佳扩展触发器留出区分度约0.66，优势有限。结论只覆盖所测应用环境、特征和压缩方式。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08722)

### 智能体能否把一次解题能力装进廉价产物

Agent in a Bottle: Can LLM Agents Turn Their Capabilities Into Cheap, Scalable Artifacts?

🌟🌟

模型可以逐项答题，却未必能自动写出供大批同类任务复用的程序或小模型。论文在固定时间、算力与调用预算下评测这种能力；十个模型、三类任务的60次运行中，48次低于设定保底参照。结果依赖任务、预算与运行框架。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08775)

### 给智能体基准分数加一层可信度检查

A Trust Layer for Agent Evaluation

🌟

获得基准分数不说明智能体真的做了工作，也不说明再次运行仍会成功。论文在原评分旁增加证据、诚实报告和重复运行核验，在五种智能体的108项任务中发现得分与可追溯工作不一致的案例；核验仍受保存轨迹的完整性限制。

[阅读论文 PDF](https://arxiv.org/pdf/2610.07274)

### 用知识截止后的研究检验科学智能体

BioStudyBench: Evaluating Agents on Post-Cutoff Biomedical Studies

🌟

智能体能复述发表结论，不代表它会查找数据并重做分析。研究选取25项后发表的生物医学任务，限制可检索文献日期，并比较开放数据工具前后的表现。任务数量有限，公开来源仍可能包含答案线索，时间隔离也会随模型更新而失效。

[阅读论文 PDF](https://arxiv.org/pdf/2610.07614)

### 让智能体评测分数能追溯到证据与决策

EIO-Agents: The Missing Semantic Layer for AI Agent Evaluation

🌟

评测系统常保存分数和轨迹，却缺少说明证据怎样支持主张、主张怎样导致放行的共同语义。论文设计类型化证据及可核验记录格式，让解释可由规则重建。它提供互操作原型，尚不能证明跨平台广泛采用或实际部署更安全。

[阅读论文 PDF](https://arxiv.org/pdf/2610.07675)

### 科学智能体的经验能否稳定积累成能力

ScienceClaw: Benchmarking Continual Self-Evolution of AI-for-Science Agents Across the Natural and Social Sciences

🌟

一次科学任务成功，不等于新技能能在下一项任务继续奏效。研究以23学科的顺序任务和独立重置评测检查改进、保留与跨数据迁移，仅在重放和外部检查通过时保留更新。自动评分可能漏掉领域错误，仍需专家核验重要发现。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08691)
