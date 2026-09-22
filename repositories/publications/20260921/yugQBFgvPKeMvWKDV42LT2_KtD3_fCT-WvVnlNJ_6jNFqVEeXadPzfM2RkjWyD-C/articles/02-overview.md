---
title: "arXiv Agent 与大模型研究简报｜2026-09-21｜入选论文全览 1/2"
author: "Thundax"
summary: "本期最值得关注的是智能体训练环境、开放任务信用分配、混合计算机使用与内部安全审计。多篇工作共同提醒：局部得分、流畅交互和平均通过率都可能掩盖端到端失败，真正可靠的系统需要可执行验证、过程证据和清晰的适用边界。"
description: "本期最值得关注的是智能体训练环境、开放任务信用分配、混合计算机使用与内部安全审计。多篇工作共同提醒：局部得分、流畅交互和平均通过率都可能掩盖端到端失败，真正可靠的系统需要可执行验证、过程证据和清晰的适用边界。"
---

# arXiv Agent 与大模型研究简报｜2026-09-21｜入选论文全览 1/2

本期最值得关注的是智能体训练环境、开放任务信用分配、混合计算机使用与内部安全审计。多篇工作共同提醒：局部得分、流畅交互和平均通过率都可能掩盖端到端失败，真正可靠的系统需要可执行验证、过程证据和清晰的适用边界。

本期入选论文全览。

## 智能体系统与工具使用

### 能打断、能插话、还能调用工具的全双工语音智能体

NemotronLabs VoiceChat: An Open Full-duplex Speech-to-Speech Model with Tool Calling Capabilities

🌟🌟🌟

统一流式架构同时处理听取、转写、推理、结构化函数调用和语音输出，在打断恢复、暂停处理和工具选择上达到较强结果。模型证明实时对话与工具调用可以共存，但参数准确率和端到端工具执行仍是短板，交互自然不等于任务可靠。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21967)

### 复刻真实应用，检验能看界面也能写代码的智能体

RecreationWorld: Scalable and Verifiable Environments for Hybrid Computer-Use Agents

🌟🌟🌟

论文把运行中的应用当作行为参照，让智能体在五类平台上交替探索界面、编写代码并验证成品。训练轨迹能迁移到其他编码和计算机使用基准，但最佳系统在全部程序检查上通过的任务仍不足百分之三，交互逻辑远难于静态外观。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22000)

### 只靠源代码，批量构造代码智能体训练环境

CodeMidas: Scaling Agentic Coding RL Environments from Code Itself

🌟🌟🌟

系统从已有代码中反推行为规格、生成执行测试，再用多轮解题筛掉不可靠任务，最终得到五千余个强化学习环境。训练后模型在修复、完整程序构造和终端任务上均提升；不过收益依赖原项目可执行且测试能覆盖真实行为。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22068)

### 游戏生成通过多数检查，仍可能整项失败

GameASG-Bench: Benchmarking Autonomous Software Generation for Game Development

🌟🌟

基准预先声明可测试接口，用源码检查和真实浏览器交互验证四十七个游戏任务。最佳平均动态检查通过率超过九成，但全部核心要求同时满足的严格成功率仅约五成，说明平均分会掩盖关键交互缺失；任务集中在浏览器游戏。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21293)

### 让芯片设计智能体先用高层抽象，再回到底层优化

Can Agents Design Better Chips with a Higher Level Abstraction?

🌟🌟

智能体先借助高层综合生成设计，再对综合后的底层表示做精修，结合高层知识与低层优化空间。十一项任务上相对直接底层设计取得约二点六倍几何平均加速；样本规模不大，结果依赖商业工具链和特定硬件平台。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21157)

### 多模态助手常常还没理解需求就开始回答

Omni Demand Understanding: A Benchmark for Contextual User-Intent Inference in Multimodal Interaction

🌟🌟

新基准要求先判断是否真的存在对助手的请求，再从画面、声音和对话历史补全意图。十四种模型中，最强者也只恢复不到一半关键隐含信息，多数模型在非请求场景误触发过半；部分视频由智能体生成，真实场景覆盖仍有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21392)

### 从失败轨迹提炼可复用的修复捷径

DENSE: Distilling Agent Trajectories into Evidence-Grounded Shortcut Trees for Self-Refinement

🌟🌟

系统不读取事后测试答案，而是把执行轨迹整理成嵌套捷径树：压缩重复尝试、保留恢复证据，并展开未完成要求。终端任务复跑的严格通过率提高约七到十六个百分点，同时减少输入令牌；证据来自单一基准，反馈模型自身误判仍可能传播。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21423)

### 为每位用户持续进化不同的信息抽取提示

One Prompt Does Not Fit All: Self-Meta-Evolve for Personalized Information Extraction

🌟🌟

内循环依据用户反馈修改结构化提示，外循环从成功修改中更新元提示，避免用一个全局提示服务所有岗位。近三百个模拟用户上成功率领先，二十位真实专业人士盲评也偏好个性化版本；真实用户规模仍小，长期漂移与隐私代价未充分验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21626)

