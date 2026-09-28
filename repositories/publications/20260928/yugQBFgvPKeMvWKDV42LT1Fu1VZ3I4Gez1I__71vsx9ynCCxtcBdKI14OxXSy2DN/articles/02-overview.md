---
title: "arXiv Agent 与大模型研究简报｜2026-09-28｜入选论文全览 1/2"
author: "Thundax"
summary: "本期关注智能体能否守住任务边界、交付可用成品，以及怎样减少没有价值的推理与重复操作。训练与协作研究也提示：更多成员、更多样本和更长上下文，只有配合有效证据与选择机制才会兑现收益。"
description: "本期关注智能体能否守住任务边界、交付可用成品，以及怎样减少没有价值的推理与重复操作。训练与协作研究也提示：更多成员、更多样本和更长上下文，只有配合有效证据与选择机制才会兑现收益。"
---

# arXiv Agent 与大模型研究简报｜2026-09-28｜入选论文全览 1/2

本期关注智能体能否守住任务边界、交付可用成品，以及怎样减少没有价值的推理与重复操作。训练与协作研究也提示：更多成员、更多样本和更长上下文，只有配合有效证据与选择机制才会兑现收益。

本期入选论文全览。

## 智能体系统与工具使用

### 编程智能体省钱，需要识别哪些重复动作没价值

Analyzing and Mitigating Cost-Inefficient Behaviors in Coding Agents

🌟🌟🌟

编程智能体经常重读已有代码、重写相似脚本、重复运行未受改动影响的测试。论文分析1200条轨迹，再比较三种缓解方案：通用人工规则最多降低41.73%的推理费用，结构检索反而可能增加成本。这是配置内的最大收益，费用统计不含执行时间与硬件，不能据此普遍禁止复查。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30725)

### 移动智能体用已验证深链跳过冗长导航

From Tapping to Hopping: Augmenting Mobile GUI Agents with App-Native Deeplinks

🌟🌟

逐屏点击会增加移动智能体的错误机会。论文先挖掘并在真实设备验证应用深链，再训练智能体按需跳转、核验落点并回退到界面控制，提升任务完成和轨迹效率。结果说明高层接口能补充视觉动作，但覆盖限于应用开放的页面，证据目前集中于安卓生态。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30887)

### 大工具目录里，搜索和选择需要单独学习

ToolSearcher: Optimizing Tool Selection at Scale via Reinforcement Learning

🌟🌟

工具变多后，智能体不仅要会调用，还要找到兼容的组合。论文给多轮搜索、相似工具辨别和阶段进展分别分配奖励，七十亿参数模型的选择得分从9.8%升至51.3%。但完全匹配仅27.8%，这些指标也不代表调用后任务成功；仍需检查参数和真实执行。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30906)

### 代码技能提高长程效率，还要能退回基础动作

Up and Down the Abstraction Ladder: Code-Based Skills for Language Agents

🌟🌟

重复低层动作可以封装为代码技能，让语言智能体专注选择与组合。论文在长程游戏中比较三种接口，技能显著提高进展、降低推理费用，混合接口保留大部分收益并能处理技能缺口。结果依赖人工技能库，尚未解决完整游戏，也不能直接推断开放办公任务的收益。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31076)

### 代码定位要保存可修订的候选和证据

Semantic Navigation for Issue Localization in Code Repository

🌟🌟

仓库定位只给一串文件名，难以持续修订判断。论文用按需关系图、源代码语义卡和候选工作区记录证据，改善文件命中，并把固定修复模型的解决率从44%提升到52.33%。这支持定位质量能影响修复，但实验限于选定仓库和一次修复，上下文节省也未必等于总费用下降。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31176)

### 压缩旧工具观察，需同时约束智能体行为漂移

Compress What You See, Not What You Say: Anchored Context Distillation for Latent-Observation Software Engineering Agents

🌟🌟

旧工具输出压成软令牌，近期观察和动作保留原文，可降低重复上下文。论文同时蒸馏并锚定行为，每次调用上下文最多降57%，但大窗口任务解决率也下降。受限窗口下另有收益，不过比较针对适配后的代理和任务子集；应按部署预算权衡，不能宣传为普遍无损压缩。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31430)

### 协作记忆先判断是否有效，再决定是否检索

Not All Memories Are Equal: Hierarchical Collaborative Memory for Validity-Aware Retrieval in LLM Agents

🌟🌟

