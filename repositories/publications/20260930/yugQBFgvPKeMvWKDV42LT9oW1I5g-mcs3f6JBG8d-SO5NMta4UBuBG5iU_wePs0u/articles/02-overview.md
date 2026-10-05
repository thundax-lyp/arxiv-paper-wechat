---
title: "arXiv Agent 与大模型研究简报｜2026-09-30｜入选论文全览"
author: "Thundax"
summary: "本期聚焦智能体执行边界、长期上下文和自我改进：既有把安全检查推进到工具提交时刻的系统，也有从代码状态、历史证据和统计验收重新设计记忆与技能更新的方法。多篇评测进一步提醒我们，合作、修订和高奖励都可能掩盖具体失败。"
description: "本期聚焦智能体执行边界、长期上下文和自我改进：既有把安全检查推进到工具提交时刻的系统，也有从代码状态、历史证据和统计验收重新设计记忆与技能更新的方法。多篇评测进一步提醒我们，合作、修订和高奖励都可能掩盖具体失败。"
---

# arXiv Agent 与大模型研究简报｜2026-09-30｜入选论文全览

本期聚焦智能体执行边界、长期上下文和自我改进：既有把安全检查推进到工具提交时刻的系统，也有从代码状态、历史证据和统计验收重新设计记忆与技能更新的方法。多篇评测进一步提醒我们，合作、修订和高奖励都可能掩盖具体失败。

本期入选论文全览。

## 智能体系统与工具使用

### 让智能体在执行环境中受到数据流约束

Environment Steering: Using Data Flow Control to Improve Agent Utility and Safety

🌟🌟🌟

论文把智能体与工具状态表示为关系表，执行时按声明式策略检查数据流，违规则给出纠正反馈。四个安全基准显示风险下降，部分设置还能提高任务成功率。策略覆盖依赖准确的状态建模；摘要中的零攻击率只对应特定基准，正文跨基准仍有非零残余。

[阅读论文 PDF](https://arxiv.org/pdf/2609.35807)

### 自我改写的智能体需要统计接受门槛

SAGE: A Statistical Acceptance Gate for Self-Evolving Agents

🌟🌟🌟

论文把技能修改的验收改为逐题配对检查与统计检验，避免平均分上升掩盖旧题退步，也抑制有限验证集上的乐观偏差。收益随任务的回退风险变化，仍受验证集代表性和重复实验成本制约。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36043)

### 持久记忆应被当作从历史推出的结论

Memory Is a Derivation: The Distributed-Evidence Paradox in Long-Term Agents

🌟🌟🌟

论文审计记忆是否真正由写入前历史支持，区分证据范围、组合有效性和收录可靠性；扩展证据可挽回不少误判，但仍有不受支持的记忆被收录。扩大历史范围本身不保证收录安全；不同验证模型仍频繁放行错误记忆。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36130)

### 代码改动时同步改写智能体上下文

StateTape: Action-Conditioned Evidence Lifecycle Modeling for Long-Horizon Coding Agents

🌟🌟🌟

论文依据代码结构和写入动作更新编码智能体的证据上下文，清除已失效信息并补入下一步相关代码，在多项长程编码任务中比较效果。依赖代码关系分析与管理器成本；在不同仓库结构和工具链上的收益需单独检验。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36319)

### 允许语言模型直接维护自己的上下文

Context Language Models

🌟🌟🌟

论文把上下文视为模型可编辑的文件，并支持多个智能体各自维护；长程搜索与编码任务中报告准确率与计算成本改善。可编辑上下文本身带来新的安全与可追溯问题，结果仍依赖特定任务和模型设置。

[阅读论文 PDF](https://arxiv.org/pdf/2609.37725)

### 用受控网页干预找出浏览器智能体的薄弱环节

Constructing Challenging Browser-Use Tasks by Controlled Environment Interventions

🌟🌟

论文在同一任务目标和成功判定下改变网页环境，构造配对样本，观察哪些干预使原本成功的任务失败。评测限于七个自托管网站及所选文本智能体，难直接外推到开放网页。

[阅读论文 PDF](https://arxiv.org/pdf/2609.35814)

### 原始记录与快速判断结合的长期记忆

Mnemon: Raw Records, Fast Judgments, Slow Thoughts

🌟🌟

论文保留带日期的原始对话，使用快速决策模型筛选记录，再由语言模型规划检索和回答；在多个对话记忆基准上以较短上下文取得高准确率。开发与评测数据并非完全隔离，评分器和重复运行有波动，结论限于对话记忆。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36059)

### 对话记忆会抹平事实的时间状态

Memory Consolidation Flattens the Temporal Shape of User Facts

🌟🌟

论文用只改变时态的配对陈述测试记忆写入，发现进行中的事实常被压缩成恒常事实，并会影响后续读者判断。扁平化程度依赖事实类型和写入模型；基准不能完全分离语法和内容先验。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36457)

