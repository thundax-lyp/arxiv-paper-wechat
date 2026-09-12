---
title: "arXiv Agent 与大模型研究简报｜2026-09-04｜入选论文全览 1/2"
author: "Thundax"
summary: "本期聚焦智能体从证据走向行动时容易失真的几个环节：缓存该留什么、工具接口是否真正接通、冲突信息怎样判断，以及长期记忆如何更新。另有训练、代码修改和自动审稿研究，帮助比较方法收益与适用条件。"
description: "本期聚焦智能体从证据走向行动时容易失真的几个环节：缓存该留什么、工具接口是否真正接通、冲突信息怎样判断，以及长期记忆如何更新。另有训练、代码修改和自动审稿研究，帮助比较方法收益与适用条件。"
---

# arXiv Agent 与大模型研究简报｜2026-09-04｜入选论文全览 1/2

本期聚焦智能体从证据走向行动时容易失真的几个环节：缓存该留什么、工具接口是否真正接通、冲突信息怎样判断，以及长期记忆如何更新。另有训练、代码修改和自动审稿研究，帮助比较方法收益与适用条件。

本期入选论文全览。

## Agent系统与工具使用

### 长期记忆更新，需要区分补充、替代与矛盾

MemoryLACE: Memory Lifecycle-Aware Consolidation and Evidence Retrieval

🌟🌟🌟

长期对话记忆不能只不断追加摘要。MemoryLACE 把信息保存为带证据的原子记录，并区分补充、替代和冲突关系。BEAM 的 100K 设置中，Qwen3.5-9B 的模型裁判总体分为 51.9，对照 Hindsight 为 50.3；同一硬件配置下总耗时也更少。但时间推理和摘要子项反而较弱，说明高效整理记忆尚不能替代所有推理能力。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03201)

### 把人的修改习惯变成智能体的后续能力

Efficient Test-Time Adaptation through Human-AI Interaction

🌟🌟

一次次纠正助手，不应每次都从头开始。研究把人机互动转成记忆、技能，或用于更新模型权重，在摘要写作和数据可视化中观察个性化适应。实验显示，仅 20 次互动就能在后续任务的规则评分上改善表现。价值在于复用纠正经验，但评价依赖从互动演化的规则与模型评分，不等于独立确认了真实使用收益。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04141)

### 拆开提示词后，究竟哪一部分改善了行动

Where Does Harness-Optimization Value Live? Localized Gains and the Budget-Splitting Trap in Self-Evolving LLM Agents

🌟

智能体提示词中，角色、知识和行动控制常混在一起。研究把提示拆成四个槽位，逐项保留或删除，以观察真正起作用的部分。固定 Qwen2.5-7B 后，单独优化行动控制使 ALFWorld 成功率从 64.2% 升至 76.1%；但完整分槽方案没有显著优势，WebShop 上也未见显著收益。拆分有助于诊断，收益仍依任务而变。

[阅读论文 PDF](https://arxiv.org/pdf/2609.02889)

### 一次核验后复用多步动作，能快多少

Speculative Macro Commit for Faster Tool-Using Agents

🌟🌟

工具调用常包含重复的短流程。该系统让小模型预执行候选步骤，在主模型确认锚点、状态和参数后，一次提交后续动作。AppWorld 平均耗时从 355.7 秒降至 195.9 秒，但完成任务从 70 个降至 68 个。比较串行基线时 GPU 从一张增至三张；与同硬件推测基线相比，额外提速约 7.6%，且提交仍是近似的。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03236)

### 把做过的仿真任务沉淀成技能和知识

SimSkill: A Self-Evolving LLM Agent for Skill and Knowledge Accumulation in Traffic Simulation

🌟

智能体能否从执行经验积累可复用能力？SimSkill 在交通仿真中自主提任务、运行、检查，再把程序步骤和领域知识分别保存。两个各含 40 题的测试集上，部分骨干完成率提高，但 GLM-5.2 没有受益，覆盖更多任务也未必更省钱。它展示了外部记忆积累的路径，证据仍局限于单一仿真领域。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03753)

### 从旧对话归纳规则，再用规则寻找证据

RuleMem: Active Rule Memory for Long-Term Conversational Agents

🌟🌟

