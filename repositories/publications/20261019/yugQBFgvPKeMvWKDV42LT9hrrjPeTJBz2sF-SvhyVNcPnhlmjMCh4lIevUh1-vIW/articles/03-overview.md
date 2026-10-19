---
title: "arXiv Agent 与大模型研究简报｜2026-10-19｜入选论文全览 2/2"
author: "Thundax"
summary: "智能体的涨分、省钱与安全，都需要追问收益来自哪里、保证落在哪一层。本期关注运行框架演化的收益归因、失败经验的迁移边界、共享窗口中的通信代价，以及安全检测到执行之间的证据路径；全览另涵盖记忆、工具协作、训练和办公任务。"
description: "智能体的涨分、省钱与安全，都需要追问收益来自哪里、保证落在哪一层。本期关注运行框架演化的收益归因、失败经验的迁移边界、共享窗口中的通信代价，以及安全检测到执行之间的证据路径；全览另涵盖记忆、工具协作、训练和办公任务。"
---

# arXiv Agent 与大模型研究简报｜2026-10-19｜入选论文全览 2/2

智能体的涨分、省钱与安全，都需要追问收益来自哪里、保证落在哪一层。本期关注运行框架演化的收益归因、失败经验的迁移边界、共享窗口中的通信代价，以及安全检测到执行之间的证据路径；全览另涵盖记忆、工具协作、训练和办公任务。

本期入选论文全览。

## 评测与安全

### 自动优化智能体的涨分，有多少来自捷径和更多算力

Harness-Delta Attribution: Dissecting Gains From Harness Evolution

🌟🌟🌟

自动改写提示、技能与运行框架后，涨分可能来自适配了基准或增加计算。研究用捷径审计和成本匹配对照拆解收益：二十一个显著涨分设置中，过拟合平均解释百分之五十四，算力解释百分之十四。剩余量只是潜在迁移收益的上界，仍需保留集验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22466)

### 检测器明明发现了风险，为什么框架仍然放行

Monitor-Validity Failures: LLM Safety Evidence Paths at Evolving Framework Boundaries

🌟🌟🌟

安全组件运行正常，不保证证据到达阻断逻辑。研究对公开修复的父版和修正版放入相同已知载荷，分别检查是否看见证据、是否触发决策，确认十八个边界案例。其中十四个到达执行边界，但含配置和合成消费者条件；这是针对修复的案例研究，不能估计缺陷普遍程度。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23362)

### 作者参与的论文核查，能确认什么又会遗漏什么

Author-in-the-loop Agentic Reproducibility Auditing for a Machine Learning Conference

🌟🌟

复现核查不只需要找到疑点，还要让问题和回复有可追踪的关闭依据。研究让检查器、验证器与作者共同审查三十六篇论文的一百三十三项图表，二十项问题获作者认可。不过六十八项完整结果受资源限制未核实，作者认可也不能替代独立复现。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22465)

### 命令行助手完成了任务，却可能没有完成协作

RealCLI: Toward a Unified Evaluation of Human-Agent Collaboration for CLI Agents

🌟🌟🌟

一次性执行成绩会漏掉逐步反馈、澄清和操作约束。研究把相同命令行任务配成直接执行与交互协作两版，发现某配置执行成功率百分之五十八点五，联合协作成功仅百分之八点五。配对设计揭示隐藏差距，但模拟用户与模型裁判仍不能替代真实用户体验。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22507)

### 医疗代理讨论时，外部判断如何伪装成证据

The Model Knows Better: Defending Medical Multi-Agent Systems Against Prompt Injection

🌟🌟

医疗多智能体会把外部材料中的指令性判断当成事实，继续传给其他角色。研究先拆开事实发现与判断，筛掉缺少支持的判断后重跑，部分问答设置的攻击成功率降至百分之四至七。检查器仍会误判，事实本身被篡改也难以防住，这些基准结果不构成临床安全证明。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22594)

### 错误答案配上好解释，反而更容易骗过视觉裁判

A Plausible Explanation Is Enough to Mislead Multimodal Judges

🌟🌟🌟

裁判可能被解释说服，却没有更会区分正确与错误。研究固定图像、问题和答案，只改变解释，在十四个多模态模型上观察到错误拒绝率平均下降约十三个百分点。分析指向判断阈值改变，而非平均区分能力提升；结论限于受控视觉问答，不能概括所有裁判任务。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22631)

### 把推理翻译成状态变化，区分局部错误与走进死路

