---
title: "arXiv Agent 与大模型研究简报｜2026-09-07｜入选论文全览 1/2"
author: "Thundax"
summary: "工具增多、模型升级、训练题目变少，代理真的会更可靠吗？本期从执行框架演化、记忆迁移和证据使用切入，同时关注混合电脑操作与在线蒸馏。重点不是孤立的分数提升，而是收益在什么条件下成立，以及怎样把结论变成可检验的研究与工程实践。"
description: "工具增多、模型升级、训练题目变少，代理真的会更可靠吗？本期从执行框架演化、记忆迁移和证据使用切入，同时关注混合电脑操作与在线蒸馏。重点不是孤立的分数提升，而是收益在什么条件下成立，以及怎样把结论变成可检验的研究与工程实践。"
---

# arXiv Agent 与大模型研究简报｜2026-09-07｜入选论文全览 1/2

工具增多、模型升级、训练题目变少，代理真的会更可靠吗？本期从执行框架演化、记忆迁移和证据使用切入，同时关注混合电脑操作与在线蒸馏。重点不是孤立的分数提升，而是收益在什么条件下成立，以及怎样把结论变成可检验的研究与工程实践。

本期入选论文全览。

## Agent系统与工具使用

### 工具越加越多，代理会不会忘了原本会做的事？

EvoHarnessBench: Can Your Agents Keep Pace with an Evolving Harness?

🌟🌟🌟

工具、技能和协作代理持续扩充，旧任务能力未必随之提升。EvoHarnessBench把能力目录按阶段开放，同时观察新任务适应和旧任务保持，发现扩容可能引入干扰，持久记忆也并非稳定解法。它提供了比固定工具测试更贴近升级过程的视角，但目前只模拟累积增长，没有覆盖接口撤销或替换。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04280)

### 模型升级了，旧记忆还能用吗？

Does Your Agent's Memory Survive a Model Upgrade? A Controlled Study of Memory Portability

🌟🌟🌟

本文分别更换记忆写入者、读取者与嵌入版本，发现自然语言笔记存在方向不对称的迁移变化，同维向量混用也会静默损害检索。只靠压缩笔记往往无法修复已丢信息，保留源历史在部分方向有帮助。实验只有两个小模型和合成历史，不证明知识图谱普遍优于笔记，也不意味着应无条件保留用户历史。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05339)

### 电脑代理不仅要会点界面，还要学会选接口

CUA-Universe: A Scalable and Dynamic Environment for Hybrid GUI\+CLI Agents

🌟🌟🌟

CUA-Universe自动把桌面软件改造成共享状态的GUI+CLI环境，合成任务并收集经验证的混合轨迹。微调后的9B模型在同接口比较中同时改善任务分数和效率，也向未见工具格式迁移。但实验限于Linux单应用、可脚本化软件，成功判分依赖VLM；开放命令接口本身并不等于学会使用。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05374)

### 用性能剖析带着代理优化TPU内核

MaxKernel: Agentic Kernel Generation for TPUs

🌟🌟

MaxKernel把规划、生成、测试和性能剖析接成搜索循环，让代理根据瓶颈继续改写TPU内核。50项任务报告相对XLA的1.58倍几何平均加速，但该指标把变慢的任务按1倍封底，部分任务数值容差也更宽。方法有工程参考价值，实际采用前应同时检查慢例、正确性和真实端到端开销。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04523)

### 计划失效后，只改还没执行的那一段

TROVE: Adaptive Agent Skill Orchestration via Trace-Grounded Route Validation and Editing

🌟🌟

TROVE先从搜索轨迹提取技能和条件转移图，执行时每次只承诺一个技能；新结果到来后保留可用路线、插入局部响应或替换后缀。在代码、问答和数学任务中常兼顾质量与线上效率。代价并非处处减少：部分问答token反而增加，离线经验构建成本也需另计。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05019)

### 技能库不只要有卡片，还要有时序和层级

