---
title: "arXiv Agent 与大模型研究简报｜2026-11-23｜入选论文全览"
author: "Thundax"
summary: "本期从三个问题看智能体如何变得更可靠：模型能否在预训练时学会搜索，智能体失败后怎样定位共因，长任务中的证据与经验如何保留。全览也收录代码评审、运行时插件演进和推理效率的研究。"
description: "本期从三个问题看智能体如何变得更可靠：模型能否在预训练时学会搜索，智能体失败后怎样定位共因，长任务中的证据与经验如何保留。全览也收录代码评审、运行时插件演进和推理效率的研究。"
---

# arXiv Agent 与大模型研究简报｜2026-11-23｜入选论文全览

本期从三个问题看智能体如何变得更可靠：模型能否在预训练时学会搜索，智能体失败后怎样定位共因，长任务中的证据与经验如何保留。全览也收录代码评审、运行时插件演进和推理效率的研究。

本期入选论文全览。

## 智能体系统与工具使用

### 让研究智能体同时改进模型和执行框架

CoEvoBench: Can LLMs Drive Recursive Co-Evolution of Agentic Systems?

🌟🌟🌟

基准把权重、数据和执行框架都交给研究智能体，在五个领域限制时间与资源，并独立复测结果。较强的研究智能体缩小了相当一部分与参考成绩的差距，但不同领域改善不均，长程修订路线也较少因负面结果改变。

