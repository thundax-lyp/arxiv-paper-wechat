---
title: "arXiv Agent 与大模型研究简报｜2026-10-21｜入选论文全览 1/2"
author: "Thundax"
summary: "本期关注智能体长期工作中的几道关口：压缩后还剩多少未来证据，记忆如何避免固化错误，行动是否处在用户授权内，以及出错后能否恢复持久状态。训练方向则关注如何保住困难课程，并让奖励变化后的行为仍可监控。"
description: "本期关注智能体长期工作中的几道关口：压缩后还剩多少未来证据，记忆如何避免固化错误，行动是否处在用户授权内，以及出错后能否恢复持久状态。训练方向则关注如何保住困难课程，并让奖励变化后的行为仍可监控。"
---

# arXiv Agent 与大模型研究简报｜2026-10-21｜入选论文全览 1/2

本期关注智能体长期工作中的几道关口：压缩后还剩多少未来证据，记忆如何避免固化错误，行动是否处在用户授权内，以及出错后能否恢复持久状态。训练方向则关注如何保住困难课程，并让奖励变化后的行为仍可监控。

本期入选论文全览。

## 智能体系统与工具使用

### 保留经验轨迹，临时生成指导以减少错误固化

More Memory, Worse Agents: Error Reproduction and Anti-Persistence in LLM Agents

🌟🌟🌟

从经历提炼出的错误规则，可能影响执行，再被新轨迹重新概括出来。研究只长期存轨迹与结果，按需生成临时指导并在任务后丢弃。九种设置平均成功率59.9%，高于轨迹记忆的53.5%；但轨迹仍会携带错误影响，结果不能推成持久技能一概不该保存。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27406)

### 用多个潜在假设记住尚未看清的环境

LAMB: Latent Multi-Hypothesis Beliefs for Long-Horizon Large Language Agents

🌟🌟

环境尚未看清时，单一文字摘要可能过早锁定解释。研究用共享潜在状态保存共同证据，以多个加权差分状态保留竞争假设，再读出固定长度前缀。家务和科学环境相对既有方法提高6和22个百分点；代价是需要联合训练及模拟器监督，不能直接替换任意模型的记忆。

[阅读论文 PDF](https://arxiv.org/pdf/2610.26955)

### 技能库需要保存执行结构与状态依赖

SPEM: Structure-Aware Procedural Memory for Efficient Skill Use in LLM Agents

🌟🌟

技能库变大后，问题既是找哪项技能，也是按什么顺序组合。研究将原子技能与成功组合图分层保存，必要时按当前状态重排候选。强骨干家务成功率达到87.1%，技能奖励38.38；弱骨干并未在所有指标领先，检索质量和实际执行能力仍决定收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.26995)

### 没有答案标签，也能演化出有用的数据湖工具吗

Unsupervised Tool Evolution for Coding Agents in Data-Lake Analytics

🌟🌟

数据湖代理每次重做清洗和连接，浪费大量动作。研究从全库结构与失败轨迹两路演化可复用工具，用重跑中的采用行为、步骤和证据决定接纳。紧预算下四模型均受益，一个设置两集合提高9.3和21.7分；无标签接纳不能证明答案正确，工具也会增加每步输入。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27327)

### 编码记忆何时注入、何时移除，比只检索更重要

REM: What to Store, When to Recall, What to Forget in Experience Memory for Coding Agents

🌟🌟

编码记忆的价值可能取决于展示形式和时机。研究把经验压成阶段文档，开局给摘要，检测到困难再短暂展示实现记录。九十九个任务三次复测中，解决率从24.9%升至27.6%，成本少17%；任务量仍小，其他记忆系统的检索数字也并非全部在同协议重测。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27377)

### 用重复成功与失败，定位终端智能体框架缺陷

Harness Self-Evolution for Long-Horizon Terminal Agents

🌟🌟

同一终端任务时成时败，可能暴露执行框架而非模型能力的缺口。研究将成功失败轨迹与内部监控、行为手册对照，再验证框架修改。两骨干开发集成功率分别提高5.25和7.25个百分点；重复选版本会利用噪声，部分迁移成绩也需区分目标选优与冻结版结果。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27435)

### 芯片算子代理需要检索平台知识，不只复用经验

Beyond Experience: Knowledge-Guided Evolution for NPU Kernel Generation

🌟🌟

陌生芯片上的编码代理，不能只依赖自己过去试过的优化。研究按任务检索平台文档、头文件和实现模式，为探索、修复与机制重组供证。五十三个算子总分71.39，相对两基线提高11.6%和17.2%；最难任务可执行性进步大于数值正确性，真机校验仍不可少。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27588)

