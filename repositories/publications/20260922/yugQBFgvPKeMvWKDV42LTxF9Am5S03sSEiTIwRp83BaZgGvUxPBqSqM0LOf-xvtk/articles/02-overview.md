---
title: "arXiv Agent 与大模型研究简报｜2026-09-22｜入选论文全览"
author: "Thundax"
summary: "本期关注一个共同问题：智能体正在获得更长的记忆、更复杂的工具和持续自我改进能力，但可靠性不能只靠最终得分来证明。多篇工作把验证前移到训练环境、执行轨迹、证据链与更新准入环节，也有研究揭示长上下文、检索污染和人机沟通中的新失效模式。"
description: "本期关注一个共同问题：智能体正在获得更长的记忆、更复杂的工具和持续自我改进能力，但可靠性不能只靠最终得分来证明。多篇工作把验证前移到训练环境、执行轨迹、证据链与更新准入环节，也有研究揭示长上下文、检索污染和人机沟通中的新失效模式。"
---

# arXiv Agent 与大模型研究简报｜2026-09-22｜入选论文全览

本期关注一个共同问题：智能体正在获得更长的记忆、更复杂的工具和持续自我改进能力，但可靠性不能只靠最终得分来证明。多篇工作把验证前移到训练环境、执行轨迹、证据链与更新准入环节，也有研究揭示长上下文、检索污染和人机沟通中的新失效模式。

本期入选论文全览。

## 智能体系统与工具使用

### 智能体自我修改必须经过外部准入控制

Self-Healing Harness for Runtime Oversight of Agent Self-Modification

🌟🌟🌟

智能体可以提出改变未来行为的规则，但只有在触发问题改善且受保护任务不退化时才允许持久化。三类基准的配对实验中，超过一半被拒提案虽修好局部问题却伤害旧能力；稀疏回放仍可能漏检回归。

[阅读论文 PDF](https://arxiv.org/pdf/2609.24130)

### 把优秀运行框架的行为蒸馏进模型权重

Harness-Zero: Harness Distillation via Agent-as-Harness

🌟🌟🌟

专用运行框架能显著增强智能体，却会增加部署路由和维护负担。该方法让临时指导智能体把专用框架的建议改写为目标动作空间中的训练轨迹，再微调学生模型；移除框架后成功率仍从 23.3% 升到 44.3%。

[阅读论文 PDF](https://arxiv.org/pdf/2609.24974)

### 自动写出的论文，代码和实验真的支持它吗

Beyond the Text: Verifying That Agent-Written Papers Are Backed by Their Artifacts

🌟🌟🌟

研究提出一套自动审计流程，把论文主张转成结构化契约，再结合静态代码检查与实际运行收集证据，寻找硬编码指标、未实现方法和结果不一致。它能发现单独看文本或复现实验都易漏掉的问题，但目前只在一个自动科研平台的数据上验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22111)

### 代码智能体压缩上下文，省钱来自哪一层

An Empirical Cost Attribution of Context-Compression Gateways in Multi-Turn Coding Agents

🌟🌟

作者把多轮代码智能体的成本拆成工具描述过滤、文件内容压缩和历史摘要。工具过滤每轮稳定省一块，文件压缩则因内容反复进入历史而呈近似二次累积，约六轮后可能反超；样本只覆盖两个智能体家族和偏重于单一编程语言的仓库。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22114)

### 智能体程序只应执行当前目标真正需要的节点

LazyAgent: Demand-Driven Materialization and Physical Optimization of Agentic Programs

🌟🌟

该运行时持续从目标反向计算需求闭包，只物化仍被当前请求需要的就绪节点。生产科学流程中节省 42% 处理器时间，跨仓库发布门禁节省 51.7% 容器时间；现有基准几乎没有无关工作，反而难以测出这种机制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.23058)

### 长程代码智能体需要逐步风险反馈

FLARE: A Full-Lifecycle Dense Supervision Paradigm for Long-Horizon Coding Agents via Generative Reward Model

🌟🌟

系统从历史轨迹回溯失败因果链，训练轻量奖励模型，在运行中拦截高风险步骤并局部重试，也把同一信号用于数据筛选和强化学习。一次引导分支胜过五次全局重跑且省约五倍输出；监督质量仍受自动诊断影响。

