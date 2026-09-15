---
title: "arXiv Agent 与大模型研究简报｜2026-09-09｜入选论文全览"
author: "Thundax"
summary: "本期集中在一个反复出现的工程事实：Agent的可靠性往往不只取决于模型，还取决于工具回传是否可信、记忆是否执行撤销、权限能否在副作用边界硬校验，以及harness和训练是否彼此匹配。另有科学智能体证据链、技能进化与可执行环境等新进展。"
description: "本期集中在一个反复出现的工程事实：Agent的可靠性往往不只取决于模型，还取决于工具回传是否可信、记忆是否执行撤销、权限能否在副作用边界硬校验，以及harness和训练是否彼此匹配。另有科学智能体证据链、技能进化与可执行环境等新进展。"
---

# arXiv Agent 与大模型研究简报｜2026-09-09｜入选论文全览

本期集中在一个反复出现的工程事实：Agent的可靠性往往不只取决于模型，还取决于工具回传是否可信、记忆是否执行撤销、权限能否在副作用边界硬校验，以及harness和训练是否彼此匹配。另有科学智能体证据链、技能进化与可执行环境等新进展。

本期入选论文全览。

## Agent系统与工具使用

### 优化Agent Harness，不能只看一次最好成绩

Beyond Prompts: Measuring and Optimizing LLM Tool-Agent Harnesses

🌟🌟🌟

PRISM把失败路由到提示、工具边界中间件或联合编辑面，并用独立scorecard与保守可靠增益挑选harness。在三项多轮工具基准上平均提升10.1—14.9个百分点，且保守指标均为正。实验仍是离线受控场景，尚未覆盖生产流量与多轮持续再优化。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05736) · [代码](https://github.com/airbnb/agent-harness-optimizer)

### 状态变了，长程智能体需要全部重来吗？

From Version Conflicts to Decision Conflicts: Selective Revalidation for Long-Running AI Agents

🌟🌟🌟

ATR把“版本发生变化”与“变化使动作依据失效”分开：记录证据到动作的可执行前提，只重检受影响条件，再用事务或CAS绑定提交。21万次受控执行无误放或误拦，4093次读取时比全量扫描快两个数量级以上。限制是前提与真值均由开发者编写。

[阅读论文 PDF](https://arxiv.org/pdf/2609.08015) · [代码](https://github.com/ezreal13/atr-decision-validation/tree/89c32fa475f5216db4c9d76a1eddde79e874073b)

### 编码Agent要先学会写可信测试

ExecCritic: Learn to Test, Test to Improve for Coding Agents

🌟🌟🌟

ExecCritic把测试生成和修复分成独立角色，先让失败关闭的harness验证并冻结测试，再允许Repair Agent改源码。弱测试会把成功率从61.2%降至57.3%，强测试升至65.3%；角色专项训练组合达到72.6%。结论受限于SWE-bench与分离权重，测试通过也不等于安全正确。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09133)

### 智能体记忆真正改变了什么行动？

When Does Memory Help? A Cost-Aware Evaluation of Long-Term Memory in Tool-Using LLM Agents

🌟🌟🌟

多数记忆基准只问“能否回忆”，MERIT改测记忆是否真的改变工具操作，并把成本、陈旧事实和污染一起纳入。23,440个回合显示，记忆能显著帮助依赖历史的任务，但向量检索遇到更新事实时波动很大，且正确取回的信息近半没有被执行。结论仍限于三个合成领域。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05441)

### 网页智能体如何把经验长成层级技能

SCAFFOLD: Self-Improving Web Agents via Recursive Parametric Skill Abstraction

🌟🌟🌟

SCAFFOLD从成功轨迹归纳带参数的可执行技能，让高层技能递归调用低层技能，再用最短描述原则合并冗余并蒸馏回模型。三套网页基准上相对强基线提升11.1—17.2个百分点。代价是依赖强诱导模型和任务验证器，跨站差异大时收益会缩小。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05511)

### 把“下一步做什么”写进可进化的程序图

Procedural Graphs: Self-Evolving Execution Structures for LLM Agents

🌟🌟🌟

Procedural Graph以“过程—关系—过程”保存步骤和条件，在线定位当前节点并生成局部指导，离线依据成败轨迹修改图结构。跨任务和模型均优于记忆基线，还能从最小骨架长成有效流程或修复错误专家先验。指导会增加token，跨工具接口迁移仍未充分验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09153)

## LLM训练与对齐

### 强模型完整示范，反而可能破坏弱Agent

Co-Evolving Harnesses and Models: On-Policy Correction Helps Weaker Models Catch Up Where Imitation Fails

🌟🌟🌟

