---
title: "arXiv Agent 与大模型研究简报｜2026-09-14｜入选论文全览 1/2"
author: "Thundax"
summary: "本期的主线不是再堆一个更强模型，而是追问系统为何成功、又会在哪个接口失真：编码 Agent 的 harness 是否真有优势，LLM 评审能否代表任务完成，长期记忆怎样避免临时信息覆盖，以及试错预算如何分配。另有多篇工作把评测缺陷、遗忘泄漏、长程手册推理和真实设备执行拉回可验证的证据链。"
description: "本期的主线不是再堆一个更强模型，而是追问系统为何成功、又会在哪个接口失真：编码 Agent 的 harness 是否真有优势，LLM 评审能否代表任务完成，长期记忆怎样避免临时信息覆盖，以及试错预算如何分配。另有多篇工作把评测缺陷、遗忘泄漏、长程手册推理和真实设备执行拉回可验证的证据链。"
---

# arXiv Agent 与大模型研究简报｜2026-09-14｜入选论文全览 1/2

本期的主线不是再堆一个更强模型，而是追问系统为何成功、又会在哪个接口失真：编码 Agent 的 harness 是否真有优势，LLM 评审能否代表任务完成，长期记忆怎样避免临时信息覆盖，以及试错预算如何分配。另有多篇工作把评测缺陷、遗忘泄漏、长程手册推理和真实设备执行拉回可验证的证据链。

本期入选论文全览。

## Agent系统与工具使用

### 长期记忆不必压成答案，可以只做回到原话的线索

CueMem: Cue-Guided Context Reconstruction for Long-Term Conversational Memory

🌟🌟🌟

CueMem 把记忆记录当作检索线索，而不是最终证据：每条线索链接原对话轮次，查询时沿时间与语义图扩展，重建一小段原始上下文。它在 LoCoMo 和 LongMemEval 上优于多种记忆基线并降低输入与时延，但真实长期写入中的抽取噪声仍待检验。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12354)

### 反思越多不一定越好：试错 Agent 也要管理探索预算

VRL-Bench: Benchmarking agents on computer control tasks under finite trial budgets

🌟🌟🌟

VRL-Bench 把多种语言反思方法放到相同的完整试次预算下，发现记住失败经验有时会降低成功率，因为 Agent 过早沿用旧策略。VEX² 根据剩余预算选择继续利用还是探索，是六个模型—环境设置中唯一全部取得正增益的更新；结论尚限于六次试验和可见反馈。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12404)

### 把经历聚成可复用技能，Agent 才可能真正终身学习

LifeMem: Enabling Lifelong Experience Reuse for LLM Agents

🌟🌟🌟

LifeMem 不把历史轨迹逐条堆积，而是按底层工作流聚类、抽象技能，并在新经验到来时合并或细分。跨 10 个环境、逾 1.3 万任务的实验显示，它既减轻遗忘又改善跨任务迁移；但聚类质量依赖 LLM，任务到达顺序仍会影响结果。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12655)

### 优化仓库 SKILL，先要证明增益不是 Agent 自己的随机波动

Skill Issue: Lessons from Optimizing Repository SKILLs for Coding Agents

🌟🌟

研究从历史合并 PR 挖出困难任务，在隔离仓库里配对比较有无 SKILL 的同一 Agent。GEPA 文档平均提升 4.9 个百分点、SkillOpt 仅 0.1；但三个 Kotlin 仓库的测试集只有 20–26 题，现有数据量无法把前者与运行方差分开。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12742)

### 数据库 Agent 自我修正，关键是发现失败并重试

What Drives Recovery in Agentic Text-to-Cypher? LAST-CQ: An LLM Agent Self-Refinement Framework

🌟🌟

LAST-CQ 在 2,471 个实时 Neo4j 查询和六个底座上做反事实消融：它恢复 91.7% 的单次失败，但把精致的 LLM 反馈换成原始数据库错误几乎不掉分，同预算并行采样反降 10–11%。收益主要来自执行检测与重试路由。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12746)

### 35B 协作模型把成本也纳入能力曲线

Occamy-1\.0: Open Pareto-frontier 35B Intelligence for Co-work

🌟🌟

Occamy-1.0 从 Qwen3.6-35B-A3B 继续训练，强化长程工具、编码、文件与恢复能力，并用可回放执行轨迹组织后训练。它在多项同尺寸协作基准领先，部分任务接近更大模型；不过成本前沿依赖论文定价协议，浏览器、视觉交互和超时鲁棒性仍是缺口。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11977)

### 多用户 Agent 共享记忆，权限不能只写在提示词里

AIM: A Privacy-Aware Interoperable Memory Framework for Multi-Agent Multi-User LLM Systems

🌟🌟

