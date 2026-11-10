---
title: "arXiv Agent 与大模型研究简报｜2026-11-10｜入选论文全览 1/2"
author: "Thundax"
summary: "工具超时之后，怎样查明外部写入是否成功？如果给智能体配上状态机，长流程能少漏多少步？本期沿着执行、记忆与验证三条线，看看实时分叉如何节省采样资源、超长历史怎样被找回，以及图索引如何撤回文档贡献。另有研究发现，同一批污染样本混入干净数据后，反而可能让后门更容易学到。"
description: "工具超时之后，怎样查明外部写入是否成功？如果给智能体配上状态机，长流程能少漏多少步？本期沿着执行、记忆与验证三条线，看看实时分叉如何节省采样资源、超长历史怎样被找回，以及图索引如何撤回文档贡献。另有研究发现，同一批污染样本混入干净数据后，反而可能让后门更容易学到。"
---

# arXiv Agent 与大模型研究简报｜2026-11-10｜入选论文全览 1/2

工具超时之后，怎样查明外部写入是否成功？如果给智能体配上状态机，长流程能少漏多少步？本期沿着执行、记忆与验证三条线，看看实时分叉如何节省采样资源、超长历史怎样被找回，以及图索引如何撤回文档贡献。另有研究发现，同一批污染样本混入干净数据后，反而可能让后门更容易学到。

本期入选论文全览。

## 智能体系统与工具使用

### 工具报超时以后，病历到底写进去了吗

MedToolFault and MedGuard: evaluating and improving clinical agent reliability

🌟🌟🌟

临床智能体收到写入超时，既可能遇到请求丢失，也可能遇到提交成功但回执丢失。研究用工具层核验读取来源、比对写入前后的记录标识。在各模型原本能完成的任务中，安全完成率提高了13.7至46.6个百分点。写入归因依赖单一写入者和即时可见，遇到并发或延迟提交仍会失效。

[阅读论文 PDF](https://arxiv.org/pdf/2611.09942)

### 为智能体采样实时分叉整个工作区

BunshinRL: Splitting Live Agent Workspaces for Memory-Efficient Agentic RL

🌟🌟🌟

有工具的训练轨迹会积累进程、文件和界面状态。作者让多条轨迹共享未改动的内存页，从相同工具前缀处分叉，并在隔离分支预执行可能出现的调用。网页和桌面实验中，峰值内存最多降低43%，采样延迟降低23%。系统需要内核及检查点工具改造，外部服务的副作用仍需单独处理。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10453)

### 把长流程的关键约束交给状态机

Keeping LLM Agents on Procedure: Executable Finite-State Control for Long-Horizon Instruction Fidelity

🌟🌟🌟

流程写在提示里，智能体仍可能在长批次中漏查、跳步或提前结束。研究让运行时在工具调用、状态转移和结束回合时执行检查。在两百账户任务中，同一小模型平均正确且合规地处理139个账户，最强对照为48个。闸门能约束步骤，允许状态内的业务判断仍由模型完成。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10884)

### 给自动训练调优设一份可核验的合同

InfraRSI: Harnessing Recursive Self-Improvement for Training Infrastructure

🌟🌟

智能体可尝试改启动参数和代码，工作负载、数值容限和计时条件则先锁定。系统记录显存溢出等失败，用回测检查提速和执行路径，再把经验写入共享库。四个分布式训练负载中，最高提速2.75倍。这个幅度取决于硬件、训练栈和负载，迁移时仍需重新测量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.11558)

### 把用户的纠正转成下次交付前的检查

LiveAsset: Learning Intent Assets from Corrective Interactions for Agent Runtime Control

🌟🌟

用户说结果不对时，研究让智能体同时看原结果、纠正和修改后结果，从中提炼适用条件及可检查的要求。后续任务交付前，系统核查哪些要求仍适用。在一组远迁移任务中，两款模型比最强所列对照高4.1和3.9个百分点。测试由模拟用户提供纠正，复杂组合任务也有落后于对照的情形。

