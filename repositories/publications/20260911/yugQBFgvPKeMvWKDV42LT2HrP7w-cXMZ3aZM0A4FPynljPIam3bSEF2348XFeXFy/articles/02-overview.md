---
title: "arXiv Agent 与大模型研究简报｜2026-09-11｜入选论文全览 1/2"
author: "Thundax"
summary: "本期主线是让智能体在行动前准备得更好、在执行中把资源用在关键位置，并在结果出来后留下可核对证据：从环境预习、记忆写入查证和GraphRAG策略，到沙箱内存压缩与Lean证明闭环。"
description: "本期主线是让智能体在行动前准备得更好、在执行中把资源用在关键位置，并在结果出来后留下可核对证据：从环境预习、记忆写入查证和GraphRAG策略，到沙箱内存压缩与Lean证明闭环。"
---

# arXiv Agent 与大模型研究简报｜2026-09-11｜入选论文全览 1/2

本期主线是让智能体在行动前准备得更好、在执行中把资源用在关键位置，并在结果出来后留下可核对证据：从环境预习、记忆写入查证和GraphRAG策略，到沙箱内存压缩与Lean证明闭环。

本期入选论文全览。

## Agent系统与工具使用

### 没有题目示例，智能体也能先学环境

Studying Without a Syllabus: Task-Agnostic Environment Preprocessing

🌟🌟🌟

智能体在不知道下游任务分布时先检查文件和工具，自行创建索引、脚本或技能供冻结求解器复用。六个基准中开放式学习方案在五个上领先，24组比较有21组优于不预习；收益依赖环境可探索性，且不总是最优。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10824)

### 写入长期记忆前，先让策展智能体查证环境

Grounding Agent Memory: Environment-Probing Curation for Enterprise Agents

🌟🌟🌟

环境探测策展给异步记忆代理只读工具，在经验写入前核对、限定范围并刷新。CLBench通过率从39%升至73%，查询和任务代理成本同时下降；收益来自生产式GitHub Copilot实验，但工具权限和环境覆盖决定上限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11060)

### 高并发智能体沙箱怎样压缩内存

Memory Compression for High-Fanout Agent Sandboxes

🌟🌟🌟

AgentZip利用同一模板和兄弟沙箱间的页面冗余，并在模型等待期压缩、恢复前预取。实验把沙箱内存最多降8.7倍，把激进压缩的最坏减速从3.1倍降至1.40倍；收益依赖工作负载相似性。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11294)

### 用上下文老虎机降低技能进化成本

COBRA-Skills: Contextual Bandit-Guided Evolution for Agent Skill Optimization

🌟🌟

COBRA-Skills把技能优化看作动态候选空间中的预算分配，用上下文老虎机优先评估有希望或信息量高的技能，再依据执行证据演化。六个基准上成本比SkillOpt低55%至58%；仍依赖可执行评测反馈。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11682)

### 智能体工作流排队时，准备好不等于立刻释放

Decoupling Readiness from Release for Tail-Aware Scheduling of Agentic LLM Workflows

🌟🌟

方法将模型轮次“就绪”和提交推理解耦，用均值-CVaR尾部风险与动态工作预算安排释放顺序。软件工程轨迹仿真中，轻载表现接近立即释放，拥塞时P95流程时间最高加速3.50倍；效果依赖工作量估计。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10964)

### 多轮模型路由要先处理好历史窗口

SWRouter: Similarity-Contractive Window Routing for Multi-Turn Large Language Model Conversations

🌟🌟

SWRouter按相似性收缩历史窗口，并把上下文构造准确度与模型选择效果分开评价。多轮基准上比最佳单模型高16.26%，比Conv-ID上下文再高8.22%；结果尚需更多对话域和模型池验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11414)

### 优化智能体如何记住连续修改过的约束

MAPLE: Memory-Augmented Planning with Language and Evolution

🌟🌟

MAPLE维护可执行优化程序、已接受方案、更新记录和候选解，让自然语言请求连续修改排程与路由。NLDO的15条轨迹全部完成；方法依赖预定义决策类型和求解器路线，新增算子要扩展运行时。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11636)

### 持续智能体的内在驱动力也会持续放大偏差

Artificial Id: Drive and Persistent Alignment in Agentic AI

🌟🌟

Artificial Id用差异化持续性让极小控制器在无任务目标时形成继续、停止或改变行为的驱动。虚拟培养皿实验显示适应与意外策略都可被保留；实验只有20参数控制器，扩展到LLM仍是架构主张。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11911)

### 工业推荐研究智能体如何跨天运行实验

Auto-RecSys: Harnessing Autonomous Research Agents for Industry-Scale Recommender System

🌟🌟

Auto-RecSys用异步并行、跨服务器持久记忆和“语言技能指引＋确定性脚本”处理多日推荐实验，双循环分别积累执行经验和研究想法。报告显示人力与失败恢复改善，但证据集中在内部推荐模型环境。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10922)

## LLM推理与规划

### 让自然语言数学推理接受Lean逐步验真

Magenta: Closing the Loop Between Mathematical Reasoning and Lean Verification

🌟🌟🌟

Magenta把自然语言答案转成Lean陈述与机器证明，用陈述评审防止错误形式化，再把失败路由到数学重推或局部修复。所测奥赛基准全部通过，K2-Horizon-7B解出IMO 2026六题；高结果仍依赖形式化评审和搜索成本。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11319)

