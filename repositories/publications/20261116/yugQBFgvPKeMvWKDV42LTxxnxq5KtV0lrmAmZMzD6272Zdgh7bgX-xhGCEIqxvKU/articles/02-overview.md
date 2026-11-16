---
title: "arXiv Agent 与大模型研究简报｜2026-11-16｜入选论文全览 1/2"
author: "Thundax"
summary: "智能体执行长任务时，真正容易丢失的往往是下一步依赖的证据。本期沿着证据的保存、委派、核验和动作放行，梳理这些环节怎样影响成功率和安全性。全览另涵盖模型训练、推理、部署及专业任务评测。"
description: "智能体执行长任务时，真正容易丢失的往往是下一步依赖的证据。本期沿着证据的保存、委派、核验和动作放行，梳理这些环节怎样影响成功率和安全性。全览另涵盖模型训练、推理、部署及专业任务评测。"
---

# arXiv Agent 与大模型研究简报｜2026-11-16｜入选论文全览 1/2

智能体执行长任务时，真正容易丢失的往往是下一步依赖的证据。本期沿着证据的保存、委派、核验和动作放行，梳理这些环节怎样影响成功率和安全性。全览另涵盖模型训练、推理、部署及专业任务评测。

本期入选论文全览。

## 智能体系统与工具使用

### 长程代理既压缩状态，也要留下可追溯证据

CarryOn: Learning What to Keep in Context for Long-Horizon LLM Agents

🌟🌟🌟

长任务历史太长会增加成本，单纯总结又可能删掉后续操作需要的细节。该方法把紧凑执行状态与带来源的细粒度证据并存，在三类任务上达到75.7%的宏平均成功率，比最强基线高6.7个百分点；结果仍来自特定基准和模型组合。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17808)

### 先验证计划，再放行智能体的工具调用

Soteria: Formally Verified Planning with Runtime Enforcement for Safe LLM Agents

🌟🌟🌟

直接拦截违规调用可能让智能体不知道怎样继续。研究把规则写成可检查规范，调用前验证分层计划，运行时遇到违规动作就拦截并沿已验证计划寻找恢复路径。三个基准中，合规成功率较最强基线高4.7至43.9个百分点。保护范围取决于事先写进规范的规则。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17880)

### 智能体记忆何时该删：误删关键事实会抵消整理收益

When Should LLM Agents Forget? Memory Filtering Under Query-Critical Resolver Errors

🌟🌟🌟

记忆系统若把仍有用的事实误判为过期，删除会让后续问题失去答案线索。研究在三种模型上比较直接保留、软标记和硬删除，发现解析准确时硬删有帮助，错误变多后收益会反转；冻结提示后的独立小样本结果区间仍包含零。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17338)

### 把长业务流程的状态与验收移出模型

Co-Sight Harness: Externalized Control Assets and Deterministic Enforcement for Long-Horizon Business Agents

🌟🌟

作者保持基础模型固定，将业务流程、状态和领域知识存入可版本化的配置，用状态机和逐步验收控制执行，再独立审计轨迹。主业务域120例中，无人值守完成率由50%升至100%。这类提升依赖可机械核验的活动标准以及足够覆盖变更的回归样本。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17696)

### 按尾延迟给流式解码留余量

VelServe: Taming Decode Jitters in LLM Inference with Tail-Calibrated Scheduling

🌟🌟

长对话里少数解码步骤过慢，也会使整批请求卡顿。这个调度器按近期迭代的尾延迟给每步留余量，并优先服务较短的提示。在混合负载中，两种模型的达标吞吐是强基线的2.4至2.9倍。持续重载下部分长提示仍会超时，需结合实际请求分布判断。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18392)

### 用统一键鼠接口训练会玩不同游戏的智能体

Gamer: A Generalist Vision-Language-Action Foundation Model for Long-Horizon Real-Time Game Agent

🌟🌟

