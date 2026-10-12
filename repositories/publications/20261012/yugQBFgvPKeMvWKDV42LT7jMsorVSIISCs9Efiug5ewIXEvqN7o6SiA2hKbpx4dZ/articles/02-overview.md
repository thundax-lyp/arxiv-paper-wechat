---
title: "arXiv Agent 与大模型研究简报｜2026-10-12｜入选论文全览 1/2"
author: "Thundax"
summary: "本期关注智能体怎样发现漏测缺陷、维护有证据的安全规则，并把人工操作沉淀为可复用技能。训练与推理部分则追问：更多计算、更多数据和更多顾问调用，究竟带来多少可验证的收益。"
description: "本期关注智能体怎样发现漏测缺陷、维护有证据的安全规则，并把人工操作沉淀为可复用技能。训练与推理部分则追问：更多计算、更多数据和更多顾问调用，究竟带来多少可验证的收益。"
---

# arXiv Agent 与大模型研究简报｜2026-10-12｜入选论文全览 1/2

本期关注智能体怎样发现漏测缺陷、维护有证据的安全规则，并把人工操作沉淀为可复用技能。训练与推理部分则追问：更多计算、更多数据和更多顾问调用，究竟带来多少可验证的收益。

本期入选论文全览。

## 智能体系统与工具使用

### 把人工电脑操作整理成可复用技能

Work2Skill: Capturing Human GUI Experience for Reusable Agent Skill Induction

🌟🌟🌟

一次人工操作演示，怎样变成下次可用的技能？研究同步保存视频、输入和界面证据，让智能体主动查阅关键片段，再写成操作流程。四种执行模型在两套任务上获得收益，部分同应用变体也能复用。但归纳和执行成本因模型而异，技能尚未证明能跨任意软件迁移。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12984)

### 只在能改善任务结果时，向用户追问

CLEAT: Learning Value-Guided Clarification for Interactive Agents

🌟🌟🌟

多问一个问题，未必能帮用户把事情办好。研究从相同对话状态比较“先问”与“直接继续”的任务结果，再训练何时追问的控制器。旅行和意图判断等任务得到提升，也改善遗漏条件的覆盖。它关注问题的决策价值，但依赖模拟用户及固定候选问题，真实交互仍有距离。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12655)

### 研究智能体的提示优化，收益可能来自反馈结构

Reflective Prompt Optimization of a Deep-Research Agent: A Topic-Disjoint, Multi-Seed Protocol for Measuring Transferable Gains and Prompt-Level Overfitting

🌟🌟

自动改提示为什么有效，不能只看最终分数。研究在主题隔离测试集上观察到评分从0.702升至0.781，再删除提示中记住的验证答案，收益仍在；只给标量反馈反而更弱。它提示结构化反馈比堆积答案重要，但部分收益也能由人工改写提示复现。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12601)

### 用合成桌面软件扩展计算机操作训练环境

SoftwareGym: Scaling Computer-Use Agent Training with Diverse Synthesized Software Environments

🌟🌟

计算机操作训练缺少丰富、可验证的软件环境。研究先设计并生成桌面应用，再用界面测试修复，得到182个应用及训练轨迹。只用合成环境数据训练，原生软件评测的三次尝试成功率从41.39%升至56.97%。但生成测试可能漏掉真实缺陷，该指标也不能当作单次成功率。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12611)

### 让智能体记住可反驳的规律，而非堆积经历

EvoBelief: Falsifiable World Models for Self-Improving LLM Agents

🌟🌟

经验记忆容易把偶然成功写成通用规律。研究把经验整理为带适用条件、支持测试和反例的信念，再决定复用、修改或撤销。两个模型在特定家居模拟设置中分别提升23.88和31.34个百分点；已有跨任务记忆时收益较小。方法依赖可检验环境，开放世界仍更难。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12789)

### 用小型顾问改善冻结智能体的高成本推理

Hindsight Structured Advice Distillation: Steering Executor Agents with Advisors Trained on Their Failures and Task Characteristics

🌟🌟

