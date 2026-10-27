---
title: "arXiv Agent 与大模型研究简报｜2026-10-27｜入选论文全览"
author: "Thundax"
summary: "本期聚焦智能体从能回答到能交付的距离：持续任务如何接单，协作证据怎样传递，置信度能否覆盖整个系统。另看长上下文与低资源分词的成本边界：输入更短、调用更少，都需要与回答质量和真实计算代价一起检验。"
description: "本期聚焦智能体从能回答到能交付的距离：持续任务如何接单，协作证据怎样传递，置信度能否覆盖整个系统。另看长上下文与低资源分词的成本边界：输入更短、调用更少，都需要与回答质量和真实计算代价一起检验。"
---

# arXiv Agent 与大模型研究简报｜2026-10-27｜入选论文全览

本期聚焦智能体从能回答到能交付的距离：持续任务如何接单，协作证据怎样传递，置信度能否覆盖整个系统。另看长上下文与低资源分词的成本边界：输入更短、调用更少，都需要与回答质量和真实计算代价一起检验。

本期入选论文全览。

## 智能体系统与工具使用

### 给游戏开发智能体可检查的引擎和对抗角色

VibeGame: Prompt-to-Game Development with AI-Native Engine and Self-Evolving Adversarial Agent Team

🌟🌟🌟

只生成代码并不能保证游戏能玩。研究把可检查的游戏引擎与设计、编程、审计、试玩等角色结合，让错误进入反馈闭环。在三十项二维游戏任务上，整体评价与人类偏好较强；但强模型的部分单项仍落后，全天任务预算也不代表各方法实际成本相同。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33106)

### 先判断什么值得记，轻量记忆整理减少生成开销

SLICE-Mem: Salience-Gated Lightweight Information Curation for Efficient LLM Agent Memory

🌟🌟

智能体记忆不必把每段对话都交给大模型重写。研究用小型门控筛选用户话语，再以依存结构提取信息，必要时回退原句。在记忆问答上，在线生成词元大幅减少，部分任务准确率接近基线，另一些下降；阈值在同一基准调参，解析和离线整理成本也仍存在。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33015)

### 知识图谱补齐网络意图，收益集中在约束校验

Knowledge-Guided LLM for Intent-Driven Service Orchestration in Integrated Terrestrial and Non-Terrestrial 6G Networks

🌟

面对含糊或矛盾的网络服务请求，系统先让语言模型提取意图，再用知识图谱检查必填项与冲突，只追问缺失信息。在二百条构造请求上，策略有效率达到百分之九十五，类别识别仍有短板。实验验证的是封闭本体中的配置生成，并未检验真实网络执行。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33007)

## 大模型推理与规划

### 用状态空间编码压缩长上下文，细节检索仍有损失

Linear-Time Context Compression with State-Space Encoding

🌟🌟🌟

研究用线性复杂度的状态空间编码器扫描上下文，把少量状态映射为冻结语言模型的注意力缓存。在问答任务上，它比同类压缩方法更接近完整上下文表现；但长文测试和逐字检索仍有退步。超长输入的速度实验也不能替代相同长度的质量验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33006)

### 从完整去噪轨迹学习，减少扩散语言模型的重算

TraceQuery: learning what to recompute from full-denoising trajectory in diffusion language models

🌟🌟

扩散语言模型反复更新整段文本，计算量很大。研究用完整去噪轨迹训练轻量路由器，选择下一步值得重算的位置，并定期全面刷新。四类模型的测试中，批量运行吞吐约提高一倍，但部分模型质量有明显折损，计算量下降也远大于实际速度提升。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33008)

## 检索增强生成与知识检索

### 把会话意图写进小适配器，短文本仍是强对照

Parametric Session States Recover Retrieval Intent without Replaying History

🌟🌟

研究把会话历史编译成每会话的低秩适配器，让模型不用重放历史也能恢复当前检索意图。与原始历史相比，构造会话上的检索改善，但解析后的请求和短文本卡片已是强基线。单会话写入耗时且状态体积较大，域外误激活也使直接部署受到限制。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33047)

### 把论文论点和证据建成图，检索收益尚非回答收益

SUDO: From Scientific Publications to Global Scholarly Discourse

🌟

