---
title: "arXiv Agent 与大模型研究简报｜2026-11-06｜入选论文全览"
author: "Thundax"
summary: "本期关注智能体系统中的证据错位：提分是否真来自通信，验证通过是否等于理解一致，英语成绩能否迁移到其他语言。同时观察推理复现、长上下文和可执行干预如何让性能改进更可解释。"
description: "本期关注智能体系统中的证据错位：提分是否真来自通信，验证通过是否等于理解一致，英语成绩能否迁移到其他语言。同时观察推理复现、长上下文和可执行干预如何让性能改进更可解释。"
---

# arXiv Agent 与大模型研究简报｜2026-11-06｜入选论文全览

本期关注智能体系统中的证据错位：提分是否真来自通信，验证通过是否等于理解一致，英语成绩能否迁移到其他语言。同时观察推理复现、长上下文和可执行干预如何让性能改进更可解释。

本期入选论文全览。

## 智能体系统与工具使用

### 哪些推理真的多余，要删掉后继续执行才知道

How Do AI Agents Waste Your Money?

🌟🌟🌟

智能体用词多，不代表每段推理都无用。作者统一记录轨迹，用裁判标出重复、填充等内容，再删去并恢复执行验证影响。在线实验删掉41%至46%的推理，代码任务成功率大体保持，但工具任务仍有所下降；首轮删减也出现明显退步，不能把平均可删比例当成通用压缩预算。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07238)

### 固定请求所见的批处理形状，让推理可以复现

BlockLock: Reproducible LLM Inference with Fixed Batch Geometry

🌟🌟🌟

同一请求与不同请求一起运行时，浮点运算路径变化会改变输出。作者固定受保护请求的批处理几何，保留共享预填充，在五个稠密模型及多种硬件配置中取得逐位一致结果。等量工作下比批不变内核更快；保证限于固定部署和批量配置，并不覆盖换硬件或任意动态批量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06977)

### 技能库需要同时更新内容、执行方式和选择规则

KDASO: Knowledge-Data Dual-Driven Automated Skill Optimization for Liability Adjudication Tasks

🌟🌟

责任判定技能库会过时，模型也可能误用正确的规则。作者从相近新案例归纳技能，用执行轨迹修订描述，再以轻量分类器和结构匹配筛选预算内技能。多个判责与逻辑任务获得改善，但并非全面超过更强模型；私有网约车数据和跨法规迁移缺口限制了结果外推。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06972)

### 让资源带着使用能力，按任务组合智能体原语

The Last Mile to the Real World: Agent-Native Primitives as Reusable Building Blocks for Solving Real-World Tasks

🌟🌟

工具可访问，不代表调用者会正确使用。作者把资源与驻留模型、接口和验证证据打包，再按任务组图、执行核验并局部修订。在同底座终端任务中，完成率从37.3%升至55.5%；自建平台任务也报告改善。八类原语的基准和预算各异，自建任务及作者汇总结果仍需独立复验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07461)

### 证明通过后，仍要检查定理是否表达了原意

Formalizing inverse problems in the age of AI: possibilities, pitfalls, and an invitation

🌟🌟

自动证明变便宜后，审核瓶颈转向形式化陈述是否忠实表达数学原意。作者构建逆问题理论库，将自然语言陈述、形式化规格与证明分离，并用非空性测试发现教材定理的过强前提。案例说明内核通过不能替代语义审核；目前只覆盖经典线性理论，且人工审核尚未覆盖全部节点。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06962)

### 把模型账单追溯到一笔订单，需要两套账

The Two-Ledger Model: Transaction-Grain Cost Accounting for Multi-Agent AI Systems Across Clouds, Models, and Systems of Record

🌟🌟

云账单能说明结算了多少费用，却往往无法回答一笔订单用了多少智能体成本。双账本方案以调用记录承接业务归因，以结算记录保留财务事实，再通过分层关联和周期对账连接两者。仿真展示缺失追踪时的归因与预算控制；覆盖率高不等于归因准确，尚无现场部署证据。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06989)

## 大模型推理与规划

