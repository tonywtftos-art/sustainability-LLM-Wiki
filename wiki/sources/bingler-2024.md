---
type: source
title: Bingler et al. (2024) 氣候揭露中的空話
authors: Bingler, Kraus, Leippold, Webersinke
year: 2024
journal: Journal of Banking & Finance
tier: A Tier-1
updated: 2026-11-10
verification: 全文
source_file: climate bert2.pdf
---

# Bingler et al. (2024)：氣候揭露中的「空話」

## 一句話

作者用 AI 模型讀年報裡的氣候段落，判斷每段承諾**講得具不具體**，算出每家公司的「空話指數」（Cheap Talk Index，CTI），發現空話多的公司，後來排放成長和負面新聞也比較多。

## 基本資料

| 項目 | 內容 |
|---|---|
| 作者 | Julia Anna Bingler、Mathias Kraus、Markus Leippold、Nicolas Webersinke |
| 篇名 | How cheap talk in climate disclosures relates to climate initiatives, corporate emissions, and reputation risk |
| 期刊 | *Journal of Banking & Finance*, 164, 107191 |
| 等級 | 財務 A Tier-1 |
| DOI | 10.1016/j.jbankfin.2024.107191 |
| 研究類型 | 實證＋方法（文字分類模型） |
| 備註 | 早期版本篇名為 "Cheap talk in corporate climate commitments: The effectiveness of climate initiatives"（p.1 註腳）`[全文]` |

## 研究問題

加入氣候倡議（TCFD、SBTi、Climate Action 100+）的公司，氣候承諾是不是比較具體？空話多寡和排放、聲譽風險有沒有關係？（假說 1–6，p.4）`[全文]`

## 資料與方法

- **樣本**：MSCI World 指數成分股 1,543 家公司、14,618 份年報，2010–2020 年（p.2、p.5）`[全文]`
- **資料來源**：年報，不是永續報告書。作者的理由之一是年報有法律約束，揭露誘因比較準確（p.5）`[全文]`
- **分析單位**：**段落**。
- **流程**（p.5）`[全文]`：
  1. 判斷段落跟氣候有沒有關，無關的丟掉。
  2. 對氣候段落貼標籤：承諾與行動（commitment）、具體性（specificity）、語氣（sentiment）。
  3. 依公司和年度加總段落數。
- **空話指數**（式 1，p.5）`[全文]`：

  > CTI ＝「是承諾**而且**不具體」的氣候段落數 ÷「是承諾」的氣候段落數

- **驗證**：抽 100 段（具體、不具體各 50 段）由 4 位作者各自標註，多數決後跟模型比，一致率 72%（p.6）`[全文]`
- 模型訓練資料的段數（1,000 段訓練、320 段測試）`[二手]`：來自先前對話，本次沒有核對附錄。

## 主要發現

- 只有**實際被投資人議合**（CA100+）的公司空話比較少；自願性的揭露與目標倡議（TCFD、SBTi）沒有讓空話減少（摘要 p.1；結論 p.14）`[全文]`
- 空話多的公司，**負面新聞較多、排放成長較高**（摘要 p.1；結論 p.14）`[全文]`
- 空話高低和 ROA、股票報酬沒有顯著差異，作者認為市場沒有懲罰空話（p.14）`[全文]`

## 判斷標準

**承諾與行動**（commitment）：

> "A paragraph gets labeled as commitment-yes if it reports that the company undertook activities in this regard, if it reports that it will likely do so, or if the company sets targets in this paragraph."（p.5）`[全文]`

白話：**做了、會做、設定目標，全部算同一類。** 所以這個標籤分不出「說要做」和「做了」。

**具體性**（specificity）：

> "a paragraph gets labeled as specific if a paragraph contains detailed performance information, details of actions, or tangible and verifiable targets. It is labeled as non-specific if this is not the case."（p.5）`[全文]`

作者的例子（p.6）`[全文]`：
- **不具體**：「我們的重點包括減少用電和天然氣、減少廢棄物、增加回收……」——讀者無從判斷減的是 0.5% 還是 50%。
- **具體**：有金額、合作對象、地點的復育計畫。

作者也說明：只看**寫得具不具體**，不判斷承諾夠不夠、有沒有符合國際減碳目標（p.6）`[全文]`

## 標準從哪來

具體性依照 IASB（2018）對重大性（materiality）的定義：資訊如果省略、寫錯或寫得模糊，會影響主要使用者的決策。作者刻意不用「重大／不重大」這組詞，避免帶入對影響大小的解讀（p.5）`[全文]`

## 缺口與限制

- **作者說的**：段落層級的誤判可能存在，但樣本大，不影響整體結果（p.6）`[全文]`
- **我們看到的**：
  - **只做氣候**，水、廢棄物、污染等其他環境主題不在範圍內。`[推測]`
  - **分析單位是段落**，我們是句子，模型直接用在句子上的效果沒有測過。`[推測]`
  - 「明確可驗證的目標」算具體，這跟 [[clarkson-2008]] 把目標算 soft 相反。

## 對本專案 prompt 的意涵

| 用途 | 說明 |
|---|---|
| 近期頂級期刊佐證 | 證明 symbolic／substantive（具體／空話）的區分在 2024 年財務 A Tier-1 期刊仍是主流 |
| 公司層級指標 | 我們的「象徵比例」跟 CTI 公式結構相同；CTI 的分母只算公司自身的承諾與行動，可以參考 |
| 穩健性檢查 | climate-specificity 模型只用在氣候句上做交叉比對，**不參與主要判定**（見 [[open-questions]]） |
| ⚠️ 衝突 | 目標句：Bingler 算具體，Clarkson 算 soft。要請老師決定 |

## 相關頁面

- 概念：[[specificity]]、[[symbolic-vs-substantive]]、[[decoupling]]
- 對照：[[clarkson-2008]]、[[huang-2023]]
- 規則：[[rule-to-source]]
