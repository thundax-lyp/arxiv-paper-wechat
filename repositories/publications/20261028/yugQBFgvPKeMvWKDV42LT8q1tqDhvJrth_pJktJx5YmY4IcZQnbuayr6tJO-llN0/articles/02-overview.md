---
title: "arXiv Agent 与大模型研究简报｜2026-10-28｜入选论文全览"
author: "Thundax"
summary: "本期关注智能体如何承接工作、利用经验，并在真实执行约束下接受检验。几项研究分别拆开了共识与正确、技能与完整规格、测试全绿与任务达标之间的差别；阅读结果时，也要留意它们使用的是离线评分、模拟动作还是实际执行。"
description: "本期关注智能体如何承接工作、利用经验，并在真实执行约束下接受检验。几项研究分别拆开了共识与正确、技能与完整规格、测试全绿与任务达标之间的差别；阅读结果时，也要留意它们使用的是离线评分、模拟动作还是实际执行。"
---

# arXiv Agent 与大模型研究简报｜2026-10-28｜入选论文全览

本期关注智能体如何承接工作、利用经验，并在真实执行约束下接受检验。几项研究分别拆开了共识与正确、技能与完整规格、测试全绿与任务达标之间的差别；阅读结果时，也要留意它们使用的是离线评分、模拟动作还是实际执行。

本期入选论文全览。

## 智能体系统与工具使用

### 强模型何时可以把长任务交给便宜模型

AgentBaton: Efficient Model Collaboration in Agentic Tasks

🌟🌟🌟

长任务不一定需要强模型从头做到尾。研究先让强模型形成实现并取得反馈，再由小型检测器判断能否交给便宜模型做局部修复与验证。在两个软件和终端基准的11组配对中，作者报告平均接口费用下降65.9%。部分配对仍损失准确率，交接时机与历史传递方式都影响结果。

[阅读论文 PDF](https://arxiv.org/pdf/2610.35959)

### 内核优化还要检查批次变化是否改变输出

God Does Not Play Dice: Enforcing Batch Invariance in Agentic Kernel Generation

🌟🌟

同一个请求和不同请求拼成批次后，数值结果也可能变化。本文在内核生成流程中增加静态依赖分析与跨批次逐位检查，把问题反馈给编码智能体。所测框架总体通过率从67.6%升至91.9%，保留大部分速度收益。当前证据停留在内核输出，尚未量化最终文本受多大影响。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36623)

### 从整个演化群体的失败里改进单个智能体

The View from Nowhere: Population-Centered Agent Evolution

🌟🌟

演化搜索通常只保留强候选，却丢掉其他候选暴露的经验。本文把群体的成功、失败与修改历史一起压缩，用来指导父代改进。在匹配设置下，两个编码基准总体成功率提高3.2和5.9个百分点。留出任务也有收益，但总体数字包含演化内任务，不能全部视为泛化表现。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36660)

### 批量提出候选，让反思优化更快

Batching the Reflective Optimization Loop: Parallel Proposals Make GEPA Faster and Better

🌟🌟

反思优化逐个提案，可能让可用计算资源闲置。研究每轮同时扩展多个父代或多个修改，在相同指标调用预算下并行评估。两个任务的留出得分提高，部分设置耗时缩至原来的四分之一至三分之一。收益依赖并行工作池和任务特性，不能将墙钟加速理解为不增加资源需求。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36774)

### 企业接口检索要同时带回流程和字段约束

Grounding LLM Agents in Business Processes: Process-Aware Knowledge Graphs for Reliable Multi-Step Service Invocation

🌟🌟🌟

企业智能体找到接口，还可能顺序错误、字段乱填或编造编码。研究把服务模式与业务流程连接起来，让检索同时返回后续步骤和合法参数。模拟多步任务完成率为38.7%，基线10.3%。收益依赖手工流程映射，缺少流程层的外部服务没有同样提升，尚不能等同真实企业上线表现。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37242)