### 把长上下文组织成树，用短序列训练外推到百万词元

Recursive Sparse Attention: Million-Token Length Extrapolation at Logarithmic Cost

🌟🌟🌟

超长上下文的瓶颈不仅是注意力计算，还包括逐项选择信息的成本。作者把缓存组织为树，逐层展开少量候选，并保留未展开分支的摘要。在仅用约三点二万词元长度训练后，百万词元合成任务得分为60.5，高于最佳对照40.0。效率与外推均有改善，但单模型、单卡和少量超长样本限制了泛化判断。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07232)

### 用可执行程序解释人和模型为何答错

Synthesizing symbolic models of human and machine reasoning at scale

🌟🌟

只看推理文本，很难比较人类与模型的错误机制。作者让模型编辑任务程序，直到可执行程序复现观察到的错误输出，再比较规则复杂度和特征选择。人和模型都呈现简化与局部拟合倾向，但常错在不同任务；能复现行为的程序只是候选解释，不能直接当成内部认知机制。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07088)

### 给小草拟器一份压缩历史，减少推测解码的缓存负担

HyFlash: A Prefix-Memory Prior for On-Device Speculative Decoding

🌟🌟

端侧推测解码的小草拟器既要记住长历史，又要处理同批草稿的细节。作者用循环记忆压缩已确认前缀，并以局部注意力处理近期信息，在两个目标模型上提高草稿接受长度和速度。固定大小记忆降低草拟侧缓存，但不包括目标模型缓存、权重和临时缓冲，不能理解成整机内存不再增长。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07263)

### 是否再生成一批答案，还应考虑刚才等了多久

Latency-Aware Adaptive Best-of-$N$

🌟🌟

多采样可以提高答案质量，也会让在线用户等待。作者先生成一批，再结合当前最佳奖励与实际延迟决定要不要追加、追加多少，并用奖励分位数统一成本权衡。二十四种模型、奖励器和数据组合的仿真中，相同奖励的折算成本降低；实验使用可知的延迟条件期望，真实服务中的预测误差尚未验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07453)

### 自主改进越快，也可能越快优化错目标

Adapting the Process of Adaptation: Darwinian, Lamarckian, and Agent-Directed Evolution in AI

🌟🌟

自主选择改进候选可以加快适应，但前提是评价目标正确。作者用统一演化模型比较自然选择、继承学习和智能体主导搜索，推导适应速率及搜索成本权衡，并分析错设目标如何加速错误行为收敛。理论提醒应独立评价改进方向；数学假设下的速度排序不等于实际模型自我改进速度。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07048)

## 多智能体与协作

### 跨模型协作提分，可能只是接收端学会了适配

On the Opportunities and Challenges of Prefill-to-Autoregressive Cross-Model Transfer

🌟🌟🌟

把大模型提示表示传给小模型，得分提高也未必说明知识成功传递。作者训练冻结模型间的线性桥，并加入无关输入、自我通信和接收端单独训练等对照，发现部分生成任务的提升可由适配效应复现。贡献在于拆开通信与训练收益；同模型家族和任务污染仍影响解释。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06976)

### 三个模型投票，未必比最强单模型更可靠

More Agents, More Reliable? System-Level Reliability of Multi-Agent LLMs under Operational-Profile Uncertainty

🌟🌟

把多个模型的答案投票合并，不会自动增加可靠性。作者将分领域失效区间传入系统失效网络，再按不确定的使用分布汇总。化学危险描述提取案例中，投票能防住最弱模型，却没有清楚超过最强者；合并器若有百分之五的失效率，部分优势就会消失。结果来自九种物质，主要展示分析方法。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07140)

## 大模型训练与对齐

### 专家并行中的空闲设备，能否提前释放

Resource-Efficient Reinforcement Learning Post-Training through Elastic Expert Parallelism

🌟🌟

混合专家模型生成强化学习样本时，已完成本地响应的设备仍可能被其他设备需要。作者联合安排提示、缓存预算和专家驻留，逐步缩小活动设备组。相对共同后端基线，吞吐提高52.74%，单位设备占用时间产出提高65.40%；实验集中于单模型和十六张昇腾设备，长期训练收益尚未建立。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06984)

