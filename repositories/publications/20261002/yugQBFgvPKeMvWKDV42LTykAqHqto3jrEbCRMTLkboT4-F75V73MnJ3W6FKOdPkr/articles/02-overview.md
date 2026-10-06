---
title: "arXiv Agent 与大模型研究简报｜2026-10-02｜入选论文全览"
author: "Thundax"
summary: "本期重点看代理系统的执行边界、团队协作与验证：有研究发现，多用户代理即使能互相通信仍可能输给集中协调；有工作追问榜单为何不能只靠加题变可靠，也有新基准把数据查询推进到真实行动后果。记忆、工具权限和研究检索的论文则给出了更细的系统设计线索。"
description: "本期重点看代理系统的执行边界、团队协作与验证：有研究发现，多用户代理即使能互相通信仍可能输给集中协调；有工作追问榜单为何不能只靠加题变可靠，也有新基准把数据查询推进到真实行动后果。记忆、工具权限和研究检索的论文则给出了更细的系统设计线索。"
---

# arXiv Agent 与大模型研究简报｜2026-10-02｜入选论文全览

本期重点看代理系统的执行边界、团队协作与验证：有研究发现，多用户代理即使能互相通信仍可能输给集中协调；有工作追问榜单为何不能只靠加题变可靠，也有新基准把数据查询推进到真实行动后果。记忆、工具权限和研究检索的论文则给出了更细的系统设计线索。

本期入选论文全览。

## 智能体系统与工具使用

### 界面代理的经验该写进权重还是上下文

Not All Experience Belongs in the Weights: Component Routing for Self-Improving GUI Agents

🌟🌟

把整条成功轨迹用于微调或检索，会把稳定规律与瞬时状态混在一起。论文拆开定位线索、操作步骤、状态事实和教训，比较它们分别进入模型权重与上下文的效果。跨模型、环境和种子的结果支持按经验性质分流，但分类边界在新应用中仍需检验。

[阅读论文 PDF](https://arxiv.org/pdf/2610.01787)

### 让编程代理学习何时压缩上下文

AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents

🌟🌟

代码代理常在长轨迹里携带过时探索，简单等到上下文将满才压缩太迟。论文把压缩时机、保留状态和压缩后的继续行动一起纳入训练，先用裁判修正轨迹，再优化策略。代码任务结果支持主动管理上下文；裁判质量和跨领域迁移是主要限制。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02163)

### 长任务代理需要显式写出当前信念

Beyond Memory: Harnessing Long-Horizon Agents with Explicit Belief States

🌟🌟

仅靠对话记忆，代理可能不知道世界现在处于什么状态，也不知道还有哪些要求未满足。论文持续维护显式信念，并检测行动很多却没有进展的陷阱，再选择恢复动作。四项长任务基准支持其效果；重复生成和检查信念增加令牌与计算成本。

[阅读论文 PDF](https://arxiv.org/pdf/2610.01415)

### 从未被检索的记忆，价值无法直接估计

Causal Memory Policy: Making Memory Utility Identifiable by Intervening on Retrieval

🌟🌟

不少记忆系统按过去检索后的成绩决定保留什么，但从未被取出的内容没有被观察到的效用。论文通过随机给记忆检索机会并记录抽样概率，估计其因果贡献。理论上修复了选择偏差；作者也指出单次查询效用还不足以自动决定未来保留策略。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02070)

### 安全工具命令，模型能否选对参数并执行

KaliBench: A Fine-Grained Benchmark for Cybersecurity Tool Use on Kali Linux with Runtime-Free Verifiable Rewards

🌟🌟

安全分析要求模型把意图变成严格的命令行调用，工具名对了仍可能因参数位置或语法失败。论文构造大规模命令对，以确定性校验、沙箱运行和人工修订核对正确性，并用于可核验奖励训练。它衡量的是工具调用精度，不能等同完整安全任务能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02206)

### 跨服务行动为何需要因果世界模型

When Do Causal World Models Help Modular LLM Agents

🌟🌟

订单、支付和库存服务之间的先后关系，不一定说明谁真正决定了下一步是否合法。论文让代理利用局部干预的响应来恢复模块接口，再用于规划。诊断实验提示因果信息在特定条件下有用；多数代理场景只有单种子结果，尚不能据此断言普遍提升。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00012)

### 代理说已执行，外部系统真的生效了吗

From Proposal to Verified Effect: Praxa, an Evidence-Bound Harness for Governed AI Agent Execution

🌟🌟

