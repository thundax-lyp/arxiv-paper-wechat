---
title: "arXiv Agent 与大模型研究简报｜2026-10-15｜入选论文全览 1/2"
author: "Thundax"
summary: "本期关注智能体如何把证据、协作与交付接成完整闭环：发现冲突之后是否真正修复，记忆带来的增益究竟来自哪里，以及长会话的计算能否少做重复工作。另有技能学习、推理压缩和训练评测的新方法。"
description: "本期关注智能体如何把证据、协作与交付接成完整闭环：发现冲突之后是否真正修复，记忆带来的增益究竟来自哪里，以及长会话的计算能否少做重复工作。另有技能学习、推理压缩和训练评测的新方法。"
---

# arXiv Agent 与大模型研究简报｜2026-10-15｜入选论文全览 1/2

本期关注智能体如何把证据、协作与交付接成完整闭环：发现冲突之后是否真正修复，记忆带来的增益究竟来自哪里，以及长会话的计算能否少做重复工作。另有技能学习、推理压缩和训练评测的新方法。

本期入选论文全览。

## 智能体系统与工具使用

### 长会话的首词延迟，可能卡在反复分词

Delta Tokenizer: Reference-Identical Tokenization of Session Deltas and Segment-Parallelism for Long Prompts on Multicore CPUs

🌟🌟🌟

模型已复用旧上下文缓存，处理器却仍可能每轮重做整段分词。研究缓存会话词元，只重编码新增文字与可变尾部，在稳定边界精确拼接，并将长请求安全分块调度。集成测试中，十万词元聊天的中位首词延迟下降59%。新会话与全新文档仍需完整处理，收益取决于负载结构。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19801)

### 用执行证据优化提示，还要追踪修好了什么、弄坏了什么

HERO: Harnessing Evidence for Test-time Refinement and Prompt Optimization in Program Generation

🌟🌟🌟

反思生成的提示改动可能修复旧错，也可能破坏原本正确的程序。研究先离线结合成功与失败执行记录提议并验证修订，再在线依据可见执行反馈修复具体代码。四种编程基准上，离线首次通过率平均提高7.6个百分点，在线再提高约2点；执行次数相近仍不代表总调用成本相同。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19184)

### 让语音智能体学会遵循未见过的受监管流程

Following the Flow the Law Requires: Training Voice Agents to Transfer to Unseen Regulated Procedures in Debt Collection

🌟🌟

能完成催收对话，不代表遵循规定顺序。研究从同一机器可读规范派生指令、工具门控、训练与测试，让小模型选择审核过的话术。训练后，43个场景的通过数由15增至40。但测试与监督共用规范，审计仍发现规范缺陷；结果衡量的是流程符合性，不能直接视为法律合规。

[阅读论文 PDF](https://arxiv.org/pdf/2610.18881)

### 用户纠正不都该变成长期技能

Learning What to Keep: Transfer-Aware Personal Skill Learning from User Feedback

🌟🌟

一次写作反馈常混着长期偏好与本次要求。研究把反馈拆成原子规则，学习哪些适合跨请求保留，再联合优化技能更新与回答。三个小型骨干在五类写作任务上取得更高平均成绩，提示“记住什么”需要训练。但部分画像与反馈是合成的，真实用户的长期效果及隐私边界尚未建立。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19380)

### 异构智能体共享经验，需要先解决合并与适用条件

XferAgent: Cross-Agent Experience Transfer for Self-Improving LLM Agents

🌟🌟

另一个智能体的成功经验，未必适合当前工具与任务。研究将本地和共享经验组织为图，约束兼容合并，按新任务选取经验，再记录使用后的结果。助手基准中部分配置获得数个百分点收益。重复任务的累计成功不能当作单次泛化能力，去除原始轨迹也不构成正式隐私保证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19581)

### 长任务训练要保留证据、决策与后续效果的关系

Interlock: From Local Correctness to Task Completion in Long-Horizon Agents

🌟🌟

逐项要求看似满足，整体工作仍可能没有完成。研究用完成图连接依据、共同约束、决策和必要产物，据此合成环境，再筛选全部条件通过的轨迹训练。两个骨干在外部自动化任务上提升约4至4.5个百分点。收益来自整套合成与过滤流程，不能单独归功于图表示。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19686)

### 模型路由不仅选谁回答，也选怎样组织计算

