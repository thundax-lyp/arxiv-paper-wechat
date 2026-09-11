---
title: "arXiv Agent 与大模型研究简报｜2026-09-01｜论文全览"
author: "Thundax"
summary: "arXiv Agent 与大模型研究简报｜2026-09-01｜论文全览：收录 20 篇，覆盖 Agent系统与工具使用、LLM推理与规划、RAG与知识检索、多智能体与协作、LLM训练与对齐、评测与安全。"
description: "arXiv Agent 与大模型研究简报｜2026-09-01｜论文全览：收录 20 篇，覆盖 Agent系统与工具使用、LLM推理与规划、RAG与知识检索、多智能体与协作、LLM训练与对齐、评测与安全。"
---

# 📡 arXiv Agent 与大模型研究简报｜2026-09-01｜论文全览

> 数据源：arXiv `cs.AI` / `cs.CL` / `cs.MA` 当日新投稿  
> 范围：Agent / LLM / 多智能体相关研究

## 📋 本期总览

本期从 221 篇可编辑候选中保留 20 篇。关注点集中在工具调用与工作记忆、可审计评测，以及搜索、摘要和技能生命周期带来的安全边界。精选论文优先呈现具有可复核实验或明确风险度量的工作。

本篇覆盖筛选后保留的全部论文，便于系统扫稿与后续检索。

| 方向 | 序号 | 论文 | 评分 | 关键词 |
|---|---:|---|---|---|
| Agent系统与工具使用 | 1 | 研究速览：A^2Agent: Action-Aware Reinforcement Learning for Repository-Level Code Localization Agents | ⭐ 8/10 | coding-agent、reinforcement-learning、repository |
| Agent系统与工具使用 | 2 | 研究速览：Measure Before You Manage: Evaluating Agent Working Memory in Coding Agents | ⭐ 8/10 | memory、coding-agent、evaluation |
| Agent系统与工具使用 | 3 | 研究速览：TRACER: Per-Tool Context Retention for LLM Agents via Consequence-Attributed Reinforcement Learning | ⭐ 7/10 | memory、tool-use、compression |
| Agent系统与工具使用 | 4 | 研究速览：Learning to Evaluate Before Improving: Automatic Rubric Induction for Automatic Research Agents | ⭐ 7/10 | research-agent、rubric、verification |
| LLM推理与规划 | 1 | 研究速览：Learning Simple Test-Time Environments for LLM Web Agents | ⭐ 7/10 | web-agent、test-time-learning、environment |
| RAG与知识检索 | 1 | 研究速览：AgenticRag-R1: Agentic Reinforcement Learning with Stack Memory for Multi-Step Reasoning, Retrieval and Memorizing | ⭐ 7/10 | agentic-rag、reinforcement-learning、memory |
| 多智能体与协作 | 1 | 研究速览：SwarmBench: Can Large Language Models Act as Agent Swarm Orchestrators? | ⭐ 7/10 | agent-swarm、orchestration、benchmark |
| LLM训练与对齐 | 1 | 研究速览：InternReviewer & InternAdvocate: Objective Reward and Evaluation for Agentic Reinforcement Learning in Peer Review and Rebuttal | ⭐ 7/10 | agentic-rl、peer-review、retrieval |
| LLM训练与对齐 | 2 | 研究速览：LiteSearch-VL: Small Multimodal Search Agents via Trajectory Distillation and Synthetic Step-DPO | ⭐ 7/10 | multimodal、search-agent、distillation |
| LLM训练与对齐 | 3 | 研究速览：CAST: Critique-Aware Supervision for Training Reliable Long-Horizon Tool-Calling Agents | ⭐ 7/10 | tool-agent、reliability、critique |
| 评测与安全 | 1 | 研究速览：Facts Without Rules: Boundary Metadata Collapse in Multi-Agent LLM Handoffs | ⭐ 10/10 | multi-agent、privacy、handoff |
| 评测与安全 | 2 | 研究速览：Lazy Grounding: Attacking Search Agents with Factual Evidence | ⭐ 10/10 | search-agent、security、grounding |
| 评测与安全 | 3 | 研究速览：Terminal-Bench-LILT: Multilingual Agentic Coding Benchmark Grounded in Language, Region, and Culture | ⭐ 9/10 | coding-agent、multilingual、benchmark |
| 评测与安全 | 4 | 研究速览：APIFlow-Bench: Measuring Whether Agents Survive Long, Dependent API Workflows | ⭐ 9/10 | tool-use、benchmark、api |
| 评测与安全 | 5 | 研究速览：Will the User Ever Know? Covert Indirect Prompt Injection Attacks on Tool-Using LLM Agents | ⭐ 9/10 | prompt-injection、tool-agent、security |
| 评测与安全 | 6 | 研究速览：Beyond the Answer Key: Robustness Evaluation of Large Language Models for Step-Level Mathematical Verification | ⭐ 8/10 | reasoning、verification、math |
| 评测与安全 | 7 | 研究速览：Localizing Emergent Failures in Agentic AI: Recovering Minimal Repair Families via Counterfactual Replay | ⭐ 8/10 | multi-agent、failure-analysis、counterfactual |
| 评测与安全 | 8 | 研究速览：EvoSkill Injection: Red-Teaming Autonomous Skill Generation and Evolution in Self-Evolving Agents | ⭐ 8/10 | skill、red-teaming、security |
| 评测与安全 | 9 | 研究速览：SemTrace: Source-Grounded Semantic Signatures for Tracing LLM Exposure to Protected Documents | ⭐ 7/10 | provenance、watermark、document |
| 评测与安全 | 10 | 研究速览：You Know What I Mean: A Benchmark for Agentic Conversational Reference Grounding | ⭐ 7/10 | tool-use、conversation、benchmark |

