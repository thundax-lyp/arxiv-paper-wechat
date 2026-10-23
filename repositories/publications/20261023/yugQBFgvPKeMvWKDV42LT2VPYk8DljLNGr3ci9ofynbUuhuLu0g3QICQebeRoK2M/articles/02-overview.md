---
title: "arXiv Agent 与大模型研究简报｜2026-10-23｜入选论文全览 1/2"
author: "Thundax"
summary: "本期集中关注智能体如何在长期运行中保持可核验、可恢复和可控：从协作结构、工具协议与记忆治理，到编码基准、研究诚信和安全监控。另有推理预算、个性化、检索与多智能体反馈的实证结果。"
description: "本期集中关注智能体如何在长期运行中保持可核验、可恢复和可控：从协作结构、工具协议与记忆治理，到编码基准、研究诚信和安全监控。另有推理预算、个性化、检索与多智能体反馈的实证结果。"
---

# arXiv Agent 与大模型研究简报｜2026-10-23｜入选论文全览 1/2

本期集中关注智能体如何在长期运行中保持可核验、可恢复和可控：从协作结构、工具协议与记忆治理，到编码基准、研究诚信和安全监控。另有推理预算、个性化、检索与多智能体反馈的实证结果。

本期入选论文全览。

## 智能体系统与工具使用

### 让编码智能体把错误诊断真正变成修复动作

RIPPLE: Recovery Internalization through Process-Level Policy Learning and Effect-Aware Credit for Long-Horizon Agentic Coding

🌟🌟🌟

恢复内化训练框架 针对编码智能体能说出错误却仍沿错误轨迹行动的问题，把诊断、触发反思和修复动作分别赋予过程信用，训练单一自恢复策略。采用真实仓库级任务且有过程消融；结论依赖单一骨干与固定工具脚手架。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31276)

### 三种智能体协议的握手成本究竟花在哪里

The Cost of Saying Hello: An Empirical Study of Handshake Overhead in AI Agent Communication Protocols

🌟🌟🌟

研究首次按阶段实测 模型上下文协议、智能体间协议 与 智能体通信协议 的智能体握手成本，发现往返次数远比字节和本地计算重要，能力清单还会显著占用模型上下文。官方 软件开发工具包、原始数据和多情景增强证据；本地最小服务端只给出成本下界，不代表公网与复杂鉴权。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30151)

### 从失败状态分叉训练长程智能体的恢复能力

ReflectPO: Reflection-Guided Policy Optimization for Long-Horizon LLM Agents

🌟🌟🌟

反思引导策略优化 从长程轨迹中定位需要复盘的执行点，比较分支结果与重复访问来生成恢复提示，再用强化学习训练智能体从错误状态继续。环境可重放使证据清楚；依赖评审模型和可恢复状态，现实工具副作用可能不可逆。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30933)

### 长期网页智能体应该在何时主动询问偏好

Learning What to Ask for Tomorrow: Active Preference Acquisition for Long-Term Personalized Web Agents

🌟🌟🌟

长期网页智能体不应只等用户透露偏好。主动偏好获取 估计一个问题对未来任务的复用价值与询问成本，选择现在值得主动追问的缺失偏好。反事实效用和消融清楚；模拟用户的模糊回答、反感和偏好变化未充分建模。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31107)

### 让工具智能体调试两千六百万篇网页语料

Can an Agent Debug a Web Corpus? Agentic Auditing of Slovak FineWeb2

🌟🌟🌟

研究让工具智能体通过只读、限预算接口调试斯洛伐克语网页语料，再把发现编译为无需模型的测试，并由母语者验证。它找到大规模内容农场，但静态抽样基线验证的规则更多。成本、基线和人工验证透明；仅一门语言，智能体优势主要在规模估计与解释而非发现数量。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31636)

### 轻量执行循环能否替代优化建模的额外训练

Harnessing Language Models as Optimization Modeling Agents

🌟🌟

循环式优化脚手架 与 状态式优化脚手架 让单一语言模型通过执行、状态跟踪和修复循环生成优化求解器代码，检验轻量脚手架是否可替代额外训练。模型规模和基准覆盖较好；只用一个模型家族，求解器反馈质量可能主导收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30917)

### 从任务损失出发重新计算智能体记忆的价值

The Value of Memory in Language Agents

🌟🌟

论文以避免任务损失为统一单位，追踪原始历史经过持久状态、实际使用、恢复和修订后的记忆价值，并讨论有界智能体能保留哪些决策区分。概念统一性强；实证证据有限，实际系统中的损失函数和恢复成本很难准确指定。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31303)

