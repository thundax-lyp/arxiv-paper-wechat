---
title: "arXiv Agent 与大模型研究简报｜2026-11-24｜入选论文全览 1/2"
author: "Thundax"
summary: "本期关注模型与执行框架的分工：实时代理如何跟上环境，研究代理怎样保存试验，以及工具只返回部分结果时如何复核。另外几项工作讨论了把长任务拆成短调用，以及如何衡量安全评测和蒸馏带来的差异。"
description: "本期关注模型与执行框架的分工：实时代理如何跟上环境，研究代理怎样保存试验，以及工具只返回部分结果时如何复核。另外几项工作讨论了把长任务拆成短调用，以及如何衡量安全评测和蒸馏带来的差异。"
---

# arXiv Agent 与大模型研究简报｜2026-11-24｜入选论文全览 1/2

本期关注模型与执行框架的分工：实时代理如何跟上环境，研究代理怎样保存试验，以及工具只返回部分结果时如何复核。另外几项工作讨论了把长任务拆成短调用，以及如何衡量安全评测和蒸馏带来的差异。

本期入选论文全览。

## 智能体系统与工具使用

### 让视觉智能体在下一次推理前继续行动

AutoPILOT: A Visual Agent Harness for Real-Time Gameplay

🌟🌟🌟

实时游戏会在模型等待下一次推理时继续推进。研究让视觉智能体把短动作、固定动作串或基于画面反馈的控制器交给执行层。同一模型和预算下，实时成功率从百分之三十八点三升至六十八点六。结果来自游戏环境，控制器能否应对真实设备的噪声和安全约束仍待检验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28202)

### 自动研究智能体该如何保留试验记录

Demystifying the Autoresearch Harness: How Context and Skills Shape Self-Evolving Agents

🌟🌟🌟

自动研究智能体做过许多试验后，容易忘掉早期失败的具体条件。研究在统一框架比较多种记忆策略，发现为每轮保留可单独回查的简档，在三种模型与两类任务的六组比较中都胜过只保留近期内容。两类任务都有可执行反馈，开放研究能否重现结果仍待检验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28244)

### 把独立复算接入跨周材料研究

MatHarness: Towards Long-Horizon Open-ended AutoResearch for Computational Materials Science

🌟🌟

跨周自动研究的难点之一，是结果出来后能否发现自己的解释过头。材料研究智能体在铜锌表面的计算中保存研究档案、反复检查计划，并请独立审计者复算。系统六次修改计划，审计还纠正一项过强归因。研究只覆盖一个高算力课题，材料结论也仅适用于所采样条件。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28324)

### 用可改写的视觉记忆应对探索后的未知问题

EvoViM: Recursively Self-Evolving Visual Agents for Exploration with Deferred Queries

🌟🌟

探索结束才知道问题时，一段固定摘要很容易遗漏关键画面。研究让冻结模型把原图与像素处理规则保存在程序里，再沿失败轨迹修改存储和检索策略。视觉保存与跨代修改经验都帮助了所测环境中的任务；结果尚不能推广到开放场景。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28574)

### 贴合点云还不足以重建可用的工程模型

From Point Clouds to Engineering Models: Benchmarking Agentic 3D Reconstruction in the Built Environment

🌟🌟

扫描点云能帮助编码智能体修正尺寸和位置，却很难提醒它漏掉某个构件或违反连接规范。在一百二十八个工程场景中，领先系统的五厘米几何覆盖率达到百分之九十六，但没有系统能在超过百分之三十八的场景通过全部工程检查。部分扫描未公开，仍需独立验收。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28197)

### 在调参的三个决策点调取不同的经验

Engram: Multi-Stage Memory for Agentic Tuning of Heterogeneous Models

🌟🌟

给调参代理一堆历史试验，未必能阻止它重走弯路。研究分别在任务开始、生成假设和提交试验前提供证据，并记录历史操作的理由。在两个广告模型上，达到不带记忆对照的成绩平均少用百分之四十七的试验。能否迁移到其他模型业务仍待验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28356)

### 让现场处置反馈回流到运维手册

Human-in-the-Loop Runbook Improvement with Agentic Support Automation

🌟🌟

智能体可以辅助值班人员按手册处置事件，并在事后提出修订。研究在十七周内观察二百三十二起生产事件，记录到恢复时间下降趋势，却没有建立趋势与代理干预的因果联系。案例的价值主要在于把实际处置、人工审查与文档维护连接起来。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28441)

## 大模型推理与规划

### 递归调用让短任务训练迁移到长任务

Language Model Harnesses can be Compositional Generalizers

🌟🌟🌟

短任务训练能否支持长输入，取决于智能体怎样切分工作。该研究让主模型用程序检查外部上下文，把长输入转为熟悉的短子问题。实验中训练迁移到了长度为原先二到六十四倍的任务，一些共享分解结构的领域也能受益。子问题难以独立求解时，这套优势未必成立。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28298)

