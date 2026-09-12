---
title: "arXiv Agent 与大模型研究简报｜2026-09-04｜入选论文全览 2/2"
author: "Thundax"
summary: "本期聚焦智能体从证据走向行动时容易失真的几个环节：缓存该留什么、工具接口是否真正接通、冲突信息怎样判断，以及长期记忆如何更新。另有训练、代码修改和自动审稿研究，帮助比较方法收益与适用条件。"
description: "本期聚焦智能体从证据走向行动时容易失真的几个环节：缓存该留什么、工具接口是否真正接通、冲突信息怎样判断，以及长期记忆如何更新。另有训练、代码修改和自动审稿研究，帮助比较方法收益与适用条件。"
---

# arXiv Agent 与大模型研究简报｜2026-09-04｜入选论文全览 2/2

本期聚焦智能体从证据走向行动时容易失真的几个环节：缓存该留什么、工具接口是否真正接通、冲突信息怎样判断，以及长期记忆如何更新。另有训练、代码修改和自动审稿研究，帮助比较方法收益与适用条件。

本期入选论文全览。

## 评测与安全

### 工具调用得零分，可能是接口没接上

Interface-Induced Trajectory Censoring

🌟🌟🌟

模型写出了调用意图，服务端却可能没有解析成工具请求。研究固定权重和评测，只配套更换聊天模板与解析器，BFCL 的首轮可解析请求便从 0 增至 196/200，多轮任务完成从 0 增至 19/100。这说明接口契约会遮蔽能力；但能解析不等于能完成任务，另一个交互基准的任务增益并未达到统计显著。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03966)

### 证据相互冲突时，排列顺序会左右答案

Large Language Models in Resolving Contextual Knowledge Conflicts

🌟🌟🌟

面对互相矛盾的材料，模型可能偏向先出现的证据。ContextConflict 用六类冲突任务检查这种偏差，并将内部表示向由单条证据构成的参考中心调整。Llama-3.1-8B 的时间冲突准确率提高 19.2 个百分点。方法需要访问内部激活；摘要任务的“均衡”评价还假设来源同样有效，不能用于要求优先相信可靠来源的情形。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03148)

### 界面指令不可执行时，智能体能否停下

Do GUI Agents Know When Not to Act? Enabling Conflict-Aware Termination for Multimodal GUI Agents

🌟🌟

用户要求的动作可能与界面或目标矛盾，智能体却仍然点击。ConflictGuard 先检查可行性，再按冲突信号调整内部激活，促使模型终止错误操作。Qwen3-VL-8B 的总体成功率从 43.76% 升至 70.45%，但正常指令成功率也下降。主要证据来自单步动作测试，且完整方法要求访问模型内部状态。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03438)

### 读懂推理文字，不等于知道哪一步改变了答案

Legibility is Not Interpretability: Comparing Judged and Actual Importance in Chain-Of-Thought Reasoning

🌟🌟

推理链里哪一步真正影响结果，不能只靠文字听起来是否关键。研究通过从步骤前后继续采样，衡量该步对最终答案概率的影响，再测试裁判能否仅凭文本预测。微调后的预测器在错误轨迹上较有效，在正确轨迹上仍很弱。这个行为指标能帮助定位作用，但既不直接读取内部状态，也不保证推理解释忠实。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04194)

### 换一个欺骗场景，探针还能识别吗

Probe Generalization as Subspace Selection for OOD Deception Detection

🌟

识别模型欺骗的探针，可能只记住训练场景。研究把内部激活分解成不同方向，依据源场景中的语义选择子空间，再训练线性探针。Llama-3.1-8B 上，一个内幕交易报告测试的 AUROC 从 0.706 升至 0.881。结果支持研究跨场景表征，但使用目标标签的贪心选择只是参考上界，不能当作未知场景部署成绩。