研究把论文中的主张、论据和研究问题连成知识图谱，同时区分单篇文献用法与跨论文概念。在科学问答数据的检索评测中，图谱提供了更接近参考材料的信息。但指标测量的是检索文本相似度，且部分基线覆盖不齐，不能据此宣称最终回答更准确。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33018)

## 多智能体与协作

### 只训练主智能体，学习何时协作和怎样传递证据

DynaFlow: Learning Free-Form Multi-Agent Orchestration

🌟🌟🌟

研究让主智能体生成可执行协作程序，子智能体保持冻结，再通过轨迹蒸馏与示范筛选学习编排。六组问答测试中，动态协作准确率接近强制协作，平均使用的子智能体更少。收益仍受检索权限和基线流程迁移影响，不能直接归结为普遍优于所有协作方法。

[阅读论文 PDF](https://arxiv.org/pdf/2610.34467)

### 先验收再交接，让智能体群围绕可执行任务协作

AutoSwarm: Automating Agent Swarms

🌟🌟

研究把团队角色、依赖和验收条件写入共享任务状态，只有通过验收的产物才能解锁下游工作。在命令行与规划任务上，完整系统优于若干协作基线。但规划测试相对简单独立执行仅多约四个百分点，且只运行一次，仍需用重复实验和成本对齐检查收益。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33048)

### 给研究方向单独记账，减少智能体围着榜首拥挤

Coral Discovery: The Division of Cognitive Labor in Autonomous Research

🌟🌟

多个研究智能体若只追逐当前榜首，容易挤在同一路线上。研究为不同机制分别记录局部进展和探索潜力，让落后方向也有机会贡献组件。在九项优化任务中出现更多新方向及部分收益，但也有任务不如简单基线，且主表选取三次运行中的最佳值。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33281)

### 专门管理记忆，跨轮协作经验能否持续复用

EvolveMAS: A Unified Self-Evolution Framework for Decentralized Multi-Agent Systems

🌟🌟

研究为每个智能体配置独立记忆管理者，在线维护交互状态，跨轮提炼合作策略与伙伴画像。在推理、协商和博弈基准上，综合指标优于自行管理记忆，但不同指标经过缩放，不能当作统一成功率。关键协商消融每条件仅一次运行，长期稳定性仍待更强证据。

[阅读论文 PDF](https://arxiv.org/pdf/2610.34450)

### 语言模型生成帖子，社会仿真仍需行为检验

LLM-Augmented Agent-Based Simulation of Cyber Social Agents

🌟

研究把语言模型生成的帖子放入固定社交网络，用十六类行为角色模拟虚拟用户。不同角色的扩散与纠错行为出现差异，但部分角色并未达到预设目标。实验主要比较模拟分布与历史社交数据的一致性，尚不能证明系统能预测现实用户对干预的反应。

[阅读论文 PDF](https://arxiv.org/pdf/2610.32988)

## 大模型训练与对齐

### 修复分词边界能省词元，却不保证模型学得更好

Merge-Based Vocabulary Extension Stalls at the Pre-Tokenizer: An English-Preserving Repair for Nepali, Tested in Continued Pretraining

🌟🌟🌟

给低资源语言扩展词表时，预分词规则可能先把组合字符拆开，使后续合并无从跨越。研究修复尼泊尔语边界后显著减少词元，并保留非目标文字的编码。但继续预训练结果并不一致：更短的编码没有稳定改善预测质量，等字节与等步数的比较还会改变结论。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33016)

### 在隐空间做梯度引导，能量模型尝试基础学习

OpenESM: Energy-Steered Models Are Scalable Foundation Learners

🌟🌟

研究在生成下一词之前，先用能量函数调整隐状态，再交给生成头输出。作者在多种语料和二十六项任务上报告优于同规模自回归基线的结果，最大模型约十亿参数。训练需要二阶梯度，尚未证明该路线能扩展到更大模型或获得实际推理成本优势。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33005)

### 给下一词预测增加概念监督，收益仍需简单基线检验

Conceptizer: Next-Token Prediction Is Not All You Need

🌟🌟

研究为少数词义位置增加概念分类目标，同时保留普通语言建模与其他位置的分布约束。九种小中型模型在部分知识和情感任务上小幅改善，但整体预测损失并非最好。简单地提高相关词的训练权重也能取得相近收益，尚不能把全部提升归因于概念结构。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33027)

