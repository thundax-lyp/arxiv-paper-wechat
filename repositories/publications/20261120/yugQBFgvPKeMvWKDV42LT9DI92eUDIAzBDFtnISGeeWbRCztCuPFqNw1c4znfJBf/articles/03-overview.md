---
title: "arXiv Agent 与大模型研究简报｜2026-11-20｜入选论文全览 2/2"
author: "Thundax"
summary: "今天的研究把一个问题拆得更具体：智能体如何在长任务中保住有用经验，并在必要时做出可靠判断。值得对照阅读的是无反馈技能改写与有执行反馈的修订、摘要压缩与原始日志回查，以及推理教师向快速决策模型的迁移。"
description: "今天的研究把一个问题拆得更具体：智能体如何在长任务中保住有用经验，并在必要时做出可靠判断。值得对照阅读的是无反馈技能改写与有执行反馈的修订、摘要压缩与原始日志回查，以及推理教师向快速决策模型的迁移。"
---

# arXiv Agent 与大模型研究简报｜2026-11-20｜入选论文全览 2/2

今天的研究把一个问题拆得更具体：智能体如何在长任务中保住有用经验，并在必要时做出可靠判断。值得对照阅读的是无反馈技能改写与有执行反馈的修订、摘要压缩与原始日志回查，以及推理教师向快速决策模型的迁移。

本期入选论文全览。

## 评测与安全

### 没有反馈的技能重写，会把专家细节越改越少

How Feedback-Free Self-Evolution Reshapes Agent Skills: A Systematic Study

🌟🌟🌟

把专家技能交给模型反复润色，并不必然越改越好。六个模型在无反馈的三十轮改写后，三个基准全部退步；先丢失的常是模型自己不容易写出的具体知识。只标记这些内容反而有帮助。实验只改技能文档，未研究有反馈修订、多技能组合或脚本演化，结论需要守住这些边界。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25534)

### 用可控错误让机器学习工程基准持续变难

BuggyMLE: Scaling Machine Learning Engineering Difficulty with Bug Injection

🌟🌟

机器学习工程基准会被逐渐攻克，作者通过可控注入仓库错误扩展难度，再用课程训练小型编码代理。最高解决率随难度从百分之九十五降至百分之九，训练还改善了通用仓库修复。但补丁结构难度不等于语义难度，合成错误的迁移也不能替代自然缺陷验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25088)

### 检索到信息之后，智能体是否真正完成了工作

EverydayBench: Evaluating Satisfactory Completion of Live User-Facing Digital Work

🌟🌟

真实网络任务不能只看找到多少信息，还要看需求、证据和交付物是否同时过关。该基准为七十七个开放任务预设成功条件，组合确定性检查、网页核对和分项评分，最强配置通过约一半任务。样本不大且运行中断会重试，其分数反映干净运行的交付质量，不代表日常故障率。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25146)

### 跨图纸、影像和文件完成专业交付仍然困难

MKA: Evaluating Multimodal Knowledge Agents on end-to-end professional tasks

🌟🌟

专业知识工作常要求跨图纸、影像和文档推理，并交付独立文件。该基准用两百个跨行业任务和专家加权准则测量这种能力，最强模型对前沿难点的满足率仍不足六成。专家一致性验证集中于部分高权重准则，每任务又只运行一次，不能把评分一致率理解为全面可靠性。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25228)

### 会运行智能体，不代表会把它造好

AppSci-Bench: Can LLMs Build AI Agents and Make Them Better?

🌟🌟

能写出智能体代码，还不等于能问清需求并证明它好用。七个业务任务要求模型与模拟利益相关者交流、探索基础设施并自建评测，最强原生配置的三次最低分均值仍仅约六成。内部测试饱和并不代表隐藏需求满足，增加优化循环有时反而有害；模型与框架的贡献也不能混为一谈。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25360)

### 上下文压缩是否合格，要看任务能否继续完成

CompAct-Bench: A Benchmark for Working-Context Compaction in Long-Horizon Agent Tasks

🌟🌟

摘要读起来顺畅，不表示智能体还能继续原任务。该基准在稳定成功轨迹中插入压缩点，控制保留比例后恢复原环境，并用相同执行器续作。默认保留一成字符时，最好成绩仍只有百分之六十八点五。它隔离了压缩损失，但只取原本稳定成功任务，且部分办公数据不公开。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25673)

### 模型能否替代一位标注者，应按任务检验

AltRA-Test: An Alternative Annotator Test for LLM Judges Without Shared Annotators

🌟🌟

模型是否能替代一位人工标注者，不宜只看与多数票的相关性。该检验重采样每题人工标签，比对全人工与人机混合面板的一致性，适用于没有共享标注者的情形。约百题在许多设置下足够，但通过只说明保留该人工群体的共同信号，发现不了双方共享的错误。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26073)

### 分类置信度更适合从标签概率读出

LLMs Are Already Confidence-Aware Zero-Shot Classifiers

🌟

分类模型给出的口头自信，与真正容易出错的样本未必一致。论文比较多种置信度读取方式，发现直接利用标签概率更能区分错误，并只在标签前缀分叉处打分以减少解码。结论限于固定标签分类；减少解码步数并不自动等于服务延迟同比下降，换成单字符标签还可能损失准确率。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25289)

### 把昂贵的记忆因果审计，蒸馏成在线风险判断

DriftGuard: Online Memory-Drift Detection via Causal Attribution for LLM Agents

🌟

一条看起来普通的记忆也可能改变后续动作，单靠可疑措辞难以定位。该方法离线逐条中和记忆并配对续跑，生成因果风险标签，再训练线上估计器，避免每次重放工具。实验支持检测和防御收益，但单条干预漏掉记忆之间的交互，未见攻击和领域迁移下也没有安全保证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25583)

### 评分数字反过来，模型是否还遵守同一标准

Rubric Semantics or Numerical Priors? Auditing Scale-Direction Bias in LLM Judges

🌟

相同评语对应的数字方向变了，模型裁判会保持同一判断吗？研究反转评分锚点并扣除重复评测自身波动，发现裁判普遍受到数字方向影响。双向评分平均能减弱偏差，同时保持人类一致性。不过反向量表也可能更不自然，平均方案增加调用，并不能消除所有准则理解错误。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25588)

### 固定答案再跨路径核对，留下可回放的决策记录

Anchor and Check: Deterministic Cross-Prompt, Cross-Model Reconciliation for Auditable LLM Decisions

🌟

自动决策先固定一个答案，再让不同提示或不同模型核对，可以留下可回放的执行记录。研究的严格一致门可自动处理约七成条目，但仍会执行约百分之十六的错误。不同家族提供了有价值的互补信息；一致性依旧不是正确性证明，较弱核对者也未必带来收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.25818)

### 缺少一条记录，究竟是假还是未知

ClosureBench: A Benchmark for Reasoning under Closure Assumptions

🌟

记录里没有的信息，究竟应判未知还是判假，取决于来源是否声明完整。该基准保持事实不变，只切换闭合约定，发现整体高准确率仍可掩盖关键切换失败。它对知识库与工具协调很有提醒价值，但合成符号题并不覆盖真实检索和矛盾证据的全部复杂性。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26335)
