---
type: overview
title: 待決事項
updated: 2026-11-10
verification: 二手
---

# 待決事項

> 還沒決定的事集中在這裡。決定之後，移到 `decisions/` 建一頁，並在 [[log]] 記一筆。
> 以下問題來自先前對話與本次整理；「來源」欄標出是哪篇文獻引起的。

## 要請老師決定

| # | 問題 | 選項 | 相關文獻 | 影響 |
|---|---|---|---|---|
| 1 | **主要操作定義**用 Clarkson 的 hard／soft 題項嗎？ | 同意／改用其他 | [[clarkson-2008]] | 整份 prompt 要依題項改寫 |
| 2 | **目標句**算象徵還是實質？例：「2030 年減碳 25%」 | Clarkson：soft／Bingler：具體 | [[clarkson-2008]]、[[bingler-2024]] | 目標句很多，會明顯改變象徵比例 |
| 3 | **分析單位**：逐句還是逐段？ | 逐句（Cenci 也是逐句）／逐段（ClimateBERT 系列是段落訓練的） | [[cenci-2023]]、[[bingler-2024]] | 切句流程和人工標註答案都要跟著改 |
| 4 | *Management Science* 等沒有分級的期刊能不能用？ | 可以／不行 | [[journal-list-rule]] | de Kok (2025) 是 LLM 判讀方法的依據 |

## 我們自己要決定

| # | 問題 | 兩邊的看法 | 相關文獻 |
|---|---|---|---|
| 5 | **COMPLIANCE 要不要拆成兩類？** | 只**宣稱**符合法規 → 象徵；為了法規**實際改變做法** → 實質遵法 | [[durand-hawn-ioannou-2019]] p.309 |
| 6 | **採用 GRI 準則**算什麼？ | Bothello：象徵（p.3227）／Clarkson：hard，A2-1 | [[bothello-2023]]、[[clarkson-2008]] |
| 7 | **第三方查證、確信**算什麼？ | 目前 MEASURE_REPORT 判象徵／Clarkson：A2-2、A2-3 算 hard | [[clarkson-2008]]、[[hadro-2026]] |
| 8 | **象徵比例的分母**要不要只算「在講公司自身作為」的句子？ | 全部環境句／只算公司自身作為（像 CTI 只算承諾段落） | [[bingler-2024]]、[[decoupling]] |
| 9 | 友達 3 句判讀有爭議：2265（要求供應商報告）、2454（溫室氣體管理平台）、2511（零廢棄掩埋認證） | 目前都不計分；各有改判的理由 `[二手]` | [[rule-to-source]] |

## 要補的資料

- [ ] 建立 Hackston & Milne (1996) 文獻頁，核對 DIRECTION 規則的依據
- [ ] 讀 Cenci et al. (2023) 補充資料，補上 14 種作為類型的詳細定義
- [ ] 建立 de Kok (2025)、Momin et al. (2017)、Webersinke et al. (2022) 文獻頁
- [ ] 開啟 `D:\E5test\環境作為_prompt_v10.2.txt`，核對 [[rule-to-source]] 中標 `[二手]` 的規則內容
- [ ] 建立 10/27 會議頁、友達 2025 試跑結果頁
