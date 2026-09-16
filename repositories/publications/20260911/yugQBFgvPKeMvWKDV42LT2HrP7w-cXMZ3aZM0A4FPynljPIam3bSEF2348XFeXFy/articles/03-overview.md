---
title: "arXiv Agent 与大模型研究简报｜2026-09-11｜入选论文全览 2/2"
author: "Thundax"
summary: "本期主线是让智能体在行动前准备得更好、在执行中把资源用在关键位置，并在结果出来后留下可核对证据：从环境预习、记忆写入查证和GraphRAG策略，到沙箱内存压缩与Lean证明闭环。"
description: "本期主线是让智能体在行动前准备得更好、在执行中把资源用在关键位置，并在结果出来后留下可核对证据：从环境预习、记忆写入查证和GraphRAG策略，到沙箱内存压缩与Lean证明闭环。"
---

# arXiv Agent 与大模型研究简报｜2026-09-11｜入选论文全览 2/2

本期主线是让智能体在行动前准备得更好、在执行中把资源用在关键位置，并在结果出来后留下可核对证据：从环境预习、记忆写入查证和GraphRAG策略，到沙箱内存压缩与Lean证明闭环。

本期入选论文全览。

## 评测与安全

### 487起智能体事故揭示评测遗漏了什么

The Agent Incident Registry: Toward Preventing Repeated AI Agent Failures

🌟🌟

Agent Incident Registry收录2022至2026年的487起有来源事件，并按因果角色、机制和结果标注。与InjecAgent对照显示，公开事故含大量无攻击者触发的安全失败；该库描述收集构成，不能估算部署风险率。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11030)

### 深度研究智能体能否撑过十层证据依赖

Mr\.LHDR: A Benchmark for Multimodal Real-World Long-Horizon Deep Research Agents

🌟🌟

Mr.LHDR让每题平均经过12.1个必要中间结论和10.4层依赖，并加入真正改变推理状态的多模态证据。最强系统最终准确率43.1%，严格准确率34.3%；题目由隐藏图构造，仍不能覆盖全部真实研究。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11318)

### 低困惑度不能单独证明训练数据成员身份

Detectable Only Where It Is Confounded: What Verified Duplication Counts Say About Membership Evidence in Language Models

🌟🌟

研究利用公开训练语料的OLMo-2与Pythia核对真实重复次数，发现常用成员推断信号只在与重复、域和难度混杂时显得有效。它把“可检测”与“因果证据”分开；结论限于可验证语料和所测模型族。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10830)

### 把搜索轨迹变成证据流图

SearchAtlas: Analyzing Agentic Search Strategies via Evidential Query Graphs

🌟🌟

SearchAtlas将查询、检索证据和最终回答组织成图，自动解析相对人工标注的平均边F1为86.0%。跨五种搜索智能体，它能发现约束未传到答案、支持碎片化和参数知识混入；图解析错误仍会影响诊断。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10901)

### 论文新颖性评审的证据经得起核对吗

NovGauge: A Fine-Grained Benchmark for Diagnosing LLMs' Capability in Paper Novelty Assessment

🌟🌟

NovGauge把新颖性拆成任务、问题和方法三维，对619对论文和50个多论文集合检查判断、证据与逻辑支持。多数模型经过忠实性过滤后损失过半F1；标注来自ICLR评审和综述共引，仍受领域与专家判断限制。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11234)

### 可信文档也不能保证RAG回答安全

RAG-Safety-Bench: Reliable Evaluation of Retrieval-Augmented LLM Safety

🌟🌟

RAG-Safety-Bench把无检索、含危险答案、仅相关及随机安全文档四种条件分开，排除检索器质量混杂。五个开源模型显示基础护栏不保证RAG安全，且安全退化有模型差异；基准仅含英文与Wikipedia。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11758)

### 持续学习的更新门槛会不会把进步一起拦掉

When Validation Stops Learning: Auditing Update Admission for Continual Embodied Agents

🌟🌟

论文同时审计具身智能体更新门槛的错误控制和保留学习机会，指出区间置信门在现实交互预算内无法认证旧任务不变。它提醒安全验证也有机会成本；证据来自受控持续学习设置。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10873)

### 新模型的口头置信度可能比对数概率更实用

Rethinking Verbalized Confidence for LLM-as-a-Judge: A Compatibility Shift on Post-2025 Proprietary Models

