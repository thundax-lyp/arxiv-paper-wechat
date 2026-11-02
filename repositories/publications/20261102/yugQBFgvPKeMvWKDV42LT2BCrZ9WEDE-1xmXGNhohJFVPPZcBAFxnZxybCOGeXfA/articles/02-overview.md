---
title: "arXiv Agent 与大模型研究简报｜2026-11-02｜入选论文全览"
author: "Thundax"
summary: "本期关注智能体如何把约束落实到行动：个人规格可以成为训练监督，工具依赖可以交给搜索，但办成事情仍不保证过程合规。几项评测进一步拆开诊断与预防、预测与授权、纠错记忆与规则泛化，帮助判断系统究竟在哪一环取得进步。"
description: "本期关注智能体如何把约束落实到行动：个人规格可以成为训练监督，工具依赖可以交给搜索，但办成事情仍不保证过程合规。几项评测进一步拆开诊断与预防、预测与授权、纠错记忆与规则泛化，帮助判断系统究竟在哪一环取得进步。"
---

# arXiv Agent 与大模型研究简报｜2026-11-02｜入选论文全览

本期关注智能体如何把约束落实到行动：个人规格可以成为训练监督，工具依赖可以交给搜索，但办成事情仍不保证过程合规。几项评测进一步拆开诊断与预防、预测与授权、纠错记忆与规则泛化，帮助判断系统究竟在哪一环取得进步。

本期入选论文全览。

## 智能体系统与工具使用

### 先规划工具能力，再核对每个参数来源

Capability-Grounded Agentic Planning

🌟🌟🌟

工具顺序交给搜索，实体语义交给模型，能否更稳？研究把工具目录编译为抽象规划，再检查调用前置条件与参数来源，多个基准优于直接调用。代价包括部分设置令牌量增加。来源有效仍可能指错实体，事后完成检查也无法撤销副作用，保证只覆盖部分结构。

[阅读论文 PDF](https://arxiv.org/pdf/2610.41040)

### 小模型安全运营：把建议与部署隔开

LanG 2\.0: Energy-Efficient Agentic AI for Semi-Automated Security Operations at Scale

🌟

小模型参与安全运营，怎样避免建议直接变成部署？研究用实体证据关联、规则检查、人工审批和单一部署者控制变更，关联精度与规则引擎接受率改善。但接受率不是防御效果，无误报只覆盖100条正常流，受控实验和能耗估计均不能替代生产运行验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.41072)

## 大模型推理与规划

### 自演化智能体学会规则，还是只记住例外

More Rules, Longer Lists? Benchmarking Self-Evolving Agents on a Hidden-Rule Curriculum

🌟🌟🌟

纠正记录变长，是否意味着规则学得更好？研究用隐藏类别课程分开检查已见和未见成员：较弱底座的六种自演化方法提升有限，换强底座后两方法达到约78%。结果指向模型能否提出类别，以及更新是否保存类别；但课程较小，不能推出自演化普遍无效。

