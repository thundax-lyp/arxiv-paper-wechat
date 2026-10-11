---
title: "arXiv Agent 与大模型研究简报｜2026-10-08｜入选论文全览 1/2"
author: "Thundax"
summary: "本期最值得关注的不是某个单点高分，而是智能体系统如何记住任务边界、验证技能价值、匹配运行环境，并在工具失灵时保持可靠。星标表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读；它不等同于结论可靠性。"
description: "本期最值得关注的不是某个单点高分，而是智能体系统如何记住任务边界、验证技能价值、匹配运行环境，并在工具失灵时保持可靠。星标表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读；它不等同于结论可靠性。"
---

# arXiv Agent 与大模型研究简报｜2026-10-08｜入选论文全览 1/2

本期最值得关注的不是某个单点高分，而是智能体系统如何记住任务边界、验证技能价值、匹配运行环境，并在工具失灵时保持可靠。星标表示本期阅读优先级：一星值得关注，二星建议阅读，三星优先精读；它不等同于结论可靠性。

本期入选论文全览。

## 智能体系统与工具使用

### 长期记忆需要知道一句话属于谁

Whose Memory Is It? Scope-Aware Commit Rules for Long-Term LLM Memory

🌟🌟🌟

把“话语所有权”设为长期记忆的提交边界，避免被否决的推演、模拟工具结果或他人观点变成持久事实。受控长对话冲突与工具智能体轨迹中，作用域提交规则改善记忆准入并减少临时内容污染后续回答。主要证据来自受控冲突设置，内部表示的跨模型、跨版本稳定性仍需验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09008)

### 把任务欠项交给环境记账

RunningTab: Direct Workspace Interaction with Environment-Side Tabs

🌟🌟🌟

研究工作区智能体读过材料却仍漏交内容的问题，把任务欠项从模型上下文移到环境维护的持久标签页。三个基准、三种模型上均优于直接工作区交互与模型自记账基线；工作区基准通过率由41.63提升到44.73。增益稳定但绝对幅度有限，需求仍由模型拆解，证据匹配主要依赖词项重合。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10444)

### 按调用点选择模型更省也更稳

Not Every Call Needs a Frontier Model: Per-Call-Site Evaluation of Small Language Models in a Deployed Agentic Home-Automation System

🌟🌟

以调用点而非整系统平均分决定大小模型路由，并显式测量执行动作的准确—拒绝安全权衡。最佳本地模型在五类中的四类与托管模型统计不可区分；只托管两类生成调用以28%费用达到同样39/43任务成功。温度零单次运行、两个安装和单一非盲最终评审限制外推。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09021)

### 纠正智能体要看何时介入真正有用

From Uncertainty to Action: Learning to Steer LLM Agents

🌟🌟

将不确定性从直接阈值触发改为以真实反事实结果训练的“转向价值”，并加入伤害预算。在12种基准、智能体和离线/在线设置中均优于原执行，平均提高7.8点。训练需要昂贵的反事实续写，跨新任务能否低成本迁移仍不明确。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09115)

### 用不合作用户训练更稳健的工具对话

ToolRACER: A Robust Agentic Conversation Emulation Resource for Agent Training and Evaluation

🌟🌟

专门覆盖不合作与不可完成对话，补足函数调用基准过度合作的训练分布。生成5600条、六领域、55种人格的验证轨迹；混合训练后小模型在多个函数调用基准上改善端到端准确率。合成用户和 大模型 评审可能共享偏差，摘要未给出所有外部基准的统一增益幅度。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09163)

### 让智能体学习如何改进智能体

FreeEvolve: Learning to Evolve Beyond Fixed Loops

🌟🌟

把智能体提示、技能 与工作流优化的搜索过程本身变成可从经验学习的能力。四个环境上平均提升主要留出指标13.6点，元演化 技能 对新目标再带来6.9点。自动搜索仍受环境与评估器边界约束，资源使用和失败模式可能随模型能力显著变化。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09197)

### 工具调用决定可以被一个内部方向控制

How Do Agentic LLMs Decide to Call Tools? A Tool-Call Vector Shaped by Suppression

🌟🌟

给出工具调用与直接回答之间决策状态的可干预机制解释。该向量在七个模型家族中复现，并从构造提示迁移到原生多轮轨迹和无显式动词请求。最强因果结论集中在选定模型与首输出令牌，尚不足以解释完整多步工具选择。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09624)

### 证明任务也需要按成本编排专家

Cost-Efficient Theorem Proving via Agent Orchestration in Program Verification

🌟🌟

把程序验证中的智能体编排形式化为有成本的元层决策，优化成功率—成本前沿。五个 形式证明系统 基准上各设置均达最高求解率，两个基准最高100%，相对最强基线成本最多降30.9%。聚焦 形式证明系统 与既定专家池，跨证明器和真实大型仓库的收益尚待验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09681)

