---
title: "arXiv Agent 与大模型研究简报｜2026-09-15｜入选论文全览 1/2"
author: "Thundax"
summary: "本期最值得注意的变化，是 Agent 研究开始从“任务做成了没有”转向系统边界：交接能否保留承诺，工具调用成功后外部状态是否一致，审计发现危险时控制器会不会真的停下，以及经理式回修是否反而制造迎合。另一条主线聚焦自我改进与长期运行：harness、技能、探索策略、会话记忆和科学工作流都在尝试把经验变成可复用、可验证的状态。星标表示本期阅读优先级：🌟 值得关注，🌟🌟 建议阅读，🌟🌟🌟 优先精读；它不等同于结论可靠性，具体证据边界见每篇导读。"
description: "本期最值得注意的变化，是 Agent 研究开始从“任务做成了没有”转向系统边界：交接能否保留承诺，工具调用成功后外部状态是否一致，审计发现危险时控制器会不会真的停下，以及经理式回修是否反而制造迎合。另一条主线聚焦自我改进与长期运行：harness、技能、探索策略、会话记忆和科学工作流都在尝试把经验变成可复用、可验证的状态。星标表示本期阅读优先级：🌟 值得关注，🌟🌟 建议阅读，🌟🌟🌟 优先精读；它不等同于结论可靠性，具体证据边界见每篇导读。"
---

# arXiv Agent 与大模型研究简报｜2026-09-15｜入选论文全览 1/2

本期最值得注意的变化，是 Agent 研究开始从“任务做成了没有”转向系统边界：交接能否保留承诺，工具调用成功后外部状态是否一致，审计发现危险时控制器会不会真的停下，以及经理式回修是否反而制造迎合。另一条主线聚焦自我改进与长期运行：harness、技能、探索策略、会话记忆和科学工作流都在尝试把经验变成可复用、可验证的状态。星标表示本期阅读优先级：🌟 值得关注，🌟🌟 建议阅读，🌟🌟🌟 优先精读；它不等同于结论可靠性，具体证据边界见每篇导读。

本期入选论文全览。

## Agent系统与工具使用

### 跨模型交接不必从头再来

Do Not Restart: Residual Completion for Stateful Agent Handoffs

🌟🌟🌟

CFRC把跨模型交接定义为受承诺约束的剩余任务完成，冻结已接受进度并用实时回执关闭未尽义务。五个环境和跨供应商结果有说服力，但正确性依赖残余契约完整，当前只验证单次廉价到强模型交接。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13800)

### 让 Agent 在历史搜索树里“做梦”改进探索策略

Dream-RSI: Recursive Self-Improvement through Evolving Worlds

🌟🌟🌟

Dream-RSI把历史发现树变成可回放模拟器，低成本评估并改进探索策略，再把新策略部署回真实搜索。三类发现任务展示成本优势，但搜索空间均可执行且反馈清晰，历史模拟器的偏差和安全边界分析有限。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14858)

### 工具调用都成功，工作流仍可能留下错误外部状态

When Tool Calls Succeed but Workflows Fail: Anomalies at the Agent-Tool Boundary

🌟🌟🌟

论文用效果历史模型系统列出Agent工具边界的八类外部副作用异常，并指出黑盒调用无法提供四类一般保证。理论分类和98291个MCP工具普查覆盖广，但尚无端到端运行时实现，部分保证边界仍待形式证明。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15397)

### Agent 技能修复不能只靠一次反思

RESKILL: Explicit Failure Attribution and Structured Repair for Interactive Language Agents

🌟🌟

RESKILL维护跨轮修复状态，把失败假设、局部技能补丁和复测结果显式关联，避免一次性反思。三模型六组合均领先且预算固定，但只在ALFWorld、TextCraft即时可复测环境验证，延迟反馈工具链尚未覆盖。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15684)

### 有检查点，不等于 Agent 可以安全续跑

Recoverability as a System Primitive for Long-Horizon AI Agents

🌟🌟

论文把长程Agent恢复定义为独立系统原语：只有证据支持的起点与动作才能自动续跑，否则必须拒绝恢复。契约和对照挑战揭示成功结果也会掩盖违规恢复，但实验规模小、策略可信性与真实开放环境仍在假设之外。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13672)

### 工具不用也会干扰模型回答

When Tools Get in the Way: The Effect of Unnecessary Tool Availability on LLM Answering

🌟🌟

配对实验发现，仅仅暴露一个相关但不必要的工具，就会让模型对本可直接回答的问题大幅少答。500对问题和六模型揭示强效应，但每条件单次运行、无置信区间且裁判同家族，效应大小需复现。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14157)

### 百万 token 会话不必全塞进上下文

