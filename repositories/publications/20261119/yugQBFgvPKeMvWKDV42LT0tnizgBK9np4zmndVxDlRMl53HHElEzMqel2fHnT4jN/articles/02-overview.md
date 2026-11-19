---
title: "arXiv Agent 与大模型研究简报｜2026-11-19｜入选论文全览 1/2"
author: "Thundax"
summary: "本期从智能体的执行循环看效率与可靠性：有限选择能否交给小模型，失败经验如何变成有适用条件的记忆，压缩历史后怎样找回证据，以及测试通过之外还该测什么。多篇论文显示，收益来自模型、流程和评估接口的共同设计，比较时需要保留各自的实验条件。"
description: "本期从智能体的执行循环看效率与可靠性：有限选择能否交给小模型，失败经验如何变成有适用条件的记忆，压缩历史后怎样找回证据，以及测试通过之外还该测什么。多篇论文显示，收益来自模型、流程和评估接口的共同设计，比较时需要保留各自的实验条件。"
---

# arXiv Agent 与大模型研究简报｜2026-11-19｜入选论文全览 1/2

本期从智能体的执行循环看效率与可靠性：有限选择能否交给小模型，失败经验如何变成有适用条件的记忆，压缩历史后怎样找回证据，以及测试通过之外还该测什么。多篇论文显示，收益来自模型、流程和评估接口的共同设计，比较时需要保留各自的实验条件。

本期入选论文全览。

## 智能体系统与工具使用

### 先猜下一步该看哪里，再核验视觉证据

SpecLook: Speculating Where to Look for Fast and Reliable Agentic MLLMs

🌟🌟🌟

视觉智能体反复放大图像会增加延迟。作者让小模型先提出观察区域，按新观察重新回答；证据不足时由大模型检查、修正并融合。所测选择题和物体判断中，准确率与速度均改善。不过，短答案概率和有限观察窗口是重要条件，开放问答及多轮视觉任务尚未验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23483)

### 把失败经验写成有条件的规则，再验证是否值得记住

ARISE: Practical Self-Evolving Memory for Accurate and Cost-Efficient Enterprise Agents

🌟🌟🌟

企业智能体可以不改权重，只从失败中积累修正规则。研究将具体纠正保存在可检索微记忆中，再汇总成有适用条件的宏规则，用验证集决定采用。十四领域平均准确率改善，但部分模型领域仍会回归；微记忆的独立收益较小，生产环境的数据治理和记忆安全也未评估。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23588)

### 从技能里找有限决策，让小模型接手常规判断

Thinking Fast, Anywhere: One System-1 for the Decision Points of Any Agent Workflow

🌟🌟🌟

许多智能体步骤只是从已知候选中选择。研究从技能文档挖掘决策点，用容器执行获得真实状态，训练一个四十亿参数指针模型，低置信时回退大模型。三个未见工作流中成本和时间明显下降，但大部分节省来自先将流程编译成程序，不能全归功于小模型。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23751)

### 在写代码途中反馈复杂度，比结束后统计更有用

Metrics-in-the-Loop: Complexity Feedback Reshapes Agent-Written Code

🌟🌟🌟

研究在每次代码变动后，指出复杂度超标的具体函数，让编码智能体及时修订。三个长程基准、四种模型的结果显示，复杂度集中程度通常下降，功能正确性没有清楚改善。覆盖反馈单独使用并不总有效；代码结构更简单值得关注，但长期维护收益尚未被直接测量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23817)

### 压缩当前状态，但让旧证据在修订时回来

Semantic Context Handoff with On-Demand Evidence for Long-Horizon Agents

🌟🌟🌟

研究将当前事实、假设和工作状态与历史执行证据分开保存；推翻已完成判断时，再激活对应旧证据。匹配选择器实验中成功率从百分之八十升至约八十七，资源接近。全系统也省词元和时间，但部分基线是适配版本，来源链接只保证可找回，不证明内容真实。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24357)

### 自改进之前，先分清新改坏了什么、旧问题还剩什么

GUARD: Stabilizing Recursive Self-Improvement with Regret Guidance

🌟🌟

智能体修改提示和记忆时，单一总分可能掩盖局部退化。研究用任务检查清单区分新增破坏与未解缺口，比较多个改动，并让收益、回归与作用域共同决定是否采用。所测执行门控晋升未见退化，但保证只针对有限自评目标和缓冲集，不是未知任务上的普遍承诺。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23476)

