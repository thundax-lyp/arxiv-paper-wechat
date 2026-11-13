---
title: "arXiv Agent 与大模型研究简报｜2026-11-13｜入选论文全览 1/2"
author: "Thundax"
summary: "本期从三个实际问题看智能体怎样工作：交接记录是否对应真实状态，工具动作有没有经过防护，写出正确补丁后还需不需要继续。另有研究拆解共享文档推理的显存开销、蒸馏目标中的冗余，以及检索引用与生成来源的差别。"
description: "本期从三个实际问题看智能体怎样工作：交接记录是否对应真实状态，工具动作有没有经过防护，写出正确补丁后还需不需要继续。另有研究拆解共享文档推理的显存开销、蒸馏目标中的冗余，以及检索引用与生成来源的差别。"
---

# arXiv Agent 与大模型研究简报｜2026-11-13｜入选论文全览 1/2

本期从三个实际问题看智能体怎样工作：交接记录是否对应真实状态，工具动作有没有经过防护，写出正确补丁后还需不需要继续。另有研究拆解共享文档推理的显存开销、蒸馏目标中的冗余，以及检索引用与生成来源的差别。

本期入选论文全览。

## 智能体系统与工具使用

### 日志写成已修复，现场的错误仍会拖累接手者

Cleaning an Agent's History Hurts When the World Still Holds the Error

🌟🌟🌟

智能体交接时，有人可能会把失败的工具调用改写成已经完成。研究者冻结中途状态，分别更改接手者看到的记录和数据库里的实际结果。保留错误并附上正确值，恢复率从51%升到66%。把它写成已经执行，恢复率从50%降到44%。记录形式与消息角色仍未完全拆开。

[阅读论文 PDF](https://arxiv.org/pdf/2611.14654)

### 压缩智能体历史时，给每段原始证据留一个入口

Folio: Recoverable Multi-Resolution Context Folding for Long-Horizon Language Agents

🌟🌟🌟

智能体可以一边工作一边保存回合短记、事件清单和原文，预算紧时只留下较粗的视图，仍能循索引找回证据。同一底座在75项长程任务中，用这套折叠方式解出66题，改用同框架的模型摘要解出54题。结果来自一个主底座和一套基准，恢复操作也有开销。

[阅读论文 PDF](https://arxiv.org/pdf/2611.16627)

### 缺少外部反馈时，用工具检查智能体交付物

Verify by Doing: Co-Evolving Agent Execution and Evaluation without External Feedback

🌟🌟

智能体没有外部评分时，可以用工具检查交付物和环境状态。论文让评估者在共同候选上接受比较，执行者的改动则用新输出独立验收。两套底座在三个任务集合上表现出这一闭环的收益。前提是产物可隔离且可检查，执行和审查模型还可能对同一证据作出相同误判。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15276)

### 让程序演化的提案者与评估者分开

Where Autonomy Belongs: A Separation of Powers for Agentic Program Evolution

🌟🌟

自动搜索程序需要决定下一轮试什么、谁写代码以及谁给分。论文把这三种权限交给不同组件，并保护评分器不被提案者读取。两个底座各自在数学和算法设计合计十二项任务中九项排名第一。搜索质量仍随底座而变，完整迭代会消耗较多词元。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15309)

### 用程序演化寻找更有效的智能体记忆设计

Discovering Effective Agent Memory Designs through Program Evolution

🌟🌟

论文让模型通过提出、运行和诊断候选程序，自动搜索长期记忆设计。两个问答基准中，作者报告最高12点准确率收益，服务成本为手工基线的35%。组件实验支持保留原始对话，以及在检索后进一步整理证据。归因主要来自一个代表性程序。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17068)

### 决策模型自己做不好，也可能教会智能体做得更好

Actor, Judge, or Teacher? Understanding Decision Models in Long-Horizon Agents

🌟🌟

一个决策模型可能不擅长亲自执行任务，却能利用完整轨迹判断哪一步有用。论文在文字交互环境中比较直接执行、事后评价和训练监督。一种教师让学生在家庭交互中的成功率从72.8%升至82.9%，购物也有提升。教学只验证了一个教师和较短的文字任务。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17167)

### 给下一项未知的编码任务留什么记忆

CoReMem: Cost-Internalizing Memory for Successive Coding Tasks with Prospective Valuation

🌟🌟