RouteWeaver: Weaving Mode Selection and Execution into Unified LLM Routing

🌟🌟

有些问题一次调用即可，有些需要多轮或分工。研究让路由器先选择执行模式，再决定模型与调用依赖，通过分层信用和渐进探索共同训练。五领域平均准确率达61.4%，最强对照55.3%。最高分配置未惩罚成本，调整成本权重会损失准确率，部署时仍需重测真实调用账单。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19705)

### 技能优化可以小步编辑，却不必只看眼前得分

AtomSearch: Evidence-Grounded Tree Search for Agent Skill Optimization

🌟🌟🌟

一次改许多规则难以审计，逐步贪心又会丢掉有前途的中间版本。研究以成功失败对照提出原子编辑，用技能状态树搜索保留组合路径，并记录修复与回归。在部分任务模型上，技能更短且得分更高。代价是额外离线评估，小幅组件增益还缺跨任务与统计复验。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19951)

### 网页动作不必每次都生成一串文字

Why Generate a Click? Plug-in Decision Heads for Web Agents

🌟🌟

点击和选择本质上常是有限候选决策。研究在冻结视觉语言生成器上外挂决策头，高置信度时直接选动作，低置信度时复用缓存继续生成。在网页任务上小幅提高成功率，并将生成词元降至一半以下。但宽松阈值在其他任务有退化，方法也依赖编号候选框，不能直接迁移任意坐标操作。

[阅读论文 PDF](https://arxiv.org/pdf/2610.20107)

## 大模型推理与规划

### 稀疏注意力既要选得准，也要读得快

Joint Subspace Sparse Attention for Efficient Long-Context Decoding

🌟🌟🌟

长上下文解码的瓶颈不仅是挑出少量词元，还在于读取零散缓存。研究用共享查询键子空间保留排序信息，再通过免聚集索引内核直接访问选中位置。在特定模型和单卡条件下，12.8万词元上下文解码吞吐最高达到完整注意力的6.43倍；不同架构收益差距明显，峰值不能当作普遍加速。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19026)

### 多采样未必更可靠，关键在奖励分布的尾部

Tail Competition Explains Scaling in Best-of-N Sampling for Verifiable Problems

🌟🌟

生成更多答案之后，仍要靠不完美的奖励模型挑选。研究将选优看成正确与错误答案最高分的竞争：错误答案即便平均分低，也可能因尾部更重而逐渐占上风。理论和实验解释了收益与退化，并提出提前停止信号。该信号对分布分量的解释存在假设，不是无标签正确性保证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19362)

### 扩散解码提前算下一块，必须连采样状态一起接力

One Block Ahead: Promoting Sampler State in Diffusion Language Models

🌟🌟

当前块尚未完成时，下一块能否提前去噪？研究让两块并发计算，提交时继承词元、自条件信号与去噪时间。在一个扩散模型、单卡单请求设置下，每次前向产出增加42.3%，实际吞吐提高16.3%，平均准确率下降1.37个百分点。只继承词元反而可能变慢，不能忽略状态接力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19510)

### 沿着不确定性回退，定点修复推理后半段

REWIND: Uncertainty-Guided Trajectory Repair for Test-Time Reasoning

🌟🌟

早期错误会约束后续推理，完全重采样又可能浪费正确前缀。研究从词元熵峰向前寻找突增位置，对齐句段边界后重写后缀，在三类模型上改善结果。但生成预算约为单次采样的九倍，统计还未包括熵计算的额外前向；它证明了干预有用，并未证明精确找到了首个错误。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19561)

### 冻结骨干，也能学习一段连续空间里的推理

INTACT: Inducing Latent Reasoning on a Frozen Backbone

🌟🌟

研究用外置编码器读取冻结模型的内部状态，将部分文字推理替换为连续向量块，再保留后续文字推理与答案。先蒸馏、再按正确性优化后，四个骨干多项任务改善，某个30亿参数配置延迟降低19%。每个骨干都需独立训练，潜在步骤难以解释，位置数减少也不等于同比加速。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19568)

### 把下一轮草拟藏进验证时间，减少解码等待

JetSpec\+\+: Foresight Parallel Drafting with Self Refinements

🌟🌟

