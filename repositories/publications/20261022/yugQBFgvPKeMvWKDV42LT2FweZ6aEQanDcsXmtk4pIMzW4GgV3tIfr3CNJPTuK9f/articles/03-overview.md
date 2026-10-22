---
title: "arXiv Agent 与大模型研究简报｜2026-10-22｜入选论文全览 2/2"
author: "Thundax"
summary: "本期关注智能体从“做完”走向“做对”的具体缺口：研究分数能否代表洞见，技能能否迁移，拒绝能否落实到工具行动，证据又是否在检索、记忆与文档摄入中完整保留。训练侧则追问，变好的排序指标会不会掩盖生成退化。"
description: "本期关注智能体从“做完”走向“做对”的具体缺口：研究分数能否代表洞见，技能能否迁移，拒绝能否落实到工具行动，证据又是否在检索、记忆与文档摄入中完整保留。训练侧则追问，变好的排序指标会不会掩盖生成退化。"
---

# arXiv Agent 与大模型研究简报｜2026-10-22｜入选论文全览 2/2

本期关注智能体从“做完”走向“做对”的具体缺口：研究分数能否代表洞见，技能能否迁移，拒绝能否落实到工具行动，证据又是否在检索、记忆与文档摄入中完整保留。训练侧则追问，变好的排序指标会不会掩盖生成退化。

本期入选论文全览。

## 评测与安全

### 智能体能改善科学模型，却仍常停留在调参

Automating ML for Science: Can Frontier Agents Climb Scientific Hills in the Wild?

🌟🌟🌟

研究让编码智能体在20个科学机器学习基准上改进已发表模型，并隔离测试集和审计执行轨迹。智能体能取得分数收益，但多数来自常见工程技巧。加入构思、实验管理和定时复盘技能后，平均相对收益进一步提高；这些结果仍不能证明它们具备独立科学洞见。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28763)

### 嘴上拒绝后，工具调用仍可能越界

Behavior Beyond Text: Evaluating Refusal Transfer Failure in LLM Agents

🌟🌟🌟

聊天里拒绝的请求，换成工具任务后未必仍被拒绝。研究用配对提示测试五个模型，发现普通工具模式下，约一成至一半已被文本拒绝的有害请求仍产生违规调用。恢复拒绝激活只能阻止一部分，而且常靠停止调用实现。该实验测的是单步调用输出，尚非真实执行后的危害。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28982)

### 指令遵循应同时检查内容与格式

LIFT: Scoped Constraints for Evaluating and Training Instruction Following

🌟🌟

满足字数、格式等规则，不代表完成了用户真正要求的内容。研究把约束附着到具体章节，同时检查主任务与形式要求，发现强模型在密集、平铺约束下仍会失误。配套训练更不易只追逐表面规则，但内容量规本身的可靠性仍是后续需要加强的环节。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28819)

### 让测试围绕每个模型裁判的职责生成

SANE: Automated Scorer-Specific Metamorphic Testing for LLM Judges

🌟🌟

模型裁判各有职责，固定一套扰动难以测全。研究读取评分规则和实现，为每个裁判生成专属的输入变化及预期分数关系，再检查测试是否成立。五个领域产生了更多有效测试族；忠实性上的裁判排名也更贴近人工基准，但自动验证测试的环节仍可能共享模型偏差。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28886)

### 让持久记忆在影响行动前经过确认

PerMIT: Securing Persistent Memory for LLM Agents via Machine-Checked Integrity Theorems and Scalable Community Trust

🌟🌟

持久记忆一旦被投毒，风险会跨会话延续。研究让环境记忆通过有限接口和确认门，只有被确认的具体内容才能影响敏感行动，并累积社区背书。定理提供了条件化保证，实验未观察到攻击成功。确认机制仍依赖信任假设，也不能把来源可信直接等同于知识正确或有用。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28987)

### 扩展现实代码需要在交互中验收