🌟🌟

跨SummEval、AggreFact和HelpSteer2的研究发现，2025年后的顶级闭源模型用口头置信度做软评分更稳健；过度自信提示与自辩论还能改善校准。这个“兼容性转变”依赖特定模型版本，不能外推到旧模型。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10996)

### 文本噪声会让偏见评审凭空制造偏见

When Noise Fabricates Bias: The Fragility of LLM-as-a-Judge Bias Measurement under Noisy Text

🌟🌟

在3822条刻板印象相关回答上加入五类真实噪声后，LLM评审更常把中性误判为有偏见，最脆弱模型的制造与抹除比最高达120倍。稳健评审趋向平衡；结论针对所测噪声、类别和四个评审模型。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11067)

### 复现实验智能体要评过程而非只看仓库

Overview of the NLPCC 2026 Shared Task 11: Agent-Based Experiment Reproduction from Scientific Papers

🌟🌟

AgentActionBench用MCP记录器捕获复现论文的操作轨迹，并以论文特定量表评估150篇ML与AI4Science工作。实验显示执行是主要瓶颈；大规模量表含模型辅助扩增，只有10%有人类标注。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11117)

### 版本约束别让编码智能体在脑中硬算

SemVerBench: Benchmarking LLM Comprehension of Version-Constraint Resolution Semantics

🌟🌟

SemVerBench用240个机器可核验题测试npm、PEP 440和Cargo语义，发现所有模型都有可预测的边界规则盲点。轻量正确提示能恢复多数错误，调用免费解析器接近100%；这支持工具委派而非继续堆提示。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11180)

### 医疗模型答对标签也可能没遵循专家逻辑

Can LLMs Follow Medical Expert Logic? A Benchmark for Hierarchical Logical Consistency in Risk-of-Bias Assessment

🌟🌟

LogiMed-RoB按Cochrane风险偏倚层级逻辑评测10个模型。最佳模型原子一致性98.88%，端到端却降到45.13%，还有高盲猜率；它揭示证据到结论的断裂，但任务集中于单一医疗评估体系。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11185)

### 科学多模态推理卡在找全证据和整合证据

Sci-MMR: Benchmarking Multi-Step Evidence-Grounded Scientific Reasoning in Multimodal Agents

🌟🌟

Sci-MMR以论证图连接论文主张、引用知识、图像区域和中间结论。八个模型的答案准确率比完整证据恢复高出20点以上；57.2%失败来自证据获取，31.8%来自整合。论证图是合理重建而非唯一真值。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11243)

### 跨图像、视频和音频统一检测幻觉

OmniHallu: Unified Hallucination Detection for Cross-Modal Comprehension and Generation in Multimodal Large Language Models

🌟🌟

OmniHallu-Bench含一万条人工标注样本，覆盖理解与生成六类任务；多智能体先拆原子主张，再用模态专家核验，训练验证器可减少66%专家调用。共享感知盲点会让投票一起失效。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11244)

### 一次生成就从激活轨迹估计答案可信度

ActMap: Single-Pass Uncertainty Quantification from Generation-Time Activation Maps

🌟🌟

ActMap把每层、每个生成token的隐藏状态压成固定激活图，用轻量分类器预测正确概率。三个7–8B模型上优于采样和概率基线，且比稠密激活检测器小67倍；需要白盒访问和部署域标注。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11498)

### 模型会识别拓扑，却不会在行动中保持拓扑

MindTopo: Can Foundation Models Reason in Topological Space?

🌟🌟

MindTopo用五类拓扑性质、13种程序化任务同时测静态推理和闭环规划。14个多模态模型都在规划上更差，最佳模型61.42%远低于人类97.87%；程序化场景与训练收益未必代表真实空间。

[阅读论文 PDF](https://arxiv.org/pdf/2609.11900)

### 长期智能体评测不能只看任务是否完成

Finishing the Task Is Not Enough: Evaluating Agent Resilience and Considerate Participation under Accumulating Challenge

🌟🌟

论文把运行韧性与对协作人的体谅作为长期智能体的两条评测轴，在累积故障的医疗工作流脚本中分析恢复、边界沟通和角色影响。研究覆盖120条轨迹，但只评语言级动作，未验证真实工具后果。

[阅读论文 PDF](https://arxiv.org/pdf/2609.10724)
