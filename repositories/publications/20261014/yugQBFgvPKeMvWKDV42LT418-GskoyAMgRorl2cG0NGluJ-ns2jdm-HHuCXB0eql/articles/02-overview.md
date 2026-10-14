---
title: "arXiv Agent 与大模型研究简报｜2026-10-14｜入选论文全览 1/2"
author: "Thundax"
summary: "本期关注智能体怎样选择工具、保存执行状态与核验研究证据，也追问自改进的涨分是否真能迁移。训练和部署成本之外，多篇工作提示：局部动作正确、最终答案正确与可靠交付，需要分别测量。"
description: "本期关注智能体怎样选择工具、保存执行状态与核验研究证据，也追问自改进的涨分是否真能迁移。训练和部署成本之外，多篇工作提示：局部动作正确、最终答案正确与可靠交付，需要分别测量。"
---

# arXiv Agent 与大模型研究简报｜2026-10-14｜入选论文全览 1/2

本期关注智能体怎样选择工具、保存执行状态与核验研究证据，也追问自改进的涨分是否真能迁移。训练和部署成本之外，多篇工作提示：局部动作正确、最终答案正确与可靠交付，需要分别测量。

本期入选论文全览。

## 智能体系统与工具使用

### 工具参数结构会改变模型选择谁

Which Metadata Matters for LLM Tool Selection in MCP? Evidence from Controlled Factor-Level Interventions

🌟🌟🌟

模型挑工具时，参数结构也在传递语义。五模型五任务的单因素实验平衡工具位置，发现独立顶层参数通常更受偏好，明确需求则能压过位置偏差。开发者应一起检查模式和顺序；研究只测单轮英文选择，并未证明选中的工具会被正确调用。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14334)

### 程序化工具训练把中间状态留在运行时

ProgAgent: Learning Tool Orchestration through Programmatic Training

🌟🌟🌟

把工具返回值保存在程序变量里，能够减轻对话上下文累积。作者将这一机制用于训练，以可验证任务、持久沙盒和两阶段学习教会控制流与选择性输出。140亿参数模型在6.4万词元状态任务通过率30.7%；复杂视觉环境仍常退回单次工具调用，说明代码接口本身不足以保证高效编排。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14774)

### 让智能体用自身失败生成下一轮练习

ClawLoop: Self-Improving Agents via Harness-Native Training Loop

🌟🌟

智能体训练能否由自身失败推动？这项工作让同一模型生成可执行练习、验证难度，再用成功轨迹和强化学习更新，最后诊断下一轮缺口。270亿参数模型的技能任务成绩由46.3升至57.2；小模型也受益，但只使用大模型生成的课程，并没有完成自己的自改进循环。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14118)

### 云端写程序，本地模型解释私有数据

Should SLMs be in the Driver's Seat? A Study of Local Models as Interpreters in Cloud-Written Agent Programs

🌟🌟

云端先写程序，设备上的小模型只解释运行时出现的私有内容，能补上纯代码方案的语义缺口。六种模型与分区组合都改善，正常分区最高增加14.9个百分点。不过复杂任务增益较小，少量异常堆栈仍带出用户内容，设备能耗也尚未实测。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14209)

### 通过执行对照递归改进智能体框架

Harness^2: Recursive Agent Harnessing for an Open World

🌟🌟

没有标准答案时，执行框架怎样自行修改？作者提出候选、运行探测、对照行为并组合修改，再保存可复用经验。三个专业基准上一步修改都有增益，扩大搜索预算还可提高成绩。但判断仍来自模型和随机执行，额外探测有成本，不能保证采纳的修改在新任务上正确。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14224)

### 流式语音工具还需要最后一次取消机会

RASSG: Repair-Aware Semantic Survival Gating for Streaming Tool Execution

🌟🌟

语音没说完就调用工具，可以节约等待，也可能执行已被用户改口否定的参数。新控制器在稳定识别后启动，并在不可逆边界前最后核验风险、决定取消。受控修正集中过期执行率从50.00%降到3.15%；固定工具时长和取消延迟使结果不能直接外推到任意接口。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14659)

### 持续学习可能先忘记如何找到旧技能

When Skills Remain But Access Fails: Factorized Skill Memory for Continual Skill Internalization

🌟🌟

旧技能失败，可能先是请求找不到正确入口，之后才是执行能力被覆盖。研究把寻址器与冻结执行分片分开，在五阶段百项技能中平均精确匹配65.95%，接近保留历史数据的回放。分片随阶段增加，路由准确也不代表执行可靠，当前只测两种任务顺序。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15492)

### 个性化助手未必需要整段对话历史

Do Personalized LLMs Need the Whole Conversation? Matching the Full History with Only 5% of Its Text via Relevance-Filtered Context

🌟

个性化回答需要的是相关证据，未必是全部历史。句子检索只保留5%文本，在180道合成题上与完整历史差异不显著；只给标注证据的表现更好。但没有预先定义等价边界，摘要与检索看到的信息也不同，不能据此保证真实用户对话压缩二十倍仍等效。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14952)

