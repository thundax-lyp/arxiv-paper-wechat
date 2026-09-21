---
title: "arXiv Agent 与大模型研究简报｜2026-09-16｜入选论文全览 1/2"
author: "Thundax"
summary: "本期关注长期记忆、工具调用、证据核验、多智能体协作与 LLM 服务系统中的具体失败模式。星标表示本期阅读优先级，不代表研究结论的可靠程度。"
description: "本期关注长期记忆、工具调用、证据核验、多智能体协作与 LLM 服务系统中的具体失败模式。星标表示本期阅读优先级，不代表研究结论的可靠程度。"
---

# arXiv Agent 与大模型研究简报｜2026-09-16｜入选论文全览 1/2

本期关注长期记忆、工具调用、证据核验、多智能体协作与 LLM 服务系统中的具体失败模式。星标表示本期阅读优先级，不代表研究结论的可靠程度。

本期入选论文全览。

## Agent系统与工具使用

### 让计算机操作智能体接受长程工程考验

CADWorld: Computer-Use Benchmark for Long-Horizon Computer-Aided Design

🌟🌟🌟

Computer-use agents are increasingly evaluated in realistic desktop environments, but existing benchmarks provide limited coverage of professional engineering workflows whose outputs are persistent, structured artifacts. Mechanical computer-aided design (CAD) is a particularly demanding setting: an agent must manipulate geometry and constraints over long interaction horizons while producing a native project whose dimensions, construction structure, and downstream engineering state remain valid. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16251)

### 工具调用为什么会学到错误的理由

Spurious Tool Use: When RL Agents Learn the Wrong Reason to Act

🌟🌟

Large language model (LLM) agents increasingly interleave natural language reasoning with external tools such as web search and code execution. These tool-use policies are often optimized via reinforcement learning (RL), which can amplify spurious correlations in the training data. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16268)

### 让长期记忆从检索走向持续更新

ThinkFlow: Self-Evolving Probabilistic Latent Memory for Lifelong Conversational Agents

🌟🌟

Lifelong conversational agents rely on memory systems to maintain deep, context-aware interactions with users. However, existing explicit textual memory pipelines suffer from a severe information bottleneck, often losing subtle behavioral patterns and emotional shifts. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17010)

### 让长期记忆从检索走向持续更新

Interactive Memory Learning for Long-Term Conversations

🌟🌟

Recent advancements in large language models have significantly enhanced the capabilities of agents in modeling long-term conversations. Despite these successes, existing approaches typically adopt a static heuristic paradigm, where information is passively archived without adaptive memory valuation. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17088)

### 把长上下文服务成本拆开重新安排

Competence-Preserving Resume Perturbations Expose Presentation Sensitivity in LLM Screening

🌟🌟

Resume screeners must infer job-relevant competence from resumes whose presentation can vary substantially in wording, structure, stylistic polish, and document extraction quality. Ideally, such surface variation should not change decisions when the underlying qualification evidence is unchanged. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16517)

### 让模型在更长链路上保持可验证的推理

Never Stop Thinking: Continuous-Time Language Agents

🌟🌟

Voice agents built on LLMs follow a rigid listen-think-speak loop that inserts seconds of dead air before every reply. We show that continuous-time cognition (thinking while listening and thinking while speaking) emerges from an unmodified text model under a lightweight interrupt-and-resume orchestrator, cutting live-pipeline latency by 19% overall and by half in the regime the mechanism targets. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17416)

### Quantifying Organizational Environmental Action from Web Data and Large Language Models

Quantifying Organizational Environmental Action from Web Data and Large Language Models

🌟🌟

Quantifying organizational environmental action from publicly available web content remains a challenging environmental data science problem because relevant information can be dispersed across multiple webpages and is primarily communicated through unstructured text. We present a scalable computational framework for transforming organizational web content into structured measures of environmental action and demonstrate the approach using Jewish congregations in the United States. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16627)

### 让模型在更长链路上保持可验证的推理

Rewarding Reasoning, Not Answers: Fixing and Bounding Test-Time Reinforcement Learning on Medical QA

🌟🌟

Test-time reinforcement learning adapts a model on its own unlabeled test set using majority-vote pseudo-labels and has shown strong results in mathematics. We show that this recipe collapses on medical multiple-choice QA: accuracy stagnates while output diversity rapidly declines. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16660)

## LLM推理与规划

### 多智能体分工带来收益，也带来信息损失

Decomposition Buys Integrity, Not Yield

🌟🌟

Multi-agent systems split a task across a tree of agents and justify the split with folklore: smaller contexts, cleaner separation, parallelism. We ask what the split does to how much of what the leaves discover reaches the root. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17464)

### 让模型在更长链路上保持可验证的推理

State of Thought Enables Endogenous Reasoning

🌟🌟

Test-time compute has emerged as a major approach to improving the capabilities of Large Language Models (LLMs). However, existing test-time reasoning paradigms rely heavily on externally imposed control, either through fixed reasoning programs or through costly expansion in constrained search spaces, limiting both generalization and efficiency. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16055)

### 让模型在更长链路上保持可验证的推理

The Imitation Game: When LLMs Learn to Reason Like Programs via Code-Centric Reasoning Data Synthesis

🌟🌟