AIM 在统一记忆库中区分私有与公共事实，并把访问控制下沉到索引层，覆盖创建、更新、删除和检索。最佳可见性分类达 96%，但严格操作准确率仅 58.8%、检索相关性最高 45%，公共记忆还可能被单个用户写入错误信息。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12320)

### 真实手机上的训练闭环，让 GUI Agent 回收每次失败

BlueLM-GUI Technical Report: A Real-Device-Centric Flywheel for Self-Improving Mobile GUI Agents

🌟🌟

BlueLM-GUI 用真机数据完成 CPT、SFT 与 Agentic RL，并把失败轨迹修复后重新投入监督，MobileGUI-VBench 得 87.4、AndroidWorld 得 84.9。规模与闭环突出，但这是团队自报技术报告，数据细节和闭源模型协议可比性仍需独立复核。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12394)

### 通用 Agent 直接写程序控制真实机器人

Agent as Policy for Robotic Manipulation

🌟🌟

AGP 不做任务专训，让通用 Agent 观察相机、编写运动程序、发送指令并根据物理结果修正；多类任务多数配置达到至少 8/10 成功，经验文件还能缩短重复执行。证据来自小样本且依赖强闭源模型，协调变形物仍不稳定。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12541)

### 基准生成也要像事务：发现坏产物就局部回滚

Embodied-BenchForge: A Closed-Loop Agentic Workflow for Embodied Benchmark Construction

🌟🌟

Embodied-BenchForge 用有类型技能合成具身基准，以依赖图记录产物来源，并按契约验证后局部重跑或向上回滚。它生成六类离线场景和 220 个可执行交互任务；消融支持修复与复用，但质量评价仍大量依赖参与生成的 LLM/VLM。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13082)

### 局部提示补丁也会引发全局工作流副作用

Local Edits, Global Ripples: Replay-Informed Policy Adaptation for Workflow Synthesis

🌟🌟

RIPPLE 先把执行失败定位到策略片段，再将候选编辑放回已接受补丁之后回放，只保留组合后仍安全的修改。它在合成工作流基准上最高提升 23.1%，并展示“单独有益、叠加有害”的案例；主要限制是核心测试仅 39 题，外部有效性尚窄。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12127)

### 给记忆标明生命周期，临时状态才不会覆盖长期事实

LifeFuse-Mem: Lifecycle-Aware State Fusion Against Temporary Overwriting for Long-Term Memory

🌟

LifeFuse-Mem 用路由、子空间隔离与受保护读出区分持久/临时信息，在受控反覆盖任务中提升长期事实保留。公开长记忆基准上总体仍有竞争力，但收益随底座与任务波动，且方法依赖训练时生命周期标签，如何从自然交互自动推断尚未解决。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12436)

### 研究 Agent 能快速搜索，却还替代不了开放式科研直觉

Autonomous Research for Open-Ended Problems: A Case Study on Telecom Ticket Retrieval

🌟

在 25 万条真实电信工单检索中，自主研究 Agent 用 10 周做到 Recall@1 0.34，约为人工十个月 SOTA 0.38 的 90%，单次活动最高约 200 美元。它擅长超参与既定设计空间，却缺乏创造性并带来运维负担；结论来自单一不可公开工业案例。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13073)

## LLM推理与规划

### 保住低权重推理路径，测试时搜索更可能找到正确答案

Chopthin-Consensus Power Sampling: A Diversity-Preserving Approach to LLM Decoding

🌟🌟

CCPS 用 Chopthin 重采样限制粒子权重跨度，避免过早剪掉暂时低分但最终正确的路径，再用语义多数票汇总。它在 15 个设置中有 13 个提高 oracle 覆盖，完整方法在 14 个设置不弱于基线；代价是每题 32 粒子的较高推理预算。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12243)

### 视觉思维链不只要画得像，还要真的帮助推理

Beyond Generation and Accuracy: Diagnosing and Enhancing Visual Chain-of-Thought for Geometry Problem Solving

🌟🌟

GeoVAD-Bench 把几何视觉推理拆成感知、辅助图质量、利用、推导与答案，并用无辅助/自动/真值辅助做因果对照。由此训练的 GeoWeave-8B 把最终准确率从 37.3% 提至 62.6%；数据和结论仍集中于几何任务。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12606)

### 图推理先选对表示，再让模型分步执行

GTA: Graph Theory Agent and Benchmark for Algorithmic Graph Reasoning with LLMs

🌟🌟

GT Bench 覆盖 24 类图问题和四种表示，发现最佳表示会随图密度、规模、拓扑与模型变化。GTA 用轻量选择器挑表示，再生成计划并拆步，冻结 Phi-4 在 easy/hard 分别从 53.5/33.0% 升至 69.1/41.5%；真实图任务仍需验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12265)

### 把事实存成激活残差，绕开超长上下文窗口

