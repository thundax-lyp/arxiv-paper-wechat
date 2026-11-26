---
title: "arXiv Agent 与大模型研究简报｜2026-11-25｜入选论文全览 2/2"
author: "Thundax"
summary: "上下文压缩怎样保留行动所需的信息，工具失败后哪些步骤值得重跑，多个智能体怎样在时限内分工？本期从训练、运行时和评测三方面追踪这些问题，也关注长期记忆中的证据覆盖和自动裁判的偏差。"
description: "上下文压缩怎样保留行动所需的信息，工具失败后哪些步骤值得重跑，多个智能体怎样在时限内分工？本期从训练、运行时和评测三方面追踪这些问题，也关注长期记忆中的证据覆盖和自动裁判的偏差。"
---

# arXiv Agent 与大模型研究简报｜2026-11-25｜入选论文全览 2/2

上下文压缩怎样保留行动所需的信息，工具失败后哪些步骤值得重跑，多个智能体怎样在时限内分工？本期从训练、运行时和评测三方面追踪这些问题，也关注长期记忆中的证据覆盖和自动裁判的偏差。

本期入选论文全览。

## 评测与安全

### 发现错误之后，智能体怎样才算修好了

SecondChance: Benchmarking Reliable Error Recovery in AI Agents

🌟🌟🌟

任务最终做完，也可能掩盖原错未修或外部状态受损。研究从三套工具任务中保存自然错误检查点，让十二个模型在相同状态下分别获得四种程度的帮助。具体修复指引比仅告知有错或指出位置更有用。结论来自可恢复的任务环境，现实工具若缺少补救操作，实际能修到的程度会不同。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31586)

### 评测日期为何需要固定

The Date You Didn't Set: The System-Prompt Date as a Hidden Variable in LLM Evaluation

🌟🌟

评测模板自动注入的日期会悄悄改变同一套测试。作者固定解码与配置，仅切换日期，在六个模型和四套基准上比较逐题结果。两个合理日期引起的正确性翻转比例中位数为百分之六点六，总分变化较小。这是对所测模型和模板的发现，足以说明复现实验应记录实际注入日期。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31254)

### 检索智能体十跑十中有多难

Agentic Systems Need Multi-Run Evaluation: A Study of Retrieval and Response Variability in a Deployed Enterprise RAG System

🌟🌟

对同一个文档问题运行一次，看不出检索决策有多稳定。研究在已部署系统中将七百三十九道问题各跑十遍，追踪分歧首先出现在哪里。至少命中一次与十次都命中的比例分别为百分之六十九点四和百分之五十点九，检索环节分歧最多。具体比例来自一个企业文档系统。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31266)

### 没有确定真值时怎样评价代理决策

Agent Evaluation Without Ground Truth: A Null Proportion Perspective

🌟🌟

自动实验的干预效果通常带有噪声，难以给每个行动贴上确定的对错标签。作者用序贯统计证据为代理决策质量构造上下界，允许行动相互依赖，任务也可自适应结束。图计算性能干预展示了应用方式。区间的解释仍依赖实验得到的证据有效，精度也可能不足。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31539)

### 重试之前先查清哪些操作已经生效

Agent Recovery Gone Wrong: Measuring Harm Beyond Duplicate Calls

🌟🌟

一次写入批次中途报错，重试前应确认已经发生了什么。作者抽样重放代理自然出现的部分执行，通过数据库核对终态。一百四十三个可判定样本中有三十个出现持续损害，加权估计为百分之二十四点六，其中还包括删除和错误首写。这一比例针对部分执行案例。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31554)

### 用少量专家标注纠正推理裁判

LUCID: Statistically Grounded Self-Correction for LLM Reasoning Evaluation

🌟🌟

自动裁判可能特别容易把计算或验证步骤判错。作者用一小批专家标注归纳偏差，把它写进提示，再让裁判重评未见过的步骤。一组试验中，预测正确率和专家标注的差距由七点八缩至零点九个百分点。换数据或裁判，误差模式和校准结果都需要重新测量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31595)

