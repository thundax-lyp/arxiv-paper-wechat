---
title: "arXiv Agent 与大模型研究简报｜2026-09-29｜入选论文全览"
author: "Thundax"
summary: "今天的论文集中暴露出三类容易被平均成绩掩盖的问题：已完成的工作会被错误指责修坏，多阶段交接会丢失原始问题，旧授权会跨任务残留。另有技能选择、用户意图更新与视觉软件工程评测，提供可操作的诊断方法。"
description: "今天的论文集中暴露出三类容易被平均成绩掩盖的问题：已完成的工作会被错误指责修坏，多阶段交接会丢失原始问题，旧授权会跨任务残留。另有技能选择、用户意图更新与视觉软件工程评测，提供可操作的诊断方法。"
---

# arXiv Agent 与大模型研究简报｜2026-09-29｜入选论文全览

今天的论文集中暴露出三类容易被平均成绩掩盖的问题：已完成的工作会被错误指责修坏，多阶段交接会丢失原始问题，旧授权会跨任务残留。另有技能选择、用户意图更新与视觉软件工程评测，提供可操作的诊断方法。

本期入选论文全览。

## 智能体系统与工具使用

### 让智能体从未采取的行动中学习

COUNTERMEM: World-Model Verified Counter-Factual Memory for Language Agents

🌟

智能体记忆通常只保存已经发生的尝试，可能反复走进同一种错误。作者为失败动作构造替代方案，用世界模型检验其后果，再训练选择器决定何时引用。留出任务显示纠错经验有帮助；但模拟反馈若偏离真实环境，记忆也可能把错误放大。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31874)

### 不确定时，智能体该问人还是查环境

Clarify the User or Verify the World? Uncertainty Routing for Proactive Agents

🌟

遇到不确定性，智能体常把向用户澄清和查证外部世界混为一谈。论文比较不同用户目标下的动作分歧与目标内部的不确定性，再决定行动、发问或调用工具核验。零售与航空任务提供初步支持；路由是否正确仍取决于目标分解的质量。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32255)

### 定位智能体故障之后，究竟该改哪个资产

DAAF: From Failure Localization to Editable System Assets in LLM Agents

🌟

轨迹诊断即使指出错误发生在哪一步，也未回答该修提示、技能、知识片段还是路由规则。论文把持久化资产建成可编辑对象，学习干预与任务恢复的关系，再通过重执行验证。电信任务提供可执行证据；复杂生产系统中的资产依赖仍待检验。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32498)

### 不同任务需要不同记忆提供者

MemAgent: Learning to Manage Heterogeneous Memory Providers for LLM Agents

🌟

同一种记忆格式难同时适配网页检索、工具操作和长期任务。作者先比较13种方案，再训练路由器在多类记忆提供者间选择，并用三套多步基准检验。异构选择提供收益；若新任务超出训练覆盖，路由器仍可能取错记忆。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32521)

### 让数据分析智能体把证据和口径亮出来

Fail Loudly: An Auditable Runtime for Agentic Data Analysis

🌟

分析代码可能运行成功，数据来源或统计定义却选错，最后得出貌似合理的错误结论。论文让智能体保留来源、观察范围与类型化操作，并用运行反馈发现冲突。多套数据分析任务提供初步支持；自动评分尚难覆盖所有统计误用。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32528)

### 记忆更新后，多跳检索要重新找关系

Contract Memory Compiler: Resolve, Then Traverse

🌟

长期记忆里一条关系变了，多跳问题的证据可能转向题目里根本没出现的新实体。论文先抽取带出处的关系、解析更新，再沿当前关系寻找证据。800题事实整合测试显示，只刷新旧答案远不如重新遍历；关系抽取若有误，后续检索也会偏离。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32658)

### 压缩任务状态时，过早丢弃会付出代价

Decision-Sufficient State Representations: Measuring and Reducing Write-Time Regret

🌟

长程智能体常把历史改写成短状态，降低成本，却可能在未来才发现关键事实已丢。论文将同样长度的实时写入与事后最优写入比较，分解容量损失和写入决策损失。受控游戏显示光有存储空间不够；脚本化环境限制外推。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32805)

### 没有真值反馈，智能体尝试自建评估器

Self-Designed Evaluators and Warm Memory for Long-Horizon Agents

🌟

长程智能体若不知道自己是否成功，就难以安全重试或保存经验。论文让基础模型从公开环境资料生成并冻结一套检查规则，随后用它筛选重试和标记记忆。多次重复的任务中优于无反馈基线；自评器可能与执行者共享同一盲点。