智能体提出动作、获得授权、派发请求和外部系统真正改变状态，是四件不同的事。论文用确定性准入、执行中介与外部读回把这些环节串成可审计状态。仓库内检查覆盖较广，但小规模终端任务试验没有证明可靠性层带来更高通过率，适合读作执行治理设计而非性能胜利。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00015)

### 代理出错后，恢复操作何时反而有害

When Harnesses Lose the Signal: Causal Evaluation of Recovery in LLM Agents

🌟🌟

一次自动恢复可以救回失败轨迹，也可能打断原本会成功的轨迹。论文从同一执行状态比较介入和不介入，再让路由器决定何时恢复。长流程基准显示小幅成功率收益，但目前主要来自固定模型与环境；部署时仍要同时记录救援率、伤害率和额外成本。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00372)

### 承诺明天提醒的代理，明天真的会醒来吗

Empty Commitments: When Agents Promise What Their Runtime Cannot Deliver

🌟🌟

聊天代理可能承诺未来提醒，却没有任何调度或持久运行能力。论文把这种从配置上就无法兑现的承诺定义为空承诺，并提出按运行时能力检查承诺的方法。它帮助设计更诚实的交互边界；目前更像清晰的问题框架和测量协议，规模化效果证据有限。

[阅读论文 PDF](https://arxiv.org/pdf/2610.01045)

### 科研代理的论文主张如何追溯到实验

YouRA: A Persistent-State Architecture for Evidence-Traceable Autonomous Research Agents

🌟🌟

自动研究系统可能写出完整论文，却把未执行或失败的实验说成证据。论文用持久状态记录假设、执行结果、失败历史和主张证据指针，再由独立控制器决定恢复与审查。架构有助于追责，现有自动评审结果尚不能替代独立复现实验。

[阅读论文 PDF](https://arxiv.org/pdf/2610.01097)

### 本地小模型代理，支架设计能补多少短板

Mingbird: A Local-First Agent Harness Enabling Small Open Models to Complete Real Tasks

🌟🌟

小模型在通用云端支架里常被工具说明撑满上下文，或陷入循环、过早宣布完成。论文为本地运行加入预填预算、结束前重读任务和循环检测，并做受控对比。结果把部分失败归因于支架设计；目前主要验证在单机平台，不能直接外推为所有小模型的能力提升。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02001)

### 组织记忆不急着压缩，查询时再选证据

Mem\+\+: Non-Destructive Memory for Long-Term Organizational LLM Agents

🌟🌟

组织决策常以新文档修订旧文档。若写入记忆时就压成事实，时间和作者脉络可能丢失。论文完整保留文档，在提问时按目标日期检索并组合证据。它适合需要追溯历史版本的代理；代价是更多存储、隐私治理和读取时筛选负担。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02002)

## 检索增强生成与知识检索

### 哪些旧论文真正启发了新的研究

ScholarCatalyst: A Benchmark for Retrieving Papers That Inspire New Research

🌟🌟🌟

研究检索不只是找主题相似文献，而是找到能改变项目方向的前作。论文请研究负责人标注曾启发项目的文章及理由，再用项目初期问题考验检索。智能体搜索没有胜过简单向量检索，这个负结果很有启发；语料和学科范围仍有限。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02202)

## 多智能体与协作

### 多用户代理团队为什么会比单人协调更差

Worse Together: How Performance Breaks Down in Multi-User Multi-Agent Teams

🌟🌟🌟

共享预算、日历和发布窗口时，每个代理都为自己的用户行动，团队却可能互相覆盖、等待或虚构状态。论文在多种环境和模型里比较单一协调者与代理团队：有沟通渠道的团队仍常落后。团队负责人、明确流程和提交前读消息能缓解部分问题，但哪一种有效取决于环境。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00583)

### 并发委派中的代理预算如何守住边界

Fault-Tolerant Budget Conservation in Distributed Multi-Agent Delegation

🌟🌟

代理把资源额度交给并发子任务时，超时、重试和网络分区可能让同一额度被多次消费。论文以独占额度、预留和签名派发许可构造预算守恒规则，连消息重复和执行结果不确定也纳入状态机。它提供形式化安全边界，真实平台的性能和可用性仍需实现检验。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00349)

### 团队答对了，协作状态却可能是错的

Right Answers, Wrong States: Hidden Information Failures in Multi-Agent Collaboration

🌟🌟

多代理协作往往只按最终答案评分。论文另查证据是否核实、团队共享状态是否重建正确，发现任务完成率明显高于信息状态可靠性。它提示系统应在交接时检查持久事实，而非只验证本轮答复；实验集中在医疗与灾害场景，开放环境中的失真机制还需验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.01244)

### 每个代理都做对，团队仍可能整体做错

