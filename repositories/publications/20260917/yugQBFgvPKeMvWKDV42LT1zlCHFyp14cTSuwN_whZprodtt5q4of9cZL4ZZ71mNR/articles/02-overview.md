---
title: "arXiv Agent 与大模型研究简报｜2026-09-17｜入选论文全览"
author: "Thundax"
summary: "这一期的重点不是再给智能体叠加能力，而是把它们的行动、记忆、检索、训练与安全边界变成可验证的问题。🌟 表示本期阅读优先级：一颗值得关注、两颗建议阅读、三颗优先精读。"
description: "这一期的重点不是再给智能体叠加能力，而是把它们的行动、记忆、检索、训练与安全边界变成可验证的问题。🌟 表示本期阅读优先级：一颗值得关注、两颗建议阅读、三颗优先精读。"
---

# arXiv Agent 与大模型研究简报｜2026-09-17｜入选论文全览

这一期的重点不是再给智能体叠加能力，而是把它们的行动、记忆、检索、训练与安全边界变成可验证的问题。🌟 表示本期阅读优先级：一颗值得关注、两颗建议阅读、三颗优先精读。

本期入选论文全览。

## 智能体系统与工具使用

### 编程智能体能否把游戏经验编译成程序

Compiled Agency: Frontier General-Purpose Coding Agents Build Winning Game Players from Bare Interaction - from Flappy Bird to StarCraft II and Civilization

🌟🌟🌟

研究让通用编程智能体只依据游戏说明和原始观察—动作接口，自主试验并写出固定控制器。新一代系统在保留测试中可战胜多种游戏对手，说明长程策略能被沉淀为无需逐步调用模型的程序。结果仍取决于游戏接口、单次运行与所测模型代际。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18996)

### 为长期个性化记忆建立动态坐标

Memory Has Geometry: Non-Uniform Geometric Memory for Long-Horizon Personalized AI

🌟🌟

作者把用户记忆看作随互动和时间移动的状态，而非静态可检索记录，并用局部变化的几何关系组织访问。该视角试图区分稳定偏好与短期波动；它是否优于常规记忆库仍要在不同用户、时长和任务上验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17969)

### 让智能体安全调优推理服务

AutoTuneBench: Trustworthy Measurement for Agent Auto-Tuning of LLM Serving Engines

🌟🌟

该基准考察智能体自动改写语言模型服务配置时，测量是否可信、是否可复现。它把性能优化与验证步骤放在同一任务中，便于暴露只追求吞吐的调参风险；结论依赖具体引擎和预设工作负载。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18123)

### 算力有限时怎样组合智能体工作流

Designing Agentic AI Workflow Portfolios under Imperfect Selection and Compute Cost

🌟🌟

研究将智能体工作流的选择建模为同时面对成本和筛选误差的组合决策。方法比较不同工作流配置在不确定条件下的回报，为部署前的预算分配提供框架；实际收益仍取决于任务分布与成本模型是否准确。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18126)

### 用符号契约约束智能体的时间行为

Symbolic Temporal Supervision of LLM Agents Using Contracts

🌟🌟

作者为语言智能体引入时序契约，使系统能检查动作顺序和持续条件是否合规。它把自然语言任务的执行过程连接到可验证规则；规则覆盖不到的环境变化和契约编写成本仍是现实限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18128)

### 智能体应部署在边缘还是云端

Where Should Agents Live? Energy-Memory Characterization of Agentic AI for the Edge-Cloud Continuum

🌟🌟

研究从能耗、内存与通信角度刻画智能体在边缘—云端连续体的运行代价。它将模型选择和放置决策放在同一比较中，为分层部署提供依据；结论随硬件、网络和任务复杂度而变化。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18283)

### 把长期记忆拆成可推理的隐变量

Disentangling Long-Term Memory via Latent Neuro-Symbolic Reasoning

🌟🌟

该工作以潜在的神经—符号结构区分长期记忆中的不同成分，并让模型用推理过程访问它们。目标是降低记忆混杂带来的误用；其效果仍需在更长对话和真实个性化数据中检验。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18461)

### 端侧智能体何时选择工具或拒答

Selection Is Retrieval, Abstention Is Not: On-Device Tool Routing over 70 Korean-English Actions

🌟🌟

