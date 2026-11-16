---
title: "arXiv Agent 与大模型研究简报｜2026-11-16｜入选论文全览 2/2"
author: "Thundax"
summary: "智能体执行长任务时，真正容易丢失的往往是下一步依赖的证据。本期沿着证据的保存、委派、核验和动作放行，梳理这些环节怎样影响成功率和安全性。全览另涵盖模型训练、推理、部署及专业任务评测。"
description: "智能体执行长任务时，真正容易丢失的往往是下一步依赖的证据。本期沿着证据的保存、委派、核验和动作放行，梳理这些环节怎样影响成功率和安全性。全览另涵盖模型训练、推理、部署及专业任务评测。"
---

# arXiv Agent 与大模型研究简报｜2026-11-16｜入选论文全览 2/2

智能体执行长任务时，真正容易丢失的往往是下一步依赖的证据。本期沿着证据的保存、委派、核验和动作放行，梳理这些环节怎样影响成功率和安全性。全览另涵盖模型训练、推理、部署及专业任务评测。

本期入选论文全览。

## 评测与安全

### 同一条执行轨迹，压缩后验证器还判得准吗

Do Verifier Judgments Survive Abstraction? Measuring Verification Transport for LLM Agent Evaluation

🌟🌟🌟

智能体把多步操作封装成一个工具时，执行结果可以没变，验证器看到的证据却少了。研究固定轨迹与标签，只变换原生、抽象和恢复三种视图，观察到委派和工具封装常使正确判决翻转。恢复来源证据挽回了85.5%的相关失败，这个比例来自研究建立的抽象和恢复条件。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18471)

### 工具只说还有一条记录，智能体会停下来问吗

What LLM Agents See and What Users Say

🌟🌟

取消预约前，智能体得确认自己找对了那一条。作者改变工具返回方式，发现只提示存在第二条记录时，多数早期模型仍会操作眼前的匹配，完整列出两条记录更能促使它停下来。计数在直接反驳用户陈述时又可能足够，效果与计数所证明的前提有关。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17639)

### 模型采信错误后，怎样测它能不能改回来

Knowledge After Collapse: Context and Wording Shape Factual Accessibility in Language Models

🌟🌟

研究在模型明确接受错误答案时保存对话，再用不同后续问法从同一节点分支。一个三十亿参数模型使用完整历史时答对46题中的16题，换成中性历史后答对42题。比较只覆盖先答对再采信错误的英语事实题，能帮助区分易受误导和误导后的恢复能力。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17763)

### 二十个可重置网站怎样评测网页智能体

WebArena-Pro: A Heterogeneous, Multimodal, Reproducible Benchmark for Web Agents

🌟🌟

这套评测用20个自托管网站提供300项工作，既核对最后网页状态，也核对关键操作。部分任务需要听录音或查看视频帧。50步限制下，领先组合的严格完成率为62.3%。工具配置与模型紧密耦合，步数相同也不保证实际用量可比。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17955)

### 对话途中换了模型，旧历史会怎样干扰指纹审计

Contagious Fingerprints: When LLMs Inherit Another Model's Identity

🌟🌟

后接的模型会沿用前一个模型的对话风格，部分替换的检出率因此从87%降到54%。用全新对话校准探针，也可能把诚实服务误判为换了模型。作者改用官方模型在同一历史下多次作答作为参考。方法需要额外官方调用，真实工具轨迹还缺少验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18104)

### 输入后缀能否替代生成时的激活干预

Creating Steering Vectors via Input Optimisation

🌟🌟

激活引导通常需要在生成时读取并修改模型内部状态。研究通过优化输入后缀来逼近目标引导，德语输出上的行为复现较强，也能跨提示迁移；反拒答测试在严格安全分类下仅部分成功，不能把措辞规避等同于突破完整安全边界。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17481)

### 怎样在训练前估算模型有多少推理不经过可读文字

An Operationalization of Opaque Serial Depth

🌟🌟

作者把无法经过可读语言节点的最长连续计算路径定义为一个代理指标，根据架构、训练方式和部署配置即可估算。在标准模型中它大体随网络层数变化，而宽带潜变量推理架构可能使它陡增。该指标衡量结构允许的计算深度，实际隐式推理能力仍需行为测试。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17495)

### 压制幻觉或迎合时，拒答行为也可能改变

Safety Side Effects of Preventative Persona Steering: An Empirical Audit

🌟🌟

作者在微调时加入并在评测时撤掉人格方向，检查这种训练还改变了什么。三个模型的通用能力分数基本稳定，但针对幻觉的引导使一项有害请求测试的攻击成功率下降39至85个百分点。针对迎合的干预则因模型和测试而变化，单项能力成绩难以反映这些副作用。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17620)

### 评测编码智能体怎样优化已有算子