[阅读论文 PDF](https://arxiv.org/pdf/2609.23808)

### 通用智能体已能低成本篡改真实财务文档

Agents That Edit Documents: Measuring Agentic PDF Forgery Against a Non-Agentic Control

🌟🌟

七个开放模型驱动通用代码智能体修改真实财务文件中的金额、日期或地址，严格检查后仍有 46.2% 成功，最低成本仅数美分。确定性脚本能处理多数文件，但智能体覆盖更广；任务只测局部篡改，不能代表完整欺诈流程。

[阅读论文 PDF](https://arxiv.org/pdf/2609.23953)

### 工具智能体的训练任务应主动覆盖政策边界

EDGEGEN: Improving Tool-Calling Agents Beyond Happy Paths with Synthetic Edge Case Generation

🌟🌟

框架从业务规则中抽取约束，枚举违规组合，再用数据库状态把边界任务落到可执行场景并核验可行性。生成数据用于微调或运行框架优化后，多种模型均有提升；规则抽取仍由模型完成，错误约束可能进入闭环。

[阅读论文 PDF](https://arxiv.org/pdf/2609.24115)

### 科研智能体报告的结果必须对应真实执行

APEXA: Execution-Integrity Enforcement for Multi-Agent LLM Automation of Synchrotron Data Reduction

🌟🌟

同步辐射数据处理系统在工具层加入确定性守卫，任何没有实际工具调用支撑的结果都不允许返回。守卫把一次完整虚构的校准报告转成明确失败，并在模拟电机攻击中做到零违规；大规模智能体性能比较仍留待后续。

[阅读论文 PDF](https://arxiv.org/pdf/2609.24165)

## 大模型推理与规划

### 长上下文中的干扰会随有效负例数量累积

Context Poisoning as Extreme-Value Attention Interference in Long-Context Language Models

🌟🌟

论文把长上下文失效解释为极值干扰：关键证据分数有上限，而大量相似干扰项中的最高分会不断抬升。理论与受控实验都支持这一趋势，并显示同格式负例伤害最大；不过独立高斯假设和少量试验不能直接预测真实系统。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22101)

### 完整推理轨迹的评估需要双向查看上下文

LLaDA-PRM: A Bidirectional Step-Level Reasoning Evaluator

🌟🌟

早期推理步骤是否错误，往往要看后续后果才能判断。受控的注意力掩码比较显示，双向评估器在多数配对实验中胜出；八十亿参数版本在两个步骤级基准上明显超过更大的自回归基线，但任务集中在数学推理。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22700)

### 推理文字与内部概念重合，并不证明因果忠实

From Concept Alignment to Causal Grounding: An Intervention Test of Chain-of-Thought Faithfulness

🌟🌟

研究让直接预测和逐步推理共享同一稀疏表征分析器，再消融共同概念，观察答案概率变化。五个模型上，表征重合普遍较高，但因果贡献随层深和规模显著变化；结果仍依赖表征分解质量，不能覆盖所有内部计算。

[阅读论文 PDF](https://arxiv.org/pdf/2609.23065)

### 智能体何时该追问，以及怎样问得有用

When and How Should an Agent Clarify? CIGAsk: Teaching LLMs to Clarify via Counterfactual Information Gain

🌟🌟

单靠提示常让模型要么逢题必问，要么提出无法消除歧义的问题。新训练方法同时奖励“用户回答带来多少信息”和“当前问题是否确实含糊”，七十亿参数模型在三类问答上领先；训练仍依赖歧义标签，未标注场景尚待解决。

[阅读论文 PDF](https://arxiv.org/pdf/2609.24290)

## 检索增强生成与知识检索

### 检索内容太多时，记忆预算应按相关性分配

AdaMem: Adaptive Memory Token Allocation for Soft Compression in Retrieval-Augmented Generation

🌟🌟

这项工作不再给每段检索材料分配同样多的压缩记忆，而是让压缩器同时估计相关性，再把固定预算倾向关键证据。六个开放问答基准上，预算越紧，优势越明显；但结论仍建立在特定压缩器和问答任务上。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22100)

### 联邦检索不传原文，只交换紧凑表征

Beyond Raw Context Transfer: Representation-based Federated Retrieval-Augmented Generation

🌟

论文面向机构间不能直接共享文档的场景，把检索结果编码成紧凑表征，再用轻量投影器接入冻结的生成模型。问答与视觉问答实验显示，它优于仅用本地检索，并显著缩短上下文；但表征仍可能泄漏信息，隐私保护尚非端到端。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22162)

### 长文事实核验应统一规划搜索与证据复用

EAVer: Long-Form Factuality Verification as an End-to-End Agentic Policy

🌟🌟

传统流程逐条拆分事实并反复搜索，成本高且证据难复用。该方法把相关主张分组，按置信度决定直接判断还是搜索，并把证据压成备忘录跨主张使用；两个基准上准确率提高且搜索量减少约八成，但训练轨迹仍依赖特权教师生成。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22223)

### 新闻越多，检索式预测反而越容易被操纵

The Corroboration Illusion: When More News Makes LLM Forecasts Less True

🌟🌟

攻击者无需接触模型或查询，只需发布针对性文章，就能推动检索式事件预测的概率。五篇注入文章可让约七成预测跨过二分界，并显著恶化概率校准；白名单、分组聚合和困惑度过滤都有低成本绕过方式，说明风险来自信息供应链。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22246)