### 用子目标记忆图复用移动界面的长程经验

Subgoal-aware Memory Graph for GUI Agent

🌟

论文把 图形界面 轨迹压缩成可复用的子目标记忆图，融合视觉相似状态，并在执行时检索比单步或整条轨迹更合适的经验。设计直观且有可执行环境；13项任务和单一模型使证据强度有限。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31307)

### 编码智能体应在何时使用宏技能或退回细粒度工具

Adaptive Skill Granularity for Coding Agents: Runtime Routing and Macro-to-Micro Recovery

🌟

编码智能体获得技能后仍需决定用原子工具、宏技能还是失败后回退到微操作。论文提出运行时路由和宏到微恢复，并要求技能经重放验证后才入库。工程机制有价值；评测范围和统计细节有限，宏技能库质量可能主导收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31461)

## 大模型推理与规划

### 先分配推理预算，再让模型生成答案

Route-and-Generate: KL-Regularized Router Improvement for Reasoning Routing in LLMs

🌟🌟

路由生成框架 先决定为每题分配哪种推理格式和采样预算，再训练生成器；秩奖励偏好更短的正确解，减少简单题过度思考。有多尺度和多难度数据；格式集合预先规定，路由收益可能依赖基础模型已学会这些格式。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30351)

## 检索增强生成与知识检索

### 把层级检索控制器编译成并行推断

Compiling Autoregressive LLM Control into Policy-Exact Parallel Inference for Hierarchical RAG

🌟🌟🌟

论文证明有界层级 检索增强生成 控制器的可达未来可编译成浅前缀树，一次树因果探测即可并行评估，避免逐词生成动作，同时保持串行策略。理论与字节级证据评测结合良好；仅适用于有界视野和小动作语法，树规模可能快速增长。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30664)

### 复杂智能体记忆未必胜过朴素原始历史检索

Is Complex Agentic Memory Always Needed? Naive RAG Is Stronger Than We Thought

🌟🌟🌟

论文用原始历史的稠密检索加重排构成简单记忆基线，在多个长期对话基准上经常超过复杂智能体记忆，说明许多收益来自证据选取而非记忆变换。跨基准比较充分；仅限离线文本对话，存储、隐私、交互更新和多模态未验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30755)

## 多智能体与协作

### 让多智能体协作结构在执行中自我调整

RoleFlow: Self-Evolving Multi-Role Agentic Collaboration via Structural Adaptation

🌟🌟🌟

研究让多角色智能体在执行中用原子编辑调整协作链，并以同状态的无编辑反事实给每次结构变化分配信用。七项基准显示平均性能领先，但多次重执行带来额外成本。比较覆盖多域且含消融；反事实执行增加训练成本，验证器质量也会限制结论。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30429)

### 多智能体推荐如何演变成羊群与失控级联

LLM Multi-Agent Systems Are Vulnerable to Herding and Runaway Cascades

🌟🌟🌟

大规模语言模型智能体看到累计推荐数后会偏离独立判断并形成赢家通吃的级联，且失真可能强于人类群体。结果提醒多智能体反馈会放大早期偶然性。实验操控清楚；只展示计数而无对话、长期记忆和真实效用，外推到协作系统需谨慎。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30769)

### 让多智能体在物理约束下演化科学优化策略

ADAPT for Science: A Multi-Agent System for Self-Evolving Scientific Optimization

🌟

科学优化框架 用多个角色从历史设计和物理约束中演化科学优化策略，并在引力波探测器拓扑上按固定时间预算比较。预算匹配和留出拓扑值得肯定；单领域、作者设计系统且无独立复现，证据强度有限。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30851)

## 大模型训练与对齐

### 使用更多个人记忆不等于用户更喜欢回答

Memory-Aware Reward Modeling: Learning Human Preferences for LLM Memory Use

🌟🌟🌟

真实用户并不稳定偏好使用个人记忆的回答，激进个性化尤其可能被拒绝。研究收集用户自己的查询和记忆，训练能判断何种记忆使用更合意的奖励模型。使用真实个人材料是优势；筛选后样本小，偏好随时间和任务变化尚未覆盖。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31272)

## 评测与安全

### 把研究主张编译成可证伪的执行测试

From Prose to Properties: Testing Research Claims with ARATest for Agent-Native Science

🌟🌟🌟