保存事实不一定能支持跨事件推理。RuleMem 从对话提取带时间的事实，再把路径归纳为可复用规则；回答新问题时，先找规则，再找支撑事实。LoCoMo 多跳问题准确率为 82.43，高于最佳对照的 79.79。值得关注的是规则对检索的引导，但归纳仍可能过度概括，有限对话基准尚不足以证明长期开放使用的可靠性。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03915)

### 替人参会，先判断该不该发言

Speak for Me: Giving LLMs the Situational Awareness to Participate in a Meeting

🌟

会议代理既不能一直沉默，也不能逢话就接。CAPA 显式维护话题、立场和待决问题，先选择要表达的主张，再生成发言。137 场 AMI 会议的离线回放中，发言决策 F1 从只看记录的 38.1% 升至 63.0%。不过，更多尝试并非都获得有效贡献认可；这也不是代理真正加入会议后的用户收益测试。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03923)

## LLM推理与规划

### 保住问题后，随机保留推理缓存也能有竞争力

Random Attention: Rethinking KV Cache Eviction for Efficient Reasoning

🌟🌟🌟

长推理的缓存淘汰，未必需要复杂的重要性评分。Random Attention 保留完整提示，其余内容由各注意力头独立随机抽样。单张 H200、长输出服务测试中，吞吐比 TriAttention 高 32%—43%，多数质量对照也接近。收益有明确条件：较短输出时仍慢于全缓存，部分代码任务也存在质量落后。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03430)

### 给规则还是给例子，取决于任务要学什么

LLMs Learn Better In-Context from Rules than from Examples

🌟🌟

教模型完成新任务，示例并不总比直接说明规则有效。研究在五类合成任务中分别提供准确规则、少量示例或两者，发现规则优势主要集中在代数结构明确的任务；增加示例也并非持续改善表现。它为提示设计提供了有用对照，但规则被刻意写得准确清晰，不能推导出真实场景中规则说明总胜过示例。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03213)

### 用任务线索分配缓存，节省内存仍有取舍

SGD-KV: Summarization Guided KV Cache Compression

🌟🌟

长文中的信息重要性会随问题变化。SGD-KV 用摘要关键词作为探针，把更多缓存预算分给与任务相关的注意力头，再在头内挑选内容。Qwen3-32B 在 ETHIC 上只保留四分之一缓存时，得分为 28.38，接近全缓存的 28.53；但多轮检索任务损失更明显。它适合研究按任务分配预算，不能概括为无损压缩。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03235)

### 缓存预算随推理进程增长，而不是预先定死

GrowPage: On-Demand KV Budgeting for Efficient LLM Reasoning Serving

🌟

不同请求在不同推理阶段需要的缓存量并不相同。GrowPage 用两种时间尺度的查询摘要估计需求，在压缩旧缓存和增加物理页之间选择。单张 A100 上，Qwen3-8B 平均解码吞吐从全缓存 vLLM 的 1357 升至 2174 token/s，任务均分从 88.7 降至 87.5。它展示了调度收益，仍须接受一定质量损失。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03494)

### 缓存分数更新得更少，是否仍能留住信息

What Matters for Aggressive Decoding-Time KV Eviction? Temporal Aggregation and Ranking Preservation

🌟

缓存淘汰一旦删错就无法恢复。InertiaKV 对注意力分数做平滑累积，并减少刷新次数，避免被短时波动左右。Llama-3.3-70B 在九成压缩下，四个检索任务均分为 56.74，接近全缓存的 57.59。但另两种模型在 RULER 上损失达 17—27 分；该方法只处理解码缓存，也不能降低读入长提示时的峰值内存。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03515)

### 插入思考结束标记，不一定真的停止推理

\</think\> Doesn't Stop Reasoning: Analysis of Spurious CoT Termination

🌟

为了缩短推理，系统有时强行插入结束标记。研究发现，模型仍可能在回答阶段继续推理，甚至再次生成结束标记；QwQ-32B 在一种提前退出策略下，五组任务的平均再生比例为 33.9%。注意力干预支持标记作用的诊断，但可见文本并不等同内部状态，这项工作也尚未给出成熟的部署加速方案。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03633)

## RAG与知识检索

### 检索时主动寻找让请求不可行的证据