### 自然语言证明也能达到奥赛金牌线

An Open Recipe for IMO Gold: Training Nemotron for Olympiad Mathematics

🌟🌟

研究用Nemotron专家检查点生成、验证和修订自然语言证明，IMO 2026官方得分30/42，越过29分金牌线。系统无需形式证明器，但完整管线计算昂贵，多数消融只在30题开发集进行。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10712)

### 一个压缩器适配不同上下文压缩率

FlexComp: One Model for Every Ratio in Context Compression

🌟🌟

FlexComp用Matryoshka式训练让一个软上下文压缩器支持任意记忆预算，再按输入置信度或预测器选比例。它以158至266倍平均压缩保留接近温和比例的准确率，并提升吞吐；结果依赖所测压缩器和MRQA任务。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11192)

### 高置信推理还要经得起局部扰动

Beyond Confidence: Stability-Aware Test-Time Adaptation for LLM Reasoning

🌟🌟

TASCO冻结主模型，只优化任务级前缀，让高置信预测在随机或最坏局部扰动下保持稳定。多个推理基准上准确率和token效率改善；稳定性仍是无标签代理，不保证答案为真。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11393)

## RAG与知识检索

### GraphRAG不该让所有问题走同一条路

MOSAIC: Query-Aware Exploration Policy Adaptation for GraphRAG

🌟🌟🌟

MOSAIC先分析每个问题需要的证据结构，再控制种子、图遍历、停止和证据选择。GraphRAG-Bench上比最佳既有结果提高4.43至5.13点，并比固定宽策略少评估81.9%的路径；分析器出错会直接配置错检索策略。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11065)

## 多智能体与协作

### 组织结构能让50个具身智能体更聪明

ORCH: Organizational Principles Enable Collective Intelligence in Embodied AI

🌟🌟

ORCH按可并行的汇聚依赖和有前置关系的顺序依赖构造任务型层级。25个山火任务上，人工设计组织相对四个框架平均提高63.97%最终分和74.29%执行效率；仿真与模型评审的失败分析限制外推。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11737)

### 多智能体潜在通信为何难以跨团队复用

Portable Semantics, Private Dialects: Reuse and Negative Transfer in Latent Communication Between Language-Model Cells

🌟🌟

六个独立训练社会虽学到相似语义接口，却没有共享原始“语言”：跨初始化26个方向在冻结对齐阶梯上全失败。继承全局接口还造成严重负迁移；结论限定于17状态近迁移环境。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11365)

### AI彼此配合得好，不代表理解人类默契

The Convention Gap: Towards Measuring Implicit Communication in Cooperative AI Evaluation

🌟🌟

论文提出“惯例差距”，比较字面信息预测的失败率与真实失败率。在约10.1万次Hanabi行动中，人类对与AI对差异显著，人机伙伴间也分化；指标依赖可精确计算字面后验的游戏结构。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11489)

### 异构模型协作先把置信度校准到同一尺度

Calibration-Aware Uncertainty Cascades for Efficient Heterogeneous Model Collaboration

🌟🌟

CAUC独立校准每个模型，再用共同可靠性阈值决定接受、转交强模型或融合。六个语言基准平均相对准确率高于只用强模型1.9%，同时省约47%强模型调用；每个部署域仍需验证数据。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11446)

### 多智能体意见冲突时，用反向概率作锚

When Agents Disagree: Bayesian Backward Reasoning as a Label-Free Anchor for Multi-Agent Collective Decision-Making

🌟🌟

方法从诊断标签反推证据似然，构造与正向推理不同分解的后验，再按两者一致性选择或融合智能体。在DDXPlus五种骨干上均有改善，冲突子集收益最大；证据限于医疗诊断任务。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11709)

## LLM训练与对齐

### 强化学习的分叉点应放在模型改变想法处

Fork Where the Model Changes Its Mind: Belief-Shift Branching for Tree-Structured Reinforcement Learning

🌟🌟🌟

树状RLVR的训练信号取决于有限分叉放在哪里。论文读取答案信念变化，在价值曲线转折前分叉；八组预验证均优于熵、固定位置和评审模型，训练中也领先。方法仍需可验证奖励，信念探针的迁移性有边界。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11061)

### 自蒸馏也可以学习避开错误推理

Negative Self-Distillation: Learning to Reason by Avoiding Flaws

🌟🌟

负向自蒸馏让模型生成“粗心推理者”作为负教师，再只对推理关键token远离其分布，避免模仿带答案教师压制探索与自纠。实验优于正向自蒸馏和无标签RL基线；动态门控对高概率token微小波动敏感。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11699)

### 自主研究智能体怎样改进小数据语言模型

Data-Efficient Language Modeling: From Frontier Advancement to Principle-Guided Model Improvement

🌟🌟

Qiushi Engine把模型构建、机制实验和训练决策串成三阶段自主研究流程，在BabyLM严格小数据预算内探索重述、重复和增量学习。结果说明上下文可见、监督位置与已有能力保持需共同设计；结论主要来自有限语料和该研究流程。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10702)

### 把复杂风控规则写进模型权重

SIRF: A Spec-Internalized Risk Foundation Model for Industrial Content Risk Control

🌟🌟

SIRF用约7000万合成token持续预训练，把平台规则内化后再做领域微调。在同源对照中，Black Recall@P95提高15.1个百分点，并保持通用能力；结果针对单一工业风控体系和特定高精度操作点。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11752)