## 🧭 Agent 系统 / 工具使用

---

### [1] 研究速览：A^2Agent: Action-Aware Reinforcement Learning for Repository-Level Code Localization Agents

> **原标题：** A^2Agent: Action-Aware Reinforcement Learning for Repository-Level Code Localization Agents

- **评分：** 8/10
- **作者/机构：** Doyeon Kim, Suyoung Bae, Yumin Lee, Jee-Hyong Lee；机构未在本次正文核查中确认
- **关键词：** coding-agent、reinforcement-learning、repository

**📌 研究问题与结论**  
以动作级强化学习提升仓库级代码定位智能体的发现与提交能力。

**🔧 方法与系统**  
为发现和确认代码区域设置逐回合奖励，并做按探索上下文分组的优势估计。

**💡 核心创新**  
将稀疏轨迹奖励细化为可归因的单步信号。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
在 SWE-Bench Verified 与 Pro 上报告平均 F1 提升，并公开代码。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.29831) · [PDF](https://arxiv.org/pdf/2608.29831) · [代码](https://github.com/donian00/A2Agent](https://github.com/donian00/A2Agent)

---

### [2] 研究速览：Measure Before You Manage: Evaluating Agent Working Memory in Coding Agents

> **原标题：** Measure Before You Manage: Evaluating Agent Working Memory in Coding Agents

- **评分：** 8/10
- **作者/机构：** Le Chen, Zishen Wan, Baixi Sun, Xiaolong Ma, Chih-Hsuan Yang, Feng Yan, Sheng Di, Franck Cappello, Rajeev Thakur；机构未在本次正文核查中确认
- **关键词：** memory、coding-agent、evaluation

**📌 研究问题与结论**  
分析编码智能体工作记忆中不同对象的保留与压缩差异。

**🔧 方法与系统**  
在 55 条归档轨迹上比较对象感知压缩和检索策略。

**💡 核心创新**  
将工作记忆按指令、工件和工具输出等语义角色建模。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
发现校准收益未必迁移到留出任务，相同 token 预算也不等于相同服务成本。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.31057) · [PDF](https://arxiv.org/pdf/2608.31057)

---

### [3] 研究速览：TRACER: Per-Tool Context Retention for LLM Agents via Consequence-Attributed Reinforcement Learning

> **原标题：** TRACER: Per-Tool Context Retention for LLM Agents via Consequence-Attributed Reinforcement Learning

- **评分：** 7/10
- **作者/机构：** Ziqi Lin, Ye Wu, Mengying Yang, Xu Liu, Yizhou Liu, Qiang Ke, Qin Guo；机构未在本次正文核查中确认
- **关键词：** memory、tool-use、compression

**📌 研究问题与结论**  
为企业数据智能体按工具输出的后果决定上下文保留比例。

**🔧 方法与系统**  
用轻量 REINFORCE 策略联合优化任务成功、token 消耗和重调工具代价。

**💡 核心创新**  
将压缩后的工具重调用后果显式纳入上下文压缩目标。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
论文报告在长上下文工具链中减少无效压缩带来的额外执行；需关注结果的业务任务可迁移性。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.29363) · [PDF](https://arxiv.org/pdf/2608.29363)

---

### [4] 研究速览：Learning to Evaluate Before Improving: Automatic Rubric Induction for Automatic Research Agents

> **原标题：** Learning to Evaluate Before Improving: Automatic Rubric Induction for Automatic Research Agents

- **评分：** 7/10
- **作者/机构：** Xuehai Wang, Haowei Qin, Tongxin Liu, Junkai Li, Buqiang Xu, Jintian Zhang, Yijun Chen, Zirui Xue, Shumin Deng；机构未在本次正文核查中确认
- **关键词：** research-agent、rubric、verification

**📌 研究问题与结论**  
在科研智能体执行前自动归纳可执行评分量规，再用于指导、核验与迭代修订。

**🔧 方法与系统**  
将欠定义指令拆为科学目标，并结合文献和任务可见数据生成可验证准则。

**💡 核心创新**  
把研究任务的隐含成功条件转为执行期可检查的量规。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
论文说明该框架覆盖检索、分析、实验与报告；开放式科研任务的外部评价仍关键。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.31076) · [PDF](https://arxiv.org/pdf/2608.31076) · [代码](https://github.com/zjunlp/AutoSciRub)

---

## 🧠 LLM 推理 / 规划

---

### [5] 研究速览：Learning Simple Test-Time Environments for LLM Web Agents

> **原标题：** Learning Simple Test-Time Environments for LLM Web Agents

- **评分：** 7/10
- **作者/机构：** Junxuan Li, Zijun Liu, Ziyi Huang, Peng Li, Yuzhou Liu, Ming Yan, Yang Liu；机构未在本次正文核查中确认
- **关键词：** web-agent、test-time-learning、environment

**📌 研究问题与结论**  
让网页智能体在推理时分解环境观测，并从简单子环境获得可组合经验。

**🔧 方法与系统**  
以无标签的测试时环境分解在试验步骤中调整行为。

**💡 核心创新**  
把环境结构而非仅任务轨迹作为测试时适应对象。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
论文在合成与真实基准上报告复杂环境中的适应收益；泛化边界仍依赖任务设置。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.29305) · [PDF](https://arxiv.org/pdf/2608.29305) · [代码](https://github.com/THUNLP-MT/TTED)

---

## 📚 RAG / 知识检索

---

### [6] 研究速览：AgenticRag-R1: Agentic Reinforcement Learning with Stack Memory for Multi-Step Reasoning, Retrieval and Memorizing

> **原标题：** AgenticRag-R1: Agentic Reinforcement Learning with Stack Memory for Multi-Step Reasoning, Retrieval and Memorizing

- **评分：** 7/10
- **作者/机构：** Xinke Jiang, Yue Fang, Zhibang Yang, Jiaran Gao, Zhixin Zhang, Tao Feng, Rihong Qiu, Wentao Zhang, Hongxin Ding, Ruizhe Zhang, Yongxin Xu, Yuheng Huang, Xu Chu, Junfeng Zhao, Yasha Wang；机构未在本次正文核查中确认
- **关键词：** agentic-rag、reinforcement-learning、memory

**📌 研究问题与结论**  
通过记忆栈和细粒度动作奖励统一多步检索、推理与记忆。

**🔧 方法与系统**  
使用层级动作感知奖励及信息感知的轨迹拒绝机制训练 agentic RAG。

**💡 核心创新**  
将检索与记忆的信用分配推进到动作层面。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
论文称在多跳、开放域和智能体推理基准上优于强基线；需结合公开复现判断幅度。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.29622) · [PDF](https://arxiv.org/pdf/2608.29622) · [代码](https://github.com/jiangxinke/Harness-RL/tree/AgenticRAG-R1-Whitebox](https://github.com/jiangxinke/Harness-RL/tree/AgenticRAG-R1-Whitebox)

---

## 🤝 多智能体 / 协作

---

### [7] 研究速览：SwarmBench: Can Large Language Models Act as Agent Swarm Orchestrators?

> **原标题：** SwarmBench: Can Large Language Models Act as Agent Swarm Orchestrators?

- **评分：** 7/10
- **作者/机构：** Jinshan Gao, Zhuoran Jin, Tianyi Men, Kang Liu, Jun Zhao；机构未在本次正文核查中确认
- **关键词：** agent-swarm、orchestration、benchmark

**📌 研究问题与结论**  
评测模型动态编排智能体群的准确率、效率、成本与过程质量。

**🔧 方法与系统**  
以 SwarmBench 建立多维评测，并用经验提炼与回放改进编排。

**💡 核心创新**  
将编排过程质量纳入 agent swarm 能力评价。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
论文报告模型间存在明显编排差异，并给出 SwarmExp 改进结果。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.30661) · [PDF](https://arxiv.org/pdf/2608.30661) · [代码](https://github.com/ying1973/SwarmBench](https://github.com/ying1973/SwarmBench)

---

## ⚙️ LLM 训练 / 对齐

---

### [8] 研究速览：InternReviewer & InternAdvocate: Objective Reward and Evaluation for Agentic Reinforcement Learning in Peer Review and Rebuttal

> **原标题：** InternReviewer & InternAdvocate: Objective Reward and Evaluation for Agentic Reinforcement Learning in Peer Review and Rebuttal

- **评分：** 7/10
- **作者/机构：** Xuerui Su, Liya Guo, Qizhi Pei, Qipeng Guo, Zhongbo Tian, Lijun Wu, Kai Chen, Zun Wang；机构未在本次正文核查中确认
- **关键词：** agentic-rl、peer-review、retrieval

**📌 研究问题与结论**  
将学术审稿与回复建模为带检索工具的智能体强化学习，并以可验证引用约束奖励。

**🔧 方法与系统**  
基于 OpenReview 审稿—回复数据、arXiv 检索和分解式客观奖励训练两个专用智能体。

**💡 核心创新**  
把引用核验和结构合规纳入可分解奖励，而非只依赖 LLM 裁判。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
论文报告推理深度和引用准确性提升；对真实审稿质量的外部验证仍有限。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.28612) · [PDF](https://arxiv.org/pdf/2608.28612) · [代码](https://github.com/openreview/openreview-py](https://github.com/openreview/openreview-py)

---

### [9] 研究速览：LiteSearch-VL: Small Multimodal Search Agents via Trajectory Distillation and Synthetic Step-DPO

> **原标题：** LiteSearch-VL: Small Multimodal Search Agents via Trajectory Distillation and Synthetic Step-DPO

- **评分：** 7/10
- **作者/机构：** Saeed Khaki, Nima Safaei, Kamal Ginotra；机构未在本次正文核查中确认
- **关键词：** multimodal、search-agent、distillation

**📌 研究问题与结论**  
研究将视觉搜索智能体轨迹蒸馏到小型视觉语言模型的有效成分。

**🔧 方法与系统**  
以公开轨迹、LoRA 和针对局部失败的合成偏好进行逐步 DPO。

**💡 核心创新**  
把蒸馏收益分解为工具行为学习，而非笼统的准确率提升。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
在多项视觉问答基准上评估 12,400 条 rollout；结果强调行为转移。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.29357) · [PDF](https://arxiv.org/pdf/2608.29357) · [代码](https://github.com/mindee/doctr](https://github.com/mindee/doctr)

---

### [10] 研究速览：CAST: Critique-Aware Supervision for Training Reliable Long-Horizon Tool-Calling Agents

> **原标题：** CAST: Critique-Aware Supervision for Training Reliable Long-Horizon Tool-Calling Agents

- **评分：** 7/10
- **作者/机构：** Amir Saeidi, Zehua Zhang, Rishitosh Singh, Naman Ahuja, Vivek Gupta, Ali Payani, Gaowen Liu, Jayanth Srinivasa, Chitta Baral；机构未在本次正文核查中确认
- **关键词：** tool-agent、reliability、critique

**📌 研究问题与结论**  
从失败轨迹生成动作级批评理由，用于训练长程工具调用智能体的可靠性。

**🔧 方法与系统**  
把稀疏任务结果转为结构化批评监督，再用于策略优化。

**💡 核心创新**  
将可执行错误的解释作为训练信号，而不只优化任务成败。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
论文围绕跨步骤、跨试次的不可逆失败评估；真实生产部署的覆盖范围仍有限。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.30147) · [PDF](https://arxiv.org/pdf/2608.30147)

---

## 🛡️ 评测 / 安全

---

### [11] 研究速览：Facts Without Rules: Boundary Metadata Collapse in Multi-Agent LLM Handoffs

> **原标题：** Facts Without Rules: Boundary Metadata Collapse in Multi-Agent LLM Handoffs

- **评分：** 10/10
- **作者/机构：** Yian Wang, Agam Goyal, Eshwar Chandrasekharan, Hari Sundaram；机构未在本次正文核查中确认
- **关键词：** multi-agent、privacy、handoff

**📌 研究问题与结论**  
指出多智能体交接摘要会保留业务事实却丢失使用边界，从而造成隐私泄漏。

**🔧 方法与系统**  
在受控协作测试床上测量边界标记与业务事实在不同摘要预算下的存活率。

**💡 核心创新**  
将摘要压缩中的边界元数据丢失定义为可量化的 summary collapse。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
25 词预算下边界标记存活率约降至 0.57，而业务事实仍接近上限。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.29028) · [PDF](https://arxiv.org/pdf/2608.29028) · [代码](https://github.com/CrowdDynamicsLab/facts_without_rules_emnlp_2026](https://github.com/CrowdDynamicsLab/facts_without_rules_emnlp_2026)

---

### [12] 研究速览：Lazy Grounding: Attacking Search Agents with Factual Evidence

> **原标题：** Lazy Grounding: Attacking Search Agents with Factual Evidence

- **评分：** 10/10
- **作者/机构：** Yulin Zhang, Yukun Huang, Sanxing Chen, Tianyi Lin, Ziang Yang, Xunjian Yin, Bhuwan Dhingra；机构未在本次正文核查中确认
- **关键词：** search-agent、security、grounding

**📌 研究问题与结论**  
揭示搜索智能体会被内容真实但针对邻近问题的干扰证据带偏。

**🔧 方法与系统**  
向检索语料注入支持改写问题的邻近证据，测试回答采纳偏差。

**💡 核心创新**  
将检索安全从虚假信息扩展到事实正确的误导性上下文。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
12 个模型—基准组合平均准确率下降 5.9 点，最高下降 17.3 点。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.30303) · [PDF](https://arxiv.org/pdf/2608.30303) · [代码](https://github.com/frankyzha/lazy-grounding](https://github.com/frankyzha/lazy-grounding)

---

### [13] 研究速览：Terminal-Bench-LILT: Multilingual Agentic Coding Benchmark Grounded in Language, Region, and Culture

> **原标题：** Terminal-Bench-LILT: Multilingual Agentic Coding Benchmark Grounded in Language, Region, and Culture

- **评分：** 9/10
- **作者/机构：** Yunsu Kim, Kaden Uhlig, Ashwin Purohit, Milind Agarwal, Patrick Simianer, Anil Arslan, Kiarash Mokhtari, Thomas Zenkel, Johannes Mosig, Gabriel Bretschner, Shamik Bose, Joern Wuebker, John DeNero；机构未在本次正文核查中确认
- **关键词：** coding-agent、multilingual、benchmark

**📌 研究问题与结论**  
构建覆盖十种语言的 300 道真实编程任务，测量编码智能体的多语能力缺口。

**🔧 方法与系统**  
由母语程序员编写并经多阶段质检，对六个前沿模型进行评测。

**💡 核心创新**  
把语言、区域与文化相关的软件问题纳入终端编码任务。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
最强模型通过率为 63.1%，且表现与通用编码榜单不一致。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.28641) · [PDF](https://arxiv.org/pdf/2608.28641) · [代码](https://github.com/lilt/terminal-bench-lilt](https://github.com/lilt/terminal-bench-lilt)

---

### [14] 研究速览：APIFlow-Bench: Measuring Whether Agents Survive Long, Dependent API Workflows

> **原标题：** APIFlow-Bench: Measuring Whether Agents Survive Long, Dependent API Workflows

- **评分：** 9/10
- **作者/机构：** Zelin Wan, Arash Nourian, Xiaoxiao Li, Nihar Nandan, Kamalakannan Nandagopal；机构未在本次正文核查中确认
- **关键词：** tool-use、benchmark、api

**📌 研究问题与结论**  
提出可审计的长程 REST API 工作流基准，拆分工具智能体的工程能力。

**🔧 方法与系统**  
程序生成 API 世界，并以自检、oracle 与对抗审计保障题目和评分器有效。

**💡 核心创新**  
用真实调用链和数据流溯源衡量成功，而非仅记录任务是否完成。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
论文披露发现并修复六个评分器漏洞；基准更适合定位生产式失败。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.29128) · [PDF](https://arxiv.org/pdf/2608.29128) · [代码](https://github.com/postmanlabs/APIFlow-Bench)

---

### [15] 研究速览：Will the User Ever Know? Covert Indirect Prompt Injection Attacks on Tool-Using LLM Agents

> **原标题：** Will the User Ever Know? Covert Indirect Prompt Injection Attacks on Tool-Using LLM Agents

- **评分：** 9/10
- **作者/机构：** Yunseok Lee, Yunji Kim, Woojin Lee；机构未在本次正文核查中确认
- **关键词：** prompt-injection、tool-agent、security

**📌 研究问题与结论**  
将间接提示注入区分为用户可察觉与不可察觉的成功，提出隐蔽成功率。

**🔧 方法与系统**  
分析工具调用智能体被注入后的轨迹与最终回复，分离 CSR 和 OSR。

**💡 核心创新**  
以用户最终是否能发现越权行为补充传统攻击成功率。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
论文显示结束行为会影响攻击的可见性；该指标有助于更贴近用户风险。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.30362) · [PDF](https://arxiv.org/pdf/2608.30362)

---

### [16] 研究速览：Beyond the Answer Key: Robustness Evaluation of Large Language Models for Step-Level Mathematical Verification

> **原标题：** Beyond the Answer Key: Robustness Evaluation of Large Language Models for Step-Level Mathematical Verification

- **评分：** 8/10
- **作者/机构：** Fateme Mazdarani, Carlos Toxtli；机构未在本次正文核查中确认
- **关键词：** reasoning、verification、math

**📌 研究问题与结论**  
评测 LLM 对非标准但正确的数学推理链进行逐步核验的稳健性。

**🔧 方法与系统**  
在线性方程受控基准中同时判断答案、步骤正确性和首个错误步骤。

**💡 核心创新**  
区分规范解与逻辑等价扰动解，直接暴露验证器的形式依赖。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
若干开源模型在有效扰动链上的误拒率达到 75.6%–85.3%。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.28725) · [PDF](https://arxiv.org/pdf/2608.28725) · [代码](https://github.com/mazdarani/beyond-answer-key)

---

### [17] 研究速览：Localizing Emergent Failures in Agentic AI: Recovering Minimal Repair Families via Counterfactual Replay

> **原标题：** Localizing Emergent Failures in Agentic AI: Recovering Minimal Repair Families via Counterfactual Replay

- **评分：** 8/10
- **作者/机构：** Bingjie Li, Yumeng Song, Zhongming Yao, Tianyi Li；机构未在本次正文核查中确认
- **关键词：** multi-agent、failure-analysis、counterfactual

**📌 研究问题与结论**  
为多智能体失败提出最小修复集合恢复问题，并定位共同必要的修复事件。

**🔧 方法与系统**  
从执行依赖图切片，构造可行候选并以反事实回放验证。

**💡 核心创新**  
恢复全部包含最小的修复族，避免把协同故障误归因于单点。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
在受控基准和四智能体试验中报告精确匹配，并减少约一半回放调用。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.29228) · [PDF](https://arxiv.org/pdf/2608.29228)

---

### [18] 研究速览：EvoSkill Injection: Red-Teaming Autonomous Skill Generation and Evolution in Self-Evolving Agents

> **原标题：** EvoSkill Injection: Red-Teaming Autonomous Skill Generation and Evolution in Self-Evolving Agents

- **评分：** 8/10
- **作者/机构：** Doyun Kim, Chanwoo Kim, Sugyeong Eo, Yeo-Chan Yoon, Chanjun Park；机构未在本次正文核查中确认
- **关键词：** skill、red-teaming、security

**📌 研究问题与结论**  
针对自演化智能体的技能生成、存储与复用链路提出技能注入威胁模型。

**🔧 方法与系统**  
构建迭代生成、升级和强化交互的红队框架与恶意轨迹基准。

**💡 核心创新**  
把安全边界从单轮提示扩展到长期技能生命周期。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
论文提供 EvoSkillBench；攻击覆盖与现实技能生态的匹配仍需持续检验。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.30429) · [PDF](https://arxiv.org/pdf/2608.30429)

---

### [19] 研究速览：SemTrace: Source-Grounded Semantic Signatures for Tracing LLM Exposure to Protected Documents

> **原标题：** SemTrace: Source-Grounded Semantic Signatures for Tracing LLM Exposure to Protected Documents

- **评分：** 7/10
- **作者/机构：** Junyan Zhang, Yudong Zeng, Yongwei Huang, Zuhao Ouyang, Hong Chen, Xuming Hu；机构未在本次正文核查中确认
- **关键词：** provenance、watermark、document

**📌 研究问题与结论**  
提出从受保护文档事实命题构造语义签名，以检测生成文本是否受特定副本影响。

**🔧 方法与系统**  
在固定评审槽中植入可验证事实选择，并由冻结 NLI 模型解码。

**💡 核心创新**  
使用来源支持的语义证据，而非词面水印或模型内部概率偏置。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
论文面向指定副本泄露检测；对复杂提示攻击与不同任务的稳健性仍需核验。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.29575) · [PDF](https://arxiv.org/pdf/2608.29575)

---

### [20] 研究速览：You Know What I Mean: A Benchmark for Agentic Conversational Reference Grounding

> **原标题：** You Know What I Mean: A Benchmark for Agentic Conversational Reference Grounding

- **评分：** 7/10
- **作者/机构：** Karen Fuchs, Uri Katz, Yoav Goldberg；机构未在本次正文核查中确认
- **关键词：** tool-use、conversation、benchmark

**📌 研究问题与结论**  
定义会话指代落地任务：智能体须借助工作区工具解析对话中的隐含外部对象。

**🔧 方法与系统**  
用 GitHub 开发者聊天片段构造 400 个有唯一目标的工具使用基准。

**💡 核心创新**  
把语义、时间和工作区证据结合为可测量的智能体能力。

**🏋️ 训练与数据**  
训练与数据设置以论文正文披露为准；本期未确认的细节不作推断。

**📊 结果与证据**  
提供 RepoRef 基准；规模适中，结论应结合更多工作区类型验证。

**🧐 编辑点评**  
问题与方法同当前 Agent/LLM 主线直接相关；结论以论文报告的受控评测为依据，跨任务或真实部署的外推应保持谨慎。

**⭐ 为什么值得读**  
为相关方向提供了可复核的方法、评测或风险证据，适合沿该主题继续核对原文与代码。

[arXiv 原文](https://arxiv.org/abs/2608.29834) · [PDF](https://arxiv.org/pdf/2608.29834) · [代码](https://github.com/karenShaked/RepoRef-Benchmark](https://github.com/karenShaked/RepoRef-Benchmark)
