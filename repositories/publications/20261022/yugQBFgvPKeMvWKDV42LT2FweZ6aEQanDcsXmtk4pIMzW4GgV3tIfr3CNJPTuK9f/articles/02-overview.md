---
title: "arXiv Agent 与大模型研究简报｜2026-10-22｜入选论文全览 1/2"
author: "Thundax"
summary: "本期关注智能体从“做完”走向“做对”的具体缺口：研究分数能否代表洞见，技能能否迁移，拒绝能否落实到工具行动，证据又是否在检索、记忆与文档摄入中完整保留。训练侧则追问，变好的排序指标会不会掩盖生成退化。"
description: "本期关注智能体从“做完”走向“做对”的具体缺口：研究分数能否代表洞见，技能能否迁移，拒绝能否落实到工具行动，证据又是否在检索、记忆与文档摄入中完整保留。训练侧则追问，变好的排序指标会不会掩盖生成退化。"
---

# arXiv Agent 与大模型研究简报｜2026-10-22｜入选论文全览 1/2

本期关注智能体从“做完”走向“做对”的具体缺口：研究分数能否代表洞见，技能能否迁移，拒绝能否落实到工具行动，证据又是否在检索、记忆与文档摄入中完整保留。训练侧则追问，变好的排序指标会不会掩盖生成退化。

本期入选论文全览。

## 智能体系统与工具使用

### 不改权重，也能把教师经验教给学生

D-Skill: Distilling Teacher Knowledge through Agent Skills

🌟🌟🌟

学生模型不一定要更新权重，才能学到教师的做事方式。研究对比同一任务下的师生执行轨迹，把差异整理成技能文档，供学生推理时读取。在表格、交互环境和棋题中缩小了大部分表现差距。代价是额外上下文和离线分析；学生缺乏的基本计算、感知能力无法靠说明文档补齐。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28914)

### 文档转成纯文字时，重要提示可能消失

What the Author Wrote, What the Agent Reads: Silent Cue Loss in Enterprise Document Ingestion

🌟🌟🌟

文档中的红字与高亮可能承担要求优先级，转成纯文字后却消失。研究在真实政策文档中提取作者特别标出的要求，保留视觉线索明显优于忽略格式；颜色与高亮贡献远大于粗体等样式。它提示先查摄入层是否丢证据，但收益来自强调识别任务，且表示成本约为纯文本两倍。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30026)

### 虚拟世界越多，智能体就越通用吗

Scaling in Games: Continued Pre-Training For Embodied Agents In Diverse Virtual Worlds

🌟🌟

在不同游戏里继续预训练，收益并非均匀扩散。研究比较120组配置，发现更多数据主要改善熟悉世界，多样性更有利于相近世界迁移；更大的模型在单一世界训练下也可能更难泛化。跨世界控制的早期收益会逐渐转向专化，单靠模仿仍难跨越远域差异。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28698)

### 智能体自改进需要挑选经验组合

Forging More Tasks into Better Harnesses: Agentic Harness Evolution via Successive Scale Racing

🌟🌟

给智能体更多执行经验，不一定能改出更好的工作流。研究按质量和覆盖面组织经验，生成不同规模的候选，再用共享任务逐步淘汰。在所测配置中，任务池扩大时通过率从64.3%升到68.3%，并减少验证执行。结论支持选择性使用经验，尚未覆盖更广的模型与领域。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28815)

### 会完成任务，不代表会提前备份

Back Up Before You Regret: Measuring Backup Awareness and Automating Backup in Coding Agents

🌟🌟

编码智能体在205个任务中平均完成86.1%，却只在15.2%的关键修改前备份。研究把保存状态做成工具调用前的执行层：常见操作走规则，复杂操作另行分析。插件覆盖了基准中的全部后悔点，恢复相似度达92.2%；这仍不保证外部服务状态能够逐字节还原。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28934)

### 把外部变化加入智能体训练环境

DynaWeave: Learning to Adapt through Dynamic Scenario Synthesis

🌟🌟

真实任务会被新消息、服务故障和需求变更打断，静态训练容易忽视这些变化。研究在现有环境中合成外生事件，只修订受实际事件影响的验证规则，再用2095条轨迹训练。动态基准总体完成率提高；不过更会完成任务并不总是更省步骤，及时应变仍是短板。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29443)

### 把不确定的新记忆先放进等待区

PreCoMem: Predictive Cognitive Memory for Self-Evolving Long-Term Dialogue Agents

🌟🌟

对话里出现一条相反说法，助手不应立刻覆盖旧记忆。研究将记忆表示为有置信度的信念：支持证据强化，模糊线索暂存为假设，可靠矛盾才逐步衰减旧事实。多个英语记忆基准显示收益；等待区的价值值得关注，但真实用户变化仍需要可靠的矛盾识别。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29467)

### 记忆构建与检索需要一起学