### 让路由代理查能力记录，再决定调用谁

COMPASS: Routing via Capability-Oriented Model Profiling with Adaptive Search, Selection, and Tool Use

🌟🌟

模型路由可以先查能力证据，而非把选择规律固定在训练参数里。研究让代理搜索逐题成败、成本和必要的候选答案。一个基准准确率69.85%，模型调用费139.57美元；另一个编码集合也有收益。但记录覆盖决定可用性，多轮换模型的上下文与缓存费用尚未验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27822)

## 大模型推理与规划

### 抽象指令难执行，领域语言能补上哪一层

From Abstraction to Action: DSLs for Natural Language Abstraction Interpretation and Execution

🌟🌟

高层指令难执行，可能缺的是稳定抽象层。研究让模型调用人工设计的领域函数库，再与自由代码和直接动作预测比较，六模型均有综合指标优势。自动归纳库只恢复部分收益且跨运行不稳；两个测试领域也不足以证明通用抽象学习已经解决。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28311)

### 把长推理留给能改善后续结果的动作

PORA: Learning When More Reasoning Pays Off for LLM Agents

🌟🌟

每步都长想，会挤掉后续动作的预算。研究从同一状态分别执行长短推理到任务结束，以终局收益和成本学习两档分配。记忆任务成功率达77.4%至81.3%，应用任务词元比规划预算基线少45.2%；但分支需可恢复环境，少量成对样本也使收益估计带噪声。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27119)

### 读推理前缀，学习何时可以提前行动

Adaptive Stopping of Streamed Reasoning for Language Model Agents

🌟🌟

推理进行到一半，可能已经足够决定下一步。研究用固定阅读器看公开推理前缀，学习停止策略，并以完整推理动作作参照。某购物设置推理词元少42%，观察成功率接近；完整动作本身也可能错，读出成本和早停后的新状态需要额外核验。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27981)

## 检索增强生成与知识检索

### 检索到一条证据，距离答对多跳问题还有多远

The Bottleneck Is Retrieval, Not Reading: Diagnosing Evidence-Based Generation with RAG for Long Context Question Answering

🌟🌟

多跳问答需要找齐证据，命中任一相关片段远远不够。研究要求答案附行级依据，发现前十条检索覆盖任一事实达82%，覆盖全部事实只有19%。这一诊断有助于区分检索与阅读失效；但长上下文比较保证正确文章在场，双方证据池并不对等。

[阅读论文 PDF](https://arxiv.org/pdf/2610.26951)

### 把所有候选放到同一套问题约束下比较

Joint Constraint Aggregation for Qualifier-Sensitive Retrieval-Augmented QA

🌟🌟

检索结果中频繁出现的答案，可能只满足问题的一部分限定。研究先抽出统一条件，再逐候选核对，最后联合比较报告。主要骨干全量准确率比思维链高4.0至11.3个百分点；但评测预设正确候选已找回，并未解决上游召回失败，强推理模式下收益也缩小。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27114)

### 扩散语言模型的事实入口，随关系措辞而变化

Factual Access States in Diffusion Language Models: From Mechanism to Knowledge Editing and Retrieval

🌟🌟

掩码扩散模型调用事实时，实体表示会很早混入关系措辞。研究沿这个访问状态做多视角编辑，也用它检索关系特定证据。改写与反向问题迁移改善；但编辑假定能标出实体和关系，自由生成改写问题仍多数答错，机制入口可用不等于事实修复已可靠。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27580)

## 多智能体与协作

### 团队成功后，究竟该改哪个智能体的技能

Which Agent's Skill Should Change? Group-Relative Credit Assignment for Evolving Multi-Agent Teams

🌟🌟

团队成功时出现的技能，未必真的有功。研究对同题重复执行，用轨迹差异和失败诊断给智能体与技能对分配信用。两骨干多跳问答提高6.7和3.2分，并能纠正植入的坏技能；训练词元增加1.6至2.9倍，目前证据只覆盖双智能体顺序问答。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27227)

### 局部改动如何带来团队的全局进展

Local Work, Global Progress: A Convergence Theory of AI Agent Collaboration

🌟🌟

团队各自改善局部方案，仍可能彼此冲突。研究把协作写成分块优化，以交互修正和全局验证决定如何合并。三代理在两地图四十次运行中均无碰撞，更大任务六代理搜索约快一倍；保证依赖可验证目标、误差界与任务结构，不能推广为自由对话的无条件收敛。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28286)

### 让测试和补丁交叉执行，反馈比共享推理更直接