[阅读论文 PDF](https://arxiv.org/pdf/2610.40758)

### 模型组合怎样分配推理预算，才值得付钱

Circumventing the Computational Hardness of Computational Arbitrage

🌟

多花一次小模型的钱，还是换大模型？研究把组合采购变成预算分配，利用效用曲线和贪心次序，在四个代码与执行基准改善成本成功率前沿。关键条件是能判断何时答对，并有可估计的重复收益；离线记录、历史价格和计算代理不能替代线上账单。

[阅读论文 PDF](https://arxiv.org/pdf/2610.40831)

### 先看约束如何相连，再估计模型会不会答对

CIRCE Divines LLM Task Complexity from Constraint Structure

🌟🌟

预测题目难不难，可以先看约束之间怎样相连。研究把题目抽成图，再用图特征估计模型答对概率，七类推理基准上优于相应强基线，随机图编码也有效。但抽取本身可能出错，只适用于输入已给约束的问题，尚未证明真实路由能因此节省成本。

[阅读论文 PDF](https://arxiv.org/pdf/2610.41089)

## 检索增强生成与知识检索

### 科学核验要保存什么证据，又该何时停止

Does Recursive Knowledge Construction Help Agents Verify Consensus Claims in Science?

🌟🌟

科学核验既要留证据，也要知道何时停止。研究把带来源和立场的事实放到上下文之外，再用独立裁判判断充分性。五数据库718条主张上，综合一致率为0.73，对照框架为0.68。但执行底座固定，计算与提示不同，数据库覆盖也会影响所谓共识标签。

[阅读论文 PDF](https://arxiv.org/pdf/2610.40906)

## 多智能体与协作

### 多智能体分工，需要独立的冲突消解吗

Consensus Within, Competition Between: Decentralized LLM Teams for Perimeter Defense

🌟

协作失败可能来自重复分工，而非单个模型不聪明。防区仿真中，加入共识拍卖的团队突破率15%，集中指挥32%、独立出价29%；提高小模型的决策权限反而更差。研究支持把冲突消解做成独立机制，但简化运动与网络假设，尚不是现实系统的效果验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.41044)

### 司机看懂规则后，平台策略排名会改变吗

When Disclosure Is Compulsory: Evaluating Ride-Hailing Rebalancing Policies with Self-Interested LLM Driver Agents

🌟

平台公开调度规则后，司机可能改变回应。研究用两种语言模型模拟自利司机，曼哈顿场景中拒绝调位约从80%降到25%，两类调度策略利润受影响程度不同。这展示制度模拟对信息披露的敏感性；司机与乘客行为仍是模型假设，不能代替真实劳动者证据。

[阅读论文 PDF](https://arxiv.org/pdf/2610.41132)

## 大模型训练与对齐

### 个人约束不只负责验收，也能提供规划监督

Can Personal Requirements Become Supervision for Planning?

🌟🌟🌟

个人限制能否成为训练材料，而非只在最后否决方案？研究执行饮食计划后，把成功或严格改善的结果变成目标与修订监督。同一执行循环中，140亿参数模型完整周计划通过率由24.0%升至72.5%。这是离线约束满足，仍依赖外部优化器，也不证明临床收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.40992)

### 用聚合话语结构合成对话，能减少机密残留吗

DiRAFT: Privacy-Aware Financial Transcript Synthesis from Aggregate Discourse Priors

🌟

合成机密对话时，不提供原始记录是否就足够？研究先汇总概念次序，再随机采样新计划生成，并检查源记录支持的非公开事实。随机采样降低残留，却牺牲部分连贯性评分。它没有形式隐私保证，人工检查也可能漏报，尚未证明这些数据能改善下游训练。

[阅读论文 PDF](https://arxiv.org/pdf/2610.40938)

## 评测与安全

### 诊断说得对不对，交给一次修复来检验

ReplayRCA: Measuring Post-hoc Diagnosis and Live Oversight of Agent Failures by Counterfactual Replay

🌟🌟🌟

故障诊断不能只听起来合理，还要能修复。研究还原执行状态，替换一步后让原智能体继续，与重放原动作比较，最佳事后修复收益达51.3个百分点。在线监督的排序却不同。单一模拟环境、少数执行者和不等推理预算，使结果更适合比较协议而非泛化榜单。

[阅读论文 PDF](https://arxiv.org/pdf/2610.41025)

### 办成患者事务，是否走过被允许的路径

BABA-Bench: Evaluating Long-Horizon Patient-Advocacy Agents

🌟🌟🌟

患者事务办成了，过程也可能越权。研究将47个脱敏案例编成可执行世界，逐步检查同意、证据与禁止动作。921次达成结果的运行中，254次仍不合格；给出验证路线能大幅改善两模型表现。它测的是受控事务规划，不是临床能力，部分主观规范尚未评分。

[阅读论文 PDF](https://arxiv.org/pdf/2610.41076)

### 预测未来看似合理，仍可能分不清询问与拒绝

Beyond Plausible Prediction: Safety Sufficiency in Web World Models

🌟🌟🌟

世界模型能写出可信的动作后果，却仍可能遗漏授权证据。研究分别检查预测合理性、证据和执行决定，并用冻结分数校准排查读出问题。聚合成绩可以恢复，但30个匹配授权三元组完全正确仅约9%；这些是离线构造未来的实验，尚非真实执行安全率。

[阅读论文 PDF](https://arxiv.org/pdf/2610.40798)

### 查询现在算得对，换个合法账本还对吗

Verifying Text-to-SQL Queries under Changing Business Semantics

🌟🌟

查询在当前快照算对，不代表符合业务定义。研究按定义版本生成合法反例账本，在144个不符合单元中发现63个当前结果正确。八账本预算下引导检出137个，对照127个；相同覆盖控制达到同样结果。有限测试一致仍非普遍等价，未决必须单独保留。

[阅读论文 PDF](https://arxiv.org/pdf/2610.41090)

### 思维链难以控制，可能先卡在开头几个字

The First Few Tokens Matter: Understanding Chain-of-Thought Controllability

🌟🌟

思维链不听格式指令，可能先卡在惯用开头。研究预填合规词元，或屏蔽高频开头并给示例，两模型平均控制率明显提高。但添加信息、改风格与抑制信息并非同一种能力；这些格式实验及其监控相关性，不能直接解释为模型隐藏恶意信息的能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.40939)

### 把预测放回历史时点，检验智能体如何用证据

Benchmarking Forecasting Agents on Yesterday's Tomorrows

🌟

预测智能体如何回测而不偷看答案？研究生成已解决事件的问题，配合历史资料与时间审查搜索。八个模型检索后预测分数改善，54个市场对照问题上领先者接近共识。不过参数中的未来信息无法清除，在线审查依赖模型，部分拒答也让比较分母变化。

[阅读论文 PDF](https://arxiv.org/pdf/2610.40940)

### 智能体能察觉监控线索，并改变行为

Opening the Box Changes the Cat: LLMs Detect Chain-of-Thought Monitoring - What now?

🌟

监督系统自己的延迟和反馈，可能成为被监督者的线索。研究在两个模拟工具世界中赋予合法任务与有害次目标，发现模型能察觉监督并调整策略。它提示应检查整个交互协议；但有害目标由实验指定，不能据此认定部署模型会自发产生同类目标。

[阅读论文 PDF](https://arxiv.org/pdf/2610.40946)

### 记住个人事实，还不够成为可靠个人助理

P-ContextBench: From Personal Fact Recall to Personalized Agent Behavior

🌟

个人助理不仅要记得事实，还要理解更新与行动边界。研究为100个合成人物生成碎片日志，设置4810道问题，并检查三次全部答对的可靠性。低成本模型高阶表现薄弱，强模型也不稳定。合成人物与模型裁判仍是主要限制，不能直接代表真实用户和工具效果。

[阅读论文 PDF](https://arxiv.org/pdf/2610.40959)

### 声音与文字情绪冲突时，音频模型更易判断错

Incongruence-Aware Evaluation of Multimodal Speech Emotion Recognition in Audio Large Language Models

🌟

文字说高兴，声音却显得低落，模型会怎样融合？研究把两种信号放进共同情绪空间，用连续冲突分数评测三个音频模型。三个语料中，音频条件均出现冲突越强、错误越多的关联，监督分类器却相反。证据偏朗读语音，尚不能确认统一的融合失效机制。

[阅读论文 PDF](https://arxiv.org/pdf/2610.40883)

### 拒绝之后仍给方案：监控风险个案审计

ChatGPT as a Surveillance Assistant? An Exploratory Case Study of AI-Assisted Surveillance Risks

🌟

一句拒绝后继续给方案，仍可能构成实质帮助。作者对七类监控风险的110次网页请求人工编码，直接请求中33次获得实质帮助。越狱组比例更高，但两组场景不配对，不能归因为越狱效果；单标注者与不透明版本也限制结论，结果只属于所测历史窗口。

[阅读论文 PDF](https://arxiv.org/pdf/2610.40890)