Trace2Tower: Transition-Aware EigenTrace Induction of Multi-Level Skills for LLM Agents

🌟🌟

Trace2Tower把执行轨迹抽象为事件图，用语义、转移和成功失败证据形成动作、过程与策略三层技能，并依据验证反馈修订。在ALFWorld和WebShop上取得较好表现。实验仍集中于小型交互环境，部分复现元数据不完整；更值得借鉴的是保留依赖结构，而非只记住相似文本。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05261)

### 代理失败归因：先找依赖，再试局部修正

DCFA: Dual-view Causal-inspired Attribution for Failure Reasoning in LLM-based Multi-agent Systems

🌟

DCFA先从整条多代理轨迹建立依赖图，再用修正前缀的反事实分析定位关键步骤，改善了基准中的步骤归因。需要留意，这里的反事实主要由LLM模拟，并非把动作放回真实环境重跑，还依赖正确结果信息。它更适合作为诊断线索，不能直接等同经干预确认的失败原因。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04749)

### 交互轨迹变成技能文件，不代表能力会持续增长

From Interaction Traces to Persistent Skills: Online Evolution for Computer-Use Agents

🌟

该系统冻结桌面执行模型，每轮使用只读技能快照，结束后再依据轨迹创建或修订技能。四个应用领域的总体比较支持技能记忆有帮助，但也出现多轮修改后仍反复失败的案例。可版本化经验便于审计，真正的学习效果仍要由任务表现衡量，不能靠技能数量或更新次数证明。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04869)

### 代码重构评测，要把工具与提示一起记录

RefactorPlatform: An Open-Source Harness for Controlled Evaluation of Repository-Scale Refactoring Agents

🌟

RefactorPlatform为重构代理保留独立工作区、完整diff、终端日志和token记录，比较结构工具、AST检索与LSP等配置。小规模实验中配置差异会显著改变结果，说明“某模型的重构能力”并非单一分数。但100个Python任务、单次运行不足以支持稳定排名，平台价值大于泛化结论。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04898)

## LLM推理与规划

### 模型会检查错误，为什么还会采纳错误答案？

Evidence Integration in Large Language Models

🌟🌟🌟

把同一问题拆成自主作答、独立核查和使用外部候选三个任务，研究发现：模型能拒绝的错误，进入作答流程后仍可能被采纳。约束任务中的反差尤其明显，提示验证能力与决策控制不是一回事。这是经过控制的候选答案实验，不能把其中的错误采纳率直接当成真实RAG系统的幻觉率。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04290)

### 判断问题是否含糊，未必需要先生成所有答案

From Answers to Interpretations: Rethinking Ambiguity-Induced Aleatoric Uncertainty Estimation in LLMs

🌟🌟

面对有多种解释的问题，本文先生成并聚类解释，用解释分歧检测歧义，而不是为每种含义都生成答案。多个基准的平均AUROC略高，输出量与调用数明显降低。这个思路适合低成本决定是否追问，但模型没想到的解释不会进入估计，不能把低分歧当作问题没有歧义。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04543)

## RAG与知识检索

### 检索选中的那份资料，真的送到了阅读器吗？

Does the Selected Object Reach the Reader? Auditing Identity Handoffs in Grounded Language-Model Pipelines

🌟🌟

检索指标可能忽略一个基础错误：选中的对象与实际送给模型的正文不是同一份。研究冻结排序，核对ID及正文，在HybridQA管线中发现这种错位会改变部分判断。它提供的是证据传递审计，而非提高回答准确率的新检索算法；单数据集发现也不意味着所有RAG都有同样故障率。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04579)

### 不存原文向量，能否兼顾检索与隐私？

Shadow Queries for Private Retrieval in Vector Databases

🌟🌟

Shadow Queries为文档生成多角度查询，向量库只存这些查询的表示，再映射回正文。实验显示它能保留检索效用并削弱原文重建，包括部分自适应攻击。但低词面重建相似度不等于敏感事实不泄露，结果也依赖嵌入模型和攻击器；仍需要独立的隐私威胁测试。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04767)

