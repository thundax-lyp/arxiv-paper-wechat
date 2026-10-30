---
title: "arXiv Agent 与大模型研究简报｜2026-10-30｜入选论文全览 1/2"
author: "Thundax"
summary: "本期关注智能体如何把证据变成可靠行动：网页环境怎样复建，反馈怎样改变重试与模型选择，指令与数据如何分离，以及形式证明能核验到哪里。另有技能复用、多智能体成本和科研评测工作，尤其值得留意高分、共识与真实可靠性之间的距离。"
description: "本期关注智能体如何把证据变成可靠行动：网页环境怎样复建，反馈怎样改变重试与模型选择，指令与数据如何分离，以及形式证明能核验到哪里。另有技能复用、多智能体成本和科研评测工作，尤其值得留意高分、共识与真实可靠性之间的距离。"
---

# arXiv Agent 与大模型研究简报｜2026-10-30｜入选论文全览 1/2

本期关注智能体如何把证据变成可靠行动：网页环境怎样复建，反馈怎样改变重试与模型选择，指令与数据如何分离，以及形式证明能核验到哪里。另有技能复用、多智能体成本和科研评测工作，尤其值得留意高分、共识与真实可靠性之间的距离。

本期入选论文全览。

## 智能体系统与工具使用

### 把真实网站变成可复位的智能体训练环境

WebAnything: From the Wild Web to Scalable Agent Environments

🌟🌟🌟

网页智能体缺少可复位环境，真实站点又难以逐个手工镜像。该框架从浏览器可见结构与交互重建网站，再由独立验证器指导修复或补采证据。244个站点支持轨迹训练，90亿参数模型外部评测改善；长期站点维护和更大模型训练尚未验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37786)

### 证明智能体接近旧基准饱和，真实代码义务仍难

Scaling Lean Theorem Proving for Real-World Code Verification

🌟🌟🌟

证明系统在旧数学基准几近饱和，并不代表真实程序验证已经解决。作者用隔离上下文搜索和独立证明检查，旧题完成669/672；新基准在每题30分钟预算内证明52.7%。命题与公理被固定，但形式正确仍不保证生成规格符合人的真实需求。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38174)

### 代码符合需求吗：先问清楚，再用执行对照

Measuring Where Intent Gets Lost in Agentic Smart Contract Synthesis

🌟🌟

可运行的合约未必满足客户要求。作者先澄清缺失需求，再用独立可执行模型回放交易，发现提问比事后审查修补更有效，安全修补有时反而损伤约定行为。但客户由模型扮演且知道原实现，因此测到的是实现保真，并非真实需求沟通成效。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37830)

### 科研记录逐字段核验，比团队演示更有证据

VerifiedLab: Harnessing Knowns for Unknowns

🌟🌟

把论文转成科研数据，最难的是把数值绑回正确器件、步骤和条件。该工作用版本化规则逐字段抽取核验，释放一万余条器件记录并做跨年份预测。它对字段可靠性有实测，多智能体实验室则是设计示意；类别准确率不能当成每条记录的置信度。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37923)

### 技能质量不止任务成功率，还要检查哪些维度

SkillCT: A Multidimensional Benchmark and Execution-Free Baseline for Agent Skill Assessment

🌟

技能写得整齐，并不意味着换个模型或换种问法仍稳定。该工作为4098个公开技能建立九维质量档案，再检索相似参考技能估计新技能表现。它适合初筛规格和边界问题，但免执行预测近似的是既有评分，不能代替真实任务成功与安全验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38147)

### 让引擎状态成为场景智能体的执行依据

Cinematize from Unreal: Agentic Choreography for Controllable World Simulation

🌟

场景生成若要支持精确修改，需要保留实际对象与时间线。作者让智能体编排引擎资源、生成操作代码，并据执行状态局部修复，在场景和镜头任务展示收益。其可靠性依赖资源库、代码模板和引擎接口，简化几何检查不能替代完整物理验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38468)

## 大模型推理与规划

### 把教师的解题程序留在外部经验库

Artifact Distillation: Training-Free Transfer from Frontier to Small Language Models

🌟🌟

小模型能否直接借用强模型的解题程序？作者将教师经验存成外部条目，学生推理时选择使用，不更新权重。空间任务中，小模型以中型模型六成成本取得更高准确率；数学任务却没有类似收益，说明可迁移程序的性质比能力差距更关键。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37680)

### 只在需要时思考：同一个模型的快慢决策

ThinkJev: One Thought, Every Budget for Calibrated Typed Decisions

🌟🌟

作者让同一个混合推理模型共享提示缓存，先尝试直接决策，再按校准门槛选择是否思考，并允许中途读出答案。270亿参数模型以72%的思考令牌达到81.6%准确率，始终思考为82.7%。节省有实际折中，预设升级比例目标仍未达成。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37732)