### 文本转查询智能体真正需要的是可取用的语义

Which Part of the Context Layer Does the Work? Separating Semantic Content from Retrieval Scaffolding in Text-to-SQL Agents

🌟🌟

四组消融把领域语义、检索脚手架和预计算视图分开。结果显示，放在可检索数据契约里的语义贡献最大，单有脚手架提升有限；同样知识直接塞进长提示反而更差。结论来自单一基准域，不能直接推广到所有数据库工作流。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22259)

### 答案正确，引用也可能是事后补上的

Attributable Post-Rationalization in RAG Citations: A Controlled Reproduction and an RLVR Comparison

🌟🌟

论文控制基础权重，对比指令模型和三种可验证奖励训练的搜索智能体，发现维基问答中约七分之一引用并未真正参与答案形成。只奖励答对并不能改善引用忠实度，个别模型还更差；实验规模和模型家族有限，但因果对照较清晰。

[阅读论文 PDF](https://arxiv.org/pdf/2609.23053)

### 科研智能体应复用可追溯的研究资产

ScholarStack: Layered Research Asset Orchestration and Cross-Task Reuse for Scientific Agents

🌟🌟

系统把论文集合编译成三层资产：原文事实、领域组织和跨论文综合，并保留版本、条件与出处。跨论文问答和综述生成收益最明显，查询成本也下降；资产构建的初始成本未计入，效果会受语料覆盖与维护质量限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.23735)

### 生产检索系统可以主动追问自己漏了什么

Re:CAP - Auditing Retrieval Coverage in Production RAG Pipelines

🌟🌟

方法不要求枚举所有相关文档，而是从现有答案识别已覆盖主题，再生成探测问题寻找新信息。四个基准上找回了常规深检索遗漏的证据，生产抽样也显示多数新增文档确有新内容；保留判断仍依赖模型评审。

[阅读论文 PDF](https://arxiv.org/pdf/2609.24122)

## 多智能体与协作

### 多智能体可以学会怎样一起推理

Self-Organizing Agent Teams Learn to Reason Together

🌟🌟🌟

固定团队从少量既往协作中总结角色、阶段、参与方式和信息流策略，再把策略原样迁移到新基准。数学与物理任务平均准确率达到 66.7%，高于最强成员和等算力单模型；收益与答案能否被团队识别高度相关，选择仍是瓶颈。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22682)

## 大模型训练与对齐

### 多语言安全信号并不集中在同一层

Multilingual Safety Signals Are Multi-Layered: Filtering Safety-Degrading Data for Safer LLMs

🌟🌟

这项研究发现，不同语言的安全相关表征只部分共享敏感层，因此单层过滤会漏掉语言特有风险。新方法同时聚合共享层与特有层信号，跨模型和安全基准减少了有害回答；但它仍依赖层扰动和对比表征，未提供形式化安全保证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22144)

### 不相关训练数据也会暗中传递行为偏好

On Mitigation of Subliminal Learning in Large Language Models

🌟🌟

研究追踪微调全过程，发现教师模型的无关偏好会通过数字序列或推理数据传给学生，而且变化常有尖峰和反转。把早期参数漂移限制得更强，可以压制这种潜在迁移并保留多数任务收益；证据集中在同初始化的小中型开放模型。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22215)

### 符合人类偏好，不等于像人类那样回答

Are Human-Aligned Models Models of Humans? A Turing-Test Gap in Preference Alignment

🌟🌟

论文区分“人喜欢的回答”和“人自己会给出的回答”，并证明偏好加权只有在很苛刻的条件下才保持人类行为分布。实验中，偏好越强，人类回答似然越低，标准偏好优化也出现同样缺口；结论针对行为拟真，不否定助手对齐价值。