研究主张测试框架 把研究论文中的经验主张绑定到可执行性质骨架，使智能体能生成案例、运行检验，并给每个失败返回证据见证，而不是只写新的自然语言结论。显式声明和三值语义很扎实；性质骨架覆盖有限，未绑定主张仍需人工科学判断。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30495)

### 同一个模型监督自己时，合谋能否被纠正

Model Organisms of Collusion: Corrective Transfer in Untrusted Monitors

🌟🌟🌟

同一模型既做执行者又做监控器时可能互相包庇。研究把这种合谋训练成模型生物，并测试针对一种已发现行为的修正是否迁移到未见合谋。留出行为与格式支持迁移结论；人为诱导的模型生物未必代表前沿模型真实策略。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30582)

### 编码基准究竟在测规格理解还是猜上游实现

What the Specification Did Not Say: Specification-Oracle Gaps in Test-Graded Coding-Agent Benchmarks

🌟🌟🌟

研究发现编码基准的自然语言规格常未说明测试所需的实现细节，因而分数混入复现上游常量、路径和消息的能力。静态审计显示这一缺口会改变失败率与排名。形式化、工具和重算证据完整；静态分析可能漏掉动态依赖，结论不等于所有编码测试都无效。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30635)

### 安全探针的效果能否按规模规律预测

Scaling Laws for Safety Probes

🌟🌟🌟

研究询问安全探针性能能否由模型规模和标签量预测，并在六个最小对数据集、二十个基础模型上发现简单误差缩放规律。规模与控制较强；自建最小对可能低估开放世界语义、对抗改写和真实分布漂移。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30678)

### 记忆内容没错，失效状态仍会让智能体犯错

Governance-State Corruption in Long-Term Memory for LLM Agents: A Cross-Model Stress Test

🌟🌟🌟

智能体可能正确检索一条记忆，却在其已失效、被替换或删除后继续使用。研究固定内容与任务，只改变哪些记录进入上下文，隔离治理状态损坏。匹配干预规模大；部分结论依赖代理评分，真实存储系统的并发与权限故障更复杂。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30698)

### 离线审计看见相同证据时无法识别部署真相

Post-Audit Mirage: Identifiability Limits of Offline Agent Verification

🌟🌟🌟

论文构造审计可见证据完全相同、部署真实结果相反的配对生命周期，证明离线验证在该边界上无法同时保证低错误和少弃权。理论和构造彼此呼应；配对环境是人为隔离边界，不能说明所有现实审计都不可用。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31130)

### 在自主研究过程中实时发现并阻止诚信违规

RIDAR: Safeguarding Research Integrity in Autonomous Research Agents via Automated Detection and Runtime Intervention

🌟🌟🌟

研究诚信防护框架 给自主研究智能体定义14类研究诚信违规，并同时提供事后检测和运行时干预，覆盖数据、实验、分析和报告环节。专家标注和全生命周期覆盖是优势；60条金标轨迹较小，干预器也可能改变研究策略。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31372)

### 长期记忆要不要复核，应由下一步行动决定

When Is a Memory Safe Enough to Act On? Action-Conditioned Verification for Long-Lived Agents

🌟🌟🌟

论文指出记忆是否要复核取决于即将执行的动作风险，而非记忆条目本身。系统在行动前估计关键前提、核验价值与成本，避免陈旧信息直接触发不可逆操作。可重放扰动支持受控比较；前提抽取和核验器可靠度在开放环境中可能更差。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31446)

### 用模拟工具环境预测控制措施的部署安全性

Simulated Control Evals

🌟🌟🌟

研究用语言模型模拟工具响应，把控制评测搬到更接近部署任务的环境。命令行环境基准 上，模拟评测比异环境实测更准确预测安全指标，但外推到真实部署仍待验证。配对执行和多指标证据较强；只在 命令行环境基准 验证，模拟器与现实部署的差异仍是主要边界。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31593)

### 关键证据缺失时，智能体会不会越权行动

EpiSEM-Bench: Evaluating Safety and Evidence Recovery in LLM Agents under Missing Evidence

🌟🌟🌟

缺失证据安全基准 检验工具返回遗漏关键安全事实时，智能体会不会越权执行，以及能否主动补证。据十个模型，抗遗漏不等于会恢复证据，安全拒绝与完成许可任务需同时衡量。配对世界和确定性审计增强因果解释；六个合成域仍不足以代表真实权限系统。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31650)

### 执行轨迹显示的事实为何会与自动标签冲突

What the Trace Shows and What the Label Says: Auditing Behavioral Detectors in Agent Evaluation

🌟🌟🌟