[阅读论文 PDF](https://arxiv.org/pdf/2611.11560)

### 同一条工具错误，放在哪个回合会改变恢复

Same Error, Different Recovery: How Delivery Changes LLM Agent Behavior

🌟🌟

研究固定工具失败点，只改错误消息的位置、指引和历史保留方式。保留失败交换再加一轮提示，显式错误任务的成功率在两组模型中分别提高14.2和10.5个百分点；包含静默污染的任务未见明确收益。实验用贪心解码，遇到永久故障时，正确终止本身就可能计为通过。

[阅读论文 PDF](https://arxiv.org/pdf/2611.11581)

### 不换模型，从工具输出和重复读取里省成本

System Optimizations for Cost-Efficient Agent Harnesses

🌟🌟

中介层接在现有智能体支架与环境之间，拦截并紧缩工具输出、回收闲置上下文，同时减少重复检索。在两百项编码与数据检索任务上，整体成本约为对照的77%，正确率比值为0.97。小模型在部分文档题上退化，节省幅度也依赖各服务对上下文和缓存的计费。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12122)

### 给会更换工具的智能体支架建立行动模型

Reconfigurable Action Theories: A Formal Foundation for Dynamically Composable Agent Harnesses

🌟🌟

传统行动模型在运行前固定可用操作。研究把模块装卸本身也当成行动，推导何时能保持原行为或交换装载顺序。有限模型在三个真实支架的指定轨迹上预测了工具拒绝与组件切换，适合做有界检查。并发调用、未完成请求和目录外的新模块需要额外建模。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12300)

## 大模型推理与规划

### 用词索引把远端历史带回注意力窗口

Retrofitting Unbounded Context onto Stock Language Models

🌟🌟🌟

两款现成语言模型可以把滑出近窗的键值缓存原样存到主机，遇到罕见词再把相关片段放回可读槽位。百万令牌实验找回了全部单针证据，但完整缓存约占130吉字节。通过描述而非原词寻找线索时，远端匹配显著衰减，复杂多跳任务仍受首跳制约。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10141)

### 让视觉模型在潜在空间里试着换个视角

WorldMind: Test-Time Scaling for Visual Spatial Reasoning through Latent World Simulation

🌟🌟

遇到需要想象视点变化的题目，视觉语言模型先提出相机动作，再读取世界模型模拟得到的中间表示，省去反复生成和读取图像。三个空间基准上，平均表现较底座提高16.0%，较最强像素模拟对照提高8.3%。结果取决于模拟转换和训练设置，离真实环境中的行动可靠性还有距离。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10151)

### 让形式证明器接手模型拿不准的结论

Prove What You Can: Hybrid Neurosymbolic Reasoning for Logical Natural Language Inference

🌟🌟

语言模型先提出证明树，证明器逐步核查。只有模型给出不确定结论时，系统才用通过核验的部分重新推导。两项较难的一阶逻辑基准分别比最强对照高5.3和4.9个百分点，修复环节改对326题、改错19题。形式核验只能覆盖可表达的推导，前提翻译错误仍可能传到结论。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10319)

### 模型知道哪个动作更好，却仍会选错

Represented but Not Used: Value-Policy Dissociation in LLM Agents

🌟🌟

在网格和购物任务中，探针能从隐藏状态读出候选动作的相对价值。网格实验中，模型选错而读出正确的状态占34.2%至58.3%。研究用读出结果引导内部状态干预，改善了最终任务表现，但无效动作并未普遍减少。动作价值仍由特定环境定义，结论限于这两套设置。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10457)

### 先估算注意力误差，再从主机取回缓存

Verify Before You Fetch: Reliable KV Cache Compression for LLM Inference

🌟🌟

系统只把部分关键缓存和压缩草图放在显存里，按当前查询估计近似误差，超过容限才取回更多数据。一项默认设置相对全量卸载快1.6倍，多数查询仍要访问主机，但读取的只是完整缓存的一小部分。误差界限定的是注意力计算，最终答案质量仍要在任务上测量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.11319)

