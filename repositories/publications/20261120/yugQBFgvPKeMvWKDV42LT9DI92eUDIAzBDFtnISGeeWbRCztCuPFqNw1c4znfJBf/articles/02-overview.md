---
title: "arXiv Agent 与大模型研究简报｜2026-11-20｜入选论文全览 1/2"
author: "Thundax"
summary: "今天的研究把一个问题拆得更具体：智能体如何在长任务中保住有用经验，并在必要时做出可靠判断。值得对照阅读的是无反馈技能改写与有执行反馈的修订、摘要压缩与原始日志回查，以及推理教师向快速决策模型的迁移。"
description: "今天的研究把一个问题拆得更具体：智能体如何在长任务中保住有用经验，并在必要时做出可靠判断。值得对照阅读的是无反馈技能改写与有执行反馈的修订、摘要压缩与原始日志回查，以及推理教师向快速决策模型的迁移。"
---

# arXiv Agent 与大模型研究简报｜2026-11-20｜入选论文全览 1/2

今天的研究把一个问题拆得更具体：智能体如何在长任务中保住有用经验，并在必要时做出可靠判断。值得对照阅读的是无反馈技能改写与有执行反馈的修订、摘要压缩与原始日志回查，以及推理教师向快速决策模型的迁移。

本期入选论文全览。

## 智能体系统与工具使用

### 摘要可以忘，原始日志仍能按需找回

Forget Freely, Grep Later: Lossless, Index-Free Memory for Long-Horizon LLM Agents

🌟🌟🌟

反复压缩上下文后，摘要未留下的细节还能否找回？研究把完整交互追加到文本日志，让智能体用正则搜索回查。相同训练配方下，精确回忆任务达到约百分之九十五至九十七，多问题研究也有改善。但它只测试一个骨干，收益依赖可用的词面线索；部分轨迹理解任务几乎没有额外收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25123)

### 先看技能哪条没被执行，再决定怎么改

Evolve Where It Matters: Coverage-Guided Self-Evolution of Agent Skills

🌟🌟🌟

技能执行失败后，先区分指令写错、正确指令没被遵循，以及条件从未触发，再决定如何修订。该方法用覆盖标签引导持续根因分析，三个基准和执行器上优于所比修订方法。但它对同一任务反复试验并以验证器判停，不能据此声称新任务泛化，模型标注与额外调用也有代价。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25429)

### 自主研究先更新问题状态，再改代码

Pro$^2$ Agent: Scientific Problem Probing for Autonomous AI R\&D

🌟🌟

自主研究如果只反复改代码，可能一直在错误的方向里优化。该系统显式维护瓶颈、候选解释和实验依据，用单变量测试更新问题状态，再开展工程搜索。全套机器学习基准上，四十八小时预算得到百分之七十六的获奖率；该结果仅一次运行，跨系统比较也使用不同模型与预算。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25357)

### 记住用户偏好，还要记住它何时适用

HabitusMem: Belief Memory over Evolving User Preferences for LLM Agents

🌟🌟

用户过去说过什么，不等于现在就该照做。该方法训练写入器结合当前请求生成带证据、作用域和状态的偏好信念，再供冻结代理使用，在问答和工具任务上取得改善。但实现中每次从保留历史重建，并非持续更新的概率过滤；长历史截断、撤回偏好和精确执行仍会失败。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25855)

### 部署智能体推理服务，不能只拿公开流量压测

Validation-driven Deployment of LLM Inference Platforms for Agentic Workloads

🌟🌟

自部署智能体模型时，公开流量可能高估真实可达吞吐。研究用完整调用轨迹连接现场运行、依赖感知重放和合成压力，发现目标模型轨迹的最佳并发约为公开轨迹一半。重放更稳定地复现负载，但不能替代真实任务质量评测；服务代码覆盖结论也只适用于所测配置。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25905)

### 智能体该记多少经验，取决于它能用好多少

How Much Should an Agent Remember? Deployment Lessons from Self-Distilled Memory for LLM Agents

🌟🌟

从自身轨迹提炼教训后，记忆是否越多越好，取决于模型。作者报告较强模型全量准则受益，较弱模型更适合小子集，并披露来源丢失、错误准则和静默失败。部分配置用测试集挑选，多数只运行一次；产品已集成是作者部署陈述，不能把基准提升当作线上用户成效。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26361)

### 先想象工具结果再筛动作，但只把真实返回当证据

Seer: Guiding Small Deep-Research Agents with Shared Decision Models

🌟🌟

小研究代理可先模拟候选工具结果，再用价值模型选一条真正执行。该框架把预测与正式证据隔开，只将真实返回写入历史，在研究问答上显著改善小模型。不过它节省的是外部工具调用，代价是额外本地计算；尚未证明消费设备上的总体延迟和完整研究报告质量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26423)

### 让计算机智能体在循环和结束前多检查一次

CANDID: Candidate-Driven Intervention for Disciplined Execution in Local Computer-Use Agents

🌟