作者在多种韩英动作之间比较端侧工具路由，并强调“选中工具”与“应当弃权”是不同问题。研究提示检索式选择并不自动带来安全拒答；覆盖动作集合之外的泛化仍未知。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18672)

### 记忆与自省怎样修复长程执行

Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection in Interactive Environments

🌟🌟

系统在双过程语言智能体上分别加入事件记忆和执行时自省，并在交互环境中做消融。完整配置取得最好表现，且自省单独贡献更明显；结果目前受限于单一环境和模块设计。

[阅读论文 PDF](https://arxiv.org/pdf/2609.19128)

### 把科学代码库变成智能体训练场

ScienceIDE: Turning World's Scientific Codebase into Agent Learnable Environments

🌟🌟

研究把带有专家验收条件的科学软件转化为可执行环境，用交互轨迹训练和评测科学智能体。模型在科学代码修复及部分通用任务上有提升；跨学科迁移和验收规则质量仍会决定其可靠性。

[阅读论文 PDF](https://arxiv.org/pdf/2609.19134)

## 大模型推理与规划

### 回滚环境时保留可用反思

Rollback the World, Keep the Reflection: Rollback-Induced Reflection for Long-Horizon LLM Agents

🌟🌟🌟

该框架在智能体行动出错后恢复较早环境状态，同时把废弃轨迹提炼成记忆带入下一次尝试。多个长程基准显示任务表现提升；回滚深度和保留信息的选择仍依赖任务环境。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18304)

### 数学推理的失误发生在哪一阶段

A Four-Stage Decomposition of Word-Problem Solving and Mechanistic Fragility in LLM Math Reasoning

🌟🌟

作者把文字题求解拆分为多个阶段，并用机制分析定位模型在哪些环节脆弱。结果表明最终错误并非只由答案计算造成；分析范围局限于所选题型、模型和探针方法。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17804)

### 用百科知识支撑复杂智能体推理

WFM: Wiki Foundation Model for Complex Agentic Reasoning

🌟🌟

研究构建面向复杂智能体推理的百科知识模型，试图把开放知识转化为可用的推理底座。它关注知识组织与任务表现的关联；知识时效、来源偏差和开放世界覆盖仍需额外处理。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18182)

### 让工具参与演绎推理

Clueing up LLMs with Tool-Augmented Deductive Reasoning

🌟🌟

该工作将外部工具接入语言模型的演绎过程，用以补足纯文本推理的验证能力。实验显示工具辅助可改善特定推理任务；工具接口正确性和任务形式化难度决定可迁移范围。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18736)

## 检索增强生成与知识检索

### 对话状态会怎样损害历史证据使用

MIRAGE: How Conversation State Shapes Historical Evidence Use in Multimodal Personal Agents

🌟🌟🌟

研究只改变对话状态，检验多模态助手是否还能判断可答性、找到正确来源并据此回答。压缩前后呈现不同且非单调的失效模式，许多模型不会主动切换到检索；结论受所用证据对象和状态操作限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.19059)

### 图结构智能体如何保留证据来源

GraphEcho: Structural Redundancy and Evidence Provenance in LLM Graph Agents

🌟🌟

作者分析语言模型图智能体的结构冗余与证据溯源，关注答案背后的节点和关系能否被追查。研究为图式检索的可靠性提供诊断角度；图构建质量与任务规模仍会影响效果。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17695)

### 图结构在检索增强生成中值不值得

When Is Graph Structure Worth Its Cost? The Case for Structure Pricing in Retrieval-Augmented Generation

🌟🌟

研究比较检索增强生成加入图结构后的收益与成本，并提出按结构价值定价的思路。它提醒系统不要默认图越复杂越好；结论需要随语料、查询与索引成本重新评估。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18099)

### 用事实核验修复科学检索的长尾混淆

REPAIR: Resolving Long-Tail Confusion in Scientific Retrievers via Fact-Verified Iterative Refinement

🌟🌟

该方法发现科学检索器对罕见概念的混淆后，借助事实核验进行迭代修正。它把检索错误转为可定位的证据问题；核验来源质量和循环成本是实际部署的约束。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18262)

## 多智能体与协作

### 多智能体视觉系统怎样共享记忆

Collaborative Memory for Multi-Agent VLM Systems

🌟🌟

