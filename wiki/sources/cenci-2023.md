---
type: source
title: Cenci et al. (2023) 企業永續作為與全球氣候目標
authors: Cenci, Burato, Rei, Zollo
year: 2023
journal: Nature Communications
tier: Nat Commun
updated: 2026-11-10
verification: 全文
source_file: s41467-023-43116-2.pdf
---

# Cenci et al. (2023)：從報告書裡抓出「已執行的永續作為」

## 一句話

作者用 AI 模型讀了三萬多份永續報告書，逐句找出公司**真的做了**的永續作為，分成 14 種類型，發現公司偏重「降低風險」的作為，創新與合作類的作為太少，是排放跟不上巴黎協定目標的原因之一。

## 基本資料

| 項目 | 內容 |
|---|---|
| 作者 | Simone Cenci、Matteo Burato、Marek Rei、Maurizio Zollo |
| 篇名 | The alignment of companies' sustainability behavior and emissions with global climate targets |
| 期刊 | *Nature Communications*, 14, 7831 |
| 等級 | Nat Commun（指導老師認可） |
| DOI | 10.1038/s41467-023-43116-2 |
| 研究類型 | 實證＋方法（文字分類模型） |

## 研究問題

公司做了哪些事來減少排放？哪一類作為跟排放結果的關係比較大？（摘要 p.1）`[全文]`

## 資料與方法

- **樣本**：7,235 家公司、32,183 份報告，2000–2020 年；其中 4,191 家、18,719 份報告能對上排放和會計資料（p.10）`[全文]`
- **資料來源**：獨立永續報告、整合報告，或有大量永續章節的年報（p.10）`[全文]`
- **分析單位**：**句子**，再加上前後各兩句作為上下文（p.11）`[全文]`
- **標註資料**：人工標註 507 份報告，約 55,088 個作為（p.11）`[全文]`
- **模型**：BERT 和 RoBERTa 的組合模型，先判斷句子是不是作為，再分類作為類型和對應的 SDG（p.11）`[全文]`
- **精確度**：人工抽查，作為類型 87%、SDG 86%（p.11）`[全文]`

**14 種作為類型，分成三大類**（p.11）`[全文]`：

| 大類 | 作為類型 |
|---|---|
| 創新 | association（合作結盟）、R&D investments、new products |
| 內部改變（降低風險） | adoption of standards and rules、organizational structuring、assessment and measurement、modification of procedures、asset modification、training |
| 聲譽與利害關係人議合 | communication、pricing、incentives、volunteerism、donation & funding |

## 主要發現

公司目標、作為和排放結果不一致，原因是普遍**過度投入降低風險的作為**，而創新與合作類的作為不足（摘要 p.1）`[全文]`

## 判斷標準

**作為（initiative）的定義**（p.10）`[全文]`：

> "Our main unit of analysis is a sustainability initiative: a concrete action or set of related actions that a company is pursuing outside of its normal core business operations with the intent to directly address one of the 17 sustainable development goals (SDGs). Importantly, to be classified as an initiative an action need to refer to an activity that a company has done, or is actively pursuing. Investment plans and future projects are not regarded as initiatives."

**標註規則**（p.11）`[全文]`：

> "the annotators were instructed and trained by two of us to identify initiatives as implemented actions and to consider commitments and plans as not-an-initiative"

白話：**做了或正在做的才算；計畫、承諾都不算。**

## 標準從哪來

作為類型是作者閱讀永續報告書後，歸納出公司最常見、互斥且完整的活動類型；作者也承認可能有其他分類方式（p.11）`[全文]`

## 缺口與限制

- **作者說的**：作為的分類方式不是唯一的（p.11）`[全文]`
- **我們看到的**：
  - 這篇**沒有區分象徵和實質**。例如「assessment and measurement」「adoption of standards」都算作為，但在其他文獻可能被視為象徵。`[推測]`
  - 補充資料（`41467_2023_43116_MOESM1_ESM.pdf`）裡有各類型的詳細定義，本次沒有讀。`[未讀]`

## 對本專案 prompt 的意涵

| 用途 | 說明 |
|---|---|
| STATUS 規則 | 「已執行才算、計畫和承諾不算」是 STATUS（句子狀態）的直接依據 |
| ACTION TYPE 規則 | 14 種作為類型是我們作為分類的來源 |
| 上下文視窗 | 「前後各兩句」是我們送 LLM 時帶前後各兩句的依據 |
| 分析單位 | 這篇也是**逐句**判斷，支持我們不改成逐段 |

## 相關頁面

- 概念：[[symbolic-vs-substantive]]
- 對照：[[bingler-2024]]（同樣用模型分類，但單位是段落）
- 規則：[[rule-to-source]]
