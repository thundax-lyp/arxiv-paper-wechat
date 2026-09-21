---
title: "arXiv Agent 与大模型研究简报｜2026-09-16｜入选论文全览 2/2"
author: "Thundax"
summary: "本期关注长期记忆、工具调用、证据核验、多智能体协作与 LLM 服务系统中的具体失败模式。星标表示本期阅读优先级，不代表研究结论的可靠程度。"
description: "本期关注长期记忆、工具调用、证据核验、多智能体协作与 LLM 服务系统中的具体失败模式。星标表示本期阅读优先级，不代表研究结论的可靠程度。"
---

# arXiv Agent 与大模型研究简报｜2026-09-16｜入选论文全览 2/2

本期关注长期记忆、工具调用、证据核验、多智能体协作与 LLM 服务系统中的具体失败模式。星标表示本期阅读优先级，不代表研究结论的可靠程度。

本期入选论文全览。

## 评测与安全

### 偏见审计能发现问题，却未必能比较模型

Bias Audits Detect Bias but Disagree on Ranking: Evidence from Ten Instruments and Ten Frontier Models

🌟🌟🌟

Emerging AI regulation mandates bias audits of high-risk systems, and audit scores are beginning to be used to rank models. Both uses assume different audit tools measure the same thing well enough to compare. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15995)

### 医学基准的评分标准本身也会出错

Are We Grading Properly? Understanding Failure Modes in Medical Benchmarks

🌟🌟🌟

Medical evaluation is shifting from static option-based questioning to realistic clinical scenarios with open-ended output modes. Grading these at scale naively, however, is expensive, and rubric-based evaluation has become the dominant scalable alternative. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16023)

### 长程工具调用中的安全边界会逐步变化

BLINDSPOT: A Benchmark for Safety and Refusal Calibration in Long-Horizon Tool-Using Agents

🌟🌟🌟

Large language model (LLM) agents increasingly operate over long-horizon interactions involving tool use, persistent state, evolving authorization, and external environment feedback. In such settings, safety failures may emerge only after multiple turns, yet existing evaluations often reduce agent behavior to task or attack success, obscuring whether an agent acts, refuses, or remains appropriately calibrated as the interaction evolves. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16305)

### 删掉姓名之后，简历仍可能泄露族群线索

Beyond the Name: Demographic Leakage in De-Identified Résumés and Evaluation Artifacts in LLM Bias Audits

🌟🌟🌟

De-identified résumé screening assumes that redacting explicit fields prevents ethnocultural inference; however, recent audits attribute residual leakage to declared languages. We investigate whether eliminating language fields resolves this leakage across nine open-weight models and 620 counterfactual résumés. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16501)

### 语音角色扮演需要经得起长时间对话

RoleBreak: Benchmarking Long-Horizon Role-Playing Robustness in Spoken Dialogue

🌟🌟🌟

Speech-to-speech dialogue models increasingly support persona control, yet existing spoken role-playing benchmarks remain largely character-centric and short-horizon. This leaves open whether spoken dialogue models can sustain diverse roles over extended interactions, especially beyond predefined fictional characters. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16614)

### 评测工具能发现问题，却未必能排出模型名次

Benchmarking Factual Robustness of LLMs via Multi-conversation Persuasion

🌟🌟

As Large Language Models (LLMs) increasingly serve as primary knowledge retrieval interfaces, their robustness against \textit{persuasion attacks}---attempts to inject misinformation or enforce counterfactuals---has become a critical safety concern. Existing red-teaming frameworks typically evaluate models in multi-turn dialogues where the target model retains full conversation history. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16777)

### 评测工具能发现问题，却未必能排出模型名次

RiskChainBench: A Benchmark for Obfuscated Platform Message Restoration and Evidence-Grounded Web Investigation

🌟🌟

Platform abuse campaigns conceal redirection instructions with emojis, homophones, character decomposition, and redundant symbols, then route users through disguised links to services associated with pornography, fraud, gambling, or illicit transactions. Existing benchmarks evaluate obfuscated text and risky webpages separately, obscuring how target recovery affects downstream evidence acquisition. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16900)

### 评测工具能发现问题，却未必能排出模型名次

