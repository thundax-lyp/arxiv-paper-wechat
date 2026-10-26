---
title: "arXiv Agent 与大模型研究简报｜2026-10-26｜入选论文全览 1/2"
author: "Thundax"
summary: "本期重点看智能体怎样持续省时、怎样把算力花在合适角色，以及评测为何必须同时检查过程与结果。在线工具记忆、稀疏反向训练和强化学习评论器各自给出不同的节省路径；长对话与科学任务评测则提醒我们，短期流畅和报告完整仍可能掩盖执行失败。"
description: "本期重点看智能体怎样持续省时、怎样把算力花在合适角色，以及评测为何必须同时检查过程与结果。在线工具记忆、稀疏反向训练和强化学习评论器各自给出不同的节省路径；长对话与科学任务评测则提醒我们，短期流畅和报告完整仍可能掩盖执行失败。"
---

# arXiv Agent 与大模型研究简报｜2026-10-26｜入选论文全览 1/2

本期重点看智能体怎样持续省时、怎样把算力花在合适角色，以及评测为何必须同时检查过程与结果。在线工具记忆、稀疏反向训练和强化学习评论器各自给出不同的节省路径；长对话与科学任务评测则提醒我们，短期流畅和报告完整仍可能掩盖执行失败。

本期入选论文全览。

## 智能体系统与工具使用

### 在线工具记忆让推测调用持续受益

SPECMEM: Accelerating Agentic Tool Calling via Live Memory Management

🌟🌟🌟

把核验通过的工具调用写回有容量上限的用户专属记忆，淘汰久未使用条目，并在核验前拦住不可逆副作用。作者报告：相对冻结记忆，平均接受词元增加27%，实测最高加速1.74倍；用户隔离减少跨用户泄漏。用户会话为合成重复流，计时采用外部推测循环；副作用门控依赖正确工具标注。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31840)

### 全双工对话为何几分钟后开始崩溃

Why Full-Duplex Speech Models Collapse in Long Conversations

🌟🌟🌟

通过长时回放和模型伙伴交互定位缓存首项驱逐与近期输出自强化，再固定初始化锚点并施加重复惩罚。作者报告：五个基线均退化或耗尽上下文；一小时回放中一种滑窗模型的重复、沉默、乱码降至0%、7.5%、0%。修复仅验证两种滑窗模型，另一模型仍有47.5%沉默；单卡测量仍有额外计算开销。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32349)

### 公共卫生采集智能体扩大证据覆盖

Toward an Agentic AI Approach to Public Health Data Collection

🌟🌟

编排来源发现、可信度评估、证据结构化、事件关联与交叉核验，保留每条观察的来源。作者报告：三项回顾应用恢复13个汉坦病毒病例，加拿大麻疹总数距参考低0.33%，猴痘近期报告覆盖天数占比由28.2%升至65.6%。更多来源不等于每条记录准确，前瞻时效收益尚未测试。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31746)

### 网页图谱每条关系都应附原文引句

Every Edge Needs a Quote: Building a Quote-Grounded Knowledge Graph of Healthcare Software Adoption with Language-Model Agents

🌟🌟

供应商站点确定性抓取与预算搜索智能体发现页面，再用逐字引句、指代消解、规则检查和五次模型投票过滤关系。作者报告：61个供应商、6428条候选的页面级参照上精确率0.94、召回率0.71；置信排序可达两者0.90。参照主要由模型形成且只覆盖抽取候选；引句证明网页说过，不证明关系现存或获机构认可。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32781)

### 农业问答把授权做成显式状态转换

KrishokTech: A Bengali Agricultural Advisory System with Explicit Authorization Controls

🌟🌟

生成前执行风险转介、补问作物和图文冲突确认，检索绑定单作物，生成后删除无证据剂量。作者报告：测试中作物检索违规由36.5%降至0%，发现453/454图文冲突并拦住114/118植入剂量错误。仅六类作物、有限别名及数值剂量，未覆盖所有风险改写，田间用户效果未测试。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32817)

## 大模型推理与规划