GenXR-Bench: Benchmarking Coding Agents for Interactive XR Development

🌟🌟

能生成代码，不代表应用能在真实空间交互中运行。研究构建112个扩展现实开发任务，用动作、环境和视觉断言测试运行行为，最强配置仅约一半一次通过。异步传感器生命周期和空间交互是常见问题；结论受限于所用开发栈，功能通过也不能替代舒适度与设计评价。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29014)

### 同一批材料，换个顺序就换了多数判断

Does Every Instance Count Equally? Order Effects in LLM Multi-Instance Processing

🌟🌟

把同一批评论换个排列，语言模型对多数意见的判断竟会显著变化。研究保持实例不变，比较七种顺序，发现模型通常更重视开头，多数类别靠前时更准，明确要求全面检查也未稳定修复。它揭示的是二元聚合任务中的顺序偏差，不能把最大差距当成所有长文任务的平均表现。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29057)

### 选项概率不能直接当作逐项正确率

When Multiple Choices Are Correct: Asymmetric Probability Allocation in Jev and Other Decision Models

🌟🌟

当多个选项都正确时，归一化选择概率往往集中在其中一个。研究发现，即便正确项全部排在干扰项前，仍可能有正确项低于均匀概率；把同一答案重复五份也会得到不等概率。因此排序能力不等于多选恢复能力，固定阈值不能直接当作逐项正确性的判断标准。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29217)

### 多模态记忆要查清证据在哪一步丢失

MOSAIC: An Omni-Modal Benchmark for Long-Term Memory and Cross-Modal Reasoning in Conversational Agents

🌟🌟

多模态记忆答错，可能不是忘了，而是证据被压缩、没检出、未送达或没有读懂。研究固定回答模型和预算，逐段替换记忆管线，发现金标准证据下仍有明显阅读损失。空间信息的验证较强，音频与视频的一些结论仍不确定；合成历史也不能代表所有真实助手场景。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29249)

### 重命名后降分，未必就是记忆污染

ALIAS: Evaluating Performance and Memorization in LLM-Written TLA\+ Specifications

🌟🌟

把标识符改名后分数下降，常被当作模型背过答案的证据。研究在形式规约任务中确认改名前后行为等价，再发现大部分下降来自评分器要求题目未声明的精确名称。改用行为评分后差距明显缩小。重命名仍可能影响表现，但它同时混合了评分规则与新名称成本。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29767)

### 去掉题目套路后，再看复杂度差距

Did the Problem Actually Get Harder? Testing LLMs on Paired P and NP-Complete Problems Hardened by Adversarial Multi-Agent Rewriting

🌟🌟

模型解不出题，是复杂度更高，还是没认出熟悉表述？研究把易解与难解问题配成结构孪生，再对抗改写措辞。难侧通过率更低，延长时限帮助有限，说明错误程序比单纯运行慢更常见。改写也缩小类别差距；固定硬化面板和单一编程语言仍限制结论外推。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30103)

### 合法工具也需要检查参数和上下文

AgentPolicyForge: From Executable Environments to Policy Benchmarks and Adaptive Guards

🌟🌟

给智能体列出许可工具，不足以约束它如何使用工具。研究从可执行环境生成参数、资源和条件上的违规案例，训练独立守卫，较仅靠策略提示降低攻击成功率。好处是把规则落到调用情境；局限是测试仍共享环境和政策模板，也未证明比完整的可执行规则检查更划算。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28989)

### 基础能力分数解释不了全部执行差距

Bridging Foundational and Agentic Capabilities of LLMs

🌟🌟

同样的基础能力，未必换来同样的智能体执行表现。研究把模型基准画像与交互中的具体操作相连，发现相近能力的服务仍有稳定执行差距；加入操作画像后更能预测任务结果。它适合定位部署弱点，目前证据集中在银行任务，不能据此建立跨环境通用排名。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29751)