推测解码既要草拟准确，也要避免草拟本身拖慢验证。研究提前预测目标状态，在当前块验证时启动下一块，并利用空档反复修正。特定硬件和服务设置下最高比自回归快7.45倍、比强草拟基线快1.54倍。收益同时来自训练与流水实现，不能只凭接受长度推算实际速度。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19792)

### 让小模型筛证据，大模型只处理必要记忆更新

MemDuet: Learning Dual-Process Memory for Long-Context Reasoning

🌟🌟

长文档逐块改写记忆，会让大模型反复处理无关内容。研究用小模型并行筛选片段，大模型再核验并按文档顺序更新，联合训练两种策略。相对既有记忆智能体，跨设置平均推理加速9.74倍。收益在长输入更明显；短输入可能掉分，小模型漏掉的关键证据也无法由后端补回。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19928)

### 用文言压缩推理，优势主要出现在紧预算下

Does the Linguistic Register of Thinking Matter? Wenyan as a Compact Reasoning Register for Chinese LLMs

🌟🌟

中文推理模型可能把预算耗在未完成的长思考上。研究只改写训练中的推理字段，比较文言与紧凑现代中文。短预算下两者都显著减少缺失答案，文言在主基准略好；放宽预算后原模型部分反超。因此更稳妥的结论是压缩与答案完成有效，而非文言普遍增强推理能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19741)

## 检索增强生成与知识检索

### 翻译检索的目标，应是帮助译对而非总能检索

Retrieve What Helps, Only When It Helps: Agentic Reinforcement Learning for Selective Retrieval-Augmented Machine Translation

🌟🌟

外部资料对部分成语和背景知识有帮助，对另一些句子却徒增噪声。研究用强化学习决定何时直接翻译、何时检索，再让检索器对齐最终译文质量。在离线资料和在线搜索设置中，选择性检索优于固定策略。结果较依赖自动质量裁判，跨更多语言及真实搜索变化仍需单独检验。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19528)

### 循环模型检索失败，不一定只是记忆容量不足

Beyond State Capacity: Why Retrieval Breaks in Mamba

🌟🌟

即便问题先出现、理论上只需记住一个目标，状态空间模型仍可能检索失败。研究加入局部相关标记，并交换选择门值与训练逐层探针，发现相关信号常在关键写入层之后才出现。这给出容量之外的信息流解释，但实验限于第二代架构与合成键值任务，尚未验证自然文档。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19709)

### 企业群聊记忆，按频道、人物和交付物同时组织

EGCForest: Structured Agent Memory Organization for Enterprise Group Chats

🌟🌟

企业问答的证据常散落在不同群聊、发言人与时间点。研究保留不可变原始消息，再建立频道、人物和产物三种森林，用跨视图连接恢复分散依据。多项群聊问答基准优于独立检索和记忆基线。但当前收益以问答衡量，大规模增量更新、附件与长期工作流尚未得到验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19836)

## 多智能体与协作

### 发现协作冲突之后，智能体仍常忘记收尾

CLASHarness: Benchmarking Multi-Agent Conflict in Computer Use via a Controllable and Verifiable Generation Pipeline

🌟🌟🌟

同伴声称系统正常，现场证据却可能显示相反情况。研究合成600轮可执行冲突，先确定事实，再生成视觉材料与参考轨迹，分别检查调查、修复和交接。最高任务通过率仅28.7%，领先模型仍有超过58%的收尾协议动作失败。结果来自受控日志环境，不能等同真实团队的总体失败率。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19128)

### 跨组织智能体为何失败：私有状态改变了协作问题

Why Do Agent Teams Fail Across Boundaries? A Failure Taxonomy for Agent-to-Agent Systems with Private States

🌟🌟🌟

买方与卖方的智能体并不共享资料、权限或目标。研究在隔离环境中分析超过2500次运行，归纳发现与委派、记录一致性、核验、行为忠实性四类共20种失败。只看牵头方终稿，会漏掉内部协作失灵。模型与支架尚未完全分离，分类有诊断价值，观察频率却不宜直接推广。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19342)

### 跨模型传事实，可以传词索引再写入各自内部状态

Share the Symbol, Not the Vector: Training-Free Fact Communication Across Language Models

🌟🌟

不同模型的隐藏向量未必可直接交换。研究让发送者传共享词表索引，接收者用自己的词方向将事实写入早层状态，无需训练跨模型翻译器。固定属性任务的迁移表现良好，但多数设置未超过文本通信，地标任务明显落后且延迟更高；它展示接口可行性，而非全面替代自然语言。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19696)