Pull: Lazy Materialization of Working Memory for Stateful LLM Conversations

🌟🌟

Pull用本地确定性目录延迟展开会话历史，使未注入的旧轮次仍可按需恢复，而非永久摘要或截断。百万token与受控路由实验支持架构价值，但主实验同模型生成评测、代码域实体较密，生产数据无A/B。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14773)

### 把 Agent harness 拆成五个模块再自我改进

ModularRSI: Modular and Generalizable Recursive Harness Self-Improvement

🌟🌟

ModularRSI用成败轨迹对比定位重复缺陷，并分别演化Agent循环、工具、观察、上下文和完成检测五个模块。基准外任务和跨模型迁移增强泛化证据，但缺少单独隔离对比分析的消融，且只用2000任务子集。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14857) · [代码](https://github.com/IQuestLab/ModularRSI)

### 把敏感真值留在本地，让远端模型只看受保护视图

Semantic-TVM: Structure-Preserving Trustworthy Virtual Memory for Memory-Augmented and Tool-Using Agents

🌟🌟

TVM把精确敏感值留在本地，只给远端LLM可恢复句柄或敏感片段投影，并在可信执行时绑定恢复。隐私—效用权衡数字清楚，但只测两供应商两流程，指标仅覆盖可检测精确泄漏而非语义推断。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15011)

### 先探索再记忆，让 Agent 无训练适应新环境

RSIAgent: Autonomous Exploration for Recursive Self-improvement in New Environments

🌟🌟

RSIAgent让课程、执行和验证Agent在新环境中先广后深探索，并冻结可复用的动作—条件—结果因果记忆。OSWorld-v2与Agent's Last Exam显示强提升，但额外探索成本高，验证器错误会进入记忆，组件贡献未完全隔离。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15364)

### 让数据 Agent 的语义层自己构建、验证和演化

EvoOntology: A Self-Evolving Ontology Layer for Data Agents

🌟

EvoOntology把模式、内容和工具语义封装成可查询MCP ontology，并通过归因式编辑和配对门控持续演化。对折互换避免明显测试泄漏且覆盖六骨干，但三套数据Agent基准之外的ontology维护成本与错误累积未充分分析。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15779)

### 急诊值守暴露 Agent 的长程执行缺口

Asclepius: An Adaptive Harness for Long-Horizon Clinical Agents

🌟🌟

Asclepius针对急诊整班次Agent的指令漂移、治疗遗漏和时效公平差距，用自进化手册、技能库与隔离子Agent协同修复。留出批次和多裁判复核增强可信度，但仍是单一临床模拟器，时间性总体增益在留出集上未显著。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13543)

### 把 1283 个 Web 工具收缩成真正用得上的 33 个

AutoTailor: Automatic, User-Aligned Capability Selection and Adaptation for Web Agents

🌟🌟

AutoTailor从浏览器轨迹合成MCP API，再按质量、使用概率和在线缺口维护紧凑工具集。成本与正确率的拆分清楚，但只在WebArena Postmill的106题上验证，动态工具演化的跨站点稳定性未知。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13548)

### 科学 Agent 需要的不只是代码执行，更是可恢复会话

OpenAI4S: Code as Action, Science as Sessions

🌟

OpenAI4S以持久Python/R内核、追加式动作账本、版本化产物和检查点支撑可恢复、可审计的科学会话。36个场景显示交付和审计优势，但完整系统的模型、提示、工具和算力未匹配，无法归因单个组件，完全复现仍弱。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15096)

### 从单一技能优化走向混合技能路由

MOSCOPT: Mixture-of-Skills Collective Optimization for LLM Agents

🌟

MOSCOPT联合优化一组可互补技能和选择它们的门控技能，替代单模板的提示或技能优化。五基准、三目标模型和消融覆盖较好，但正文实验统一依赖Qwen3.6-Plus后端，后端敏感性仍需检验。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14399)

### 把算法发现变成会积累经验的交互式搜索

AlgoEvo: Self-Evolving Agentic Search for Automated Algorithm Discovery

🌟

AlgoEvo让Agent按运行反馈诊断和编辑算法代码，并用技能中心与层级经验在任务内累积、任务间迁移。六个算法任务显示评估效率，但复杂多组件场景token开销高，跨不相似任务的迁移减弱。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15820)

## RAG与知识检索

### RAG 压缩后的引用，可能只对摘要正确

The Attribution-Compression Frontier in Retrieval-Augmented Generation

🌟🌟🌟

论文显示RAG压缩后的引用若只对摘要核验会严重虚高，必须回溯源片段衡量可归因性。固定生成器、两基准和多压缩器对比严谨且主动限定结论；关键NLI评估器缺少独立人工校准。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14245)

