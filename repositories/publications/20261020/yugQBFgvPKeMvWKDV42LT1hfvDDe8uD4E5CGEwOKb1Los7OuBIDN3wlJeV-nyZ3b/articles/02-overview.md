---
title: "arXiv Agent 与大模型研究简报｜2026-10-20｜入选论文全览 1/2"
author: "Thundax"
summary: "本期关注代理系统里的三个具体问题：长期记忆何时会失效，便宜控制器为何未必省钱，以及技能与评测标准怎样保持可检查。相关工作把原始历史检索、依赖撤回、固定流程和评分清单放到更明确的对照下，也揭示了不少收益成立的条件。"
description: "本期关注代理系统里的三个具体问题：长期记忆何时会失效，便宜控制器为何未必省钱，以及技能与评测标准怎样保持可检查。相关工作把原始历史检索、依赖撤回、固定流程和评分清单放到更明确的对照下，也揭示了不少收益成立的条件。"
---

# arXiv Agent 与大模型研究简报｜2026-10-20｜入选论文全览 1/2

本期关注代理系统里的三个具体问题：长期记忆何时会失效，便宜控制器为何未必省钱，以及技能与评测标准怎样保持可检查。相关工作把原始历史检索、依赖撤回、固定流程和评分清单放到更明确的对照下，也揭示了不少收益成立的条件。

本期入选论文全览。

## 智能体系统与工具使用

### 记忆中的结论，必须随依赖失效而撤回

Memories That Outlive Their Reasons: Dependency-Tethered Memory for Tool-Using LLM Agents

🌟🌟🌟

昨天核验通过的对象，今天可能因上游密钥撤销而失效。作者把结论与精确版本依赖绑定，读取前撤回失去支撑的旧结论，在合成发布任务中把上游失败对象误发布降至约0.3%。安全收益取决于写入时捕获关系：依赖跨会话出现后，错误率明显回升。

[阅读论文 PDF](https://arxiv.org/pdf/2610.25123)

### 判断更准的控制器，为何让代理更贵

Good Judgment, Bad Advice: Decision-Model Controllers Raise Agent Cost Without Improving Success

🌟🌟🌟

便宜的判断模型不一定让代理便宜。作者固定终端代理循环，比较规则、小模型、单次决策模型与随机安慰剂：决策模型成功率同为73%，成本却高19%。其判断排序有信息，但低估完成概率而重复核验；结论限于21个任务及这一干预策略。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24649)

### 技能内部保留语言判断，依赖关系交给运行时

Where Natural Language Ends in Agents: Executable Skill Composition with MetaSkill

🌟🌟🌟

多个技能各自能做事，组合时仍可能漏掉顺序或上游输出。作者保留完整技能包，只把依赖与文本交接做成可执行图，在20个任务中验证协调并比较产物。一组偏好显著高于提示图，其他比较仍有不确定性；执行合规也不等于产物内容正确。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24723)

### 重复出现的代理决策，可以先求解再复用

Bellman Language Models: Solving the Recurring Decisions of LLM Agents

🌟🌟🌟

有界业务中，代理常在相同状态重复决定同样动作。作者从日志离散化状态、估计成本并求解策略，遇到未知状态再交回模型；电信测试显著减少调用并提高完成数。不过同场景固定顺序也很强，收益主要来自可靠执行流程，不能全归功于最优求解。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24871)

### 知道何时停止干预，也是代理控制能力

Agents' Last Doubt: Knowing When to Act and When to Step Back in Tool-Using Agents

🌟🌟

只看已执行动作，很难知道追问、继续或转交是否更好。作者用同状态分支收集反事实结果训练控制器。值得注意的是，持续干预反而拖累端到端分数，加入交还控制权的规则才改善均值；这提示动作排序变准与系统真正获益必须分开验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24194)

### 搜索过程中改需求，模型能否及时换目标

SteerSearch: Interactive Search Reasoning with Mid-Response Steering

🌟🌟

用户中途改了问题，搜索代理可能已检索新证据，却仍回答旧目标。作者通过带干预的轨迹训练纠正这种锚定，两种小模型的转向准确率均提高，同时保留常规搜索表现。实验主要来自构造的多跳问答，离真实复杂需求变更仍有距离。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24287)

### 界面世界模型要证明预测对决策有增量价值

Beyond Next-Screen Prediction: The Decision Value of GUI World Models

🌟🌟

预测下一屏看起来很准确，并不保证能选出更好的动作。作者固定候选并匹配监督后，直接训练动作排序器即可超过前瞻方案，下一屏预测没有提供可检测的额外排序信号。研究只覆盖一步预测，不能据此否定长程模拟或其他世界模型用途。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24372)

### 代理少问几次，也要问得更值

