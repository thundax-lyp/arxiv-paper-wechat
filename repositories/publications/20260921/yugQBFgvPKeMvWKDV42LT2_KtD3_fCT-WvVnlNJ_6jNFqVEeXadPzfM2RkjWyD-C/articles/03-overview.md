---
title: "arXiv Agent 与大模型研究简报｜2026-09-21｜入选论文全览 2/2"
author: "Thundax"
summary: "本期最值得关注的是智能体训练环境、开放任务信用分配、混合计算机使用与内部安全审计。多篇工作共同提醒：局部得分、流畅交互和平均通过率都可能掩盖端到端失败，真正可靠的系统需要可执行验证、过程证据和清晰的适用边界。"
description: "本期最值得关注的是智能体训练环境、开放任务信用分配、混合计算机使用与内部安全审计。多篇工作共同提醒：局部得分、流畅交互和平均通过率都可能掩盖端到端失败，真正可靠的系统需要可执行验证、过程证据和清晰的适用边界。"
---

# arXiv Agent 与大模型研究简报｜2026-09-21｜入选论文全览 2/2

本期最值得关注的是智能体训练环境、开放任务信用分配、混合计算机使用与内部安全审计。多篇工作共同提醒：局部得分、流畅交互和平均通过率都可能掩盖端到端失败，真正可靠的系统需要可执行验证、过程证据和清晰的适用边界。

本期入选论文全览。

## 评测与安全

### 读出模型不愿说出的答案

A Lie Detector Test for Language Models: Reading Knowledge a Model Won't Reveal

🌟🌟🌟

方法把多个候选答案同时呈现给模型，从内部状态读取其真正识别的选项，以区分故意隐藏能力与确实不知道。跨八个模型及多种隐藏设置，识别率明显高于机会水平，并能辅助核查遗忘；它需要访问内部激活和候选集合，面对专门规避探针的模型并不稳健。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21996)

### 单步答得更好，不等于智能体能完成工作流

When Better Turns Do Not Make Better Agents: Diagnosing the Gap Between Next-Turn Metrics and Workflow Success

🌟🌟

四组模型在正确历史上的下一步预测经微调后普遍改善，但放入自生成历史的闭环流程后，严格完成率最高仅约一成，整体裁判甚至没有判定任何工具流程成功。结果说明单轮指标会掩盖状态维护、错误累积和工具参数问题，领域仅限客服工作流。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21187)

### 细分多模态安全风险，而不只看是否拒答

MME-Safety: A Fine-grained Benchmark for Safety Evaluation of MLLMs

🌟🌟

基准按风险情境、危害严重度和跨模态隐蔽程度分层，并从回答可靠、实际暴露和防御结构三个层次评估十七种模型。结果揭示跨模态组合与推理过程会改变安全表现；当前以零样本和模型裁判为主，多轮攻击与新型隐私风险覆盖不足。

[阅读论文 PDF](https://arxiv.org/pdf/2609.20850)

### 跨语言遗忘是否真的把知识删干净

$μ^2$-Bench: A Multilingual Machine Unlearning Benchmark

🌟🌟

基准完整模拟记忆、遗忘和评测，在训练语言与未见语言上分别检查概率、生成和隐私泄漏。结果显示只针对部分语言处理会留下跨语言残留，还可能诱发语言混杂输出；结论基于受控注入知识，与真实预训练记忆仍有差距。

[阅读论文 PDF](https://arxiv.org/pdf/2609.20945)

### 从注意力图拓扑寻找幻觉信号

Detecting Hallucination in LLMs: Tracing the Topological Signatures of Impaired Context Sharing

🌟🌟

方法用曲率和信息流结构识别上下文共享受阻的回答，一次前向计算即可区分幻觉与非幻觉。多个模型和基准上优于若干注意力及多回答基线，并发现末层自我关注、分散检索和信息挤压相关；相关结构未必是所有幻觉的因果来源。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21096)

### 把交互成本纳入人机协作成功标准

From Task Success to Productive Success: Evaluating Human-AI Collaboration by Quality and Cost

🌟🌟

框架用结果质量相对于交互成本衡量生产性，而非只看是否完成任务。四类任务中，相同质量会对应高达七十倍的交互差异，主观满意度也不能替代生产性；数据集和成本定义有限，尚不足以给出跨行业统一指标。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21117)

### 生产智能体如何用更少题目重复评测

Efficient Benchmarking in Production: A Study of an Evolving LLM Agent

🌟🌟

研究用五百余次历史运行比较随机抽样、缓存、固定子集和自适应测试。二维自适应方法执行约四成题目即可把总分平均误差压到约一个百分点，但团队最终因运维简单选择难度分层固定集；结论来自单个生产分析智能体，跨域适用仍需持续校准。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21267)

### 三十二个模型裁判，可能只相当于几个独立人类

How Many Humans Is a Judge Panel Worth?

🌟🌟

研究保留人类分歧分布，用谱残差多样性和分布误差分别估算裁判面板的有效人数。同一面板在三个任务上仅相当于约二到七名独立人类，且两种口径结论不同；数据限于自然语言推断和固定模型池，不能当成通用替代率。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21277)

### 临床多模态模型可能根本没用对患者心电图

ECG Mirage: Revealing and Mitigating the Underutilisation of ECGs in Vision-Language Models for Clinical Prediction

🌟🌟

研究固定文本，只替换匹配、错配或缺失的心电图，发现四种模型的预测并未稳定受正确图像帮助。受限视觉提示与偏好优化拉开匹配和错配差距，但其他适配方法的绝对性能更高，仍需同时检查准确率与患者特异证据依赖。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21755)

### 企业生成式智能系统需要面向具体工作流的门槛

EnterpriseVal: Quantifying the Efficacy, Reliability and Value of Generative AI in the Enterprise

🌟

框架冻结模型、提示、检索、工具和人工监督配置，再从质量、效率、可靠性与风险设置信心区间门槛。银行三个试点展示了引用准确率、幻觉率和人工工时的联合核算；目前仍是小规模行业试点，尚未证明能普遍改善部署决策。

[阅读论文 PDF](https://arxiv.org/pdf/2609.21841)

## 应用与基准

### 用半径救回长上下文稀疏注意力漏掉的关键块

RBS-Attention: Radius-Bounded Sparse Prefill for Long-Context Large Language Models

🌟🌟

训练外方法以块中心捕捉平均相关性，再用块内最大半径找回被均值稀释的少数关键令牌。在十二万八千上下文上显著缩短首令牌时间，长文基准精度接近密集注意力；收益依赖硬件、块大小和阈值，跨架构配置仍需调节。

[阅读论文 PDF](https://arxiv.org/pdf/2609.20971)
