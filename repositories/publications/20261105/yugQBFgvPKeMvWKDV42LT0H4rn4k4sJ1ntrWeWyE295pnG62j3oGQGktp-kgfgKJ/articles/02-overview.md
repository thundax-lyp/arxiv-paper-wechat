---
title: "arXiv Agent 与大模型研究简报｜2026-11-05｜入选论文全览 1/2"
author: "Thundax"
summary: "本期关注智能体从局部表现走向完整交付时暴露的缺口。工具健康状态能改善派发选择，形式证书和裁判调查却仍需要独立验收。记忆、技能更新与多智能体隔离的研究，也开始把状态变化和后续动作放进同一测试。"
description: "本期关注智能体从局部表现走向完整交付时暴露的缺口。工具健康状态能改善派发选择，形式证书和裁判调查却仍需要独立验收。记忆、技能更新与多智能体隔离的研究，也开始把状态变化和后续动作放进同一测试。"
---

# arXiv Agent 与大模型研究简报｜2026-11-05｜入选论文全览 1/2

本期关注智能体从局部表现走向完整交付时暴露的缺口。工具健康状态能改善派发选择，形式证书和裁判调查却仍需要独立验收。记忆、技能更新与多智能体隔离的研究，也开始把状态变化和后续动作放进同一测试。

本期入选论文全览。

## 智能体系统与工具使用

### 把已核验的工具健康状态交给智能体

Agent Harness Awareness: Turning Verified Telemetry into Operational Control for Tool-Using Agents

🌟🌟🌟

宿主压缩遥测并标注时效，模型选择动作后由宿主复验和派发。研究报告216次决策中单次派发完成率由69.4%升至95.8%，另有27次本地网络执行复验。只测试工具与网络的预派发选择，未证明长程重试恢复效果。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05391)

### 记住未来意图，还要判断何时行动

Prospective Memory for Proactive LLM Agents

🌟🌟

维护带证据与激活条件的待办意图，分开线索识别、选择执行和状态更新。研究报告三个骨干上两个基准的主要综合指标均领先，部分误报指标仍有取舍。只评文本主动交互，复杂相互依赖意图与真实用户接受度未验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05731)

### 有限的人类咨询预算应该花在哪些决策上

Learning When Human Decisions Matter: Executor-Relative Consultation Value for LLM Agents

🌟🌟

离线模拟执行器获得咨询后的总效用，训练预测器联合选择咨询集合。研究报告两个执行器五种批量与三种顺序设置中多项收益提高，但航班与顺序动物任务有失败或退步。人类回应来自模拟或基准定义，咨询机会预先给定且预算较小。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05814)

### 用有限试验预算搜索完整智能体执行框架

HarnessFlow: MCTS-Guided Harness Optimization for LLM Agents

🌟🌟

将可执行候选与评估历史组织成树，搜索策略挑选父节点，编码智能体修改框架。研究报告每基准15次细化下六项测试平均69.48%，较初始框架高10.89个百分点。依赖可自动评分任务，部署成本比较不包含一次性搜索成本。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06254)

### 长期试错记忆应该保存分支与回头路

Twists and Turns: A Graph-Based Benchmark and Framework for Long-Term Memory in Exploration Tasks

🌟🌟

把探索轨迹建成图，构造224段对话和2018个问题，混合检索后扩展邻居。研究报告图记忆在多个骨干上总体更优，但较大检索预算下部分基线召回更高。对话是合成的，问答记忆收益未通过实际探索决策验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06414)

### 每次技能改写都接受，可能让智能体持续退化

EvoGuard: Mitigating Degradation in Online Skill Evolution

🌟🌟

离线收集技能并测效用，训练二选一选择器，在线一次前向决定是否换版。研究报告家庭任务平均成功率从接受全部改写的45.5%升至56.5%，另测科学与代码任务。每个基准单独训练选择器，执行器同属一家族且需离线评分成本。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06444)

### 用遮盖重建训练轻量的智能体历史压缩器

SUMONE: A Simple and Efficient Summarizer for Plug-and-Play Agent Memory

🌟🌟

摘要器保留能让冻结重建器恢复被遮历史的信息，再加长度惩罚。研究报告正文主表中搜索成绩0.52降至0.48、费用剩22%，代码解决率0.63降至0.59、费用剩58%。摘要与正文的软件任务费用口径不一致，须以主表条件表述，训练依赖重建裁判。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06445)

### 工具输出可以压成直接供模型使用的潜在向量吗

Tools Need Not Speak in Text: Latent Context Compression for Agents

🌟🌟

任务条件编码器把工具观察映射到输入嵌入，训练时对齐完整观察的下一动作分布。研究报告四项网页问答、两模型家族中词元用量减少70.01%至89.24%，运行时间减少24.45%至55.97%。需要访问模型嵌入层与匹配训练，问答结果未覆盖高风险写操作权限保真。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06500)

