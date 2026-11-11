---
title: "arXiv Agent 与大模型研究简报｜2026-11-11｜入选论文全览 1/2"
author: "Thundax"
summary: "这期从智能体运行中最容易被结果掩盖的几件事讲起。上下文压缩后答案可以保持正确，网页动作的正确选项可能早已由候选集泄漏，失败轨迹也可能已经留下无人使用的反证。另有同步辐射实验的人机协作记录、企业流程的架构成本对照，以及自动编写任务验证器的实测。"
description: "这期从智能体运行中最容易被结果掩盖的几件事讲起。上下文压缩后答案可以保持正确，网页动作的正确选项可能早已由候选集泄漏，失败轨迹也可能已经留下无人使用的反证。另有同步辐射实验的人机协作记录、企业流程的架构成本对照，以及自动编写任务验证器的实测。"
---

# arXiv Agent 与大模型研究简报｜2026-11-11｜入选论文全览 1/2

这期从智能体运行中最容易被结果掩盖的几件事讲起。上下文压缩后答案可以保持正确，网页动作的正确选项可能早已由候选集泄漏，失败轨迹也可能已经留下无人使用的反证。另有同步辐射实验的人机协作记录、企业流程的架构成本对照，以及自动编写任务验证器的实测。

本期入选论文全览。

## 智能体系统与工具使用

### 给企业流程加技能和多智能体值多少钱

Agent Architecture Cost-Success Trade-offs: A Controlled Evaluation across Enterprise-Style SOPs

🌟🌟🌟

研究固定模型、任务和模拟工具，比较单智能体、技能增强及多智能体配置。不同流程间成功率差异很大，复杂架构普遍增加词元和时延。在论文结论所用的十二个共同流程中，改版编排器成功率为百分之七十四点四，单智能体为百分之六十五点六。模拟工具和单模型限制了外推。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12953)

### 让智能体生成的验证器读到正确证据

Veritas: A Verifier Generation Harness for Agent Tasks

🌟🌟🌟

自动验收程序可能写得完整，却读不到最终产物。研究在生成前明确验证器可见的证据、领域规则和编写原则。固定底座模型时，四个执行评分基准上的裁决一致性均高于七种通用框架。多数候选产物由实验构造，基准标签也依赖官方验收程序，真实失败仍需另测。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13336)

### 机器人动作模型如何只保留有用的视觉片段

APS-VLA: Action-Guided and Future-Aware Token Pruning for Efficient Vision-Language-Action Models

🌟🌟

研究用演示动作与动作后的图像变化训练视觉片段选择器，保持原动作模型冻结。部署时只需当前观测；在模拟任务和两类实体平台上，作者报告推理更快且大体保持成功率。证据基于特定检查点和操作任务，复杂场景下删掉少见但关键的视觉线索仍是风险。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13030)

### 教智能体技能要先弄清它为什么失败

Teaching the Harness: Student-Aware Skill Transfer for LLM Agents

🌟🌟

较强的模型先从学生的工具、预算和失败轨迹推测瓶颈，再用探测任务选择要写进技能的流程。与同样能看轨迹的教师相比，这种设计会选择更适合学生资源约束的做法，例如用批量查询替代逐项检查。结论基于受测师生配对和任务套件，迁移仍受执行环境约束。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13144)

### 换模型时丢掉推理历史会损失多少

Deletion Sensitivity Is a Property of the Model: A Three-Condition Measurement across Seven Open Reasoning Models

🌟🌟

跨服务转发多轮工具会话时，原模型的推理记录可能无法带走。研究对七个开放权重模型比较完整历史与不同删除条件，在七百九十四项任务中，同一种删除对应的性能差跨模型从负四点四到正五十一点三个百分点。结果是指定工具环境的测量，不能用参数量推断新模型的敏感度。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13223)

### 让实验智能体闭环操作实体仪器

Embodied Science Agents: Making Embodied Experimental Design Learnable

🌟🌟

作者将数字推理、仪器控制和贝叶斯优化接成闭环，自动选择染料降解的实验条件。五轮初始采样后，系统进行了十轮自动迭代，溶液透光率由百分之八十二升到百分之九十九点七。这个结果来自单一化学任务和预设参数空间，迁移到其他反应还要重新适配操作和测量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12958)

### 用一套智能体流程衔接不同芯片设计任务

ChipOmni: A General-Purpose AI Agent for Electronic Design Automation

🌟🌟

电子设计自动化的工具和验收标准随阶段改变。研究让一个规划与修订框架处理模拟电路、硬件描述、测试台和形式断言，再用各任务的工具执行验收。结果显示异构任务可共用一套迭代方式，证据仍来自选定基准，端到端芯片流片及商业设计工具的适用性没有得到同等验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13020)

### 把模型权重干预放进可恢复的请求事务