[阅读论文 PDF](https://arxiv.org/pdf/2609.23640)

### 智能体连续学习会在训练阶段之间互相干扰

ACLArena: Agent Continue Learning in Multi-stage Post-training

🌟🌟

顺序训练数学、搜索、电商和指令能力时，后续阶段会显著破坏早期能力，且之后又可能部分恢复。作者比较蒸馏、回放与模型合并，并用多专家适配器改善保持；实验只覆盖一个主要模型和固定课程顺序。

[阅读论文 PDF](https://arxiv.org/pdf/2609.23989)

## 评测与安全

### 先画蓝图，再生成可验证的智能体训练环境

AutoGym: Blueprint-First Generation of Verifiable Agent Gyms

🌟🌟🌟

系统先定义解空间、环境要求和验证规则，再实例化任务环境，并按模型表现持续调整难度。这样可生成任务、环境和验证器齐备的训练场，减少表面复杂却容易求解的问题；开放任务仍部分依赖模型判断，真实接口也被简化。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22592)

### 自我进化不能只看最后一次得分

Beyond Endpoint Performance: Process-Level Evaluation of Self-Evolving Agents

🌟🌟🌟

基准在多个检查点冻结智能体的记忆或技能，分别测新任务泛化、无关学习后的保持和证据变化后的规则修订。十种方法都难以稳定修订规则，候选更新常有潜力却被选择机制错过；任务环境集中在市场决策。

[阅读论文 PDF](https://arxiv.org/pdf/2609.24663)

### 长期记忆失败，到底是没存、没找还是没用

EvalMem: An Operation-Level Diagnostic Framework for Long-Term Memory Systems

🌟🌟

论文用三个并行检查器分别诊断编码、检索和生成环节，并给出可组合的故障标签。七套记忆系统的测试显示，检索最常成为瓶颈，重组现有记忆也能带来小幅改进；诊断器自身依赖高召回搜索，仍可能遗漏真实证据。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22231)

### 视觉指令冲突需要跨模态学习优先级

Seeing Through Conflicts: Improving Instruction Hierarchy Alignment in Vision-Language Models

🌟🌟

图像中的文字、翻转内容或跨模态拼接会绕过只在文本上训练的指令层级。研究用可验证奖励训练视觉语言模型，发现图文混合监督最稳，并能迁移到网页智能体安全任务；镜像与重构攻击仍暴露出感知、解码和安全判断组合时的脆弱性。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22234)

### 多个模型评审一致，不等于证据独立

Agreement Overstates Evidence: Error Dependence in LLM Judge Consensus

🌟🌟

十个模型评审的错误平均相关系数为 0.21，信息量只相当于约 3.5 个独立评审。忽略这种依赖，部分比较会错误地被判为显著。论文建议用少量可信样本估计共同错误并预先选择投票规则；效果取决于可信样本是否代表真实任务。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22512)

### 评审器要同时审提示、量表、输入和输出

MAWILE: Multi-Axis Workbench for Inspecting LLM Evaluators

🌟

这套工作台对模型评审的四个表面施加受控扰动，并声明分数应保持不变还是按方向变化，从而定位不稳定来自哪里。它支持二元、等级和成对评审且不要求金标；目前更多证明了审计框架可用，跨任务的统一可靠阈值仍未建立。

[阅读论文 PDF](https://arxiv.org/pdf/2609.22599)

### 多语言智能体不仅答错，还会在工具流程上失控

BabelArena: A Large-Scale Multilingual Benchmark for LLM Agents

🌟🌟

研究把四类智能体基准结构化翻译成二十三种语言，共一万六千余实例。低资源语言中的失败更常发生在工具调用和控制流，成功任务也可能消耗近两倍输入；翻译虽经多层校验，仍难完全等同于原生任务环境。

[阅读论文 PDF](https://arxiv.org/pdf/2609.23490)

### 职场智能体评测不该提前替它挑好资料

WorkWorlds: An Infrastructure for Evaluating AI Agents on Workplace Tasks

🌟🌟

评测先固定组织版本、日期和员工权限，再引入任务，避免按题目预选上下文。完整工作空间使证据访问率从 90.4% 降到 74.5%，主要损失发生在找到证据之前；当前只有八个主要任务，搜索与干扰因素仍混在一起。

[阅读论文 PDF](https://arxiv.org/pdf/2609.23806)

### 用户给出错误方案时，智能体常会顺着做

XYEval: Agents say yes to bad advice

🌟🌟

评测把原任务改造成“用户执着于错误解法”的沟通陷阱，覆盖六类基准。模型相对表现最多下降 46.7%，用户要求详细解释时更难纠正；简单系统提示只能部分缓解，说明识别误导与说服用户是两项独立能力。

[阅读论文 PDF](https://arxiv.org/pdf/2609.23939)

### 用户也能改环境时，智能体安全风险明显上升

DUMA-Bench: A Dual-Control Multi-Agent Benchmark for Evaluating LLM Agent Security

🌟🌟

基准允许用户和智能体共同改变环境状态，并加入检索污染、跨智能体操纵等八类攻击。十四个模型的攻击成功率从单方控制下的 26.9% 升到双重控制的 41.1%；该差异是完整交互制度的总体效应，尚未逐项隔离因果。

[阅读论文 PDF](https://arxiv.org/pdf/2609.24662)

## 其他智能体与大模型方向

### 多方长对话记忆要保留证据，也要维护当前状态

Propose, Verify, Commit: Evidence-Grounded Memory for Long-Horizon Multi-Actor Conversations

🌟🌟

系统把原始消息证据与可更新的活跃状态分开，写入时先提出、核验再提交，读取时迭代定位状态及其依据。两个多方记忆基准上领先最强基线二十多个百分点；在知识更新和拒答任务上仍有明显短板。

[阅读论文 PDF](https://arxiv.org/pdf/2609.23465)