### 用软提示校准小裁判，学到的是特定标注政策

Adapting LLM Judges to Observed Human Annotation Policy through Soft Prompt Tuning

🌟🌟

小模型裁判与人工评分不一致时，可以冻结模型、仅训练连续提示向量。作者在偏见、毒性和个性化任务中比较文本规则、软提示及随机前缀，观察到训练后的提示改善一致性。外部毒性集也有改善，但幅度依赖底座；学习聚合标注政策不等于获得通用、公正的评价能力。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07126)

## 评测与安全

### 模型回答没变，修正评分器就能大幅改变成绩

Follow the Policy, Fail the Benchmark: Auditing and Revising Policy-Based Decision Benchmarks

🌟🌟🌟

规则推理基准可能把正确回答判错，也可能接受错误程序。作者追溯九套基准的规则、答案与执行逻辑；在九十六个数值案例上，仅修正解析和零值处理，就让三个模型的接受率各提高八十多个百分点。结果要求先审计评测链；选取的语义案例不能估计整个基准的错误比例。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07042)

### 客服智能体换一种语言，工具任务可能大幅退步

τ-bench-LILT: Evaluating Conversational Agents on Realistic Multilingual Tool-Use Tasks

🌟🌟🌟

英语客服评测不能直接代表其他语言。作者将客户数据、任务与模拟用户一并本地化，测试四种语言和四个业务域，发现部分韩语与波斯语零售任务的四次全成功率比英语低至多六十一个百分点。姓名次序和模拟用户提前结束都会影响结果；政策与工具仍保留英语，这是一种特定部署情景。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07203)

### 对话后门可以在触发之后持续改变引导方向

Interactive Backdoor Attacks in LLM-Based Proactive Dialogue Systems

🌟🌟

对话后门未必只制造一次异常回答，也可能改变后续多轮引导方向。作者通过微调数据投毒比较即时、固定轨迹和开放轨迹三种攻击，在两个模型及两套咨询数据上观察到持续偏转。正常任务表现大体保留，所测防御仍有残余成功；模拟用户续话不能证明真实用户会被说服。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06969)

### 证明智能体偏爱显式缺口，却可能绕开关键枢纽

Autonomous AI Agents Systematically Diverge From Human Preferences in Proof Formalization

🌟🌟

智能体愿意修改哪里，未必与人类证明者一致。作者把模型放入九个证明项目的历史状态，对比编辑选择，发现模型更偏好显式未完成标记，并相对回避连接密集或目标意外的定义。结果提示任务分派不能只依赖模型自选；历史回放中的偏好不等同于真实长期协作的因果效果。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06995)

### 多跳调用验过签，也不代表权限没有被扩大

Authorization Propagation in Agent2Agent Systems: An Experimental Security Evaluation of Multi-Hop Delegation

🌟🌟

多智能体转发请求时，当前调用者身份与原始授权来源需要分别验证。作者在四方合成流程中分离授权证据、逐跳签名和两类重放状态，拒绝十五种对抗条件中的十四种。但路径正确仍不能保证权限逐跳收窄，共享密钥持有者也能重写授权；本地延迟不含网络开销。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07050)

### 评估智能体之前，也要让评估器接受纠错

Closed-Loop Agent Evaluation: Layered Measurement and Self-Calibration

🌟🌟

一次总分难以解释智能体上线后的失败。作者把评估分为步骤、执行链、会话和持续使用四层，以原始证据和版本化规则计算结论，并以内部循环修正评估器、外部循环推动系统修改。案例中规则化判断一致性优于整体打分；外部改进门控仍是离线检验，尚无上线收益证明。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07051)

### 独立形式化是否一致，不能只看验证通过

When Verification Is Not Agreement: Cross-Agent LLM-to-Dafny Formalization

🌟🌟