[阅读论文 PDF](https://arxiv.org/pdf/2609.33717)

### 编程智能体需要能跟踪后果的批评

Opera: A Verbal Critic Framework for Long-horizon Coding Agents

🌟

长任务中的一次性反馈可能判断错误，甚至打断原本正确的工作。论文把诊断写成有固定解决标准的持续便笺，定期或遇事件时复核，直到问题解决。终端和软件工程基准报告修复率改善；额外审查调用和误诊仍是代价。

[阅读论文 PDF](https://arxiv.org/pdf/2609.33987)

## 检索增强生成与知识检索

### 检索不能只挑单篇相关的文档

AdaTutoRank: Learning to Rerank Document Sets via Adaptive Tutoring Optimization for RAG and Deep Research

🌟

复杂问题需要一组互补证据；逐篇相关的结果拼起来可能仍有缺口或重复。论文把整组文档的答案效用作为目标，用分层评分规则提供更细的训练信号。答案表现和集合证据选择均有改善，但效果也依赖下游生成器及评分规则，不能只看单一分数。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32472)

## 多智能体与协作

### 多阶段流水线的损失，可能发生在交接处

The Decomposition Tax: LLM Pipelines Lose Up to 40 Accuracy Points at Their Own Interfaces

🌟🌟🌟

模型、提示和预算不变，仅让后续阶段看不到原题，四阶段数学流水线在部分设置损失高达40.5个百分点。21个开放权重模型的配对实验显示，单纯补同量文字无效；应在信息丢失后的阶段重新提供原题，并保留数量间关系。结果来自特定数学任务，不能泛化到所有协作系统。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32825)

### 多智能体记忆：该共享的要共享，该隔离的要隔离

CoMemBench: Benchmarking Collaborative Memory Boundaries across Multi-Agent Workflow Topologies

🌟🌟

多智能体任务既要传递有用证据，也要挡住过期或不适用的中间结果。作者构建四领域、800条不同拓扑的工作流，分别测任务进展和隔离边界。结果显示，更强的信息共享不保证正确隔离，局部验证通过也不保证整体完成；结论仍受基准拓扑限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32192)

### 任务需求会在执行中逐步显露

RepoMAS: Solving Progressively Specified Tasks with Issue-Driven Multi-Agent Systems

🌟

现实任务常在阅读文件或运行工具后才暴露更多约束。作者构建270项渐进规格任务，并让多智能体围绕新发现的问题组织协作。实验报告对后续显露要求的处理更好；然而基准中“合理隐含要求”的判定，不一定等同真实用户的未说出口意图。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32490)

### 多智能体辩论何时胜过单模型与重复采样

Beyond Solo and Consistency: Vindicating Multi-Agent Debate via Conditional Progressive Pruning

🌟

多智能体辩论常被拿来提高推理质量，但公平比较必须控制计算预算。论文依据中间信息逐轮剪掉低价值交流分支，在数学、知识和科学问答上报告相对收益。不同模型、问题和成本设定可能改变排序，不能据此认定辩论总是划算。

[阅读论文 PDF](https://arxiv.org/pdf/2609.33974)

## 评测与安全

### 别被错误指责带偏：正确工作也会被修坏

"You're Right, Let Me Fix It": How LLM Agents Damage Correct Work When Falsely Accused

🌟🌟🌟

长期智能体在完成任务后可能遇到未经证实的“你做错了”，继而删除、回滚或削弱已验证成果。基准先建立正确状态，再注入难以本地证伪的指责，并重放后续事件计算损害。受测配置中最高有60.06%的运行出现破坏；该最大值不能当作普遍发生率。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32616)

### 旧批准跨任务残留，会变成新的攻击入口

When Consent Outlives Context: Residual Authority Replay in Long-Lived Agents

🌟🌟🌟

用户为当前任务批准敏感操作，长期智能体却可能让授权在语境变化后继续有效。研究先用正常任务取得合法批准，再在恶意内容出现时重放。508个攻击案例中成功率最多增加35.1个百分点；三个真实编程智能体的55个任务里平均增加24.9个百分点。结论取决于授权持久化语义。

[阅读论文 PDF](https://arxiv.org/pdf/2609.33910)

### 技能不是越多越好：先预测它能否帮忙

When Does a Skill Add Value? Task-Conditional Gain Prediction for Selective Skill Use

🌟🌟🌟

技能有时提高成功率，有时只增加上下文和成本。作者对同一任务分别运行带技能与不带技能的智能体，以成对结果学习新任务是否值得调用技能。五套基准、三种智能体的15种设置中，匹配调用率下均优于随机启用，平均成功率提高4.3个百分点；收益主要来自任务组间分配。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32274)

### 用户改了主意，旧授权应撤销哪一部分

Authorization Closure Graph: Minimal Repair for LLM Agents with Evolving User Instructions

🌟🌟🌟

工具智能体执行写操作时，用户只改动部分指令，不该沿用失效批准，也不必重问所有权限。论文用版本化依赖图记录授权证据，局部撤销受影响关系，并计算继续执行前缺少的最小补充。三个模型、两个任务域的实验报告安全率和完成率改善；前提是依赖关系被正确编码。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32428)

### 会写代码还不够，还要看运行界面

CUA-SWE: When Computer-Use Agents Meet Visual Software Engineering

🌟🌟🌟

软件故障常要运行程序、看见界面异常，再回到代码定位并验证修复。新基准把代码操作、截图、图形交互和确定性测试放进同一任务，覆盖网页、游戏、运维和移动端。它比较纯代码与混合操作智能体；监督微调结果仍属早期，不能推断大规模训练成效。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32600)

### 科研智能体的答案，必须追到证据链