### 停止头预测少算不等于真正节省计算

Do Halting Heads Really Save Compute in Looped Language Models?

🌟🌟

从头训练循环模型，比较混合损失、逐步评分与无停止头的随机深度基线，并按真实退出规则和批内最深词元计费。作者报告：混合损失头预计不到一半迭代却常运行到上限；逐步训练需强提前停止惩罚，在批次成本下优势大幅缩小。模型最大十三亿参数，主要按验证集每字节损失评价，深度曲线形态影响收益上界。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32246)

## 检索增强生成与知识检索

### 检索方案优劣取决于用户记住多少原文

What the Query Remembers: Query Abstraction Governs Lexical and Dense Retrieval of Classical Arabic Poetry

🌟🌟

比较九个稠密编码器和词法检索，并在同一查询上增添或改写诗句以隔离字面重叠作用。作者报告：带原句查询上词法召回率为0.746、强稠密模型为0.717；加入半句原文可使词法召回增加37.8个百分点。查询由作者编写，真实用户的查询类型比例未知，人工主题相关性评审规模有限。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31821)

### 向量能读出情绪却未必按情绪检索

Semantically Rich, Metrically Affect-Blind: A Geometric Blind Spot in Modern Text Embedders

🌟🌟

比较线性探针与余弦检索，给冻结嵌入器增加小型监督对比投影，并测量一般语义能力代价。作者报告：情绪可解码准确率最高91.3%，原始相似度却几乎不区分极性；检索平均精度最高提高26点。仅两套英语二分类情绪数据，专用128维头损失38至41点通用语义相关性。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32122)

### 把检索示例压成证据再做上下文学习

From Noisy Retrieval to Decision Evidence: Silver Evidence Demonstrations for In-Context Learning

🌟🌟

先不看标签生成任务相关证据摘要，再与专家标签及可用金证据组成示例；测试时一次结构化调用输出证据和判断。作者报告：四数据集中三项准确率胜过等量金标示例，全部带证据数据的证据综合分改善。压缩、输出结构和中间监督仍有混杂，未做配对显著性检验，不能证明因果链。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32128)

### 同骨干下专用重排序优于决策微调

System One models Are Not Better Rerankers

🌟🌟

在相同语言模型骨干上比较未调模型、决策微调和重排序微调，同时改变相关性问题措辞并测阈值保留质量。作者报告：六骨干十集合中，六亿至九十亿规模专用重排序高5至29个排序分点，二百七十亿规模持平。已发布微调的数据也不同，自训只用一个配方与种子，不能证明决策训练目标本身必然无效。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32318)

### 稀疏检索头既能解释也能改善多模态检索

A Broader Look into MLLM's Retrieval Heads

🌟🌟

匹配语音与画面证据，用问题相关注意力定位检索头并消融，再以相关页面标签训练所选头的排序目标。作者报告：18个检查点中共享头不到全部的2%；主模型页面首位召回提高6.03个百分点，三家族均有收益。与外部发布检索器协议不同，可信比较为同设置未训练头；检索机制不等于完整多模态理解。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32411)

### 把本体约束和证据片段写进知识图谱流水线

Ontology-Guided Knowledge Graph Construction from Structured Metadata and Climate Science Publications

🌟🌟

从论文提取附证据三元组，依次核对本体、证据和实体链接，再并入结构化气候元数据骨架。作者报告：2000篇论文候选三元组由39964减为23327，最终模型判定正确率98.96%；千条人机一致性与人际范围相近。正确率主要为模型判断且不提供三元组召回率，75万图关系不等于全部是论文抽取事实。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32725)

## 多智能体与协作

### 多智能体应联合选择提示与执行模型

Not Every Agent Needs the Strongest Model: Unified Prompt-Model Optimization for Heterogeneous LLM-based Multi-Agent Systems

🌟🌟🌟

按角色搜索提示与模型组合，用局部、下游和全局反馈筛选质量成本折中，再随协作结构协调更新并复用轨迹记忆。作者报告：五基准集中式平均分由69.79升至70.40，加权部署成本相对最强同构配置下降85.2%。成本按模型价格加权词元计算，优化器模型也不同，不能把全部成本差归因于搜索算法。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31743)