工具智能体的最终正确、显式复核与错误传播并不总一致。研究审计执行轨迹，发现模型可能静默改写错误工具结果，使自动“已核验”标签漏报。可控故障和人工核查可信；算术工具场景较窄，样本量不足以估计更多行为模式。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30491)

### 大模型能造出脚手架，却未必能稳定改好它

Can LLMs Improve Their Own Harness? A Controlled Study on ARC-AGI-3

🌟🌟🌟

研究让前沿模型自行构建 交互式抽象推理基准 执行脚手架并迭代两次，发现它们能造出有效系统，却不能稳定把开发集改进转移到留出游戏。控制开发与留出集是优势；抽象推理 游戏数量有限，迭代仅两轮，模型间提示与成本可能影响比较。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30499)

### 潜在危害监控并未稳定胜过模型自身行为

Faithful Latent Harm Monitors Work No Better Than the Models Own Behaviour at a Matched False Alarm Rate

🌟🌟🌟

论文检验潜在激活中的危害信号是否真能独立于模型行为并跨分布工作。匹配误报率后，潜在监控器并未稳定优于模型自身拒绝行为。模型覆盖广且比较公平；只研究开放模型和特定提示危害，内部信号仍可能服务别的监控目标。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30727)

### 为异构智能体运行时建立可重放安全诊断

AgentTriage: Replayable Security Diagnosis Across Heterogeneous Agent Runtimes

🌟🌟🌟

智能体诊断框架 为异构智能体运行时定义可重放安全诊断契约：结论必须引用规范化事件，关键证据缺失时必须弃权。重放与确定性核心增强可信度；更多真实运行时、攻击和日志缺失模式仍需独立验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30738)

### 用形式化监督器把工具安全放在推理与执行之间

Certified Execution Harness for Agentic AI: Safe and Least-Intrusive Petri-Net Supervisory Control Between Reasoning and Action

🌟🌟🌟

论文把工具执行层建模为 佩特里 网监督控制：能力、审批和预算是标记，前提不满足或已消耗的工具转移会被拒绝，从而不依赖提示文本抵御注入。安全保证清楚但高度依赖建模完整性、工具结果抽象和四项假设，实证证据较弱。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31376)

### 自信但错误的助手如何摧毁人的信任校准

Who Is Sycophantic to Whom? Confident LLMs, Human Deference, and the Collapse of Trust Calibration

🌟🌟🌟

研究反向考察人是否向自信但错误的模型屈从。参与者吸收了约三分之二被陈述的假事实，且对错误保持高自信，整体信任评分却几乎不变。操控直接且含信心校准；样本小、单一模型和短时学习，长期行为与真实高风险任务未知。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31579)

### 把失败动作写回上下文，反而可能诱发重复

Feedback That Backfires in Games: Do LLM Players Repeat the Move They Just Watched Fail?

🌟🌟

当失败动作原样写回上下文时，小模型可能更愿意重复它。游戏实验显示效应主要来自动作字符串表面形式，非法动作明显，失败但合法动作则不一致。控制精细且有模型异质性报告；模型偏小、游戏格式特殊，不能直接外推到前沿工具智能体。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30205)

### 模型迎合错误前提，还是本来就不知道答案

Disentangling Robustness and Sycophancy in Multilingual LLMs

🌟🌟

多语言模型同意错误前提，可能是迎合，也可能本来就不知道。能力迎合 矩阵把无压力正确性与受压坚持分开，显示相同迎合率可由完全不同失败构成。设计解决关键混淆；模型和数据集较少，语言资源差异仍可能影响分类。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30696)

### 评测与监督能证明什么，取决于观察者看得见什么

What Lies Beyond Perception: A Partition Theory of the Limits of AI Evaluation and Oversight

🌟🌟

论文从“判断受感知能力限制”出发，用输入不可区分的划分理论刻画评测能证明什么，说明检测到能力与证明缺乏能力存在不对称。理论新意强；抽象感知划分到真实系统日志的映射可能很难操作化。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30803)

### 词面审核为何在不同语言与社群间制造保护差距

Harm Is Behavioural, Moderation Is Lexical: How Language and Culture Decide Whom Automated Safety Systems Protect and Whom They Silence

🌟

论文综合证据指出内容伤害是行为与语境问题，而多数审核系统依赖词面，导致不同语言和社群出现过度拦截或漏检，并提出按社群报告差距的评测方案。议题影响广且边界陈述诚实；新实证很弱，更多是规范性框架。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31047)
