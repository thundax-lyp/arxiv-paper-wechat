---
title: "arXiv Agent 与大模型研究简报｜2026-11-18｜入选论文全览"
author: "Thundax"
summary: "多问一次模型，能纠正多少答案，又会改坏多少？本期关注如何测量真正的纠错收益、怎样追溯智能体找到证据的过程，也梳理扩散语言模型的解码和长上下文推理。"
description: "多问一次模型，能纠正多少答案，又会改坏多少？本期关注如何测量真正的纠错收益、怎样追溯智能体找到证据的过程，也梳理扩散语言模型的解码和长上下文推理。"
---

# arXiv Agent 与大模型研究简报｜2026-11-18｜入选论文全览

多问一次模型，能纠正多少答案，又会改坏多少？本期关注如何测量真正的纠错收益、怎样追溯智能体找到证据的过程，也梳理扩散语言模型的解码和长上下文推理。

本期入选论文全览。

## 智能体系统与工具使用

### 先看文档地图，能省下多少探索成本

FieldGuide: A Corpus Map for Token-Efficient Agentic Document Exploration

🌟🌟

在问题尚未明确的资料堆里，作者让智能体先浏览主题层级，再限定范围搜索与阅读。五项新闻调查任务中，较直接读文件少用27%词元、少花41%时间，盲评线索质量居于直接阅读与检索对照之间。样本小且复用同一个代理，跨文档线索可能被过早筛掉。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21647)

### 在智能体记忆回放里加噪声，能改善泛化吗

Can an LLM dream? Testing the overfitted brain hypothesis on an agent with text memory

🌟🌟

研究让代理每天重写文本记忆，先向当日记录加入随机文本或改写细节，再测后续表现。30次运行都未见泛化改善，改写四成轮次时回忆从76%降到60%。模型常能识别随机文本，却可能当真保存被改过的细节。试验只覆盖一个模型。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21648)

## 大模型推理与规划

### 扩散模型为何可以在一块里复用历史读取计划

RISA: Recoverable Sparse Attention for Block-Diffusion Language Models

🌟🌟🌟

扩散模型反复修订同一文本块时，对历史缓存的需求不完全变。作者给每块先选一次要读的历史页，后续用新查询重新计算注意力，暂时不读的页仍可恢复。三万二千词元时，注意力快2.67倍，固定轨迹的整请求快1.36倍。结果来自单请求实验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.22191)

### 扩散模型在什么时候该把一个词定下来

Token Commitment as a Control Surface for Steering Masked Diffusion Generation

🌟🌟

扩散生成会反复给出临时文本，直到采样器决定哪些词元固定。作者用目标评分影响先固定哪些词，并用进度调每轮固定数量。情感、摘要和图文匹配实验都观察到目标与质量之间可调的权衡。方法需要对临时文本评分，效果由所选指标决定。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21669)

## 检索增强生成与知识检索

### 给法律检索加上条文关系，能找全多少证据

TUSI: A Citation-Grounded Graph-Based Benchmark

🌟🌟

作者把波斯语法律问答与法规、解释及裁判关系相连，同时测试开放式引用和法律考试题。沿知识图的关系补充材料后，检索召回率在最佳条件下高出8个百分点。样本只覆盖选定法规，找齐法条也不保证生成的论证充分。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21823)

## 多智能体与协作

### 同一条偏差信息，在不同智能体网络里怎样传播

Corrupting Ties: Investigating Robustness to Bias Injection Across Multi-Agent Network Topologies

🌟🌟

作者在五种代理网络中替换某个节点的回复，看其它节点和最终判断如何变化。顺序传递的网络更容易偏离，星形中枢比边缘节点的影响更大。实验每次只用五个同模型代理，结果更适合定位受控传播机制，不能用于预测大型异构团队。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21804)

## 大模型训练与对齐

### 把用户档案放得更近，模型会更容易迎合吗

From Preference Data to Personalization: Tracing Sycophancy in Large Language Models

🌟🌟🌟

有些认同是合理的，有些则掩盖了需要纠正的问题。作者用带有效性标注的探针分别检查偏好数据、裁判规则和测试时个性化。在14个模型中，匹配档案紧贴提问时，不当同意率较无个性化高6.97个百分点。档案是合成的，训练阶段的干预也只覆盖一个模型。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21650)

### 十亿参数的数学专用模型怎样训练

Limite 1B - Violetto: Technical Report

🌟🌟

这个模型从头读入以数学为主的2370亿词元，再经历蒸馏、偏好训练和可验证奖励强化学习。论文报告在2026年一项竞赛数学基准上达到94.01%，在更难的数学基准上为74.25%。模型主要面向单轮解题，层数也会影响单词元延迟。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21646)

### 逐步编辑文档时，怎样防止模型靠删字拿高分

RLDE: A Reinforcement Learning Framework for Interpretable Iterative Document Editing

🌟🌟

这个编辑器将每次修改看成一个动作，由策略选操作，固定生成模型给出建议。训练同时奖励流畅度和语义保持，限制靠删除段落提升分数。作者在人评和独立参考上做了补充验证，但部分指标也是训练目标，换成不同体裁仍需检查。