### 为每条技能现场合成一场考试

SkillSandbox: Skill Verification via Dynamic Scenario Synthesis

🌟🌟

将 技能 可复用性验证从历史任务回放改为针对适用条件的动态场景合成。在 交互环境 与 网页购物环境、三种模型上，验证后的 技能 库取得最高成功率并改善执行效率。仅在两个模拟环境验证，合成场景是否覆盖真实工作区中的边界条件仍未知。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10088)

### 把反复使用同一资料库的经验保存下来

ExperienceIndex: Artifact-Grounded Memory

🌟🌟

将智能体记忆从偏好或抽象策略扩展为可跨任务复用的工件级经验索引。多种语料和搜索框架上，回答质量最高提高11点、在线成本最多降低50.5%，并展示跨任务与教师—学生迁移。经验质量取决于历史轨迹，错误经验传播和语料更新后的失效仍需更系统评估。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10091)

## 大模型推理与规划

### 测试时算力可以按用户约束个性化

From Pareto to Preference: Personalized Test-Time Scaling via Amortized Agentic Policy Discovery

🌟🌟

把测试时扩展从单一帕累托前沿改写为多约束个性化控制器发现，并摊销跨用户搜索经验。数学竞赛基准 与 数学竞赛基准 的未见用户画像上优于强基线，经验复用在同等评估预算下改善策略并降低搜索成本。仅数学基准，控制器搜索的收益依赖目标画像与候选评估预算。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09684)

## 检索增强生成与知识检索

### 长期记忆检索不能只追求单条相关

Relevance Is Not Sufficiency: What Actually Closes the Evidence Gap in Long-Term Memory QA

🌟🌟

把长期记忆检索目标从单条相关性改写为证据集合的联合充分性。在 长记忆评测 上，判断准确率由72.4%升至82.2%，支持轮次命中率达到91.4%。消融显示主要增益来自扩大证据访问，且无金标的充分性判断还不可靠，不能安全用于停止。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09348)

### 多模态检索要恢复证据之间的结构

TopoGraphRAG-Bench: Evaluating Multimodal GraphRAG on Layout-Grounded Evidence Reasoning

🌟🌟

首次把多模态 图结构检索增强生成 是否恢复预期证据拓扑作为显式评测对象。2024个问题、201份长文档上，多模态 图结构检索增强生成 总体最好，但在视觉—文本对齐和多单元组合上仍明显失败。基准规模和文档域有限，拓扑指标与真实业务答案价值的关系仍需外部验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09360)

## 多智能体与协作

### 从共识演化判断多智能体是否可靠

Sequential Probabilistic Uncertainty Estimation for Parallel Multi-Agent Reasoning Systems

🌟🌟

从交互轨迹而非末轮单体置信度估计多智能体推理系统的不确定性。五个骨干、五个基准和两种协议上，在错误检测、选择性预测和校准上超过多类基线，长辩论下更稳定。聚焦并行同题推理，未覆盖异构分工和工具型多智能体系统。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08901)

### 开放式科研需要持续探索机制

Can AI Agents Make Open-Ended Scientific Discovery? Evidence from Station

🌟🌟

把开放式科学发现从固定指标优化转为多智能体生态中的持续探索与整合。三个隐藏结果的论文任务上平均重发现62.7%的判据，显著高于两个对照系统的14.4%至20.6%。开放任务的人类评价与少量课题限制了外推，组件贡献尚未完全分离。

[阅读论文 PDF](https://arxiv.org/pdf/2610.08927)

### 先还原通信拓扑再诊断多智能体故障

Know the Shape, Find the Fault: Topology-Conditioned Diagnosis of Multi-Agent LLM Failures

🌟🌟

把通信拓扑作为多智能体故障诊断的结构条件，并可在固定编排下重复使用。851条轨迹上，真实拓扑把小模型宏一分数从0.173升至0.350；预测拓扑达到0.346，接近强模型0.372。诊断依赖既有失败 与拓扑恢复，跨新编排的先验漂移仍是风险。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10126)

## 大模型训练与对齐

### 终端智能体训练要匹配真实运行时

CoTrace: Data Recipes for Training Terminal Agents with Harness-Model Co-Evolution

🌟🌟🌟

指出终端智能体训练数据的价值依赖生成它的运行时，把轨迹路由、来源匹配与课程刷新纳入共同演化。九十亿参数模型 在 晋级集由78题提升到监督微调的88题，在线强化学习达到90题；跨基准迁移依赖运行时兼容。结论依赖终端任务与所选 ，跨框架兼容规律仍需更广验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10426)

### 可靠决策先要守住信念和效用

