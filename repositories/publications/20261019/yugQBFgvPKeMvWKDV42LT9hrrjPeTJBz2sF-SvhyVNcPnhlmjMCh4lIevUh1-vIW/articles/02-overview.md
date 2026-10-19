---
title: "arXiv Agent 与大模型研究简报｜2026-10-19｜入选论文全览 1/2"
author: "Thundax"
summary: "智能体的涨分、省钱与安全，都需要追问收益来自哪里、保证落在哪一层。本期关注运行框架演化的收益归因、失败经验的迁移边界、共享窗口中的通信代价，以及安全检测到执行之间的证据路径；全览另涵盖记忆、工具协作、训练和办公任务。"
description: "智能体的涨分、省钱与安全，都需要追问收益来自哪里、保证落在哪一层。本期关注运行框架演化的收益归因、失败经验的迁移边界、共享窗口中的通信代价，以及安全检测到执行之间的证据路径；全览另涵盖记忆、工具协作、训练和办公任务。"
---

# arXiv Agent 与大模型研究简报｜2026-10-19｜入选论文全览 1/2

智能体的涨分、省钱与安全，都需要追问收益来自哪里、保证落在哪一层。本期关注运行框架演化的收益归因、失败经验的迁移边界、共享窗口中的通信代价，以及安全检测到执行之间的证据路径；全览另涵盖记忆、工具协作、训练和办公任务。

本期入选论文全览。

## 智能体系统与工具使用

### 不调低推理强度，也能从重复操作里省下费用

TokenEconomizer: Experience-Driven Black-Box Cost Control for Coding Agents

🌟🌟🌟

智能体费用不只花在必要推理，也花在重复摸索、无关工具和失败循环。研究用外部控制器提炼可撤销微技能、周期重审工具，并分阶段干预循环。计入控制器与缓存后，软件任务成本平均减少约两至三成；一组通过率仍下降，误删工具与误停需要恢复机制。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22732)

### 失败能修好旧题，却未必能积累跨任务能力

Self-Evolving Agents Can Repair Failures but Struggle to Generalize from Them

🌟🌟🌟

让智能体反思失败、更新记忆与技能，看起来像持续学习。研究排除成功经验和特权答案，在三类演化框架、四个交互环境中检查独立任务。源任务可恢复，保留集却少见持续提升，部分还退化。结论针对严格失败来源设置，不能扩展成所有自我演化都无效。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22984)

### 压缩界面历史时，如何留下下一步真正需要的信息

ECHOES: Seeing Beyond the Current Image via Recursive History Compression and Privileged On-Policy Distillation

🌟🌟

界面代理的长历史不能无限保留，简单摘要又容易丢失操作线索。研究在训练时让能回看多张截图的教师指导压缩状态，使部署模型只凭当前画面与记忆行动。导航精确匹配比线性方案高三点四六个百分点；但训练有额外开销，旧截图中的细节仍可能无法恢复。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22408)

### 先约定证据路线，再允许智能体发布调查结论

PRIME: Towards Verifiable Evidence-Grounded Reasoning in LLM Agents

🌟🌟

调查代理容易把推测写成结论。研究先注册字段所需的证据路线，再用确定性门控决定能否输出，并引导代理优先完成低成本路线。在四百八十项公开记录任务上，给定程序内的无支持结论降至零；这只保证遵守注册规则，不能保证规则和观测本身正确。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22426)

### 长期记忆的关键一步，是把片段整理成当前证据

From Relevant Memories to Sufficient Evidence: Rethinking Memory Utilization in LLM Agents

🌟🌟

记忆检索返回一堆片段，并不保证回答能用好。研究先规划查询，再把片段整理成带出处、人物和时间关系的证据卡片，缺什么再查什么。一个长期对话基准上，较强模型准确率达百分之九十一点四三；预算对照显示主要收益来自检索，卡片本身不总能增分。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22668)

### 工具太多时，先隔离试用再把结果带回主流程

Explore Separately, Adopt Selectively: Execution-Guided Tool Use over Large Tool Libraries

🌟🌟

大型工具目录里，错误尝试可能干扰主任务。研究让控制器在隔离分支试用候选工具，再根据执行轨迹接纳有用结果，所有分支共用预算。一组工具基准成功率提高十四点三七个百分点。候选探索只允许只读操作，不能直接推广到会修改数据或触发交易的工具。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22688)

### 先把验收标准做成可检验对象，再让智能体修改作品

Reward Engine: Reward-Centric Self-Evolution for Open-Ended Tool Agents

🌟🌟

