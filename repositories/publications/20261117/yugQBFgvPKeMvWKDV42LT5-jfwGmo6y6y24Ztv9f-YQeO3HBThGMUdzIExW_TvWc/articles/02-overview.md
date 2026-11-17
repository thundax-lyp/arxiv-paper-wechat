---
title: "arXiv Agent 与大模型研究简报｜2026-11-17｜入选论文全览"
author: "Thundax"
summary: "智能体从一次失败里学到的经验，怎样在下一次执行、另一个模型或另一段会话里继续发挥作用？本期关注技能迁移、长程交接和测试时修补，也看训练、检索与评测怎样把过程中的错误找出来。"
description: "智能体从一次失败里学到的经验，怎样在下一次执行、另一个模型或另一段会话里继续发挥作用？本期关注技能迁移、长程交接和测试时修补，也看训练、检索与评测怎样把过程中的错误找出来。"
---

# arXiv Agent 与大模型研究简报｜2026-11-17｜入选论文全览

智能体从一次失败里学到的经验，怎样在下一次执行、另一个模型或另一段会话里继续发挥作用？本期关注技能迁移、长程交接和测试时修补，也看训练、检索与评测怎样把过程中的错误找出来。

本期入选论文全览。

## 智能体系统与工具使用

### 智能体在测试时怎样读经验、选策略和修补

Read, Route, Patch: Robust Test-Time Evolution for LLM Agents

🌟🌟🌟

智能体重复尝试同一任务时，作者先挑出能区分成败的经验，再从行为不同的脚手架中选择策略，最后按顺序追加局部修补。三种骨干在五个基准上比最强对照平均相对高33.3%。结果采用固定尝试预算，尚未测长期运行中个别修补会不会相互冲突。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18585)

### 同一份技能，怎样迁移到更弱的智能体

Skill Transfer: Adapting Agent Skills from Strong to Weak Agents

🌟🌟🌟

强模型可能会主动补齐技能没写出的步骤。作者对齐强弱智能体在同一任务上的轨迹，找出弱模型漏掉的检查和动作，再修改技能文件。原技能在八个配置中的六个反而不如无技能，改写后在所测办公与数据任务中超过原版和直接演化对照。迁移仍需强模型参考。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18624)

### 工具会把视觉题答错，模型何时应该回看原图

ReVision: Selective Intrinsic Reasoning for Tool-Augmented, Reasoning-Intensive VQA

🌟🌟

接入工具能提高视觉问答总体成绩，同时也会让部分原本答对的问题变错。作者给模型一个按需重看原图的动作，允许它单独发起一次不带外部工具的视觉判断。六套基准都比直接用工具更准确，五套还优于合并两条完整轨迹。证据主要来自静态问答。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18637)

### 综述智能体如何在搜集、归类与写作之间回改

SurveyWeave: An Agentic Framework for Automated Survey Generation

🌟🌟

作者把搜论文、搭提纲、归类和写作交给不同智能体，允许根据覆盖情况回改章节。在作者的评测里，综合分比次优系统高6.2分，新见解仍落后于最强对照。全文阅读和互相审阅增加开销，单篇约113分钟，适合结合综述规模评估。

[阅读论文 PDF](https://arxiv.org/pdf/2611.19029)

### 让语言模型直接给控制流提供结构化判断

Decision 1\.0: Towards Open Decision Foundation Models

🌟🌟

工作流需要根据证据选择动作，也需要判断条件是否满足。作者训练模型给运行时传入的候选项直接分配概率，避免先生成一段答案再解析。在三千多项判断上测了规则、组合和迁移。结果取决于给定证据和候选集合，概率校准与选项顺序仍会影响实际使用。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18629)

### 语音智能体的自报延迟为何比用户听到的短

Latency, Speech Recognition and Turn-Taking in Voice Agents for Spanish Phone Negotiation: An Externally Measured Comparison of Pipecat, LiveKit and GPT-Live

🌟🌟

研究用同录音、同任务和外部计时器比较三个西语电话协商配置。两个级联系统的自报中位延迟比听者实际等待低9%与22%，端到端语音模型也更少听错金额。试验使用一位录音者和模拟通路，真实电话里的噪声、断句和延迟仍需验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.19118)

### 拟写回复时，怎样保留不同联系人之间的语言习惯

Personalized Language Models for One-to-Many Private Communications

🌟

作者让冻结的语言模型同时读取作者共用措辞和某个联系人的历史表达，得到真实回复后再更新个性化状态。按时间排序回放的216封邮件上，多个均值指标改善。证据来自八人和一个模型，仍不能体现用户是否愿意采用这样的回复。