Large Language Models (LLMs) excel at programming tasks but frequently fail at deterministic, fine-grained reasoning in natural language, relying heavily on semantic approximations rather than robust symbolic execution. To bridge this gap, we propose MIMIC, a framework that leverages executable code as a rigorous medium for reasoning data synthesis. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16076)

### 让模型在更长链路上保持可验证的推理

SKIP: a Self-knowledge-guided Step-wise Preference Learning Framework for Concise Reasoning

🌟🌟

While Chain-of-Thought (CoT) reasoning has been proven to be effective, it often leads to overthinking, resulting in computational overhead, inference latency, and even degraded performance in large language models (LLMs). Existing concise reasoning frameworks significantly compromise accuracy while compressing the length of output. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17019)

## RAG与知识检索

### 让长期记忆从检索走向持续更新

Retrieval-Driven Memory Reconsolidation for Long-Term LLM Agents

🌟🌟

Long-term memory is essential for LLM-based agents operating over extended interactions. Existing memory systems primarily update memory when new information arrives, treating retrieval as the endpoint of memory access rather than a driver of memory evolution. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16053)

### 检索系统如何判断证据是否真的够用

AquiLLM: Evaluating Faithfulness in Open-Weight RAG-LLM Systems for Scientific Research

🌟🌟

Scientific research increasingly relies on large, heterogeneous data sources, motivating interest in retrieval-augmented generation (RAG) systems that provide natural language access to scientific knowledge and research workflows. Researchers are exploring the viability of these systems as natural language interfaces for document search and for generating analysis code and pipeline components. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16519)

### 检索系统如何判断证据是否真的够用

Lit3R: Retrieve-Relate-Read for Evidence-Grounded Question Answering over Scientific Literature

🌟🌟

We describe tus-nlp's Lit3R (Retrieve-Relate-Read) system for LitTraceQA, a shared task for literature-grounded question answering that requires systems to retrieve relevant papers, identify supporting evidence, and generate answers. Lit3R combines off-the-shelf retrieval, reranking, and large language model (LLM) components without task-specific training. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16912)

### Diagnosing the Fact-Grounding Gap in Multi-Hop Question Answering

Diagnosing the Fact-Grounding Gap in Multi-Hop Question Answering

🌟🌟

Multi-hop question answering requires combining information from multiple documents to answer complex questions. These systems have grown increasingly capable, yet when they fail, the error is typically attributed to not finding the right documents. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17043)

### 检索系统如何判断证据是否真的够用

EviScope: Paired Counterfactual Evidence Diagnostics for Faithful and Efficient Grounded Language Models

🌟🌟

Grounded language-model systems are often evaluated by final answer accuracy, yet a correct answer can be unsupported, drawn from the wrong source, or produced when evidence is insufficient or contradictory. We introduce EviScope, a paired counterfactual benchmark that holds the question fixed while adding, removing, distracting, or contradicting its evidence. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17081)

### Style-Debiased DPO

Style-Debiased DPO: Updating LLM Knowledge with Factuality-Aware Synthetic Preference Data

🌟🌟

Continued pretraining (CPT) with data augmentation such as paraphrasing can store inside a large language model (LLM) the knowledge of a small source corpus. The stored knowledge, however, is not always retrieved correctly. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16532)

## 多智能体与协作

### 多智能体协作需要一层社会化安全护栏

Agentic Societies Need a Social Harness

🌟🌟

An agentic society is a collection of AI agents that coordinate autonomously across trust boundaries, on behalf of different principals whose objectives may only partially align. We show experimentally that in agentic societies even honest, competent agents often fail to reach satisfactory outcomes with existing harnesses and messaging primitives, and that faulty or malicious agents can stall collaboration, influence outcomes, and pursue other harmful goals by exploiting vulnerabilities in communication (``speech''). 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17527)

## LLM训练与对齐

### Do LLMs Have Values? A Quantitative Analysis and Alignment Framework for Values in Large Language Models

Do LLMs Have Values? A Quantitative Analysis and Alignment Framework for Values in Large Language Models

🌟🌟

As Large Language Models (LLMs) increasingly handle complex subjective tasks, aligning their intentions and behaviors with human values has become a critical scientific challenge. However, current efforts are confounded by a striking behavioral paradox: they fluctuate unpredictably under minor wording changes ("swing"), yet stubbornly ignore explicit instructions to correct ingrained biases ("rigidity"). 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16589)

### ReDraft, Don't Just Distill

ReDraft, Don't Just Distill: Reference-Driven Revision for Continual VLLM Post-Training

🌟🌟

Continual post-training of large multimodal models should add new capabilities while preserving those from pre-training, and the two goals pull in opposite directions. SFT gives explicit target supervision that learns a task from near-zero accuracy, but its off-policy targets move the model far enough to cause forgetting; on-policy methods such as RLVR and self-distillation preserve policy proximity yet supply little signal when the policy cannot yet solve the task. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16639)

### Nameless Tokenization

Nameless Tokenization: A Lossless Tokenizer-Level Defense Against Control-Token Forgery in Open-Weight LLMs

🌟🌟

Open-weight language models publish the strings their chat templates use to mark turns, roles and tool results, which the tokenizer maps back to the reserved identifiers the model obeys. Anyone who controls text in a prompt can therefore write a turn boundary indistinguishable from one the serving stack wrote. 这项工作对 Agent/LLM 读者的直接价值在于把问题落到可测量的机制或系统上；但结论仍受论文所用模型、数据和任务设置限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.16984)