### 进化智能体程序时，别只给父代总分

GRAFT: Execution-Guided Genetic Recombination for Agent Design

🌟🌟

自动设计智能体常按均分选择父代，却不知道各自在哪些实例上成功或失败。研究复用已有执行中的少量具体证据，引导程序交叉与变异；六种推理编程设置的平均测试准确率达到百分之八十二。结果支持实例反馈的价值，但未证明找到的架构能直接迁移到新执行模型或长程任务。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23509)

### 工具并行执行没报错，不代表完成了原操作

RefinementGuard: Counterexample-Directed Semantic Qualification for Hidden Agent-Tool Execution

🌟🌟

把一个工具操作降成隐藏并行图，可能漏分支或改变失败语义。研究在隔离状态上对照独立参照，按父操作义务检验，再将资格证据绑定到具体版本。它接受合法变化，但仍漏掉约一半开发故障；定位任务的受控延迟收益也没有在补丁验证中复现，适用边界很明确。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23611)

### 历史不必全删，也可以按相关性调低阅读清晰度

Resolution as Attention for Efficient Agent Memory Perception

🌟🌟

作者将历史交互渲染成图，用小型相关性估计器为每条记录分配分辨率，重要细节读清、次要记录少用视觉词元。三个代理主干的历史词元减少约一半，平均任务表现接近原始历史。但读字错误仍会发生，方案依赖视觉能力，也未设置整体历史容量的硬预算。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24422)

### 让模型离线改策略程序，程序在线实时玩游戏

Think Offline, Act in Real Time: Self-Improving Visual Game Agents through Code

🌟🌟

实时游戏不会等模型想完。研究让模型在尝试之间编写并修订视觉控制程序，运行时由程序依据截图行动。百余任务的平均进展胜过小型控制器，但同模型小样本对照的平均差异区间包含零。进展不是通关率，离线开发成本与在线响应速度也需要分开衡量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24590)

### 成功轨迹也会误导动作模型，经验要先学会用

F$^3$: What Makes Good Experience in World-Action Models?

🌟🌟

研究不按整段成功与否筛经验，而从成功和失败中提取有效操作，训练适用门控，并把记录分别送入推理和动作接口。两个仿真基准的成功率及步数改善，直接塞入成功记录却可能伤害表现。不过只测固定主干和仿真环境，其他公开榜单版本与硬件也不完全一致。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24708)

## 大模型推理与规划

### 投机解码的草稿模型，可以比目标模型更窄

NarrowSpec: Draft Hidden Width Need Not Match the Target in Speculative Decoding

🌟🌟🌟

使用目标隐藏状态的草稿模型常继承目标宽度。这项研究从头训练半宽或四分之一宽草稿，并合并边界投影以减少计算。相对完整宽度草稿，两类方法在两目标上都有解码收益，低带宽设备更明显。但每变体只有一次训练，键值注意力未缩小，超长上下文收益尚不清楚。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23835)

### 让起始词元先读输入，再作为后续推理的摘要通道

BOS Summary: The First Token Matters

🌟🌟

起始词元常吸引大量注意力，却在标准因果遮罩下只能看到自己。研究只在预填充的单一层放开它的查询行，让其聚合输入，后续继续常规生成。多个模型的推理任务有所改善，但层位需按模型和任务校准，部分问答指标仍落后，开放长文效果尚不清楚。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23508)

### 模型表示了规则和证据，不代表输出就会遵守

A Mechanistic Analysis of In-Context Learning and Out-of-Context Hallucination

🌟🌟

作者通过匹配反事实和激活干预，分析规则与证据片段如何影响关键词元。结果表明，相关信息即使已在内部表示，也需要足够、方向一致的贡献才能改变选择；增强贡献可修复部分事实错误。实验限于三个中小开放模型及受控任务，尚不是通用幻觉修复方案。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24000)

### 把世界压成关系图，再想象长程动作的后果

Embodied Graph: A Relational World Model for Long-Horizon Tasks

🌟🌟

像素世界模型可能在长程预测中积累无关误差。研究只维护任务相关实体关系，再学习节点转移和关系传播；所测预算内，完整方案能完成对照未达到的钻石目标，网页动作选择也受益。但它依赖对象标注前端、页面结构和预定义边，尚未证明能直接迁移到真实世界。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24115)