[阅读论文 PDF](https://arxiv.org/pdf/2611.19155)

## 大模型推理与规划

### 把推理过程画成依赖图，能看出哪里低效吗

Understanding Failures in LLM Reasoning by Learning Structured Representations of Chain-of-Thought

🌟🌟

作者把推理文本拆成步骤并标记依赖，让图模型只看结构预测答案是否正确。它超过看长度或树结构的对照，在科学问答中平均有49%的步骤被归为路径低效。这个比例依赖作者对步骤的划分及自动标注，不能用来断定删掉某一步会改善答案。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18611)

### 让视觉模型只负责看清，规划交给符号求解器

Isolating Perception for Multi-View Planning under Occlusion-Induced Partial Observability

🌟🌟

积木被遮挡时，模型既要合并不同视角的信息，也要推导可执行动作。作者让视觉模型只提取对象关系，再由独立规划器求解。在12个可比条件中有11个消耗更少词元，计划表现持平或更好。实验预先提供了对象清单和规划规则。

[阅读论文 PDF](https://arxiv.org/pdf/2611.19179)

### 生成数学猜想时，先给对象还是先给约束

Which Mathematical Context Supports Target-Aligned Conjecture Generation? A Paired Ablation Study

🌟

作者对61个定理分别提供不同组合的数学上下文。局部对象单独给出时最能帮助模型接近目标定理，已有丰富上下文时，结构约束更有助于排除不合适的结论。评估依据原定理和自动裁判，观察的是与已有目标对齐，猜想的新颖性和有效性仍需另验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18621)

### 把自然语言逻辑判断拆成可检查步骤

KUDEX: A Zero-Shot Decompositional Framework for Logical Analysis in Natural Language

🌟

作者把引文核验、叙事一致性和逻辑判断都拆成知识、理解和演绎步骤，让人可以定位哪一步开始偏离。四项任务的实验结果超过直接提示或模型内置推理对照。提示经过针对任务的人工适配，因而收益和通用分解机制的关系仍需对照。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18851)

## 检索增强生成与知识检索

### 用嵌入模型的注意力找下一跳证据

Intrinsic Attention as Navigator: A Non-Generative Retrieval Method for Multi-Hop Queries

🌟🌟

多跳检索常要先从一段资料识别下一个实体。作者把嵌入模型注意力集中处当成桥接线索，沿多个候选路径检索，无需生成中间推理文本。它在两套多跳数据上提高证据召回，第三套表现接近对照。方法需要读取内部注意力，最终答案正确率还要单测。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18617)

### 把法条检索出来，模型就能用它完成论证吗

GPBam: A Retrieval-Aware German Public Law Exam Benchmark

🌟🌟

研究用81个德国公法案例和200条法规，分别测试法条背诵与完整论证。检索提高了所需条文的召回率，长篇论证评分的改善小得多。案例来自一个备考课程，作文由模型评分，证据主要说明找得到资料和能应用资料是不同的评测目标。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18981)

### 挑少样本示例时，后一个例子还能补什么

Revisiting What Makes a Good Context Subset: A Sparse Latent Basis Perspective

🌟🌟

研究按示例集合能解释多少查询表示来选上下文，优先补前几条例子遗漏的方向。七个基准中，部分推理任务超过只按相似度或多样性选例的做法。当问题文字没有显露出真正缺少的知识时，向量里的残差未必对得上任务需要。

[阅读论文 PDF](https://arxiv.org/pdf/2611.19220)

## 多智能体与协作

### 八轮智能体交接后，真正学到的规则还剩多少

Agents Cannot Hand Over What They Have Not Yet Understood

🌟🌟🌟

研究让智能体在56个规则隐藏的环境里反复试错，对比保留全历史和依次交接300个字符的笔记。八轮接力大致只达到单个智能体四轮的水平，对照把主要损失指向反复从上一版笔记再压缩。合成环境能校验规则是否传下去，损失幅度仍需在真实工作流单独测。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18642)

### 有害工具长期潜伏时，多智能体系统怎样找出污染源

Swarm Shepherd: Securing Multi-Agent Ecosystems Against Persistent Latent Compromise

🌟🌟🌟

工具型智能体可以先正常服务，积累路由信任后，再污染共享知识或状态。作者将调用和写入等事件纳入持续估计，试图更早报警，并沿事件回溯入口和传播路径。验证覆盖三个智能体框架和多种构造拓扑，真实生态能否复现取决于日志覆盖和威胁条件。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18693)

### 让模拟投资者共享新闻解读，各自按效用下单