让强智能体全程高强度推理很贵。研究用教师复盘轨迹，训练小顾问在执行前提供结构化建议，执行模型本身保持冻结。金融任务的标准条目达标率从52.9%升至56.6%，成本低约37%。这不是整题成功率，且专有金融环境与有限迁移结果限制了外推。

[阅读论文 PDF](https://arxiv.org/pdf/2610.13000)

### 训练负责改进执行框架的智能体

Evo$^2$: Evolving the Evolver through Weight-Harness Co-Evolution

🌟🌟

智能体表现取决于执行框架，也取决于谁来改这个框架。研究训练提案者与反思者，让它们从反馈中修改流程，再迁移到冻结执行模型。多个编码与记忆任务改善。关键是训练“改进者”，不是证明系统无需训练；部分闭源实验只覆盖小子集，不能当作完整基准成绩。

[阅读论文 PDF](https://arxiv.org/pdf/2610.13025)

### 学会回退到有用状态，而不是失败后从头开始

Travel Back To Move Forward: Retrospective Exploration and Evolving for Long Horizon Agents

🌟🌟

失败后重来，会浪费已经正确的步骤。研究让智能体保存有效前缀，回到合适状态，并利用失败分支的经验继续执行。扫雷三次尝试成功率达到95.3%，但只给普通策略增加回退并不稳定有效。收益依赖可恢复环境和额外尝试，不能外推到真实世界的不可逆动作。

[阅读论文 PDF](https://arxiv.org/pdf/2610.13058)

### 复用独立文档缓存，减少重复前缀计算

KV-Repurpose: A Testbed for Evaluating Non-Prefix KV-Cache Reuse

🌟🌟

检索增强请求经常重复文档，却因为排列不同无法命中完整前缀缓存。研究把文档段独立缓存，复用时重新定位位置编码；特定请求负载下命中率约63.9%，传统方式约3.3%。但独立段牺牲部分跨文档上下文联系，复杂推理会掉分，命中率不能代替答案质量。

[阅读论文 PDF](https://arxiv.org/pdf/2610.13060)

### 把长期研究结论绑定到可修改的证据银行

LongHarness: Advancing Agentic Reasoning over 100M-Token Corpora via Stateful Evidence Management

🌟🌟

长周期研究最难的，可能是维护哪些结论仍有证据。研究把来源片段、结论和未解决缺口写进证据银行，允许撤回或替换，并据此安排后续搜索。同模型在两版研究任务上明显提高成绩。但主结果缺少充分重复运行；大语料是外部存储，不能解释成超长上下文能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.13075)

### 观察程序实际写了什么，再修复失败的视觉操作

VETR: Execution-Grounded Self-Improving Agent for Symbolic Graphics Reasoning

🌟🌟

视觉编程任务出错后，反复让模型重写可能既贵又不稳定。研究记录程序实际写入的状态，用确定性步骤修复，再检查视觉目标。同模型生成预算下得到收益。它适合副作用可追踪的程序，但未知库和复杂写入仍是盲区；省去模型调用，也仍要支付执行与核验成本。

[阅读论文 PDF](https://arxiv.org/pdf/2610.13098)

### 弱执行者何时值得调用强顾问

Ask Your Advisor: Learning When to Consult Stronger Models in Agentic Systems

🌟🌟

弱智能体不必每步都请强模型帮忙，关键是何时值得问。研究按任务收益减咨询成本学习调用策略，三个任务族中恢复了强模型优势的44%—81%，成本低于全程使用强模型的一半。这个比例不是成功率，且只验证了一个模型组合和较小测试集，采纳建议仍可能失败。

[阅读论文 PDF](https://arxiv.org/pdf/2610.13870)

## 大模型推理与规划

### 共享循环层如何兼顾一次计算与多轮推理

One Model to Loop Them All: Elastic Latent Recurrence for Language Models

🌟🌟🌟

共享一组模型层并反复计算，可能增加推理深度，也可能损害只运行一次时的能力。研究用门控更新和混合循环训练缓解这一矛盾。匹配预训练对照中，四轮循环带来明确增益，一轮性能大体保留；代价是额外训练与推理计算，更多循环也会逐渐失去收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12582)

### 先挑选兼容草稿，再用轻量修正加速生成

Contextual Correction of Parallel Draftsfor Speculative Decoding

🌟🌟🌟

推测解码的草稿出错时，正确词元可能已经藏在其他候选里。研究先从并行草稿挑出兼容序列，再做轻量修正，最后交给大模型验证。平均加速较强基线提高8%—19%，高并发下仍有收益。但数学、代码与聊天的收益不同，还需计入联合训练和部署硬件。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12570)

## 检索增强生成与知识检索

### 检索到的内容，先预览再决定是否读全文

SEEDS: Preview-Guided Evidence Admission for Search Agents

🌟🌟🌟

检索排名靠前，不代表当前推理最需要它。研究先展示候选预览，让智能体决定读哪些全文，而不是固定读前几篇。本地问答精确匹配成绩提高2.9—6.3分，全文读取减少60%—79%。但预览也有成本，强模型在个别任务掉分，筛选仍可能漏掉关键细节。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12932)

### 查询时重建时间片，改善群组对话记忆

Temporal Evidence Forests for Long-Horizon Multi-Party Conversational Memory

🌟🌟

群组聊天的同一话题常被别的消息打断，固定切块难以保留上下文。研究先找到相关锚点，再按时间密度重建局部片段，重新检索并压缩为记忆状态。两类群组记忆测试均报告改善。方法无需重写存储，但固定时间半径和候选截断仍可能漏掉跨时段联系。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12874)

### 多模态检索需要分别定位证据和读取图表

Locate, Judge, Read: Role-Specialized Tool Agents over a Knowledge-Point Index for Open-Domain Multimodal Document QA

🌟🌟

多模态长文问答，既要找到相关知识，也要读懂原始图表。研究先建立带关系的知识点索引，再分别用检索、桥接判断和视觉读取完成回答。一个基准中，成绩从同索引单轮40.4升至47.5。提升来自工具组织与索引共同作用，预处理成本和弱模型协议失败不能忽略。

[阅读论文 PDF](https://arxiv.org/pdf/2610.13128)

### 为超长文本加噪后，怎样保留问答效用

DP-MIND: Differentially private memory-guided Long context Inference

🌟🌟

私有长文加噪后，关键信息可能在多轮压缩中丢失。研究逐块更新记忆，训练模型适应扰动，并在可信本地修正答案；180万词元设置中，比直接记忆方案保留更多问答效用。不过隐私定义与词元距离相关，不能视为完整文档的无条件保护，也依赖本地可信处理。

[阅读论文 PDF](https://arxiv.org/pdf/2610.13132)

## 多智能体与协作

### 把大模型拆成异构专家，并训练交接协议

Collaborative Learning and Reasoning over Model Slices

🌟🌟

多智能体协作常因重复推理增加成本。研究从大模型构建不同专家，并训练继续处理、交给谁和何时结束的协议。多个任务上保持或改善成绩，同时减少参数加权词元成本。它说明分工和交接值得共同优化，但这项成本代理指标不能直接换算为延迟或显存收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12927)

## 大模型训练与对齐

### 标记证据来源，避免多轮转述放大确信

Provenance-Aware Belief Updating in Human-AI Feedback Loops

🌟🌟🌟

多个智能体重复转述同一消息，容易把它当成多份独立证据。研究在训练中显式标记来源关系，约束信念更新避免重复计数。域外测试的更新误差下降约41%—44%，多轮漂移也减少。但实验给定来源谱系且强制二选一，开放文本中的溯源问题仍未解决。

[阅读论文 PDF](https://arxiv.org/pdf/2610.13008)

### 合成训练数据时，同时调整任务因子与采样分配

Know What You Don't Know: Agentic Data Synthesis by Evolving Generation Space for Closed-Loop Learning

🌟🌟

固定提示合成数据，容易持续生成同一类低收益样本。研究让设计者修改任务因子、规划者调整采样份额，再根据训练后的表现更新两者。工具任务上总体成绩从首轮70.9升至77.8。结果说明合成空间也值得优化，但目前只覆盖两个任务族，生成和反馈成本不能省略。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12593)

### 在相同任务成绩内，用行为偏好继续训练

Beyond Binary Verifiable Rewards: Behavioral Self-Rewarding for SWE Agents

🌟🌟

只看任务通过或失败，会把行为质量不同的轨迹当成一样。研究在同任务、同验证结果内比较操作方式，把偏好奖励限制在不会颠倒通过与失败的位置。140亿参数代码模型成绩从32.1升到34.7。方法可复用既有轨迹，但仍需要额外评判，且大模型的增益较小。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12598)

### 微调前建立任务银行，减轻模型遗忘

Self-Preservation in Language Models

🌟🌟

模型学会新领域后，原有能力可能掉分。研究在更新前冻结模型，让它生成任务银行，微调时把这些任务与新数据混合。多种小模型和域外测试显示回放有助于保留能力，但精细挑选任务主要对较大模型有效；固定预算下，也会减少新领域样本的训练份额。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12602)