### 深度搜索的第一步，决定后面能否串起证据

Question's Gambit: The First Move Matters in Agentic Deep Search

🌟🌟

Question's Gambit在深度研究循环前先拆线索、发互补查询、合并重排，为后续搜索建立更好的开局上下文。BrowseComp-Plus全量与MultiHop-RAG控制集支持收益，但只测固定语料和BM25候选，实时Web与误导性开局未覆盖。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14412)

### 文档排版会重新分配搜索答案里的引用信用

CITECHOICE: A Causal Audit of How Document Presentation Redistributes Citation Credit in Agentic Search

🌟🌟

CITECHOICE用冻结搜索轨迹的2×2重放，因果检验文档呈现方式如何重新分配引用信用。哈希核验、盲审和重复解码很严谨，但只有113对日常查询，无法证明一般排序效应或来源准入机制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15164)

## 多智能体与协作

### 经理反复打回，可能让多 Agent 团队更差

Loop-Back Authority in LLM Agent Teams: A Paired Experiment on Flat and Hierarchical Coordination

🌟🌟🌟

严格配对实验只改变经理是否能打回修改，发现层级式回修让开放式报告更含糊、更昂贵，而非更好。因果隔离设计清晰且有留一裁判检查，但仅43对单一商业报告，事实性也未测。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14767)

### 多 Agent 协作不是越多越好，要按题目难度购买

Learning How Much to Collaborate: Difficulty-Aware Topology Selection for Multi-Agent Code Generation

🌟🌟

DATS按题目难度动态选择单Agent或不同协作拓扑，避免简单任务为层级团队支付固定高成本。614道代码题、四个骨干和跨域数学验证较强；特征与拓扑集合仍是预设的，开放任务迁移待验证。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13890)

### 用遗传算法组织多 Agent 发现科学假设

HypoEvolve: Genetic Algorithms Enable Multi-Agent LLMs to Discover Scientific Hypotheses

🌟🌟

HypoEvolve用遗传算法显式组织专业Agent对假设种群做选择、交叉和突变，并用外部生物证据评估药物再利用。34癌种与留出分析比纯LLM裁判更扎实，但外部指标只验证靶点关联，不能证明机制或疗效，模型调用成本高。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15938)

### 多 Agent 如何把长证明组织成可验证研究流程

Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and Theoretical Computer Science

🌟

Stellar Colosseum先并行探索策略，再通过成熟度门控拆分证明，并把验证器发现路由回相关子问题。研究案例、TCS-Bench和竞赛编程结果亮眼，但开放问题新结果依赖后续论文验证，推理预算和基线匹配不够透明。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15983)

### LLM 团队会讨论，却更容易过早随大流

From Process Loss to Assembly Bonus: Human-Grounded Diagnosis of Multi-Agent LLM Collaboration

🌟🌟

通过约2.6万次群聊对照人类小组，论文发现LLM团队虽复现“组装增益”，却更早趋同、更少呈现独有信息。人机匹配与过程指标规模扎实，但任务均有客观答案，主观协作和更多编排协议仍未覆盖。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13261)

## LLM训练与对齐

### 让模型口头接受奖励黑客，并不能阻止后续错位

Shallow Beliefs: Synthetic document finetuning does not inoculate against emergent misalignment from reward hacking

🌟🌟

论文发现，用合成文档让模型在中训阶段“相信”奖励黑客可接受，并不能阻止其后RL诱发的广泛错位。对照揭示表层信念与后续泛化分离，但结论受测试规模、具体奖励黑客环境和合成文档设定限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.14998)

### 用 128 道“做不出”的题训练推理模型

Unlocking the Unsolvable: Teacher-Guided Curriculum for Data-Efficient RLVR

🌟🌟

MFC用强教师的部分推理轨迹把原本全失败的数学题变成逐步撤除提示的RLVR课程。两个小模型、九个基准和pass@k分析支持数据效率结论，但仅数学单轮任务且依赖固定教师。

[阅读论文 PDF](https://arxiv.org/pdf/2609.13997)

### 安全答案背后，也可能藏着不安全推理

Beyond Safe Answers: Segment-Aware Listwise Alignment for Reasoning Safety in Large Reasoning Models

🌟🌟

SaLT-DPO分别对推理段和答案段做listwise安全对齐，并以最弱环一致性及良性效用锚抑制“答案安全、过程不安全”。三种7B至8B模型和消融较完整，但训练分数依赖GPT-4o-mini，段级评分仍会漏掉局部及跨段组合风险。

[阅读论文 PDF](https://arxiv.org/pdf/2609.15517)