### 激活记忆可能记住词，却用不好事实

What Survives When Activation Steering Is Used as Memory

🌟

向量记忆可能让模型说出一个词，却不能在新问题中正确使用事实。冻结模型实验中事实干净使用最多15%，文本上下文可达96%至98%；厌恶还可能被召回为喜欢。研究只含同族两模型和41个合成条目，仍说明事实、倾向和偏好方向需要分别检验。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14958)

### 自改进应同时维护功能与安全目标

Harmony Harness: Multi-Objective Self-Evolution of Agent Harnesses

🌟🌟

自改进若只优化总成绩，安全退化可能被功能增益盖住。作者保留功能与安全两个目标，分别演化通用组件和环境适配，再按任务组合。两个编码基准支持联合通过收益与迁移，但每分区约三十任务、单一提案与执行模型，尚不构成任意框架的安全保证。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15150)

### 对话失败后先定位被误解的那一步

Where Did We Go Wrong? Localizing Errors to Repair Multi-Turn Conversations

🌟🌟

对话失败可能源自某一轮推断错误，把整段历史丢掉会损失正确信息。概率控制器估计哪些更新排除了真实目标，再决定确认或撤销，恢复交互成本减少46%至79%。方法假设目标固定且候选可枚举；用户主动改变偏好时，旧约束未必就是错误。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15154)

## 大模型推理与规划

### 符号求解器训练需要检查语义等价

SAT-RL: Training Language Models for Logical Reasoning with Symbolic Solvers

🌟🌟

工具奖励若只看是否调用求解器，模型可能用一次导入命令骗过检查。作者先监督学习有效公式，再以等价性和执行反馈强化训练；去掉等价奖励后确实出现钻空子行为。方法适合固定逻辑任务，自然语言是否被忠实形式化仍是另一层问题。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14402)

### 循环记忆信号能帮助淘汰注意力缓存

GateSight: Recurrent Memory Anticipates Attention Memory for Query-Agnostic KV Eviction in Hybrid LLMs

🌟🌟

混合语言模型的循环层写入与遗忘信号，可能预告注意力缓存将来有多重要。作者训练小预测器，在预填充后按层淘汰并释放缓存；保留十分之一时，四组基准中三组领先比较方案。预测器需按模型重训，自身续写定义的效用也不保证所有生产问题保真。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14754)

### 可执行计算图能缩短部分推理轨迹

Structural Chain-of-Thought: Reasoning with Executable Computational Graphs

🌟🌟

模型生成可执行计算图，让最终答案由图运行得到，再用结构和正确性奖励训练。五组任务中四组相对监督图训练占优，部分轨迹缩短五至六倍，干预也支持答案依赖图结构。但复杂数学仍可能输给自由推理，开放定性任务未必适合这种表示。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15107)

### 求解器成功还需检查形式化忠实性

Sequent-Prover: Training Agents for Formal, Checkable SMT-based Reasoning

🌟🌟

求解器能验证公式，却不能替模型决定公式是否忠于问题。作者筛选非空且接地的多轮轨迹再训练，40亿参数四次全对率由64.1%升至91.7%，调用次数也减少。多数任务无参考形式化，接地检查只是语义代理；稳定可执行与正确抽象必须分别考虑。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15258)

### 低比特推理校准要带上此前的历史

RECAP: Calibrating Low-Bit Reasoning Models on the History They Read

🌟🌟

短片段量化校准可能看不到长推理真正读取的历史。作者保留前缀、轮换重建块，并按后续注意力加权键值误差；四比特下部分数学任务比基线高13.3和15.8个百分点。增益随模型变化，仍有全精度差距，也没有据此证明服务吞吐更优。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15259)

### 小模型多次验证重试可补偿部分容量

Fewer Bits, More Tries: Recovering Capability Under Memory Constraints

🌟🌟

单用户设备有空闲算力时，小模型并行重试再验证可补偿部分参数差距。70亿参数八次尝试在四个编码集上可匹配或超过320亿参数单次。时间与能耗优势取决于硬件，系统数字使用公开测试且不含生成测试费用；不可检验的开放任务未必成立。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15372)

## 检索增强生成与知识检索

### 深度研究先核验中间发现，再继续推理

PANINI-DR: Controlled Deep Research through Generative Semantic Workspaces

🌟🌟🌟

深度研究需要在继续检索前核验中间发现。共享工作区保存子问题与依赖，核验者检查引文支持和候选歧义；冻结语料下准确率73.3%，领先次优16个百分点。计算代价明显更高，且仅一个骨干模型，逐项核验也不能确保整体规划完整或开放网络事实可靠。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15208)

### 可移植技能能简化客服检索，但仍有代价

Frustratingly Easy Agentic RAG via Portable Skills: A Case Study in Customer Support

🌟🌟

成熟客服语料可以用导航索引、技能说明和少量脚本组织检索，无需专门微调。132案中流程匹配率99.2%，证据充分率83.3%，但处理约90秒，明显慢于生产助手。它展示的是特定语料上的维护方式；模型裁判、非匹配预算和逐案审核限制了通用结论。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14428)