### 把过难的数学种子题拆开，再长成可学习题

MagicBeanStalk: Escaping the RLVR Zero Advantage Trap with Recursive Data Synthesis

🌟🌟

数学训练题太简单或太难，都可能没有有效学习信号。研究先核验困难种子，拆出可解步骤，再生成难度适中的变体，并按当前模型能否部分解对来筛选。两个模型的数学成绩均提升。难度校准值得借鉴，但教师判断可能出错，生成和筛选的调用成本也需纳入。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12659)

### 奖励模型榜单高分，不一定最能改善策略

Unsupervised Multimodal Reward Modeling

🌟🌟

视觉奖励模型评测越好，是否就越适合训练策略？研究冻结模型，只在不同中间层训练小型奖励头，发现层选择明显影响成绩；更重要的是，榜单较弱的自举奖励反而能更好改善下游幻觉和问答。选择奖励器应看实际策略收益，但这些发现仍受合成负例和任务范围约束。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12707)

### 自蒸馏时保留表示结构，减少旧能力倒退

Mitigating Capability Degradation in LLM Self-Improvement via Representation Geometry Regularization

🌟🌟

模型自蒸馏时，学会新题也可能把原来会的题做错。研究约束学生表示的簇内和簇间结构，使其接近教师，同时保留既有正确行为。多个蒸馏方法减少能力倒退，顺序训练也缓解遗忘。但几何变化并非已证明的唯一原因，聚类选择和任务范围仍会影响结果。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12855)