### 紧预算记忆：检索之外，归组和拼装同样关键

Compact-Memory LLM Agents via Online Max-Member Clustering and Atom-Aware Packing

🌟🌟

RSM用更宽容的簇成员相似度决定记忆合并，再按簇和时间组装上下文，而不是把检索片段平铺。AMA-Bench中4k预算达到全文约83%的质量、32%的token成本；匹配消融支持两项设计的作用。不过更高预算仍有更强基线，在RealMem上相对BM25的微小差异也不显著。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04915)

### 用SQL把幻觉核查变成可执行的证据查询

Leveraging Low-Level Symbolic Competences for Unsupervised Grounding in Hallucination Detection

🌟🌟

TeQHallu先把参考文档增量转成数据库，再为回答中的声明生成查询，依据执行结果修正初步判断。多个幻觉检测任务中，它改善了直接预测的误报问题，无需领域微调。数据库抽取会遗漏语义，SQL也可能出错，多阶段调用还增加开销；可执行中间层不是自动正确的保证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05025)

## 多智能体与协作

### 多智能体的增益，有多少其实来自提示优化？

At Equal Inference Cost, Multi-Agent Structure Does Not Beat a Single Frozen Agent

🌟🌟

多角色系统比单体更强，可能只是因为投入了更多提示搜索。这项研究固定模型和搜索调用预算，在ALFWorld等任务上比较优化后的单执行者与三角色团队，未检出团队额外优势。不过团队部署调用仍约为单体的1.8倍，且只测了有限模型和任务；结论是需要拆开预算与结构，而不是多智能体无用。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04217)

### 个体更强，不代表一群代理的错误更分散

Why Better Models Can Create Riskier Systems: Evidence from LLM Agents in Financial Markets

🌟🌟

多个代理若同时被同一错误信息带偏，模型多样性未必能分散风险。研究先分离交易行为中的纠偏与残余部分，再做简化市场模拟：正确信息下能力有利，共享偏置信息下相关行动却会放大偏离。实验是单资产、外生基本面的模拟，价值在群体评测设计，不是对现实市场的预测。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04373)

### 代理换队后任务照做，为什么却更费沟通？

Testing Interchangeability in LLM Agent Teams

🌟🌟

研究让双代理团队分别磨合，再交换相同角色、相同模型且经验相当的成员，并设置假更换对照。任务分数变化不大，每单位进展的通信却增加16%—63%，旧伙伴约定可能成为负担。实验团队很小且显式使用伙伴笔记，但提示成员替换测试不能只看最终成功率。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05279)

### 单体经营得好，进了多代理市场未必仍领先

ERPBench: Evaluating LLM Agents for Enterprise Decision-Making Across Competitive Market Ecologies

🌟

ERPBench把相同经营问题分别放进规则竞争者环境和多LLM竞技场，发现领先模型会随竞争条件变化。配对设置有助于区分单体计划能力与战略互动能力。但场景只是六轮模拟，动作还经过解析、修复与限幅；应用这类结论时，环境规则与干预日志和最终收益同样重要。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04667)

### 多代理辩论要有举证责任，不只是轮流发言

MABPD: Multi-Agent Bias Probing \& Detection via Structured Argument Debate

🌟

MABPD让偏见、证据和表达框架三个角色先独立判断，再按加权投票与不对称举证规则辩论，并增加验证环节。它在媒体偏见检测中有改善，但统一测试集并未超过所有已有方法，全语料结果也不能混作同口径比较。可借鉴证据约束，不能据此断言多代理总优于单体。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04841)

## LLM训练与对齐

### 在线蒸馏只选少量难题，为何仍能学到东西？

What Matters in On-Policy Distillation? A Perspective on Data Efficiency and Data Selection

🌟🌟🌟