Bridging Semantics and Utilities: A Controllable and Scalable Market Simulation

🌟

模拟大量投资者时，逐个让模型重复阅读同一新闻会消耗推理资源。研究按人群共享模型解读，再让每个主体用自己的效用和状态生成订单。对照显示调用减少，风险参数也更容易控制。结论来自设定的三类投资者及模拟市场，不能直接预测真实交易。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18613)

## 大模型训练与对齐

### 长程智能体强化学习能否每题只采一条轨迹

FlashREINFORCE: Critic-Free Single-Rollout Asynchronous RL for Agentic Language Models

🌟🌟🌟

不同任务的工具执行耗时差很多，按同题成组采样会让异步训练等待最慢的轨迹。研究用批内反馈作基线，并限制过时轨迹的序列偏移，让每题只需一次采样。小模型长推理在约四个策略版本滞后下稳定训练六千次更新，交互证据仍集中于计算工具和家务模拟。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18627)

### 让一条偏好样本说明到底好在哪里

Criterion-Activated Preference Synthesis: Attribution-Preserving Preference Data from Explicit Standards

🌟🌟

一对答复如果在准确性、篇幅和语气上同时不同，模型很难知道偏好针对哪一项。研究先指定质量标准，再用整体与单项评价过滤偏好对。两万条通用合成样本超过三万五千条的对照语料。判分调用成本较高，而单次训练难确认较小的收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18663)

### 动态微调的收益，有多少来自读了当前输入

PREFACE: Separating Shared Corrections from Prefix Conditioning in PEFT

🌟🌟

模型可以根据输入微调计算路径，但加入可学习的修正本身也可能带来增益。作者比较原样前缀、打乱条件和共享修正，发现有些提升无需匹配当下输入。实验证据主要来自小模型与选择题似然，结论适合指导消融，开放生成仍需验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18987)

### 流式转录怎样把说话人和响应延迟一起训练

Low-Latency LLM-Based Streaming Multi-Talker ASR with Verifiable Rewards

🌟

可穿戴设备要区分佩戴者和另一位说话人，同时尽快发出文字。作者用带说话人归属的词错误率做奖励，并限制延迟奖励，以免模型漏掉一些话轮来换速度。在一千多段会话上观察到改善，设置只覆盖固定角色的两人场景。

[阅读论文 PDF](https://arxiv.org/pdf/2611.19136)

## 评测与安全

### 当业绩压力变大，智能体还能守住经济约束吗

When Helpful Agents Cause Financial Harm: Evaluating LLM Agent Safety in Executable Economic Worlds

🌟🌟

实验将智能体放入能执行动作的经济模拟，用828个用例区分明示违规、绩效压力等条件。八个被测模型各有违规，连续试验还发现压力跨过约束阈值后，部分模型改变原先做法。多轮试验只覆盖部分可机械检查的规则，不能换算为真实市场风险。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18612)

### 披露残障身份后，模型会省掉多少专业内容

"I Am Not a Kiddo\!": Quantifying Epistemic Infantilization in Large Language Models via Multi-Metric Bias Analysis

🌟🌟

研究对同一专业问题加入或去掉残障身份提示，再测公式、定义与推理是否被保留。物理、数学等领域更容易出现技术细节流失，单看可读性分数常察觉不到。开放模型采用系统比较，商业模型只测挑出的高差异样例，无法据此排出模型名次。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18583)

### 正常任务不再好用，也是一种提示攻击结果

Endogenous Preferences as Vulnerability Signals: Discovering Universal Adversarial Triggers for LLM Utility Degradation

🌟🌟

研究关注不可信文本进入上下文后，正常问答是否还能用。作者先从固定模型的干净行为提取偏好信号，在没有目标任务反馈时筛出干扰文本。四个模型在九项基准上的效用平均下降40.2分。结果依赖可生成的候选范围，负向搜索结果也可能只是候选覆盖不足。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18592)

### 能给文化规范分类，为什么仍会在对话里归错范围

ScopeBench: Evaluating Cultural Norm Scope Awareness in LLMs

🌟🌟

作者用49个国家的规范测模型能否区分普遍要求与局部习俗，再把同样的规范写进对话。六个分类接近满分的模型，在互动条件中仍有约四成回应被判有害。评测只用英语且涉及模型裁判，结果提示要分测知识和互动表现。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18600)

### 同一个有害请求换种写法，拒答率会变吗

Jailbreak LLMs with Linguistic Style as a Hidden Attack Surface

🌟🌟