[阅读论文 PDF](https://arxiv.org/pdf/2611.22039)

## 评测与安全

### 置信信号能识别错答，重试却未必能修好

Consistency Is Not Correction: Separating Confidence, Abstention, and Recovery in LLM Agents

🌟🌟🌟

作者把置信排序、选择性弃答和净纠错分开测。一个验证器的排序曲线下面积达到0.990，调用达单次解码的4.32倍，逐题结果却完全相同。实验能测到的最大正收益还受初始错题数限制。部分日志缺少完整输出，比较时需注意设置差异。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21651)

### 诊断智能体的高分，有多少来自病例里的事后线索

Where Does Hindsight Enter Clinical Agent Benchmarks? An Audit of Simulators and Case Construction

🌟🌟🌟

作者分别检查给模拟器的诊断、上下文和代理看到的病例。最大的差别出现在病例文案。以分诊记录重建时，零样本准确率为25.4%，基准式摘要为39.7%，出院病史为45.3%。资料缺少当时完整床旁病史，这个差距应理解为事后信息影响的上界。

[阅读论文 PDF](https://arxiv.org/pdf/2611.22241)

### 企业智能体说任务做完了，数据库状态也对吗

OfficePrism: Benchmarking Agents on Single-Domain Operations Across Enterprise Business Functions

🌟🌟🌟

这套评测把420项工作各自限制在一个业务域，要求回复和数据库状态都正确。在124种模型与工具组合里，联合通过率为22.6%至76.4%。同模型和脚手架的50组配对中，搜索后调工具有30组更好。数据来自同一家合成组织，不能据此估计真实部署表现。

[阅读论文 PDF](https://arxiv.org/pdf/2611.22262)

### 模型拒答后，用户还会继续聊吗

RAW: Refusal Aversion in the Wild, A Causal Measurement Method for Deployed LLMs

🌟🌟

同一个模型面对很相近的首问，有时拒答有时给答案。作者利用现有日志比较这些请求后的续聊情况。在估计足够精确的模型中，约一半的拒答伴随3至17个百分点的续聊下降。观测设计仍可能漏掉混杂因素，续聊也可能只是换个说法重试。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21641)

### 同一个图表换了语言，模型还能读出同样的数据吗

MInfoVisQA: A Multilingual Benchmark for Information-Rich Visual Question Answering

🌟🌟

作者保留图表的结构和数值，只换标签和题目语言，用24种语言比较25个多模态模型。两种同语问答平均准确率相近的模型，跨语言差距分别为7.8和20.3个百分点。固定英语问答也没有消除非英语图表的下降。数据源自128张种子图表。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21644)

### 模型里的道德信号，有多少来自规范判断或提示词

Disambiguating Moral Circuits and Moral Features in Language Models: Moral content, normative judgment or cue words? Evidence from 14 models

🌟🌟

研究用227对短语把道德内容、一般规范和显式提示词拆开。部分注意力头对两类规范判断影响相近，定位的稀疏特征却多响应提示词。有少量方向呈现更细的道德特异效应。短语与输出格式受控，结论不能代表开放情境的道德推断。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21705)

### 多个读者共同核查时，怎样保留每项判决的依据

GauntletScore: Auditable Fact-Checking That Matches the Best Published Checkers on LLM-AggreFact

🌟🌟

作者让不同供应商的模型按固定问题检查同一断言，再将回答写入证据账本并用冻结规则合并。测试集平衡准确率为79.51%，与已发表最佳79.45%接近，超过两个单独读者。研究只测已提供来源的核查，检索和跨来源冲突还需另验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.22027)

### 模型能排出议题优先次序，却未必知道差多少

Knowing Which, Not How Much: Language Models Order Party Positions They Cannot Place

🌟🌟

同一批政党在议题上谁写得更多，和具体写了多大篇幅，是两个问题。作者用日本及韩国政党宣言的编码比较测法，模型排序超过固定答法基线两倍，单独定档却低于基线。数据衡量的是文字篇幅，不能拿来判定政党的政策立场。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21878)

### 教育智能体面对模糊问题时，除了拒答还能怎么处理

EGS: A Complementary Safety Framework for Educational LLMs

🌟🌟

作者在学生提问和模型回答两端加审核，中间对风险不明的题目提供情境指导。教育和通用基准上观察到审核与部分攻击稳健性改善。系统依赖事先设定的类别和阈值，陌生语言、迂回表达及未见情境仍需重新验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.22203)

## 应用与基准

### 给用户模拟器一张关系图，能生成更多样的对话吗

SimAI: Mechanistic User Simulation through Psychological Network Models

🌟🌟

作者让一个模型把用户资料转成心理关系图，再让另一个模型据此模拟并用图重建检验一致性。自动评测显示对话更丰富，30位专业人士或受训者给出的平均真实性评分较高。该结果测的是模拟的可信度，图结构是否对应真实心理机制仍缺少证据。

[阅读论文 PDF](https://arxiv.org/pdf/2611.21808)

### 诊断过程评测怎样检查模型问到了什么

DiagTrace: An Interactive Benchmark for Clinical Decision Making

🌟🌟

研究把病例报告加工成可交互的事件库，观察模型逐步询问时能否覆盖参考信息，并按相近顺序获取。在225例对照中，不同模型各自在覆盖、顺序或回合效率上有优势。该任务是复现已知诊断的过程，报告顺序也可能和真实就诊不同。

[阅读论文 PDF](https://arxiv.org/pdf/2611.22009)