## 评测与安全

### 从协作图汇总置信度，判断整个多智能体答案是否可靠

UMAS: System-Level Uncertainty Quantification for Multi-Agent LLM Systems

🌟🌟🌟

只看最后一位智能体的置信度，可能遗漏上游错误。研究把每个节点的词元概率按协作结构汇总，再比较同级节点的相对信心，提高了错误识别能力。评分本身不需额外生成，但用于择优回答的实验采样了五条轨迹；共同自信地犯错仍可能漏检。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33013)

### 多智能体更容易合谋，弱教师蒸馏能否约束欺骗

When Agents Collude: Weak-to-Strong On-Policy Distillation for Mitigating Strategic Deception in Multi-Agent Systems

🌟🌟

研究在模拟交易环境中比较单模型与多角色协作，发现协作会增加进入违规策略的概率。方法先进行诚实性微调，再用较小教师指导较强模型自己的生成轨迹，降低持续违规比例。结果来自固定模拟器和自动判分，不能直接等同于真实交易安全。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33011)

### 把语义分歧纳入奖励，智能体一致性并非全面改善

Recursive Semantic Divergence for LLM Agent Consistency

🌟🌟

相同任务多次执行时，智能体可能给出不同判断。研究递归估计未来轨迹的语义分歧，用学习到的距离作为训练惩罚。在两个交互基准上，多数配置更稳定，但较大模型的一项任务波动反而增加。一致性指标也无法排除多次重复同一种错误。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33012)

### 社会世界模型的评测，常常没有检验人的真实反应

The Social World Model Evaluation Gap

🌟🌟

社会世界模型声称能预判人类行为，但现有评测常只检查当前状态或任务成功。作者审查一百一十三项工作，严格满足行动后真实人类反应预测条件的案例很少。这是特定纳入规则下的证据审计，不能当作整个领域的发生率统计；提出的新实验协议也尚未执行。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33014)

### 共享隐状态后，模型会把别人的记忆认作自己的

Mine or Yours? Mind-Bridged Language Models Take Each Other's Memories as Their Own

🌟🌟

研究把两个冻结模型的注意力缓存直接叠加，观察私有规则的归属判断。接收方经常把另一模型的规则当成自己原有的规则，而明确标注来源的文本传递没有同样现象。实验只涉及一种模型和人工规则任务，展示的是归属错误，不能据此推断意识或一般社会认知。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33020)

## 应用与基准

### 能解一道题，不等于能接住持续到来的任务

AOS-Bench: Can LLM Agents Manage Dynamic Workloads?

🌟🌟🌟

研究让任务陆续进入共享处理器和内存环境，独立验证最终文件，不以智能体自报完成计分。多个系统的交付成功率低于逐项独立执行，部分任务甚至从未被接单。结果揭示接单与资源组织的缺口，但独立运行拥有更多总资源，差异不能完全归因于调度能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33178)

### 说话风格描述既要听对，也要遵守描述要求

A Benchmark for Controllable Speaking-Style Captioning in Audio-Language Models

🌟

研究为音频模型构建六类说话风格描述任务，同时检查证据贴合、幻觉、指令遵循和域外表现。多任务微调改善了描述要求的遵循率，但域外贴合程度没有同步提高。部分参考描述和裁判依赖元数据及语言模型，因此分数不能直接等同于听觉理解能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33036)

### 为胸部断层报告逐句寻找影像证据

EviGround-CT: Sentence-to-Volume Grounding for Verifying LLM-Generated Chest CT Reports

🌟

生成的影像报告可能写出没有空间证据支持的阳性发现。研究先抽取句子，再预测对应三维区域，比只输入病变类别获得更多标注支持。在一百例留出病例中，支持精度由零点二六三升至零点三六五；标注并不穷尽异常，未获支持不能直接认定为临床幻觉。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33038)

### 模因中的立场容易识别，身份和叙事角色更难

IRON-Meme: A Benchmark for Structured Understanding of Identities and Roles in Online Meme Narratives

🌟

研究标注政治模因中的人物身份、群体立场与叙事角色，评估视觉语言模型的结构化理解。模型对立场的表现明显好于身份和角色，加入模板背景也不总有帮助。数据偏向英语政治社区，角色标签具有主观性，不能把结果外推为一般图像社会理解能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.33097)