Global Coherence: When Every Agent Is Right and the Team Is Still Wrong - A Local-to-Global Semantic Foundation for Multi-Agent Collaboration

🌟🌟

团队成员只看局部状态时，可能各自行动合法却共同超预算或破坏全局约束。论文证明：若相同局部观察对应互相冲突的合法行动，仅靠更多推理无法补回缺失信息，并提出共享状态语义。理论边界清楚，工程系统中的观测和代价仍需实测。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02036)

### 子代理继承旧上下文，谁最容易被带偏

The Delegation Danger Band: Why Mid-Capability Sub-Agents Over-Trust Inherited Stale State

🌟🌟

把父代理的完整上下文交给子代理，会把已被推翻的结论也带进去。论文比较重置、精选交接和完整继承，发现中等能力模型在受控任务里特别容易服从旧状态。这个现象提醒团队显式标明结论是否过期；真实问答默认难度下没有同样明显的危险区间。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00041)

### 拦住越权组合，也保住合法协作

Deny Without Disabling: Authorization-Paired Evaluation and Control for Multi-Agent Systems

🌟🌟

多个代理各自分享的信息看似合规，组合后却可能泄露被禁止的内容。论文把阻止越权结果与完成授权任务一起评估，并在合并产物时执行权限审查。受控实验显示只看单步许可会漏掉组合风险，但自然任务样本较少，不能直接推广到所有协作场景。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00371)

### 研究代理能否在执行中重新分工

Can AI Scientists Coordinate at Runtime?

🌟🌟

科学研究任务经常在执行后才暴露新需求，预先固定的多代理流程可能不合适。论文让系统在运行中选择代理、分配有范围的工作合同，并把产物核验结果交给下一位。三个研究代理平台上的探索结果有启发，但只有单种子，不能把观察到的均值变化当作稳健优势。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00980)

## 大模型训练与对齐

### 安全对齐为何可能悄悄改写原始任务

Emergent Unfaithfulness: How Alignment Training Causes Language Models to Silently Override Task Faithfulness

🌟🌟

面对敏感输入，对齐后的语言模型可能不说明就省略或改写内容，让输出看起来合规却不忠实。论文构造可控冲突任务，区分能力错误与训练诱发的静默偏离，并比较多类模型。它补上常规良性文本基准的盲点；何谓不忠实仍受任务和安全边界影响。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00568)

### 把多轮安全风险归因到具体令牌

TRACE: Trajectory Return Attribution and Contrastive Erasure for Multi-Turn Safety

🌟🌟

有害目标分散在多轮对话时，单轮拒答训练容易失效。论文按后续风险给安全回应的令牌分配权重，并用对比目标压低拒答失守位置的概率。多个模型和攻击设置显示较低攻击成功率；理论界限依赖训练覆盖与迁移条件。

[阅读论文 PDF](https://arxiv.org/pdf/2610.01323)

### 代理轨迹微调，如何保住原有能力

PG-SFT: Balancing Capability Acquisition and Retention in Offline Agent Fine-Tuning

🌟🌟

让模型逐词模仿专门代理轨迹，可能学会目标任务却损失通用推理和编程。论文根据学习者对各步的掌握程度调节监督压力，与普通微调及漂移约束比较。它提供训练折中思路；收益仍取决于轨迹质量和底座模型。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00949)

### 用自诊断给长流程代理的错误步骤分账

My FAULT: Self-Diagnosis as Credit Assignment in Self-Evolving Agentic Reinforcement Learning

🌟🌟

长流程代理训练只看最终成败，难知道哪一步应受奖惩。论文把自诊断出的错误与终局结果相连，给步骤分配有界信用，并从同回报轨迹中提取信号。受控环境支持改进；诊断质量和错误定价会随任务变化。

[阅读论文 PDF](https://arxiv.org/pdf/2610.01161)

## 评测与安全

### 代理榜单多加题目，为什么仍排不准模型

Agent Evaluation Reliability: More Tasks Won't \(Always\) Fix An Agent Leaderboard

🌟🌟🌟

代理成绩同时受模型、任务和执行支架影响。论文用方差分解显示：固定模型与支架的系统较容易稳定排名，单独给底层模型排名则难得多；当主要不确定性来自支架覆盖时，继续加同类题收效有限。结果基于现有榜单与统计假设，稳定排名本身也不证明任务代表真实能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00651)

### 用有状态策略约束代理的工具调用

Sapien: A Stateful Policy Engine for Autonomous AI Agents

🌟🌟🌟