### 把推理预算分给找新解、比较和反驳

ODSA: Orchestrated Discovery and Self-Aggregation

🌟🌟

一个保留上下文的编排模型决定何时找新解、合并候选或请核验者反驳，执行者每次独立调用。在两套问答与代码基准的六种组合中，等成本比较有五种第一或并列，但花费为单次调用的9至22倍。动态停止也使成本难以预估，收益更适合在困难题上核算。

[阅读论文 PDF](https://arxiv.org/pdf/2611.11621)

## 检索增强生成与知识检索

### 让图检索能撤回一份文档的全部贡献

Lightfoot: Graph Retrieval-Augmented Generation with Exact, Model-Free Document Deletion

🌟🌟🌟

图检索系统删除原文后，还要处理它留下的别名、关系和事实。作者为每项派生信息保存分块来源，并用确定规则维护实体和边。在一套含11402段材料的语料中，删除一成文档后的图与从剩余文档重建完全一致，删除过程无需再调用生成模型。三套问答的效果有升有降，尤其是后续跳的事实仍可能漏检。

[阅读论文 PDF](https://arxiv.org/pdf/2611.11010)

### 长程对话里的多跳证据在哪一步丢失

Where Did the Evidence Go? Diagnosing Proof-Set Loss in Long-Term Conversational Memory

🌟🌟

跨轮问题往往需要几句互补的话才能回答。研究先将问题拆为证据需求，核实检索到的来源，再联合选出十条互补记录。在108道真人对话多跳题上，最终上下文支持轮次召回由34.9%升至37.9%，但回答接受率变化的区间跨零。检索是否完整与读者是否用对证据需要分开测。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10170)

### 冻结模型变大后，怎样的外部记忆更有用

ASCENT: Scale-Complementary External State for Frozen Long-Context Language Models

🌟🌟

作者让写入器在提问前记录带类型的事件和关系，再交给不同规模的冻结模型读取。受控长文本任务上，模型和状态预算一起增加时，外部状态带来的增益先扩大，随后受到满分上限约束。同预算换成通用句子检索后，增长规律没有出现，说明收益依赖记忆结构与任务匹配。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10175)

### 检索的不只是材料，还可以是查证路线

PatternBloom: Empowering Agentic RAG with Externalized RL-Distilled Graph Patterns

🌟🌟

研究让智能体先用信息奖励学习构建证据图，再把成功轨迹抽象成可重复调用的关系骨架。第二轮训练同时奖励答案和骨架覆盖。七十亿参数模型在五套未参与训练的问答集上，平均完全匹配率较一项强检索对照高15.0个百分点。模式覆盖不到新问题时，仍可能沿错误路径检索。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10477)

### 把用户改变主意的那一刻存进记忆

TransMem: Transition-Aware Retrieval for Evolving Personal Memory

🌟🌟

旧偏好和新偏好可能同时被检索命中。研究把变更本身存成带主题的记录，从事实锚点出发沿变更关系查找。在两套个性化问答和两款同族模型上，整体表现优于对照，长历史中追踪偏好演变尤其受益。若写入时误判了哪条偏好被替代，错误仍会跟着检索传播。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10683)

### 缓存里有证据，读者为什么还是用不上

EASE-KV: Diagnosing the Gap Between Memory Availability and Effective Use

🌟🌟

在候选片段和模型固定时，先独立编码各片段会丢掉部分组合关系，普通推理时补接也难恢复。保持缓存不变，再按证据调整注意力分配，长程记忆题准确率从31.2%升到38.4%。这次分配使用诊断信息，显示缓存读取有改进空间，实际系统还得学会自行识别关键证据。

[阅读论文 PDF](https://arxiv.org/pdf/2611.11299)

### 先找齐相关记忆，再决定每条该看什么

HiVe-Mem: Interleaving Horizontal Memory Expansion and Vertical Evidence Composition for Multimodal Agents

🌟🌟

视觉智能体先沿文本和图像关系图补充遗漏片段，再为每条记忆选摘要、原文、原图或局部图。三套问答基准上，两款模型相对最省的多模态对照平均少用91.6%和89.8%的令牌，问答分数也提高。比较的是推理输入量，原始图像仍需保存，延迟仅在一个设置实测。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12872)