智能体记忆中，相关旧记录可能与当前团队决策冲突。论文先维护团队和个人记录的有效视图，再据此检索和回答，在两组生物医学协作数据上减少过时信息并改善问答。启发是把失效维护放在检索之前；但效果依赖层级规则和记录质量，跨领域推广尚缺证据。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30289)

### 推荐智能体在上线前用多轮合成对话找错

Bootstrapping Conversational Recommendation Agents At Spotify: Synthetic Data Generation and Self-Improvement Loops

🌟🌟

推荐智能体缺少真实对话时，作者先合成覆盖不同能力的多轮交互，再把评审发现的问题交给编程智能体修复。在约千条样本上，质量相对提升8%，上线体验也改善使用指标。但在线收益属于整套新体验，不能归因于单一循环；四轮以上对话仍暴露指令保持困难。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30297)

### 设备指令收到确认，仍要验证实际效果

ADF-EA: A Unified Execution Assurance System for Agent Device Foundation

🌟🌟

设备确认收到指令，不代表目标已经实现；反馈丢失也不代表动作失败。论文以共享能力契约规定前提、效果、证据及恢复规则，持久保存已验证进度和未决状态，在多个模拟域减少虚假完成与重复操作。价值在明确恢复语义，但可靠性依赖契约正确和证据可得，尚非真实设备的全面保证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30691)

### 技能越改越长，未必学得越好

SkillEvoReg: Regularizing Agent Skill Evolution Against Overfitting

🌟🌟

智能体持续把经验写成技能，可能积累任务特定规则并破坏旧能力。论文在更新时遮蔽片段、限制结构增长，再用候选反例检查退化，改善部分组合迁移并缩小技能状态。但上下文迁移和后期数学并非全面受益，重复评估也主要针对同一演化状态，仍需多轨迹验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30861)

## 大模型推理与规划

### 跳层重层的搜索收益，未必能由单次路由复现

Programs-of-Layers in LLMs through the Lens of Cortical Areas

🌟🌟

把模型层当作可跳过或重复的函数，搜索确实能找到更好执行路径。复现研究却发现，训练路由器的首选始终退回标准前向，纠错程序对单次编辑也很脆弱。它提醒我们分别报告搜索潜力与可部署推理；实现重建存在差异，尚不能据此否定所有动态层路由。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31360)

### 长文推理先定位证据，再写面向问题的摘要

Highlight-Then-Summarize: Learning to Compress Evidence for Long-Context Understanding

🌟🌟

长文中的证据往往稀疏而分散。论文先标出可回查片段，再写面向问题的摘要，用过程奖励同时训练定位与整合，在统一长输入、短输出预算下改善七类任务。收益并非单纯缩短输入；参考证据和摘要会塑造奖励，需要全面覆盖文档的任务仍可能不适合这种压缩。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31382)

## 检索增强生成与知识检索

### 过时检索资料会把本来正确的模型带错

Stale-Document Poisoning: When Outdated Retrieval Overrides Correct Model Answers

🌟🌟🌟

检索资料并不总能纠正模型：旧资料可能把原本正确的答案带错。论文用317个已核验知识逆转案例比较新旧证据，单给日期帮助有限，明确说明资料失效期更有效。时间感知重排也有改善，但依赖可信元数据；结果提示检索应判断资料是否仍适用，而非只看相关性。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31342)

## 多智能体与协作

### 团队人数变多，投票未必找得到正确答案

Multi-agent Scaling Across Disjunctive and Compensatory Tasks

🌟🌟

团队里至少有一个正确答案，并不意味着投票能选中它。论文按任务聚合规则分析十三个模型，发现增加成员常提高正确答案存在率，却很少提升直接投票；平均估计也难消除共享偏差。不过先答案提示、小模型和单一估计基准限制结论，真正要优化的是选择机制与误差多样性。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31563)

### 长程协作要测角色分工和真正贡献

AgentWorld: Benchmarking Long-Horizon Collaboration of Multi-agent LLMs

🌟🌟

长程协作的困难不是每个成员会答题，而是持续分工和交接。论文用非对称角色游戏任务评估团队，最佳模型主集成功率52%，增强变体明显更难，并回溯动作的有效贡献。贡献指标把失败任务记零，不能直接理解为每次成功运行大多无效；游戏结果也尚未覆盖真实组织工作流。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31590)

### 多智能体流程的某一步，是否真的值得运行

Learning What to Skip: Counterfactual Credit Assignment for Efficient Multi-Agent LLM Workflows

🌟🌟