### 临床试验设计中的多智能体研究组织

TrialAtlas: Multi-Agent Research Organization for Clinical Trial Design and Optimization

🌟🌟

系统让不同智能体分别检索文献、竞争试验和监管先例，再由上层整合设计缺陷与成功概率。基于近三百封监管回复的基准和专家盲评显示，多项指标优于通用深度研究系统；领域风险高，输出仍只能作为专家核查材料。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21859)

### 先整理再检索：会自配置视图的长期记忆

AutoViewMem: Self-Configuring Orthogonal Views for Conversational Long-Term Memory

🌟🌟

长期记忆在写入时自动发现低重叠语义视图，将偏好、事件和约束分开保存，离线阶段再聚类去重，查询时仍用普通相似度检索。两个长对话基准和两种模型均获益；视图发现依赖模型，快速分布变化与过度合并会损伤时序细节。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21940)

### 检索到记忆之后，先判断它是否值得相信

An Interpretable Memory Decision Controller for LLM Agents Based on Three-Signal Complementarity: Decoupling Confidence and Consistency

🌟🌟

零参数控制层综合相关性、可靠性和任务风险，在记忆冲突时选择采用、抑制或拒答。多组模型实验显示一般场景幻觉显著下降，额外延迟很小；但高风险高相关区域的决策准确率下降，主动采用后仍有残余幻觉，不能替代记忆库清洗。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22043)

### 让外部技能库从真实设计任务中持续进化

Designer-RSI: Evolving Procedural Memory from User Traffic for Agentic Graphic Design

🌟🌟

冻结基础模型，只让自然语言技能库扩展新流程并修订旧流程，再用匹配回放阻止修复一个失败却破坏既有成功。五轮真实请求使设计执行成功率大幅上升，且多个设计基准胜过无技能版本；自动评分噪声和单一专业软件场景仍限制外推。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22086)

### 会记住学习者误区的智能辅导智能体

CoLearn: An Agentic Tutor that Learns its Learner in a Human--AI Co-Learning Loop

🌟

系统用软证据知识追踪维护主题掌握度与误区，再据此生成下一道个性化问题，并展示证据供核查。模拟与盲评中个性化问题更受偏好；研究未证明真实学习增益，对弱学习者的证据估计相关性很低，事实正确性也未独立评审。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21154)

## 大模型推理与规划

### 把深度研究轨迹改造成长上下文训练材料

Boosting Deepresearch and LongContext Ability with Self-Generated Deepresearch Rollouts Traces

🌟🌟🌟

作者发现深度研究智能体的大量剩余错误来自长上下文理解不足，于是把搜索轨迹中的摘要替换为完整网页，保留原证据关系，先练长文问答再回到研究强化学习。该流程同时提升研究和长上下文基准，但依赖网页可获取及原轨迹证据链可靠。

[阅读论文 PDF](https://arxiv.org/pdf/2609.20844)

### 用形式逻辑求解器逐步审计推理链

LogicTrack: Auditing Reasoning Trajectories of Large Language Models with Formal Logic Solvers

🌟🌟

系统把每一步自然语言推理转成符号表示，交给定理证明器核验，再用逐步奖励引导回溯搜索并生成微调数据。八个推理基准和七种模型显示答案与过程可验证性同时改善；自动形式化若出错，后续证明结果也会被污染。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21492)

### 用一个连续旋钮控制流式解码看多少输入

Reading Less While Writing: A Closed-Form Bandwidth Dial for Streaming Multimodal Decoders

🌟🌟

调度函数让可见输入随生成进度和源长度变化，同一模型可在离线与实时之间连续切换，并给出不能依赖未来输入的结构保证。两种模态、三个数据集上低延迟时优于固定等待；流式实验多为单次运行，异步到达只证明未实测。

[阅读论文 PDF](https://arxiv.org/pdf/2609.20845)

### 奖励简洁推理，让模型更会在信息不足时拒答

Rewarding Efficient Reasoning Improves Abstention on Underspecified Tasks in Reasoning Models

🌟🌟

研究把未充分说明的任务视为应当拒答的情形，并通过效率导向的推理奖励抑制无依据补全。结果表明更短、更有约束的推理可改善拒答，同时保持正常任务能力；收益依赖任务中“不可回答”标签的构造与奖励定义。

[阅读论文 PDF](https://arxiv.org/pdf/2609.20846)

### 自然语言会丢失多少树状结构信息

The Communication Bottleneck: A Round-Trip Study of Tree-Structured Expression Serialization in Language Models

🌟🌟

生成器把算式变成文字题，另一模型再还原算式，用符号等价做精确判定。十六种模型两两组合显示通道强烈不对称，至少七成失败起于生成端；少量训练可显著修复，但实验主要围绕可程序生成的算术与逻辑结构。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21509)

### 潜在推理中的激活被推走，语言输出却不一定改变

When Steering Fails in Latent Reasoning: A Latent-to-Language Transition Gap

🌟🌟

研究发现连续思维中任务信息仍可解码，干预也能移动表示，但影响在转回语言生成时显著衰减，边界处输出分布还会突变。它指出控制方法必须跨越潜在到语言的接口评测；当前比较模型权重并不完全相同，尚未隔离唯一因果机制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21662)

