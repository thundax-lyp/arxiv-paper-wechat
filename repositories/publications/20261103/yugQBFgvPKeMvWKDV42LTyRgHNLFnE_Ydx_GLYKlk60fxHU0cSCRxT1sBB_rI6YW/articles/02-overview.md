---
title: "arXiv Agent 与大模型研究简报｜2026-11-03｜入选论文全览"
author: "Thundax"
summary: "本期关注智能体如何更可靠地保存信息、协作和交付结果：笔记能否支撑跨窗口工作，通信能否避免代码冲突，多层防护是否会一起失误，以及工具数据为什么不宜反复重述。另有推理节流、参数记忆和评测校准的进展与反例。"
description: "本期关注智能体如何更可靠地保存信息、协作和交付结果：笔记能否支撑跨窗口工作，通信能否避免代码冲突，多层防护是否会一起失误，以及工具数据为什么不宜反复重述。另有推理节流、参数记忆和评测校准的进展与反例。"
---

# arXiv Agent 与大模型研究简报｜2026-11-03｜入选论文全览

本期关注智能体如何更可靠地保存信息、协作和交付结果：笔记能否支撑跨窗口工作，通信能否避免代码冲突，多层防护是否会一起失误，以及工具数据为什么不宜反复重述。另有推理节流、参数记忆和评测校准的进展与反例。

本期入选论文全览。

## 智能体系统与工具使用

### 采集更多网页，也要知道何时换一片区域

PatchScout: Thematic Web Data Collection via Information Foraging

🌟🌟🌟

主题资料采集容易困在一个高产网站。研究让查询生成、链接探索和相关性判断三个角色协作，根据局部产出与剩余链接价值决定换区域。在四个实时网页主题中改善覆盖，还发现并人工确认一百零二个清单外实体。不过页面产量与实体覆盖可能冲突，不同主题也没有统一最佳切换规则。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00169)

### 让智能体学会写笔记，才能真正跨越上下文窗口

MEMENTO: Learning Context Management for Long Context Processing Agents

🌟🌟🌟

只有压缩工具，还不足以让智能体保存有效记忆。研究先用事后补写笔记的轨迹示范，再强化学习，在整书问答中把八十亿参数模型准确率从百分之三十六点九提高到六十七点八，窗口不超过两万词元。回溯额外收益却很小；结果仅覆盖英文短答案问答，不能直接外推长期编码任务。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00244)

### 工具已经算对，别让模型搬运表格时再弄错

Fidelity Collapses with Table Size, Not Turn Count: Delivery Architecture in a Deployed Tool-Using Agent

🌟🌟🌟

航旅智能体的冻结数据回放比较两种交付方式：让模型重述记录，或将记录保存在会话中，经确定性筛选和类型化旁路交付。主要条件整轮完全正确率分别为百分之四十五点七与九十二点三，表格越大差距越明显。不过实验来自一个系统的脚本对话，状态保留与旁路作用也未完全分离。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00442)

### 强智能体的好做法，哪些应该沉淀成固定流程

Taurus: LLM-in-the-Loop CT Annotation Matches Coding Agents at Half the Cost

🌟🌟

作者从自由编码智能体的影像标注轨迹中提炼确定性操作，交给自动流程执行，模型主要回答带候选修正的异常卡片。在三十八个保留案例上，最终框架主要指标与强自由智能体未发现差异，模型成本不到一半。比较工具条件并不完全相同，也没有专家临床验收，成本还不含自动流程与开发。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00247)

### 智能体边执行边改框架，恢复权应放在哪里

Exo: An Architecture for Self-Improving Systems at Runtime

🌟🌟🌟

研究把工具、提示和上下文策略开放给智能体自改，将追加历史、版本化状态和激活检查放到保护层。在应用任务中，作者报告留出模型成本下降且通过率相当。不过默认激活器主要检查能否构建，不能证明行为安全；学习开销能否摊销也取决于任务重复度。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00463)

## 大模型推理与规划

### 提前结束推理，节省的成本算全了吗

Early Stopping in Large Reasoning Models: A Survey and Empirical Audit of Efficiency and Reliability

🌟🌟🌟

截短推理并不自动带来可靠的成本节省。作者在五种模型、八套任务中统一回放十种停止方法，把判断何时停止的开销一起计入。结果没有跨设置稳定占优的策略，部分输出还会继续推理或缺少推导。测量假设理想缓存复用，尚不能直接证明实际延迟和能耗下降。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00166)

## 检索增强生成与知识检索

### 把检索资料变成参数记忆，需要补对原模型