### 把核验失败定位到具体智能体再修提示

An Agentic Approach with Evidence-Grounded Verification for Multimodal Emotion Reasoning in Conversation

🌟🌟

感知智能体提交带证据观察，整合器与批评器形成回答，再按确定性及蕴含核验聚类失败、定向更新提示。作者报告：四个多模态骨干相较静态流程提高0.6至2.2个综合分点；移除补丁复验损失最大。只审计已引用证据；未报告多次串行调用的时延和费用。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31685)

### 按未来情节需要组织长剧本记忆

DraMaze: A Multi-Agent Pipeline with Future-Aware Memory for Diverse Microdrama Script Generation

🌟🌟

用叙事套路引导进化树搜索，以未来叙事目标倒推历史依赖，配合世界状态维护和多智能体写作。作者报告：三种骨干中长剧本一致性改善，60集脚本因果模式重复减少32.1%，逻辑分82.5、较最强基线高8.5点。主实验仅30个创意，逻辑评分和模式重复指标不等价于观众偏好或制作价值。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32002)

### 多智能体讨论的共识与信息保留会冲突

Beyond Final Outcomes: Quantifying Claim-Level Information Dynamics in Multi-Agent LLM Interaction

🌟🌟

把输出分解为原子主张，跟踪收敛、探索与保留，在固定角色和新闻输入下比较五种交互结构。作者报告：反复汇总提高共享与趋同却缩窄信息空间，分布式接力扩大探索但降低共享，附加约束会损失部分保留。单一生成模型和40个控制新闻案例，各讨论周期独立重启，不代表持续协作。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32333)

### 标注智能体应对齐人的分歧分布

Can LLM Annotators Match Human Consistency? Benchmarking Human Agreement and Optimizing Multi-Agent with Contrastive Knowledge

🌟🌟

给每样本五个独立人标与详细指南，以分布一致性评价，三个标注智能体和核验器从正反例蒸馏边界规则。作者报告：七数据集上多数同意准确率较最强基线高4.5点，与人分布一致性差距收至2点内。多智能体与反复优化增加成本，长文和开放专家判断尚未覆盖。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32415)

### 用隐状态与局部雅可比传递智能体推理

J-Comm: Jacobian-Guided Latent Communication between LLM Agents

🌟🌟

发送者在嵌入空间做几何一致性重加权，接收者结合连续输入和词表索引的局部雅可比读出，在自身中间层重建线索。作者报告：八十亿到四十亿模型七基准平均最高，较文本协作少生成19.2%至74.8%文本词元。每模型对要校准字典与词元对应，发送者最多32768个潜在步骤，省文本不等于省总计算。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32871)

## 大模型训练与对齐

### 强化学习评论器还能估计回答置信度

Free Lunch for LLMs Confidence: The RL Critic Already Knows

🌟🌟🌟

在终局奖励等于正确性时将价值函数读作正确概率，直接复用现有评论器并用于候选筛选。作者报告：两种八十亿参数模型在八个同分布组合中区分能力最佳，16组中14组校准最佳且不改策略准确率。没有评论器的训练方法仍需补训价值模型，每次回答也增加一次价值模型前向计算。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31820)

### 只稀疏反向注意力也能加速长文微调

LazyFlash: Forward-Dense, Backward-Sparse Attention for Accelerated Long-Context Fine-Tuning

🌟🌟🌟

前向保持完整注意力，反向按已有输出梯度给查询块排序，以梯度质量预算和重要性采样跳过低贡献计算。作者报告：长文测试总体分30.24对稠密基线29.64；三万二千词元时反向注意力加速5.72倍、完整训练步加速1.66倍。收益依赖上下文长度与注意力耗时占比，局部内核加速不能当作整机或所有训练任务收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31911)

### 英德混合专家模型的完整训练取舍

Kolibri: A Sovereign European Model on the Pareto Frontier

🌟🌟

