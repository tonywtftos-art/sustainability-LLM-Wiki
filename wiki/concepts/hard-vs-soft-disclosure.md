---
type: concept
title: Hard vs Soft 揭露
updated: 2026-11-10
verification: 全文
---

# Hard vs Soft 揭露

## 白話版

兩家餐廳都說「我們很重視食安」。
- **Hard**：A 餐廳貼出每批食材的檢驗報告、合格率 99.8%、比去年進步 0.5 個百分點。這種資訊**差的餐廳模仿不來**，因為它拿不出真的數據。
- **Soft**：B 餐廳只說「我們秉持食安第一的理念」。這句話**誰都能說**，無法查證。

## 定義來源

這組概念來自 [[clarkson-2008]] `[全文]`：

| | 定義 | 包含的類別 |
|---|---|---|
| **Hard** | 「objective, 'hard' measures that cannot be easily mimicked by poor environmental performers」(p.309) | A1 治理與管理系統、A2 可信度、A3 環境績效指標、A4 環境支出 |
| **Soft** | 「soft (i.e., not easily verifiable) claims to be committed to the environment」(p.309) | A5 願景與策略宣稱、A6 環境概況、A7 環境倡議 |

**判斷的關鍵是「有沒有細節」**（註 11，p.313）`[全文]`。以下例句是自擬的說明：
- 「我們有環境管理系統」→ A5-3，soft（沒有細節）
- 「我們設有環境安全處，由副總經理督導」→ A1-1，hard（有具體單位和職位）

**soft 不等於假的**：作者說 soft 揭露「can be genuine when put in the specific context but they can also be deceiving」(p.313) `[全文]`。soft 的問題是**無法查證**，不是一定不實。

## A3 環境績效指標的給分方式

每個指標 0–6 分，每符合一點加 1 分（表 1 註 a，p.313）`[全文]`：

| 給分點 | 白話 | 對應 prompt〔自訂〕 |
|---|---|---|
| (1) 有績效數據 | 有數字 | SPEC |
| (2) 跟同業比 | 跟別家比 | — |
| (3) 跟過去比 | 跟去年比 | **CHANGE 的依據** |
| (4) 跟目標比 | 跟自己的目標比 | — |
| (5) 絕對值＋標準化數值 | 總量＋每單位 | — |
| (6) 分廠區揭露 | 拆開來看 | — |

## 從「整份報告」改成「逐句」

Clarkson 是**整份報告**逐題給分（有揭露就得分），我們要判斷的是**每一句**。改寫方式〔自訂〕：

1. 每句先對到一個題項（例如 A3-2 用水）。
2. 對到 A1–A4 → 實質；A5–A7 → 象徵。
3. LLM 輸出題項編號和理由，方便人工核對。

這個改寫是本專案的操作化，不是 Clarkson 的原始做法，報告時要說明。

## 跟其他概念的關係

- 跟 [[symbolic-vs-substantive]]：本專案把 hard 對應到實質、soft 對應到象徵。這是我們的對應方式〔自訂〕，Clarkson 本身沒有用 symbolic／substantive 這組詞。
- 跟 [[specificity]]：Clarkson 的 hard 很接近 Bingler 的「具體」，但**目標句**的歸類相反。

## 相關頁面

[[clarkson-2008]]、[[symbolic-vs-substantive]]、[[specificity]]、[[rule-to-source]]
