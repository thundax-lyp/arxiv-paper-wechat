---
title: "arXiv Agent 与大模型研究简报｜2026-09-02｜论文全览"
author: "Thundax"
summary: "arXiv Agent 与大模型研究简报｜2026-09-02｜论文全览：收录 4 篇，覆盖 Agent系统与工具使用、多智能体与协作、评测与安全。"
description: "arXiv Agent 与大模型研究简报｜2026-09-02｜论文全览：收录 4 篇，覆盖 Agent系统与工具使用、多智能体与协作、评测与安全。"
---

# 📡 arXiv Agent 与大模型研究简报｜2026-09-02｜论文全览

> 数据源：arXiv `cs.AI` / `cs.CL` / `cs.MA` 当日新投稿  
> 范围：Agent / LLM / 多智能体相关研究

## 📋 本期总览

本期重建为可核验精选：从原始候选中重新阅读正文，收录四篇分别讨论长程工具调用、异构 Agent 安全、可验证的多智能体研究和轨迹评测的论文。它们共同指向一个工程判断：Agent 的能力主张需要能回到逐步状态、实际动作和可复现实验的证据链上。

本篇覆盖筛选后保留的全部论文，便于系统扫稿与后续检索。

| 方向 | 序号 | 论文 | 评分 | 关键词 |
|---|---:|---|---|---|
| Agent系统与工具使用 | 1 | Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls | ⭐ 8/10 | 长程工具调用、状态跟踪、自一致性 |
| 多智能体与协作 | 1 | EULER: Exploring Underused Links with Evidence-Checked Return for Multi-Agent Mathematical Discovery | ⭐ 9/10 | 多智能体、数学发现、可验证推理 |
| 评测与安全 | 1 | OpenAgentFlow: Enabling System-Wide Safety Boundaries for Heterogeneous AI Agent Fleets | ⭐ 9/10 | Agent 安全、运行时治理、工具调用 |
| 评测与安全 | 2 | trajectory-judge: What Outcome-Only LLM Judges Miss on Agent Trajectories | ⭐ 9/10 | 轨迹评测、LLM Judge、过程监督 |

## 🧭 Agent 系统 / 工具使用

---

### [1] Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls

> **原标题：** Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls

- **评分：** 8/10
- **作者/机构：** Dheeraj Mohandas Pai, Lu Xian；机构未在正文中确认
- **关键词：** 长程工具调用、状态跟踪、自一致性

**📌 研究问题与结论**  
论文用单块 MD5 的 196 个相互依赖工具调用，隔离测试 LLM 能否在长轨迹中准确携带中间状态。gpt-oss-120b 在保留自身推理上下文、并对算术工作器做多数投票时，能在多数完成运行中给出正确摘要。

**🔧 方法与系统**  
把 MD5 的准备、常数读取、轮函数、混合与收尾拆成七类工具；驱动模型负责调用顺序和四个 32 位状态词。强设置把原本的确定性工具替换为 LLM 工作器，并用投票降低算术失误。

**💡 核心创新**  
提供了逐步可对齐、按位可验证的长程工具调用基准，并把状态携带错误、算术错误与服务错误分开定位。

**🏋️ 训练与数据**  
不训练模型；使用固定短提示、温度 0 的 gpt-oss-120b。工作器路径由多个 LLM 对原子算术操作投票。

**📊 结果与证据**  
论文报告在完整 196 步链路上，多数完成运行得到正确 MD5；去除每轮保留的推理内容会使成功率显著下降。

**🧐 编辑点评**  
任务的真值和失败定位很干净，但 MD5 是高度规则化、解释负担很低的任务，不能直接外推到开放式网页或软件代理。

**⭐ 为什么值得读**  
适合关注 Agent 长程可靠性的人：它把“会不会长期保持状态”从笼统端到端分数变成可逐步审计的问题。

