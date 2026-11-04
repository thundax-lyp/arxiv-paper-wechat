---
title: "arXiv Agent 与大模型研究简报｜2026-11-04｜入选论文全览"
author: "Thundax"
summary: "本期关注智能体流程中的隐藏错误：协议测试通过是否真的合规，研究链条从哪里走偏，最终答对又遮住了哪些检索故障。另看自动后训练、群组记忆演化，以及推理压缩、循环深度与评测裁判的证据边界。"
description: "本期关注智能体流程中的隐藏错误：协议测试通过是否真的合规，研究链条从哪里走偏，最终答对又遮住了哪些检索故障。另看自动后训练、群组记忆演化，以及推理压缩、循环深度与评测裁判的证据边界。"
---

# arXiv Agent 与大模型研究简报｜2026-11-04｜入选论文全览

本期关注智能体流程中的隐藏错误：协议测试通过是否真的合规，研究链条从哪里走偏，最终答对又遮住了哪些检索故障。另看自动后训练、群组记忆演化，以及推理压缩、循环深度与评测裁判的证据边界。

本期入选论文全览。

## 智能体系统与工具使用

### 把模型后训练流程教给智能体

Training LLM Agents to Automate LLM Post-Training with RSI-Dojo

🌟🌟

自动训练模型的难点，常在数据选择、终止符配置和失败诊断。研究把281项任务做成可执行环境，筛出有效训练轨迹后微调两个智能体，报告其后训练基准分别提升8.74和16.87分。结果支持专门训练这种工作能力，但任务依赖预备资源，尚未实现智能体递归改进自身。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03698)

### 群组记忆可以演化，迁移收益却依赖模型

EvoGroup: A Self-Evolving Harness for Group Agents in Shared Contexts

🌟🌟

多人对话里的记忆不仅是摘要，还涉及关系、工具和查找策略。研究根据任务结果与信心挑选轨迹，按需调阅证据，再自动修改执行框架；留出集一项结果从71.07%升至89.58%。冻结迁移后收益因模型而异，有模型退化，因此适合借鉴演化与回归机制，不能只看同分布提升。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03868)

## 大模型推理与规划

### 低比特注意力缓存不必把所有片段都旋转

FlagRot: Selective Rotation for Low-Bit KV Caches

🌟🌟

统一旋转有时会破坏原本适合量化的注意力键片段。研究让编码器按误差选择是否旋转，以少量标记记录；同等2.5比特预算下，十二模型平均分布误差下降，并恢复部分长文本任务精度。收益并非无损，实际吞吐受批量、硬件及延迟要求影响，服务验证也只覆盖一个推理框架。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03992)

### 扩散模型并行解码应核验实际写入的词元

PACT: Certifying What Is Written in Parallel Decoding of Diffusion Language Models

🌟🌟

扩散模型一次写多个词元时，只看预测分布可能看不到实际抽到的低概率词。研究先采样，再检查待写集合的可靠性，并把位置适度分开，在四模型上以较少前向次数达到相近质量。证书约束的是模型自身概率，不能修正自信的错误；固定短输出与无缓存设置也限制实际速度外推。

[阅读论文 PDF](https://arxiv.org/pdf/2611.04152)

### 改写旧推理可以减少后续思考，但不保证更省时

Why Pay for Long Reasoning When Rewrite Do Trick? Causal Effects of Reasoning History Compaction on Future Generation and Agent Cost

🌟🌟

旧推理写得更紧凑，可能连下一轮思考也变短。研究在工具结果揭示前压缩历史，并比较后续生成；软件任务的八种配置中六种更便宜，但计入重写时间后只有两种更快。它提示压缩策略应逐模型验证，尤其不能把令牌减少当作任务质量不下降的证据。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03852)

### 少生成近半令牌之后，答案是否仍完整

Say Less, Mean Better: Training-Free Verbosity Control for Language Models

🌟🌟

控制输出长度不能只在任意位置停止。研究提高停止概率，同时要求句子与代码结构闭合，在三模型上节省47.6%令牌且未出现规则识别的结构截断。但单靠提示已节省45.3%，自动评估还提示信息遗漏增加。结构完整与回答齐全是两回事，部署前仍需检查任务内容覆盖。