From Lookups to Lessons: Turning Retrieved Knowledge into Parametric Memory

🌟🌟

研究让冻结模型离线读取检索证据作为教师，训练额外记忆修正输出，而非独立模仿检索器。五套问答的平均词元分数从三十二点八三升至三十四点四八，并较少破坏原本正确答案。所报大幅存储节省针对教师构建数据，记忆本身仍有约十五亿参数，不能当成全系统内存降幅。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00450)

### 科学图像问答：检索上下文也需要学会使用

RE-SciVQA: Improving Scientific VQA With Context-Relevant Retrieval and Lightweight MLLM Adaptation

🌟🌟

研究利用图号、章节和图注对齐改善文献检索，再对小型多模态模型作低秩微调。主要配置的词语重合指标达到零点七三九，但无检索的微调版本已达零点七三二，直接向零样本模型加入上下文反而退化。收益主要不能全算在检索上，拒答与科学事实正确性仍须单独衡量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00242)

## 多智能体与协作

### 两个编码智能体各自做对，为何合起来仍失败

Decentralized Multi-Agent Coordination and Communication in Shared Codebases

🌟🌟🌟

研究构造需要对齐接口或解决冲突的双智能体编程任务，用联合测试检验合并结果。一个配置在冲突任务上由单体成功率百分之六十二降至独立并行的十六，一次串行交接恢复到五十四。消息渠道只挽回一部分差距；这是一套专门诊断协调难题的基准，不能当真实团队冲突率。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00314)

### 模拟团队为何总是过于和谐

Evaluating Context Sensitivity of Collaboration Behavior in Multi Party Simulation Frameworks

🌟🌟

语言模型生成的团队讨论会随目标和人数变化，却很少出现真正的分歧。研究在三个模拟框架、九十六组设置中测量话语和协作行为，发现目标类型影响最清楚，人数效果依赖框架。它提醒我们，流畅合作不能代表真实团队；实验仅含固定模型组合，尚无人类团队对照。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00089)

### 谈判提示翻译后，人格策略还保持一致吗

Cross-Lingual Persona Effects in LLM Negotiation

🌟🌟

同样的买卖场景与人格设定换成韩语后，主要模型的成交率比英语高二十四点八个百分点，差异更多来自后续卖方让步，而非买方开价。研究采用十二个场景并作第二模型检查，后者仅提供方向支持。指令和交流语言同时变化，结果不能用于解释真实人群或文化。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00300)

## 大模型训练与对齐

### 压缩组件组合起来，省下的未必是运行成本

Compression Technique Interactions in Small Language Models: A Factorial Ablation Study

🌟🌟

四种小语言模型的因子实验显示，特定四位量化与幅值剪枝组合会崩溃，低秩恢复的收益也不必来自教师蒸馏。实际中央处理器测试中，非结构剪枝没有降低密集内核的内存或延迟。结论受模型、量化后端与剪枝方式限制，部署时应测真实吞吐，不能把稀疏率直接当加速比。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00464)

### 视觉语言学习需要允许“这个词没有对应物”

GAVAGAI: Referential Alignment for Infant-Scale Vision-Language Models via Balanced Optimal Transport

🌟

把每个词强行对齐到可见区域，可能让模型记住常见背景。研究引入空指称位置和区域容量约束，在婴儿视角视频上将词图匹配准确率从百分之三十二点四提高到四十八点七。它说明结构偏置可以改善小规模字幕学习，但尚未证明通用大模型收益，也未超过同数据对比学习模型的自身基准。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00319)

### 每位创作者一个词元，能否绕开推荐标识碰撞

Beyond Semantic IDs: Atomic Creator Tokens for Large-Scale Generative Recommendation

🌟

生成推荐若把多位创作者量化为同一标识，会引入召回上限。研究让每位创作者拥有独立词元并端到端训练，相对匹配基线的前十五位召回率提高十九点八个百分点，服务延迟也更低。不过每个词元需足够样本，更适合头部候选；线上增益较小，目前主要是方向性证据。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00323)

## 评测与安全

### 多加一道防护，未必能按独立概率降低风险

Dependence-Aware Risk Assessment and Optimal Design of AI-Agent Safeguard Systems

🌟🌟🌟

多个防护模型可能一起漏掉同一类越权动作。研究显式建模联合错误，优化组件顺序和复核路径；八个数值场景中，六个按独立假设选出的策略违反安全约束。主要留出实验总成本降低百分之三十九点六，但收益依赖成本配置与校准分布，不能保证部署后风险持续达标。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00386)