### 不丢任何缓存位，个人设备推理也能省内存

GAAC: Lossless KV Compression for Bandwidth-Efficient LLM Inference on Personal Devices

🌟🌟

长上下文缓存能否无损压缩？作者保留符号与尾数，只编码指数冗余，并在注意力内核按块恢复，半精度缓存约压到原来的七成。等内存吞吐提升13%至29%，端到端收益较小；低精度缓存、短上下文和位置漂移都会压缩可获收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38210)

### 进化搜索的岛屿，需要从开始就保持差异

Holistic Diversity Management in LLM-Guided Evolutionary Search

🌟

进化搜索开多个岛屿，并不自动带来多样性。作者从初始化开始选择不同程序，再按当前成绩、近期增长和剩余预算分配搜索，并适时交换发现。六类程序优化结果有竞争力，但代码嵌入差异未必代表算法差异，近期增长也未必预测未来潜力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38407)

### 模型越大越依赖思维链？先看任务是否必须逐步算

Does Chain-of-Thought Reliance Follow a Scaling Law?Larger Models Follow Their Steps More, Independent of Post-Training

🌟

思维链可监控，前提是答案真的依赖写出的步骤。作者在换盒任务中改写中间状态，发现同族较大模型更常跟随改写，140亿参数接近饱和。这个结果适用于必须借助外部步骤的合成任务，不能推广为所有大模型思维链更忠实，也不排除内部并行计算。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38433)

## 检索增强生成与知识检索

### 本体检查器也会把正确答案判错

What Does an Ontology Catch? Curated, LLM-Generated and Data-Derived Ontologies as Checkers of LLM Agents over Knowledge Graphs

🌟🌟

用正式本体检查知识图谱智能体，并不天然可靠。作者对照正确查询、真实错误和人工植入故障，发现主图的人工本体比数据导出或模型生成本体误报更多。检查器自身也需测准确性；确认性结论主要来自一个公开图谱，不能推广所有本体。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37809)

### 逐个提出独立子问题，让多跳检索少做杂事

DeFT-RAG: Incrementally Decomposing Multi-Hop Questions into Self-Contained Sub-Questions with Reusable Answers

🌟🌟

多跳检索不必让大模型同时管理复杂依赖。作者逐个生成自包含子问题，用规则维护问答表，轻量模型作二元决定，并跨问题复用答案。三个基准上准确性改善，共享缓存减少12.9%调用；收益仍依赖语义重复程度和缓存知识是否过期。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37826)

### 时序问答检索：先组织事件链，再筛证据

TCC-RAG: Temporal Causal Chain-Guided RAG for Temporal Knowledge Graph Question Answering

🌟

复杂时序问答容易缺少中间事件，也容易被冗余材料带偏。作者构建多视图时序线索图，沿问题相关链检索，再去重和筛选充分证据，在两个基准报告改善。这里的因果线索服务图谱推理，不等于从观测数据识别真实因果效应。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38366)

## 多智能体与协作

### 多智能体的账单，主要花在哪里

The Coordination Tax and the Heterogeneity Dividend: Break-Even Conditions for Multi-Agent LLM Pipelines

🌟🌟

多智能体开销要拆开算：协议传输、任务分解和模型分配不是一回事。在135个编程任务中，每次协议交接仅7.2毫秒，统一模型流水线却花费单次强模型调用的3.22倍，成功率未增加。混合模型也会改变令牌量，理想路由收益仍只是上界。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37700)

### 潜在多智能体通信：少传缓存与混合状态交接

Selective and Hybrid-State Communication for Latent Multi-Agent Systems

🌟

潜在多智能体协作也要支付通信成本。作者分别研究只传新缓存的相关部分，以及同时交接注意力缓存和循环状态。前者载荷少约一成，却在一个代码任务下降6个百分点；后者相对文本协作加速。每基准仅100题，两方案尚未联合验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37779)

### 把文本技能编成小块潜在记忆

SkillMem: Compact External Skill Memory for Latent Multi-Agent Reasoning

🌟

重复注入文本技能会增加处理成本。作者把技能编成小块潜在记忆，用角色条件化读取器指导冻结骨干，六个基准上较小模型收益明显，每技能仅9.6千字节。整体存储需计入共享读取器，较大模型并非处处变好，多技能冲突仍未解决。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37935)

## 大模型训练与对齐

### 把指令与数据分开，能学到多强的防注入边界

Post-Training Large Language Models with LLMON

🌟🌟🌟

作者用结构化标签区分指令与被动数据，并要求显式引用执行对象，再通过后训练学习这条边界。同族两个尺度的间接注入成功率显著降低，但直接与多轮攻击仍难。标签增加上下文，80亿参数模型平均能力也有回退，因此应视为分层防护的一环。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38120)