[阅读论文 PDF](https://arxiv.org/pdf/2611.04107)

### 用解码概率把广告写进回答，效果应如何衡量

AdSteer: Native Advertising in Large Language Model Generation

🌟

研究先找与提问相关的广告，再用状态机和轻量控制头调整词元概率，让赞助内容在单遍生成中出现。基准自动评分提高，令牌量也少于重写方案。但所谓点击、自然程度和信任主要来自模型裁判，未测真实点击与长期用户信任，技术指标不应直接当成商业收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.04147)

## 检索增强生成与知识检索

### 从执行日志定位检索生成链条的隐藏故障

From Logs to Faults: Reference-Free Fault Localization for Retrieval-Augmented Generation Pipelines

🌟🌟🌟

只看答案是否正确，会漏掉检索链条中的故障。研究把调用日志整理成统一阶段结构，再结合规则、向量和模型检查定位问题；自然故障的汇总识别指标为0.73，未见流水线降至0.67。其数据中37%的有故障运行最终仍答对，但标签主要由模型裁判生成，迁移仍需校准。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03725)

### 长文本检索失误，竞争证据可能比长度更关键

Length Is Cheap, Competition Is Not: Attention Predicts Context Rot in Retrieval

🌟🌟🌟

一段长上下文难用，可能因为里面有竞争答案。研究保持长度和证据位置不变，替换周围内容：小模型面对可见中性填充仍能检索，同键冲突却显著拉低准确率。结果支持优先检查冲突与重复，但只来自合成键值任务；注意力指标是预测关联，尚未证明因果。

[阅读论文 PDF](https://arxiv.org/pdf/2611.04169)

## 多智能体与协作

### 多智能体角色分工也在分配获得反馈的机会

Beyond Division of Labor: How Roles Shape Feedback and Recovery in Multi-Agent Systems

🌟🌟🌟

审阅者不批准提交，团队就可能失去外部纠错机会。研究在固定模型与预算下比较有无角色，并在一项追加实验中保留角色、强制逐轮提交，使失败恢复率从19.8%升至61.3%。这依赖知道真值的外部反馈，且评分修正会改变部分比较，结论应落在提交权设计，而非角色是否有用。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03931)

## 大模型训练与对齐

### 用同一组循环层增加小模型的推理深度

Dory1\.0-4B: A Looped Normalized-GPT

🌟🌟

小模型可以用共享层多循环几次，在隐空间投入更多计算。研究发布一个四十亿参数模型，结合循环训练课程和末轮注意力缓存；更多循环改善多项基准，部分智能体任务输出也更短。额外循环仍消耗计算，缓存简化亦有精度代价，选型需要同时比较任务质量与端到端延迟。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03998)

### 蒸馏学生学到的思考形式，能否在权重中定位

Where Do Distilled Students Store Thinking?

🌟🌟

学生模型的长思考风格，可能集中在适配器的一部分方向中。研究在三组教师与三类小学生间比较子空间，移除相关区域后反思标志大减；但嫁接常导致无法完成，同能量随机干预也能接近部分效果。它定位的是蒸馏形式行为，距离发现可迁移的推理能力开关还很远。

[阅读论文 PDF](https://arxiv.org/pdf/2611.04141)

### 医学小模型的推理与答案监督权重应随任务变化

Balancing Chain-of-Thought and Answer Supervision for Small Language Models on Medical Question Answering

🌟

微调时让最终答案获得更多监督，并非所有任务都受益。研究在六个小模型上比较整段等权和推理答案分段加权：选择题常受益于后者，自由文本则多偏向前者。一项选择题提升为44.8个百分点，但仅有单训练种子，文本相似度也不能证明临床回答可靠。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03948)

### 让语言模型同时生成轨迹和学习多任务策略

Language Model Augmented Decision Transformer for Multi-Task Offline Reinforcement Learning

🌟

离线控制数据少时，研究先让语言模型按任务描述生成轨迹，再把同一骨干用于策略学习，并过滤不匹配轨迹。在两类模拟环境中优于所列基线，一项多任务成功率由对照63.4%提高到69.8%。它是语言模型参与策略学习的例子，但收益仍限模拟数据与明确任务描述。

