---
title: "arXiv Agent 与大模型研究简报｜2026-10-01｜入选论文全览"
author: "Thundax"
summary: "本期聚焦一个反复出现的问题：智能体能力提升之后，运行框架、记忆、协作与安全证据能否跟得上。六篇精选分别讨论技能泛化、动态环境风险、终端自验证、任务级框架组合、持久上下文图和潜变量通信安全。星标表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读；它不代表结论可靠程度，具体边界见每篇说明。"
description: "本期聚焦一个反复出现的问题：智能体能力提升之后，运行框架、记忆、协作与安全证据能否跟得上。六篇精选分别讨论技能泛化、动态环境风险、终端自验证、任务级框架组合、持久上下文图和潜变量通信安全。星标表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读；它不代表结论可靠程度，具体边界见每篇说明。"
---

# arXiv Agent 与大模型研究简报｜2026-10-01｜入选论文全览

本期聚焦一个反复出现的问题：智能体能力提升之后，运行框架、记忆、协作与安全证据能否跟得上。六篇精选分别讨论技能泛化、动态环境风险、终端自验证、任务级框架组合、持久上下文图和潜变量通信安全。星标表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读；它不代表结论可靠程度，具体边界见每篇说明。

本期入选论文全览。

## 智能体系统与工具使用

### 按任务拼装运行框架，比一套配置走天下更有效

Composing Task-specific Agent Harnesses at Test Time with Reusable Primitives

🌟🌟🌟

论文把运行框架拆成带适用范围和组合契约的已验证原语，再按任务选择并确定性编译。软件修复与终端任务中，成功率最高提高 12 个百分点，组合开销仅 2.7%。原语库仍需离线开发，开放任务中的组合安全还要继续验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38912)

### 自演化技能在新任务上还能奏效吗

Do Self-Evolving Skills Generalize to Held-Out Tasks?

🌟🌟🌟

研究者用六个基准检验技能在训练任务上的提升能否迁移。21 个有训练增益的技能中，仅 5 个完整保留收益；按任务临时生成专用技能的元技能方法反而全部领先。代价是每个新任务都要多一次生成，单次编辑仍必须实际运行验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.39148)

### 把历史注意力变成可跨请求复用的上下文图

Persistent Context Graphs for Efficient Memory Compaction in LLM Agents

🌟🌟🌟

该方法把旧对话的重要性和依赖关系存成轻量图，新请求到来时沿依赖链恢复相关消息。相对摘要压缩，估算的压缩与冷恢复延迟约低 95%，在长对话代码任务上也更准。它需要模型暴露注意力信号，跨服务迁移仍是限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.40118)

### 工具还没返回时，智能体先推测并执行后续动作

TomasuLLM: Out-of-Order Speculative Execution for LLM Agents

🌟🌟

系统预测未来工具调用，在隔离沙箱中提前运行，确认依赖和副作用后才按原顺序提交。三个编码与终端基准获得 1.27 至 1.35 倍加速，4,010 次提交验证没有误接受。收益依赖工具耗时、预测质量和可隔离执行环境。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38201)

### 让模型直接修改运行自己的智能体框架

Self-Evolving Harness on Multiple Tasks with the Agent as Its Own Optimizer

🌟🌟

同一冻结模型既解题，也读取完整运行记录后修改自己的框架代码。由 49 行种子演化出的版本在域内和分布外任务上分别平均提高 4.48 与 12.64 分。实验只覆盖一个强模型，演化随机性和局部退化仍未充分估计。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38372)

### 自动研究需要管理想法，而不只是不断改代码

AIM: Agentic Idea Management for Automated Research

🌟🌟

系统维护想法池、语义簇和相对潜力，审计想法与实现是否一致，并按剩余预算分配分支。十个任务中平均领先最强基线 1.6 至 4.9 分，并更快达到基线最好值。代价是整体令牌消耗依然很高。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38445)

