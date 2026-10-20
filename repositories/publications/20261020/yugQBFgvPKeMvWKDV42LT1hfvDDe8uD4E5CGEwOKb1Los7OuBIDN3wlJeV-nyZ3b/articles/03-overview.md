---
title: "arXiv Agent 与大模型研究简报｜2026-10-20｜入选论文全览 2/2"
author: "Thundax"
summary: "本期关注代理系统里的三个具体问题：长期记忆何时会失效，便宜控制器为何未必省钱，以及技能与评测标准怎样保持可检查。相关工作把原始历史检索、依赖撤回、固定流程和评分清单放到更明确的对照下，也揭示了不少收益成立的条件。"
description: "本期关注代理系统里的三个具体问题：长期记忆何时会失效，便宜控制器为何未必省钱，以及技能与评测标准怎样保持可检查。相关工作把原始历史检索、依赖撤回、固定流程和评分清单放到更明确的对照下，也揭示了不少收益成立的条件。"
---

# arXiv Agent 与大模型研究简报｜2026-10-20｜入选论文全览 2/2

本期关注代理系统里的三个具体问题：长期记忆何时会失效，便宜控制器为何未必省钱，以及技能与评测标准怎样保持可检查。相关工作把原始历史检索、依赖撤回、固定流程和评分清单放到更明确的对照下，也揭示了不少收益成立的条件。

本期入选论文全览。

## 评测与安全

### 评分清单会携带标准，自我审阅也可能改坏它

Rubrics Carry the Standard: Shapley Attribution for Checklist-Based LLM Judges

🌟🌟🌟

裁判过严或过松，问题可能先在评分清单。作者固定模型与输出，发现清单内容能大幅移动通过率，自我审阅还会添加未要求标准、删除关键检查。逐项归因配合来源冻结能抑制漂移，但需要标签与来源记录，不能保证发现所有新类型缺陷。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24971)

### 提示注入的服从决定可能在推理中逐步形成

The Window Is in the Reasoning: When LLM Agents Decide to Follow Prompt Injections

🌟🌟

代理读到恶意内容，并不总在那一刻决定是否照做。作者固定暴露状态后重采样后续轨迹，发现部分模型开启思考后，决定更多在推理过程中形成，单次标签重测最高有35%不一致。结论来自一个工具基准，不能直接推断所有模型的思考都会更安全。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24048)

### 消息来源、授权证明与真实执行要分开验

Who Speaks, Who Authorizes, Who Acts? Understanding Trust Boundaries in Multi-Agent LLMs

🌟🌟

代理收到消息、相信声明、获得授权和最终执行，是不同信任边界。作者分别控制这些环节：模型可能在无效证明下仍请求保护动作，但确定性工具门没有提交；相反，被攻陷主体的有效签名仍可支持假声明。授权合规因此不能替代事实核验。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24298)

### 轨迹先记一次账，随后复用审计多条政策

Write Once, Check Many: Reusable Ledgers for Post-Hoc Policy Compliance Auditing of Agent Trajectories

🌟🌟

每新增一条政策都重读全部轨迹，审计成本会随政策数量增长。作者先写政策无关的行动账本，再复用检查，在组合政策上用较小模型也可超过更大模型读全文。长工具输出和消息细节仍可能漏记，单动作政策有时用规则提取更稳。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24483)

### 记住对话，不等于能归纳用户习惯

HABIT-Bench: Evaluating Habit Induction from Longitudinal Weak Evidence in Agent Memory

🌟🌟

用户的习惯往往藏在分散选择中，还会伴随例外和变化。该基准用长会话和四选一任务测试归纳，最佳记忆方法宏观准确率仅33.61%，给出证据也未解决全部困难。结果指向适用条件建模的缺口，但合成选择题表现不能直接换算真实助手成功率。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24520)

### 科研代理的贡献应减去无模型流程本就能发现的结果

CADS: Measuring the Incremental Contribution of LLM Proposers in Sequential Biological Screens

🌟🌟

科研代理找到多少命中，可能主要取决于外围搜索流程。作者为有无模型提议者各自认证发现集合，再比较净增益，发现早期正结果在新增50个种子的复验中未稳定保持。方法有助于识别归因错误，但统计保证依赖指定零假设与污染条件。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24597)

### 少跑任务也要估准代理完整得分

HSPR: Recovering Software-Agent Benchmark Scores via Hierarchical Posterior Inference

🌟🌟

抽少量题能保住排名，不一定能估准完整成功率。作者为历史表现相近的任务组保留目标代理的不确定性，并主动选择下一题，在四个软件任务库的十分之一预算下改善估分误差。它依赖历史响应结构，遇到新任务分布仍需重新校准。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24611)

### 听懂用户说的物品，还要把话绑定到空间对象

DialogMem: Evaluating Dialogue-Grounded Embodied Memory in 3D Environments

🌟🌟

把对话塞进视觉记忆，可以答出谁说过什么，却未必能走到正确物品前。作者在真实扫描场景构造导航与问答任务，发现附加对话显著提高问答，导航却几乎无收益。诊断指向对象绑定、检索和空间定位三道瓶颈，场景真实不代表部署已验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24767)

### 真实但不适用的上下文，也会误导回答

MisleadQA: Diagnosing LLM Failures under Misleading Context

🌟🌟

检索片段可能内容属实，却讲的是另一人、另一时间或地点。作者将这种越界证据与同目标错答的虚假证据配对，发现两者都能误导模型，后者更严重。要求严格忠于上下文主要增加拒答，说明防护还需同时追踪误导率与正确率，不能只看错误下降。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24851)

### 单次决策模型会选择，却未必会核查状态

What Can't Jev Decide? Probing the Limits of One-Pass Decision Models

🌟🌟

快速决策模型能从很长输入中选出记录，却可能在合并多次状态更新时出错。作者还发现，陈旧摘要会被直接相信，置信度与交还选项难以识别这类继承错误。它更适合在已算清并核验的状态上选择，不能替代状态推理与新鲜度检查。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24929)

### 个性化记忆可能压缩用户看到的答案范围

MemBubble: Benchmarking How Agent Memory Shapes LLM Response Diversity

🌟

记忆提炼了用户偏好，也可能把这种偏好带到未必适用的新场景。作者基于真实对话构造千例测试，相对直接提供完整历史，答案熵平均减少34.7%。这揭示分布收缩，却不等于证明用户受害；是否应多样化还要结合当前任务与用户意图判断。

[阅读论文 PDF](https://arxiv.org/pdf/2610.25127)

## 应用与基准

### 真实运筹项目中，算得好还要交付可行

OR-License: Evaluating LLM Agents as Real-World Operations Research Practitioners

🌟🌟

面对原始客户材料，代理不仅要找到更优解，还必须理解全部约束。该基准用31个真实运筹项目和隐藏检查评估交付，最高严格可行率为88.39%，部署调整后的质量仍落后专家。某些可行解更优，不代表模型在同一任务集合上具备更强优化能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24087)
