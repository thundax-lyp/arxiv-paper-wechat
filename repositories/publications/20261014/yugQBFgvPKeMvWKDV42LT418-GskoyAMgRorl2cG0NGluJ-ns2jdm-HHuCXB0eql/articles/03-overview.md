---
title: "arXiv Agent 与大模型研究简报｜2026-10-14｜入选论文全览 2/2"
author: "Thundax"
summary: "本期关注智能体怎样选择工具、保存执行状态与核验研究证据，也追问自改进的涨分是否真能迁移。训练和部署成本之外，多篇工作提示：局部动作正确、最终答案正确与可靠交付，需要分别测量。"
description: "本期关注智能体怎样选择工具、保存执行状态与核验研究证据，也追问自改进的涨分是否真能迁移。训练和部署成本之外，多篇工作提示：局部动作正确、最终答案正确与可靠交付，需要分别测量。"
---

# arXiv Agent 与大模型研究简报｜2026-10-14｜入选论文全览 2/2

本期关注智能体怎样选择工具、保存执行状态与核验研究证据，也追问自改进的涨分是否真能迁移。训练和部署成本之外，多篇工作提示：局部动作正确、最终答案正确与可靠交付，需要分别测量。

本期入选论文全览。

## 评测与安全

### 减少循环推理深度可能先损害安全拒绝

Running Fewer Loops Removes Refusal Behaviour in Recurrent-Depth Language Models

🌟🌟🌟

循环模型省掉几次推理，可能保住解题能力却丢掉拒绝。小型思考模型深度减半时数学保留89%准确率，有害帮助率从3.8%增至20.5%；随机深度安全训练可缓和退化。极浅层文本质量与裁判影响分母，结果不能推广为所有提前退出都不安全。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15218)

### 高预测分数可能掩盖数据科学失误

The Silent Failures in Agentic Data Science

🌟🌟

数据科学智能体可能靠泄漏获得漂亮分数。研究以自然任务审计、六类受控陷阱和竞赛方案对照检查管线，发现方法失误普遍存在，泄漏与较高预测表现相关。评测仍依赖模型裁判，不能把这种相关直接解释为因果，但它提醒开发者把验证设计也纳入验收。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14115)

### 三小时任务需要同时记录进度与完成

Long-Horizon-Terminal-Bench 2\.0: Automating Diverse Task Construction and Measuring Sustained Agent Progress

🌟🌟

任务失败不意味着三小时里毫无进展。新版终端基准用隐藏场景和半小时检查点记录重建工作，最佳配置在77项任务中仅有37项达到接近完成的门槛。过程奖励能够显示进展与回退，却不是交付成功率，排行榜也取决于任务和执行框架。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14146)

### 需求问清楚后，端到端交付仍很难

FDE-Bench: Evaluating End-to-End Delivery from Underspecified Real-World Business Requests

🌟🌟

用户没说清需求时，问对问题只是交付的第一步。49个真实项目构成的基准允许向模拟客户澄清，再验收最终产物；18种配置中最佳平均质量为0.5510，最高参考达标比例仅6.12%。案例覆盖有限且客户不会改需求，尚不能代表完整的真实服务过程。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14539)

### 找对数据库不等于完成跨库工作流

DSABench: Benchmarking Source Discovery, Coordination, and Execution for Multi-Database Agents

🌟🌟

跨库分析必须同时找到来源、安排依赖并执行查询。815项任务中，最佳来源集合恢复率60.55%，加入协调要求后最高仅34.66%；一次澄清可显著修复歧义来源。局部查询进步仍不等于完整工作流成功，参考条件的证据与计算预算也并非严格一致。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14700)

### 办公自改进能否迁移到跨文件交付

EvoCowork: A Benchmark for Real-World Office Tasks

🌟🌟

会改文档，不代表能协调文档、表格和演示稿。办公基准把反馈、选择和测试隔离，要求原生结构与跨文件一致性；两种自改进域内增益为4.90和2.64分，跨办公仅变化0.03和负1.72。各方法单次演化和离线裁判限制了结论，迁移应直接测量。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14828)

### 任务越长，局部完成越难变成交付

SkillHorizon: Constructing Long-Horizon Agent Tasks through Skill Composition

🌟🌟

技能组合基准把业务量与依赖一起放大。1050项任务中，参考交互工作量从6.4万词元增至100万词元，平均局部完成率从90.4%降到46.8%，一些运行有工具余额却提前终止。这里的规模是累计参考工作量，不是单次上下文长度；脚本成功也不能代替业务验收。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14966)

### 口头拒绝不能替代动作级安全评测

Lumen-bench: Cross-Lingual Safety Gaps and the Say-Do Problem in Tool-Calling Large Language Models

🌟🌟

安全回答说了拒绝，工具参数却可能执行请求。五语言、三十模型评测中，实质调用案例有8.57%出现这类言行差距；伦理提示能降低总体违规。分母不含全部试验，人工校准也仅覆盖单作者的83个葡语案例，模拟动作不能直接当作现实伤害统计。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15134)

### 更愿意行动不等于更会判断该不该做

Sensitivity or Criterion? Measuring and Moving When Language Models Act

🌟🌟

行动准确率混合了会不会判断与愿不愿行动。规则生成的对照题把两者分成敏感度和门槛，激活引导及蒸馏可移动门槛并迁移到外部任务。但标签是模型注释的单轴物理抽象，没有人类基线；更积极只会交换漏报和误报，不能增加原本缺失的辨别能力。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15415)

### 自演化成绩须扣除冻结模型的重测波动

Trace Evolution Bench: Measuring Whether Agents Improve from Their Own Environment Traces

🌟

冻结策略重复评分也会涨分，自改进不能只报更新前后差值。编码基准的不更新对照波动5至12.5个百分点，没有一种方法跨三个模型所有种子都超过自身噪声带。留出题只有四十道且是单一修错类型，研究提出归因控制，并不能断言小于波动的效应不存在。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15055)

### 状态表示改变后，已学会的动作仍可能失效

State Representation Shapes Long-Horizon Agent Learning and Transfer: An Empirical Study

🌟

动作学会了，换一种状态展示仍可能完全失效。三个17亿参数训练种子在紧凑视图各完成五十题，换完整视图却都是零。主压缩带参考动作信息，其他控制也没彻底分离长度和显著性；它揭示表示迁移脆弱，不能解释为所有长上下文都该删减。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15407)