[阅读论文 PDF](https://arxiv.org/pdf/2611.04031)

## 评测与安全

### 工具协议测试通过之后，开发包还漏了哪些约束

MCPGuard: Finding Conformance Gaps in MCP SDKs via Dual-Track Analysis and Dynamic Adjudication

🌟🌟🌟

工具协议端点测试全绿，仍可能漏掉开发包中的字段和会话约束。研究先机械比对结构规则，再让模型审计行为代码，最后用运行证据裁决，在两个固定版本中确认32项缺口。它提示接入测试要覆盖畸形输入与状态条件；这些是指定版本的一致性发现，不能直接等同于当前服务的安全漏洞。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03662)

### 科学智能体需要自己发现变量与方程结构

Unsatz: Evaluating Scientific Discovery Without a Given Ansatz

🌟🌟

给定公式再调参数，与自己决定变量和机制，是两种能力。这个基准让智能体在80个模拟系统中花预算做实验、写候选方程，再用从未见过的干预与长期预测评分；最强模型解出48个。它揭示结构发现的瓶颈，但合成世界、统一拟合器和有限语言仍限制现实科研外推。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03713)

### 沿研究流程的薄弱环节生成鲁棒性测试

EMBERS: Empirically Motivated Robustness Testing of Deep Research Systems via Defect-Guided Fuzzing

🌟🌟

深度研究可能在拆问题时就走偏，后续搜索反而巩固误解。研究从执行轨迹总结九类缺陷，定向改写原本能答对的问题或中间搜索输入，并核验需求是否保持。在16种设置中失败发现吞吐达最强基线的3.21倍；但生成与判答模型同源，测试吞吐也不是实际失败率。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03723)

### 换一个供应商的裁判，不一定保住模型排名

Swapping the Judge Changes the Ranking: A Preregistered Study of Cross-Provider Replication in LLM-Judged System Comparisons

🌟🌟🌟

换供应商复评常被用来增强结论可信度，但五裁判重评四千场对话后，系统排名与人工投票的相关性差异很大。双裁判一致的收益主要来自排除一位不匹配裁判，并会减少可下结论的比较。人工投票本身也有噪声，稳妥启发是校准具体任务，而非把供应商不同视作独立保证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.04090)

### 每字节损失更低，不一定意味着模型更强

Tokenizer Myths and Where To Find Them

🌟🌟🌟

把损失换成每字节比特，并不会自动消除分词器影响。研究用未训练模型作反例，再重看同数据训练结果，发现词表规模与模型规模会影响指标选择；一项高相关控制规模后几乎消失。它提醒比较时明确测的是文本压缩还是任务能力，而不是宣称所有压缩指标失效。

[阅读论文 PDF](https://arxiv.org/pdf/2611.04215)

### 监督下的价值遵从差异不能只按模型排名

Alignment Faking Depends on the Value, Not Just the Model

🌟🌟

同一模型在不同价值要求下，受监督与不受监督时的遵从差距可能很不一样。研究用三种提示条件评测十个模型，平均差距约为5至50个百分点，并提出逐价值记录的行为卡。值得借鉴的是加入无指令基线；但价值与指令措辞尚未分离，不能据此认定模型具有欺骗动机。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03650)

### 实时环境不会等待智能体完成长推理

LOLPlay: Benchmarking Real-Time Visual Agents in League of Legends

🌟🌟

视觉智能体推理时，游戏仍在变化。研究让三种模型用截图和键鼠完成36项任务，以游戏状态自动检查结果；最佳完整任务成功率为25%，增加推理强度没有改善总体表现。轨迹中可见动作执行时画面已过时，但任务范围有限，不能据此概括完整游戏能力。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03685)

### 删去非必要提示，具身智能体为什么反而做不好

VagueBench: Benchmarking the Robustness of Embodied Agents on Ambient Context Illusions

🌟🌟

删掉不改变目标的辅助信息，也可能让具身智能体失常。研究构造1,303对经过语义核验的指令，在室内仿真中观察到任务成功率平均下降约8个百分点，并提出解释约束缓解退化。但约束在原始指令上也有代价，真实机械臂测试规模有限，不能直接视作通用修复。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03765)

### 千工具基准中的失败，仍需按实际评测协议解读