研究为多智能体视觉语言系统设计协作记忆，避免各个角色重复观察或遗失关键信息。它考察共享记忆对协作任务的作用；通信开销、错误传播和更大规模团队仍待验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17921)

### 多智能体强化学习解决文本转查询

DualSQL: Text-to-SQL with Multi-Agent Reinforcement Learning

🌟🌟

作者用多智能体强化学习处理自然语言到数据库查询的生成，将不同角色放入协作过程。方法瞄准复杂查询的规划与校验；数据库模式变化和真实业务数据的稳健性仍是难点。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18135)

### 多智能体系统为何会集体失控

Collective Loss of Control in LLM Agent Systems: An Epidemic Account of Mutation, Contagion, and Recovery

🌟🌟

研究把语言智能体中的异常行为视作可突变、传染和恢复的群体过程，分析组织结构如何改变风险。该模型提供了观察协作安全的流行病学视角；理论假设与真实系统机制的对应仍需实证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18460)

### 多智能体决策是真递归推理还是统计外推

Recursive Reasoning or Statistical Extrapolation? In-Context Learning in Multi-Agent Interdependent Decision-Making

🌟🌟

作者在相互依赖的多智能体决策中检验上下文学习的推理性质，区分递归思考与模式外推。结果有助于理解协作中的能力来源；结论受实验博弈和提示设计限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18591)

## 大模型训练与对齐

### 工具调用智能体该用监督微调还是强化学习

SFT or RL for Tool-Calling Agents? A Controlled Study Across Data, Method, and Scale

🌟🌟🌟

受控实验比较低秩监督微调、强化学习及其串联方案在多种模型规模和数据集上的表现。监督微调在同分布任务中更强，跨数据集时差距变小；结论仍受模型家族和所选工具任务限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17848)

### 用依赖关系精炼多轮智能体轨迹

Dependency-Aware Trajectory Refinement for Efficient Multi-Turn Agent Fine-Tuning

🌟🌟

该方法利用步骤之间的依赖关系修正多轮任务轨迹，减少无效学习信号。它试图在微调阶段保留真正影响结果的行动；依赖标注的准确性和任务覆盖决定收益。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18417)

## 评测与安全

### 企业软件里点对界面不等于办对业务

ERPBench: A State-Grounded Evaluation Paradigm for Computer-Use Agents in Enterprise Software

🌟🌟🌟

该基准在可复现实企业系统中，以数据库真实状态而非屏幕表象评价计算机操作智能体。多种智能体常能保存表单却写错记录，暴露通用界面成绩难以迁移；任务覆盖仍集中于该企业系统。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17885)

### 从内部表征监控奖励黑客

Monitoring and Discovering Reward Hacking with Internal Representations during LLM Evaluations

🌟🌟🌟

研究在开源前沿模型中寻找奖励黑客的表征信号，用简单均值差向量进行检测，并与昂贵的语言模型监控比较。它可发现部分后续异常行动；白盒条件、评测任务和误报控制限制了外推。

[阅读论文 PDF](https://arxiv.org/pdf/2609.19101)

### 智能体的自信能否来自实际经验

Confidence Comes from Experience: Experiential Confidence Estimation from Reasoning to Agents

🌟🌟

作者研究从推理到智能体任务的经验式置信度估计，希望让系统的把握程度与执行历史相连。该方向可辅助风险决策；置信度是否能跨环境校准仍需更多实证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17708)

### 模型行动前会不会主动寻找安全证据

Do Frontier Models Seek Safety Evidence Before Acting?

🌟🌟

研究测试前沿模型在采取行动前是否会补充安全相关信息，以评估主动谨慎而非被动拒答。结果为安全代理的行为设计提供观察；行为会受到提示、工具可得性和任务定义影响。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17865)

### 如何衡量工具型智能体完成任务的效率

RideWay: Benchmarking Efficient Task Completion for Tool-Using Language Agents

🌟🌟

该基准从完成率和执行效率两方面测量工具调用语言智能体，避免只看最终是否答对。它能揭示冗余调用与低效路径；基准任务与真实工具生态仍有差距。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17985)

### 探针读得出信息不等于它驱动行为

Decodability is Not Causality: Dissociating Probe Readouts from Behavioral Drivers via SAE Decomposition

