---
title: "arXiv Agent 与大模型研究简报｜2026-09-15｜入选论文全览 2/2"
author: "Thundax"
summary: "本期最值得注意的变化，是 Agent 研究开始从“任务做成了没有”转向系统边界：交接能否保留承诺，工具调用成功后外部状态是否一致，审计发现危险时控制器会不会真的停下，以及经理式回修是否反而制造迎合。另一条主线聚焦自我改进与长期运行：harness、技能、探索策略、会话记忆和科学工作流都在尝试把经验变成可复用、可验证的状态。星标表示本期阅读优先级：🌟 值得关注，🌟🌟 建议阅读，🌟🌟🌟 优先精读；它不等同于结论可靠性，具体证据边界见每篇导读。"
description: "本期最值得注意的变化，是 Agent 研究开始从“任务做成了没有”转向系统边界：交接能否保留承诺，工具调用成功后外部状态是否一致，审计发现危险时控制器会不会真的停下，以及经理式回修是否反而制造迎合。另一条主线聚焦自我改进与长期运行：harness、技能、探索策略、会话记忆和科学工作流都在尝试把经验变成可复用、可验证的状态。星标表示本期阅读优先级：🌟 值得关注，🌟🌟 建议阅读，🌟🌟🌟 优先精读；它不等同于结论可靠性，具体证据边界见每篇导读。"
---

# arXiv Agent 与大模型研究简报｜2026-09-15｜入选论文全览 2/2

本期最值得注意的变化，是 Agent 研究开始从“任务做成了没有”转向系统边界：交接能否保留承诺，工具调用成功后外部状态是否一致，审计发现危险时控制器会不会真的停下，以及经理式回修是否反而制造迎合。另一条主线聚焦自我改进与长期运行：harness、技能、探索策略、会话记忆和科学工作流都在尝试把经验变成可复用、可验证的状态。星标表示本期阅读优先级：🌟 值得关注，🌟🌟 建议阅读，🌟🌟🌟 优先精读；它不等同于结论可靠性，具体证据边界见每篇导读。

本期入选论文全览。

## 评测与安全

### 政策写得含糊，Agent 基准就会把合理行为判错

Policy Loopholes in Agent Evaluation: When Policy Ambiguity Masquerades as Agent Error

🌟🌟🌟

论文审计τ²-bench，指出自然语言政策的沉默、歧义与冲突会让单一金标把可辩护行为误判为Agent错误。1968次运行与跨域对比支持现象，但仅覆盖同一基准两个领域，复杂度与工具约束仍共变。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14400)

### Agent 买到资源后，还不能直接获得使用权

AcquireBound: Runtime Authorization for Resources Acquired by AI Agents

🌟🌟🌟

AcquireBound针对Agent购得凭据、算力、账号或其他Agent后的授权空档，在首次激活前隔离并重新解析真实能力。形式安全属性与多层测试很细，但实验多为注册的离线轨迹和本地组合，真实提供商及策略误配风险仍未覆盖。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14744)

### 一个样例就能刷高公平基准，分数还代表公平吗？

One Example Is Enough to Pass Fairness Benchmarks: Rethinking Fairness Evaluation for Aligned LLMs

🌟🌟

一个BBQ样例即可让基础模型接近或超过RLHF模型，说明常用公平基准主要测“缺证据就弃答”的浅层结构线索。跨四模型家族和RealToxicityPrompts反证较强，但仅英语、美国语境，生成公平也只覆盖毒性一个切面。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14860)

### 用真实执行轨迹训练计算机 Agent 的安全审计器

HazardAuditor: From Executable Threats to Safer Computer-Use Agents

🌟🌟🌟

