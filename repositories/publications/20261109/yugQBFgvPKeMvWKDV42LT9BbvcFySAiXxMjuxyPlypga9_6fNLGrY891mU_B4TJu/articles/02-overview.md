---
title: "arXiv Agent 与大模型研究简报｜2026-11-09｜入选论文全览"
author: "Thundax"
summary: "本期从智能体系统的三个具体问题展开。工作流的多个改动怎样组合，子任务怎样只拿到所需权限，团队又该何时交换证据。并行探索和假共识实验分别揭示了协作的收益与代价。训练与评测方面，几篇论文进一步追问词汇指标、拒答格式和自动评分能否代表真正关心的质量。"
description: "本期从智能体系统的三个具体问题展开。工作流的多个改动怎样组合，子任务怎样只拿到所需权限，团队又该何时交换证据。并行探索和假共识实验分别揭示了协作的收益与代价。训练与评测方面，几篇论文进一步追问词汇指标、拒答格式和自动评分能否代表真正关心的质量。"
---

# arXiv Agent 与大模型研究简报｜2026-11-09｜入选论文全览

本期从智能体系统的三个具体问题展开。工作流的多个改动怎样组合，子任务怎样只拿到所需权限，团队又该何时交换证据。并行探索和假共识实验分别揭示了协作的收益与代价。训练与评测方面，几篇论文进一步追问词汇指标、拒答格式和自动评分能否代表真正关心的质量。

本期入选论文全览。

## 智能体系统与工具使用

### 智能体工作流可以先分开调，再组合验收

Divide, Diagnose, and Compose: Optimizing Agentic Pipelines and Harnesses

🌟🌟🌟

先从同一版本分别试验提示、模型、结构或工具策略，再借助组件轨迹诊断合并方案。四个基准上，最终工作流相对最强整体对照的任务指标平均高 2.58 个百分点，推理延迟低 42.45%。搜索阶段的一次性成本平均高 17.98%，组件诊断仍可能把下游症状当成起因。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08723)

### 从技能规程学习给子智能体多大权限

From Procedures to Permissions: Learning Precise Subagent Authorization from Agent Skills

🌟🌟🌟

研究者将技能文档写成带资源需求的操作规程，在受限环境中生成委派轨迹并筛选，再去掉规程训练模型。在团队基准上，较大模型的工具与工作区授权精度分别比基础模型高 13.4 和 24.1 个百分点，任务完成率也提高。实验衡量分配行为，权限约束依赖执行环境。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08905)

### 把财报抽取的共享规则和角色偏好分开维护

FinEvolveKG: Controlled and Attributable Prompt Evolution for Financial Knowledge Graph Construction

🌟🌟

财报知识图谱既需要统一的证据和时间规则，也要为不同分析角色保留有用关系。作者先优化通用提示，再冻结它，只允许改动独立的角色区块。三种角色的综合指标比整段可改的对照高 2.2% 至 6.4%。区块可以防止共享提示被改写，但角色文字仍可能改变模型对通用规则的执行。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08643)

## 大模型推理与规划

### 删掉貌似重复的句子也会丢信息

Beyond Truncation? Entailment-Licensed Elision and the Limits of Semantic Preservation in LLM Decoding

🌟🌟🌟

作者在模型照常生成时隐藏看似已被前文涵盖的句子，发现自动分数胜过等长截断，人工阅读却判定首版约 59% 的删节伤害内容或结构。将比较限制在同一话语单元并加保护规则后，两次新测试合计仍有约十分之一的删节有害。节约的是展示词元，生成过程照常运行。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08975)

## 检索增强生成与知识检索

### 不建向量索引，搜索智能体怎样跨语言找证据

MARS: Training Multilingual Search Agents for Retriever-Free Evidence Acquisition

🌟🌟🌟

模型每轮选择语种并在原始语料中执行搜索，从命中的文档找实体原生拼法，再用去冗余奖励学习调整命令。相比直接搜索对照，重复查询率从 16.4% 到 4.9%，平均命令从 4.22 次降到 2.56 次。缺少别名时仍会失配，且省下的建索引成本转为在线搜索开销。