PACE: Towards Surfacing Hidden Conflicts in User Requests

🌟🌟

个人助手需要找出阻碍请求的事实，而不只是相关资料。PaceMaker 先列出时间、承诺或资源等潜在冲突，再结合文本检索和图遍历寻找决定性证据。Qwen3-4B 配置下，模型裁判判定的通过率从稠密检索的 62.39% 升至 68.82%。基准主要检查可行性判断，尚未验证助手能否完成后续安排与执行。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03293)

### 先判断问题难度，再决定是否查知识图谱

R$^\{2\}$Adapter: A Routing and Rewriting Adapter for Efficient Hybrid RAG

🌟🌟

检索增强系统不必让每个问题都走昂贵的图检索。该方法先用路由器判断直接检索是否足够，再对低置信问题重写查询、调用图检索。采用指定检索器和 Llama-3.3-70B 时，三个任务的平均 F1 从 HippoRAG 2 的 65.8 升至 66.9。节省调用有实用价值，但路由器依赖底层检索系统，更换组件可能需要重新训练。

[阅读论文 PDF](https://arxiv.org/pdf/2609.02894)

## 多智能体与协作

### 读到最新需求，旧计划也可能照样执行

Fresh Memory, Stale Plans: Dependency-Scoped Validation for Distributed LLM-Agent Memory

🌟🌟

多智能体即使同步了新需求，也可能继续执行由旧版本推导的计划。PlanFence 记录计划依赖的确切版本，在行动前只检查相关状态是否仍获所有者认可，失配则重规划。受控高更新实验中，它和完整溯源基线均阻止了过期行动，同时减少协调开销。但依赖必须声明完整，检查也不与外部动作构成原子事务。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03340)

### 论文查代码，代码也反过来查论文

Dude: A Dual-Detection Multi-Agent System for Paper-Code Discrepancy Detection

🌟🌟

只按论文声明搜代码，可能漏掉实现中的额外假设。Dude 让两组智能体从论文和代码两端提出疑点，再核对与协商。SciCoQA 上，GPT-5.4 配置的 F1 从单代理的 71.52% 升至 86.55%，代价是更多 token。结果依赖模型裁判与尚不完整的差异标注，证明的是差异核查能力，不能替代实际运行和复现。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03416)

### 让智能体辩论参考经验，也要防止共同犯错

Remember and Reweight: Enhancing Multi-Agent Debate with Experience Memory and Confidence Estimation

🌟🌟

多个模型互相讨论，可能把共同误解越说越牢。R²-MAD 检索过去辩论的经验，并依据当前讨论状态和同伴置信度分配参考权重。多个骨干在四组任务上获得总体改善，数学任务收益较弱。方法需要带可靠结果反馈的离线记忆，也增加检索和评估开销；若记忆本身有系统性错误，反而可能强化错误共识。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03619)

## LLM训练与对齐

### 修改别的模型写的代码，怎样少做无关重写

CROCODIL: Cross-Model Code Editing with LLMs

🌟🌟

代码模型接手其他模型的实现时，容易连无关部分一起改。Crocodil 同时奖励测试通过和编辑幅度小，使 OLMo-3-7B 在多个实现来源上减少改动。对 Qwen 生成的 Rust 函数，全测试通过率从 16.92% 升至 19.07%；但修改自身代码时反而下降。证据仅覆盖函数级 Rust 编辑，不能直接外推到跨文件重构。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03894)

### 训练模型写测试，先保证测试本身正确

Two-Stage Reinforcement Learning for Sound and Adversarial Test Generation in Code LLMs

🌟🌟

生成测试可以帮助挑选代码，但错误测试也会错杀正确实现。TCS 让同一模型兼任解题者和测试者，先学会生成经参考程序验证的测试，再学习针对候选错误构造反例。实验显示，在线训练改善了代码生成与测试筛选能力。关键前提是训练时有可信参考解；一次只生成一个测试，也限制了推理效率。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03955)

### 先蒸馏再强化学习，减少两种信号互相干扰

Sequential Beats Joint: On the Interplay between On-Policy Distillation and RLVR

🌟🌟