### 让解码器提前填入结构化输出的必然片段

Grammar-as-a-Draft: More Tokens per Speculative Decoding Step on Grammar-Constrained Structured Outputs

🌟🌟

模型生成结构化结果时，有些括号、字段名和分隔符已被语法唯一确定。研究直接把这些片段排入推测解码草稿，两套实现中均减少了逐步验证，所测单请求提速超过两倍。固定切词会改变输出分布，结构化请求与普通文本混跑时也可能拖慢后者。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28349)

### 让选项和图像换序后更少改变答案

Reducing Permutation Sensitivity in Multimodal Large Language Models via Shared Positions and Attention-Only Distillation

🌟🌟

交换选项或图片的位置可能改变模型答案，即使任务的含义没变。研究让同类输入共享位置，再用原模型蒸馏更新注意力，以补回结构调整损失。所测换序敏感度有所下降；当时间、空间或阅读顺序本身携带信息时，不能把输入当作可任意交换的集合。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28612)

## 检索增强生成与知识检索

### 企业智能体需要理解某个时刻的项目状态

Taking the PULSE of Enterprise Workflows: Evaluating Persistent Project-State Understanding

🌟🌟

查到每份项目文档后，助手还得回答哪些事项未结、哪条决定已失效，以及谁可以看到新情况。研究以三十段项目历史测试多种检索方法，发现取证是主要瓶颈，提供正确证据后再给显式状态仍可提升成绩。离线重建没有覆盖实际协作中的全部变化。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28374)

### 用逐跳原句给多步检索答案加权

SupportChain: Trace-Calibrated Aggregation of Quote-Grounded Reasoning Chains for Multi-Hop RAG with Small Readers

🌟🌟

多跳检索答对了最后一项，还可能在中间连错人物或事件。研究为每跳绑定检索到的原句，以轨迹特征估计可信度，再合并答案。在一项多跳测试中，九十亿参数阅读模型达到六十三分，高于所列二百亿参数方案。多次检索会增加开销，引用本身也不保证推理正确。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28519)

### 让检索阅读模型不再押注证据位置

Make Position Uninformative: Exchangeable Self-Distillation Flattens the Lost-in-the-Middle Curve

🌟🌟

检索结果里，答案材料排在中间时常被模型忽略。研究把它均匀放到各个位置并打乱干扰资料，让训练中的位置不透露答案，教师目标则来自模型单独阅读正确文档的回答。六个模型平均和最坏位置表现均提高；需要联合多份证据的任务仍有待检验。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28638)

### 沿证据图寻找散落在科研论文里的信息

GERF: A Token-Efficient Multimodal Retrieval Framework for Schema-Guided Scientific Information Extraction

🌟🌟

科研文章的关键条件可能分散在图、图注和正文中。研究把待抽字段与这些材料连成证据图，先找直接相关段落，再循图补找上下文和图像，只处理被选中的图。实验证明检索与输入开销有改善空间，但找到了材料也可能抽错字段，两个指标需要分别观察。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28295)

## 多智能体与协作

### 共享失败日志让小模型接力改写程序

Diversity over Scale: Recursive Self-Improvement with Ensembles of Small Open-Weight Models

🌟🌟

多个小模型优化同一程序时，可以让它们看到彼此试过的想法和报错。研究每轮执行各自的候选，只把表现最好的版本推进到下一轮。在二十二项机器学习竞赛中，集成测试误差低于成员均值，也低于所选七百亿参数模型；效果仍依赖模型组合与评测环境。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28420)

### 智能体投票一致时也可能需要复核

Selective Verification in Multi-Agent Orchestration with Large Language Models

🌟🌟

多人投票接近时值得复查，但共享证据出错也会让团队异常一致。论文枚举九票系统的所有结果，在固定预算下比较按票差、随机和按风险核验。共同错误严重时，优先查接近票甚至逊于随机。数值来自合成假设，真实团队应先估计共同错误概率。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28173)

## 大模型训练与对齐

### 蒸馏时隐藏学生推理，减少多轮智能体的输出

Muted Distillation: Sealing Reasoning from Teacher Unlocks Token-Efficient Agents

🌟🌟🌟

在多轮任务中，学生模型边行动边产生推理，常规蒸馏可能让它学得更啰嗦。研究在教师评分时遮住学生的思考文本，保留行动和工具反馈。两个知识工作基准的输出分别减少百分之五十七和五十三，正确率基本持平或提升。方法要求框架能分开表示思考与行动。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28445)

### 较弱教师也能帮助学生学会推理

Contrastive On-Policy Distillation via Dual-Branch Supervision

🌟🌟