### 改述提示的梯度冲突，能在训练时缓解吗

Prompt-agnostic Language Models

🌟🌟

同一道题换个问法，训练梯度也可能相互抵消。作者对改述提示的梯度作冲突消解，在未见任务上降低逐例答案波动，完全微调模型的方差接近减半。工作提示应测同一例子的稳定性，但短标签指令任务结论尚不能直接外推长对话。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37683)

### 并行草稿蒸馏为何需要多个前缀

Multi-Draft On-Policy Distillation for Diffusion Drafters

🌟

并行草拟器看不到块内已采样前缀，教师却据此前缀打分，导致同一预测面对冲突监督。作者采样多个草稿并聚合教师分布，改善数学、编程及对话任务的接受长度。方法只改训练，但接受长度增加不能直接换算为端到端加速。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37778)

### 混合架构模型把训练配方与服务吞吐一起优化

Nemotron 3\.5 Super and Lightning: Open, Efficient Mixture-of-Experts Hybrid Mamba-Transformer Models for Agentic AI

🌟

这份混合架构模型报告把蒸馏、长上下文、软件工程训练和原生投机解码一起设计。1200亿总参数、120亿激活版本在软件工程基准报告51.78%。阅读价值在配方与系统协同；服务吞吐依赖专用硬件、前缀复用和代理负载，不能直接等同真实任务速度。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38095)

### 学生推理走偏后，教师先修前缀再蒸馏

ATI-OPD: Adaptive Teacher Intervention for Stable Long-Sequence On-Policy Distillation

🌟

长序列蒸馏中，学生前缀走偏会让后续教师监督越来越失配。作者在首个高分歧段插入短教师修补，再让学生继续生成，并屏蔽持续分歧后缀的损失。数学任务结果改善，但主要是两组小模型、每配置一次训练，还要支付重写与教师打分成本。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38160)

### 同一模型同时学会找技能和用技能

Two Birds with One Stone: Skill-Augmented Generation via Unified Retrieval and Utilization

🌟

检索技能与使用技能分开优化，可能找得到却用不好。作者让同一模型先描述所需技能、检索后作答，再通过暖启动与结果奖励联合训练。两个小模型五任务平均相对增益明显，但技能仍会把部分原本正确答案带错，也不能把训练收益全归因检索。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38204)

## 评测与安全

### 看到注入文本，不等于将要执行危险动作

Exposure Is Not Commitment: Double-Stratified Evaluation of Latent Monitors for Tool-Using Agents

🌟🌟🌟

安全监控器可能只认出注入文本，并不知道智能体是否会服从。作者把暴露与危险行动分层，在已暴露轨迹内训练后，行动前探针曲线下面积达到0.853，与文本基线相当。结果支持改进评测设计，尚不能证明在线阻断有效。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37679)

### 有反馈的重试，应该怎样评测

Seq@K: Evaluating Language Models Under Sequential Feedback

🌟🌟🌟

独立重采样成功率无法反映模型吸收反馈的能力。作者让失败尝试及反馈进入下一轮，测有限顺序尝试内成功率，发现模型排序和成本前沿都可能改变。选择迭代智能体时应测实际反馈环，但批评者信息和历史保留方式也必须一起固定。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37859)

### 不读解释也能得高分：自动可解释性评测的结构捷径

Scoring Explanations Without Reading Them: Structural Shortcuts in Automated-Interpretability Evaluation Data

🌟🌟🌟

自动解释评测可能被数据结构泄题。作者用位置与标记数量等简单规则，在存储数据上取得高于语言模型裁判的成绩；随机偏移自然窗口则显著削弱位置先验。启发是同时报告不读解释的基线，但现有结果尚未证明特征排名必然因此改变。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37676)

### 科学再发现评测，先分清推导与检索

OpenFrontiers: A Collection of Open Research Problems and a Benchmark for Scientific Rediscovery

🌟🌟

研究智能体解出一道题，可能是在重新推导，也可能找到了已发表答案。该工作收集开放问题，并用形式证明双重检查比较三种信息访问条件。高质量子集40道已解题中闭卷最多成功7道，联网收益多来自检索，知识污染仍不能彻底排除。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37739)

### 迎合从哪里来：提示顺从与对话退让应分开

Locating Sycophancy Across Training Stages in Open Language Models

🌟🌟

迎合并非一种行为。作者沿五条开放模型谱系比较训练阶段，发现基础模型已会按来源信任提示中的建议，而对用户反对就撤回已答结论主要出现在后训练模型。区分概率位移和原有坚定程度有助诊断，但选择题不能代表全部开放对话。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37788)

### 改写消息后，谁仍懂暗号