### 并行草拟摘要槽位，加快长历史压缩

SpecCompact: Accelerating LLM Agent Context Compaction with Slot-Parallel Semantic Speculative Verification

🌟🌟

小草稿模型独立生成结构槽位，由目标模型逐行核验修复并复用上下文。研究报告两目标模型的智能体工作负载压缩提速2.04至5.63倍，但部分模型下游成绩下降。需要额外草稿设备，压缩延迟缩短不代表整任务更快或更准确。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06876)

### 授权依据变化后，旧动作许可如何失效

Assurance-Conditioned Continuous Authorization for Autonomous AI Agents

🌟🌟

先检验证据有效性与情境适用性，再在授权上限内更新权限并推进世代。研究报告已完成案例展示默认拒绝、模型替换收权、无关变化不收权及旧世代许可被拒绝。主要证据来自原型案例与本地执行边界，不能视为分布式原子执行已验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05632)

### 参数记忆回答后，再用文本记忆核验

Route to Remember: Adaptive Memory Selection for LLM Agents

🌟🌟

把会话变成问答蒸馏进用户适配器，先答再对文本存储验真，必要时重新生成。研究报告参数记忆擅长近期材料，但旧事实衰退和未知信息识别仍由文本存储补足。写入需要逐会话训练，成本、删除与跨用户治理不等同普通文本记忆。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05636)

### 个人记忆框架自改后，如何检查补丁过拟合

Reglos: A Self-Evolving Personal Memory Agent with Recursive Self-Improvement

🌟🌟

保持用户追加记录，由编码智能体提出补丁，异家族批评者筛查后冻结评估。研究报告相同骨干下两项记忆基准有优势，但部分其他任务方法间仅相差数点。部分文献对比读者模型不同，短历史全量读取的结果不能代表长程检索。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06049)

## 大模型推理与规划

### 通过专家路由信号减少解题后的重复推理

Routes of Reasoning: Reading and Reshaping Test-Time Compute in MoE Models

🌟🌟

逐句标注推理行为，探测路由分数并在推理时调节相关专家得分。研究报告四模型四基准生成词元中位减少30.4%，准确率下降最多0.5个百分点。需要访问混合专家模型内部，长程工具任务和实际端到端延迟未验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05919)

### 每轮先生成多个动作，再选择一个执行

On Turn-Level Best-of-N Sampling for Scaling LLM Agents

🌟🌟

生成器在同一历史采样候选，由现成模型选择器逐轮判断后实际执行。研究报告终端长程任务准确性和重复成功有提升，所分析轨迹无效循环减少。额外生成和选择算力很高，行为分析专挑基线失败过的36题。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06868)

## 检索增强生成与知识检索

### 路由检索器时，直接比较取回的证据

RAGCompass: Generalizable Retriever Routing via Reranking

🌟🌟

共享重排编码器读取各候选证据集，以答案效用监督比较头选择来源。研究报告四项问答中测试回答分数0.3552，较最佳固定检索器高7.7个百分点。需先运行各检索器，读者模型和所测语料限定泛化结论。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05596)

### 搜索智能体什么时候应该主动寻找图片证据

ModalSearcher: Weaving Visual Evidence into Autonomous Cross-Modal Deep Search

🌟🌟

用离线跨模态图合成多跳问题，再训练选择文本搜索、图片搜索和反向搜图。研究报告同一工具流程下八十亿参数模型在五项问答基准平均提高16.2个百分点。训练图并非线上检索索引，实网变化与特定工具环境限制可复现性。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06131)

### 逐步核验搜索推理中的需求、证据和结论

Where Search Agents Go Off the Rails: Graph-Grounded Step-Level Verification

🌟🌟

抽取问题、文档和推理声明成图，以确定性匹配诊断缺失、未用、冲突和无支持。研究报告三项多跳问答及三类框架中离线错误召回较强，在线反馈收益随骨干和任务变化。抽图仍依赖语言模型，强调召回的指标与额外抽取延迟要一并看。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06662)

## 多智能体与协作

### 发现故障后，怎样只隔离受污染的协作分支

Airlock: Bounding the Multi-Agent Blast Radius via Selective Online Containment

🌟🌟🌟

以委派树限制权限，以追加式来源图追踪消费关系，先围栏再裁剪受影响执行。研究报告1832次试验台运行、161次实物运行及模拟中，主测试网格告警后均被阻断且收敛后无泄漏。保证以告警与控制到达为起点，约十个智能体三主机以上单协调器吞吐趋饱和。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06727)

### 审查智能体何时有权推翻原方案

Who May Overrule the Agent? Evidence-Gated Authority in LLM Review Institutions

🌟🌟🌟