围绕德国本地部署组织数据、分词、混合专家结构、长文扩展及监督和强化后训练，并报告服务质量成本折中。作者报告：总参数781亿、每词元激活34.6亿，约24万亿训练词元；在报告所选英德评测中位于质量成本前沿。前沿依赖比较集合与服务配置，活跃参数少不代表权重存储小，部分消融只在代理规模进行。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31945)

### 用间接教师反馈训练幻觉片段核验

SOPO: Socratic Guided Policy Optimization for Span-Level Hallucination Detection

🌟🌟

教师依据真值给苏格拉底式提示，引导多轮定位错误片段，再用按轮优势缩放抑制冗长并随机省略反馈。作者报告：四十亿参数模型在训练域基准领先比较对象，四个域外基准平均分高于普通组相对优化。没有多次独立强化训练种子，固定检查点重复推理不能替代训练方差，简短偏好未必适合开放探索。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32212)

### 只给粗主题也能启动在策略自训练

On-Policy Self-Training: Data-Free Self-Improvement in Large Language Models

🌟🌟

模型生成问题与特权推理，按自一致性伪核验筛选，让带特权信息的移动平均教师在学生轨迹上供给蒸馏目标。作者报告：同源合成数据上优于监督微调及组相对策略训练，并扩展到视觉问答，混合主题帮助保持域外能力。只能放大已有知识，自一致性无法排除一致错误；主题手工指定且实验以小模型为主。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32770)

### 教师帮一小段后学生能否自己继续

Frontier-OPD: Discovering the Edge of Agent Capability and Teaching Agents to Go Beyond

🌟🌟

把在策略经验按共享状态聚合，筛选师生分歧处，验证短教师桥接及后续学生延续的联合表现，再把通过的教师响应用于蒸馏。作者报告：三种交互环境多个师生配置均报告更高平均自主表现，一项设置到55%成功率的总耗时更短。联合窗口代理不保证后续独立能力增长，三种子均值不能证明显著优势，还依赖可回放环境及教师词元概率。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32802)

## 评测与安全

### 科学智能体会写报告还不等于做对实验

SCI-AGENT-EXAM: Benchmarking Agents on Scientific Research Tasks

🌟🌟🌟

让智能体交付代码与报告，分别用确定性隐藏检查与经专家校准的模型规则评分，并重放文件快照追踪退化和恢复。作者报告：120任务覆盖11领域与7类工作流；最佳综合分80.9，但仅26%运行达到0.95成功阈值。结果依赖统一通用执行框架、任务包与评审规则，不能替代开放科研发现评估。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32441)

### 评测器整体准确并不保证提示比较可信

Validating the Comparison, Not Just the Scorer: Why Overall Accuracy Can Mislead in Interactive LLM Evaluation

🌟🌟

在相同模型与题目上配对审计两组提示，分解误报和漏报对组间差异的影响。作者报告：总体综合分为0.916，确定性提示的表面增幅经两名独立模型评分后从9.3降至2.3个百分点。审计依赖模型评分而非人工真值，样本量小且校准区间宽。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31678)

### 数学辅导成功率为何会被评分规则改写

MisconceptDialogue: Evaluation Criteria Shape Measured Success in LLM Math Tutoring

🌟🌟

把错误检测、误解诊断与多轮补救分开，并对相同对话施加多种评分标准及错配诊断控制。作者报告：同一批2250段对话的补救成功率由严格匹配的42.1%变为模型评分的81.3%，错误诊断也未明显降低成绩。学生为模型模拟；200个人工标注用于评分校准，不能证明真人学习收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31679)

### 角色信念是否真正组织模型行为

The Schema Coherence Inventory: Measuring Whether an Assigned Belief Organizes a Language Model's Cognition

🌟🌟

用96个六选一情境题和长度归一化概率区分特定信念与一般情绪，并检查自由生成一致性。作者报告：五个骨干上的信念适配均表现出目标特异性，六种已有患者模拟器未胜过一句信念提示。量表与训练语料共用临床分类，少量情境相似，不能作为模型心理状态真值。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31683)

### 改对工具选择不等于学会复用约束