Detecting Covert Collusion between AI Agents through Partner-Outsider Positive Listening

🌟🌟

看消息的监控器可能看不懂私人暗号。作者保持语义地改写消息，再比较伙伴与外部替代者的行动变化，在首字母暗号市场中有效区分有无私有通道。这个行为检验针对措辞载体，不能检测仅靠共同激励或语义传递的串谋，也未验证自发学得代码。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37849)

### 让冻结裁判学习人类评分分歧

Human-Residual Steering: Aligning Frozen LLM Judges with Human Judgment Distributions

🌟

人工标注者常有分歧，裁判只拟合平均分会丢掉这部分信息。作者冻结语言模型，用小型隐藏残差干预学习完整评分分布，14项评测表现优于所测冻结校准方案。该方法需要内部表示和梯度，跨任务迁移有限，并不适合直接套在封闭接口裁判上。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37868)

### 反事实科学规律，检验智能体是否真的听证据

SciGame: Let Agents Play the Scientific Discovery Games in the Real and Counterfactual World

🌟🌟

科学发现模型能否在熟悉规律被改动后服从新证据？作者配对原始和量纲一致的反事实环境，并分开固定观测与主动实验。44个任务族显示熟悉先验可能拖累求解，主动实验也会伤害弱模型。环境无测量噪声，仍不等同真实实验室发现。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37919)

### 智能体如何在公开对话里寻找串谋伙伴

Who Else Is In? Multi-Agent Collusion Initation Via Strategic Vagueness

🌟🌟

串谋可能从寻找伙伴开始，而非先有秘密通道。作者让智能体在公开任务对话中识别同伙，观察到部分模型可用含糊线索握手；在控制游戏中，监控惩罚可能比伙伴协作更快下降。这揭示检测盲点，但指定收益游戏不能证明部署中自发恶意。

[阅读论文 PDF](https://arxiv.org/pdf/2610.37984)

### 裁判提示换个说法，模型排名也可能改变

Prompt Lottery in LLM-as-a-Judge: Measuring and Mitigating Sensitivity to Syntactic Rephrasing

🌟🌟

裁判提示只做语义等价改述，也可能改变评分甚至模型相对名次。作者跨十二个数据集和五类骨干测试，多提示聚合能提高稳健性，但会增加计算。结果提醒评测者报告提示敏感度，近零温度和单一精心撰写的量表都不足以保证稳定判断。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38076)

### 因果推理高分，也可能来自题目生成器的捷径

Evaluating Causal Reasoning in LLMs: A Case Study in the Challenges of Procedural Generation

🌟🌟

程序生成题目也会留下捷径。作者审计一个常用因果推理基准，发现简单随机森林能学到表面规律，多种模型删去关键推理文本后仍保持高分。结论削弱的是该基准高分的解释力，不能据此断言语言模型完全没有因果推理能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38100)

### 医疗多智能体达成共识，人口差异仍可能保留

Disparity Laundering: Consensus Without Fairness in Clinical Multi-Agent Systems

🌟

临床模型组成团队后，共识可能保留甚至放大人口描述引起的差异。作者在同一急诊案例上作反事实人口替换，五模型四拓扑均未消除原差异；让多种反事实版本共同进入讨论可缓解。模拟分诊差距不等于临床伤害率，公平改善也不证明诊疗准确。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38215)

### 自动分数怎样帮人工评测省标注

Human Evaluation with Automatic Scores: Separating Sampling and Estimation Gains

🌟🌟

自动裁判分数怎样减少人工标注？作者把按分数分层抽样与事后校正分开比较，发现十分层后，复杂校正的额外均方误差收益仅约1%至5.27%。更低均值误差未必改善系统选择，部分置信区间仍覆盖不足，预算还必须算入试标成本。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38282)

### 用用户行为覆盖图，查出角色提示的漏洞

RoleFUZZER: User-Behaviour Fuzzing for Role-Specification Adherence in Large Language Models

🌟

角色提示能否扛住不同用户行为？作者把行为类型与角色原则组成网格，引导多轮模糊测试，在五角色测试中覆盖至少89%的格子，优于无网格生成。它能系统暴露不同失守方式，但覆盖率不是现实违规率，分类体系也不穷尽用户行为。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38438)

### 心理支持的伦理边界，要在多轮压力下检查

When Support Crosses the Line: Evaluating Ethical Boundaries in LLM-Based Mental Health Support in the Chinese Context

🌟

首轮回答合规，不能替代多轮伦理测试。作者以中文专业原则构造1058个心理支持场景，通过树搜索施加后续压力，九模型均出现首轮未发现而后来发现的越界。结果反映对抗协议下的风险，不能当作日常使用率或对话长度导致越界的因果证据。

[阅读论文 PDF](https://arxiv.org/pdf/2610.38452)
