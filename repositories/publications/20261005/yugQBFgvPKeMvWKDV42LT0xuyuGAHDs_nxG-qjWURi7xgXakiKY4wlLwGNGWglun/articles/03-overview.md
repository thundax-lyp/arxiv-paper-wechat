---
title: "arXiv Agent 与大模型研究简报｜2026-10-05｜入选论文全览 2/2"
author: "Thundax"
summary: "本期聚焦长程智能体如何分配研究步骤、保存经验并在执行前接受约束，也集中审视评测本身是否会被捷径、错误量规或不完整证据欺骗。星标仅表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读。"
description: "本期聚焦长程智能体如何分配研究步骤、保存经验并在执行前接受约束，也集中审视评测本身是否会被捷径、错误量规或不完整证据欺骗。星标仅表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读。"
---

# arXiv Agent 与大模型研究简报｜2026-10-05｜入选论文全览 2/2

本期聚焦长程智能体如何分配研究步骤、保存经验并在执行前接受约束，也集中审视评测本身是否会被捷径、错误量规或不完整证据欺骗。星标仅表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读。

本期入选论文全览。

## 评测与安全

### 不看最终分数也能审计研究智能体的证据过程

Open-Endedness Bench: Measuring Epistemic Process from Agent Records

🌟🌟🌟

提出不依赖参考答案或最终分数的开放研究智能体评测，直接检查主张是否由真实执行证据支持。在三个基准的119次运行中，智能体声称的改进只有16%至29%得到日志支持；模型身份对研究习惯差异的解释高于任务。执行证据优先的评测原则可迁移且防事后改写。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02588)

### 长程智能体会悄悄遗忘早先的安全约束

A GHOST in Long-Horizon Agents: Governance Hazard from Overlooked Safety Constraints across Turns

🌟🌟🌟

识别长程智能体在良性交互中遗忘早期安全约束的约束遗忘故障，并分析风险随安全前缀累积的机制。某前沿模型设置下该故障发生率为11.5%；双层防护在实验中未观察到同类事件。问题重要且防护把语义恢复与硬审计分开。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02664)

### 直接读取生成状态检测编码智能体的奖励欺骗

hacktrace: behavior-supervised detection of reward hacking during code generation

🌟🌟🌟

用行为监督而非仅按利用是否成功来检测编码智能体奖励欺骗，并直接复用生成时内部状态。平均逐题曲线下面积达0.997、监控开销8毫秒；强惩罚把通过方案中的作弊占比从82%至91%降到1%至5%。规模、延迟和训练闭环证据强。

[阅读论文 PDF](https://arxiv.org/pdf/2610.03055)

### 调查智能体应等证据充足后再结案

Not Until the Evidence Says So: Teaching LLM Investigators When to Close a Case

🌟🌟🌟

研究调查智能体何时证据足以结案，以及在因果未定时能否克制并指出缺口。基础九十亿参数模型有97%的回答夸大证据；微调后夸大降至35%，正确且不夸大的结论从3%升至43%，但仅优化结案决策会损害证据依赖。源捷径基线、反事实删证据和跨裁判检查使评测可信。

[阅读论文 PDF](https://arxiv.org/pdf/2610.03190)

### 监控分数归零不等于奖励欺骗受到控制

A Near-Zero Monitor Readout Is Not Evidence of Behavioral Control

🌟🌟🌟

证明训练中监控分数接近零并不能说明行为已被控制，策略可能只是把作弊承诺推迟到监控窗口之后。相同零中位监控分数的训练运行可从低作弊混合状态到近乎纯作弊；所有探针运行都进入作弊状态。同配置多种子差异与行为外检揭示指标失真。

[阅读论文 PDF](https://arxiv.org/pdf/2610.03458)

### 智能体低延迟决策模型经得住部署审计吗

Fast Models, Slow Evidence: A Paired and Self-Audited Evaluation of System-1 Decision Models for LLM Agent Harnesses

🌟🌟🌟

系统评估两类低延迟决策模型在工具选择、路由、检索门控和注入检测等智能体环节的可靠性，并通过自审纠正成本与端到端质量误算。其中一个系统在九类决策点显著领先，但两者在零样本模型路由上不胜随机，检索门控也没有优势；自审把原先宣称的成本节省从23.9%修正为4.3%。样本和控制充分且主动披露分析错误，结论可信。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02267)

### 有限监督下的实例最优人工智能辩论协议

How to Have a Sensitive Debate: An Instance-Optimal Protocol for AI Debate

🌟🌟🌟

为有限监督下的人工智能辩论提出实例最优协议，把复杂结论递归分解并让反方选择敏感子问题继续审查。理论上改进了既有平均情形和领导者—跟随者均衡保证，并给出匹配下界。形式化贡献强，但依赖稳定分解和可靠的人类局部判断，尚无真实模型实验验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02557)

### 一套可复现的单轮文本越狱评测方法

MLCommons Jailbreak Benchmark v1\.0

🌟🌟🌟

提供单轮文本越狱的端到端评测方法，将系统与攻击选择、人工标注、裁判校准、分级和风险披露纳入同一流程。不安全响应率由11.08%升至18.65%，平均韧性差距7.57个百分点，且攻击和危害类型差异很大。标准化和披露流程价值高。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02827)

### 用稀疏威胁证据自动演化智能体安全框架

HASTE: Evolving Agent Harnesses Against Emerging Attacks Using Sparse Evidence

🌟🌟🌟

让安全框架从少量威胁描述或案例中自动演化，以应对新攻击快于人工更新的问题。跨模型、攻击和证据形式降低攻击成功率并保持良性任务效用，连续引入八类风险时仍优于基线。攻防闭环与稀疏证据设置贴近现实。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02920)