多智能体每一步都执行，可能浪费计算甚至覆盖正确答案。论文用同一前缀上的跳过干预训练控制器，再配合校准和任务守卫省略后续组件；数学设置中省25.1%的生成预算并略升准确率。不过相同答案可能共享错误，校准证书也不保证分布外安全，跳过策略仍需独立失败统计。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30734)

### 金融智能体各自自保，也可能一起失败

Financial Fragility in Societies of LLM Agents: Coordination Failures and Stabilizing Mechanisms

🌟🌟

多个智能体各自采取保护性决策，仍可能引发集体失败。论文在银行挤兑、债务滚动和众筹模拟中比较承诺机制，早期广泛承诺常伴随稳定结果。基线失败率很高，但环境强制履约和真实披露，且每组合只有五次情节；这些是互动设计证据，不能预测现实金融危机。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30940)

## 大模型训练与对齐

### 自训练先探索不同解法，比反复采样同一路径更有效

Strategically Diverse Sampling for Self-Training

🌟🌟🌟

自训练多采样几次，可能仍是同一种解法。论文先探索策略树或不同方案，再生成答案；四次策略采样解出155道训练难题，随机采样仅42道，留出困难集也受益。错误但多样的轨迹有价值，不代表正确性无用：在同一策略数据内，正确过滤仍更好，收益也主要来自模型筛出的困难任务。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31571)

### 让自蒸馏教师随学生更新，再学习简洁重写

Recursive Self-Improvement via On-Policy Distillation for Reasoning

🌟🌟

固定自蒸馏教师无法吸收学生新能力。论文逐轮刷新带答案条件的教师，并训练学生学习更短的正确改写；八十亿参数模型在四项数学任务的平均准确率达到65.97%。但相较固定教师，其推理明显变长，简洁训练只削减协同版本的部分长度，不能把准确率提升理解为无成本收益。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30652)

### 蒸馏时的对话模板也会改变安全行为

Understanding the Role of Prompt Template in Knowledge Distillation for Safety Alignment

🌟🌟

只蒸馏良性回答，也可能破坏学生已有拒绝行为。论文跨三个模型族比较训练模板，发现聊天格式更容易增加有害顺从，并伴随内部表示变化。模板因此应纳入安全回归变量；但实验主要是小模型和良性指令数据，非聊天模板也不等于安全无损。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30802)

### 教师偏好的分支，要让学生实际走一遍

TISD: On-Policy Self-Distillation with Trajectory Intervention

🌟🌟

教师建议另一个动作，但学生从未走过其后续路径，自蒸馏就缺少对应监督。论文强制一个教师分支后交回学生续写，再蒸馏新轨迹；编码平均提升1.2个百分点，科学推理等时间提升0.3个百分点。方向清楚，收益较温和，额外采集成本和学生续写能力决定实际价值。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30878)

### 持续微调要保护不知道原始数据的旧知识

Estimating and Orthogonalizing Unknown Pre-training Gradients for Continual Fine-tuning of Large Language Models

🌟🌟

持续微调会遗忘通用知识，但原预训练数据通常不可得。论文用可学习软提示生成易受损的伪数据，估计保护方向并限制新任务梯度，跨任务顺序改善表现。消融支持代理信号的作用，不过测试集和局部梯度只是知识代理，不能宣称完整保留预训练能力。

[阅读论文 PDF](https://arxiv.org/pdf/2609.30935)

### 只训练中途置信度，也能让推理更简洁

Learning to Stop without Learning to Stop: Self-Supervised Confidence Training Improves Reasoning Efficiency

🌟🌟

推理变短不一定要直接奖励停止。论文让模型在中途预测由自身答案概率生成的置信标签，只训练这些标签，正常推理时不再询问置信度；多模型、多任务最多减少约25%的输出。这里的置信度不是已校准的正确概率，六百道数学训练题能否支持开放长程任务仍待验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31619)

### 定向知识遗忘可借助更有选择性的内部过滤

Neuralyzing the Trace: Selective Representation-Level Unlearning with Contrastive Sparse Autoencoders

🌟🌟

普通内部特征分解容易捕获背景知识，难以只抑制某个人的信息。论文用对比稀疏编码提高目标选择性，在三类小模型的人物遗忘任务上改善效用权衡。但机制是持续内部过滤，并未擦除参数痕迹；合成基准和局部表示界限也不足以证明不可恢复删除。

[阅读论文 PDF](https://arxiv.org/pdf/2609.31056)