本地计算机智能体容易重复无效动作，或在任务没完成时结束。该方法先检测并确认停滞，再采样替代动作；结束前则要求候选一致同意。在多种本地策略上改善成功率，增量计算集中于少数节点。不过候选共享同一模型，不能保证它们一致判断时就真的完成了任务。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24977)

### 金融智能体通过检查，也可能用错整份证据

FinVeriQA: Financial Research Agents for Question Answering: Routing, Retrieval, MCP Tool Use, and Provenance-Aware Evidence Verification

🌟

金融助手即使数字和引用都能对上，也可能把别家公司的数据写进答案。论文将路由、计算和写作分工，并发现独立回查原文比核对共享证据更容易发现错误。路由实验与真实案例规模均较小，检索接入也尚未完整；最值得借鉴的是验证来源的独立性，而非原型的总体分数。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25071)

### 让科研智能体把假设、证据和改口记录在一起

Steering Automated Scientific Discovery via Audited Epistemic Exploration

🌟

科研代理看到反证后仍坚持旧解释，往往因为缺乏明确的假设状态。该方法用树记录假设、证据和信念修改，以未解决冲突引导新实验，并在提交前核对结论。三个模拟发现基准上均有改善；实验次数匹配却不等于总推理成本相同，也尚未证明真实实验室发现能力。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25214)

### 只有陷入循环时，才让慢推理接管

Stop Going in Circles:Loop-Triggered Routing for System 1 Decision Agents

🌟

快速决策模型适合日常选动作，遇到反复无进展时再让慢推理短暂接管。研究用状态动作重复作为触发，无需额外训练，在多数文本环境组合中降低时间和成本。可逆任务较适合这种策略；如果错误已经烧坏食材等不可逆条件，等到循环出现才升级就可能太晚。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25363)

### 领域适配可以同时优化模型和执行框架

Beyond Weight Updates: Evolving Agent Harnesses for Domain Specialization

🌟

领域适配除微调权重，还可演化提示、工具描述、技能和规划模板。作者用轨迹反思搜索执行框架，报告它能以较低训练成本回收部分权重适配收益，联合方案最好。不过冻结参数只保证权重未变，不保证实际行为不退化；搜索预算、独立泛化和复现仍应单独检查。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25380)

### 在手机动作落地前设置可检查的执行边界

MATE: Mobile Agent Trustworthy Execution for Safe and Efficient Mobile Control

🌟

手机动作一旦落地，隐私和支付影响可能难以撤回。该系统在执行前检查结构化动作，决定放行、阻止或请求批准；重复流程则走验证过的路线。高风险阻止率明显提升，重复任务也减少模型调用。但路线复用依赖应用界面稳定，阻止高风险测试动作不等于全面安全。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25526)

### 语音对话自然，还要学会及时把任务发出去

Duopra: From Full-Duplex Conversation to Full-Duplex Agency

🌟

语音前端说话自然，仍可能忘记真正调用工具。该研究把直接调用和委托后端统一成动作接口，通过监督、强化学习及语音投影修复训练及时完整的执行。同后端通过率从百分之四点七升至四十四点七。不过特定沙箱成绩不等于真实服务效果，自发附和等会话行为仍有退化。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25773)

### 先把工作簿看清楚，再训练表格操作

SheetAlign: Grounded Interaction and Stage-Isolated Learning for Spreadsheet Agents

🌟

表格智能体的大部分收益，可能先来自看对工作簿、拿到合适接口。该方法在训练前就把小模型准确率从百分之十三点五提高到二十九点二，再通过分阶段学习和执行结果一致性达到三十二点八。任务提供目标区域，商业系统对照设置也不同；当前成功率仍离可靠自动化很远。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26069)

### 把并行智能体当作上下文资源来调度

Context as a Resource

🌟

并发智能体容易在共享上下文中串题，也可能在独立分支合并时冲突。该架构直接调度上下文单元，用读写足迹和试合并门协调任务，在程序化测试中减少路由开销并提高合并通过率。证据来自自建任务，精细足迹主要支持一种语言；分类器成本还可能抵消提示词元节省。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26346)

### 把记忆条目数和条目长度分开压缩

MemFolder: Structure-Guided Memory Folding for Efficient Agent Memory Management

🌟

压缩记忆既要减少条目，也要避免合并后单条越来越长。该方法先按实体、语义和时间折叠记录，再用事实恢复反馈压缩文本。一个后端条目减半仍保持百分之九十九的原平均表现，但这是相对保持率，并非绝对准确率；整库处理成本及生成合并的遗漏仍需考虑。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26427)

## 大模型推理与规划

### 推理不确定时少压缩，重复内容则少保留

RoCoKV: Accelerating LLM Inference Serving through Uncertainty and Redundancy Aware KV Cache Compression

🌟

长推理里有些步骤不确定、有些只是重复，缓存压缩应区别处理。该方法在模型犹豫时多留信息，削弱重复内容，并配合服务内核优化。在所测困难数学配置下取得一点二七倍加速及更高吞吐。证据只覆盖两个小型推理模型和有限任务，不能外推其他注意力结构或所有并发负载。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25433)