### 检索缓存复用必须修复后续因果状态

SAFE-KV: Causal Suffix Repair for Behavior-Preserving Non-Prefix KV Cache Reuse in RAG

🌟🌟

文档缓存携带此前上下文，不能像独立文本块直接拼接。重新编码因果后缀可把两个问答集的原答案保留率恢复到接近完整计算，但单请求实测没有保真且更快的配置。主评测还把证据前置，说明这是缓存正确性契约与代价研究，而非现成加速方案。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15186)

## 多智能体与协作

### 团队记忆应保存依赖关系和验证状态

SEPM: Self-Evolving Procedural Memory Grounded in Task Graphs for Multi-Agent Collaboration

🌟🌟

团队复用经验时，动作顺序之外还需要保存先决条件和验证状态。共享任务图把在线偏离检查与执行后的程序记忆连接起来，在两个协作框架的三个基准中均取得最高比较成绩。当前表示采用无环图，开放循环协作尚未覆盖，也不能把收益单独归给存储结构。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14515)

### 企业协作风险要沿权限和证据边界追踪

EAIR: Interaction Risks in Enterprise LLM Multi-Agent Systems

🌟🌟

多个客服各自合规退款，合起来仍可能超过共享额度。企业风险框架沿权限、证据和交接边界审计微型工作流，再把诊断变成控制修复。五类各二十次复测共留下3次目标失误，但也发现新风险；可定位引文和小样本修复不能证明真实组织部署安全。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14800)

## 大模型训练与对齐

### 强化学习增益可能来自重新打开思考模式

The Thinking Leakage in Reinforcement Learning for LLMs

🌟🌟🌟

非思考模式的强化学习涨分，可能是在重新激活原模型的思考能力。作者用权重缩放、激活交换和注意力干预核对这一解释；80亿参数模型交换回原有思考子空间后，约75%的增益消失。证据比输出变长更直接，但来自特定模型族与数学任务，不能推广到所有强化学习。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14270)

### 多模态训练的配比不能照搬文本经验

Scaling Laws for Multimodal Data Mixtures

🌟🌟🌟

图像、语音和文本并不共享同一训练配方。作者以268次稀疏专家实验拟合容量、数据重复与模态干扰，发现音频更偏向增加模型容量，重复图像和音频约两轮后收益趋弱。留出损失预测较准，但系数依赖分词器与架构，不能直接套用到更大规模。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14423)

### 内部实验成绩上涨不等于泛化改善

Agentic Data Engineering for LLMs: System Design and a Controlled Empirical Study

🌟🌟

研究智能体在固定训练协议中搜索数据、奖励和课程策略，并用实验记忆更新假设。整体优于通用方案，却也出现内部成绩从47.78%升至54.44%、留出成绩从峰值46.67%退到41.11%的背离。适应反馈的能力和真正泛化需要分开测量，跨模型迁移仍未建立。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14238)

### 给失败轨迹中的关键分歧更强负反馈

PEARL: Process-Experience Aware Reinforcement Learning for Multi-Turn Agents

🌟🌟

失败轨迹不该每一步都受同样惩罚。作者比较同一历史下结局不同的分叉，记住首处分歧的重复失败模式，并用成功模式排除歧义，再加强对应负反馈。40亿参数家庭任务成功率达到97.9%。局部错误仍由结局反推，当前证据限于两个交互环境。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14636)

### 从真实产物的转变合成终端任务

WorkBorne: Discovering Agentic Tasks from Real-World Artifact Transitions

🌟🌟

训练任务可以从真实输入文件向目标产物的转变中发现，而非先写指令再拼环境。作者构建近八千环境、约一万五千轨迹，训练后270亿参数终端通过率从43.1%升至61.8%。部分基线来自报告，词串污染检测也不能排除语义重叠；轨迹长并不等于生产可靠。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14915)

### 推理与工具奖励可能相互拉扯

MCPDisCo: Seesaw-Mitigated Tuning for MCP-Native Agents

🌟🌟

工具强化训练中，推理奖励与动作奖励可能相互拉扯。作者按词元分配两类监督，再投影共享参数中的冲突梯度；40亿参数真实工具任务成功率由15.79%升至26.32%，思考输出略降。未见服务器测试支持迁移，但成功率仍低，梯度干预只是缓和而非彻底消除冲突。

[阅读论文 PDF](https://arxiv.org/pdf/2610.14956)

### 一次前向决策仍需保留不确定时的推理

Large Decision Models: Repurposing Large Language Models as Single-Pass Decision Makers

🌟

有限标签决策可以用一次前向返回概率，并把不确定项交给完整推理。多样模式监督和推理分布蒸馏在两测试集增加1.8和1.5个百分点，一组延迟大幅下降。但对验证选优基线的合成增益不显著，路由未测端到端服务成本，概率输出仍需校准。

[阅读论文 PDF](https://arxiv.org/pdf/2610.15501)