[阅读论文 PDF](https://arxiv.org/pdf/2611.27116)

### 把长历史写成可按需检索的模型记忆

MemOnce: A Scalable Memory Architecture for Large Language Models

🌟🌟🌟

长时对话若保留所有层的历史缓存，内存会随对话不断增长。这项工作缓存部分末层状态，再按当前输入检索，供后续推理复用。作者同时测试从头预训练与现有模型适配，从头训练的规模最高十亿参数，扩展到更大基础模型仍需证据。

[阅读论文 PDF](https://arxiv.org/pdf/2611.27973)

### 让智能体运行时的插件一起演进

HookEvo: A Framework for Coordinated Plugin Evolution on Hook-Enabled Agent Runtimes

🌟🌟🌟

执行框架收到工具回执之后，记录、上下文和动作检查可能需要一起调整。作者用生命周期钩子提交跨插件候选修改，在冻结模型的四个环境中评估并保留有收益的版本。各运行的数据分配有差异，部分增益无法完全归到钩子设计。

[阅读论文 PDF](https://arxiv.org/pdf/2611.27294)

### 在界面上标出候选动作再决定下一步

Bel: Step-Level Policy Improvement of Visual Agents Without Training

🌟🌟

研究将每一个候选点击或指向标回屏幕，由决策模型分别估计其正确概率，再决定是否替换默认动作。固定候选集合的比较中，这种选择优于其他重排策略。多采样和逐项评分会增加开销，离线单步增益也不能直接等同于完整任务收益。

[阅读论文 PDF](https://arxiv.org/pdf/2611.27222)

### 让设计脚本智能体从执行轨迹提炼知识

Self-Evolving Beyond Human-Crafted Experience for EDA Scripting

🌟🌟

电子设计接口文档稀疏，脚本也可能静默失败。系统将接口检索、沙箱执行与跨任务经验更新加入工具智能体，在一百五十八项任务中，完整执行框架单次运行的首次通过率为百分之九十二点四。结果集中在指定设计平台。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26912)

## 大模型推理与规划

### 预先共享采样随机性以加速推测解码

Speculative Decoding Is Less Speculative Than You Think

🌟🌟

推测解码先提出候选词元再由目标模型验证。作者在起草前生成并共享验证用随机数，使草拟器更接近实际采样路径。在所测目标与草拟组合中，两套基准的吞吐提升约百分之四至二十五。收益随采样设置和推理后端变化。

[阅读论文 PDF](https://arxiv.org/pdf/2611.27891)

## 检索增强生成与知识检索

### 把搜索能力提前到语言模型预训练

Search From the Start: Search-Native Pretraining for Language Models

🌟🌟🌟

作者在普通预训练文本中插入查询和本地索引的检索结果，教模型决定搜什么以及如何使用证据。在所测知识任务中，十四亿参数的搜索预训练模型达到或超过同计算预算的三十三亿参数基线，收益在监督微调后仍存在。实验覆盖的规模最高为三十三亿参数。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26809)

### 查询示例库的内部冲突会拖累泛化

Know Your Context Bank: Repairing Inconsistency and Measuring Generalization in Context-Aware Text-to-SQL

🌟🌟

企业查询库中，两条各自正确的示例也可能使用相反的统计口径。作者按查询决策比较样例，清理后的样例库在同规模微调对照中平均领先二点六个百分点。查询逻辑越偏离样例库，收益越小。比较器主要在一种数据库方言上蒸馏，换方言可能需要重新校准。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26775)

### 拆开图证据才能看清检索生成的失败

GRACE: Controlled Evidence Interventions for Diagnosing and Improving Knowledge Integration in GraphRAG

🌟🌟

作者在同一问题下分别破坏支持路径、加入干扰或制造证据冲突，观察图检索生成器何时变化。按问题组织完整图证据能够改善使用效果，但并不能替代缺失路径。干预来自知识库查询，现实检索系统的脏数据仍需另测。

[阅读论文 PDF](https://arxiv.org/pdf/2611.27350)

### 智能体构建的本体能否改善真实任务

AutoOntologyBench: A Task-Grounded Benchmark for Agentic Knowledge Engineering

🌟🌟

研究让九个模型构建领域本体，再把这些结构用于下游任务，与直接检索等知识表示比较。作者报告本体可补充检索，并且收益随任务类型而变。结论取决于测试中的公开领域、评估任务和本体质量，不能推定每个新领域都值得构建。

[阅读论文 PDF](https://arxiv.org/pdf/2611.27734)

## 多智能体与协作

### 高级智能体是否真的复核过下属材料

Do Senior Agents Do Their Job? Measuring Role Integrity in How LLM Agents Use Subordinate Material

🌟🌟🌟

三个场景分别检查高级智能体如何处理下属报告的错误和限制。结果表明，即使最终答复流畅并附有引文，关键限定仍可能在汇总时被丢掉。部分场景只提供固定下属材料，也缺少匹配的非层级对照，因此证据无法单独归因给层级设计。

[阅读论文 PDF](https://arxiv.org/pdf/2611.27139)

## 大模型训练与对齐

### 用决策模型为智能体的每一步打分

Decision Models Are General-Purpose Process Reward Models

🌟🌟🌟

智能体强化学习往往只看整轮成功与否。作者让通用决策模型逐步回答一个是非问题，把输出概率用于给行动分配训练信用。在家务和购物模拟中，两类任务的成功率分别提升超过二十和十个百分点。问题仍按环境编写，证据来自有限的训练设置。

[阅读论文 PDF](https://arxiv.org/pdf/2611.27068)

### 在策略蒸馏里的虚假一致如何出现

When Students Fail to Learn from Teachers: Learning Dynamics of On-Policy Distillation

🌟🌟

学生模型在自己的输出上接收教师反馈，仍可能反复强化双方表面一致的词元，最后变得冗长或重复。研究沿位置分解局部更新，并发现其他位置的梯度可改变该处更新方向。结论针对采样词元蒸馏设置，不宜推广到所有蒸馏目标。

[阅读论文 PDF](https://arxiv.org/pdf/2611.27125)

### 用模型真实失误构造工具调用偏好数据

TOUMAII: A 4\.5M-Pair Tool-Calling Preference Dataset and Its Source-Agnostic Generator

🌟🌟

从正确的工具调用出发，让多种模型生成有代表性的错误调用，组成约四百五十万对偏好样本。作者在三十亿参数模型上进行直接偏好优化，表现与其他高质量偏好数据相当。筛选只检查调用是否与参考一致，可能排除等价调用，也无法确认实际执行正确。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26722)

### 错误的监督轨迹之后，强化学习能补回多少

Reinforcement Learning Unlearns Corrupted SFT Reasoning

🌟🌟

作者以三百六十一种配置污染数学题训练轨迹，再通过可验证答案做强化学习。仅监督微调时准确率随污染显著下降，强化学习后多组能恢复至约六成。结果来自单个十亿参数模型和一个数学数据集，不能推及开放任务。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26756)

### 改写模型权重能否保留示例中的任务能力

Weight-Space Programming Writes In-Context Learning and Matches Fine-Tuning in Language Models

🌟🌟

前沿模型先观察较小模型在有无示例时的表示，再直接写入权重。多数实验中，改动接近少样本提示带来的任务向量，部分改动集中在少数前馈单元。比较覆盖六个任务，包含多个规则简单的映射，尚难推及复杂技能。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26841)

## 评测与安全

### 安装之前审查智能体技能的数据用途

SkillPrivus: Uncovering PRIVacy of USe Harms in Agentic Skills

🌟🌟🌟

研究者静态读取技能说明和代码，按具体数据流判断用途、接收方和披露是否合乎语境。五百六十三个处理个人数据的技能中，三百零七个被标记为存在至少一项潜在问题。静态阅读难覆盖动态行为，标记指向值得复核的风险。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26747)

### 用可执行探针诊断智能体反复失败的原因

ProbeAgent: Principled Diagnosis of Agent Failures in Verifiable Environments

🌟🌟🌟

该框架从已有基准任务发现失败，再构造可执行的探针检验推测原因并聚类。十个基准、二十二种配置共收集一千二百四十四次失败，形成五百三十六条失败模式描述。框架依赖能生成并核验探针的环境，真实开放任务的归因难度更高。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26897)

### 逐题复核基准如何定义成功

Benchmarks' Last Exam

🌟🌟🌟

研究复核八个前沿基准的七百四十九道任务，并检查题目、环境和评分器对成功条件是否一致。缺陷可能让模型得到不该得的分，也可能拒绝本应正确的结果。确认缺陷与量化它对排行榜的影响是两步，后者还取决于受影响模型和任务。

[阅读论文 PDF](https://arxiv.org/pdf/2611.27622)

### 模型会在后训练中记住自己的幻觉

LLMs Memorize Their Own Hallucinations During Post-Training

🌟🌟

知识题上的强化学习常用最终答案给整条推理轨迹打分。作者跟踪训练中出现的自生成幻觉，报告被强化的幻觉回忆率平均上升百分之四点八三，模型在推理中撤回过一些幻觉也可能保留这种影响。结果取决于实验中的知识题和回忆测量。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26863)

### 用开发者实际修改评估自动代码评审

CodeReviewBench: An Automated Benchmark for Evaluating the Software Factory

🌟🌟

研究从公开拉取请求持续追踪机器人意见是否被开发者采纳，并用五十个拉取请求的专家评审作交叉验证。动态采样可以跟踪工具迭代，但开发者未处理的意见也可能正确，双方都漏掉的缺陷无法计入。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26942)

### 本地模型生成时顺手做流式安全检查

Run One, Get Two: Near-Free Streaming Safety Checks for Local LLMs

🌟🌟

生成与安全分类共用权重和缓存并在解码时并排执行。研究在六亿参数模型上报告十七项基准中有十二项的综合检测指标达到或超过独立护栏，每个词元增加的延迟低于百分之四。速度收益针对单用户、低批量、内存带宽受限的部署。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26975)