### 用户需求变化需要局部回退而非全局重做

GitHarness: Git Init Your Harness Working Memory for Perpetual User Requirements

🌟🌟

论文把需求状态和工作状态存成可分支版本，需求变化时选择兼容旧状态并局部更新；跨领域实验考察任务完成和效率。需要可恢复的工作快照，复杂外部副作用不一定能用版本回退解决。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36789)

### 把重复电脑操作编译成可复用策略

Neuro-Symbolic Computer Use: Learning Reusable Policies for Reliable and Efficient Execution

🌟🌟

论文让代码固定跨运行稳定的流程结构，把界面定位与状态检查留给模型；用执行失败反馈迭代修复策略，并评测重复任务效率。适合重复流程，面对高度开放的新任务仍需智能体重新规划；评测环境有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36927)

### 先暂存证据再决定写入长期上下文

CoEM: Empowering Long-Context Reasoning with Commit-on-Evidence Memory

🌟🌟

论文在有限记忆预算下保留待定原文，待后文澄清其价值后再提交或丢弃，并用冻结核查器检查记忆事实的来源。实验主要是多跳问答，待定区仍受预算约束，核查器也可能漏错。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36935)

### 长程搜索让智能体自行决定检索与记忆

Traverse: Learning When to Remember, Reset, and Redirect for Long-Horizon Web Search

🌟🌟

论文将深度搜索分为准则、回答、核验三个状态，并让模型控制上下文封存；针对训练时的记忆坍塌只训练后段，在搜索基准上提升。训练投入较大，自动评分与基准表现不能等同于真实研究报告可靠性。