AscendGYM: A Cost-Aware Kernel Optimization Benchmark for Real-World Workloads on Ascend NPUs

🌟🌟

这组任务从模型工作负载提取真实张量形状，给编码智能体一个可运行的算子，再用沙箱检查改写是否正确、是否更快。研究发现工具组合的相对表现会随词元预算变化，在固定模型下也观察到复用优化经验的收益。报告主要覆盖特定加速卡上的首批17个任务。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17621)

### 平均通过率会怎样掩盖智能体回归

Generated Evaluation Suites as Diversity-Driven Search for Real Agent Regressions

🌟🌟

工具被移除后，受影响的测试可以全部失效，整套平均通过率却可能反向波动。作者向航空和零售智能体注入七种缺陷，按需求、用户角色和场景追踪影响。五个可定位缺陷中有四个受覆盖限制，最大总分变化也不超过检测阈值。试验只用了一套基准体系和单一模型。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17632)

### 生成完整网页游戏时，哪些需求最易漏掉

OCTAVE: A Capability-Resolved Benchmark for End-to-End HTML5 Game Generation

🌟🌟

作者把180项网页游戏任务拆成1800条可检查要求，分别看规则、状态、角色行为和反馈等八类能力。11种组合较擅长实现核心规则和数值设计，非玩家角色行为与反馈更常缺失。评判主要来自静态源码检查，测试结果无法替代运行中对交互与手感的核对。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17681)

### 专业工作簿怎样考验智能体的查找完整性

GDP\.xlsx: Benchmarking Frontier Models on Professional Workbooks

🌟🌟

专业表格任务的答案可能散落在多张工作表、批注或嵌入图中。评测为70项工作请求提供完整文件与专家评分准则，答复须满足全部条件才算通过。20种配置中最高严格通过率为38.3%，漏列条目是典型错误。多数任务保留在内部，评测集中于最终回复。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17766)

### 续聊时，智能体知道日期已过还会推荐旧计划吗

Can Agents Keep Up with Time? An Empirical Analysis of Temporal Adaptation After a Conversational Hiatus

🌟🌟

隔几周接着聊同一个预约，记录还在，日期已经过去。作者固定前半段对话，只变动续接日期和时间提示。346个过期情形中，有116次模型在推理里知道日期已过，最终却仍给出过时建议。工具可以替它判断先后，预约是否实际发生仍需另找证据。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17806)

### 人工评审聚焦正文，模型意见更常来自附录

AI Reviews Are Biased Towards the Appendix

🌟🌟

模型辅助评审是否能抓住论文核心贡献？对会议论文的分析发现，模型提出的弱点约一半或更多来自附录，人工评审只有8.4%；模型更关注细部技术问题，但附录错误仍可能真实重要，比例本身不代表意见无效。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17811)

### 自动评审能否专注论文论证的可靠性

PaperCritic: Training AI Reviewers to Assess the Soundness of Papers

🌟🌟

模仿人类评语不一定能让自动评审找出可靠问题。该评审模型聚焦论证健全性，以评审点准确性和覆盖率共同训练，在领域内及跨领域测试中超过对照模型；其奖励依赖模型评分器，真实会议决策效用仍待独立验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17834)

### 长期租赁任务怎样考验智能体兑现承诺

OutfitterBench: Evaluating LLM Agents on Long-Horizon Resource Allocation and Commitment Coordination

🌟🌟

智能体出租装备后，需要把这项承诺带进后续排程，并判断新机会是否值得调整。研究用两个模拟运营世界测试七种配置，只有最强者在两个世界都超过固定日历策略。轨迹显示模型有时在后续安排中漏用早先检查过的条件，排名也受到每个配置只运行一次的限制。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17933)

### 同一个金融研究智能体重跑七次，成绩差多少

Can You Trust Your Finance Agent? Drift, Diagnosis and Auditable Intervention on One Shipped Financial Research Agent

🌟🌟

研究保持问题和金融代理配置一致，七次运行通过的评分细则在149项中低至105项、高至123项，费用也相差最多17%。作者再将失败轨迹按可修复部件归类，用自然波动衡量干预收益。测试只涉及一个参考代理和一套自用裁判，分数有明确的配置边界。

[阅读论文 PDF](https://arxiv.org/pdf/2611.17939)

### 网页智能体点了不存在的元素，模型内部能提前看出来吗

Can Mechanistic Interpretability Help Explain LLM Agent Failures? A Case Study on Web Element Hallucination

🌟🌟

研究从网页智能体生成动作前的激活训练探针，预测不存在的元素引用，曲线下面积达到0.80。最有效的干预纠正了最多85%的幻觉，也破坏了7%的有效动作。稍改提示格式便会削弱干预效果，说明探针测到的信号还依赖具体代理和输入设计。

[阅读论文 PDF](https://arxiv.org/pdf/2611.18514)