仅允许附带可核验违规证据与合规修复的审查意见生效。研究报告空间任务中两模型各有85个正确方案被宽权限审查改坏，门控保留全部正确方案。结构化离散任务有明确真值，门控同时放弃部分合规次优方案的改进机会。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05390)

### 多智能体执行失败时，以角色为单位接管

MA-Mesh: Resilient Multi-Agent Collaboration via Role-based Self-Healing

🌟🌟

先生成协作与韧性规格再合成策略代码，用同伴反思发现异常并动态换角。研究报告四项基准正常条件下较强基线平均高6.71个百分点，注入故障下优势扩大。代理监控与元智能体持续可用是前提，强注入故障结果不能等同日常收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06389)

### 推理暴露缺口后，再招募知识与专家

Challenge-Aware Knowledge Recruitment with Meta-Agent Supervision for Medical Multi-Agent Reasoning

🌟🌟

外部挑战者阅读当前思路，按缺口检索证据或中途增补角色专家。研究报告医学困难题中针对缺口的中途检索优于前置检索，简单合并检索与招募反而退化。主实验单次结果小差异需谨慎，都是问答和模拟专家而非临床结局。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05393)

## 大模型训练与对齐

### 蒸馏智能体时，哪些思考过程需要保留

Agents, Think Only When it Helps

🌟🌟

在相同教师轨迹上独立删改思考与动作，再对比学生任务表现。研究报告当动作已暴露任务相关信息时，删改思考影响有限，信息仅在思考中时才明显受损。受控基准和可观察动作的信息关系不能直接概括所有隐式推理任务。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05709)

### 同一批轨迹如何同时提供结果与过程监督

Using Experience Twice: Dynamic Process Rubrics for Privileged Token-Level Credit Assignment

🌟🌟

策略从轨迹差异生成候选量规，冻结验证器按结果一致性选取，用成对回放计算词元优势。研究报告两规模家庭与购物任务都改善，相同环境交互预算下家庭任务较组相对优化高12.12与3.36个百分点。未增加环境交互仍会增加量规生成和回放算力，领域及骨干范围有限。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06543)

## 评测与安全

### 验证通过的代码是否真的满足需求

Verified but Vacuous: Three Failure Surfaces of LLM-Driven Verified Code Generation

🌟🌟🌟

分别审计验证器接受、证明绑定规格和规格忠实于需求，并配隐藏测试。研究报告同模型复现中接受率99.1%而外部规格绑定仅1.9%，结构验证后仍有隐藏测试失败。主实验使用单一模型家族，外部成绩的预算与修复流程不同。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05590)

### 逐步加功能后，编码智能体能交付完整产品吗

ViBench 2\.0: A Benchmark for Long-Horizon Software Building

🌟🌟🌟

让智能体从空项目逐阶段接收需求，用浏览器测试最终产品全部计划。研究报告17个产品每模型构建四次，最佳完整产品通过率64.7%，计划通过率96.9%。公众只能复现八个公开产品，单一执行框架与模型裁判影响外推。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05620)

### 看到了决定性证据，智能体裁判仍会服从错误预审

Grounded but Not Immune: Confirmation Bias in Agent-as-a-judge

🌟🌟🌟

对有独立真值的任务注入错误权威意见，比较三次多数裁定并分析工具轨迹。研究报告四个裁判五个数据集上最多40%的原正确裁定被改错，两个裁判的有害翻转主要源于过度信任。权威提示是受控诊断，分级属性缺少独立真值，不能直接当部署事故率。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05662)

### 环境变了，长期智能体会更新旧经验吗

Towards Robust Long-Lived Agents: Benchmarking Experience Lifecycles in Evolving Environments

🌟🌟

在18个交互环境中设置连续任务与静默变化，跟踪记忆和技能修订。研究报告20个模型中首个受影响任务后的更新覆盖均未超过37.63。每个模型环境只有一条保留经验和一条清空经验任务流，自动经验评分仍依赖模型。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05450)

### 从协作消息与代码历史中还原项目事实

SlackBench: Benchmarking Agents on Collaborative Projects Grounded in Real Code Repositories

🌟🌟

用真实研究项目的隐私保护重演，构造140个跨聊天、文档和仓库的问题。研究报告最佳配置总体准确率80.25%，直接文件访问在所测设置中平均增加7.85个百分点。重演项目和只读任务限制代表性，提示策略未全面比较。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05512)

### 多个模型裁判的分数，如何按可靠性聚合

AGORA: Reliability-Aware Aggregation of LLM Judges via Item-Response Theory

🌟🌟

用共同潜在质量尺度和裁判敏感度建模有序评分，无需人类标签拟合。研究报告三个元评测集里总体优于或接近混淆表聚合，小样本时优势更明显。只测绝对有序评分，裁判间相关性和成对偏好尚未完整建模。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05556)