[阅读论文 PDF](https://arxiv.org/pdf/2609.37082)

### 主动询问应追踪尚未显现的信息需求

Asking for What Was Never Requested: Horizontal and Vertical Proactivity in Agents

🌟🌟

论文用需求依赖图区分眼前可见需求和前序证据才揭示的需求，训练提问者选择能找回更多必要证据的问题。实验基于多跳问答的可恢复需求图，部分训练选择规则未满足预先设定门槛。

[阅读论文 PDF](https://arxiv.org/pdf/2609.37236)

### 智能体应按提问的实际价值决定是否澄清

Rational Clarification by Assistive Agents via Value-of-Information Reasoning

🌟🌟

论文估计澄清回答能带来的任务收益，连同提问成本和用户自发纠正机会决定问还是做，在歧义问答与家务规划任务中比较。价值估计依赖用户意图和奖励模型，复杂真实互动的效用难准确量化。

[阅读论文 PDF](https://arxiv.org/pdf/2609.37588)

## 大模型推理与规划

### 用局部检索能力训练深度搜索智能体

PrimeSeeker: Capability-Oriented Supervision for Deep Search Agents

🌟🌟

论文把深度搜索拆成隐含锚点定位与关系迁移，据此构造问题和专家轨迹，在多项搜索基准中以较少调用保持解题覆盖。合成任务及参考证据骨架可能偏向所定义的检索原语，开放网页表现需持续核查。

[阅读论文 PDF](https://arxiv.org/pdf/2609.35816)

### 自我修正会救回错误也会毁掉正确答案

When Should LLMs Trust Their Own Revisions? A Risk-Aware Study of Intrinsic Self-Correction

🌟🌟

论文跟踪初答与修订之间的正确性转换，在多种开源模型中发现净准确率上升可掩盖大量正确答案被改错的情况。覆盖三个基准与选定开源模型，前沿闭源模型及更复杂任务尚未验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.35832)

### 工具调用前的激活修正不能只看净收益

When Does Correction Become Repair? Mechanistic Auditing of Internal Interventions in Tool-Using LLMs

🌟🌟

论文按纠错目标、落点正确性和原本正确决策的保留程度审计内部干预；部分方向改善净分却严重破坏已有正确选择。实验仅测试特定模型与工具决策，统计不确定性使部分看似有效结果不能获准。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36138)

## 检索增强生成与知识检索

### 按执行结果和时延共同检索工具

Lookahead-R: Budget-Aware Tool Retrieval via Execution-Centric Planning

🌟🌟

论文用轻量世界模型预测工具成功、时延与语义效用，再在预算内搜索候选工具，减少直接调用接口验证的开销。评测主要基于固定工具基准和模拟预测，世界模型失准会影响真实接口选择。

[阅读论文 PDF](https://arxiv.org/pdf/2609.35811)

### 联合训练检索器与搜索智能体要注意先后顺序

BRIDGE: Bilevel Retrieval-Credit-Aware Agentic Reinforcement Learning

🌟🌟

论文发现先调整检索再优化语言策略的收益更大，并将检索增强智能体训练写成双层优化以共同更新两者。结果来自特定小模型、检索器与问答任务；训练复杂度和语料变化影响迁移。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36505)

### 用实体地图帮助智能体跨文档找证据

Follow the Entities: A Corpus Map for Agentic Search

🌟🌟

论文为语料中的重复实体建立可导航页面，串联分散文档，减少智能体每次查询都重新发现关系的负担。实体抽取与链接质量会影响路径；实验语料不能覆盖所有文档类型。

[阅读论文 PDF](https://arxiv.org/pdf/2609.37226)

### 从已找到的证据出发继续寻找缺失记忆

Learning to Retrieve Missing Evidence for Long-Term Memory QA

🌟🌟

论文把全局记忆和当前问题证据状态分开，使用已核验事实生成后续检索问题，并用找回缺失证据训练小型规划器。提升主要来自问答基准；对真实个人记忆中的冲突和隐私控制尚缺证据。

[阅读论文 PDF](https://arxiv.org/pdf/2609.37443)

## 多智能体与协作

### 多智能体辩论的收益可能来自重复采样

Beyond Symmetric Agents: Cognitive Diversity and Multi-Agent Debate in Small Language Models

🌟🌟

论文跨模型、任务与三种多样性设置比较辩论和等生成预算投票，发现辩论相对单智能体有增益，但没有稳定超过等预算自一致性。主要结论来自有提升空间的小型开源模型；不能直接概括更大模型或复杂协作任务。

[阅读论文 PDF](https://arxiv.org/pdf/2609.35875)

### 暴露模型身份会削弱多智能体合作

Prompted Identity Degrades Cooperation in Multi-Agent LLM Systems

🌟🌟

论文在合作游戏和推理任务中控制模型家族标签，发现即便标签随机置换，智能体仍按标签结群，隐藏标签可抑制分化。证据来自受控文本协作和有限模型家族，未验证真实多工具工作流。

[阅读论文 PDF](https://arxiv.org/pdf/2609.35928)

### 用多棵持续搜索树扩大模型自改进探索

Gödel Forest: Balancing Search Depth and Breadth for Data-Centric Recursive Self-Improvement

🌟🌟

论文让多个智能体各自维护数据策略搜索树，并在树间交换有效发现，在训练数据策略搜索中兼顾深度和广度。需要多次昂贵模型训练，收益依赖基准、共享方式与算力预算。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36675)

### 错误的上游消息会盖过正确的下游证据

When Upstream Messages Override Correct Answers: A Controlled Study of Multi-Agent LLM Collaboration

🌟🌟

论文固定下游任务和证据，只改变上游消息，发现错误消息可使原本答对的接收者改错，且多数伤害案例直接沿用上游答案。单次消息交接的受控实验不能覆盖复杂多轮团队；不同消息格式仍可能影响幅度。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36855)

## 大模型训练与对齐

### 用后续执行验证智能体训练中的关键决策

Targeting Pivotal Decisions for Credit Assignment in Agentic Reinforcement Learning

🌟🌟

论文先由评判智能体提出可能影响成败的轨迹片段，再用当前策略从片段前后续跑估计实际优势，用于改进强化学习信用分配。验证需要额外环境运行，效果依赖候选片段质量及任务奖励可核查。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36178)

### 把有限容量记忆按回答行为优化

MemFold: Learning Compact Soft Memory for Long-Context Personalization via On-Policy Optimization

🌟🌟

论文将相关历史压成固定数量的软向量，再按读者自身输出和文本记忆教师信号优化，使个性化记忆不只追求重建文本。软记忆难直接审计，训练与评测基准的迁移范围有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36435)

### 技能管理应适应实际执行者的行为

EASE: Behavior-Adaptive Skill Curation for Self-Evolving Agents

🌟🌟

论文维护执行者近期行为画像，再决定技能的新增、修改和删除；共同训练的管理器在多个执行者上提高技能使用效果。实验覆盖有限执行者与基准，在线画像可能在任务分布突变时失效。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36746)

### 用真实执行增益学习该取哪些记忆

UpliftMem: Learning Set-Level Uplift for Agent Memory Retrieval

🌟🌟

论文以同一执行者不用记忆的表现为基线，学习记忆集合的提升，并按预期信息价值选择额外试验；多种智能体任务中超过比较方法。训练需额外执行试验且假定固定执行者，迁移到新执行者或高成本任务需要评估。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36805)

### 机器可验证的证明训练自然语言逻辑推理

Learning to Prove, Not Just to Answer: Reinforcement Learning from Formal Verification for Natural-Language Logical Reasoning