ARBOR: Locating Reasoning Failures in Long Chains of Thought through Reasoning State Tracking

🌟🌟

推理步骤合法，不代表这条路线还能解出问题。研究把模型轨迹解析成规范操作，用确定性状态树检查动作是否合法、分支是否仍有解。在三类可验证任务中，它提供比最终答对率更细的诊断。但解析器会出错，论文提出的纠正干预尚未经过实验验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22717)

### 跨模型检测幻觉，能否利用注意力结构而非固定特征

LEMON: Equivariant Learning over Attention Maps for Zero-Shot Misbehavior Monitoring on New LLMs

🌟🌟

为一个模型训练的检测器，换模型后可能失效。研究把注意力表示成适应头排列和网络深度的图，再结合词元概率，在多模型留一测试中改善幻觉与越狱检测。它需要访问内部注意力，验证主要来自较小文本模型，尚不能直接用于多数托管接口和多模态系统。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22723)

### 编码题给多少接口提示，才不会把答案一起给出去

Between Spoilers and Guesswork: Avoiding Over-Specification in Coding Benchmarks

🌟🌟🌟

编码任务必须说明测试需要什么接口，但提示也可能泄漏解题语义。研究沿测试依赖提取标识符与声明，再比较不同提示的影响。一个六十八题子集通过率从百分之二十九点四升至七十二点一。如此大的变化说明提示应被审计，不能直接算成模型能力提高。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22760)

### 外部文档有好指令，也有坏指令，怎样分别处理

Identify, Classify, Act: Per-Instruction Controlled Compliance for LLMs over External Data

🌟🌟

工具代理不能拒绝所有外部指令，否则正常任务也难完成。研究先识别文档中的指令，再分类决定是否执行，并分别训练裁判与策略，在多个场景兼顾安全和实用性。验证依赖固定攻击类型，尚未覆盖自适应攻击、非英语及很长交互链，裁判误差也可能传递。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22874)

### 仓库注入可能先诱导宽授权，再利用保存的规则

From Approval to Abuse: Privilege Escalation Attacks on Harness-Protected Coding Agents

🌟🌟🌟

恶意仓库内容不一定立刻要求危险动作，也可能先把宽泛权限包装成正常工作需要。研究先测规则申请，再假设用户批准并保存，测试后续复用。一百案中五十八案诱发申请，其中四十七案完成后续目标；后一个比例是条件成功率，不能当成用户批准概率或总体攻陷率。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22987)

### 最后一句拒绝，掩盖不了此前已经发出的调用

Before Retrieval Begins: Safety and Tool-Use Decisions in LLM Agents

🌟🌟🌟

只检查最终文字，会漏掉工具边界上的安全失败。研究分开记录固定地址检索的调用准入和最终回复，发现开放模型获准的有害调用中，约三分之一最后仍给出拒绝。实验说明动作与语言需要联合验收，但只测检索调用，不能直接证明有状态的危险动作已经成功。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23071)

### 攻击失败之后，还要看代理做了什么、任务是否完成

Ignored, Not Refused: What Low Prompt-Injection Success Rates Hide in Small Tool-Using Agents

🌟🌟🌟

攻击成功率低，不代表代理识别并拒绝了攻击，也可能只是忽略，或正常任务一起失败。研究审计三万三千条轨迹，失败攻击多数属于忽略，并发现部分安全结果仍未完成用户任务。忽略本身不等于不安全，比例又受提示和框架影响，应把安全、效用与行为共同展示。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23254)

### 切换请求语言，可能先改变工具准入而非最终回复

Disentangling Language Effects on Tool Admission and Post-Retrieval Safety

🌟🌟

多语言安全差异可能发生在调用前，也可能发生在返回内容之后。研究独立切换请求、网页及回复语言，观察到非英语请求的调用准入上升。匹配调用后的变化主要来自部分语言，低有害输出也可能是不理解；不同条件模型覆盖不齐，不能概括所有语言更不安全。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23093)

## 应用与基准

### 办公任务放回持续组织上下文，部分完成就不够了

OfficeTown: Generative Organizations for Evolving Agent Intelligence

🌟🌟

办公助手要处理权限、旧材料和同事交接，孤立指令难覆盖这些条件。研究从持续模拟组织中提取四百零六项任务，按产物与关键要求验收。最强模型完整通过率百分之七十四点四，较高加权分仍掩盖关键遗漏；模拟组织和自动评分不能等同真实企业上线表现。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23194)