### 循环语言模型可以晚进入，而不只是早退出

Late Entry in Looped Language Models

🌟🌟

研究让新词元跳过前几轮，从深缓存支持的后段迭代开始，再后台补全和核验。部分配置在精确贪心口径下获得较高加速，但浅循环频繁回滚时反而更慢。结果依赖微调、缓存与单请求带宽条件，有损和精确模式需分开看，连续批量部署也会压缩收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24576)

## 检索增强生成与知识检索

### 搜索训练的奖励，也看新证据究竟帮了多少

Evidence-Based Credit Assignment for Search-Augmented Language Models

🌟🌟

只按最终答案奖励搜索轨迹，会把有用和无用检索混为一谈。作者用冻结策略只看问题与已取文档，测量参考答案概率的增量，再将信用分给搜索及前导思考。两个模型规模的七基准平均匹配率提高，但评分增加训练算力，也可能低估尚未直接指向答案的桥接证据。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23824)

### 知识库不仅要查得出，还要随文件变化保持有效

KnowledgeClaw: Towards Agentic Knowledge Engineering via Omnimodal Hypergraphs

🌟🌟

研究把五种模态文件组织成有类型、带来源的超图，按增删刷新维护依赖，再按查询选择文件、子图或社区证据。六任务综合分领先；但给最强基线同样的句柄和记录后，差距明显缩小。结果支持接口、生命周期与检索协作的价值，十个资料集仍不足以代表任意企业知识库。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24294)

## 多智能体与协作

### 错误信念一旦站稳，更多推理未必能把它拉回来

Tracking Representations in LLM Reasoning Traces for Iterated Games

🌟🌟

研究在重复博弈中逐句追踪对手判断与行动，并结合句子消融及内部激活读出，发现错误假设可能自我强化。对以牙还牙对手，最终判断错误的轮次中有九成多曾出现正确判断。不过，实验仅使用一个模型及固定策略对手，最近十轮历史也可能不足以唯一识别对手。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23403)

### 传递不确定性时，也保留能够纠错的候选信息

LProp: Propagating Latent Uncertainty through Evidence-Conditioned Belief Revision in LLM Agents

🌟🌟

一个置信分数能提醒下游谨慎，却未必告诉它如何修正。作者分别保存错误风险读出和候选答案的潜在支持，再用新证据更新判断。八个受控交接设置的质量与选择性可靠性改善，推理词元也减少；但方法依赖模型隐藏状态，额外编码、存储和更新成本不能用词元数完全概括。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23564)

### 同样的需求种子，也未必得到同样的多智能体供应链

MANGO Arena: Same Seeds, Different Chains Evaluating LLM Agents in a Disrupted Supply Chain

🌟🌟

四个语言模型智能体经营串联供应链，试点出现明显订单波动放大。更关键的是，调用失败曾被算成不下单；即使没有失败，同种子重复运行的上游波动也相差约十七倍。样本仅三种子，无法据此稳定排名模型，但对区分环境故障、真实动作和运行不确定性很有启发。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23613)

### 群体共享经验时，文字要整合，代码要保留原样

OpenKAGE: Open-Ended Lifelong Learning in the Open World via Knowledge-Sharing Agent-Group Evolution

🌟🌟

三个在分立世界行动的代理，将私有情境记忆与可迁移经验分开。文字经验定期合并去重、检查冲突，代码技能保留作者版本和执行记录。游戏实验的探索、生存及跨模型迁移改善，但仅一个世界种子、有限天数；共享知识不等于已验证同场协作。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24302)

### 因果数据清洗，让形式引擎算答案而不是模型猜标签

CaDO: Formal Verification-Guided Multi-Agent Framework for Causal Dataset Repair and Generation

🌟🌟

框架先把题目转换成形式因果查询，由引擎计算并在不确定时弃权，再由多代理修复和生成。人工破坏数据上的下游成绩改善，误改正确标签也更少。不过，主要证据依赖明确形式语义和注入缺陷；原始数据修复虽找到真实矛盾，没有带来模型准确率提升。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24406)

### 把现实资料和固定操作带进社会仿真

ABSClaw: From Invented Worlds to Reality-Grounded Social Simulation

🌟🌟