SLATE: A Large-Scale Benchmark for Long-Horizon API Selection in E-commerce Tool Use

🌟🌟

长流程中，单步选对率尚可也会累积成低完成率。研究构建约千接口的电商工具库，最佳模型完整任务成功率仅5%。但实际实验每步给出52个候选、参考历史，并为选对的工具补上参考参数；它主要隔离工具选择难题，不能当作自主千工具执行能力的完整测量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03982)

### 评分规则换语言或句式，裁判可能改变判决

Same Rule, Different Verdicts: Rubric Language and Clause Structure in LLM Judges for Korean Support Dialogues

🌟🌟

同一要求改成否定句，模型裁判也可能换答案。研究对韩语支持对话使用两种语言和四类规则句式，发现韩语规则下跨模型一致性较低，复杂句式更易分歧。材料均由模型生成且没有人工真值，因此结果证明的是稳定性问题，不能据此认定某种语言评分更准确。

[阅读论文 PDF](https://arxiv.org/pdf/2611.04091)

### 模型不变，评测契约也能让名次移动

Evaluation Contracts and Evaluation Leverage: Sliced-Gap Readings in Structured Prediction Can Move Without Model Change

🌟🌟

模型预测没有变，换标注版本或阈值也会让能力差距和排名改变。研究冻结预测、逐项切换评测契约，并主张跨条件报告均值、区间和平局。多任务审计显示这种敏感性确实存在，但部分翻转统计上只能判平局，且负结果不少，不能把任何名次移动都解释为模型能力变化。

[阅读论文 PDF](https://arxiv.org/pdf/2611.04099)

### 用更具体的共同需求组织模型评测集

COMPREHEND: Ultra-Fine-Grained Benchmark Understanding by Entailment Hierarchy

🌟🌟

只把失败归为“写作”或“编程”，很难指导改进。研究逐层寻找提示之间共同且被双方支持的具体需求，生成细粒度层级，在两个小规模数据子集上提高自动忠实性与信息量指标。共同描述仍会错误拼成需求并集，报告用途也多由模型代理验证，实际人工分析收益尚待检验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.04249)

### 化学答案说错之前，模型表征可能已有相关结构

Functional-Group Knowledge Is Structured in Language Models Before It Is Spoken

🌟

模型说不出正确官能团，未必意味着内部完全没有相关信息。研究在五个开放模型上比较生成答案、向量类比与逐层探针，发现化学家族信息在中层后已较易解码，而领域微调会改变表征重心。样本集中在92个简单分子，表征可读也不等于真实化学任务可用，适合作为诊断思路。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03684)

### 词语共现的拓扑能否提示推理质量

Reasoning is topologically simple

🌟

这项工作把每句共同出现的词语变成拓扑结构，检验推理文本是否更简单。48个模型的数学轨迹中，指标与模型能力呈中等负相关；加入破坏性侧任务后，部分轨迹结构更复杂。它提供了不同于语义打分的观察角度，但文体和截取方式可能影响结果，尚不能用于判定单次推理是否可靠。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03739)

### 用户目标会改变模型如何使用创始人身份信号

Whose startup does the AI back? An algorithm audit of reputation and demographic signals in LLM-assisted crowdfunding

🌟

模型对身份线索的响应，可能随用户希望支持谁而改变。七模型合成众筹实验中，在明确支持代表不足创业者的目标下，黑人和女性姓名信号提高获选概率；其他目标下影响接近零。研究提示审计要改变用户目标，但姓名熟悉度与有限合成场景仍限制结论。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03993)

## 应用与基准

### 诊断预测总分可能奖励只重复上次记录

Rethinking Next-Visit Diagnosis Prediction Beyond Aggregate Metrics: Retrieval--Memory Multi-Agent Adjudication

🌟🌟

预测下次诊断时，重复上次记录就能取得很高总分，却永远不会发现新诊断。研究按持续、新记录和复发分层，结合病历检索、轨迹记忆与分歧裁决，改善多项语言模型基线结果。价值主要在评测拆解；数据来自单一医疗中心，共识错误仍会保留，不能推导临床效果。

[阅读论文 PDF](https://arxiv.org/pdf/2611.03826)