当前编码任务结束时，智能体还不知道下一项需求。论文比较保留不同旧轨迹片段对下一题的价值，再用兼顾成本的奖励训练智能体何时利用记忆。一种模型的解决率从21.0%升至25.7%，总词元减少11%。实验以特定框架和 同一种编程语言的仓库为主，推广仍需新证据。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17316)

### 把工具执行和完成确认交给独立运行时

EvoX: Rethinking the Agent Harness as a Runtime Policy

🌟🌟

模型提出一个可行的工具动作后，运行时仍要让它真正执行、处理中断，并用状态证据确认完成。论文将这些责任设计进多模型框架，并在保留各框架原有行为的条件下比较。该系统整体成功率为56.2%，在所比框架中最高，但结果不能单独归因于任何一个机制。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15006)

### 把推理经验写进可以组合的技能库

HyperSkill: Training-Free Omnimodal GRPO via Hypergraph-Indexed Skill-Library Evolution

🌟🌟

让智能体积累推理经验，也可以更新外部技能库。论文先用反事实检查挑出有用技能，再记录哪些技能能组合，并按当前任务检索。十一项文本、视觉语言及多模态评测的平均调和指标比最强基线高13点。方法按数据集配置启用条件，换任务后技能能否直接迁移还有待衡量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15178)

### 换语言模型时，长期记忆可以继续累积

MIGRO: A Decoupled and Portable Long-Term Memory System for Language Models

🌟🌟

更换语言模型后，智能体仍需要用到此前的观察和修订。论文把完整记录保存在共享状态中，用语义索引召回，再由接收模型的接口转换证据。实验显示迁移后可以延续写入，并维持有竞争力的问答表现。接入新底座仍需构建接口，保存原始资料也不保证检索命中。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15315)

### 按下一步决策的收益选择记忆

MemCredit: From Relevance to Utility for Decision-Time Memory in Long-Horizon Web Agents

🌟🌟

与当前任务措辞相近的记忆，不一定能帮助智能体作出下一步决定。论文在训练时移除不同历史片段，比较决策变化，再让轻量排序器学习这种效用。在家庭交互评测中，500词元预算下成功率指标为86.57%，关键词基线为65.67%。换模型或环境后，记忆效用也可能改变。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15600)

### 企业智能体的记忆，先保留冲突再判断当前事实

DISCERN: Preserve at Write, Resolve at Read for Persistent LLM-Agent Memory

🌟🌟

企业长期记忆里常有同名实体、旧版本和相互矛盾的事实。论文只追加写入，在查询时沿溯源图辨认对象、有效时间和证据是否足以回答。合成评测的拒答调和指标为0.924，八个基线最高0.802。主要收益来自构造的企业场景，且评测依赖模型裁判。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15729)

## 大模型推理与规划

### 同一份长文有很多问题，解码时可以少读几遍

Read Once, Answer Many: Parallel Prompting for Shared-Context LLM Inference

🌟🌟🌟

对同一份长文批量提问时，前缀缓存能省去重复预填充，解码仍可能逐问读取同一缓存。论文把多个问题放进一次请求，各条答案独立生成，底层每步只读取一次共享文档。单卡上每文64至256问的测试约快3.7至6倍，结果依赖离线批处理和贪心解码等条件。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15130)

### 规划智能体先展示备选方案，可能更容易问清用户取舍

How Should Planning Agents ReSHAPE Their Search Space?

🌟🌟

用户第一次提出的规划条件可能排除了他愿意接受的备选方案。论文用经过人类验证的模拟用户评估需求修订后的搜索空间，比较直接问偏好和先展示具体方案。在旅行任务中，展示方案使调和指标提高9.7点。模拟的可接受集合固定，现实用户的偏好还可能随交互改变。