### 把操作确认规则变成工具接口的状态约束

Concordat: Typed Sessions for LLM Agents

🌟🌟🌟

提示里写着先确认再改动，客户催促时仍可能失守。本文用有限状态协议在确认前隐藏写工具，并在执行前拒绝非法调用。在航空模拟压力测试中，标准代理出现多次未确认变更，协议代理未出现。当前确认判断仍是关键词近似，不能直接视为复杂真实意图授权的完整解决方案。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37461)

### 界面记忆应保存已验证结果，而非点击流水账

From Interaction to Capability: Task Advancement as State and Supervision for GUI Agents

🌟🌟🌟

点击保存只是尝试，看到合适的反馈才支持已经保存。本文把已验证结果作为界面智能体记忆，既减少重做，也从失败任务中的局部成功学习操作。移动任务成功率为34.2%，最强比较方法29.1%。但结果识别仍依赖模型，跨到桌面或界面持续更新的表现尚不明确。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37482)

### 反思提示之前，先筛掉不可靠的失败经历

GEPA-Curator: Curated Learning for Self Improving Agents

🌟🌟

失败并不都值得写进提示：环境故障或裁判噪声可能让反思学错。本文维护任务历史，筛选学习任务，并向反思器提供同任务的成功轨迹。网页实验中，两种优化模型分别比原优化器高3.4和5.0个百分点。收益需结合筛选开销看，且当前证据主要来自同一个执行模型。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37651)

### 用户修改条件后，只重算受影响的任务

CohortFlow: A Steerable Clinical Cohort Curation Agent with Localized Semantic Correction

🌟🌟🌟

用户改了一项筛选条件，数据智能体是否必须全部重来？研究把临床队列要求保存为结构化规格与执行依赖图，只重算变化及其下游。相较完整重建，需求识别表现相近，完成后纠正延迟下降64.8%。但实验使用构造修订，且歧义澄清与条件整体组合仍是短板。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36100)

### 智能体在变，诊断它的准则也应更新

When the Critic Falls Behind: Co-Evolving Rubrics and Harnesses for Continual Agent Self-Improvement

🌟🌟

智能体修复了旧问题，下一轮仍按旧清单诊断，可能把资源花错地方。本文让行为准则与执行框架交替演化，优先处理轨迹中尚未解决的弱点。一个骨干的留出平均成功率为53.7%，最强比较方法49.2%。证据来自同一底层框架，长期开放任务中的准则漂移仍待检验。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36826)

### 不逐字生成动作，直接给界面候选打分

GUI-JEPA: Candidate-Conditioned JEPA Latents as a Fast Action Policy for Mobile GUI Agents

🌟🌟

手机智能体不必把每个动作逐字生成。本文从无障碍树枚举候选，在潜在空间一次评分，用约五亿参数实现更低单步延迟，同时保留多数参考准确率。不过它是离线步骤选择器，使用真实历史与结构化界面信息，延迟也不含取屏成本，尚不能当作在线任务加速结论。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36877)

## 大模型推理与规划

### 推理链置信分数，是否只是链长的替身

Is Token Confidence Just Chain Length? A Signal-Processing Audit of Reasoning Traces

🌟🌟

推理置信度看似能筛掉差解，实际是否只在挑短答案？作者分析500题的多条推理链，发现所测窗口最小置信分数主要反映链长，控制长度后不再提供额外正确性信号。这个审计要求增加长度基线，但只覆盖一个小型蒸馏模型，不能据此否定大模型上的置信筛选。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36709)

## 检索增强生成与知识检索

### 检索证据与模型记忆冲突时，先估计谁更可靠

Don't Pick a Winner: Knowledge Conflicts Need a Prior, Not a Rule

🌟🌟

检索片段与模型记忆不一致时，固定偏信任一方都可能出错。本文先独立提取并校准模型知识，再结合检索可靠性的先验决定回答或弃答。两个骨干的正确率减错误率得分达到45.3和35.0。收益依赖先验与知识储备，不能把已知真实混合比例的实验当作部署保证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36169)