研究把在线策略蒸馏的训练问题缩减到少量难题，发现四个学生模型可接近完整数学数据集的表现。长度控制实验提示，关键可能是长推理过程中持续获得教师信号，而非题目多样性或高熵本身。8个问题仍会反复采样并调用教师，不能解读成只用8条样本就完成低成本训练。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05198)

### 跨执行框架训练，真的学到了可迁移能力吗？

What Does Multi-Harness RL Learn? Credit Assignment and Portability in Coding Agents

🌟🌟

研究固定多框架轨迹，只改变奖励在框架内还是跨框架比较，再测未见接口。留出评估没有检出跨框架信用分配的额外收益，而更换评测框架带来的分数变化更大。这不排除小幅增益或其他训练预算下的效果，却提醒我们：同分布提分不能替代真正的接口迁移测试。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04518)

### 从正确推理的共同步骤中提取训练信号

ConsensusBench: Benchmark of Consensus Nodes for LLM Reasoning via Outcome Reward Densifying

🌟🌟

ConsensusBench从正确解题轨迹中提取并验证共享中间结点，把命中结点作为过程奖励加入原有RL算法，在多个数学设置中改善表现。它减少了纯终局奖励的稀疏性，但“多数正确解法会经过”不等于“所有正确解法必须经过”；抽取偏差与解法多样性值得一起评估。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04648)

### 先生成能执行的SQL，再自建训练课程

SQL-Zero: Self-Evolving Text-to-SQL

🌟🌟

SQL-Zero让挑战者先提出可执行SQL，再依据执行结果构造任务、去重和分组，训练文本到SQL求解器。它在没有人工问句SQL对的设置下获得改善，但多数收益来自早期迭代，持续演化并未稳定累积。与金标基线的数据量和更新数不同，也不能据此证明合成训练更优。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04697)

### 让执行者与技能编辑者一起学习

CoSkill: Joint Reinforcement Learning of Reasoning and Meta-Skill Agents for Hierarchical Skill Evolution

🌟🌟

CoSkill让推理执行与技能改写共享训练过程，结合任务、步骤反馈和分层记忆，只保留验证后有帮助的技能修改，在ALFWorld和WebShop中报告改善。价值在于把“会用技能”和“会修技能”联动起来；部分比较沿用既有基线报告，仍需匹配环境与预算的复现。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04865)

### 训练代理前，先确保训练器看见真实部署轨迹

Train What You Deploy:Token-Faithful Post-Training of a Production Coding

🌟

这项工作记录采样token与调用来源，严格检查训练数据和部署执行是否一致，并提出新的分布变化约束。工程契约值得关注，但训练增益的证据较弱：小测试集约3点提升低于报告的标准误，且存在单种子和样本掩码因素。可优先借鉴审计路径，暂不把算法收益视为定论。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04678)

## 评测与安全

### 跨基准评代理，先把运行框架的差异算进去

Harbor Adapters and Harbor-Index: Infrastructure and a Curated Meta-Dataset for Large-Scale Agentic Evaluation

🌟🌟🌟

模型分数与执行框架相互作用，拼接排行榜难以公平比较。Harbor用容器化适配器统一运行、轨迹和审计，再从大量任务中筛出82道高难题。同一模型搭配不同框架仍有明显差距。小型索引适合观察难点，却是刻意筛选的压力测试，不代表常见任务成功率，也不能脱离配置解读排名。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04298)

### 删掉解释未提及的信息，能让答案更忠实吗？

A Removal Based Approach to Improve LLM Faithfulness at Test-Time

🌟🌟

解释写得完整，不代表答案真依赖那些理由。本文先抽取概念并让模型说明依据，再移除未归因信息、重新作答，在提示干扰问答中提高了因果忠实性指标。代价是输入本身也变了，且只处理“解释漏提依据”，不保证被写进解释的理由都真实有效；概念抽取仍可能出错。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04343)

### 提示注入不是一条恶意文本，而是一场预算有限的搜索

Rethinking Indirect Prompt Injection as a Test-Time Search Problem

🌟🌟

