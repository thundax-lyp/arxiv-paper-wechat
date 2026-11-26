---
title: "arXiv Agent 与大模型研究简报｜2026-11-25｜入选论文全览 1/2"
author: "Thundax"
summary: "上下文压缩怎样保留行动所需的信息，工具失败后哪些步骤值得重跑，多个智能体怎样在时限内分工？本期从训练、运行时和评测三方面追踪这些问题，也关注长期记忆中的证据覆盖和自动裁判的偏差。"
description: "上下文压缩怎样保留行动所需的信息，工具失败后哪些步骤值得重跑，多个智能体怎样在时限内分工？本期从训练、运行时和评测三方面追踪这些问题，也关注长期记忆中的证据覆盖和自动裁判的偏差。"
---

# arXiv Agent 与大模型研究简报｜2026-11-25｜入选论文全览 1/2

上下文压缩怎样保留行动所需的信息，工具失败后哪些步骤值得重跑，多个智能体怎样在时限内分工？本期从训练、运行时和评测三方面追踪这些问题，也关注长期记忆中的证据覆盖和自动裁判的偏差。

本期入选论文全览。

## 智能体系统与工具使用

### 智能体的并行任务失败后可以只重跑下游

fork\(\) for Agents: Agent Kernel for Non-blocking LLM Orchestration

🌟🌟🌟

并行智能体有一个分支报错，其他已经完成的分支还能保留。论文让运行时保存依赖和父节点的文本产出，异常发生后，只重跑失败节点下游。在一组同预算故障试验中，局部恢复的成功率为百分之百，全局重规划为百分之五十六点二。收益取决于能否准确记录任务依赖，外部写入仍需单独核验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31727)

### 让编码智能体自己迭代技能与工具

AGL-SKILL: Coding Harnesses as Agentic Optimizers

🌟🌟🌟

技能说明写得再细，也未必能修掉工具输出或执行逻辑上的缺陷。研究给编码智能体训练样本、自动评分器和预算，允许它一起修改提示、技能和程序。五个基准上，论文报告它在测试预算内超过所比较的技能优化方法。收益建立在任务有可靠自动评分的前提上，开放任务缺少同等证据。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31794)

### 用同题对照验证空间工具经验

SpatialCraft: Evolving Procedural Intelligence from Experience and Skills for Spatial Reasoning Agents

🌟🌟

空间工具会返回重建、分割或几何信息，固定模型仍可能反复以错误顺序调用。作者在同一道题的重复运行中随机隐藏经验，比较它是否改善结果，再把有效经验整理进技能。五个空间基准与四个底座的组合均领先于对照。证据来自已有空间工具链，其他任务还需检验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31475)

### 界面动了，正确的点击也会落空

One Step, Four Clocks: How GUI Agents Fall Out of Step

🌟🌟

界面还在变，刚才正确的点击也会过期。作者分别记录环境变化、观测、决策和动作到达的时刻，并让控制器更新待执行操作。移动目标实验中，响应耗时相同，更新点击后成功率由零升至百分之百。复杂桌面是否能同样准确判断动作已经过期，论文尚未充分覆盖。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31522)

### 把工作流的有限决策交给专用模型能省多少

The Control-Flow Tax: Specialized Decision Routing for LLM Agent Workflows

🌟🌟

文档代理频繁决定下一步，路由费可能接近生成费。论文让专用模型负责有限动作，由另一个模型成稿，并比较四项工作流的整条调用轨迹。首项任务平均成本下降百分之四十九点六，耗时下降百分之三十三点二。节省来自所测路径，单步客服实验尚不能证明整套异构系统的普遍收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32365)

### 从工具实现中找出技能说明的缺口

VISE: Verifier-Independent Skill Self-Evolution with Feedback from Tool Implementations

🌟🌟

缺少任务验证器时，可以查工具代码来修订技能。研究结合轨迹核对工具输入、使用条件和输出，找出当前流程跳过或误写的步骤。两个基准中，作为四种改进方法的附加步骤，平均成功率比没有验证器的对应设置高九点一四至十三点三五个百分点。前提是工具行为有可读实现。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32480)

### 用未来回答的收益衡量代理记忆

Leto: Utility-Centric Agent Memory

🌟🌟

代理回忆得很完整，有时仍无法改善眼前回答。论文保留可回查的原始数据索引，在用户请求到来后重放有关记录，再用回答效果更新效用判断。个性化、长任务和长文本三类测试中的结果领先于对照。按需回查本身也有时延，收益取决于效用定义。

