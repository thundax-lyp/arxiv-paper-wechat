---
title: "arXiv Agent 与大模型研究简报｜2026-09-23｜入选论文全览"
author: "Thundax"
summary: "本期关注智能体如何把失败经验沉淀为可靠的执行框架，以及记忆、协作和检索系统如何判断证据与状态。几篇实验也提醒我们：一致、快速或得分更高，未必意味着判断更正确。"
description: "本期关注智能体如何把失败经验沉淀为可靠的执行框架，以及记忆、协作和检索系统如何判断证据与状态。几篇实验也提醒我们：一致、快速或得分更高，未必意味着判断更正确。"
---

# arXiv Agent 与大模型研究简报｜2026-09-23｜入选论文全览

本期关注智能体如何把失败经验沉淀为可靠的执行框架，以及记忆、协作和检索系统如何判断证据与状态。几篇实验也提醒我们：一致、快速或得分更高，未必意味着判断更正确。

本期入选论文全览。

## 智能体系统与工具使用

### 科研智能体能否持续改进自己

Recursive self-improvement of AI research agents

🌟🌟🌟

科研智能体若能修改自己的执行框架，每轮改进就会成为下一轮的起点。研究用内外两层搜索和隐藏任务筛选代码改写，八天内接受七次改进，并在四个未参与筛选的基准上达到或超过强人工框架。证据来自一次长程运行，后续递归是否还能稳定增益尚不确定。

[阅读论文 PDF](https://arxiv.org/pdf/2609.26457)

### 让智能体把反复使用的策略写成程序

Grow the Harness, Not the Context: From Strategy-Free Scaffolds to Reusable Specialist Agents

🌟🌟🌟

面对相似任务，智能体常在每次对话里重做相同的控制决策。作者让执行框架从空白策略起步，用函数级失败轨迹定位修复点，再由留出任务把关回滚。六组设置中有五组平均成功率最高，模型调用下降约四分之三至九成；效果主要由网页任务验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.26760)

### 智能体技能变成习惯后，错误也会稳定重复

Making Agents More Consistent: Skills Should Form Habits for Repeat Tasks

🌟🌟🌟

研究把历史轨迹提炼为有适用范围的确定性技能，重复任务先用脚本，边界外再交给模型。在文本转查询实验中，重复派发结果保持一致且节省标记；但适用范围守卫在边界附近误放行约四分之一输入。稳定性是收益，也是把错误固定下来的风险。