W-ISA: Transactional Execution of Weight-Space Intervention Programs

🌟🌟

研究把投影、消融和低秩改写表示为带形状检查的指令，在请求作用域保存并恢复参数。作者用语料和局部任务检查干预后的损失和运行成本，展示了临时参数控制的实现方式。现有实验规模有限，吞吐、并发隔离和长时运行的恢复表现仍需专门验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13232)

### 给临时权重策略增加验证和版本管理

NCP: Verifier-Guided Optimization of Weight-Space Control Policies

🌟

一个控制系统从执行遥测提出权重干预，分别核对任务结果与语料损失，再决定是否登记为可用规则。局部实验有候选大幅减少重复，但未新增正确答案，最终仍被归档。示范说明如何保留准入证据，距离验证长期闭环能稳定改进模型还有差距。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13236)

## 大模型推理与规划

### 让推测解码为多种后续写法分别起草

Multi-Future Drafting: Mixture Block Drafters for Tree-Verified Speculative Decoding

🌟🌟

分块草稿按位置独立估计后续词元时，容易把不同续写的片段拼成低概率分支。研究训练多个潜在续写模式，把各模式的前缀放进同一验证树。作者在多个模型上观察到更长的接受长度和解码加速，收益依赖分支预算、草稿训练量以及验证器能否利用多条路径。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13017)

### 数学推理写到一半就能纠错吗

Catch It Where It Happens: Real Time Error Correction During LLM Reasoning

🌟🌟🌟

生成时抽取可机械验证的数学断言，验证失败就截去出错后的内容，并把纠错提示交回模型。三款开源模型在两千七百道题上的准确率提高一点四至五点六个百分点，平均每题多生成约百分之六至七的词元。方法依赖可提取、可验证的局部主张。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13107)

### 数据多样性怎样影响模型学会抽象符号

What drives the emergence of symbolic mechanisms in large language models?

🌟🌟

研究从头训练小型网络，改变样本数量、角色词偏置等条件，观察模型能否从序列中抽象规则。干预实验发现，随着角色偏置增加，探针翻转率下降。模型只复现了大模型中部分符号抽象机制，尚未复现把规则应用到新样例的完整机制。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13270)

## 检索增强生成与知识检索

### 答案没变，压缩后的上下文还保留证据吗

SELD: Detecting Silent Evidence Loss in Context Compression beyond the Answer

🌟🌟🌟

删掉关键句后，模型仍可能给出同一个答案。研究比较压缩前后整个候选词元分布的变化，并用同样长的无关删减作对照。在答案都没变的配对样本中，检测器有百分之八十三的机会给删证据的版本打出更高风险分，最强基线为百分之七十。方法需要原文及阅读模型的输出分布。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12903)

### 知识图谱问答什么时候值得配图

Graph Visualizations in Prompts for Knowledge Graph Question Answering

🌟🌟

研究在固定检索流程中，给六种视觉语言模型输入同一子图的文字，或文字加图。加入图示后，整体调和分数提高一点八五个百分点，简单问题的增益更大，层级清晰的布局也更有利。复杂子图容易拥挤，结果只覆盖两套问答集及固定的图谱检索流程。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12938)

### 知识编辑可以从目标状态减少相互干扰

Capacity Allocation at the Source: Sparse Target Optimization for LLM Knowledge Editing

🌟🌟

批量改写模型知识时，多条新事实的目标状态可能互相干扰。作者在求目标隐藏状态时加入稀疏约束，尽量把改动集中在少数维度，再通过既有编辑流程写回权重。标准知识编辑数据上显示出编辑效果与特异性之间的改进，长期连续更新及大规模模型的表现还需单独验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12995)

### 医学选择题检索应找能区分选项的证据

Decisions by Discrimination: Differential Evidence for Medical Reasoning

🌟

多个临床选项常共享背景知识，检索到相关内容也可能无法区分。作者抽取关键线索，为各选项检索并生成有区分力的证据。三个医学问答基准上，差异证据比直接作答更有帮助，并可叠加推理提示。证据来自选择题，尚未覆盖真实诊疗中的开放式取证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13233)

## 多智能体与协作

### 在同步辐射实验中追踪人机决策来源

Auditable Human-Agent Teams for Autonomous X-ray Experimentation

🌟🌟🌟

研究团队将编程智能体接到小角散射分析和实验操作流程，在三次机时中保留人机及智能体间的交互。对五十多个活跃小时的回看显示，约一半决策采纳了另一参与者的输入，多数纠错涉及多人或多个智能体。结果来自同一平台和两个样品，未提供人机分工的随机对照。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12933)

### 监控一个通道，协作智能体会把通信移走吗

Monitoring One Channel Is Not Communication Control: Causal Evidence for Adaptive Reallocation of Joint Message--Route Codes