[阅读论文 PDF](https://arxiv.org/pdf/2609.02893)

### 不看回答，只看评分条款也能猜出裁判标签

Judging LLM-as-a-Judge: Concerning Rubric Artifacts in LLM-based Automated Text Generation Evaluation

🌟🌟

用模型给回答打分时，评分条款本身可能泄露答案。研究让一个小型分类器只读取条款，便能在两组评测中高于随机水平预测语言模型裁判的标签，并进一步用反事实修改检查这种依赖。它提醒评测者区分回答质量与条款线索；不过，预测相关性本身不能证明裁判在因果上走了捷径，也不能否定所有模型裁判。

[阅读论文 PDF](https://arxiv.org/pdf/2609.02942)

### 修改一处需求，能否同步改对相关字段

What Else Needs Fixing? Exploring Cost-Effective Test-Time Compute for Revision Propagation in Artifacts Generated Through Conversation

🌟🌟

对话里约定的依赖，未必能从最终文件看出来。RevPropBench 要求模型修改 JSON 时同步更新这些关联字段。六个模型都从“同时提供对话和文件”中受益；Qwen3.5-122B 的完成率由只看文件的 81.7% 升至 90.3%。多候选选择通常优于机械合并，但数据是依赖明确的合成对话，尚不代表复杂仓库修改能力。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03254)

### 记忆检索命中了，回答未必用得上

When Users Don't Ask: Benchmarking Context-Driven Memory Retrieval in Conversational Agents

🌟🌟

真实对话常用暗示而非直接提问来调用记忆。LoCoMo-Conv 将问题改为对话、隐含线索、错误前提和组合需求，并分别衡量检索与回答。实验发现，检索表现好的系统未必能把事实正确带入回答，系统排名也会改变。它适合检查记忆到生成的衔接，但仅基于十段对话，回答模型和裁判的覆盖也有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03467)

### 审稿意见中的事实错误，需要对照论文查

HalluPeer: A Taxonomy-driven Benchmark for Detecting Hallucinations in Scientific Peer Reviews

🌟🌟

审稿意见语气专业，并不表示它准确描述了论文。HalluPeer 注入不同类型的事实错误，分别测试发现、分类和定位能力。通用核验器在整篇审稿检测上的相关性指标接近随机水平，面向该任务的微调明显改善。基准可用于研究审稿核查，但错误主要由合成流程产生，也不评价批评是否公平或新意判断是否合理。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03580)

### 用户坚持错误信息时，工具调用会跟着错吗

KC-Bench: A Dynamic Interactive Benchmark for Evaluating Knowledge Conflicts in LLM Agents

🌟🌟

助手可能知道事实，却在用户坚持后使用错误信息调用工具。KC-Bench 在三类有状态环境中注入事实、身份和时间冲突，观察模型是否发现、核实并据此行动。九个模型都未在各类冲突上保持稳定表现。结果揭示了执行前核对的重要性，但来自合成任务与模拟用户，不能直接归因为某种对齐训练或真实数据泄漏。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03588)

### 让自动审稿修正已有批评，而不是越写越多

More Criticism Does Not Make a Better Review: EquiReview-R

🌟🌟

自动审稿可能反复增加疑点，却不撤回证据不足的批评。EquiReview-R 保存问题之间的关系和修改历史，用支持与反证逐步修订。271 篇确认集上，重大过度批评率从高召回基线的 15.5% 降至 8.1%，遗漏满足预设非劣要求。但判断来自同一家族的模型裁判，结果依赖其标准与固定搜索流程。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03943)

## 应用与基准

### 把临床试验匹配的依据变成可重跑约束

Accountable AI with Grounded, Faithful, Consistent, Actionable Rationales: A Case Study in Clinical Trial Matching with VERDICT

🌟🌟

患者是否符合试验条件，不能只依赖一段流畅解释。Verdict 让模型提取要求和病历证据，再由约束求解器作出决定，并列明缺失信息假设。TREC 的 363 个患者—试验对上，GPT-5-mini 的 F1 从直接匹配的 0.776 升至 0.828。求解器只能保证已编码约束的推导，无法保证前面的提取和缺失信息处理正确。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03366)