### 文档问答何时值得启动多步智能体

RouteDRAG: Learning to Route and Control Agentic Execution for Multimodal Document RAG

🌟🌟

多走几步并不总能让文档答案更准确。本文先预测查询是否值得启动多步检索，再学习约束后续工具操作与停止。在两个多模态文档基准上，约79.3%的问题进入智能体路径，相比只用短路径平均提高3.47个百分点，也优于一律多步执行。适用证据仍限于单轮文档问答。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36444)

### 让文档智能体学会何时定位、查看、整合与核验

DocSkill: Skill-Integrated Agentic Reasoning for Multilingual Multi-Hop Document Question Answering

🌟🌟

多语言长文档问答需要决定何时翻页、看图表和核验。本文把这些动作组织成四类技能，用离线树搜索轨迹训练编排策略。在新建十语言基准上，八十亿参数配置准确率为41.0%。同骨干比较也有提升；最高分配置之间的差距则同时包含训练与骨干差异。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36759)

### 训练知识图谱智能体把支持答案的证据取回来

Clearing the FoG: Training KG Agents to Retrieve the Evidence Behind Their Answers

🌟🌟

知识图谱智能体答对了，也可能没有取回支持答案的事实。本文在合成问题时保存证据集合，并奖励首次检索到关键三元组的步骤。同骨干实验同时改善答案和证据覆盖，消融支持覆盖奖励的作用。不过，图谱本身若缺失或过时，沿着证据路径仍不能保证现实正确。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37405)

### 新事实已经检索到，旧事实仍会把答案拉回去

When Retrieval Is Not Enough: Obsolete Facts in Agent Memory

🌟🌟

记忆系统找到了最新事实，回答仍可能采用旧版本。作者保持证据条数不变，只把一条无关内容换成过时竞争陈述，两个模型准确率分别从100%降至44.6%和87.8%。这支持显式处理失效事实；但配对样本参与过提示开发，且旧值可能更符合模型原有知识。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36308)

## 多智能体与协作

### 把关键事实分给团队，为什么反而更难答对

TeamGym: A Gym for Team Decision-Making by AI Agents with Distributed Information

🌟🌟🌟

同样一组关键信息，交给一个模型与分给多个代理，结果未必一样。本文控制最小关键事实的分布，发现团队平均损失22.9个百分点，若还需从材料自行检索，又损失19.9点。训练能改善部分协作行为，但事实构造依赖模型检查，不能据此断言所有多智能体系统都不如单模型。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37571)

### 辩论更一致，也可能更一致地出错

Who Convinced Whom? Tracing How LLMs Change Their Minds in Multi-Agent Systems

🌟🌟🌟

多个智能体达成共识，是否意味着证据更充分？研究用等轮次独立反思作对照，并消融同伴理由与来源信息。作者发现辩论只带来小幅准确率变化，却比独立反思多出3.1至7.4个百分点的一致错误。结论限于三种开放模型和所测辩论协议，提示评测还应记录错误相关性。

[阅读论文 PDF](https://arxiv.org/pdf/2610.35930)

### 把工作流自演化限制在失败所属范围

EMMA: Structured Episodic Memory for Multi-Agent Workflow Synthesis

🌟🌟🌟

智能体自演化常把局部失败变成整套提示或团队结构的大改。本文把路由、专家和技能拆成不同责任范围，每次只接纳一个通过守卫的修改。在五种骨干上，作者报告三个基准的平均表现领先，科研数据任务准确率为65.4%，强基线为58.4%。不过，失败后留下的修改仍可能累积无效经验。

[阅读论文 PDF](https://arxiv.org/pdf/2610.35966)

### 用户在场会改变谈判智能体的行为

Your Agent Acts Differently When You're Around: How User Presence Changes Agent Behavior in Negotiation

🌟🌟

用户参与谈判，会让代理更忠实吗？控制目标与偏好后，作者发现交互用户提高了平均收益，也使代理更激进，对用户或对手的失配行为增多。即使用户只发送中性模板，变化仍存在。结果说明收益与行为合规需要分开评估，但目前证据限于双边模拟谈判。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36435)

### 内核优化停滞时，重新组织团队

Evolving Agent Teams

🌟🌟

编码团队陷入局部最优后，继续增加同样角色未必有效。研究用监督者重新分工，并通过持久文件保留发现和尝试。匹配预算实验显示团队演化有利；额外预算下，一个解码内核平均约快1.21倍，但47项负载中仍有11项更慢，且主要设置只重复两次。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36848)