[阅读论文 PDF](https://arxiv.org/pdf/2611.33005)

## 大模型推理与规划

### 让智能体学会保留下一步行动所需的信息

RECAP: Training Long-horizon LLM Agents with Context Compaction

🌟🌟🌟

长任务中的摘要可能删掉决定下一步行动的约束。作者比较同一模型在完整历史和摘要下的后续行为，分别训练摘要撰写和压缩后的行动。相对只用任务奖励，同一个四十亿参数模型在深度搜索和软件修复评测中分别提高四点六和四点三个百分点。能否迁移到更长任务和其他模型规模，仍待检验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31258)

### 用短程续写教模型压缩长推理

Self-Improving Long-Horizon Reasoning by Learning Summaries from Local Continuations

🌟🌟

长推理变慢或失效时，可截断已有推理，从摘要接着做。作者让冻结推理模型对短续写给出概率信号，用它训练独立摘要器，使压缩状态保留短上下文里的行为。论文试验展示了这种续写方式可支撑更长的推理。很久以后才有用的线索仍可能在压缩时被丢掉。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31621)

### 跨语言摘要如何保留用户事实的出处

Provenance Loss and Repair in Multilingual Compaction

🌟🌟

跨语种摘要可能把用户从未交代的属性写成语法上必需的形式。论文在写入时标注这一类未知属性，移除原文前核对，读取时再区分已陈述和未陈述。五个模型的默认做法移除原文后，已陈述属性的问答召回从九成降到三成四。结果聚焦语法强制表达的属性。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31668)

### 让智能体等到证据充分再提交答案

Lazy Agents Answer Against Their Own Beliefs: Reinforcement Learning with Verifiable Beliefs Teaches Them to Act on What They Believe

🌟🌟

有时代理仍列出几个可能答案，却过早提交一个猜测。作者在规则已知的模拟器中计算当前证据对应的真实后验，奖励在证据不足时继续调查，在证据充分时作答。试验显示这能改变取证和提交时机。规则未知的开放任务缺少可直接计算的后验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32884)

### 让推测解码的草稿更容易连续通过

Directly Maximizing On-policy Expected Accepted Length for Speculative Decoding

🌟

推测解码只接受从开头连续通过验证的草稿，被拒令牌后面的猜测也会失效。作者直接优化预期可用前缀，在当前草稿模型生成的样本上训练，并降低估计方差。所测模型接受的草稿更长，解码也更快。部署收益仍受验证开销及服务负载影响。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31256)

## 检索增强生成与知识检索

### 让稠密检索与知识图谱交替寻找多跳证据

SPARQL-Planned Single-Hop Traversal over a Live Knowledge Graph for Multi-Hop Question Answering

🌟🌟

多跳问答既要找到相关段落，也得避免从知识图谱扩出太多噪声。论文先用稠密检索找起点，再把查询计划拆成单跳查找，并与文档检索交替验证。不限预算的设定在三个基准上均领先，代价受在线图谱覆盖、访问延迟和允许迭代次数影响。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31771)

### 长表格问答应先决定是检索还是计算

TableRouter: Query-Aware Evidence Construction for Long-Table Question Answering

🌟🌟

长表格只查相关行，容易把求和或计数需要的记录漏掉。论文让问题先选证据路线，聚合问题走全表计算，其他问题取相关行和列摘要，最后只调用一次冻结模型。九组对照都提高了准确率，幅度为一点二至十八点三个百分点。算力节省是估算，并假定索引可被多个问题复用。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32006)

### 命中记忆之后，还要检查证据是否凑齐

From Memory Access to Evidence Sufficiency: Diagnosing and Addressing Demand--Evidence Misalignment

🌟🌟

找到相似对话并不保证已经凑齐答案。作者把问题拆成事件、时间和状态等条件，分别定位记忆访问、证据覆盖与读取环节的故障，再按需要组织证据。一个基准较对照高六点二三个百分点，另一基准达到百分之九十一点八。部分证据支持判断仍由阅读模型完成。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32088)

### 深度搜索训练如何兼顾证据与上下文压缩

Bathys: Advancing Deep Search Agents

🌟🌟

深度搜索训练要让模型找到互补线索，并验证它们是否指向同一答案。作者用可查证的间接线索构造问题，再在允许压缩历史的环境中进行监督和强化训练。两个规模模型用同一运行配置接受四套测试，网页变化、排序和生成式裁判都会使比较随时间波动。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32660)

### 长期对话记忆可以等到查询时再寻找关联

SAG-Mem-1\.0 Technical Report

🌟🌟

保存对话时先提炼摘要，可能丢掉之后才能判断有用的信息。论文直接保留消息块并建词项索引，接到问题后再以初始证据扩展检索，并澄清相对时间。两套纯文本记忆基准上有竞争力，索引阶段省去模型推理，但回答时仍有证据判断和生成成本。