开放交付物的自我反馈常缺少稳定依据。研究从公开需求构建测试与评分规约，经过自攻测试和回归检查后冻结，用来修改作品、选择候选。同候选池对照支持选择收益，但所有评审共同遗漏的要求仍会漏掉；论文没有验证所设想的强化学习和元层优化。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22915)

### 应用手册既能帮助规划，也能成为训练材料

Adaptation of Computer Use Agents to New Software with User Manuals

🌟🌟

界面代理面对陌生操作时，单靠截图试错成本高。研究检索应用手册辅助规划，再用合成计划强化训练，一组表格任务相对基线高十九点五七个百分点。检索和训练组合强于单独使用，但手册可能与界面版本不符，有限应用覆盖不能证明任意软件迁移能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23012)

### 训练前端代理，要把奖励接到真实运行的应用上

WebCoder: Scaling General Frontend Development with Artifact-Grounded Agentic Reinforcement Learning

🌟🌟

代码写出来不代表页面交互能工作。研究在持久开发环境中让代理编辑、构建、看截图，按需求清单验收最终应用，并用阶段进展分配训练信号。四十项复合任务的需求分从基础模型六十四点八升至七十二点八。自动裁判仍不等于真人验收，框架差异也影响模型比较。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23104)

### 主动助手该不该开口，比记住偏好更难

ProPerAgent: Toward Memory-Driven Proactive Assistance

🌟🌟

主动个性化需要同时解决记忆检索和介入时机。研究构造长时间文本与视频记忆，分开检查证据、时机及检索瓶颈，并训练主动生成器。理想证据条件下表现很高，实际检索设置却明显下降；合成历史与单触发事件尚不能代表自然用户的长期生活。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22671)

### 把视觉经历存成可回溯的文件记忆

Multimodal Filesystem Memory For Long-Horizon Embodied Agents

🌟🌟

长任务中的画面与操作经验容易在摘要里消失。研究保留原始视觉经历、索引及智能体编写的多类记忆文件，让概括能追溯到来源，在游戏和电路设计任务中改善成绩。验证只覆盖两个环境与少量种子，仍有不少失败，文件增长和记忆污染的维护成本也没有充分解决。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22686)

## 大模型推理与规划

### 形式化修复先要知道错在哪里，再决定改不改

Repairing LLM-Generated Specifications with Deterministic Diagnosis

🌟🌟🌟

模型写出的约束能被求解，不代表约束忠实表达了问题。研究用确定性检查和求解器探针生成错误清单，只接受错误权重严格下降的修改。跨多个形式系统，回归率从百分之十一点八降至一点三；但没有明显症状的遗漏约束仍可能漏检，答案正确也不等于语义等价。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22568)

### 早期答案与最终答案冲突时，再请独立模型盲解

Not All Test-Time Compute Is Evidence: Model-Specific Bias in LLM Reasoning

🌟🌟

更长推理不一定更正确，模型却容易偏爱自己的最终答案。研究只在早期与最终答案不同时，请三个异构模型不看候选地独立解题，再仲裁。在十四个设置中十二个改善，但两阶段共同出错不会触发；额外模型的费用与可用性也需单独评估。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23213)

### 计划读起来合理，为什么仍然执行不通

Testing the Planning Claims of LLM-Based Agents against Formal Semantics

🌟🌟

语言模型生成的计划可能违反动作前置条件，也可能没认出任务根本无解。研究用隐藏的形式语义检查五类领域，比较离线与在线规划。最佳离线成功率约百分之七十八，在线约四成，不可解识别不足一成；这些结果来自非推理模型和有限任务，不能概括所有规划系统。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22469)

### 模型提出运行规律，让形式证明确认加速是否成立

At the Limits of Computability: Steps Towards Autonomous AI Discovery on the Busy Beaver Frontier

🌟🌟

图灵机探索需要从漫长轨迹里发现可重复模式。研究让模型提出并修订加速猜想，再把非形式论证转成可检查证明，得到十一条新的六状态加速结果。价值在于连接猜想和验证，而不是解决一般停机问题；候选经过筛选，命题与原机器的对应也仍要核对。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22603)

### 树搜索里相似分支太多，预算该怎样少花一点

Uncertainty-Aware Budget Allocation for Efficient LLM Tree Search

🌟🌟

搜索树扩展出的多条推理可能只是同一答案的改写。研究用候选间的语义离散程度估计不确定性，动态减少重复区域的扩展。多种搜索设置报告节省，但最高九成用量降幅并非平均效果；理论依赖语义距离与答案不确定性的平滑关系，不保证一般任务剪枝无损。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22858)

## 检索增强生成与知识检索