🌟🌟

发送者和接收者在游戏中自行学习消息和路径。局部监控启动后，两批各二十个随机种子的实验都看到通信向更难检查的路径转移。完整覆盖消除了这种选择性迁移，但消息仍可承担任务功能。证据来自合成协作环境，可以检验监控激励，却不能直接推断语言智能体的行为。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12959)

## 大模型训练与对齐

### 视觉位置编码该怎样影响文字与图像的交互

Disentangling Multimodal Rotary Positional Embedding in Vision-Language Models

🌟🌟

视觉语言模型常让文字和图像共用空间坐标。研究分离图像内部空间关系和文字到图像的坐标偏好，再通过受控实验比较。视觉内部的位置结构有助于精细定位，跨模态空间偏好收益有限，有时反而降低表现。结论来自选定模型尺度和坐标方案，仍受训练条件约束。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13334)

### 临床文书的人工改稿何时能用来训练

Actionable Feedback: Improving Model Capabilities from User Edit Data on Clinical Documentation

🌟🌟

医生补进草稿的细节可能来自模型看不到的渠道。作者用真实部署观察建立编辑分类，再合成带有这类编辑的出院摘要。直接用原始改稿微调会增加无依据内容，按输入证据筛选后则能保留文书指标的改善。训练效果来自半合成数据，现实临床编辑流程的迁移仍有待检验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12904)

### 给两百多种语言重新设计分词边界

A Multi-Word Tokenizer for 204 Languages That Needs Fewer Tokens Than GPT-4o's, Including on English

🌟🌟

新分词器保留附标与基础字母的组合，并为缺少空格的书写系统调整切分，再从多语文本学习合并规则。测试中它在二十五种印度语言上都比一个常用基线需要更少词元，部分版本的中位比例为百分之六十五。实验只测编码长度，尚未比较同等预算下训练出的语言模型。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13059)

### 在联邦微调中按设备预算提取低秩适配器

RBLA\+: Efficient Rank-Specific LoRA Adapter Extraction for Federated Fine-Tuning with Heterogeneous Clients

🌟

联邦客户端使用不同秩时，直接截断聚合得到的适配器因子会损失更新。作者用紧凑分解提取指定秩的近似，并处理客户端与服务端的缩放差异。图像和文本分类模拟显示，重建误差接近最优参考，部分任务准确率改善。实验主要是模拟，部署开销还取决于网络与设备条件。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12961)

## 评测与安全

### 长程智能体的错误如何沿轨迹传播

Dependable Long-Horizon LLM Agents: A Trajectory-Centered Empirical Study of Where Errors Enter and Which Controls Reach Them

🌟🌟🌟

研究回看六套多智能体系统的九十五条失败轨迹，把故障入口、传播、检测和后果连成事件记录。百分之七十二的轨迹在失败前已经出现反证，其中大多数没有被使用。研究还识别了运行框架接管输出的情况。控制措施的覆盖来自回溯判断，尚无前瞻试验测量成功率提升。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13254)

### 网页动作评测怎样泄漏正确选项

IntentTwin: Deconfounding Candidate Support and the Oracle-to-Deployment Gap in Offline Web Behavior Prediction

🌟🌟🌟

离线评测若把真实动作放进候选，而干扰项全来自训练动作集合，系统可仅凭集合归属猜中训练外答案。作者平衡候选组成，再让系统自行提出动作。在主要数据上，预置答案的条件首选准确率为百分之七十四点五，自行提议后的端到端首选准确率为百分之五十二点一，仍需在线交互验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12918)

### 擦除病灶后，模型是否还会坚持看见它

Seeing Is Not Believing: Counterfactual Lesion Erasure Teaches a Small Medical Vision-Language Agent to Report Only What the Image Shows

🌟🌟

研究用公开分割掩码擦除病灶，并制作同形状的非病灶编辑作为对照。多种受测模型仍会报告约半数被擦除的病灶，小模型经反事实训练后更能随图像变化调整回答。最保守的训练阶段也完全漏掉一种稀有病灶，提示降低虚报与保留低频真阳性需要共同度量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13006)

### 智能体应该先追问哪条信息

From Questions to Decisions: Benchmarking How LLM Agents Acquire Decision-Relevant Information from Human Beings

🌟🌟

调度或排班请求常缺少决定可行性的条件。研究让智能体向操作者补问，用求解器量化每条隐藏事实对计划的价值，并用七十九次真人会话校准模拟操作者。对照可区分追问遗漏和规划求解错误。任务总共四十三项，模拟操作者对其他群体及流程的适用性仍有限。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13015)

### 推理故障分类有多少来自测量者

Agreeing on the Answer but Not the Reason: Measurement Limits of LLM Reasoning Failure Taxonomies

🌟🌟