From Target Selection to Condition Reuse: Auditing Residual Interventions in Tool-Use Models

🌟🌟

在权限和时间控制的工具任务中写入残差状态，再交叉重组事实并独立询问资格与选择。作者报告：两种写入使熟悉目标选择由35/128和33/128升至119/128和114/128，但事实重组后收益消失。单个二百七十亿参数模型、特权监督与程序化任务，不能估计部署错误率。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31686)

### 概率判断一致性可暴露部分不可靠回答

Latent Coherence: Do Frontier Language Models' Probability Judgments Obey the Law of Total Probability?

🌟🌟

分别请求事件概率、潜在状态概率和条件概率，用全概率公式残差及多种改写区分持续不一致与措辞噪声。作者报告：七模型残差与对真值的误差相关系数为0.40至0.62，推理长度不能预测一致性。噪声估计仅83个实例、不同供应商推理预算不可直接等同，一致不代表正确。

[阅读论文 PDF](https://arxiv.org/pdf/2610.31833)

### 明示不可靠来源仍能牵动推理答案

How Much Do You Trust A Dog? Quantifying Hint-Following in Reasoning Language Models

🌟🌟

以教授、朋友和狗等来源给选择题答案提示，用大量采样拟合对数赔率偏移，再在受控小模型研究奖励机制。作者报告：三类模型提示响应可由指数倾斜近似描述，告知来源错误或加入警告也不能消除跟随。实证主要为二十亿至四十亿参数选择题模型，合成训练不能证明真实模型训练成因。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32055)

### 回答来源自述依赖作答时的缓存状态

Context or Knowledge: How LLMs Attribute Their Own Answers

🌟🌟

回答生成后交换文档或问答缓存，并在词元相同的运行间移植状态，以区分文档内容与回答过程痕迹。作者报告：文档缓存改变不改归因；问答缓存移植使合格样本跟随供体，小模型定向干预可翻转98.9%至100%归因。只覆盖受控事实任务和一种来源提问，不能证明自然检索的归因可靠或缓存方向的完整语义。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32109)

### 输出更短未必让生成更省更稳

Shorter Is Not Cheaper: A Controlled Comparison of Declarative Animation Specifications and Free-Form Code for LLM-Generated Explanations

🌟🌟

在冻结任务与评分器下比较声明式动画规范和自由代码，分别统计答案、推理、时延、修复与语义通过。作者报告：四模型的规范答案短25%至48%，开启推理时没有模型显著更快；小模型规范有效率33%、代码经修复有效率95%以上。只测两模型家族20个任务，新格式仅由上下文教授；不能外推所有专用语言。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32129)

### 多语言置信度评测要拆开三种语言

Disentangling Question, Response, and Verifier Languages in Multilingual P\(True\) Self-Evaluation

🌟🌟

独立改变问题、回答要求和核验指令的语言，固定回答后读取首词元正确概率，另核验自动评分器。作者报告：六语言十模型中，核验语言可使校准误差变化0.04而准确率不变；未校准评分会遮蔽多数语言差距。仅一种置信度探针，真假标签仍为英文，翻译来源可能偏向英语。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32144)

### 采集日期会在证据不变时误导时间问答

Collection-Date Assignment Redirects Answers in Temporal QA

🌟🌟

固定两版正文及修订时间，只交换接近问题日期的采集元数据，并以虚构记录、提示和远日期控制核查。作者报告：595页五开源模型的较晚答案精确匹配下降37.6至51.4个百分点，128个独立页面重复该方向。接口模型交换效应较小，主要为英语百科双版本，不能估计在线系统错误率。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32191)

### 能重构激活并不意味着解释忠实

Natural Language Autoencoders Identify Without Explaining

🌟🌟

区分自然语言自编码器描述的识别功能与刻画功能，分析重构成功为何可能只奖励可逆编码。作者报告：提出重构指标无法单独证明文字准确描述激活用途，指出隐藏目标场景缺少独立真值。属于概念批评而非新增对照实验，不能据此判定所有自然语言解释无用。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32691)