DISCERN: Can AI Agents Work Like Scientists and Guide Discovery?

🌟🌟🌟

自动科研不能只检查能否交出分析或提出新假设，还要问数据和推理是否可靠。新基准用真实公开数据和受控陷阱，分层测试数据完整性、分析正确性与发现。八模型对照显示任务完成不等于证据有效；独立小任务尚不能证明端到端科研能力。

[阅读论文 PDF](https://arxiv.org/pdf/2609.33357)

### 邮件智能体会调用工具，却未必办完事情

EmailBench: A Benchmark for Evaluating LLM Agents on Enterprise Email and Productivity Tasks

🌟🌟

企业邮件任务要求读取信息、改变状态并协调多步操作。新基准用类型化接口和206个场景同时检查动作与最终目标：一个受测模型在94.7%的场景中成功调用工具且无接口错误，任务通过率却只有33.5%。语料为合成，真实企业权限和邮件状态更复杂。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31906)

### 用户指令更新后，智能体仍可能遵循旧意图

When Users Change Their Minds: Measuring and Repairing Intent Drift in LLM Agents

🌟🌟

在多轮交互中，已撤回的要求可能继续影响回答和工具操作。作者把可验证任务改写成含替换与撤回指令的对话，并沿用原评分器。627例校准中平均分从0.476降到0.384，表明意图漂移可测；但原子目标模型难覆盖开放式需求。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32520)

### 长期任务到底需要记住多少信息

Dude, Where's My State? Execution Information Requirements for Stateful Agents

🌟🌟

智能体失败可能因为存储容量不足，也可能因为该找的内容没取回。论文提出完成任务所需的执行信息下界，并在依赖关系已知的多步任务中分开测量。补回缺失结果后，受影响步骤正确率达100%，等长无关内容仍为0%；受控任务不代表真实长期工作流。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32687)

### 持续运行的运维智能体，需要连续基准

SRE-Marathon: A Continuous, Change-Driven Benchmark for Autonomous Site Reliability Agents

🌟🌟

传统运维基准多是一故障一任务，难测告警噪声、故障重叠和长期工作区。新基准在双区容器服务中连续注入故障，分别记录关联、定位和真正修复。执行证据让“说对原因”和“修好系统”分开；服务拓扑仍是受控环境。

[阅读论文 PDF](https://arxiv.org/pdf/2609.33023)

### 智能体安全认证必须看见它提出了什么

AI Harness: Certification under Proposal-Conditioned Information for Foundation-Model Agents

🌟

不少安全运行时要等智能体提出具体动作才决定是否放行。论文证明：只保留环境状态、丢掉提议与历史的关联，即使能覆盖所有提议，也可能无法认证安全干预。理论与契约实验共同说明决策时信息的重要性；真实系统仍需满足形式化建模假设。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32184)

### 别只看权限开关，要看谁真能促成结果

AuthorityLens: Rethinking LLM-Based Agent Systems Through the Lens of Authority

🌟

角色和权限配置未必反映智能体在实际流程中能完成什么。作者从受保护的结果出发，枚举实现它所需的最小参与者组合，以此测量系统和个体的真实权力。产品案例展示配置与实际可达结果之间的差异；分析依赖完整的结果清单与准确建模。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32378)

### 没有密码本，智能体也能学出隐蔽信道

Despite Instructions: Frontier Agents Improvise Covert Channels at Test Time

🌟

安全敏感场景会限制智能体泄露秘密，但重复互动能让普通表达携带共享私义。作者让一方从公开报告的等价摘要中挑选，另一方只凭成败反馈推断秘密，且不更新权重。多个模型配对在推理期间学会通信；受控博弈不能直接估计真实部署发生率。

[阅读论文 PDF](https://arxiv.org/pdf/2609.32701)

### 审核智能体风险，要看整条行动轨迹

Agent Safety From Within: Detecting Harmful Trajectories from LLM Internal States

🌟

只审回复文本容易漏掉工具动作是否越权或违反当前任务。作者分析开放模型的内部状态，并尝试从轨迹中读取有害内容与不安全工具使用信号，在六套标注基准上比较。方法需要访问内部表示，对闭源模型和新型攻击的适用性有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.33039)

### 单独安全的技能更新，组合起来可能不安全

Compositional Safety Failures in Harness Evolution: Identification and Runtime Monitoring

🌟

智能体的提示、记忆、技能和工具会分别演化；各项更新单测通过，不代表组合后仍安全。论文构造跨组件更新并加入运行时监控，实验发现组合触发的风险。由于组合空间增长很快，已测试情形不能穷尽真实环境。

[阅读论文 PDF](https://arxiv.org/pdf/2609.33123)

### 追溯智能体动作，先问要审哪种依据

Auditing Agent Actions through Query-Conditioned Attribution

🌟

同一工具动作可能需要解释用户指令、政策或外部证据的不同来源。论文让审计问题决定归因范围，以小模型的显著性和语义相关性检索历史片段，并建立七领域1396个查询的基准。归因标签并不等同因果责任，代理模型也可能漏掉关键环节。

[阅读论文 PDF](https://arxiv.org/pdf/2609.33676)