## 检索增强生成与知识检索

### 小模型的令牌熵几乎看不出自己答错

Do small language models know what they don't know?

🌟🌟

七组模型配对和五个任务显示，三十亿参数以下模型的令牌熵在绝大多数组合中接近零，无法区分对错；多次采样后按语义聚类的熵才可用于把不确定问题路由给更强模型。提升可观，但额外采样与专家调用增加成本。

[阅读论文 PDF](https://arxiv.org/pdf/2609.20824)

## 多智能体与协作

### 开放任务强化学习，把胜负信号传到关键步骤

ArenaFlow: From Trajectory Ranking to Hierarchical Credit Propagation for Open-Ended Agent RL

🌟🌟🌟

方法先用锦标赛获得相对排序，再从比较理由中识别关键步骤、可复用技能及技能归因，把轨迹奖励分别传播到步骤和全局技能记忆。在旅行与深度研究任务上明显超过只给整条轨迹奖励的方法，但依赖裁判反思的准确性，开放任务中的偏差仍可能被固化。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21378)

### 按语义接近度动态连线的去中心化多智能体通信

Proxifield: Decentralized Multi-Agent Communication through Semantic Proximity

🌟🌟

每轮根据直接寻址、信息需求、计划一致性和信息互补性生成稀疏通信图，不需中央规划器或训练。团队规模增大时相对星形协调的优势扩大，永久失效下也保留更多任务收益；扩展性与鲁棒性主要在一个环境验证，且通信成本仍高于简单讨论。

[阅读论文 PDF](https://arxiv.org/pdf/2609.20889)

### 给社会智能体加一层可审计的贝叶斯信念

Bayesian Belief Layer for Controllable Opinion Dynamics in LLM Agents

🌟🌟

把“相信什么”与“如何表达”分开，每听到一句话就更新显式概率，并用一个先验强度参数控制固执程度。二十智能体实验可复现共识、持续分歧和坚定少数影响，参数在四种模型中可恢复；实验只用一个合成议题和完全连接网络。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21997)

## 大模型训练与对齐

### 让代码生成器与测试生成器共同训练

Information-Gain Rewards over Diversity-Pruned Tests: GT-Anchored Verifier Co-Training for Reliable Code Generation

🌟🌟

同一模型既写代码又写测试，用信息增益奖励能区分正确与错误实现的测试，并删除行为重复的测试。在五个代码基准和两种模型规模上，一次通过率优于对照；方法仍依赖带等级的正确性锚点，能否迁移到缺少可靠锚点的任务尚不明确。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21208)

### 专门生成能暴露事实不稳定的等义改写

Hallucination-R1: Robustness-Oriented Paraphrase Generation for Factual Consistency

🌟🌟

两阶段训练先稳定语义等价与表达多样性，再奖励能让问答模型产生事实不一致的改写。三个数据集上可发现跨模型脆弱点，并能用于轻量微调提高改写鲁棒性；语义一致性仍由自动指标把关，可能漏掉细微意义漂移。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21227)

### 蒸馏时先扣掉教师自己的偏移

Calibrating Teacher--Student Discrepancy for On-Policy Distillation

🌟🌟

作者发现师生概率差中混有教师在干预下的自我偏移，直接学习会把表面变化也传给学生。方法用正负特权干预估计偏移区域，只保留其外的监督信号；数学推理上用约一半差异取得更好结果，但验证集中在两组教师学生和数学任务。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21619)

### 遗忘不只要删掉答案，还要学会自然地继续

GUARD: Natural Forgetting in Large Reasoning Models via Guided Answer-Reasoning Distillation

🌟🌟

方法把危险披露轨迹改写为连贯的非披露推理和稳定拒答，再将引导行为蒸馏进模型，同时新增指标检查结构崩坏与无依据替代。两类推理模型实验兼顾遗忘和通用能力；安全退出轨迹由模型生成，其质量决定最终边界。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21677)

### 动态树推测解码也能保留随机采样

RheoSampling: Resolving the One-Hot Dilemma in Stochastic Dynamic-Tree Speculative Decoding

🌟🌟

方法把同一个采样令牌赋予两种概率：代理概率负责建树，真实概率负责无损验证，从而解除树结构与随机性的冲突。三种模型和六类任务均提高接受长度与实际速度，并给出无损证明；绝对加速增量较小，额外验证开销会吃掉部分理论收益。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21827)

### 用零范数正则把稠密模型改造成轻量专家模型

Accelerating Dense LLMs via L0-regularized Mixture-of-Experts

🌟

方法按领域整理训练数据，并用稀疏正则让稠密模型形成可跳过的专家计算，最高报告约二点五倍推理加速且性能接近原模型。训练仅用较小规模数据，但未与主流大规模专家模型直接比较，令牌级路由与专家冗余仍未解决。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21672)