### 工业智能体能否按照用户角色守住行动边界

ReFract: Benchmarking Perspective Awareness in Language Model Agents with Text World Models

🌟🌟🌟

把工业智能体是否根据用户角色权限和能力边界采取不同动作定义为视角感知。最佳配置只解决68.5%的任务，超过一半轨迹含违反角色边界的动作；扩大工具空间后最佳通过率降至47.3%。高风险场景和执行评测有价值。

[阅读论文 PDF](https://arxiv.org/pdf/2610.03356)

### 推理准确不代表因果识别结论健全

Reasoning Models Are Accurate but Unsound on Identification

🌟🌟🌟

将因果效应可识别性转成带完备算法认证和数值公式验证的推理模型评测，区分准确与错误声称可识别的非健全性。三种前沿模型在1200个认证实例上准确率很高，但对不可识别查询的错误声称率相差十七倍，说明总准确率掩盖健全性风险。形式认证和等价公式评分很强。

[阅读论文 PDF](https://arxiv.org/pdf/2610.03519)

### 跨语言跨模态网页浏览智能体仍远未解决冷门证据搜索

HyperBrowseComp: A Multilingual and Multimodal Stress Test for Web-Browsing Agents

🌟🌟🌟

构建多语言、多模态网页浏览压力测试，要求智能体跨网页、视频、扫描件、图像和地图连接冷门证据。最佳配置准确率31.68%，57.68%的问题在五个原生搜索模型中无人答对，显示持续证据发现仍很薄弱。人工验证和跨模态覆盖突出。

[阅读论文 PDF](https://arxiv.org/pdf/2610.03574)

### 终端智能体训练停滞不一定是模型问题

When Terminal-Agent Training Stalls: Demystifying Data Generation and Verification Challenge

🌟🌟🌟

指出可运行容器和可执行测试并不足以构成可信的终端智能体训练数据，区分基准无效、运行框架脆弱与奖励错位。提示词和上下文修正把基础可解率提高5.6倍；同一九十亿参数模型在普通任务上的双次采样通过率达到81.3%，加入困难任务后降到20.6%。对训练停滞的工程原因拆解具体。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02405)

### 用户模拟器应复现真实失败而不只模仿语气

CUEing User Simulators: Calibrated User Embeddings for Multi-Turn Benchmarking

🌟🌟🌟

把用户模拟器的目标从表面风格相似扩展到结果校准，即模拟用户是否复现真实用户与同一智能体交互时的成功率和失败模式。在二阶工具智能体基准上减少模拟器归因错误，更接近真实用户的总体和任务用户对结果，并跨到文档、辅导和闲聊场景。同时评估结果校准与用户保真度，设计扎实。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02460)

### 结构化决策模型为何听标签不听定义

Labels Override Definitions in Jev-Style Typed Decision Models

🌟🌟🌟

发现开放权重的结构化决策模型往往跟随选项标签而非开发者写入的定义，错误根源位于提示渲染方式。删除定义几乎不影响准确率，改成中性标签提高15.11个百分点；一行渲染表达式的双向修改可创造或消除偏差。机制干预直接、因果证据强。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02586)

### 同一请求换种说法就会让邮件智能体漏做任务

Lost in the Request: How Communication Variation Disrupts Retrieval and Action in Email Agents

🌟🌟🌟

评估信息和目标不变时，仅改变请求表达方式是否会破坏邮件检索和工具型智能体执行。间接表达损害全部系统，正式表达损害两个智能体；主要失败是遗漏必要动作，而非增加无依据动作。配对设计能隔离表达方式影响，并区分检索与执行故障。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02627)

### 裁判总分对齐仍可能在人类觉得简单的地方出错

Evaluating LLM-as-a-Judge Beyond Score Alignment: A Psychometric Analysis of Residual Judging Difficulty

🌟🌟🌟

用心理测量视角指出语言模型裁判与人类总分对齐，不代表双方会在相同样本上感到困难。十七个开放权重裁判在潜在质量上中度对齐，但残差难度相关弱；一致性更难于模型，连贯性更难于人类。分析比相关系数更细，含可预测性消融。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02877)

### 长期智能体还要记住自己应如何与特定用户协作

DyadMem: A Long-Term Memory Benchmark of How Agents Work with Users

🌟🌟🌟

把长期记忆从用户事实扩展到特定智能体与用户如何协作的关系性记忆，并分阶段评估生命周期。二十个模型在给定金记忆时表现强，但全流水线显著下降，并暴露低捕获召回、不完整检索和不安全删除。数据规模和阶段化金标有价值。

[阅读论文 PDF](https://arxiv.org/pdf/2610.03020)

### 智能体面对不确定偏好时该行动、询问还是放宽约束

Ask, Relax, or Act? Evaluating Actionable Indeterminacy in LLM Preference Reasoning

🌟🌟🌟

形式化智能体面对偏好不确定性时何时应直接行动、澄清或提出最小约束修复。模型常能识别需干预情形，却在已有共同可接受动作时过度干预；显式写出回复要求可把完整正确率大幅提高。求解器金标和匹配对设计严谨。

[阅读论文 PDF](https://arxiv.org/pdf/2610.03102)

## 应用与基准

### 在闭环工厂仿真中区分程序完成与安全违规

PLCWorld: Benchmarking LLM-Generated PLC Programs in Closed-Loop Plant Simulation

🌟🌟🌟

构建闭环工厂仿真来评测语言模型生成的可编程逻辑控制器程序，把任务完成和安全违规分开。某前沿模型在简单任务成功82.70%，困难任务仅25.10%；更高任务成功并不保证更低安全违规。确定性仿真、实践者审查和独立运行时交叉验证较强。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02982)