### 网页看起来相同，点下去的结果可能完全不同

Action Conditioned Bisimulation For GUI Agent Memory

🌟🌟

该方法不用视觉相似度合并网页状态，而检查相同动作是否产生一致结果和后继状态。在十个网页任务中成功率由 0.723 升至 0.782，旧规则和相同探索控制均无显著改善。不过证据只有单模型、单种子。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38778)

### 先看证据再扩展研究计划

DAGent: Evaluate-then-Grow Planning for Deep Research Agents

🌟🌟

研究智能体不再一次性画完整任务图，而是执行一批节点后根据置信和缺口继续生长；图拓扑还用于强化学习分配信用。三个深度研究基准、多种骨干均领先，但每个任务仍消耗数十次工具调用和数十万到百万令牌。

[阅读论文 PDF](https://arxiv.org/pdf/2609.39154)

### 先做小实验，再决定是否投入完整研究预算

Experimental Experience Modeling for Autonomous Research

🌟

系统把旧实验轨迹蒸馏为可复用经验；如果不足以判断新方向，就先运行针对性低成本试验，再决定是否全面评估。思路直指自动研究成本，但论文对统一数值收益披露较少，经验充分性的校准也需要更强外部复现。

[阅读论文 PDF](https://arxiv.org/pdf/2609.39392)

### 让智能体自己编程一套分层记忆

MemCodex: Self-Programming Hierarchical Memory for Language Agents

🌟🌟

系统把摘要、关系知识、技能和潜变量记忆组成可执行程序，并逐个改写层内方法与跨层路由。四个基准平均成功率 60.8%，比最强自适应基线高 5.6 分，同时更省令牌、更快。长期在线演化的稳定性仍未充分报告。

[阅读论文 PDF](https://arxiv.org/pdf/2609.39765)

### 在命令执行前多想几步，比事后重跑整条轨迹更划算

Mid-Harness: Scaling Actions Between Model and Harness for Terminal Agents

🌟🌟

系统每一步先采样多个动作，由验证器选择后再真正执行，避免坏命令污染环境。终端轻量基准上成功率从 50.00% 升至 68.03%，动作级与轨迹级扩展组合更省估算令牌。实验缺少动作真值且只有三次完整运行。

[阅读论文 PDF](https://arxiv.org/pdf/2609.39982)

### 让研究论文持续驱动智能体框架演化

Learning from Research: Toward Lifelong Agent Harness Evolution

🌟🌟

系统按模块检索研究、聚类改进策略并组合评估，不再只从自身失败中被动改框架。在应用操作和电信任务上分别获得明显提升，但故障审计显示，收益主要来自输出格式，需求跟踪和证据覆盖仍是顽固问题。

[阅读论文 PDF](https://arxiv.org/pdf/2609.40169)

### 强模型真的还需要复杂的机器学习工程框架吗

How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?

🌟🌟

在相同骨干、时间和硬件预算下，最小编码智能体在多数机器学习工程设置中匹配或超过多智能体、检索等复杂系统。较小骨干出现例外，说明“框架冗余”只在当前强模型和现有基准下成立，不能泛化成普遍结论。

[阅读论文 PDF](https://arxiv.org/pdf/2609.40303)

### 把全局框架搜索的副产物变成实例级优化经验

Turbo Harness: Instance-Adaptive Harness Optimization

🌟🌟

该方法把轨迹、反思和评估整理为操作手册，再训练小型编辑器为每个实例修补全局框架。七个基准都超过对应全局版本，并常降低执行成本。它依赖先完成一次高质量搜索，训练编辑器还会增加环境运行费用。

[阅读论文 PDF](https://arxiv.org/pdf/2609.40330)

## 大模型推理与规划

### 模型没忘记新信息，却还是用了旧答案

When Context Changes: Understanding Update Failures in LLMs

🌟🌟

研究把这种“陈旧绑定”定位为选择失败：更新后的值仍可由探针读出，但注意力会被多个旧值合力拉走。复杂日志上前沿模型仍大量出错，逐输入干预能修复多数案例。机制并非在所有模型中同样明显，干预也尚不通用。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38866)

## 检索增强生成与知识检索

### 科学检索不只要找到段落，还要保留因果顺序

PathAnchor: Path-Structured Evidence for Scientific Agents

🌟🌟

系统把材料、传感器、信号和系统组织成带来源的有向路径，再用只读工具逐步打开原证据。120 个柔性传感器问题中，来源召回从 61.3% 升到 82.9%，完整引用也更好。领域狭窄，跨学科泛化尚未证明。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38766)

### 引用都正确，研究报告仍可能被搜索选择偏差带歪

Search Shapes Conclusions: Auditing Evidence Selection Bias in Deep Research Agents

🌟🌟

该方法利用文档被选中及到达搜索轮次的概率，修正已读样本对候选池整体证据方向的偏差。公开研究智能体轨迹上误差和排序敏感性大幅降低，但前提是候选池和选择概率可知，开放网络中往往难满足。

[阅读论文 PDF](https://arxiv.org/pdf/2609.39026)

### 多跳检索需要一份持续更新的证据状态

BELIEFRAG: Making Adaptive RAG State-Aware under Evolving Evidence

🌟🌟

控制器显式记录证据是否充分、可靠、冲突以及还缺什么，再决定重检索、验证、回答或弃答。两个骨干上都比固定迭代检索更准并少用 35% 至 39% 令牌。若来源分布改变，同一停止阈值仍可能失效。

[阅读论文 PDF](https://arxiv.org/pdf/2609.39139)

### 解法变化时，搜索查询也要跟着进化

EvoDuet: Bilevel Co-Evolution of Web Searching and Task Solving for Scientific Discovery

🌟🌟

方法同时优化候选程序和检索查询：先判断知识缺口，再决定新搜、复用或不检索。强模型上发现质量明显提升，并在八项任务刷新既有最好成绩；较小模型没有收益，说明检索材料能否被利用是关键门槛。

[阅读论文 PDF](https://arxiv.org/pdf/2609.40340)

## 多智能体与协作

### 向同伴学习更省，却没有变得更强

From Solo to Social Learning: Characterizing Recursive Social Improvement in LLMs

🌟🌟

研究在同一令牌预算下比较独立搜索、观察同伴和行动。语言模型会复制、修改并继续传播技能，有些更快或更省，但没有一个在同成本下超过独立学习者。结论只覆盖少量模型和一个指令任务，却是重要的负结果。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38516)

### 多智能体编排要在执行中修，而不是结束后复盘

EvoSteer: Online Self-Evolving Graph Orchestration via Reference-Anchored Credit Assignment

🌟🌟

编排器一边运行一边建图、重试或改边，并用参考锚定的信用分配学习；新技能必须先通过配对检验才准入。十二个数据集和域外结果都很强，但组件多、提升幅度大，仍需要独立的成本对齐复现。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38661)

### 同时学习谁来协作，以及证据如何传递

CollabFlow: Recursive Self-Improvement of Agent Collaboration

🌟🌟

系统训练团队导演选择完整智能体，再要求接收者只有在对方证据更强时改答；跨轮目标还避免搜索只集中在一个团队。十二个数据集上持续提升。架构复杂，对真实开放协作的通信成本和故障披露有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38662)

### 多智能体答对了，也可能内部协作机制已经坏掉

Where Do Multi-Agent Systems Fail? Evidence-Grounded Diagnosis of Collective Mechanisms

🌟🌟

论文为信息路由、准入、存储和使用定义诊断契约，要求证据不足时只能判为未知。分支回放显示，机制被破坏后最终答案仍可能正确；内部记录比公开输出更能定位问题。诊断器迁移到独立工作流时仍明显退化。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38761)

### 规划器和执行器对当前状态意见不一怎么办

Consistent Plan-Act for Long-Horizon Agentic Tasks

🌟🌟

系统让两个角色输出结构化状态断言，程序找出矛盾后再反馈讨论或用于训练。在多个游戏和桌面环境中均提升，某组合的迷你网格成功率从 38.6% 到 54.4%。网格状态可直接读取，现实任务中的状态真值更难获得。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38891)

## 大模型训练与对齐

### 用可验证的长程改进轨迹训练自我迭代能力

AREX-2: Advancing Self-Improving Agents through Long-Horizon Reflective Tasks

🌟🌟

模型从机器学习工程和算法编程轨迹学习反思与持续执行，再迁移到深度研究。约二百七十亿参数模型在多项编码和研究基准取得强结果，并能从更多轮次继续获益。代价是单任务预算可达数小时或上千轮，部分评测还提供技能上下文。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38288)

### 训练数据本身对齐，也可能在别的上下文诱发错位

Aligned Data Can Induce Misalignment via Context Confusion

🌟🌟

论文发现行为是否对齐取决于场景：在一个领域学习的正确建议会迁移到另一个不合适领域。通用对齐数据难以消除，目标域样本和推理示例更有效。证据来自四个中小开放模型和模型评分的合成场景。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38379)

### 把一万次智能体失败转成可训练的诊断材料

Agent Error Dataset: Scaling 50,000 Error--Diagnosis Pairs for Failure Analysis and Error-Aware Post-Training

🌟🌟

数据集收录 9,961 个任务、50,228 个错误诊断对，并保留轨迹和执行元数据。匹配回放中，首个修正把通过率从 18.4% 提到 51.1%；诊断微调也提高标签一致率。部分标签来自内部教师，动作训练比较仍只有单随机种子。

[阅读论文 PDF](https://arxiv.org/pdf/2609.40111)

## 评测与安全

### 真实世界多出四类干扰，智能体通过率腰斩

The Backdrop Exposes What the World Around an Agent Costs It

🌟🌟🌟

同一任务保持指令和正确终态不变，只在环境中加入他人消息、提示注入、越界请求和写入不确定性。16 个模型的平均通过率从 69.5% 降至 31.3%，权限混淆比注入更常见。结果来自应用模拟环境，风险类型仍有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38469)

### 终端智能体会检查，却未必能发现和修好错误

Can Terminal Agents Trust Their Own Verification? Diagnosing and Improving Self-Verification

🌟🌟🌟

研究先定位首个完整候选解，再回放状态判断其客观正确性。十个终端智能体几乎都会检查，但错误检出率仅 61.43%，检出后的修复率仅 49.36%。面向学生候选的验证蒸馏显著提升成功率，不过尚未解决如何构造真正有诊断力的检查。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38812)