Training Language Models To Be Coherent Decision-Makers

🌟🌟

将概率信念稳定、效用敏感决策和可判定性拆开训练，并验证跨领域表述迁移。20个数据集上，定向微调显著改善一致决策；路由系统在六个模型中的五个取得最高端到端准确率。评测是构造化二元决策，尚不足以代表开放环境中的长期行动。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09164)

### 偏好训练应区分违规严重程度

CM-DPO: Constraint-Margin Direct Preference Optimization for LLM Planning

🌟🌟

让 直接偏好优化 区分轻微与严重违规，同时用程序化约束和最小编辑蒸馏降低配对偏差。8模型在多个规划基准上达89.2%通过率和93.4%求解率，在未见 上高于 强闭源模型 9.2点。依赖可写成确定性符号验证器的规划域，迁移到开放约束仍需验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09219)

### 更像真实人的模拟器才能训练交互智能体

MIMESIS: Learning User Simulators as Training Environments for Interactive Agents

🌟🌟

把用户模拟器从通用助手改造成面向交互训练的专用环境，并利用私有推理生成密集辅导。 达65.7；相比强基线行为保真提高13.4点，训练出的智能体在九个未见模拟器上均更好。模拟器间泛化不等同于真实用户泛化，私有推理监督也可能注入模型特有偏差。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09484)

### 技能库也需要退役机制

SkillForge: Co-Evolving Skills and Agents via Dynamic Skill Lifecycles

🌟🌟

让 技能 库与智能体策略共同演化，显式处理过时或有害 技能 的积累。多个交互基准上总体成功率最高，相对最强基线最多提升7.8%，同时保持活跃库紧凑。增益规模有限且依赖生命周期适应度判断；程序僵化仍是主要失效模式。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09832)

### 用上一轮模型为自演化提供锚点

Self-Evolve With a Reference:Anchored Training of Tool-Integrated Agents

🌟🌟

用轻量历史锚点缓解自一致反馈在完全共识时失效和课程只追求分歧的问题。13个推理基准上，数学平均提升2.5点，通用推理提升2.7至2.8点，并保持更高有效优势方差。历史参照仍不提供外部正确性；课程阶段的比较只是任务选择代理。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09856)

### 只看最终成败也能训练会提建议的评论员

Training Advisors for LLM Agents from Task Outcomes

🌟🌟

无需步骤标签或参考批评，只用后续结果学习可跨模型和任务迁移的自然语言辅导。在 多跳问答基准 上使 四十亿参数模型 成功率提升超过25个百分点，并迁移到未训练的模型与交互基准。主要训练域是多跳问答，何时请求评论员及其成本—收益边界仍需更广评估。

[阅读论文 PDF](https://arxiv.org/pdf/2610.09858)

### 过程奖励应跟着当前瓶颈变化

RewardWeaver: Long-Horizon Interactive Learning for Language Agents via Self-Evolving Reward Adaptation

🌟🌟

把过程奖励看作随策略阶段变化的外循环资源，而非固定不变的训练信号。在社交互动、双边议价和销售任务上取得新的最佳结果；消融支持动态奖励分配与稳定语义的作用。依赖 大模型 评估器和有信息量的终局结果，错误会向奖励适配传播，预算参数需跨域重调。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10120)

### 搜索智能体需要给中间检索步骤分配信用

Beyond Outcome Rewards: Constructing and Assigning Retrieval Credit for Search Agents

🌟🌟

把搜索智能体强化学习中的检索信用构造与分配作为独立设计维度。多基准、匹配训练条件下总体搜索表现改善；中间信号类型与分配位置都会改变训练行为。摘要未给出所有任务的统一绝对增益，方法价值依赖可得的中间监督质量。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10179)

### 短小任务进度标签可以训练有效小智能体

Learning to Act with Task Progress: Distilling Small Agents from Compact Teacher Supervision

🌟🌟

用紧凑任务进度监督替代长推理轨迹，研究小智能体在不同示范预算下的收益。交互环境 上404条示范使1.7学生未见任务成功率达到72.4%；200条时显式阶段比仅动作高19.7点。仅一个环境和模型规模，依赖手工进度规则与可用动作集合。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10332)

### 只改条件记忆不动模型主干

EngramEdit: Decoupled Knowledge Updates in LLMs through Conditional Memory

🌟🌟

利用条件记忆把事实更新与 变换器 主干计算解耦，处理多表达激活与共享嵌入干扰。实现近乎完美的编辑成功，未见表达和多跳推理可用更新知识，链式思维准确率接近最强基线三倍。只验证特定条件记忆架构与规模，更高频、更大批量更新的稳定性尚未证明。

[阅读论文 PDF](https://arxiv.org/pdf/2610.10533)