### 模型裁判会继承示例里的通过倾向

Your Judge Inherits Your Prompt: In-Context Label Bias in an LLM-as-Judge Is Directional, Not Symmetric

🌟🌟

研究冻结视频问答流水线，只改变裁判提示中通过和不通过示例的比例。偏向通过的示例显著抬高了裁判通过率，反向偏置在现有设置下较弱。反向条件每个数据集只取一组，尚无法确定整个比例范围的变化曲线。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26881)

### 持续学习智能体答对时掌握了什么证据

AstronautBench: Measuring Agent Self-Improvement Across Episodes Through Knowledge, Evidence, and Progress

🌟🌟

同一任务世界连续运行数轮，并分别记录智能体的任务进展、世界知识答案以及是否实际见过支持证据。三项指标并不同步，只看正确率会高估带证据的学习进展。基线每种条件只有一条运行轨迹，主要说明指标设计的用途。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26910)

## 应用与基准

### 为自动循证综述保留可追溯的结果身份

MetaRigor: From Agentic Automation to Verifiable End-to-End Meta-Analysis Through Scientific Decision Boundaries

🌟🌟

系统把每条结果绑定到研究、比较组、结果指标和时间点，用任务契约约束抽取、分析和成文。分阶段评估检查取证、方法判断和成稿事实，端到端对照覆盖七个案例并从抽取开始。因此结果能说明中后段的可核验性，无法覆盖所有检索场景。

[阅读论文 PDF](https://arxiv.org/pdf/2611.27713)

### 把信用证条款变成逐条可验证的检查

From Letter-of-Credit Requirements to Executable Specifications: Evaluating Verification Accuracy and Completeness

🌟🌟

模型先把条款写成机器可执行的条件，再由确定性程序取证和判定。对三百四十五个真实案例，方法正确核验约八成可评估条款，高于工具智能体约五成的结果。固定规则仍无法覆盖部分条款，解析准确也无法修复验证器操作错误。

[阅读论文 PDF](https://arxiv.org/pdf/2611.26988)