[阅读论文 PDF](https://arxiv.org/pdf/2611.09090)

## 多智能体与协作

### 四个智能体能学会何时共享信息吗

s$^3$: Simple Scaling of Swarms via Cooperative Multi-agent RL

🌟🌟🌟

研究者让共享同一策略的智能体异步发信、读信与行动，并用同一个团队回报更新策略。四人私有信息汇总的成功率达 93%，高于成功轨迹模仿的 35% 和个体奖励的 13%。在树形探索中，消息也能减少走重复路线，但探索收益依赖示范热身，结果仅来自两个受控任务。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08615)

### 多模态智能体辩论可以按题交换证据

AIM: Adaptive Interaction in Multi-Agent Debate for Multimodal LLM Inference

🌟🌟🌟

先让模型指出缺哪类信息，再为每题在文字、关系图和原始媒体片段之间选组合。以一项知识型图像问答为例，相比最佳固定组合，正确率从 93.5% 到 93.8%，平均词元少约 31%。路由要为每类任务离线学习，训练样例须先跑遍七种辩论组合。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08950)

### 公开评论能让模型把假共识当成同伴意见

Phantom Consensus: Measuring Social Reasoning in Multi-Agent LLM Decision-Making

🌟🌟🌟

四个模型实例先独立判断，再看似乎暗示群体倾向的评论。九个模型的公开判断准确率都下降，最大降幅为 47.8 个百分点。展示其他实例记录下的初判能挽回许多错误。评论由基准预先编写，公开初判又增加了决策证据，难以单独识别误判群体意见的作用。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08971)

### 多智能体学会绕路后，撤销怎样继续生效

From Emergence to Reversibility: Toward Reversible Multi-Agent Systems

🌟🌟

这份研究议程用调度例子说明，智能体有了历史计划后，停止供应新路线未必能阻止派车。作者把可逆性定义为在保留必要服务的同时，仍有获授权的手段限制指定效果，并区分真实有效和可由记录证明。文中给出控制交接与恢复的试验设想，尚无系统实验证据。

[阅读论文 PDF](https://arxiv.org/pdf/2611.09054)

## 大模型训练与对齐

### 自训练后词汇变少，常用词也可以更分散

Richness Is Not Evenness: Ordered Renyi Crossings under Self-Training

🌟🌟🌟

让语言模型连续九代用自己的文本训练，再用同一采样器比较不同多样性指标。在英文小模型、训练温度为一且不截断采样时，同样取一万三千词，词型少了 24%，碰撞熵却上升 0.91 比特。相似分离也出现在质量改善的人工文本微调中，单一多样性指标难以诊断退化。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08892)

### 推理蒸馏先找学生在哪一步容易走错

Failure Profiling and Reachable Trajectory Selection for Reasoning Distillation

🌟🌟

作者按错误是否反复出现为学生定制纠错，再用学生复现修正开头的可能性选取训练轨迹。两个学生在五项数学任务上的平均准确率分别比最强平均对照高 2.4 和 1.8 个百分点，但在其中一项数学基准上反而落后。方法依赖教师能找出错误并给出正确修正。

[阅读论文 PDF](https://arxiv.org/pdf/2611.09042)

### 语言训练和代码训练怎样改变模型的脑响应对齐

Language, Not Code Abstraction: Natural-language Training Shapes Brain-aligned Geometry

🌟

作者用同一小模型架构和分词器训练英文故事及四种代码模型，并加入未训练网络。英文模型在两项基准上比代码模型更好预测脑响应，其他基准没有同样优势。代码各语料实际重复次数不同，且评测用英文刺激，观察到的相关性无法推出模型和人脑采用相同计算。

[阅读论文 PDF](https://arxiv.org/pdf/2611.09027)

## 评测与安全

### 只许回答选项字母会压低拒答信号

Forcing a Letter Suppresses Refusal: Mechanistic Evidence from WMDP

🌟🌟

两种语言模型在危险知识选择题中几乎总会输出选项字母，却可能拒绝回答对应的开放题。作者逐层读出预测并干预负责选项的注意力头，在其中一个模型里观察到拒答信号回升。这个变化主要出现在两种模型中的一种，所测的拒答起始词概率也不能直接当作完整回复的拒答率。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08639)

### 领域微调后，模型更少在缺证据时弃答

Guardrail Erosion in Domain Fine-Tuned Large Language Models: A Paired Audit of Knowledge-Centric Abstention in Biomedical LLMs

🌟🌟

配对审计比较二十五个生物医学适配模型及其基础检查点。移除证据的医学选择题上，二十一对模型的适当弃答率下降，两组中位数从 8.3% 到 4.2%。另一套基准的方向类似但统计证据不足。这些结果反映特定基准的答题行为，无法识别是哪种微调数据造成了变化。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08780)