弱教师答题不如学生，也可能指出强教师监督遗漏的错误模式。研究让两个教师和学生在同一生成前缀给出预测，再对照不同候选词元。所测数学任务的十六次尝试成功指标较最强基线最多提升七点五一个百分点。多位教师增添训练开销，怎样筛选对照仍依任务而定。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28359)

### 在训练中逐步撤去视觉工具

Tool-to-Self: Internalizing Visual Tool Capabilities via Scaffolded Reinforcement Learning

🌟🌟

视觉工具能教模型看清局部内容，但上线后每次执行都会带来成本。研究先用外部工具提供真实观测，再在训练中逐步取消调用，要求模型预测工具结果。多组视觉理解任务相较匹配训练对照有提升；输入编码已经丢掉的细节，仍不能靠预测工具来恢复。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28564)

### 训练经历怎样影响模型记住可复用规则

Internalized Experience: How Training Data Shapes Memory Formation in LLMs

🌟🌟

同一条操作规则，和很多其他动作一起训练时可能反而更难掌握。研究用状态转移构造可控制的训练经历，并在合成世界、经典规划与代码执行中比较规则复用。行动覆盖范围与练习结构都会影响结果，但开放任务不一定有可明确写出的状态和动作。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28613)

### 从极少视觉交互轨迹蒸馏操作能力

Distilling Visual Agents from Limited Interaction Experience

🌟🌟

视觉操作蒸馏可以在原有交互历史上让学生重试决策。研究按技能和视觉情境筛选四条代表轨迹，所测四十亿参数模型的标准导航成功率从约百分之四十九升到八十二，推箱任务也明显改善。任务结构有重合，证据不能推广到全新的视觉技能。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28618)

### 让合成问卷答复保留群体差异

Distributionally-Verifiable Rewards for Human-Behavior Simulation

🌟🌟

用语言模型模拟受访者，答中每个人的选项与还原群体意见分布可能互相牵制。研究按题目和人口类别比较作答频率，把组内偏差反馈到训练。留出题上的分布散度降低约一成半，单条作答准确率基本保住。研究只覆盖一套调查的单属性分组，交叉人群能否还原仍未知。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28048)

### 从离线平行文本学会何时开始翻译

SnakeTranslate: Weakly Supervised Policy Learning from Offline Parallel Text for Simultaneous Translation

🌟🌟

同声翻译系统得边接收原文边决定何时开口，但成对译文通常没有读写时机标注。研究从普通平行文本推导训练信号，在单条交错历史上学习两种动作。多个基准的低延迟区间受益，高延迟时部分大模型仍占优，训练还依赖内部语料和教师。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28055)

### 用干预数据减少下一词预测对捷径的依赖

CausalNTP: A World-Model Recipe for Causal Next-Token Prediction under Noisy Training-data

🌟🌟

模型在训练集看到的高频线索，换环境后可能马上变成误导。研究用已知因果结构生成多种数据视图，要求模型在干预后保持对真正相关线索的判断。合成设定的分布外结果优于常规训练，也做了问答概念验证；开放文本中怎样得到有效反事实仍是难题。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28369)

### 给模型多练那些确实能靠视觉工具解开的题

From Reward Engineering to Data-Centric Reinforcement Learning for Effective Agentic Visual Tool Use

🌟🌟

训练视觉代理时，奖励它多调工具可能刺激无谓的调用。研究对比缺少与补齐视觉观测的结果，把训练采样转向当前模型确实能从工具受益的题，奖励只看最终答案。多套视觉任务报告收益；开放任务缺少容易验证的答案时，归因和采样仍是难点。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28558)

### 让硬件代码训练数据经过逐级可执行验证

VeriLadder: A Multi-Agent Specification Refinement System for Tool-Verified Verilog Datasets

🌟🌟

硬件代码能综合通过，也可能没有实现文字规格，甚至生成空电路。研究让智能体逐级审查和改写规格，用综合及形式等价工具确认候选，并保留失败样本。一套语料约有四分之一的设计未通过综合；验证所用参考组件仍可能遗漏需求。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28617)

## 评测与安全

### 工具少返回数据时，智能体为何会编造答案

When Tools Fail, Agents Fabricate: Silent Failure and Verification-First Oversight in Tool-Using LLM Agents

🌟🌟🌟

工具明确报错时，智能体常能报告失败；看似正常的部分结果却容易被当成完整事实。研究在带真值的沙箱内注入九类故障，发现核验优先的监督器能把正确恢复率从百分之四十五点六提高到五十六点三。任务和故障可控，动态生产服务的收益仍需独立测量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28341)

### 红队评测会随有害性判据改变

What Counts as Attack Success? Evaluating Harmfulness in Red Teaming LLMs

🌟🌟🌟