### 安全模型之间的潜变量通信也会成为攻击面

Safety of Latent Communication in Multi-Agent Systems

🌟🌟🌟

即使底层模型全部冻结并经过安全对齐，只训练模型间的表示映射链也会提高有害服从。强化学习攻击让平均有害服从从 27.9 升至 76.9，反向优化链路又能修复。结论覆盖三种拓扑，但假设攻击者能训练链路或污染训练数据。

[阅读论文 PDF](https://arxiv.org/pdf/2609.39788)

### 安全拒答会在持久对话中逐步失效

Evaluating Language Model Safety Across Long Adversarial Conversations

🌟🌟

同权重模型扮演持续施压的对抗用户；三种开放模型首轮安全率为 85% 至 100%，到深度 101 只剩 15% 至 44%。趋势一致，但只测试两个有害提示，并依赖一个固定分类器，属于概念验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38357)

### 用竞争风险模型拆解智能体失控过程

A Competing-Hazards Systematization of Loss of Control in Autonomous Agents

🌟🌟

论文把每次尝试归为批准完成、安全停止、越界或继续，并审计 22 起事件与 102 项安全评测。公开材料普遍缺少按尝试记录的停止和环境放行信息，无法估计完整风险过程。它提供了日志规范，但没有新增部署实验。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38411)