Uni-Mem: Learning a Long-Horizon Agentic Memory Manager with Unified Online Policy Optimization

🌟🌟

只训练怎么写记忆，或只训练怎么找记忆，可能让两端互相脱节。研究让统一管理者交替学习构建与检索，并把反馈分给具体事件，减少比较中的混杂。所测长期记忆任务优于既有强化学习基线；代价是训练需反复完成问答并调用裁判，成本与时延仍然较高。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29671)

### 多模态记忆应把变化和原始证据连起来

Remembering Through Change: Provenance-Preserving Hypergraph Memory for Multimodal Agents

🌟🌟

把图片概括成一句话，可能丢掉以后要核验的细节。研究用超图连接实体、观察事实和状态变化，让助手既能查历史，又能回到原始图像验证。在三个多模态记忆基准上取得改善。结构化来源值得借鉴，但错误的实体关联仍会沿记忆传播，基准收益也不等于部署维护成本更低。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29995)

### 扩散生成能缩短深度研究的等待

DiffResearch: Accelerating Deep Research with Diffusion Language Models

🌟🌟

深度研究的等待有多少来自逐字生成？研究在相同检索和工作流下更换模型骨干，发现扩散生成主要加快规划与写作，端到端约快六倍。提前读取去噪草稿还能加快问题分解，但未继续缩短整条流程。检索相关性与证据充足性仍是共同瓶颈，速度并不自动改善事实质量。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28909)

### 用成熟编译证据指导训练硬件迁移

TrainBridge: Agentic NPU Training Optimization Guided by GPU Compilation Evidence

🌟🌟

训练代码迁移到新硬件后，编译融合不足会留下大量开销。研究让智能体从成熟源端编译结果提取优化意图，再据目标端性能剖析改写程序。四种负载平均加速约1.7倍，多组训练记录也有改善；它仍依赖可用的源端参照，单节点收益不能直接推到大规模集群。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29171)

### 复杂表格需要保留跨行跨列关系

LTEM: LLM-Friendly Table-Enhanced Markdown for Table Understanding and Generation

🌟🌟

普通轻量表格常把合并单元格和多级表头压平。研究扩展标记语法，显式保留这些关系，在多模型理解任务上接近完整网页表格并减少词元开销。生成任务里成熟格式仍更强，真实与合成数据还会改变格式排名，因此选择表示方式应结合具体模型和文档分布。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29188)

## 检索增强生成与知识检索

### 检索组件单独有效，组合却未必叠加

Retrieval Augmented Generation Compositionality

🌟🌟🌟

检索、重排、压缩各自有效，装进同一条管线却未必叠加。研究比较450种配置，发现三项单独增益预示近47%的提升，组合实际约17%；检索质量和答案忠实性还可能偏好不同设置。结果支持在完整系统与目标规模上测试，所测英语语料不能直接给出企业部署配方。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29722)

### 让小模型学会何时追问

A Small Model Asks Better: Fine-Tuning Query Clarification for Retrieval-Augmented Generation

🌟🌟

面对含糊提问，检索系统应先判断是否真需要追问。研究把会话、文档中的多种解释和容易误判的负例一起训练，让三十亿参数模型达到96.6%的歧义分类准确率。结果提示，教会模型何时不追问同样关键；目前仅验证英语中的单次澄清。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28686)

### 让智能体一起改造搜索工具和资料组织

Let Agents Design How They Search: Automatic Interface Optimization for Agentic Search

🌟🌟

搜索表现不只取决于模型，也取决于它看到什么资料、能调用什么操作。研究让提案者根据轨迹改写资料产物、工具和说明，在固定小模型下提高问答准确率与检索排序质量。它提供了优化接口的思路，但语料更新后是否需要重做整轮搜索，目前没有验证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29250)

### 扫描全文也可能在最后丢掉证据

Scan or Index? large Evidence Coverage, Answer Quality, and Cost in Long-Document RAG

🌟🌟

全文扫描看似完整，最后交给回答模型的证据仍可能变少。研究在统一段落和回答预算下比较11种配置，发现书籍任务里混合检索的证据覆盖高于全扫，而答案最优配置又与覆盖最优配置不同。选型应同时考察保留、回答和多次查询成本；时延不能脱离所测部署外推。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28957)

### 先保留有据答案，再修复不受支持的部分

Accept or Repair: Preserving Passage-Supported Answers in Contrastive Decoding

🌟🌟

证据与模型记忆冲突时，强行对比解码也可能改坏原本正确的回答。研究先检查初答是否受到文段支持，只对不支持的答案最多修复两次，在反事实与普通文段上都提高了平均分。收益来自选择性修复；当前支持检查偏重词匹配，还不足以覆盖抽象长回答。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29727)

## 多智能体与协作

### 把昂贵推理留给搜索停滞时

SpecEvo: Speculative Evolution with Large Language Models for Cost-Efficient Scientific Discovery

🌟🌟