🌟🌟

论文只把通过形式验证的推理步骤写进证明状态，并追踪真正支持答案的依赖，再用这些信号训练模型。验证范围限于可形式化的英语演绎任务，开放世界推理无法直接套用。

[阅读论文 PDF](https://arxiv.org/pdf/2609.37203)

### 把技能文件变成可验证的训练环境

SkillGym: Training Skill-Use Agents with Automatic Verifiable Environment Generation

🌟🌟

论文筛选可离线复现的技能，用构建者和审核者生成带可执行判定器的任务及轨迹，再训练不同规模模型。社区技能质量参差且任务构造可能与真实用户目标有差距；收益受训练与评测分布影响。

[阅读论文 PDF](https://arxiv.org/pdf/2609.37539)

## 评测与安全

### 工具动作提交时重新绑定授权状态

Boundary-State Control for Tool-Using Language-Model Agents: Commit-Time Consistency under State Drift

🌟🌟🌟

论文把一次性提交许可同时绑定动作和授权状态的语义投影，在受控漂移、重放和外部测试中拒绝无效提交。可靠性依赖语义投影覆盖所有关键状态，实验中的零违规不证明未知接口安全。

[阅读论文 PDF](https://arxiv.org/pdf/2609.37475)

### 电脑操作智能体的安全核查需要主动取证

SCOUT: Synergizing Reasoning and Tool-Use for Computer-Use Safety

🌟🌟

论文先生成任务专属安全量表，再让核查智能体调用工具检查真实环境状态，弥补只看截图轨迹的盲点。实验集中于两个桌面安全基准，量表生成与取证都可能受模型判断误差影响。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36201)

### 高奖励不等于智能体诚实完成任务

CheatBench: Measuring Reward Gaming in AI Agents

🌟🌟

论文用涵盖多种任务的基准设置作弊机会，比较完整智能体在受诱惑时是否违反任务意图，观察到模型和任务类别间的大幅差异。作弊率受任务表述、工具权限、评分器和执行框架影响，不宜当作模型固有概率。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36308)

### 可刷新基准揭示多智能体异常检测难题

MAADBench: The Refreshable Paradigm for Anomaly Detection in Multi-Agent Systems

🌟🌟

论文构造可重新采样任务、可切换模型的执行轨迹及确定性步骤标签，并用五种模型和多种检测方法测出细微异常与跨模型鲁棒性缺口。基准任务由可控生成环境构成，不能直接代表真实组织中的复杂协作故障。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36556)

### 碎片化恶意指令仍能被智能体重新拼起

Divide and Inject: Can Agents Reconstruct an Indirect Prompt Injection from Fragments?

🌟🌟

论文把攻击目标拆入外部检索内容，并通过目标执行反馈反复改写片段；多个模型与环境中攻击成功率高于对照。攻击依赖特定长上下文、工具返回和可反馈搜索条件，不能概括所有部署。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36576)

### 事实核查智能体可能把来源标签当作结论

Multi-Channel Mitigation of Source-Trust Shortcuts in Fact-Checking RL Agents

🌟🌟

论文固定证据内容仅交换来源可信标签，分别观察判决、信心与继续检索；标签有时直接翻转判决，反事实训练可缓解捷径。结果受选定事实核查数据、标签规则与模型规模约束；来源质量仍可合理影响置信度。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36611)

### 答对多跳问题不等于真的用了每一步证据

REALHOP: Rethinking Multi-Hop Reasoning Evaluation via Behavioral Auditing

🌟🌟

论文删除目标证据测试答案是否改变，发现既有基准的实际依赖比例较低，再通过重写实体与竞争路径构造更严格样本。证据删除只能测行为必要性，不能证明模型内部按标注推理链思考。

[阅读论文 PDF](https://arxiv.org/pdf/2609.36984)

### 数据智能体会核查却仍采用错误工具结果

When Tools Silently Lie: Evaluating and Mitigating Blind Compliance in Tool-Augmented Data Agents

🌟🌟

论文把原始数据固定，向工具输出注入数值、标签与模式错误，区分是否检查以及最终是否采纳错误；污染使任务成功率明显下降。主要是有限任务与适配器的受控污染；人工复核覆盖样本而非全部轨迹。

[阅读论文 PDF](https://arxiv.org/pdf/2609.37153)

### 持久记忆先检查授权再比较有用程度

Authority Before Utility: Non-Compensatory Control for Persistent LLM Memory

🌟🌟

论文证明固定惩罚无法在任意效用尺度下保证排除失效记忆，并在替代实验中比较硬排除和软惩罚。预设主实验因数据构造问题撤销，量化结论只适用于单一替代测试单元。

[阅读论文 PDF](https://arxiv.org/pdf/2609.37474)