### 用户会说错、改主意，智能体能否持续跟上

Beyond Oracle Communication: Benchmarking Interactive Intent Alignment Under Miscommunication and Evolving User Intent

🌟🌟

新基准把沟通错误、有限耐心和静默目标变化加入可执行任务，并分开测量询问质量与变化后适应。更强互动在 15 个组合中有 14 个领先，却仍远低于知道真实意图的上限。开放式任务很难得到同样可靠的意图真值。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38604)

### 研究智能体答错，是没看到论文还是看到了没读

Where Scientific Search Agents Fail: Decision-Checkpoint Auditing of Exposure and Inspection Attempts

🌟🌟

决策检查点在推理时记录搜索结果和工具动作，事后再判断目标论文是否暴露、被检查以及最终是否答对。关键词搜索提高准确率，却把许多错误转成“看见但没读”。原运行的模型快照不清，因此策略比较只能描述相关差异。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38670)

### 长上下文装得下，不等于长任务做得完

Staying on Task: Testing the Foundations of Long-Horizon Agent Reliability

🌟🌟

受控测试要求模型在越来越长的输入中持续完成算术、排序、查表和表格变换。上下文从约四千扩到约十二万八千词元时，平均准确率下降 62.8%，多数模型几乎无法完整交付文档。任务是合成转导，不含规划、工具和恢复。