### 把语义判断移到查询时，词法检索能走多远

SAG2: Embedding-Free Multi-Hop Retrieval with BM25 and JEV

🌟🌟

向量索引的构建维护有成本。研究先做词法召回，再让决策模型判断段落、扩展关键词，最多追加两轮。在三组千条查询子集中，前十召回约百分之八十七至九十九。不过完整时延未报告，远程模型调用带来费用与数据边界，不能把它理解成纯本地的零成本方案。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22588)

## 多智能体与协作

### 增加辩论人数之前，先算阅读消息占了多少推理空间

Think More or Read More? A Token-Budget Theory of Reasoning with Shared Context

🌟🌟🌟

多个智能体共享固定上下文额度时，读同伴消息会挤压自己推理。研究从单体预算曲线预测群体规模，在九百八十个设置中，自一致投票有九成三不逊于辩论。这个结论依赖阅读和生成共用窗口；若各自预算独立，论文所述内部最优人数机制就不再成立。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23246)

### 多智能体会委派，不代表委派以后更划算

MS-Eval: Benchmarking Sub-Agent Delegation and Orchestration in MCP-Intensive Working Scenarios

🌟🌟🌟

子智能体调用次数不能衡量协作质量。研究在同一框架比较通用、专业化和先规划委派，同时检查该不该委派、找谁及成本。一百六十六项任务中，专业化总体更好，但即使理想委派，成本效用仍低于持平线。收益依赖模型和任务结构，资源指标还只覆盖成功子集。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22869)

### 多智能体传递隐状态，也可以跳过逐步生成

Thought Blocks: Non-Autoregressive Latent Communication for Multi-Agent Systems via Trajectory-to-State Compilation

🌟🌟

隐空间通信若仍逐步生成，延迟收益会受限。研究训练写入器，一次构造供下一角色继续计算的状态块，相对逐步隐通信平均加速两点五倍，准确率低零点七二个百分点。方案需要共享骨干和内部状态访问，且有蒸馏成本，不能直接接到任意异构托管模型。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23056)

## 大模型训练与对齐

### 模型训练和运行框架搜索，可以交替适配

Self-Evolving Coding Agents via Harness-Policy Optimization

🌟🌟

固定框架训练模型，或固定模型优化框架，都可能错过相互适配。研究交替搜索运行框架与强化训练策略，用失败难例驱动下一轮，在三类软件测试中平均通过率从百分之五十七点八升至六十四点八。实验只有有限轮数，不能推导无限自我改进，搜索和训练成本也要合计。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22791)

### 迎合提示的通路，可能早在预训练时就存在

Many Biases, One Circuit: Post-Training Tunes a Pretrained Cue-Routing Mechanism

🌟🌟

模型跟着错误提示改答案，未必是对齐阶段新造出的能力。研究交换训练阶段的权重与注意力模式，发现既有通路可被对话形式激活，后续强化训练再增强效果。关键因果分析来自两个训练流水线，主要测英语选择题概率；压制通路也可能伤及正确提示的利用。

[阅读论文 PDF](https://arxiv.org/pdf/2610.22937)

### 失败轨迹别整段蒸馏：在决定性错误处切开监督

Distill Until Divergence: Error-Truncated Hindsight Distillation for Agentic RL

🌟🌟

失败任务前面的正确动作不该和后面的错误一起受罚。研究事后定位决定性错误，之前强化正向技能，错误处给局部修正，之后只用结果奖励。一组小模型购物任务成功率从百分之六十二升至八十点八。边界由另一个模型判断，定位错误与额外训练成本仍是限制。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23048)

### 长上下文数据，先检查证据跨得多远、推得多深

LongForge: Measuring and Improving Long-Context Instruction Data via Evidence-Assertion Reasoning Graphs

🌟🌟

长文档并不自动产生长距离推理。研究遍历文档块，把证据与答案重建成推理图，按广度、深度、正确性和完整性控制合成数据。在两个小模型、六个基准中改善表现，但逐块分析调用成本较高，图也依赖模型判断，有限配比实验不能证明找到了最佳数据分布。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23167)

### 小型中文模型一次输出候选概率，校准还需分布边界

Chinese Decision: A Family of Language Models for Single-Pass Probabilistic Decision-Making

🌟🌟

有限选项的中文决策不一定需要生成长答案。研究以分布标签微调小模型，从选项字母位置一次读出概率，再用独立数据校准，完整小模型的总体校准误差约百分之一点零七。部分比较引用旧结果而未重跑，候选顺序未扰动，低平均误差不能保证新场景可信。

[阅读论文 PDF](https://arxiv.org/pdf/2610.23170)