科学搜索不必让昂贵模型处理每次尝试。研究让轻量模型生成程序、整理成功与失败，再由强模型在停滞时调整方向。在176个科学与算法任务上，这种分工在三小时预算下减少约一半至八成接口支出。收益依赖可评价的任务环境，不能直接等同于开放科学发现的效率。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28706)

### 研究团队需要不同背景，也需要私有历史

Building AI Research Teams for Autonomous Discovery of Linear Attention Architectures

🌟🌟

组织自动研究团队时，角色多样性只是起点。研究让不同学科背景的成员保留私有历史、共享实验结果，并按探索收益分配机会，最终发现了表现更好的线性注意力结构。对照显示这些组织部件都有价值；证据仍集中在一个架构搜索问题及有限实验预算。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28887)

### 社会仿真结论会随人格表达改变

The Butterfly Effect in LLM Social Simulations: From Architecture Sensitivity to Robustness Audits

🌟🌟

用语言模型模拟社会互动，换一种人格写法就可能改变结论。研究在重复博弈和回音室中做受控扰动，观察到合作率和网络结构随表示方式变化，交互还会放大或减弱这些差异。它提醒研究者给仿真结论配鲁棒性审计；固定立场的网络实验不能证明真实意见如何演变。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28981)

### 并行智能体的局部好修改不能直接合并

Parallel AI Agent Collaboration as Graph-Structured Distributed Block Optimization

🌟🌟

多个智能体各自改好了局部，合在一起却可能更差。研究先在同一版本上验证每项改动，再用依赖图选兼容集合，并为保留增益给出理论界。代码修复和路线任务说明了协调价值；保证依赖已知关系与精确目标，部分速度收益来自时长模型，不能直接视作实际工程加速。

[阅读论文 PDF](https://arxiv.org/pdf/2610.30074)

### 扩散智能体的隐藏消息确实传递内容

Hidden Messages Between Diffusion Language Model Agents: Causal Evidence for Latent Communication

🌟🌟

扩散模型可以在答案成形前，把连续隐藏状态传给另一智能体。研究通过移除、错配和替换消息，验证接收者确实使用了内容；在拆分证据问答中，正确消息明显优于错配消息。有趣的是，一次较晚交换胜过多次循环，但这依赖任务，不能视作通用通信规律。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28905)

## 大模型训练与对齐

### 偏好排序变好时，生成可能正在坍缩

ECHO: Emergent Common-Mode Hidden Offsets Drive Vocabulary Collapse in Preference Optimization

🌟🌟🌟

偏好训练的留出排序越来越准，生成却可能退化为重复一个词。研究发现，优选与拒选回复的隐状态会一起偏移，相对排名指标对此不敏感；移植这个偏移可重现退化，控制它能抑制部分坍缩。问题主要在特定目标和基础模型上建立，不能推断所有偏好训练都会失效。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29410)

### 不同分词器之间也能对齐蒸馏概率

CSD: Common-Support Distillation for Cross-Tokenizer Knowledge Transfer

🌟🌟

教师和学生把同一段文字切成不同词元时，直接匹配预测概率容易失真。研究先对齐共同文本，再把可比较的延续映射到同一组事件，并保留剩余概率。在多个跨模型组合上取得更高平均分。它改善的是蒸馏接口，尚未证明对多语言和复杂切分都同样有效。

[阅读论文 PDF](https://arxiv.org/pdf/2610.28895)

### 长上下文继续训练可能停得太早

Don't Stop Long-Context Continual Pre-Training Too Early: An Empirical Scaling Law

🌟🌟

长上下文能力可能在表面分数趋稳后仍继续增长。研究用不同规模和短、长上下文预算拟合规律，并以最近四个检查点的平均值减少波动；十亿级模型继续训练到约千亿词元仍有收益。扩窗和微调后部分收益保留，但这不足以保证更大模型或无限预算下同样成立。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29352)

### 量化推理修复应跟随学生自己的轨迹

Right On Q: Recovering Reasoning under Quantization via Self-Generated Trajectories

🌟🌟

低比特模型推理失误会越走越偏，固定教师答案未必能覆盖学生实际遇到的前缀。研究让量化学生先生成，再由全精度教师沿这些前缀纠正概率。九项基准中均值提高，重复与截断减少；这是有教师参与的恢复训练，尚不能把效果外推到其他模型家族或视为免费量化。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29378)

### 专家路由可以成为推理过程监督线索

A Strong MoE Is All You Need for Process Supervision

🌟🌟

混合专家模型的路由分配，或许还能提示哪一步推理不可靠。研究组合路由统计，挑选低置信步骤重写，并把这些分数蒸馏成独立过程评估器，在多类任务中取得收益。它提供了新的监督来源，但路由置信不是正确性真值，长轨迹训练还受输入截断影响。

[阅读论文 PDF](https://arxiv.org/pdf/2610.29498)