HazardAuditor把Claude Code、Codex等异构执行轨迹规范化，并用GuardPO按整段安全决策而非token长度训练生成式防护模型。跨五来源和多框架迁移证据较强；16K前缀截断会丢后期风险，部分后端仍存在召回权衡。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15134) · [代码](https://yunhao-feng.github.io/HazardAuditor/)

### 审计发现危险还不够，控制器必须真的停下来

Why LLM Agents Collapse Without Oversight: The Enforcement Gap as the Mechanism Behind Emergence World Failures

🌟🌟🌟

论文把Agent安全失败拆成检测与执行，指出审计器即使发现危险，控制器不据此中止仍会形成“执行鸿沟”。大规模多框架与独立基准支持结构性结论，但论文围绕特定注入测试，真实多Agent社会的外推仍需谨慎。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15293)

### 恶意计划能被模型改写成“自己的想法”并绕过监控

Corrupt Plans, Clean Traces: Evading Chain-of-Thought Monitoring with Plan Injection

🌟🌟🌟

Plan injection把恶意但听似正常的计划植入上下文，使推理模型采纳并改写为自身思路，从而绕过CoT监控。从选择题扩展到代码和Bio-Math且有大模型结果，但仅两种actor、两类任务，RAG或工具端到端注入尚未展示。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15989)

### 长轨迹故障归因，关键不是更大模型而是继续搜索

Root-Cause Attribution Is a Search Problem: Continual Search for Long-Horizon Agent Failures

🌟🌟

Continual Search把长轨迹故障归因从一次性判断改成持续搜证，在五类RCA设置中稳定改善定位。跨五套基准证据较完整，但只能归因可观察轨迹，隐藏推理与人类标注噪声限制了因果解释。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13463)

### 平均分会掩盖长期记忆 Agent 的低频高危故障

MemRiskBench: Trace-Aware Risk-Preserving Evaluation for Long-Horizon LLM Agents

🌟🌟

MemRiskBench用确定性轨迹检查覆盖陈旧、冲突、跨用户泄漏、撤销复用和约束衰减等长期记忆风险。无LLM裁判的通过路径与风险保留子集是优点，但仅120个脚本化episode、五个量化本地模型，真实环境尚缺。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14976)

### 编码 Agent 聊得越久，越难守住全部约束

MTAC-IFBench: Benchmarking Instruction-Following in Multi-Turn Agentic Coding

🌟🌟

MTAC-IFBench用多轮渐进软件需求和平均91项约束，分开评估编码Agent的过程遵循与最终功能。约束清单、脚本和裁判组合提高可核查性，但半自动构造任务与裁判依赖仍可能引入模板偏差。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14992)

### 按任务临时发权限，比给 Agent 固定角色权限更安全

Empirical Evaluation of Task-Based Permission Scoping Architecture for AI Agents

🌟

论文实证任务级权限门控：从用户任务文本预测本次所需权限，在凭据下发前缩小企业Agent攻击面。600提示和端到端门控支持可行性，但数据与企业政策范围有限，作者也承认从可行到部署仍有距离。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15422)

### 把安全政策变成可复用的几何记忆

PolicyMem: Geometric Policy Memory for LLM Governance

🌟

PolicyMem把自然语言政策编译为低秩子空间，在检测、归因、改写和复核之间复用同一份几何政策证据。五个安全基准与留出taxonomy较完整，但只覆盖英文文本治理，真实分布漂移和多模态鲁棒性未验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13734)

### 在 Agent 动手前预测这一步会推进还是伤害系统

Safety Signals to Verify NetOps Agents with Action-Level Granularity

🌟

论文为NetArena网络修复构造逐动作精确价值，并用Agent内部信号提前预测动作会推进还是伤害修复。符号回放与环境逐步校验提供强标签，但目前领域局限于网络运维，尚未真正闭环阻止危险动作。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14422)

### 长轨迹评测需要介于整局和单步之间的粒度

DynSTEER: Dynamic Stage-wise Trajectory Evaluation and Execution-time Review for Agents

🌟🌟

DynSTEER在关键执行节点动态分段审查轨迹，以里程碑图容纳多条合法路径，并提前终止不可恢复失败。6108条配对回放与显著性分析较充分，但只在ToolSandbox上验证，里程碑编译本身的成本与偏差待扩展。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14637)