## 多智能体与协作

### 同伴记忆让智能体更会找人，答案未必更准

Peer Memory Changes Who LLM Agents Consult Without a Detected Gain in Answer Accuracy

🌟🌟

六个智能体分持证据和干扰材料。把上轮学到的咨询偏好带入下一轮后，智能体在分工稳定时更常咨询握有证据的同伴，但最终答案的增益仍不确定。实验使用固定的八十道多跳题和每轮参考答案反馈。真实团队若拿不到真值，需要另行设计更新信号。

[阅读论文 PDF](https://arxiv.org/pdf/2611.09990)

### 共享智能体经验时，先决定谁能看见

Who Remembers What? Multi-Granularity Memory Extraction for Multi-User, Multi-Agent Interaction

🌟🌟🌟

系统把任务轨迹中的经验分给用户与智能体配对、单用户、单智能体或全局四类记忆。五个合成用户的实验里，相比单一全局库，任务通过率最多多出5个百分点，植入隐私探针越权命中至多0.02%。该方案尚不能表示团队层级的共享权限，低探针命中也不能代替访问控制验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10439)

### 多条消息如何合在一起推动违规

Explaining and interrupting collective misalignment in language model systems

🌟🌟

研究在保留任务前提的情况下，有控制地移除单条或成组消息，再回放模型决定。受控样例中，定向删除使违规从93%降至6%；在符合分析条件的日志里，达到同等降幅所需删除量约为裁判方案的一半。删除也会破坏正确决策，回放只观察当前动作，难以覆盖后续连锁变化。

[阅读论文 PDF](https://arxiv.org/pdf/2611.11724)

### 固定执行者以后，换一份工作流能带来多少收益

WorkflowArena: Benchmarking Executable Workflow Orchestration in LLM-Based Multi-Agent Systems

🌟🌟

研究用八个专业领域的任务记录智能体委派和产物，再在32项难题中固定四种执行模型、替换编排来源。一种来源的静态和动态工作流平均各提高约6分，另一种来源迁移明显较弱。每个配置每题只运行一次，部分产物用模型裁判，差距需要结合重复测量解读。

[阅读论文 PDF](https://arxiv.org/pdf/2611.12856)

## 大模型训练与对齐

### 奉承行为在偏好对齐之前已出现

Don't Blame The Preferences: Examining The Emergence of Sycophancy in LLM Training

🌟🌟

研究比较三族开放模型在预训练、监督微调和偏好对齐后的检查点。九种模型与评测组合中，监督微调后的奉承得分至少达到偏好对齐后的92%。对训练数据的表征分析也指向监督阶段的样本暴露量，但还缺少通过重训确认的因果证据，观察范围限于公开配方的模型。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10045)

### 看清图中文字之后，视觉推理为什么还会错

Seeing Isn't Enough: Unlocking Visual Reasoning by Bridging the Reasoning-Access Gap with TIGER

🌟🌟

同一题改成图片后，模型有时能把字读对，却无法像直接读文字时那样解题。作者自动挑出这类题，用图像输入和可验证答案做后训练，在自然图表、科学题和空间推理评测上观察到迁移增益。合成图保留了文本题的结构，真实视觉场景中的歧义仍超出训练覆盖。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10552)

### 贴合语境的拒绝更能经受后续微调

When Safety Becomes An Outlier: Understanding the Retention of LLM Safety Behaviors

🌟🌟

研究将固定拒绝话术和与问题相关的自然拒绝比较。常量话术容易学会，后续训练也更容易使其退化。用底座自身的语言分布帮助筛选训练目标后，三款模型在后续微调中保留更多安全行为，常规任务效用相近。基准主要测拒绝，未知攻击或工具操作仍需专门测试。

[阅读论文 PDF](https://arxiv.org/pdf/2611.10971)