### 搜索智能体怎样被排序、旧失败和初始猜想带偏

Cognitive Bias Signatures in Search-Equipped LLM Agents: A Stage-Resolved Analysis

🌟🌟

固定问题与文档，分别干预搜索顺序、失败历史和假设，记录检索与打开阶段。研究报告十个模型一千个合成世界显示主动搜索更受初始排序影响，打开反证更多也未必答得更准。短合成文档、确定性关键词接口与模型判分限制外推。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05720)

### 代码做对之外，还要满足具体用户的工作要求

PersonaCodeBench: Evaluating Coding Agents in Persona-driven Human-Interactive Sessions

🌟🌟

把画像要求编成预先冻结的披露条件和验收契约，分别验任务与个性化义务。研究报告轻量子集最好配置联合通过率48%，评估错误和未执行任务计为未通过。部分来源任务很少，联合指标混合执行与评估失败，模拟用户依赖固定模型。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05739)

### 同一模型换执行框架，规则遵守会怎样变化

The Harness Is the Model: Agent Scaffolding Changes a Fixed LLM's Compliance with Banking Conduct Rules, Unevenly Across Models

🌟🌟

四模型各跑五框架与156个模拟银行案例，用实际工具轨迹确定违规和过度拒绝。研究报告3120段交互中同模型最佳与最差框架最多差11.5个百分点，审查器降低违规但日期规则仍困难。模拟规则有些严于所参考法律，交互效应统计证据仅为提示性。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06116)

### 上下文压缩后，拒答行为还能保持吗

Does Context Compression Preserve Refusal Alignment?

🌟🌟

对语义重建良好的编码压缩做安全压力测试，再在压缩向量上补回拒答信号。研究报告多模型与压缩架构下拒答减弱，固定长度压缩的门控干预能恢复至接近基线。缓解主要限固定长度编码，拒答方向探针未完整证明机制因果。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06380)

### 交接摘要会不会凭空增加权限与限制

When Do Summaries Become Instructions? Unsupported Policy in LLM Agents' Self-Written Handoff Summaries

🌟🌟

给合成工具任务配置权限账本，同一快照替换无依据摘要句后重跑继任者。研究报告限制的预注册重放检验不显著，明确权限来源的提示在留出模板将无依据限制从1.8%降至0.3%。移除虚假授权的收益来自事后分析，大模型样本少且继任者看不到原请求。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06545)

### 复用历史执行轨迹，减少智能体评测任务数

Task-Efficient Agent Evaluation Using Cached Traces

🌟🌟

先把轨迹压成任务相关结构摘要再嵌入，结合项目反应模型估计新系统总成绩。研究报告只执行随机一题时，两基准平均绝对误差分别由0.13至0.08、0.14至0.12。依赖已有系统轨迹覆盖，参考系统少且任务预算高时组合未必胜出。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06803)

### 让编码智能体搭建服务，再独立检验交付

ServerBench: How can your coding agents design specialized LLM serving systems?

🌟🌟

给固定硬件模型与八小时预算，用保留会话依赖的回放测延迟合格价值和成本。研究报告33次运行中22个服务通过验证，13个超过最强参考，单项最高达对应参考4.87倍。仅三个部署和单一轨迹来源，目标排除开发成本且不能解释为真实利润。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06841)

### 编码智能体能否交付真正可运行的压缩模型

CompressionBench: How can your coding agents compress LLMs?

🌟🌟

给模型权重、存储上限和时间预算，要求同时交付压缩权重与推理代码。研究报告36件交付29件通过独立验证，逐任务选最低困惑度方案的平均下游准确率77.33%对基准79.56%。每对只运行一次，逐题择优是汇总选择，未证明压缩模型能继续自我压缩。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06858)

### 解释智能体为何失败，需要真正执行反事实

Attributing Agent Failures to Their History Needs an Executed Counterfactual: Toward a Reporting Standard

🌟🌟

冻结环境和进程状态，只替换可见历史，再用匹配估计目标的重放证书核验。研究报告24个状态中相同哈希恢复彼此一致，却可与原运行有9或20处不一致，恢复随机流位置后全部一致。恢复演示没有语言模型，分类关联测量不可用于行为因果结论。

[阅读论文 PDF](https://arxiv.org/pdf/2611.05650)

### 记住工作偏好，是否也带来虚构证据

ProcessPrefBench: Evaluating Cross-Task Transfer of Individual Process Preferences from Naturalistic Human-AI Interaction

🌟🌟

从两位知识工作者自然对话构造66组来源与目标，分开判断偏好证据和适用性。研究报告完整历史与命令式偏好均提高偏好得分，但虚构证据从5.8%升到约一成。只含两用户且相关来源预先给定，模型裁判与小型人审限制人群外推。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06065)