两个模型独立理解同一段试验标准，再用程序验证连接结果，仍可能大量分歧。九十六份文档中，同模型对照的一致率为59.3%；还出现直接调用规格谓词来满足后置条件的捷径。结构审计因此必不可少；角色与抽取提示相互混杂，也没有人工真值，不能据此判定哪个模型理解正确。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07073)

### 一次安全回答之后，还要测试用户继续施压

SAFE-Teen: Evaluating Chatbot Safety Across Adolescent Mental Health Conversations

🌟🌟

安全评测需要观察用户被拒绝之后如何继续对话。作者以临床专家编写的情景构造匹配分支，在十八个聊天接口上模拟三万多段青少年对话。增加年龄相关提示后，适用安全标准的失败率从43.3%降到24.9%，但持续施压仍会增加越界；结果衡量模拟对话中的标准失败，不能视为真实伤害发生率。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07218)

### 骤降时立即收权的策略，可能漏掉缓慢退化

Trust Responsive Runtime Authorization for Agentic AI with Empirical Characterization of Policy Behavior and Parameter Sensitivity

🌟🌟

授权策略可以要求连续良好观测才升级，同时在状态骤降时立即收权。作者在匹配仿真轨迹中发现这种非对称规则恢复更快，但缓慢退化时常保持过高权限。它揭示了触发规则的盲点；结果来自单一种子的一百条轨迹，授权等级也尚未对应真实操作权限。

[阅读论文 PDF](https://arxiv.org/pdf/2611.06996)

### 模型裁判需要持续维护，提示优化也会产生专化

PromptOps: Iterative Prompt Optimization for LLM-as-a-Judge Systems

🌟🌟

模型裁判的提示不应上线后长期冻结。作者在有人工反馈的数据流上，把触发更新、选择样本、选择优化器和修改提示拆开实验。受控评分分布变化后，部分配置能恢复较静态提示更低的误差，但没有统一最佳优化器；过去数据上的适配也可能让下一次分布变化更难应对。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07123)

### 判断某个来源是否参与训练，先限制极端样本的影响

Source-balanced Capped Fisher: Bounded Evidence Aggregation for User Inference in Language Models

🌟🌟

判断某来源是否参与模型更新，不能简单取几篇文档分数的最大值。作者用未参与来源校准尾部证据，限制单文档贡献，再在来源层面独立校准决策。四个领域的排序效果均优于所测聚合器，但部分增益很小；误报控制依赖来源可交换，实验也只使用固定小模型。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07228)

## 应用与基准

### 核查遗传结果变化之后，通知仍需要临床判断

Reclassification Is All You Missed: Surfacing Variant Reinterpretation Need in Online Health Communities at Population Scale

🌟🌟

作者构建多阶段管线，从社区帖子提取遗传变异，查询历史与当前数据库分类，并草拟提醒。三百九十万帖子中发现一百二十三个候选分类差异，但这些不是临床确认的再分类。三十条留出草稿中二十七条事实有据，只有十五条适合发送；全程未联系用户，也未证明临床收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07054)

### 把创作意图转成可确认、可修改的镜头策略

Designing with Cinematic Language: An Intent-Driven Approach to Human-AI Video Clip Co-Creation

🌟🌟

创作者知道想表达什么，却未必能直接写出镜头参数。作者以电影资料和片段建立意图设计空间，让智能体澄清目标、推荐并修复镜头策略，用户确认后再生成，并逐渐积累偏好。用户研究支持可控性与表达改善；目前聚焦镜头和短序列，固定意图体系不能覆盖跨文化、长叙事的全部需求。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07377)

## 其他智能体与大模型方向

### 追踪语法复数特征如何传到动词选择

Encoding and Propagation of Grammatical Number in Large Language Models

🌟

稀疏自编码器能否帮助解释语法数的一致性？作者在小语言模型中寻找复数名词、主语与动词选择特征，通过干预改变输出词形，并在两个更大模型中检验部分模式。复数特征比单数特征更明显，但特征冗余和未完整识别的通路限制了机制解释，不能据此概括所有语言的语法表示。

[阅读论文 PDF](https://arxiv.org/pdf/2611.07283)