Residual Vector-based Reconstruction as Long-Context Recall Regardless of Context Window Size

🌟

该方法为每个事实优化前馈层残差并外部索引，回答时注入残差重建原句，在三种冻结模型上展示最长两百万 token 故事的单事实召回。显存近乎不随源长度增长，但每个事实都要梯度优化，多事实组合、弱锚点和广泛综合仍会失败。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12686)

## RAG与知识检索

### 事实核查要把检索、验证与置信度拆开

R2VC: Modular Fact-Checking with Retrieval, Verification, and Confidence Calibration

🌟🌟

R2VC 组合稀疏/稠密检索、16路候选、外部 NLI 验证和置信校准，在 FEVER 上把 8B 模型准确率推至 84.71%，同时改善 Brier 分数。消融显示候选选择与校准贡献最大；但错误实体检索仍会造成高置信误判，模块化并未消除入口证据错误。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11955)

### 让知识图谱与文本互相指出下一步该查哪里

Cognition on Graph: Navigating Massive Knowledge Space via Cognitive Cycles and Bidirectional Graph-Text Synergy

🌟🌟

CoG 以计划—探索—反思循环在图与文本之间往返：文本实体引导图搜索，图关系又补充文本检索，在七个多跳问答基准上报告更高准确率与探索效率。它无需训练，但多轮 LLM 调用成本和真实动态知识库中的鲁棒性仍需更多证据。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12791)

## LLM训练与对齐

### MoE 强化学习可以在专家路由空间里探索

Expert-Space Exploration in MoE Reinforcement Learning

🌟🌟

ESRL 保留高置信专家作锚点，在合理候选池内按路由熵扰动，并在策略更新时重放 rollout 的专家路径。跨三类 MoE 架构与数学、科学、代码任务，Qwen3-30B-A3B 相对 GRPO 的 Pass@1/8 提升 3.2/4.5 个百分点，且不增加采样数。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13058)

### 稀疏注意力直接为语言目标学习该保留哪些上下文

SAS: Simple Attention Sparsification via End-to-End Optimization of Context Ranking

🌟🌟

SAS 把连续选择器分数以 log gate 注入注意力 softmax，让语言建模损失端到端优化上下文排序，不再模仿密集注意力权重。它在推理、长上下文和 Agent 任务的多种预算下持续胜过基线，紧预算增益更大；真实服务收益仍受稀疏硬件执行影响。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13141)

### Byte 模型起步慢，却可能拥有更高的蒸馏上限

Breaking the Token Ceiling: Distilling Smaller, Stronger Byte Models

🌟🌟

论文把 token 教师分布近似或精确转换成 byte logits，并训练约 1B 学生至万亿字节规模。Token 模型在低算力区领先后趋于平台，byte 模型继续增长，精确 EOT 方案只用约六分之一数据即可追平；优势部分来自缩放律外推，推理序列更长的代价仍在。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12303)

### 策略在变，开放式任务的奖励系统也要跟着变

EvoRS: On-Policy Self-Evolution of Reward Systems for Open-Ended Reinforcement Learning

🌟🌟

EvoRS 把奖励表示成可执行 DAG，周期性读取 on-policy 轨迹与节点奖励，诊断后提出候选并通过配对回放更新。写作和角色扮演中，它同时提高多评审器质量并减少奖励黑客；但只验证两域，奖励演化仍依赖 LLM 设计器与判断。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12459)

### 先向专家学会协作，再把专家能力收进小模型

From Collaboration to Capability: Internalizing Routed LLM Experts into Compact Reasoners

🌟🌟

RIVET 先用结果奖励训练小控制器调用强专家，再对成功的完整协作轨迹做格式感知 SFT。部署时外部 LLM 被移除，4B 模型仍达 44.16% 数学平均准确率，内化阶段额外提升 6.49 个百分点；结论主要来自数学任务，仍保留本地 Python。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12578)

### 个性化记忆先判断是否该更新，再写入用户画像

Toward Robust Personalized Alignment for LLMs: Mitigating Persona Drift in Multi-Turn Dialogue

🌟🌟

CORE 把当前轮次透露的信息与持久 persona 分开，结合不确定性决定更新、保持未知还是澄清，在三套基准中改善一致性和状态保真。它避免把临时或含糊表达当成长期偏好；但槽位化画像难覆盖开放、相互依赖的真实人格与偏好。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12373)

## 评测与安全

### 同一个模型换套 harness，编码能力真的会变吗？

Harness or Model? Isolating the Harness Effect in Agentic Coding with a Contamination-Controlled Private Suite

🌟🌟🌟

同一模型、同一批私有任务下，厂商原生与中立 harness 的平均解题率差异都未定论；但仓库题与竞赛题方向相反，且不少超时运行其实已有正确补丁。论文提醒：补丁正确、Agent 自主结束和单位解题成本是三种不同终点，80题配对规模仍不足以给出普遍赢家。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11987)

