---
title: "arXiv Agent 与大模型研究简报｜2026-09-01｜精选"
author: "Thundax"
summary: "arXiv Agent 与大模型研究简报｜2026-09-01｜精选：收录 4 篇，覆盖 评测与安全。"
description: "arXiv Agent 与大模型研究简报｜2026-09-01｜精选：收录 4 篇，覆盖 评测与安全。"
---

# 📡 arXiv Agent 与大模型研究简报｜2026-09-01｜精选

> 数据源：arXiv `cs.AI` / `cs.CL` / `cs.MA` 当日新投稿  
> 范围：Agent / LLM / 多智能体相关研究

## 📋 本期总览

本期从 221 篇可编辑候选中保留 20 篇。关注点集中在工具调用与工作记忆、可审计评测，以及搜索、摘要和技能生命周期带来的安全边界。精选论文优先呈现具有可复核实验或明确风险度量的工作。

本篇只收录评分不低于 7 分的当日强稿，最多 4 篇；高分稿不足时宁缺毋滥。

| 方向 | 序号 | 论文 | 评分 | 关键词 |
|---|---:|---|---|---|
| 评测与安全 | 1 | 研究速览：Facts Without Rules: Boundary Metadata Collapse in Multi-Agent LLM Handoffs | ⭐ 10/10 | multi-agent、privacy、handoff |
| 评测与安全 | 2 | 研究速览：Lazy Grounding: Attacking Search Agents with Factual Evidence | ⭐ 10/10 | search-agent、security、grounding |
| 评测与安全 | 3 | 研究速览：Terminal-Bench-LILT: Multilingual Agentic Coding Benchmark Grounded in Language, Region, and Culture | ⭐ 9/10 | coding-agent、multilingual、benchmark |
| 评测与安全 | 4 | 研究速览：APIFlow-Bench: Measuring Whether Agents Survive Long, Dependent API Workflows | ⭐ 9/10 | tool-use、benchmark、api |

## 🧾 精选规则

按固定口径评估新意（0–3）、影响力（0–3）、证据强度（0–2）和受众匹配度（0–2）；总分达到 7 才有资格进入精选。

## 🛡️ 评测 / 安全

---

### [1] 研究速览：Facts Without Rules: Boundary Metadata Collapse in Multi-Agent LLM Handoffs

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

### [2] 研究速览：Lazy Grounding: Attacking Search Agents with Factual Evidence

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

### [3] 研究速览：Terminal-Bench-LILT: Multilingual Agentic Coding Benchmark Grounded in Language, Region, and Culture

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

### [4] 研究速览：APIFlow-Bench: Measuring Whether Agents Survive Long, Dependent API Workflows

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