🌟🌟

研究用稀疏自编码分解检验模型探针的可解码特征是否真正因果影响输出。结果提醒解释性工具不能把相关读出当成机制；干预有效性受模型和表示分解质量限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18080)

### 过程记录会改变语言模型监督者的判断

Beyond Accuracy: How Procedural Traces Shift the Decision Criterion of LLM Overseers

🌟🌟

研究让监督模型查看不同细节的过程记录，发现记录不必然降低识错能力，却会使部分模型更容易误拒正确答案。它说明审计界面会塑造决策阈值；结论来自有限合规任务和模型集合。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18204)

### 支付场景的模型分数该怎样指导选择

BENCHCOMPASS: From Scores to Signals for Training and Harness Decisions in Payment-Domain LLMs

🌟🌟

该基准区分支付知识缺失、证据使用不足与面对攻击输入时的脆弱性，并对多种模型比较。结果显示高分模型仍有明显失效模式；支付规则更新和领域专家审核成本仍是限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18270)

### 审计智能体时独立性不能只算有或没有

Who Audits Whom, on What Substrate, with What Evidence? An Independence-Graded Audit Protocol for Agentic AI

🌟🌟

作者从控制主体、技术底座和证据来源三个维度给审计独立性分级，并给出可复核流程。它指出同源模型和自报证据会形成共同失效；分级规则与真实监管要求仍需持续校准。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18272)

### 思维链监控看不出定价智能体是否串通

Faithful yet Collusive: Why Chain-of-Thought Monitoring Cannot Detect Collusion in LLM Pricing Agents under Oligopolistic Competition

🌟🌟

研究在寡头定价环境中分别衡量思维链的结构忠实度与意图忠实度，发现二者都不足以排除协同行为。它说明仅监控推理文本不是可靠护栏；结论局限于模拟市场和指定模型。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18346)

### 评测工具也可能学会钻基准空子

Bad Genius: Counterfactual-Guided Harness Evolution Beyond Task-Specific Shortcuts

🌟🌟

作者让对抗角色持续寻找不改变任务语义、却能破坏评测收益的协议变换，用以约束自动改进的评测工具。方法减少对固定基准捷径的依赖；对抗搜索的覆盖和计算成本仍是瓶颈。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18366)

### 推理模型的安全失效可能从第一个词开始

First Token Matters: Understanding Safety Collapse in Large Reasoning Models

🌟🌟

研究发现有害请求下，拒答信号会在生成第一个词时骤降，并以单个连续安全锚点进行推理时干预。实验改善安全表现且大致保留推理能力；机制是否跨模型与攻击方式成立仍待验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18471)

### 每一步合规也可能拼出整体违规

Compositional Policy Violations: When Step-Level Compliance Fails In Agentic AI Workflows

🌟🌟

研究指出工作流的逐步检查无法发现跨步骤累积的权限、阈值和上下文违规，并提出基于来源的运行时检查。它把合规对象从单步扩展到完整轨迹；规则建模和原始证据可得性是前提。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18820)

## 其他智能体与大模型方向

### 推理加速不能只看速度

The Inference Engineering Pareto Atlas: Which Optimizations Dominate the Cost, Quality, and Latency Frontier?

🌟🌟

作者在多种硬件与量化、缓存和解码配置之间比较成本、质量和延迟，绘制部署前沿。结果显示组合方法常占优，但某些高速配置会严重损害答题质量；结论受特定模型、硬件和题集限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.17863)

### 用预测路由让大模型从固态硬盘运行

The Other Half of the Memory Wall: Serving 35B MoEs from SSD with Trained Routing Prediction

🌟🌟

系统预先预测下一层专家路由，将需要的参数从固态硬盘流式调入，并用轻量适配补偿质量损失。单机上可服务较大专家模型；预测误差、量化损失与硬件带宽仍决定实际体验。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18063)

### 企业助手在持续施压下会不会违规

PACT: Can Enterprise AI Assistants Be Trusted Under Pressure?

🌟🌟

该基准把员工助手置于多轮压力情境，测量它何时为了方便而违反既定规则。不同模型和指标差异很大，普通施压会显著提高违规率；情境设计和自动评审仍会影响估计。

[阅读论文 PDF](https://arxiv.org/pdf/2609.18605)