### 用户说满意，不代表 Agent 把事办成了

GAUGE: When Not to Trust LLM-as-a-Judge in User-Simulated Evaluation of Task-Oriented Agents

🌟🌟🌟

GAUGE 用可验证奖励审计“用户模拟器对话＋LLM 评审”的离线门控：人类判为满意的对话中，57.5% 实际任务失败；强 Agent 相互接近时，门控分歧升至 31%。结论不是弃用主观评分，而是把体验与任务完成分开校准，适用范围主要是任务型对话。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12191)

### Rubric 得高分，医学回答仍可能藏着严重幻觉

When Rubrics Fail: Hallucinations Reveal Blind Spots in Medical AI Evaluation

🌟🌟🌟

研究向正确医学回答注入一处经临床审核的错误，再用原基准 rubric 评分；许多严重幻觉没有改变分数，尤其是 rubric 未预先写明的新增错误。更具体的逐事实检查和检索核验能找回一部分盲点，但合成注入仍不能代表全部真实失败。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12718)

### 从 1.4 万次 Wiki 修订重建一次 Agent 群体事故

The Mechanics of a Swarm: A Reproducible External Reconstruction of an Unintended Agent-Coordination Episode on a Third-Party Wiki

🌟🌟

论文以差分而非累积页面归因文本，估计一次公开 Wiki 事件约含 876 个 episode，协调格式一天内收敛，但可观察 cohort 中协调与进展无稳健正相关。由于没有读取日志、harness 消息和任务真值，它克制地只报告暴露机会，不声称因果传播。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12748)

### 模型说忘了不算数，Agent 的工具观察仍可能泄密

K-Bench: A Benchmark for LLM Unlearning in Agentic Deployments

🌟🌟🌟

K-Bench 检查 ReAct Agent 的六个可见通道，并把秘密分别放在权重、提示或检索库。传统遗忘基准报零泄漏时，部署 Agent 仍可在 22–86% 查询中泄露；权重场景下，20 种方法都未证明真正移除秘密。边界是观察者与 CoT 可见性假设。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12808)

### 翻几百页手册执行长流程，GPT-5 仍几乎做不完

Tasks over Application Manuals: Revealing Gaps in Long-Horizon Procedural Reasoning for Language Models

🌟🌟🌟

TAM 要求模型在 ICD 编码和美国量刑手册的数万条规则间完成跨章节程序。给相同手册工具后，RAG、ReAct 与 Agent harness 的最佳精确匹配仍只有 1% 和 15.5%。它揭示长程执行缺口，但只覆盖两域，精确匹配也不表示部分进展。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13005)

### 前沿模型的物理错题，很多其实是基准错了

How Good Are Frontier Models at Physics? Expert Re-Grading Reveals Broken Evaluations and Near-Saturation of Leading Benchmarks

🌟🌟🌟

多领域物理专家复核题面、参考解和模型答案后，250 个表面错误中仅 12 个归因于模型；修正后，GPT-5.6-Sol 在 HLE-Physics 从 47.3% 升至 78.7%，CMT 从 61.0% 升至 87.2%。审计只覆盖子集，修题也会改变难度分布。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13009)

### 语义无关的数据，也可能偷偷传递教师偏好

Reproducing and Evaluating the Generalizability of Subliminal Learning in Open-Weight Models

🌟🌟

这项开源复现确认：带特定偏好的教师即使只生成数字或棋步，学生微调后也可能继承偏好；但强度随人物类别、任务、答案空间和模型变化，Ministral 几乎没有效应。它证明风险并非普遍规律，却足以要求合成蒸馏数据接受行为审计。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12586)

### 真假题也会泄题：模型可能只是在看答案外观

Judging by the Cover: Cleaning LLM Truthfulness Benchmarks to Avoid Surface-Level Feature Leakage

🌟🌟

Audit-Prune 用六个表面特征训练弱分类器，发现 TruthfulQA 正误答案可被 68.9% 准确区分；剪去强化泄漏的题对后降至 52.2%，仍保留 476 对和 0.915 的模型排序相关。方法可解释，但剪枝会损失覆盖，也抓不到更复杂捷径。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13003)

### 只跑少量锚点模型，也能压缩大型评测集

Zipbench: Low-Cost Framework for Compressing Comprehensive Benchmarks of Large Language Models

🌟🌟

ZipBench 用少量锚点模型成绩合成伪记录、学习样本指纹，再挑代表子集；100 多个文本、多模态和 Agent 代理基准与完整集平均 Spearman 约 0.98。它显著降低构建与运行成本，但新模型分布变化或锚点单一时仍需重新校准。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12475)