[阅读论文 PDF](https://arxiv.org/pdf/2611.16466)

### 多模型答案分歧时，换一种呈现再交叉核验

RE-PRESENT: Evidence Triangulation across Alternative Candidate-Space Views for Efficient LLM Ensemble Inference

🌟🌟

多种语言模型给出不同答案时，继续采样也可能只重复同一种判断。研究者只对分歧题换一种方式呈现候选，再把不同视图的证据对齐到同一选项。在七项选择题基准和两组模型集成中，这样做优于强单轮聚合。开放题缺少明确候选，实验还未验证如何扩展。

[阅读论文 PDF](https://arxiv.org/pdf/2611.14780)

### 并行推理先看开头，再决定扩展哪些解法

Early Signals, Strong Decisions: Prefix-Guided Sampling for Parallel Test-Time Scaling

🌟🌟

并行生成多条推理时，作者先让模型写出较短开头，再用内部置信度挑出值得继续的路径。在两种推理模型和多项数学、科学测试上，这能把词元留给更有希望的候选，多种预算下效果更好。预算很小时，开头还来不及提供足够信息，筛选也会错过正确路径。

[阅读论文 PDF](https://arxiv.org/pdf/2611.14965)

### 同一道题怎样重述更利于模型求解

Same Task, Different Statement: When and How Reformulation Helps LLM Problem Solving

🌟🌟

一道题可以在保留约束与答案的前提下，拆成子目标、改换求解框架，或去掉无关细节。研究者在八项基准上比较这三种处理。事后知道哪种改写最好时，收益很大，按任务类型选用也有一定帮助。实际系统无法预先看答案，选错改写时准确率还可能降低。

[阅读论文 PDF](https://arxiv.org/pdf/2611.14997)

## 检索增强生成与知识检索

### 引用能支持答案，但模型可能没用过它

Cited but Unused: Parametric Provenance in Retrieval-Augmented Generation

🌟🌟🌟

引用能推出一句答案，模型仍可能是从参数记忆里给出的。论文在检索材料中替换事实，观察输出会不会随之变化。六个模型上，按这一干预标准判为来自参数记忆的可引用主张占1.2%至15.7%。替换方式会影响判定，现有检测信号也不足以可靠自动修复。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17161)

## 多智能体与协作

### 没有中央调度，智能体如何找到别人手里的工具

DecArena: Evaluating Large-Scale Decentralized Multi-Agent Collaboration

🌟🌟

没有中央目录时，智能体需要逐个邻居寻找工具持有者。论文用可扩大的合成网络测试搜索和协作，再以拓扑预热及动态路由改善请求转发。显式路由提高成功率和协作质量，恶意节点也能使效果明显下降。确定性的工具任务便于核查，尚未覆盖真实权限和谈判。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15521)

### 把队友后来给出的线索分配到早先的推理词元

Turning Multi-Agent Communication into Token-Level Credit with On Policy Self Distillation

🌟🌟

多智能体解题时，最终成败只能粗略说明整条轨迹好坏。论文从后来发送的消息里提取事实，用逐项移除检查其对早先词元的影响，再与结果奖励共同训练。所测数学任务的四次尝试成功指标最高提高20个百分点，证据限于一个模型系列且依赖外部事实提取。

[阅读论文 PDF](https://arxiv.org/pdf/2611.16206)

### 搜索任务交给子智能体，准确率并不总会上升

Lost in Delegation: Studying the Effectiveness of Task Orchestration in Generative Search

🌟🌟

让子智能体去搜资料可以缩短主智能体的上下文，答案却未必更准。论文使用知识截止点前后的事实题，比较直接调用工具和多种委派方案，发现委派没有稳定优势，且常出现改写查询时失真或回传时漏证据。事实题无法覆盖开放式研究中的并行收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.16526)

### 主智能体与子智能体一起学分工，如何分奖励

From Delegation to Coordination: Learning Efficient Multi-Agent Deep Research

🌟🌟

深度研究里，主智能体的分工与子智能体报告的可靠性需要一起优化。论文保留最终答案作为团队奖励，同时用准则区分各子任务报告对结果的贡献。在浏览检索基准上，相较统一分配团队信用的联训，准确率提高2.49点，关键路径开销下降24.5%。开放式研究中的贡献更难核对。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17041)

### 多智能体出错时，沿交接关系找关键步骤

CoLFA: Collaboration-Guided Lightweight Failure Attribution for LLM-Based Multi-Agent Systems

🌟🌟

多智能体日志里，实际引发失败的决定可能早于报错许多步。论文顺着角色交接扩展重点步骤，并用交叉引用减少重复材料。两套归因基准的五种设置中，方法同时提高精确定位表现并减少输入词元。实际部署如果没有可靠的交接记录，优势能否保留尚无证据。

[阅读论文 PDF](https://arxiv.org/pdf/2611.14980)

## 大模型训练与对齐

### 推理蒸馏时，教师的高概率词元已经够用吗

Effective Teacher Support for Reasoning Distillation

🌟🌟🌟

推理蒸馏通常让学生学习教师在整个词表上的概率。研究者只保留概率最高的少量词元，并把这些概率重新归一化。两个同系列模型对在主评测里只保留15项时也未观察到退步，换到另一系列后极端裁剪的证据较弱。不同任务可能依赖不同的尾部信息。

[阅读论文 PDF](https://arxiv.org/pdf/2611.14850)

### 给语言模型加结构化决策头，小头也能有竞争力

Small Heads, Strong Decisions: A Controlled Study of Typed-Decision Models

🌟🌟

给语言模型接一个小读出头，就能直接返回选项概率。论文固定底座和数据，比较五种头部结构。六亿参数底座在域内的准确率均为81.3%至82.0%，简单余弦头只用复杂联合头约一半的推理时间。英语训练数据和共享协议帮助公平比较，也限定了结论适用范围。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15592)

### 教师看过解答，蒸馏信号未必因此更好

Privileged Information Does Not Guarantee Privileged Guidance: Auditing On-Policy Self-Distillation for Reasoning Models

🌟🌟🌟

自蒸馏会让教师看到学生没有的参考解答。论文拆开检查教师利用解答、产生词元目标、学生拟合和自由生成四个环节。参考解答提高教师做题及纠错能力，监督目标却未稳定偏向正确轨迹，较大收益更多随教师推理模式变化。审计目前集中于同系列模型的数学任务。

[阅读论文 PDF](https://arxiv.org/pdf/2611.16064)

### 形式证明模型的中期训练加入可验证的交互轨迹

daVinci-Prover: Agent-Native Mid-Training for Formal Theorem Proving

🌟🌟

形式证明智能体要在证明检查器返回错误后修订策略。论文构造约337亿词元的中期训练语料，把数学分解、搜索、自我验证和与检查器交互的轨迹放在一起。多个开放底座的形式证明评测出现收益。中期训练没有回放通用数据，现有实验无法确认其他能力的保留程度。

[阅读论文 PDF](https://arxiv.org/pdf/2611.16433)

### 多轮训练把轨迹拆开后，应怎样计算每条轨迹的权重

Outcome-Mass Alignment: Controlling Length-Dependent Trajectory Influence in Multi-Turn LLM Agent Reinforcement Learning

🌟🌟

多轮强化学习把完整轨迹拆成多行时，较长轨迹可能被重复计入组统计，也会拥有更大的总训练权重。论文改为按唯一轨迹统计，并平衡轨迹之间的权重。一个家庭交互设置的成功率从73.4%升至82.8%，收益依赖轨迹长度与成败之间的关系。

[阅读论文 PDF](https://arxiv.org/pdf/2611.16816)

### 跨领域知识编辑如何减少更新冲突

MuEdit: An efficient multi-task editing method towards inter-domain knowledge conflicts

🌟🌟

模型接连修改多个领域的知识时，前后更新会争用同一片参数空间。论文先度量各领域保留空间的冲突，用它决定编辑顺序，必要时再用低秩近似释放可更新方向。五类任务的实验显示编辑效果和能力保留有所改善，长期频繁更新时能否继续维持尚待检验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.14910)

### 小模型智能体一边修订规则，一边练稳工具操作

Knowledge in the Harness, Reliability in the Weights: Teacher-Free Co-Evolution of an LLM Agent

🌟🌟

小模型客服智能体有时漏读业务政策，有时知道规则却执行不稳。论文用失败对话找出缺失规则，程序复测后再把通过的规则写入技能库，同时用结果奖励微调执行行为。两轮之后零售与航空单次成功率均提升。结论来自一个底座和两个仿真领域，依赖能够核对任务结果。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15268)

### 多教师蒸馏时，追踪学生内部的多领域变化

Janus-MOPD: Tracing the Student Learning Dynamics in Multi-Teacher On-Policy Distillation

🌟🌟

多位教师轮流监督一个推理模型时，最终分数很难说明学生在训练哪一段获得了哪项能力。论文用有效秩和子空间重叠跟踪五个领域在两种底座中的表示变化，观察到域内与跨域影响会随训练推进而变。每次逐域干预只有一条训练轨迹，尚难从几何信号推断具体因果。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15341)

### 数学分数上涨时，多语言能力可能正在下降

Outside the Purview of the Reward: Capability Drift in Multilingual Post-Training

🌟🌟

强化学习让一个多语模型的数学评测提高36.07点，印度语言抽取问答却下降19.32点。研究者对照同一起点训练的另一个分支，并拆解分数来源，发现数学增益多伴随答案更常按要求标出。来自单一模型族谱的结果提示，评估时需要把能力变化与格式变化放在一起看。

[阅读论文 PDF](https://arxiv.org/pdf/2611.15717)