### 用模型反馈训练黑盒文本扰动

RL-ATTACK: A Generalized Black-Box Adversarial Attack on Language Models via Reinforcement Learning

🌟🌟

研究者让轻量替换模型从分类器的反馈学习哪些局部改写更容易造成错误，生成问答则用低成本安全分类器做代理训练。相较迭代优化基线，六种生成模型与评判器组合中有四种的攻击后准确率更低。安全裁判的选择会改变结果，语义相似度也无法验证改写是否自然或完全保义。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08711)

### 模型裁判比人类读者更偏爱推理模型写的故事

Does Reasoning Improve Psychological Depth in Large Language Models?

🌟🌟

七位读者盲评六十对短篇故事，整体票中有 55.2% 选推理增强版本，模型裁判则在 98.3% 的对比中作出该选择。不同模型家族与不同读者的偏好并不一致。故事题材和读者来源有限，两组模型也有多项训练差异，结果无法单独归因于推理能力。

[阅读论文 PDF](https://arxiv.org/pdf/2611.09061)

### 语义分数会漏掉转写时混入的文字

The Invisible Gap: Romanized Indic Generation Fails Where Automatic Metrics Succeed

🌟🌟

四个模型把同一批问答转成用拉丁字母书写的三种印度语言。自动相似度可能放过混入原文字母或退回全英语的输出，母语读者也能区分自动分数接近的回答。人工诊断样本特意包含难例和失败例，每种语言仅一位评分者，适合发现缺陷，难以支撑总体排名。

[阅读论文 PDF](https://arxiv.org/pdf/2611.09085)

### 情绪表征偏向粗分类，细粒度信息仍可读出

Compression of Emotion in Language Model Representations

🌟

研究者对七个模型的隐藏表征做聚类和监督读出。最清晰的无监督划分大致沿着情感正负展开，但线性读出仍能辨认许多细粒度标签。给出标签清单主要帮助模型说出合规的标签名。结论来自英文论坛的单标签样本，也随提示、表征取样位置和聚类方法变化。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08683)

### 同一种文风为何会被不同社区判成机器写作

Contextuality and Contradictions: Exploring Real-World Identifications of AI-Generated Writing

🌟

对英文维基编辑的标记理由和学生问卷编码后，研究者发现来源判断常取决于文章是否符合场合。百科条目中的投入语气与闲聊里的过度正式，都可能被各自的读者视为机器痕迹。材料记录了指认的理由，无法核实这些文本的真实来源，也无法据此计算检测误报率。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08704)

## 应用与基准

### 仿真能否复现，取决于每次模型调用怎么写

ODD\+LLM: Specifying LLM-Agent Behavior for Reproducible Social Simulation

🌟🌟

研究者给社会仿真说明增加了提示组装、输出解析和重试等字段。在一个改用不同模型的命名游戏重建里，遗漏第三人称观察者指令会让选定惯例的比例从 35% 升至 100%。这一结果来自单个案例，文献缺项也由单一编码者评定，新规约能否改善独立复现仍待检验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08932)

### 个体模拟从调查历史里该保留哪些信息

Structuring Survey Histories for LLM Digital Twins: A Controlled Study of Background, Decision Procedure, and Evaluation Profiles

🌟

作者将问卷历史整理成背景、决策方式和评价偏好三块，再预测同一受访者的留出答案。对一百名受访者，完整资料比原始记录约高一个百分点，收益主要与定价相关的评价信息有关。结果受综合指标对定价题的权重影响，添加资料的实验也没有控制总长度。

[阅读论文 PDF](https://arxiv.org/pdf/2611.08730)