Ask Less, Ask Better: Allocating User Attention in Proactive LLM Agents with Interruption Budgets

🌟🌟

只数提问次数，分不清必要澄清与重复打扰。作者加入注意力成本和提问预算，一至三次提问可明显减少负担，同时保留多数总奖励。更关键的边界是，保留的提问增量收益只有49%至80%；少问仍有代价，记忆复核有助于把有限提问用好。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24411)

### 本地三百亿参数代理模型的能力与边界

Muse Glimmer 30B: An On-Device Agentic Model

🌟

本地代理模型需要同时兼顾工具调用、截图理解和推理开销。该报告整合三百亿参数主干、视觉编码器、四位量化与推测解码，在多项代理任务上表现有竞争力。但它并非所有指标领先，消费设备可用性也应按目标硬件和推理强度实测。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24628)

### 技能库要管理效用，也要淘汰失效经验

Selm: Self-Evolving Library Management for Multi-Skill Agent Optimization

🌟🌟

技能越积越多，错误检索和过时经验可能抵消收益。作者将技能优化变成库级管理：按效用检索，从任务经验更新，再验证或退役技能，在四类任务的多数设置中优于基线。效果依赖反馈与检索质量，不能只凭技能数量判断系统是否更强。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24630)

### 跨会话科研代理，把实验、分支与证据长期连起来

Epi: Towards a Persistent, Self-Improving Agent for Autonomous Research

🌟

研究任务跨越会话后，实验状态和失败经验容易断开。作者用持久历史、分支与固定验证器维持研究，报告多项构造和数值记录，并在算法任务比较中降低成本。记录按实例计数且有截止日期，不能等同于同数量独立突破；证书仍需读者自行复核。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24944)

## 大模型推理与规划

### 强化学习增益可能集中在少量关键词元选择

What RL Brings to Reasoning: A Few Decisions the Base Model Would Not Make

🌟🌟

强化学习后的推理提升，未必需要全面改写基础模型的生成。作者只在两者贪心选择不同的位置借用词元，约4%的位置便恢复大部分单次增益，并保留更多多样性。但每一步仍查询两个模型，因此这是机制诊断，不能当作免费推理加速方案。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24663)

### 扩散代理让旧计划可以原位修订

DiffuPlan: Editable Planning State for Diffusion Language Model Agents

🌟🌟

新证据出现时，追加一段新计划容易让上下文留着多份相互冲突的版本。作者让扩散代理维持一个可原位修订的计划，仅改动受影响部分；匹配训练下，收益明显大于自回归对照。证据集中于多跳搜索，尚不能推广为所有代理的最优状态协议。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24717)

## 检索增强生成与知识检索

### 复杂显式记忆，先和原始历史检索认真比一次

Do Conversational Agents Need Explicit Memory? A Controlled Comparison with Raw-History Retrieval

🌟🌟🌟

昂贵的记忆加工是否优于直接检索对话？作者把六种显式系统拆成构建、检索和回答，在两个基准上控制检索器与预算，未发现一致整体优势。理想检索进一步区分写入丢失与检索失败。结果针对历史问答，不涵盖隐私、遗忘或证据失效等全部记忆需求。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24671)

### 把文档写进参数前，先按问题聚合证据

Cache2LoRA: Understanding and Improving Context Internalization

🌟🌟

把长文档压成低秩参数，可以减少解码时携带的上下文，但事实保留与指令遵循是两道难题。作者先从冻结文档缓存按问题聚合证据，再训练写入器，17项任务成绩接近完整上下文。报告的5.9倍吞吐仅对应特定批量与输出设置，不能当作端到端收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24107)

### 把检索工具组合成可执行搜索程序

Learning to Program Retrievals: Composing Search Primitives via Reinforcement Learning

🌟🌟

多步检索若只暴露固定工具，模型难以控制中间筛选和证据聚合。作者让策略编写带局部状态与控制流的检索程序，并用可执行程序变异补充探索。在问答和语料推理上兼顾效果与上下文效率，但固定语料和接口仍限制开放环境外推。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24854)

### 让小型研究代理学会跨数据库和网页接证据

HybridResearcher: Bridging the Structured-Unstructured Boundary for Deep Research Agents

🌟🌟

企业问题常需先查数据库，再去网页解释结果，单源训练不一定教会这种衔接。作者从已验证任务补造另一侧资料，并过滤任一来源可单独解答的样本，小模型在混合研究测试中明显进步。主要结果为八次尝试通过率，不能当作单次交付可靠性。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24899)

### 分块预测参数记忆，推理时免显式检索

Deep Fusion Memory: A Chunk-Level Parametric Memory for Large Language Models

🌟

外部知识不一定每次回答时都检索。作者冻结骨干，训练按块预测记忆的模块，并把记忆融入隐藏层，减少离线监督所需的检索次数，在多个知识任务中改善成绩。但减少查询数不等于同倍数端到端加速，知识更新后的时效性也需另测。