### 把文字改得更像人，会改掉哪些可核查信息

Humanized but Still True? Auditing Facts and Detection in AI-Text Humanizers

🌟🌟

作者审计十一种商业改写工具，在含目标信息的文档中，每种工具都有百分之三十五至六十五至少改动一项数字、名称或引文。即使不计引文，多数工具仍有明显变动。但规则检查器只经模型标注验证，改动也不必然构成事实错误；更强文本来源检测器同样存在人类原文误报。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00359)

### 监控器报对了警，解释也可能是错的

Hacking or Just Failing? A More Capable LLM Monitor Better Separates Reward Hacking from Honest Failure

🌟🌟🌟

在可回放订单沙箱中，更强模型更能区分已知投机与普通失败，却对陌生填充机制连续漏报。小模型能报出这些案例，解释里却描述了没有发生的操作。研究用反事实修复建立行为标签，结果提醒我们分别测报警、解释和新机制覆盖；单一合成任务尚不足以证明普遍监控能力。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00407)

### 用智能体读归因图，多走几步是否真的有用

Circuit Oracle: Automating Attribution Graph Analysis via Natural-Language Queries

🌟🌟

研究让多个工具化智能体沿模型归因图寻找伪相关、隐含知识和拒答特征。伪相关判断准确率约百分之七十八，但不遍历边的简化版本表现相近；其他任务又显示遍历更有帮助。秘密抽取仍落后专门训练基线，单次干预也未超过简单参照，不能用多次择优成绩宣称全面领先。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00420)

### 校准裁判评分分布，不能替它改善判断排序

Quantiles, Not Points: Streaming Quantile Matching for Ordinal-Aware LLM-as-a-Judge Calibration

🌟🌟

作者保持语言模型裁判不变，用少量人类标注把原始分数按分位数映射到人类量表。四个模型、五套数据上，方法能改善分布保真并缩小部分大小模型误差差距。不过单调校准不会修复原有排序，异质评分标准也更难处理；目前证据限于英语五级量表。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00447)

### 去掉答案选项后，医学问答高分还剩多少

From Small to Large: Assessing Medical Reasoning, Benchmark Contamination, and Model Size in Language Models

🌟🌟

十四个模型在公开医学题上表现很强，但移除选项后，相关题集平均准确率从百分之八十二点三降至五十点九。强模型有时能仅凭选项复原题目，却也能答对无法复原的题，因此污染不是唯一解释。这说明格式会改变所测能力，选择题分数不能直接代表临床独立判断。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00460)

### 模型更会预报失败，控制表现却可能变差

CalVLA: Shaping Native Confidence in Vision-Language-Action Policies with Outcome Supervision

🌟🌟

研究用成功和失败轨迹调整动作模型的原生置信度，在模拟任务中将失败区分指标提高到约零点七四，平均控制成功率却从百分之五十八降到五十五。对简单线性探针的优势仍不确定。它提供了置信度与行为质量必须联测的例子，尚无真实机器人报警或安全收益验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00394)

## 应用与基准

### 自然语言查数据库，瓶颈已扩展到整个系统

Reimagining Text-to-SQL: A Survey of Large Language Model Architectures and Strategies

🌟

这篇综述把语言模型数据库查询方法按提示、微调、检索、智能体和强化学习组织起来，并讨论生产语义层。共同难点包括表列关联、取值落地、执行验证和推理成本。它适合建立领域地图，但引用成绩来自不同论文与实验条件，不能据此直接比较方案优劣。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00171)

### 按读者反应轨迹写故事，改善的是哪种体验

Steering Readerly Dynamics: Trajectory-Guided Story Generation with Large Language Models

🌟

研究先预测悬念或幽默的变化轨迹，再引导大模型逐段续写，报告相对人类故事的轨迹保真改善，并基本保持连贯性。但评价主要依赖语言模型测量器，没有大规模直接比较生成故事的读者实验；当前也只单独控制一个维度，不能据此宣称真实阅读体验已改善。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00469)

## 其他智能体与大模型方向

### 隐藏状态能够复用，不等于知识已经成功迁移

Cross-Prompt Reuse of Entity-Replacement Responses

🌟

研究把实体替换造成的隐藏状态变化注入另一个问题，测量答案概率变化能复现多少。小模型部分设置能消除约一半的无变化预测误差，但关系特异部分并不稳定，起始词元和输入模板也会改变结果。实验依赖已知答案前缀与等长英文替换，不能直接当作自由生成或知识编辑成功率。

[阅读论文 PDF](https://arxiv.org/pdf/2611.00352)
