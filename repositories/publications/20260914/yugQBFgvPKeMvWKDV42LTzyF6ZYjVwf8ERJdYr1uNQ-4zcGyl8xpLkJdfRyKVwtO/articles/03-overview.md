---
title: "arXiv Agent 与大模型研究简报｜2026-09-14｜入选论文全览 2/2"
author: "Thundax"
summary: "本期的主线不是再堆一个更强模型，而是追问系统为何成功、又会在哪个接口失真：编码 Agent 的 harness 是否真有优势，LLM 评审能否代表任务完成，长期记忆怎样避免临时信息覆盖，以及试错预算如何分配。另有多篇工作把评测缺陷、遗忘泄漏、长程手册推理和真实设备执行拉回可验证的证据链。"
description: "本期的主线不是再堆一个更强模型，而是追问系统为何成功、又会在哪个接口失真：编码 Agent 的 harness 是否真有优势，LLM 评审能否代表任务完成，长期记忆怎样避免临时信息覆盖，以及试错预算如何分配。另有多篇工作把评测缺陷、遗忘泄漏、长程手册推理和真实设备执行拉回可验证的证据链。"
---

# arXiv Agent 与大模型研究简报｜2026-09-14｜入选论文全览 2/2

本期的主线不是再堆一个更强模型，而是追问系统为何成功、又会在哪个接口失真：编码 Agent 的 harness 是否真有优势，LLM 评审能否代表任务完成，长期记忆怎样避免临时信息覆盖，以及试错预算如何分配。另有多篇工作把评测缺陷、遗忘泄漏、长程手册推理和真实设备执行拉回可验证的证据链。

本期入选论文全览。

## 应用与基准

### 把 AMD 内核编译与测速反馈纳入编码 Agent 训练

AMDKernelVault: Large-Scale Datasets and Agentic Training for AMD GPU Kernel Optimization

🌟🌟

AMDKernelVault 发布 6.2 万条已执行验证的 HIP 样本和近 4 万条 Triton 内核，并以 SFT 与执行感知 RL 训练 8B 模型。它在三项 AMD 内核正确性指标领先，但 Corr/Pass 仍约三四成，编译率与速度并未全面超过前沿模型。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12471)

### 用数月项目日志合成更像企业现场的问答评测

WinSyn: An Automated Pipeline for Realistic Enterprise Question-Answering Evaluation

🌟

WinSyn 从可审计的逐日活动日志生成最多 25 人、持续数月的企业邮件，再构造跨来源长短问答。多种 Agentic RAG 与深度研究基线综合分均低于 80%，说明分散与冲突信息仍难处理；但目前媒介只有邮件，且大部分场景来自合成。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12171)

### 好听的科学假设，不等于沿证据链推出来

HypoKG: Evidence-Disciplined Biomedical Hypothesis Generation Beyond Endpoint Knowledge

🌟

HypoKG 在 550 条生化知识图谱路径上比较端点提示与完整路径提示。只给起点和疾病时，假设总体评分反而更高；给出完整路径则证据比例性更强，打乱中间节点会显著削弱 grounding。结论受生物医学领域和自动评审边界限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12260)

### 医学事实核验别切得太碎：条件与因果需要成组判断

MedSNIP: Building and Benchmarking Snippet-Level Granularity for Medical Fact Verification

🌟

MedSNIP 把相关子句合成保留临床结构的 snippet，在三套数据、六个模型上保持或提高错误类 F1，因果—条件链收益最明显，验证调用减少 24–73%。但强验证器和较长回答更受益，弱模型或短文本不一定适合相同粒度。

[阅读论文 PDF](https://arxiv.org/pdf/2609.12884)

## 其他 Agent / LLM 方向

### 亚二次注意力需要重新设计推理服务器的切分方式

Rethinking Heterogeneous System Disaggregation for Subquadratic Attention

🌟

SQD 不按传统 attention/FFN 切分，而按二次与亚二次计算的内存、算强度把 decode 分配到 GPU 与 SRAM 芯片。三模型、32K 至 1M 上下文下，实机代理的 tokens/J 提升 31–56%；最高 3.6 倍吞吐来自未来硬件分析模型，仍依赖假设。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13134)