教师示范与结果奖励未必适合同时优化。研究先让学生在自身生成轨迹上模仿教师，再切换到可验证奖励训练；相同步数预算下，顺序训练在逻辑任务优势明显。数学任务平均表现虽领先，却与三个强对照统计并列。结论适用于固定教师和所用蒸馏目标，不代表所有教师配置都应采用这一顺序。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04108)

### 从执行轨迹重建环境，再生成更丰富的终端任务

Terminal-Universe: Turning Agent Trajectories into Scalable Terminal Environments

🌟🌟

终端代理训练缺的不只是题目，还有可运行的工作区。Terminal-Universe 从旧轨迹重建环境，再扩展同区、跨区和多轮任务。用筛过的 3.2 万条轨迹微调后，Qwen3.5-27B 在同一执行框架下的 Terminal-Bench 2.1 通过率从 46.2% 升至 58.1%。但题目、解答和验证器出自同一教师，可能漏掉共同错误。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04148)

### 一个训练问题，也能产生许多蒸馏状态

Rethinking On-Policy Distillation of Large Language Models II: One Training Example

🌟🌟

在线蒸馏的数据量，不能只看问题数。研究反复让学生回答同一个问题，再用教师反馈训练，发现一题也能产生多样的中间状态，并恢复全量训练的大部分收益；少量多样问题进一步接近全量。这里的“一题”仍需数百次更新，绝非一次学习；状态覆盖也是语义聚类代理，不能证明所有任务都无需更多数据。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04172)

### 同样的知识，换成不同解释比单纯改写更有用

Knowledge Acquisition During Pre-training? Large Language Models Learn Better With Auxiliary Views

🌟🌟

给模型重复材料，是否不如换一种方式解释？研究把文献改成教材、问答和博客，在相同 token 预算下与原文及改写比较。辅助视角同时改善事实回忆和推断探针，且较大模型收益更明显。它提示数据设计应关注解释角度；但只有 36 篇来源文献，贴近预训练的控制也只是已有模型后期的短程实验。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04180)

### 给模型加可查找的局部模式记忆

Lngram v2: Latent N-Gram Memory with Interpretable Discrete Representations

🌟

反复出现的局部模式，是否必须都由主干网络重新计算？Lngram v2 把内部表示转成离散地址，查询短序列记忆，再按当前上下文读出。Keye2B 继续训练相同 token 数后，基准均分由 47.25 升至 47.93，同时增加约 1.56 亿参数。收益较小但设计可研究；较大模型与部分基线只有单次训练结果。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03426)

### 奖励工具调用，应看它是否补上关键证据

Making Every Tool Call Count: Necessary Tool-Evidence Path Rewards for Agentic Vision-Language Models

🌟🌟

只奖励最终答案，无法区分有用检索与重复调用。NTEP-R 先由教师提炼必要证据节点，再分别奖励调用前的目标和调用后的信息获取。在统一三工具环境中，七项视觉基准均分比复现基线高 2.03 分，搜索类平均调用从 2.54 次降至 1.89 次。但主要比较只有一次训练，外部代理改接统一接口也会影响表现。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03493)

### 更强的拒绝训练，也可能带来更多误拒

Beyond Shallow Alignment: How Post-Training Methods Determine Refusal Circuits And Steering Robustness

🌟🌟

安全训练既要阻止有害回答，也要避免拒绝正常请求。研究在三种模型上比较监督微调、加入推理的微调和偏好优化，并检查内部拒绝机制。Gemma 的偏好优化显著压低攻击通过率，却仍有 31.6% 的良性请求被误拒。结果呈现了安全与可用性的取舍；训练样本形式并非完全一致，也只覆盖 8—9B 规模。

[阅读论文 PDF](https://arxiv.org/pdf/2609.03887)

### 没有结果验证器，怎样训练长流程代理

DRACO: Fine-Grained Credit Assignment with Dynamic Rubrics for Long-Horizon Agent Training

🌟🌟

不少工具任务难以在训练时自动判断最终成功。DRACO 让固定裁判根据任务和轨迹更新评分条款，再把反馈分配到步骤。Qwen2.5-32B 在 AppWorld 普通测试的任务完成率从 35.7% 升至 62.9%，仍低于使用结果奖励的参考方案。改善由独立任务测试衡量，但不能证明条款准确或步骤归因正确。

[阅读论文 PDF](https://arxiv.org/pdf/2609.04094)