[阅读论文 PDF](https://arxiv.org/pdf/2611.33124)

### 把新增资料归并进固定大小的模型缓存

SD-Cache: Learnable Memory Consolidation with State-Guided Dynamic Caching

🌟

持续把文档加入上下文会让模型内部缓存越积越多。作者冻结生成器，用可学习模块把各层状态归并到固定数量的记忆槽，再用全局状态校正新缓存。在检索问答和合成长上下文测试中，受限内存下仍保持竞争力。真实在线服务的长期更新效果还有待观察。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31265)

## 多智能体与协作

### 用共同结果奖励训练智能体组织

Avalon-M1: Reinforcement Learning from Collective Rewards

🌟🌟🌟

主管和专家共享同一套模型策略，通过留言区和工作区在时限内协作，并按团队结果更新。一个证明基准中，八专家配置比单代理高十五点二个百分点。另十二项测试的平均成绩接近同令牌预算的单代理，估算延迟约为三分之一。延迟并非实测，两类监督情景里的外部上报也出现退化。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32539)

### 用等预算阶梯检验多智能体协作

Recursive Collective Intelligence: Emergence on an Equal-Budget Ladder in Multi-Agent LLM Systems

🌟🌟

多智能体胜过单模型，差距可能来自更多令牌。论文逐级用同预算独立投票和多次尝试对照，再测团队能否利用自身输出改进下一代。这样可以把互动增益和多采样的收益分开衡量。比较结果依赖任务的答案判定方式，尤其不能把有真值的选优指标直接当作部署中的选择能力。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32606)

### 用多人游戏胜负训练语言模型协作

Exploring Multi-Player Social Games as Verifiable Training Grounds for Large Language Models

🌟🌟

社交游戏有明确的胜负规则，可给开放语言交流提供可验证反馈。作者用三种隐藏角色游戏先做监督训练，再按胜负优化。四十亿参数模型对强对手的胜率在训练游戏由百分之三十三升到八十一，留出游戏由三十九升到五十四。指标反映规则内协作，不能直接衡量现实社交质量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31821)

### 保留强模型主控，把耗时杂务交给小模型

Delegent: A Multi-Agent Harness That Reduces Cost without Sacrificing Performance

🌟🌟

强模型可以保留决策权，把搜索、调查文件和运行测试等明确子任务交给小模型。论文在深度软件工程与搜索任务中用这种委派把强模型开销分别降到约三分之一和百分之四十一，所测成绩相当。这个数字需要和小模型本身的硬件、调用和等待成本一起看。

[阅读论文 PDF](https://arxiv.org/pdf/2611.33098)

## 大模型训练与对齐

### 同一个任务做不好，可能是接口没学会

Learning What vs\. Learning How: Decomposing Task and Interface Competence in Agentic Training

🌟🌟🌟

模型换了执行框架就失手，可能是不会操作新接口。作者从不同框架收集任务示范，再让模型用几乎不含任务知识的轨迹练习目标接口。两种监督联合时，任务经验更容易迁移，部分只用单框架训练的模型在留出接口上明显退化。拆分是否成立，仍取决于框架差异和演练数据的构造。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31427)

### 只蒸馏动作，也能教会模型长程策略

CoT-Proxy: Cross-Format Transfer for Distilling Long-Horizon Policies

🌟🌟

闭源教师常能提供工具动作，却不公开推理过程。作者用动作轨迹训练推理区留空的学生，并用学生原有生成结果的回放限制漂移。在软件修复和应用操作测试中，学生开启思考后仍能执行学到的策略。结论建立在学生已有推理能力和教师动作质量之上。

[阅读论文 PDF](https://arxiv.org/pdf/2611.33148)

### 生成式奖励模型也要为逐条判据负责

Making Evaluation Explicit Is Not Enough: Supervising the Evaluation Process in Generative Reward Models

🌟🌟

奖励模型押对偏好，也可能给出不成立的理由。论文让模型先生成评分规则，再用独立信号指导逐条判断，并与最终偏好一起训练。作者报告逐项判断和下游策略优化都有改善。结果仍依赖用来提供中间监督的探针和规则质量，换任务后要重新检查其可靠性。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32161)

### 把通用技能学进模型，同时保留调用外部技能的能力

SkillCore: Internalizing Generalizable Skills via Scaffolding-Removed Fine-Tuning

🌟🌟

通用技能如果总要用户显式加载，就很难在日常任务里发挥作用。研究删除部分训练轨迹的技能加载过程，同时混入仍需查阅外部资料的轨迹。两个模型在留出的无技能任务上质量相对提高百分之五十四点四和二十四点八。这些增幅限于所测技能与评分设置。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32246)