### 能复现历史的模拟器也可能答错反事实问题

Reproducing History Is Not Enough: Intervention-Level Assurance for LLM-Generated Simulators

🌟🌟

生成的模拟器能重现旧记录，遇到新政策却可能改错对象。作者先将每个问题转成可核验变更，再按当前记录与程序能力判断是否接收回答。试验中，单做历史检查放过两百零七个错答，逐次检查变更后放过五个。差距主要来自其中一个平台，适用性取决于变更可表达程度。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31736)

### 比较模型时省掉会相互抵消的打分

Scoring What Matters: Exact Feedback Reduction for Language Model Comparison

🌟🌟

比较相邻模型时，两边生成同样的回答可能让某些评分在差值中正好抵消。作者在取评分之前先合并相同输入的报告系数，用必要项精确恢复均值及协方差。两个受控更新实验分别省掉普通缓存后其余评分输入的百分之五十五点八和九十点一。节省取决于输出重合度和报告形式。

[阅读论文 PDF](https://arxiv.org/pdf/2611.31931)

### 用可编辑交付物考核专业界面设计智能体

FigmaEval: A Benchmark for Evaluating AI Agents in Professional UI Design

🌟🌟

界面设计往往有多种合理解，单看成图相似度也无法判断稿件能否继续编辑。研究把真实设计文件改成八十四项开放任务，同时以多维准则与设计师盲评给十一种模型打分。两类评价较一致，并揭示质量与效率的取舍。结论和工具环境、任务资源及评审样本有关。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32321)

### 科研代理学到的经验能迁移到哪里

RecurSciBench: Benchmarking Recursive Self-Improvement in Data-Driven Scientific Research

🌟🌟

科研代理用旧任务积累经验后，要在独立任务中测迁移。论文从数据集构造可执行核验的任务，比较四套系统在同类、跨类型和跨领域场景的变化。总体得分上升时，个别任务仍可能退化。结论主要适用于可程序化核验的数据科学活动。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32508)

### 游戏代理只能用自己看到的证据时表现如何

EviCraft: Can Minecraft Agents Find What They Cannot See?

🌟🌟

如果采矿工具能从模拟器后台直接定位矿石，任务完成不能说明智能体真的完成了搜索。论文保持模型、工具和世界不变，只切换证据访问规则。两种条件造成的生存任务差异超过最强代理的领先幅度。结论来自游戏生存环境和统一工具框架。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32765)

### 日常工作区里模型和执行框架哪个更影响表现

ShellBench: What Matters More for AI Agents, Models, or Harness for Everyday Tasks

🌟🌟

研究把真实助理请求改成一百项任务，包含杂乱文件、竞争数据来源和安全要求，再交叉测试十二个模型和五种执行框架。模型选择影响更大，前三名的平均通过率只差一点一个百分点。公开任务覆盖约两成运行，费用也来自令牌估算。

[阅读论文 PDF](https://arxiv.org/pdf/2611.32946)

### 从人与裁判意见分歧中发现新的偏差

Auditing the Judge: Human-Derived Bias Discovery, Quantification, and Mitigation in LLM Judges

🌟🌟

裁判可能偏向写得更长的答案，也可能有未被列出的偏好。作者先在人机判断不一致的案例中找线索，再在一致样本上只改一个因素，测该因素引起的判断变化。研究用这些估计对裁判结果做缓解。结论依赖人工样本具代表性，改写也须尽量保留其他内容。

[阅读论文 PDF](https://arxiv.org/pdf/2611.33065)

### 芯片设计代理需要看到第一处状态偏差

AIChipBench: Benchmarking LLM Agents for Automated AI Accelerator Design

🌟🌟

解码器硬件的内部状态写错，当前输出可能仍正确。论文让编码代理构建量化解码器，以整数参考逐步对齐输出和状态，并用复位、停顿及综合检查验收。给出第一处状态偏差比只展示输出错误更有帮助。证据来自指定模型架构和硬件工具链。

[阅读论文 PDF](https://arxiv.org/pdf/2611.33093)