TEX: Test-Time Scaling Testing Agents via Execution-based Cross-Validation

🌟🌟

测试与补丁各自自检，可能共同漏掉缺陷。研究让多个代理同时生成二者，再交叉执行形成反馈矩阵。测试基准达到86.4%，第一轮反馈已带来大部分收益；完整配置约需十二倍生成成本，而且结果只来自单次运行和限定的软件任务，不能当成通用修复保证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27290)

### 用户参与的客服任务中，多智能体未必划算

Does Multi-Agent Collaboration Pay When Agents Serve Users? Testing Agent Scaling in Dual-Control Settings

🌟🌟

有用户参与的客服流程，不能直接套用自主任务里的团队扩张规律。研究按统一预算比较单代理与中央分工团队，十三个机械有效单元中团队十二个更差、一个持平。规划者缺工具模式，未满足另一项协议要求，因此负结果约束的是当前实现，而不是所有协作形式。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27655)

## 大模型训练与对齐

### 从环境规则生成课程，把失败题修回来

GRADUS: Discovering and Recovering Agent Lessons from the Environment's Latent Syllabus

🌟🌟🌟

只保留首次就解出的合成任务，会丢掉最需要学习的困难行为。研究将环境规则拆成条件动作，按覆盖账本组合，再用执行差异决定修题还是修解。强提议者下两基准达到89%和83%；换开源提议者明显降低，方法也依赖可执行规则与状态验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27781)

### 把财报计算链变成可验证的智能体训练任务

Navalia: Advancing Cowork Agents through Verifiable Task Synthesis and Long-Horizon Post-Training

🌟🌟

财报任务难以同时做到多步分析和答案可核验。研究先挑选口径一致的事实，再用可执行计算链生成任务，随后监督微调与强化学习。五个基准均超过原模型，文档问答提高23.06个百分点；但固定窗口会丢失早期交互，最终奖励也未精确归因到各阶段动作。

[阅读论文 PDF](https://arxiv.org/pdf/2610.26887)

### 先积累验证过的分析发现，再倒推复杂任务

DataPraxis: Scaling Analytics Tasks via Verified Workspace Evolution

🌟🌟

直接从原始文件出题，常遗漏分析过程中才出现的深层问题。研究让工作区积累、继承并组合验证过的发现，再沿依赖关系倒推出题。两种骨干在三基准平均分提高约12分；收益依赖种子数据的分析空间和教师能力，尚不能代表跨执行框架的普遍迁移。

[阅读论文 PDF](https://arxiv.org/pdf/2610.26924)

### 将成功轨迹拆成程序原子，再蒸馏回策略

AtomSD: Procedural Atom-Guided Self-Distillation for LLM Agents

🌟🌟

把整段轨迹当经验，往往难以拆开复用。研究将成功执行压成带意图、条件、动作和禁忌的程序原子，再蒸馏回策略。两种规模模型相对最强基线平均提高9.31和5.42分，并改善未见任务；但原子来自成功轨迹，成功稀少的环境可能缺乏指导。

[阅读论文 PDF](https://arxiv.org/pdf/2610.26926)

### 为蒸馏合成问题，关键是它能引出什么监督

Ask to Distill: Learning to Synthesize Data for On-Policy Distillation

🌟🌟

蒸馏问题的价值，不只取决于看起来有多难。研究训练合成器寻找能在学生轨迹上引出有效教师分布的问题，同时控制长度与重复。数学、代码和工具任务的平均表现超过未优化合成问题；收益依赖特定师生组合，合成器训练与筛选开销仍需计入总成本。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27450)

### 奖励模型判对了，还要检查理由是否支撑判决

Judging the Justification: Decision Certificate Supervision for Generative Reward Models

🌟🌟

裁判选对答案，不等于解释足以支持这个选择。研究把理由作为判定证书，给结论同样正确的样本再比较理由质量，生成监督和偏好训练数据。域内外判断改善，双顺序正确率最多提高14.8分；没有参考解释仍依赖偏好标签和质量评估，证书并非形式证明。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27528)

### 不重跑环境，从旧轨迹的决策前缀继续蒸馏

SAPD: Learning from Agent Experience without Environment Interaction

🌟🌟

环境维护昂贵时，可以从旧轨迹的决策点训练代理。研究固定历史前缀，让学生生成单轮回复，再用教师分布和相对步骤优势蒸馏。三类交互任务表现改善，每步训练至少快4.7倍；固定前缀不覆盖新策略会遇到的全部状态，单步提速也不等于总成本同比下降。

[阅读论文 PDF](https://arxiv.org/pdf/2610.27847)