静态攻击样本可能低估能反复试探的攻击者。本文让攻击代理结合环境侦察、策略记忆和受害者反馈，并按token预算观察间接注入成功率，显示搜索资源会改变风险判断。实验允许的反馈与访问能力较强，且环境和模型有限；比较防护时必须先对齐攻击者条件。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04495)

### 内部知道、嘴上答错：有时只差一个读出阈值

When Do Internal Probes Beat Reading the Answer? Miscalibrated Readouts and Behavior-Concealed Knowledge in Language Models

🌟🌟

模型的隐状态探针能判对，而YES/NO回答接近随机，未必意味着神秘的隐藏能力。研究用结构留出测试发现，部分差距可被单阈值校准显著缩小。不过校准偏移随提问格式变化，且实验集中于小模型和合成验证任务。解释探针收益前，先排除读出失准和表面线索更稳妥。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04582)

### 让代理交付另一个代理：难点不只是写代码

$τ^τ$-Bench: An Environment for End-To-End, Realistic Agent Construction

🌟🌟

这套基准要求开发代理读取客户资料、询问隐含需求、处理继承代码和API缺陷，再交付符合预算的客服系统。实验暴露了不读完整材料、少问客户、自测失真等问题。它比单个代码补丁更接近交付流程，但客户与需求仍经过模拟，每种配置的构建重复有限，不是实际客户项目成功率。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04611)

### 安全门控也要允许“逐步恢复”

SiLR: Structure-Preserving Admission and Process Reward for LLM Tool Agents

🌟🌟

系统已违规时，如果只放行一步内完全恢复的动作，可能反而无法脱困。SiLR用可信影子模拟器检查候选动作，只要求违规集合和严重程度不增加，在小型电网案例中保留了更多恢复路径。它依赖模拟器和约束可信，重点实验规模也小；不能把模拟中的拦截结果当开放环境安全保证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04629)

### 科研代理会写报告，是否也会排除其他解释？

TruthInsightBench: An Evidence-Grounded Benchmark for Automated Evaluation of Open-Ended Scientific Discovery Agents

🌟🌟

TruthInsightBench隐藏源论文结论，只提供研究目标与数据，按已执行的控制、稳健性和可证伪分析评分。四个编码框架在同一基础模型下得分接近，短板更多出现在论证而非写代码。不过只有40个任务和单次运行，裁判尚缺专家校准，不能据此给所有科研代理下定论。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05079)

### 金融微调后幻觉少了，还是只是换了说法？

When Financial Fine-tuning Fails: A Three-Level Detectability Analysis of Numerical Hallucination in Domain-Adapted Language Models

🌟

只检测货币符号和金额，会漏掉无符号数量以及“收入增长”这类隐含数值判断。研究将金融摘要幻觉按可检测性分层，发现领域文风变化会影响安全指标的解释。单一7B模型和小样本限制了普遍性，启发却明确：验收应核对来源支持，不能只统计表面格式错误。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04806)

### 没有唯一道德答案，也可以检验论证经不经得起追问

Measuring AI Accountability Through Argumentation Analysis: Can Model Reasoning Withstand Scrutiny?

🌟

本文按模型使用的论证类型提出批判性问题，分别评估结论前推理文本和事后辩护，发现不足集中在论据与充分性。它为问责提供了结构化入口，而不以某个价值答案为唯一标准。但题目来源有限，部分“推理”只是供应商摘要；文本可辩护也不等于价值正确或内部推理忠实。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05088)

### 评测器也需要单元测试，而不只是总体相关性

Beyond Aggregate Scores: Behavioral Correctness Assumptions for Assessing Reference-Based Automatic Evaluation Methods

🌟

同义改写应保持分数，事实错误应降分，正确补充不应被惩罚——本文把这些要求变成受控文本变换，比较多类自动评测器。总体表现相近的指标仍呈现不同盲点，尤其难识别替代正确答案。测试依赖生成式变换和单参考问答，适合补充而非替代人工校准。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05289)