[阅读论文 PDF](https://arxiv.org/pdf/2609.25299)

### 运行时策略能否让智能体稳定交付

FIRE: Failure-Informed Runtime Engineering for Reliable Language-Model Agents

🌟🌟🌟

智能体有时已找到可行解，却无法在重复运行中可靠交付。研究在曾导致失败的状态加入针对性指令或动作拒绝，不改模型权重。完整终端任务集上，强模型两次均成功率从百分之六十四点四升至七十三点六；随机对照也支持策略本身的作用。策略迁移仍需另测。

[阅读论文 PDF](https://arxiv.org/pdf/2609.26048)

### 判断代码记忆失效，要问具体主张

Impact Is Not Invalidation: Ask About the Claim, Not the Diff

🌟🌟🌟

仓库代码有改动，并不代表智能体记住的每个结论都过时。研究让模型判断某条具体主张在差异后是否仍成立，以跨提交执行的测试断言作真值；精度远高于笼统判断整段差异是否改变行为。测试函数比自由文字记忆更易核验，外推仍有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.25130)

### 长程编码任务的上下文压缩可以只删不改

CliffCompaction: Cost-Efficient Compaction for Long-Horizon Coding Agents

🌟🌟

复杂编码任务会积累上百万标记，反复改写摘要可能造成记忆漂移。研究每轮从原始内容重新压缩，只截断或丢弃，不压缩旧摘要。在若干终端与内核任务中维持或改善效果，成本最高降低约一半；长输出被删时也可能失去关键细节。

[阅读论文 PDF](https://arxiv.org/pdf/2609.26779)

### 长期记忆怎样保留当前事实和被替换的历史

MoM: Memory of Memory

🌟

检索全部旧记录会让过时事实反复进入答案，直接覆盖又让错误更新不可恢复。研究用带来源的状态图维护每个键的当前值，同时保存被替换的证据。知识更新任务里陈旧回答率下降，修订链任务也保住可恢复性；主要改善的是记忆状态有效性。

[阅读论文 PDF](https://arxiv.org/pdf/2609.25054)

### 把工具输出移出上下文，同时保留取回能力

DTOC: Dynamic Tool Output Compression for Adaptive Context Management in AI Agents

🌟

长程智能体的工具输出会挤占上下文；直接截断又可能丢失证据。研究把原文存到外部，以短占位符进入对话，需要时再恢复。六个软件工程任务中，部分模型以更少标记和成本完成更多任务；另一些模型收益不稳定，样本量也小。

[阅读论文 PDF](https://arxiv.org/pdf/2609.26121)

## 检索增强生成与知识检索

### 智能体记忆检索需要凑齐整套证据

When Does Execution Provenance Help Agent Memory Retrieval?

🌟🌟

执行历史中的答案可能分散在多次工具调用里，固定窗口检索容易只找回碎片。研究按来源构造证据单元，再用类型化关系传播分数，评估预算内是否凑齐全部支持片段。来源单元贡献最大，图传播带来较小增益；查询类型标签有人审噪声。

[阅读论文 PDF](https://arxiv.org/pdf/2609.25913)

### 多轮检索何时值得调用验证器

CoVeR: Coverage-Based Routing of Verifier Calls in Agentic Retrieval

🌟🌟

每轮检索都让验证器重读证据，成本很高。研究用冻结句向量的覆盖率门槛先识别明显证据不足的状态，只把模糊情形交给验证器。三个多跳问答基准中准确率基本不变，验证调用减少六成以上；覆盖率只能做路由，不能替代事实核验。

[阅读论文 PDF](https://arxiv.org/pdf/2609.26086)

## 多智能体与协作

### 并行编码代理的补丁为何各自通过却合并失败

Passes Alone, Fails Together: Benchmarking Semantic Coordination in Parallel LLM-Agent Development

🌟🌟

两个编码代理分别完成任务，合并后仍可能因接口语义变化相互破坏。研究用单独与合并测试差异定义干扰；已审阅真实补丁对中极少见，但刻意构造的真实代码任务中出现频繁，提前传递变更消息可恢复大部分运行。构造任务的比例不能代表生产发生率。

[阅读论文 PDF](https://arxiv.org/pdf/2609.25396)

### 多智能体一致同意也可能共同说错

Calibration Is Not Verification: Falsifiability-Aware Conformal Routing for Mixture-of-Agents

🌟🌟

多个模型相互支持不等于有外部证据。研究先把输出拆为原子主张，以跨模型支持度校准保留门槛，再测试反事实近邻验证。长文本保留主张精度明显上升；但短答案共识信号较弱，缺乏领域知识的验证器反而会拉低效果。

[阅读论文 PDF](https://arxiv.org/pdf/2609.25959)

### 千名智能体协作需要怎样的组织方式

Agensh: Scaling Organizational Intelligence to 1,024 Agents

🌟

集中调度会限制多智能体并行规模。研究让工作者在共享工作区里自行认领、执行、验证、合并，再用消息与公共上下文协调。五项高难编程任务中，代理从一名增至一百二十八名时平均通过率上升；任务数少，资源成本与规模收益需要一并衡量。

[阅读论文 PDF](https://arxiv.org/pdf/2609.26781)

## 大模型训练与对齐

### 教智能体试用陌生工具，而非一味少试

Toolcompass: Guiding Tool Trialing, Not Suppressing It

🌟

陌生工具需要探索，但过多试用会消耗交互预算。研究在后训练时按工具功能组织调用表示，拉近同功能工具，拉开不同功能工具，不要求未见工具的调用轨迹。两个基准和三类训练目标上均改善表现；效果依赖功能类别划分是否可靠。

[阅读论文 PDF](https://arxiv.org/pdf/2609.25678)

## 评测与安全

### 任务状态该提示智能体，还是由系统强制执行

How Strongly Should Task State Influence an LLM Agent?

🌟🌟🌟

长程任务有已完成、受阻或取消的步骤，光展示正确清单未必让智能体遵守。研究固定任务与模型，比较清单、自写账本、状态指令和外部门禁；门禁在航空政策任务提升强模型通过率，却在需要识别情境线索的任务伤害小模型。能否准确判断当前状态是关键边界。

[阅读论文 PDF](https://arxiv.org/pdf/2609.25686)

### 更强的验证器为何也可能拉低投票结果

When Verifiers Vote Backwards under Verdict Substitution: Signed Pivotal Value in Correlated Self-Consistency

🌟🌟

多数投票只有在一票之差时才会被替换票改变。研究按关键票型分解验证器的边际价值：一种数学题配置得到明显收益，角色反转却出现损失。主要实验使用正确性标签替票，不能直接认定真实答案投票也同样受害。

[阅读论文 PDF](https://arxiv.org/pdf/2609.26144)

### 辩论让模型趋于一致，却未必更正确

Unanimity Without Persuasion: A Single Round of Debate Erases the Disagreement That Verification Needs

🌟🌟

七名模型裁判在一次讨论后几乎全部一致，但代码判断准确率变化很小。假同伴标签也能推动大量跟随，说明一致性不必来自有说服力的论证。争议样本更容易解析失败，实际风险可能被低估；核验应尽量发生在同伴意见暴露之前。

[阅读论文 PDF](https://arxiv.org/pdf/2609.26145)

### 工具调用差评可能来自服务协议

Measuring the Serving Stack Instead of the Model: Hidden Confounds in Local Tool-Use Evaluation

🌟🌟

编码智能体要先发出可解析的工具调用，任务才会继续。研究发现本地推理服务可在模型推理前因模板标记拒绝请求，也可能把调用返回成文本；若错误没结构化保存，就会被误算为模型不会调用。不同服务栈需分别校准，结论依赖具体版本。

[阅读论文 PDF](https://arxiv.org/pdf/2609.26693)

## 应用与基准

### 金融搜索基准开始评答案背后的证据链

FinFIRST: Benchmarking Search Agents for Financial Information Retrieval, Sourcing and Traceability

🌟🌟

金融问题的正确数字仍可能来自过期或口径不一致的来源。研究由专家制作一百二十三项任务，将原始信息、来源核验和计算成答拆为原子评分项，评测十五组模型。计算与成答普遍落后于信息获取；领域构造任务能否代表开放搜索尚待观察。

[阅读论文 PDF](https://arxiv.org/pdf/2609.25192)

### 从发现漏洞到构造利用原语，编码智能体差多远

Evaluating Coding Agents on Kernel Exploit Generation

🌟🌟

能找到内核漏洞，不代表能控制地址或读写内存。研究在隔离虚拟机中提供受控工具和确定性核验器，评测四十五项 两种主流操作系统 漏洞原语任务。无参考利用时不同平台差距明显，给参考后最强配置解决三十一项；这里测的是原语而非完整入侵。

[阅读论文 PDF](https://arxiv.org/pdf/2609.25591)