ToMAS: A Pilot Failure-Grounded Theory-of-Mind Benchmark from Multi-Agent LLM Failures

🌟🌟

LLM-based multi-agent systems can fail even when communication succeeds because agents do not correctly track their peers' roles, knowledge, or intentions. We investigate whether such inter-agent misalignment cases, labelled FC2 in MAST-Data, can be converted into functional partner-state reasoning items. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16986)

### 评测工具能发现问题，却未必能排出模型名次

Challenges of Auditing: Variability in Outputs of Large Language Models for Health

🌟🌟

People increasingly use frontier AI models for health advice, but via different access modes (e.g., ChatGPT, ChatGPT Health, APIs) with varying settings. Here, we find systematic differences across access modes. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16590)

### An Empirical Study of Counterfactual Self-Explanations in LLMs

An Empirical Study of Counterfactual Self-Explanations in LLMs

🌟🌟

Large language models can easily generate explanations for their own outputs, but such self-explanations are not necessarily faithful to the model's behavior. We study this issue through counterfactual self-explanations, where a model minimally edits an input so that its own prediction changes. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17119)

### Cascade

Cascade: Hierarchical Recoverability Control for Large Language Model Unlearning

🌟🌟

Large Language Model (LLM) unlearning is essential for removing sensitive or copyrighted knowledge while preserving general utility. Existing methods often leave residual knowledge in intermediate representations, which can still be recovered. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16890)

### When Should LLMs Abstain? Chain-of-Self-Questioning for Selective Risk Control

When Should LLMs Abstain? Chain-of-Self-Questioning for Selective Risk Control

🌟🌟

Large language models can produce fluent answers when their factual support is weak. This paper introduces Chain-of-Self-Questioning (CoSQ), a prompt-only framework that makes answer commitment conditional on an explicit assessment of the information required to answer a question. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17516)

## 应用与基准

### Latent Undertow

Latent Undertow: How Ordinary Typos Break Probes

🌟🌟

LLMs handle ordinary typing variation fluently: a typo or missing punctuation leaves both user intent and the model's response substantively unchanged. Yet probes that detect malicious prompts by reading the model's hidden states tell a different story: the same edit rotates the readout vector by 43--56 at the perturbed token, decaying below 15% within ~10 downstream tokens. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15994)

### How Humans and LLMs Read Gender into "Gender-Neutral" Physical Descriptions

How Humans and LLMs Read Gender into "Gender-Neutral" Physical Descriptions

🌟🌟

When foundation models describe people, recent work in AI fairness, accessibility, and ethics recommends avoiding inferred identity labels (e.g., "she", "his") in favor of seemingly "objective" physical descriptions (e.g., "short hair", "a defined jawline"). Yet whether such descriptive language achieves gender-neutral communication remains an open empirical question. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16366)

### Fine-Tuning Fixes Mode Collapse and Over-Dispersion in LLMs

Fine-Tuning Fixes Mode Collapse and Over-Dispersion in LLMs

🌟🌟

Recent work by Doshi and Hauser (2024), Bisbee et al. (2024), and Xie et al. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16454)

### Smarter by the Moment

Smarter by the Moment: Environment-Driven Dynamic Policies for Continual LLM Improvement

🌟🌟

Large Language Models (LLMs) have achieved remarkable progress across diverse domains, but continual adaptation to evolving tasks and environments remains a key challenge. Existing memory-augmented approaches retrieve individual past examples as direct references, but do not explicitly synthesize actionable strategies from them, causing the same types of errors to recur. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16800)

### Target-Language Generation in Multilingual Models

Target-Language Generation in Multilingual Models: Activation Steering and Optimal Control

🌟🌟

Ensuring that multilingual language models generate coherent text in a specific target language is a major issue in multilingual language modeling. We develop an optimal control method for target-language text generation as well as a framework for evaluating the quality of generated text in terms of language adherence, linguistic coherence, and semantic coherence. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16967)

### Autoformalizing Argumentative Material Inferences

Autoformalizing Argumentative Material Inferences

🌟🌟

Natural language arguments are compelling before they are formally explicit. A premise supports a claim through defeasible warrants, background commitments, and exception conditions that the text leaves implicit. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16991)