### 智能体收到消息之后，还需要决定读什么

The Inbox as a Coordination Primitive for LLM Agent Societies

🌟🌟

消息能送达，并不意味着智能体有预算阅读。研究将消息留在上下文之外，由接收方选择读哪些、留哪些。模拟重噪声流量中，押金优先规则找到约六成目标主体，而先到先读失效。结果支持设计接收侧注意力管理，但实验使用固定规则和特定拥塞条件，不能直接推出通用通信机制。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36264)

### 经验出错，先分清规则有问题还是场合用错

Remembering Is Not Enough: Refining Memories and Learning When to Use Them in Multi-Agent Systems

🌟🌟

团队失败后，删掉所有相关记忆可能损失有用经验。研究分别重放单条记忆和无记忆执行，区分内容缺陷与适用范围错误，并验证修复。在三个协作框架上平均表现领先，但依赖任务可重跑、可自动评分，额外回放成本与多条记忆之间的相互作用仍需单独处理。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36652)

## 大模型训练与对齐

### 职业任务训练，先保证材料足够完成工作

WorkFactory: Turning Professional Intents into Executable Work for Scalable Agent Training

🌟🌟

职业智能体训练任务看似真实，却可能缺少完成工作必需的材料。本文逆向规划信息依赖，再用执行探测修复缺口，构建覆盖612种职业的任务，并收集教师轨迹。三个学生规模在四类工作基准上提高。结果支持检查任务可执行性，但仅覆盖文本界面，不能直接推算现实岗位收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37161)

## 评测与安全

### 原有测试全绿，基础设施补丁仍可能不合格

InfraDev: Can Coding Agents Develop AI Infrastructure, and How Can We Tell?

🌟🌟🌟

编码智能体能否开发多卡训练与推理基础设施？研究从真实变更构建36项任务，并补上原测试漏掉的隐藏探针。最佳模型解决率为38.9%，原测试全过的提交仍有32%被额外检查拒绝。它提醒我们把性能、内存和通信约束写入验收；结果也受任务挑选与硬件配置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36589)

### 技能优化的开发集进步，可能只是挑中了好运气

Does Your Generalist Skill Optimizer Really Incentivize Agentic Tasks? Rethinking Skill Optimization via Bipartite Attribution

🌟🌟🌟

技能优化器在小开发集上挑出更好的版本，是否真的学到了东西？本文先让完全没改的候选重复参与选择，再追踪新增规则如何增加交互。16个学习技能的测试成功率平均只高0.1个百分点，输入词元却多约16%。这要求收益超过选择噪声；结论限于所测种子、模型和执行框架。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37201)

### 技能的收益来自格式，还是写清了任务规则

M4Bench: Evaluating Procedural Specification for Clinical EHR Derivation Agents

🌟🌟🌟

技能让编码智能体进步，可能主要因为把规则写全了。本文用临床数据衍生任务对照技能、完整规格和诱饵内容，发现规格解释了控制子集的大部分收益。总体列值匹配奖励提高0.136，但有技能运行也只有25/280严格全过。机制结论限于所选子集，不能把部分一致率写成任务成功率。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37459)

### 程序行为没变，原来的形式证明还能用吗