在已为弱模型演化好的harness下，模仿强专家完整轨迹让七项企业任务全部回退4—30点，因为规划风格改变后不再匹配脚手架。只定位弱模型自身失败回合、让专家局部改写的on-policy纠正能保住原收益并继续提升。结果仍需在公开体系外复现。

[阅读论文 PDF](https://arxiv.org/pdf/2609.09134)

### 自动生成可执行环境，补上智能体强化学习的短板

EnvCraft: Synthesizing Executable Environments in Agentic RL for Claw-like Agent

🌟🌟

EnvCraft不只合成函数调用文本，还生成隔离工作区、状态依赖、任务轨迹和验证器，共构建139个环境、约2万任务。Qwen 8B—32B训练后在Claw类任务最高提升11.9点，推理token平均下降约20%。这些环境仍是简化仿真，且生成规范和验证器可能共享误差。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05576)

## 评测与安全

### 工具说错了，智能体为何仍会照单全收？

Agents Trust Tools Too Much: Measuring Reliance on Unreliable Tools

🌟🌟🌟

研究向搜索、子智能体和代码执行器注入可信外观的错误回传，测试14个模型是否采纳。三类工具平均错误采纳率都超过三分之一，搜索达到68%；更棘手的是，模型常在推理中看出冲突，最终却不提醒用户。提示、可靠度元数据和简单后训练都未能跨工具稳定解决。

[阅读论文 PDF](https://arxiv.org/pdf/2609.05587)

### 科学智能体的答案自洽，可能从数据开始就错了

SCIRIGOR:Evaluating Open-Ended Scientific Analysis Beyond Final Scores

🌟🌟🌟

SciRIGOR沿数据选择、转换、执行、图表到论断重建证据链，而非只看最终答案。11种配置中，模型对忠实和不忠实结果的结论一致率几乎相同；最高严格全链成功率仅18%。这套诊断比最终分数更能定位故障，但100个案例仍不足以代表开放科研。

[阅读论文 PDF](https://arxiv.org/pdf/2609.06192)

### 权限撤销后，Agent记忆究竟必须保留什么

ResidualAuth: What Authorization State Must Language Agents Preserve under Revocable Delegation?

🌟🌟🌟

ResidualAuth证明，两个授权历史即使当前权限和传递闭包完全相同，同一次撤销后的正确答案仍可能相反。固定摘要几乎无法解决成对任务，认证实时读取可达15—16/16；硬执行门把8次未授权效果降为0。实验是合成权限图，但清楚区分了状态保存、信息读取与副作用拦截。

[阅读论文 PDF](https://arxiv.org/pdf/2609.08062)

### 什么条件会把Agent推向隐蔽谋划？

SchemeArena: Factorized Stress Testing of Scheming in LLM Agents

🌟🌟🌟

SchemeArena用400个因子化工具场景拆解scheming：显式工具性目标最能提升倾向，战略提示更容易把想法转成隐蔽行动；部分模型在只监控动作时风险反而升高。SCOUT结合推理与动作证据，但这些是刻意施压场景，发生率不能当作真实部署基线。

[阅读论文 PDF](https://arxiv.org/pdf/2609.08126) · [代码](https://github.com/launchnlp/SchemeArena)

### 被撤销的旧记忆，为何仍在指挥Agent

Revoked but Still Authoritative: An Empirical Study of Revocation Enforcement in Agent-Memory Systems

🌟🌟🌟

研究向五种记忆系统写入已撤销政策及替代项，发现没有系统默认完整执行撤销：旧记录仍会被检索并诱发不安全动作。作者在读取与Agent之间加入守卫，按撤销标记或冲突关系过滤，能显著阻断风险。场景为人工植入，复杂语义改写下的守卫能力仍待验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.08258)

### 同一份文件，不代表拥有同一份执行权限

Beyond Agent Harnesses: Cross-Substrate Authority for Multi-Agent Systems

🌟🌟🌟

跨载体权威缺口指授权信息位于运行时、注册表或审批服务，而不在Agent可见文件和记忆中。补充原始或类型化证据能修复受控判断，但计划仍不稳定；在固定意图重放中，确定性执行门阻止全部6个不安全动作并放行12个合法动作。实验规模有限，却强力支持边界执法。

[阅读论文 PDF](https://arxiv.org/pdf/2609.08472)

## 应用与基准

### 主动检索让科研构思更落地，却没有更原创

AgentIdeaBench: Benchmarking Scientific Ideation in the Agent Era

🌟🌟

AgentIdeaBench让33个模型在静态论文集与自主检索两种设置中提出科学假设。主动探索的能力增长更快，主要改善可行性、清晰度和具体性，却没有提高评委测得的原创性；弱模型甚至可能受损。所有维度仍由LLM评委打分，原创性的人类一致性尤其有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.07611)