生成社会仿真时，研究用观测人口、地理和网络确定世界，再以二十六种原子操作表达状态变化。任务基准与三个现实案例显示更好的一致性，并可通过技能扩展运行规模。不过，大量模拟个体不代表全部在线调用模型，输入源和机制假设仍决定仿真能解释什么。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24517)

## 大模型训练与对齐

### 让各层共用词组记忆，同时保留各自的读取方式

Chorus: Shared N-gram Embeddings with Layer-wise Adaptation

🌟🌟🌟

词组查表能增加语言模型容量，但逐层建表浪费内存。这项研究将词元和词组表示共享，再让各层依当前状态缩放、投影。在小主干实验中，十二亿表参数的预测损失优于九十六亿参数对照；优化器状态也显著减少。不过，最大主干仅一亿三千三百万参数，尚不能推断大模型的收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23386)

### 让扩散语言模型学会插入和删除，修复整段错位

Beyond Replacement: Levenshtein Editing for Diffusion Language Models

🌟🌟🌟

扩散生成只替换词元时，漏字或多字会让后续位置整体错位。作者用序列对齐生成插入删除监督，再让模型多阶段修复自己的中间结果。十二基准平均分由五十四点八六升至五十七点一，并行程度也提高；不过只测一个底座，超大生成块仍明显退化，尚无实际延迟结论。

[阅读论文 PDF](https://arxiv.org/pdf/2611.23750)

### 小模型组件的收益，要放到一起再重复比较

Do Frontier Model Ingredients Add Up? A Replicated Factorial Study of Small Language Models

🌟🌟

研究在同一小主干与预算下组合专家层、优化器、混合注意力等五类改动，并用第二种子复跑。主要收益大多可组合，但细微交互也会重复；一个单独有益的门控跨组合后均值接近零。实验只有小规模、单语料与部分组合，比较的是完整配方，不能直接外推大模型训练。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24540)

### 决策模型变强，关键不只是换更大的底座

Piccolo: Co-Evolving Decision Models and Data through Recursive Self-Improvement

🌟🌟🌟

决策模型把文本视觉状态映射为候选概率，研究代理围绕错误切片共同迭代数据、权重和推理配方。作者报告多规模模型的公开及私有评测成绩，并发现固定数据训得更久可能降低部分能力。多项研发动作交织，尚不能孤立自动化贡献，榜单成绩也不等于具体业务验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24651)

### 学习新能力时，把参数更新限制在较少伤及旧能力的方向

CurvDelta: Low-Curvature Delta Modeling For Surgical Learning and Unlearning

🌟🌟

研究用保留数据估计局部曲率，将密集或低秩参数增量投影到低曲率空间。数学、代码和遗忘实验中，新任务表现保持竞争力，一般知识保留更好。但保留约束来自有限代理样本和局部近似，不能保证所有能力不退化，也不能把遗忘指标当成信息已经彻底不可提取。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24654)

### 先从接近成功的位置学，再向更远状态扩展

Depth Before Breadth: Reverse-to-Forward Curriculum with Advantage Decomposition for LLM Agent

🌟🌟

长程智能体只有终局奖励时，难以知道前面哪段值得加强。作者分别奖励到达可解状态和从那里完成任务，先沿成功轨迹反向训练，再做前向探索。两个模型在家务与购物环境的成功率提高，但需要成功参考和中途状态重置；所有后续尝试失败时，学习信号仍会消失。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24697)

### 选混合注意力层时，就按最终离散模型来评估

On-Policy Morphing into Hybrid Attention Models

🌟🌟

把完整注意力改成混合模型时，连续插值和冻结权重评分可能选错层。研究抽样满足预算的离散架构，用自身状态端到端计算并同步适配权重。同预算下长上下文分数改善，但一次层选择比原方案更贵，主要证据来自同一模型族，不代表部署速度进一步增加。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24809)

### 过滤某项训练信号，未必能长期隔离对应能力

General progress substitutes for specific training data in language models

🌟🌟

作者在棋类、分子符号和网页文本等任务中移除特定技能监督，观察背景训练如何影响补学。结果显示，其他能力的积累会降低以后恢复该技能的数据成本。它揭示过滤策略的长期局限，但实验技能可以明确隔离，不能直接推断所有现实危险能力都会按同一规律恢复。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24844)