不同游戏共享屏幕、键盘和鼠标，作者据此把轨迹统一起来，先做跨游戏预训练，再教模型何时思考，用多轮强化学习处理长任务。实验同时测已见环境和未见三维游戏。专项长任务依赖额外的目标游戏数据，效果应和未见环境迁移分别看。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18397)

### 把视觉检查做成编码智能体可以调用的工具

Vision-as-a-Tool: Visual Harness for Multimodal Agentic Coding

🌟🌟

编码智能体生成网页后，可以让独立的视觉工具查看渲染结果、比较布局，再按反馈修改代码。作者把视觉判断拆成可调用动作，在网页、矢量图和三维重建任务上观察到更好的保真度，文本模型也能借工具参与。实验主要测静态画面，对多状态交互的效果仍未知。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17797)

## 大模型推理与规划

### 让晶体结构搜索的每个候选都经物理校验

Verifiable pXRD: Hill-climbing pXRD structure determination with LLM agents

🌟🌟

粉末衍射曲线可以由候选晶体结构反向模拟，智能体因此能在搜索时逐步淘汰不符的解。作者将编码工具和验证反馈接入搜索，在200道模拟单相题中把选定结果的精确恢复率从27%提高到69%。真实多相样本缺少同等明确的结构真值，结果需另行解释。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17539)

### 程序归纳应优先询问哪些输入示例

Interactive Program Induction with Language Model Priors

🌟🌟

只有几组输入和输出时，经常有多个程序都解释得通。研究让语言模型生成候选，再选择最能区分候选行为的输入去询问。相比让模型自由提问，程序归纳准确率最高提高22个百分点，示例最多少用10.5个。实验需要可靠的反馈方，模型给候选的先验仍可能有偏差。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18485)

### 给动作换个名字，语言模型的规划会变差吗

Adversarially Attacking Symbolic Vocabulary Vulnerabilities In LLM Planners

🌟🌟

只换动作和对象的名称，规则与可行解保持一致，语言模型仍可能做出不同计划。作者用对抗搜索挑选最容易扰乱规划的词汇，在格子导航等任务中观察到性能大降，专用规划框架也未消除脆弱性。结论来自有限的符号域，适合用来设计重命名稳健性测试。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17910)

## 多智能体与协作

### 多智能体安全可能被委派链中较弱的一环决定

Only as Safe as the Weakest Agent: A Break That Appears Only When the System Is Multi-Agent

🌟🌟🌟

主智能体直接查文件时很少采信伪造记录，把读取交给较弱的子智能体后，转述却可能把假记录带进最终答案。研究比较真实编码工具和模拟委派链，发现让汇总者接触原始证据能降低错误。实验围绕构造的本地文件问答展开，失效率取决于具体工具和委派配置。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17520)

### 给智能体团队设安全负责人，能弥补多少对齐差距

Aligning AI Teams

🌟🌟🌟

同一批模型单独工作会主动排查风险，分工后却可能把跨模块的安全检查留给别人。研究在软件工程和咨询任务中比较团队配置，发现互评与群聊的修复效果不稳定，共享安全规范并指定独立负责人更有效。证据来自同一模型家族，效果随任务和组织方式变化。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17820)

### 评估多智能体协作时，先把采样和推理预算对齐

More Agents, More Samples, or More Thinking? Untangling Coordination, Ensembling, and Test-Time Compute in Multi-Agent LLMs

🌟🌟

多智能体往往比单次运行多用了样本或推理计算。研究重新整理九项评测，在匹配样本数或预算的474组对照里，有74%的多智能体结果持平或更差。数据来自少数研究，且任务和匹配方式不均。这组结果适合检视比较口径，单个协作架构仍需独立对照。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17610)

## 大模型训练与对齐

### 让强化学习中的智能体脚手架随训练演化

ModHarness-RL: Recasting Harnesses as Learnable and Evolving Programs for Agentic RL

🌟🌟🌟