[阅读论文 PDF](https://arxiv.org/pdf/2610.25100)

## 多智能体与协作

### 让经验共享机制也参与自我改进

Federation over Harness

🌟

多个代理共享经验时，负责提炼经验的流程也可能成为瓶颈。作者让服务器和客户端分别改进聚合与执行机制，报告优于固定框架和单独自演化基线。无需额外标签并不意味着可以免验收：演化稳定性明显依赖指南对经验库和反思的约束。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24007)

### 多代理科学搜索要分开评价生成与选优

The Weight of Teamwork: Does Communication Structure Help LLM Scientists Search for Scientific Laws?

🌟🌟

团队最终得分同时取决于提出了哪些候选，以及最后选中哪一个。作者在相同调用数的符号回归搜索中拆开两者，发现独立探索更有利，而换选优规则甚至能改变某些拓扑差异的方向。结果只覆盖有限模型和任务，也没有匹配全部词元成本。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24131)

### 多代理升级预算该先花在哪个角色

IF-MAP: Influence-Function-Inspired Agent Prioritization in Multi-Agent Systems

🌟🌟

失败最多的角色未必最值得升级。作者扰动各代理提示，估计系统输出对它的局部响应，再选择优化对象；六类工作流中，提示优化的平均增益高于均匀选择。探测本身有成本，局部敏感度也不保证能预测任意模型替换的实际回报。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24383)

### 多代理通信先传缺失证据，少传重复立场

Neuro-Inspired Inhibitory Message Passing for Accurate and Token-Efficient Multi-Agent Reasoning

🌟🌟

多代理互相重复答案，可能让少量关键证据被淹没。作者按接收者缺什么来传递原始证据句，并取消重复副本，在分布证据任务中同时提高准确率、减少词元。大幅增益建立在能识别证据来源的设置上，开放场景需验证证据匹配和路由错误。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24718)

## 大模型训练与对齐

### 用针对性回放保住强化学习中的正确解法

Preserving Reasoning Diversity in Reinforcement Learning with Verifiable Rewards via Adaptive Replay

🌟🌟

奖励相同的正确推理路径，也可能在有限采样训练中逐渐消失。作者保留基础模型的多样解法，只在这些行为受到压制时回放，在两个小模型规模上兼顾正确率与多样性。不过，方法无法恢复记忆库从未收录的路径，额外构建和回放成本仍需核算。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24236)

### 用户说不完整，训练需要更细的状态信用

Not Every User Says It All: Training Tool-Using Agents Beyond Ideal Simulated Users

🌟🌟

删掉用户回复中的句子，会让所有被测工具代理更难完成任务，直接在弱用户上训练却不稳定奏效。作者把每轮信息需求与缺口写成状态，再据此分组学习，在订票任务中改善成功率。模拟用户带有显式遮蔽标记，尚不能代表真实的沉默遗漏或误述。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24294)

### 四位预训练的稳定配方不能只看短跑

What Matters for NVFP4 Training? A Comparative Study of Low-Precision Pretraining Recipes

🌟

四位浮点训练在小模型短跑中稳定，不代表放大后仍可靠。作者在两类混合架构上对照多种配方，发现部分高精度层仍不可缺，早期看起来更好的方案也可能随后落后。结论依赖特定量化格式、硬件与架构，不能直接套用到任意训练栈。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24343)

### 长上下文扩展，选长文也要看依赖密度

Which Long Documents Matter? A Controlled Study of Data Selection for Context Extension

🌟🌟

继续训练长上下文时，随机抽自然长文已优于简单重打包，依赖关键词元更密集的长文还能带来增益。作者用前缀评分降低筛选成本，并在等训练预算下验证。收益主要体现在检索，聚合和变量追踪没有一致改善，因此不能把它当作全面推理增强。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24469)

### 本地编码代理求助云端时，怎样少泄露私有代码

Teaching Code Agents to Ask Without Leaking Private Code

🌟🌟

本地代理向云端专家提问，常会带出私有名字和源代码。作者用抽象重写减少暴露，再从同一执行状态重放修复，保留仍有效的求助作为训练。成功率提升伴随更少实体和原文披露，但这不是语义隐私保证，也不能把训练全部收益归于咨询本身。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24824)

### 只奖完成任务，学不到检查要适可而止

Over-Defense in Coding Agents Begins at Silent Forks

🌟🌟

任务成功后继续重复检查，往往不会被结果奖励惩罚。作者在结局不变、行为却分歧的位置训练偏好，把未见仓库的过度防御从70.3%降到58.9%。方法也保留漏检反例；收益依赖检查器如何定义适度，不意味着可以省掉必要验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.24949)