How Stable Are LLM-Generated Proofs Under Program Refactoring? A Stress Test for Verifiable Code Generation

🌟🌟

形式证明通过一次检查后，未必能承受等价代码重构。研究固定规格与证明，只改实现，并单独认证行为等价。结构变化下，多种证明的直接保留率都很低；但简单标识符修改即可修复不少失败。因此，这个基准揭示的是原样证明的脆弱性，尚不能据此断言证明维护昂贵。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36328)

### 回答上让步，不等于动作上越权

Correction or Manipulation? Measuring Epistemic Vigilance in LLM Agents Under User Pressure

🌟🌟

用户纠正模型时，它既要接受真纠错，也要抵抗操纵。研究分别测试问答让步和客服账户操作，发现引用常提高让步倾向，却未必提高辨别力；五个模型在动作场景没有违反身份验证规则。问答上的顺从不能直接预测工具越权，结论也限于所测合成客服场景。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36453)

### 科研新颖性应逐条贡献核对

Do AI Scientists Know What's New?

🌟🌟

科研提案常同时包含已知部分与新贡献，整体打分容易误杀。本文逐条提取贡献，再对照同类旧作，向裁判提供新颖性画像。作者报告可识别约97%的改写旧稿，误拒率为1.5%。但评估依赖固定的小型文献池，尚未证明开放检索能找全相关先例。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36511)

### 重启监控器要看剩余预算内能挽回多少

Monitor Accuracy Isn't the Answer: A Decision-Value Framework for Evaluating AI Agent Restart Monitors

🌟🌟🌟

准确率九成的失败监控器，也可能让任务更难完成。本文把告警质量与剩余预算内重新成功的机会联系起来，并用区间审计决定重启、继续或弃权。小规模软件实验的初始收益没有前瞻复现，另一模型还明显退步。结论支持联合评估检测与恢复动作，而非否定所有监控方法。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36544)

### 研究报告的完整性，需要同类型多份专家报告作参照

RubricAtlas: Mining Type-Level Rubrics from Expert Reports to Evaluate Deep Research Agents

🌟🌟

深度研究报告写得长，不代表分析完整。本文从同类型多份专家报告提炼问题树，再把检查点与候选报告原文对齐。删除关键分析会降分，单纯填充未显示加分。它适合诊断遗漏了什么，但完整性本身不证明事实正确，而且参考报告与裁判选择都会影响分数。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36878)

### 问题不变，让金融检索基准答案每天重新计算

LiveSearch: Questions as Executable Verifier Code for a Live Benchmark of Professional-Source Financial Search Agents

🌟🌟

静态金融答案很快过期，记住旧值反而可能得分。本文将固定问题绑定可执行的数据验证程序，每天自动更新真值，语言模型不负责决定答案。三天追踪中七成题目的值变化，六个网页搜索模型准确率约71%至77%。可复用思路依赖稳定数据接口，当前专业源访问仍有限。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37166)

### 智能体出错后，什么时候应当等待自恢复

When to Intervene? An Empirical Study of Errors and Self-Recovery in LLM Agents

🌟🌟

看见智能体出错就立刻打断，可能浪费它自己的恢复能力。研究整理了1403个错误事件，其中725个在后续执行中恢复，并用错误发生时的短轨迹预测恢复概率。预测指标有所改善，但尚不能等同于干预策略的收益；真正部署还需比较等待、修复与重启对完成率和成本的影响。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36471)

### 模型交接要测后续动作是否承接了已有进度

Benchmarking Task Takeover Across Agent Handoffs

🌟🌟🌟

交接摘要写着已经完成，接手模型仍可能把操作再做一次。本文分别评估仓库证据恢复和对会话、工具及文件状态的延续。结构化状态总体有帮助，但擅长找代码的模型未必最会承接既有工作。选择接收模型和交接格式，应结合剩余任务，而不能只看记住了多少信息。

[阅读论文 PDF](https://arxiv.org/pdf/2610.36523)