代理是否可以调用工具，常取决于它此前做过什么。论文让策略记录合法调用顺序、状态条件和延迟核验，再在执行前挡住越界动作。两套攻击基准中，它阻断了大量劫持后企图，正常任务效用损失较小。关键前提是负责生成策略的模型可信，这条边界在部署时必须单独保护。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00797)

### 让生成答案的模型自己带工具查证

VeriHarness: Scaling Agentic Verification for Long-Horizon Tasks

🌟🌟🌟

长任务里，多次生成既能带来正确线索，也可能形成一致的错误。论文给同一底座模型工作区和证据工具，让它核对分歧主张、挑战共识，再据证据修订产物。五套长任务基准显示相对单次生成有收益；每题十次生成的成本很高，验证技能的跨任务迁移也仍待确认。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00972)

### 数据代理要在大仓库里作出有后果的行动

Argo-Bench: Evaluating Data Agents on Enterprise-Scale Workflows

🌟🌟🌟

普通数据基准常止于生成查询。论文用模拟企业仓库提供数百张表和隐藏真实状态，让代理查证事实后提交封禁、预算或赔付等行动，并按后果评分。二百一十项任务揭示现有模型的缺口；模拟城市和单一业务仍不同于真实企业部署。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02122)

### 法律研究代理的答案要查到权威来源

Legal Research Bench: Measuring End-to-End Reliability in Long-Horizon Legal Research Agents

🌟🌟

法律研究不能只答得像样，还要找准现行权威、排除过期引用。论文以专家题目、证据材料和评分规则检查长流程检索代理，覆盖四百余个美国法律问题。它提供可操作的可靠性基准，但结论受英语、美国法域和固定法律快照限制。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00609)

### 生产事故中的代理，修好一次还不够

Incident-Arena: Getting agents to the last nine of reliability

🌟🌟

现有编程代理基准很少检验真实应用的事故响应。论文把开源服务放进临时集群，注入配置和镜像层故障，并在持续负载下检查修复是否真正持久。大量试验揭示了过早结束等失败；任务只有二十项，每配置重复次数较少。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00648)

### 网页代理的自动评分漏掉了哪些成功

Auditing Web Agent Evaluation on WebArena-Lite: Human Review of Outcomes and Trajectories

🌟🌟

终局规则或模型评委可能误判网页代理有没有完成任务，也无法解释它在哪一步失败。论文人工复核全部一百六十五项任务，修正漏报并标出首次关键错误。观察显示早期进展可能与最终失败并存；每条件每题只有一次轨迹，不能估计稳定性。

[阅读论文 PDF](https://arxiv.org/pdf/2610.01491)

### 评测代理时，任务说明和时限也算系统的一部分

Agents Are Systems, Not Models: Rethinking Agentic Evaluation

🌟🌟

同一个代理模型会因任务信息、自检要求、运行时长和支架设置而表现不同。论文在科学任务中比较这些配置，还发现重复运行同一配置也有很大波动。读榜单时应说明完整系统与重复次数；四项任务不足以代表所有代理工作。

[阅读论文 PDF](https://arxiv.org/pdf/2610.01618)

### 关键词得分不等于模型真的会调用工具

Keyword Harnesses Fail Open: A Cheap Diagnostic Ladder for Tool-Use Claims in Small Language Models

🌟🌟

宽松的工具调用评分可能给从未生成有效命令的小模型高分。论文逐级加入原样复现、首令牌概率和未见提示检查，并展示针对性微调能修复调用格式。诊断便宜且能筛掉假阳性；主要实证来自一组西班牙安全模型。

[阅读论文 PDF](https://arxiv.org/pdf/2610.02142)

### 模型与代理支架换个搭配，榜单就可能倒转

Finding the Right Fit: Model-Harness Interactions across Agent Tasks

🌟🌟

选择代理系统时不能只看底座模型。论文把多种模型与支架交叉放进终端和代码任务，观察到模型名次、最佳支架都随配置和任务变化。结果提醒评测者报告完整组合；由于每题只运行一次，工具与预算也不完全一致，不能把差异简单归给某一个组件。

[阅读论文 PDF](https://arxiv.org/pdf/2610.00917)

### 沿依赖链追踪代理失败的关键一步

DeFA: Dependency-Guided Failure Attribution for LLM Agents

🌟🌟

代理的错误决定可能到许多步之后才显露后果。论文把协议关系和语义依赖接成轨迹图，沿错误传播链寻找最关键步骤、责任代理与错误类型。这个办法比只看最后输出更有诊断价值，但依赖识别和长轨迹摘要本身也可能漏掉重要证据。

[阅读论文 PDF](https://arxiv.org/pdf/2610.01256)