红队报告里的成功率取决于如何界定危害。研究回顾七十六篇论文，并让八个判定器查看同一批答复。某些判定器对哪个模型更容易被诱导给出相反结论，人工标注则显示两者接近。参考标注来自一名作者，实验也只覆盖英语和一套测试指令。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28038)

### 让模型拒答对内部表征改动更稳健

INSEP: Refusal-Direction Inseparability as a Defense Against Abliteration

🌟🌟

模型权重被改动后，安全拒答可能失效。研究用小规模适配削弱有害与良性输入在拒答相关表征上的可分性，同时约束正常答复质量。在八个模型的平均综合结果上，这项防御排在被比较方案首位。对非线性或多方向的拒答行为，结果仍需要单独验证。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28314)

### 持续更新的游戏榜单该如何节省对局

Schedule, Rank, Profile: Continuous Evaluation of LLM Agents in Games

🌟🌟

反复更新智能体竞技榜单时，所有模型全量两两交手很贵。研究把比赛预算分给尚难区分的模型对，以游戏为单位平衡证据，并标注每种游戏考查的技能。在十款游戏的持续评测中，这套做法减少了无须加测的比赛；总榜仍受游戏组合和能力覆盖限制。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28368)

### 用同一道分析题比较查询语言和数据框代码

BIRD-Persona: A Persona-Aware Benchmark for SQL and pandas Analytics Code Generation

🌟🌟

把同一分析需求分别交给查询语言生成器和数据框代码生成器，哪个更可靠？研究用配对答案控制任务含义，并改写成初学者或专家口吻。九个系统中有八个在查询语言上准确率更高。数据来自一套现有基准，真实用户的临场措辞可能不同。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28542)

### 让智能体花钱的能力可以怎么测

Agent Money Benchmark: Can AI Agents Be Trusted to Spend Money?

🌟🌟

给智能体支付权限后，重要的是它按预算买到了什么。研究把报价、付款和研究答案串在一起测试。十二个模型中三个在八十个付款任务中完成七十九个且无预算或支付错误，九个至少踩中一次有问题的报价。测试限于购买信息，长期支出行为仍未知。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28610)

### 用遮盖敏感性检查扩散语言模型的后门

Mitigating Backdoors in Masked Diffusion Language Models

🌟🌟

扩散语言模型会反复预测被遮盖的位置，这给防御者提供了检查后门的线索。研究比较遮盖前后的预测变化，结合参考模型排查异常词，再验证定位和修复效果。两类证据互补，效果仍依赖参考模型质量，以及测试涵盖的后门类型。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28640)

### 多智能体工作流的排名会随运行环境改变

The Evaluation Substrate Matters: Benchmarking Multi-Agent Serving Substrates

🌟🌟

两种协作编排的速度排名，在更换运行底座后可能互换。研究用同一候选和任务跨环境、跨负载运行，成对收集质量、时延、资源压力和失败记录。结论表明报告架构优势时也要交代服务条件；具体排名随硬件和负载分布变化。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28671)

### 模型明明知道游戏规则，为什么仍用现实物理作答

Multimodal LLMs Know the Game but Assume the Real World

🌟🌟

模型可以用语言解释游戏规则，看截图时却可能照搬现实物理。研究对同一批引擎验证题分别给文字、截图和写明游戏名的截图。在游戏与现实冲突的题上，点出游戏使六个模型提高八到近二十个百分点。实验来自单一游戏，不能外推到所有视觉环境。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28745)

### 单轮隐私结论不能直接代替多轮检索评测

Beyond Single-Turn Privacy: Training-Data Leakage in Conversational RAG

🌟🌟

检索增强能减少训练数据泄漏，但对话变长后结论需要逐轮检查。研究把已出现在本轮输入里的联系方式排除，少算了约三成至五成原始匹配。检索在三个模型中减少了披露，风险仍然存在；测试局限于较早开放模型和一种敏感信息。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28748)

### 合成受访者的分歧远小于真实人群

Language models compress human preference geometry while political structure remains prompt-sensitive

🌟🌟

语言模型即使给不同人套上不同背景，也可能生成过于相似的政治偏好。三国配对政策调查的对比显示，模拟受访者的潜在偏好方差只及真人参考的很小一部分。提示改写能改变部分群体结构，整体离散性依然偏低；证据局限于配对政策选择。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28383)

### 机构场景中多智能体讨论会改变哪些请示

DiscernBench: Evaluating Cooperative Discernment of LLM Agents in Institutional Settings

🌟🌟

机构助手遇到棘手请求时，要在服从、拒绝与上报之间判断。研究用实际事故改编场景，比较不同决策配置，发现按专长分工的会商没有稳定提高表现，个别专家有时能左右最终判断。书面情境还不能再现真实机构的权责和动态信息。

[阅读论文 PDF](https://arxiv.org/pdf/2611.28787)