### 让小型草稿头直接读取主模型缓存

Efficient and Robust Drafting with Multi-Token Prediction

🌟

投机解码的小草稿头若能直接读取主模型缓存，就可减少重复计算。研究结合共享预测头、激活注入和零复制注意力，在一个模型家族中测得服务器及移动端加速，并提供领域微调后的草稿蒸馏。服务器结果主要为单请求，移动端覆盖少量设备，不能直接外推并发吞吐与耗电收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25813)

## 检索增强生成与知识检索

### 让智能体从零开发检索系统，再看隐藏题效果

AutoRAGBench: A Benchmark for LLM Agents Automating RAG System Development

🌟🌟

该基准让编码代理在单卡六小时内，从零设计和迭代九种检索增强系统，再以隐藏题和五个独立回答模型评估。最好配置平均超过人类既有方法组成的参考，但这不是同预算的人机研究比赛。价值在于把开放代码开发、规则审计与最终检索质量连起来，现有证据仍以文本任务为主。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25582)

## 大模型训练与对齐

### 局部混合层的收益，要到充分预训练后才看得清

Physics of Language Models: Part 4\.2, Canon Layers at Scale where Synthetic Pretraining Resonates in Reality

🌟🌟🌟

常见榜单能否反映架构能力，取决于训练规模和测试内容。作者用六十四次配对预训练发现，局部混合层在充分训练后可节省约三成词元；但榜单相近的线性模型仍不擅长短上下文检索。结果来自特定语料、规模和基础模型，不能等同于所有后训练系统的差异。

[阅读论文 PDF](https://arxiv.org/pdf/2611.24963)

### 裁判的知识不易传给学生，类别盲点却会传过去

Blind Spots Travel, Knowledge Stays Home: What RL Inherits from an LLM Judge

🌟🌟🌟

用模型裁判奖励学生，可能把裁判的类别偏见一起教过去。研究用大量受控训练及少量判决干预发现，学生会对某类原本会答的问题集中拒答；限制拒答后，知识往往仍在。结论来自闭卷短答案和特定训练设置，不能直接推到开放生成，但说明平均准确率会遮住覆盖范围损失。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25191)

### 把推理教师的判断，蒸馏到一次前向里

GLiDE: A Fast, Calibrated Decision Model Distilled from Reasoning Teachers

🌟🌟🌟

低延迟决策未必需要每次输出推理。该模型家族把推理教师的选项概率蒸馏到双向单次前向模型，在所引固定隐藏榜单中兼顾分数、校准和延迟。不过它只能在提供的候选中判断；榜单校准不保证真实工作流概率可靠，循环增加计算的版本也不能与基础延迟混用。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26509)

### 只改推理首次违规的短片段，也能有效训练

Training LLMs to Follow Reasoning Instructions with Minimal Edits

🌟🌟

与其模仿整条推理，作者让编辑器找到第一次违规，只监督局部替换片段。相较整轨迹训练，它提高了流程约束遵循，并较好保住所测非目标能力。实验主要使用格式和可验证流程约束；这不等于普遍提高实质推理，跨任务迁移也集中于训练覆盖的约束类别。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26342)

### 开放混合专家模型的能力，需要连同训练系统一起看

Beam Model Technical Report

🌟🌟

这份开放模型报告同时描述预训练、长上下文、智能体强化学习、专家蒸馏和服务工程。模型将智能体专家与对齐专家合并，并配套异步训练和量化解码。它提供了大规模系统实践线索，但作者评测及特定伤害测试不是全面安全证明，超大算力经验也不能直接复制到小团队。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26358)

### 成功轨迹也需要塑形，才能成为好教材

AutoMaster: Autonomous Post-Training by Making the Same Model a Better Teacher

🌟🌟

成功轨迹仍可能含无效重复和浅层核验，直接筛成功样本并不够。该系统让代理设计技能干预固定教师，再选择示范训练学生，在固定数据量和配方下优于普通成功轨迹微调。强模型的外层搜索同样需要预算，现有结果支持行为塑形，不证明任何教师都能自我改进。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26510)

### 把校准后的决策概率用作推理训练奖励

Calibrated Decision Rewards: Training Language Models with a Judge That Knows How Sure It Is

🌟

奖励裁判的分数未必是可信概率。该研究把正确性判断转成一次前向的选项概率，校准后用于强化学习，在小型数学策略上取得接近答案键奖励的成绩。不过只用一个训练种子，裁判远大于学生，困难分布上还会过度自信，尚不足以证明它能普遍替代其他奖励模型。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25135)

### 自我改进停滞，可能是观测方式先耗尽了

Sage-Evolve-Preview:Adaptive Observation for Post-Training Self-Improvement

🌟

训练自我改进陷入平台期，可能是总分反馈已无法定位问题。该方法固定目标，逐步细化诊断、增加难度和相关任务，在匹配数据预算下改善后训练。八项独立优化目标平均从六十六点四到七十三点七；这是多条训练循环的平均，不能当成一个模型同时获得全部成绩。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26132)