[arXiv 原文](https://arxiv.org/abs/2609.00012) · [PDF](https://arxiv.org/pdf/2609.00012)

---

## 🤝 多智能体 / 协作

---

### [2] EULER: Exploring Underused Links with Evidence-Checked Return for Multi-Agent Mathematical Discovery

> **原标题：** EULER: Exploring Underused Links with Evidence-Checked Return for Multi-Agent Mathematical Discovery

- **评分：** 9/10
- **作者/机构：** Ren Zhenzhuo；机构未在正文中确认
- **关键词：** 多智能体、数学发现、可验证推理

**📌 研究问题与结论**  
EULER 将跨学科的数学“桥接”作为多智能体搜索单元：只有带来源表示无法执行的操作、且能沿受检蕴含关系返回原命题的路线，才能继续获得预算。

**🔧 方法与系统**  
系统区分控制、执行、验证和数学状态四层；生成、检索、工具和证明角色提出路线，桥接检查器与独立重放器核验返回关系，六项压力测试在昂贵搜索前淘汰无效桥接。

**💡 核心创新**  
把跨域迁移中的对象映射、可执行操作增益与返回义务显式记录，并把验证结果而非叙述性成功作为继续搜索的依据。

**🏋️ 训练与数据**  
不训练模型；在 120 个近期组合数学猜想上运行，使用生成、检索、工具调用、Lean 与确定性程序等异构角色。

**📊 结果与证据**  
报告得到 10 个证明、3 个反例和 45 个有范围的部分结果；桥接压力测试将错误返回从 9 个降至 3 个。完整系统比远程检索路线多解决 5 个任务，但总体差异的 95% 区间仍跨过 0。

**🧐 编辑点评**  
论文对“目标侧成功不等于源命题成立”的风险处理得很具体，也如实报告了总体差异的不确定性；其结论目前集中在受控的近期组合数学任务。

**⭐ 为什么值得读**  
值得作为高风险推理工作流的设计参考：跨工具、跨表示的答案必须带着可检查的返回链，而不是只展示一个看似成功的中间产物。

[arXiv 原文](https://arxiv.org/abs/2609.00032) · [PDF](https://arxiv.org/pdf/2609.00032)

---

## 🛡️ 评测 / 安全

---

### [3] OpenAgentFlow: Enabling System-Wide Safety Boundaries for Heterogeneous AI Agent Fleets

> **原标题：** OpenAgentFlow: Enabling System-Wide Safety Boundaries for Heterogeneous AI Agent Fleets

- **评分：** 9/10
- **作者/机构：** Dongsheng Chen, Xiangyu Zhao, Xin Yao, Xuetao Wei；机构未在正文中确认
- **关键词：** Agent 安全、运行时治理、工具调用

**📌 研究问题与结论**  
OpenAgentFlow 将异构 Agent 的 GUI、API、工具和 LLM 规划动作统一为 AgentEvent，并在动作真正提交前由共享策略执行点拦截。它的目标是处理跨 Agent、跨执行通道累积的会话级风险。

**🔧 方法与系统**  
系统采用控制面/动作面分离：控制面保存策略、来源追踪、会话状态和审计证据；动作面在每个待执行动作前经由 Policy Enforcement Point 决策。规则更新无需修改被保护的 Agent。

**💡 核心创新**  
将“动作提交边界”而非提示词或单个工具封装定义为共同的安全接口，使策略可跨 GUI、API 和工具路径复用。

**🏋️ 训练与数据**  
不涉及模型训练；实验覆盖受控动作流、TS-Bench 的 AgentDojo-Traj、策略热更新以及 Android 实际执行。

**📊 结果与证据**  
在 300 例受控集上报告 94.00% 准确率和 95.35% 攻击阻断率；在 1,220 例 AgentDojo-Traj 上报告 97.62% 准确率、96.59% 不安全动作召回及 1.96% 安全动作误干预率。

**🧐 编辑点评**  
评测覆盖面和误干预指标较完整；但保证只适用于被接入执行点的动作，绕过这些控制器的应用行为不在其保护边界内。

**⭐ 为什么值得读**  
对要把多个 Agent 接入真实工具、GUI 或企业流程的读者有直接架构价值：安全策略应落在可执行动作的共同关口。

[arXiv 原文](https://arxiv.org/abs/2609.00015) · [PDF](https://arxiv.org/pdf/2609.00015)

---

### [4] trajectory-judge: What Outcome-Only LLM Judges Miss on Agent Trajectories

> **原标题：** trajectory-judge: What Outcome-Only LLM Judges Miss on Agent Trajectories

- **评分：** 9/10
- **作者/机构：** Hadi Mohammadi；机构未在正文中确认
- **关键词：** 轨迹评测、LLM Judge、过程监督

**📌 研究问题与结论**  
论文构造了带已知真值的工具型客服环境，比较五类 Judge 对 Agent 轨迹故障的发现、定位、分类、校准与成本。它发现只看最终结果的 Judge 对“结果看似正确但过程出错”的静默故障明显失明。

**🔧 方法与系统**  
正确的脚本化策略产生基准轨迹，故障注入器在已知步骤破坏一个环节并标注故障类型与最终结果是否存活；随后将规则、结果式 Judge、逐步 rubric Judge 和自一致性集成在 400 条轨迹上比较。

**💡 核心创新**  
把故障按最终结果是否幸存分层，避免平均召回率掩盖 Judge 对隐蔽过程错误的结构性盲区；同时公开可离线复现每个数字的原始判定。

**🏋️ 训练与数据**  
不训练 Judge；在确定性环境中评测五种判定器。数据由 100 条干净轨迹、175 条静默故障和 125 条显性故障构成。

**📊 结果与证据**  
结果式 Judge 捕获 84% 显性故障，却只捕获 45% 静默故障，并误报 33% 正确轨迹；逐步 rubric Judge 的静默召回为 77%、零误报，但成本约为 3 倍。自一致性增加成本而未带来改善。

**🧐 编辑点评**  
故障位置和标签由构造保证，因而归因清晰；不过客服环境和单故障注入与真实复杂 Agent 失败的分布仍有距离。

**⭐ 为什么值得读**  
给部署 Agent 评测和奖励模型的人一个明确警告：最终答案正确不是过程可信的证据，评测至少要报告结果幸存故障的召回。

[arXiv 原文](https://arxiv.org/abs/2609.00038) · [PDF](https://arxiv.org/pdf/2609.00038)
