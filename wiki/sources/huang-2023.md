---
type: source
title: Huang, Wang & Yang (2023) FinBERT
authors: Huang, Wang, Yang
year: 2023
journal: Contemporary Accounting Research
tier: A+
updated: 2026-11-10
verification: 全文
source_file: ContemporaryAcctingRes-2022-Huang-FinBERT....pdf
---

# Huang, Wang & Yang (2023)：FinBERT

## 一句話

作者用大量財經文字訓練出 FinBERT，它判斷財經句子的情緒、以及一句話屬於環境、社會、治理（ESG）哪一類，都比字典和傳統機器學習方法準。我們用它來**篩出環境句**。

## 基本資料

| 項目 | 內容 |
|---|---|
| 作者 | Allen H. Huang、Hui Wang、Yi Yang |
| 篇名 | FinBERT: A Large Language Model for Extracting Information from Financial Text |
| 期刊 | *Contemporary Accounting Research*, 40(2), 806–841 |
| 等級 | 會計 A+ |
| 研究類型 | 方法（語言模型） |
| 備註 | 檔名寫 2022 是線上搶先版年份，正式刊出是 2023 年 `[全文]` |

## 研究問題

專門用財經文字訓練的語言模型，能不能比字典和其他機器學習方法更準確地從財經文字中擷取資訊？（摘要 p.806）`[全文]`

## 資料與方法

- **預訓練資料**：財經文字共 49 億個字詞（4.9 billion tokens）（p.813）`[全文]`
- **情緒分類**：10,000 句分析師報告的句子（p.808）`[全文]`
- **ESG 分類**：從 CSR 報告和 10-K 的 MD&A 中人工標註 2,000 句，分成四類（p.824）`[全文]`
  - 環境（例如氣候變遷、自然資本、污染與廢棄物、環境機會）
  - 社會、治理、非 ESG
  - 分類依據 MSCI (2022) 的 ESG 架構
  - 81% 訓練、9% 驗證、10% 測試

## 主要發現

- 情緒分類準確率 88.2%，高於字典法（62.1%）和其他方法（p.809）`[全文]`
- ESG 分類準確率 89.5%，高於其他方法（p.824）`[全文]`
- 訓練資料越少，FinBERT 的優勢越大（p.810）`[全文]`

## 判斷標準

這篇只分「**主題**」（是不是 E、S、G），**不判斷**做了沒有、具不具體、是象徵還是實質。

## 標準從哪來

ESG 四類依 MSCI (2022) 的分類（p.824）`[全文]`

## 缺口與限制

- **我們看到的**：
  - 它只能告訴我們「這句在講環境」，分不出「已經做了」和「計畫要做」。`[推測]`
  - 我們實際用的是作者在 Hugging Face 公開的 finbert-esg 模型；模型名稱和版本要在 [[overview]] 的流程中另外記錄。`[二手]`

## 對本專案 prompt 的意涵

| 用途 | 說明 |
|---|---|
| 篩選環境句 | 流程第 ③ 步：字典 ∪ FinBERT-ESG，任一個判是就留，盡量不漏 |
| 不負責判斷 | 象徵／實質的判斷交給 LLM 和判斷手冊 |

## 相關頁面

- 流程：[[overview]]
- 對照：[[bingler-2024]]（同樣是 BERT 系列模型，但只做氣候）