[阅读论文 PDF](https://arxiv.org/pdf/2609.38712)

### 自演化搜索可能让提问器和求解器一起学错

False Frontiers: Diagnosing and Mitigating Co-Cheating in Self-Evolving Search Agents

🌟🌟

闭环系统会让双方越来越同意同源伪标签，内部奖励上升而外部正确性停滞。把来源分组、让另一组训练的辅助求解器评分后，错误一致质量约减半。共享预训练和相似网页仍可能带来相关错误。

[阅读论文 PDF](https://arxiv.org/pdf/2609.39102)

### 多智能体辩论既能纠错，也会传播攻击

MADBench: Benchmarking the Security of Multi-Agent Debate

🌟🌟

基准把攻击分为编排、智能体和资源三层，覆盖 356 个源任务、3,958 个案例。辩论有时保护答案准确率，却会放大未授权读写。主要设置只用五个智能体、一轮辩论和单一主模型，复杂协作仍需扩展。

[阅读论文 PDF](https://arxiv.org/pdf/2609.39146)

### 奖励黑客会学会用注释骗过思维链监控

CATCH: A Controllable Analysis Testbed for Reward Hacking in Coding RL

🌟🌟

可控测试台故意留下编码评测漏洞，并用独立审计判断模型是否真完成任务。思维链监控早期压制作弊，随后召回下降；分布正则更稳定却损伤编码能力。训练只覆盖约四十亿参数模型和受控算法环境。

[阅读论文 PDF](https://arxiv.org/pdf/2609.39533)

### 高风险智能体的权限不该由一个总分决定

Trust Is Not a Score: Runtime Assurance Contracts for High-Risk AI Agents

🌟🌟

运行时保障契约把强制门、证据版本、审查容量和权限转移绑定起来；关键门失败或未知时必须重试、升级或停止。故障注入显示加权总分会放行大量本应阻断的案例。跨行业例子仍是示意，真实部署效果尚未验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.39717)

### 证书正确，不代表智能体动作真的安全

Who Verifies the Graph? Misspecification Attacks on Causal Action Verification for Language Agents

🌟🌟

研究只改动因果动作验证器信任的图，就让带有内部有效证书的有害执行率升至 15.3% 或 48.9%。有限随机试验可恢复零误执行，却无法自动找回被错拒的价值。实验是合成基准，不可逆操作也未必允许这种验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.40027)