### 自进化团队的收益，可能来自强者接管与成员退让

Evolve Together, Fall into Place: How Social Scaffolding Shapes Self-Evolving Multi-Agent Systems

🌟🌟

让智能体不断改提示或记忆，并不保证团队更好。研究独立改变团队能力组成与协作结构，发现合适结构常通过把领导权交给强成员、让其他成员只解除瓶颈而改善表现。不过每条件只演化一次，共享硬件和时限也可能放大减少成员活动的收益，不能直接套成人类组织规律。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19799)

### 协作谈得顺，不代表双方形成了可执行计划

What Makes a Social Agent's Interactions Effective? Learning from Verifiable Outcomes in Paired Worlds

🌟🌟

研究让持有私有条件的两个智能体对话后分别记录计划，用程序检查一致与可行，再检查对话是否支持承诺。约36%的高目标评分对话仍未通过核验。成对改变一个私有条件可为训练提供回合信用，但完整性仍依赖模型裁判，部分训练基线覆盖的场景数也不同。

[阅读论文 PDF](https://arxiv.org/pdf/2610.20195)

## 大模型训练与对齐

### 给语言模型增加一条直接复制上下文的通路

Copy-Paste Language Models

🌟🌟

注意力读到了旧词元，最终输出仍要经过词表预测。研究增加指向上下文位置的复制头，为已出现内容提供另一条预测和梯度路径。在最大17亿参数的模型上，训练、代码和长上下文多项结果改善。它只能缓解可复制词元的瓶颈，尚不能说明更大模型也有同样收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19247)

### 训练智能体时，错误解释能补充正确动作

Beyond Corrected Actions: Training LLM Agents on Textual Critiques

🌟🌟

只给学生模型正确动作，可能没教会它为什么原动作不合适。研究让专家对学生自身轨迹生成文字批评与纠正动作，再共同用于微调。四类学生在客服和网购任务上普遍优于动作蒸馏，部分消融也支持批评的独立价值。但专家可获取特权任务信息，标签质量与实际用户反馈仍有距离。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19367)

### 从推理中途分叉，给扩散模型更细的训练信用

ForkGRPO: Efficient Exploration and Fine-Grained Credit Assignment for Diffusion Language Models

🌟🌟

每次从题目重新采样，容易浪费共享推理前缀。研究从高熵中间位置分叉，比较同一状态的不同续写，再以状态价值变化为推理片段分配信用。与直接可比基线相比，准确率小幅提高、生成词元减少。主训练大多只有一次运行，快速版的速度收益也有特定任务与实现条件。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19408)

### 让一个预测器统一规划模型的跨层连接

DAGFormer: Global Topology Prediction for Transformer Cross-Layer Connections

🌟🌟

逐层决定信息从哪里来，可能错过全模型的协同结构。研究用小型预测器一次生成跨层连接图，再做局部修正，最高十亿参数模型的困惑度与下游成绩改善。代价是额外参数及每词元约1.18至2.13倍计算，多数训练设置只有一个种子；更低损失不能直接理解为部署更便宜。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19625)

### 合成知识语料，先确定哪些细节不能漏

AFCS: Atomic-Fact-Conditioned Synthesis for Factual Knowledge Pretraining

🌟🌟

让模型改写整段资料，容易漏掉次要实体、表格项目和具体日期。研究先按文档结构抽取并核验原子事实，再围绕事实生成多种训练样本。在相同续训词元预算下，两个模型规模的事实问答均改善。不过语料覆盖不等于模型真正学会，抽取错误与大规模离线生成成本仍需计入。

[阅读论文 PDF](https://arxiv.org/pdf/2610.20086)

### 日语模型报告把可复现要求贯穿训练全程

LLM-jp-4 Technical Report

🌟🌟

语言专用模型能否复现，取决于数据、外部模型和软件是否都能获得。该报告公开这些选择原则，并训练稠密与混合专家两类日语模型，采用预训练、中训练、监督微调与偏好优化。日语能力较前代提升，也提供许可与数据治理参考；这是完整工程报告，不能把对话裁判分数当作通用能力证明。

[阅读论文 PDF](https://arxiv.org/pdf/2610.19331)