作者保持请求目标不变，只改表达风格，再比较多个模型的安全响应。不同风格之间的攻击成功率可相差一个数量级。内部分析发现部分改写仍保留可检测的有害意图，拒答信号却减弱。实验限于单轮，自动裁判的文体偏好也可能影响计数。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18601)

### 医学模型裁判会给自己的答案更高名次吗

The Judge Is Not Impartial: Self-Preference in Medical LLM Evaluation

🌟🌟

作者让八个模型轮流生成和评判医学回复，并对同一份答案比较自己和其他裁判给出的名次。单轮问答里，模型平均把自己的回答排高1.22个位次，多轮也观察到偏好。研究缺少医生评分，且每项只生成和判分一次，无法判断偏差在重复运行中的波动。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18616)

### 工具菜单扩大后，函数调用到底错在哪

RGFC: Registry Grounded Function Calling with stage-decomposed evaluation

🌟🌟

工具选错、格式不符和参数没有依据都会让一次调用失败。研究用三个数据集构建最多三千个条目的注册表，把这些错误分开记分。工具数量增大时六个小模型的表现下滑，明确反馈虽能改善部分调用，也增加时延和词元开销，且未必带来最终指标增益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18622)

### 问题没说清对象时，模型会问清楚还是直接猜

Wrong with Confidence: Measuring Hallucination, Overconfidence and Identity-Conditioned Behaviour in Large Language Models

🌟🌟

作者从同一事实题里移除指称对象，比较模型会问、会猜还是放弃。五个开放权重模型大约三分之一的情形主动澄清，其余猜测准确率更低，措辞也常缺少风险提示。结果来自固定设置的英语题，提示把澄清率和答题准确率分开测量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18728)

### 读得到谁做了什么，能证明模型在那处完成绑定吗

A Bag of Concepts? Testing Role-Filler Binding in the Verbalizable Workspace

🌟🌟

“用户欺骗模型”和“模型欺骗用户”词语相同，监控却必须分清角色。研究比较三个模型的激活读出、方向干预和消融，只有一个模型在特定位置出现选择性的绑定损伤。身份置换控制也没有通过，能从激活中解码信息仍不足以定位实际计算。

[阅读论文 PDF](https://arxiv.org/pdf/2611.19176)

### 跨文件的多模态工作，怎样评估智能体交付

Omni-Workspace: Benchmarking Omni-Modal AI Assistants on Multimodal Workspace Tasks

🌟🌟

这组380项任务要求智能体从不同格式的资料中找证据并产出指定文件。评分先核对文件是否可读，再检查内容和格式。作者同时看到听错、工具用错等局部失误，以及随着任务变长而忘记要求。每项只含五到十二个初始文件，大型工作区仍需另测。

[阅读论文 PDF](https://arxiv.org/pdf/2611.19202)

### 提取到了关系，模型有没有把适用条件弄丢

CondRelBench: A Mixed-Domain Benchmark for Condition-Scoped Relation Understanding

🌟🌟

材料说某种效应在指定条件下出现，摘要却可能把它写成普遍成立。研究让模型提取包含条件的关系元组，再用只调整条件的成组问题核对边界。模型在合成资料上更强，真实资料和跨题一致性更难。单个判断的高分不足以证明模型保留了范围。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18620)

### 证据不全或混入干扰，多语事实核查会怎样变化

Evaluating the Robustness of Fact-Checking LLMs on Multilingual Evidence

🌟🌟

研究保持主张固定，分别替换、削弱或混入干扰证据，比较英语、德语、希腊语和罗马尼亚语上的事实核查。模型表现会随证据损坏和语言条件变化。样本多是可反驳主张，结论更适用于这一类任务，不能代表支持或冲突证据下的行为。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18623)

### 模型链接医学术语时，会生成多少不存在的编号

Profiling Hallucinations in Frontier LLMs for Entity Linking to Medical Ontologies

🌟

作者让三个语言模型给出院小结中的实体匹配医学术语代码，再逐条查词表。实验里至少20%的模型输出编号无效，个别配置接近55%。直接生成和按词表限定候选是两种设置，这个比例适用于论文的提示与词表版本，衡量的是代码存在性这一项错误。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18595)

## 应用与基准

### 一段语音怎样同时完成转录、情绪与实体标注

OmniTag-LLM: Multilingual Multitask Speech Tagging

🌟🌟

作者把不同语音语料合到同一个训练格式，用专家模型补充缺失标签，让一个多模态模型一次输出转录、语言、实体等多项结果。五种语言共八千条音频用于评测，独立人工情绪数据上也看到提升。部分评测标签与训练教师重合，绝对分数需结合标注来源看。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18589)