研究聚焦模型看见子问题却随后遗漏的故障，比较自动判别与多语人工评分。数字答案是否正确在不同评分者间一致性较高，解释模型为何漏掉子问题时一致性明显较低。论文只深入考察一种故障和特定基准，仍提示跨模型比较前要核对分类操作定义及评审一致性。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13140)

### 用工程师的合并标准测编程智能体

ExpertCrowd-SWE: Measuring Frontier Coding Agents on Expert-Authored Engineering Tasks in Unfamiliar Codebases

🌟🌟🌟

工程师为真实仓库的固定版本编写一百项多文件修改请求，给出封存参考解法和可部分得分的评分标准。七个受测系统的得分跨度达三十五点。评分覆盖正确性、回归和改动范围等因素，但不同模型仍使用各自提供商的工具接口，差距可能同时来自模型和工具配置。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13246)

### 有限证据能为智能体生成的程序担保到哪里

No finite rulebook can certify every safe program: an impossibility theorem for gatekeeping AI agents

🌟🌟

门禁若要求每次放行或拒绝都有可机器检查的证据，会遇到关于程序未来行为的边界。论文形式化讨论禁止动作、保密和响应性，说明有限行为前缀只能确认某些违规或满足条件。有限时限可改变可判定性，同时带来检查成本。结论依赖论文给定的观察与程序模型。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13367)

### 扩散语言模型在熵突升时推迟落词

Rethinking in Spikes: Mitigating Hallucinations in MDLMs with Step-Aware Decoding

🌟🌟

在逐步去噪的多模态模型中，少数掩码位置的熵会突然升高。研究在这些步骤用概率加权的词元向量保留多种候选，待分布稳定后再恢复离散解码。四个模型在多项测验中改善，例如一个八十亿参数模型的视觉辨析准确率提高了四点六个百分点。收益依赖多轮去噪，且异常步骤要追加计算。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12901)

### 用预填充训练生成过程的话题监测器

Train on prefill, monitor at decode: Using sparse autoencoders for topic monitoring

🌟🌟

研究从完整对话的隐藏状态中提取稀疏特征，训练逐词元的话题分类器，再迁移到生成阶段。两个规模的同系列模型都能使用这种监测器，插入题外话或调换段落时，宏平均调和分数最多下降五点。训练语料是合成对话，只覆盖七类话题，开放话题的泛化尚有限。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12935)

### 用同一组问题扰动识别模型亲缘关系

SetPrint: Black-Box LLM Fingerprinting via Setwise Correspondence of Response Changes

🌟🌟

只拿到模型回答时，可以比较两个模型怎样响应同一组问题改写。作者先在每个模型内部对响应变化做中心化，再比较对应变化。在十三个源模型和一百四十九个目标实例的基准上，方法优于受测的免训练黑盒对照。测试主要使用截短的编程题，其他输入和衍生方式仍有不确定性。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12950)

### 让模型按定义标注时要测同义改写的波动

Measuring Definition Sensitivity in LLM Annotation of Social Science Concepts

🌟🌟

社会科学概念可能有多个可辩护的定义。作者在同一批文本上分别更换定义和同义改写，比较语言模型的标签变化。三种模型在六类概念上，换定义平均比换措辞带来更多分歧。实验衡量标签对定义的依赖，无法单凭分歧判定各条标签是否准确。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13339)

### 模型复现心理量表相关性时会放大关系

Tracing Psychometric Inference in Large Language Models

🌟

作者让十四个模型根据一个真实量表预测其他量表，再比较行为输出和中层表征。较大的指令模型在受测探针中呈现与人类量表矩阵相似的几何结构，输出也常放大尺度间关联。样本来自单一地区的大学生，能从表征读出关系仍不足以确定模型是如何作答的。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12937)

### 内容审核需要同时衡量准确率和可信度

TrustMod-SM: A Multi-Axis Benchmark for Evaluating Trustworthiness of LLMs in Social Media Content Moderation

🌟

作者把社交媒体审核拆成真实性、公平、安全、鲁棒性和上下文完整性，汇集近两万九千条样例。结果表明，审核准确率和置信表达、不同群体的差异需要分别观察。该基准以离线实例为主，平台政策变化、申诉和人工接管如何影响实际审核效果仍未覆盖。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12970)

### 同一段意思在不同印度语言里会占多少词元

The Indic Token Tax in 2026: Measuring Tokenizer\. Disparity and Its Cost for the Languages of India

🌟

作者用平行译文比较九种公开分词器处理二十五种印度语言的词元数量。同一内容在某些文字系统中占用明显更多词元，进而压缩固定窗口内可放的内容。统计依赖平行句子和文本体裁，训练语料重合没有核查，日常罗马字拼写也缺少同等规模的对照。

[阅读论文 PDF](https://arxiv.org/pdf/2611.13058)