### 先预测用户会怎样回答，再修订自己的回复

Collaborative Theory of Mind: Learning to Self-Revise by Anticipating User Responses

🌟🌟

对话助手常要等用户指出问题才改答案。研究让模型先在内部预测用户反馈，再修订草稿，并训练预测与任务结果。数学成绩从74.1升至79.6，部分任务减少交互轮次。它可能降低无效往返，但实验用户由模型模拟，不能据此断言真实用户更满意。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12872)

### 按学生难度逐步缩减推理训练数据

Learning More by Training Less: Uncertainty-Guided Progressive Contraction for Efficient Reasoning Post-Training

🌟🌟

推理训练数据多，不代表每条都有效。研究先用教师找出不确定步骤，再由学生自身损失选择有用样本，逐步压缩训练集合。部分设置只保留极少优化暴露仍有收益。这个比例不包括教师生成和筛选成本，不能换算为端到端加速，跨模型家族的效果也较弱。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12933)

### 按任务带来的条件信息，加权监督训练

What Should SFT Learn? Conditional Information Gain for Generalizable Post-Training

🌟🌟

监督微调通常同等看待答案中的各个词元。研究用冻结参照模型比较有无题目条件时的答案概率，把任务真正改变的信息用于加权训练。数学与代码评测获得改善，且无需在线环境采样。不过参照评分仍有开销，信息差也不等于已经验证的推理因果贡献。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12995)

### 让模型在生成时记住文本位置与编辑边界

AutoIndexer: Flexible-Order Decoding by Training Causal Models on Chains of Edits

🌟

长文本编辑容易丢失位置和修改边界。研究给模型增加游标与标记预测任务，再用扰动后的文本学习恢复。模型保留了普通语言任务表现，但自由修复中删除成功率为53%，插入只有10%。它提供了显式位置训练的思路，尚不能视为通用文本修复器。

[阅读论文 PDF](https://arxiv.org/pdf/2610.12545)