固定脚手架决定智能体看到哪些历史、偏航时得到什么提示，训练后期的需要却可能已经变了。作者从近期轨迹提出新的压缩和引导程序，经实际执行与旧轨迹重放后才替换。代码定位的综合分数比固定脚手架相对提高19%，其余两个环境主要验证了单个模块。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18533)

### 扩散语言模型后训练为何可以逐块抽样

See Every Block Once: Variance-Reduced Post-Training for Masked Diffusion Language Models

🌟🌟

掩码扩散语言模型用抽样估计分块训练目标，随机选块容易重复抽到同一块。作者让每块恰好进入估计一次，消除了块选择带来的方差。在同等抽样次数下，五项基准比随机选块平均高12.79个百分点。实验证据来自一种基础模型，增加块数会抬高并行显存开销。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17754)

### 让智能体监控强化学习并在故障后接续训练

AutoRL: A Multi-Agent System towards Autonomous Reinforcement Learning

🌟🌟

这个系统在强化学习运行期间分工监控指标、提出修改、决定采纳或撤销。四十亿参数模型的训练结果在九项基准上超过静态配方和通用智能体。一条编码训练跑了14.7天，期间从11次故障中恢复。证据更直接支持训练运维和局部改良。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17790)

### 把相邻层折叠成共享块，能保留多少模型能力

Folding Language Models into Themselves

🌟🌟

作者从教师权重构造学生，让相邻层重复使用同一个计算块，并通过低秩修正保留每层差异。用220亿词元蒸馏后，22.7亿参数的学生在八项基准上平均保留四十亿参数教师84%的成绩。共享减少参数占用，块的反复执行仍会消耗计算。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18113)

### 预训练怎样教会模型理解类别知识的例外

LECAT: Measuring LLM Category Learning from Pretraining Data

🌟🌟

飞机通常很快，坏了的飞机却未必。作者检查模型面对无关修饰和真实例外时如何改变预测，再用小模型控制预训练中出现的知识表达。单纯重复类别与特征能保住默认关联，却难让模型随上下文调整。因果干预只覆盖少量合成类别。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18419)

### 教小模型用计算器，先把解题过程编译成动作

ARCHER: From Rationale Imitation to Executable Reasoning in Small Language Models

🌟🌟

一段推理解释写出正确数字，并不能证明模型会调用计算器。研究先把解题过程编译成推理、调用、返回值与核验等可执行动作，再训练模型完成整条轨迹。五个小模型在八项数学基准上比工具增强对照平均高5.51个百分点，适用范围由可核验的工具反馈界定。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18494)

### 模型怎样学会判断反驳是否可信

Benchmarks Don't Talk Back: Learning Through Self-Disagreement

🌟🌟

模型有时会被错误反驳说服，单看首答准确率看不出这种弱点。研究让模型自行生成反方论证并判断其是否成立，再用可验证答案标准进行强化学习；作者报告抗错误反驳能力改善且首答表现未明显受损，但结论受任务和奖励可验证性约束。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17563)

### 电商智能体持续自训练时，奖励规则也要跟着验证

G-CAST: Governed Continual Self-Training for E-Commerce Agents under Evolving Demands

🌟🌟

电商智能体新增工具后，旧奖励可能还在给过时的行为打高分。研究把生产请求回放成训练轨迹，并分别验证候选模型和奖励版本。原模型在四期累计评估中的评分降至0.6354，持续更新方案改善了适应表现。结论来自单一电商应用和一套冻结评分规则。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17814)

### 遮住关键图像证据，训练模型少凭语言猜物体

VEPO: Mitigating Multilingual Hallucinations in LVLMs via Visual Evidence-guided Preference Optimization

🌟🌟

模型用低资源语言回答图像问题时，容易顺着文字线索猜测。作者先用英语查询定位图中证据，再用完整图和遮挡图搭配同一目标语答案训练偏好。印地语物体幻觉基准的调和分数从0.302升到0.644，测试主要覆盖三种语言的静态图像感知。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18096)
