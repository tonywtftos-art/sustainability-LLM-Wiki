---
type: prompt
title: Prompt 規則與文獻依據對照
updated: 2026-11-10
verification: 二手
---

# Prompt 規則與文獻依據對照

> **這一頁是整本 wiki 存在的主要理由。** 老師問「這條規則的依據是什麼」時，從這裡找答案。

## 先說明查證狀態

- **prompt 的規則內容** `[二手]`：來自先前對話中 prompt v10／v10.2 的全文（`D:\E5test\環境作為_prompt_v10.2.txt`），本次建立 wiki 時**沒有重新開啟**這個檔案。下次整理時要逐條核對。
- **文獻的頁碼和原文** `[全文]`：本次重新對照 PDF 確認過，除非另外標註。

## 狀態標記

| 標記 | 意思 |
|---|---|
| ✅ | 依據在期刊清單內，有原文 |
| ⚠️ | 依據不在清單內（例如 [[hadro-2026]]），要換成清單內的文獻 |
| 🔧 | 我們把文獻定義寫成判斷規則〔操作化〕 |
| ✏️ | 沒有文獻依據〔自訂〕 |

## 規則對照表

### 0. 定義（prompt 開頭的 Purpose）

| | 內容 |
|---|---|
| 規則 | 說明什麼是象徵、什麼是實質 |
| 目前引用 | ⚠️ [[hadro-2026]] p.4361：「signalling compliance and commitment without substantive organisational change ... measurable performance improvements」 |
| **建議改用** | ✅ [[durand-hawn-ioannou-2019]] p.300：象徵是「promises to engage in practice changes they have not yet implemented ... nominal actions to produce impressions of more material change」；實質是「implementation of significant changes that involve material costs and are not easily reversible」 |

### 第 1 步：STATUS（句子狀態：已執行、實際績效、計畫…）

| | 內容 |
|---|---|
| 規則 | 只有已經做了或正在做的才往下判斷；計畫、承諾、目標不計分 |
| 依據 | ✅ [[cenci-2023]] p.10：「to be classified as an initiative an action need to refer to an activity that a company has done, or is actively pursuing. Investment plans and future projects are not regarded as initiatives.」 |
| 補充 | ✅ [[cenci-2023]] p.11：標註者把「commitments and plans as not-an-initiative」 |
| 佐證 | ✅ [[durand-hawn-ioannou-2019]] p.300：尚未實施的承諾屬於象徵 |

### 第 2 步：ACTION TYPE（作為類型）

| | 內容 |
|---|---|
| 規則 | 把作為分成 14 類，只記錄、**不影響分數** |
| 依據 | ✅ [[cenci-2023]] p.11：14 種作為類型與三大類 |
| 不影響分數 | ✏️〔自訂〕：依團隊討論決定 `[二手]` |

### 第 3 步之一：SPEC（具體與否）

| | 內容 |
|---|---|
| 規則 | 句子有沒有指出特定的專案、措施、系統，具體到可以查核 |
| 目前引用 | ⚠️ [[hadro-2026]] p.4364：「substantive elements (specific projects, metrics or KPIs)」；不具體是「general statements of intent rather than concrete, verifiable data」 |
| **建議改用** | ✅ [[clarkson-2008]] 註 11（p.313）：同一件事，有具體資訊算 hard、沒有細節或佐證算 soft<br>✅ [[bingler-2024]] p.5：「detailed performance information, details of actions, or tangible and verifiable targets」 |
| ⚠️ 衝突 | 兩篇對目標句的看法相反，見 [[specificity]] |

### 第 3 步之二：SYMB（是不是只是訊號）

**六個類別的名稱和切法是本專案自訂的** 🔧，不是任何一篇文獻的分類。

| 類別 | 白話 | 目前引用 | 清單內可用的依據 |
|---|---|---|---|
| NONE | 真的改變了營運 | ⚠️ Hadro p.4364 | ✅ Durand et al. p.300（實施重大改變、有成本、難撤回） |
| COMPLIANCE | 只有取得認證、符合規定 | ⚠️ Hadro p.4361、p.4364 | ✅ Clarkson A6-1「compliance 聲明」算 soft（p.312）<br>⚠️ 但 Durand et al. p.309 認為遵法也可以是實質，見 [[open-questions]] |
| MEASURE_REPORT | 只有量測、評估、查證、報告 | ⚠️ Hadro p.4367（**結果解讀段落，不是定義**） | 部分：✅ Bothello p.3227 把「reporting, claims, or disclosures」算象徵<br>⚠️ 但 Clarkson 把第三方查證（A2-2、A2-3）算 hard，見 [[open-questions]] |
| COMMITMENT | 只有加入、簽署、承諾 | ⚠️ Hadro p.4361 | ✅ Durand et al. pp.309–310：簽署永續原則、沒有後續監督，是象徵順從 |
| RELABEL | 只改名 | ⚠️ Hadro p.4361（只說「組織沒有實質改變」） | ✅ Durand et al. p.310：「simply rename or requalify its existing assets」是象徵遵法 |
| OUTSIDE | 公司外面的活動，自己的營運沒變 | ⚠️ Hadro p.4364「isolated initiatives」 | ✅ Clarkson A7-6 社區參與與環境捐贈算 soft（p.312） |

### 第 4 步：DIRECTION（好消息、壞消息、中性）

| | 內容 |
|---|---|
| 依據 | Hackston & Milne (1996, AAAJ) 的好／壞／中性消息分類 `[二手]`：本 wiki 還沒建這篇的頁面 |
| 待辦 | 建立 Hackston & Milne 的文獻頁並核對頁碼；AAAJ 在清單上的等級要確認 |

### 第 5 步：CHANGE（績效有沒有改善）

| | 內容 |
|---|---|
| 規則 | 有數字，而且跟過去比有改善 |
| 目前引用 | ⚠️ [[hadro-2026]] p.4361：「measurable performance improvements」 |
| **建議改用** | ✅ [[clarkson-2008]] 表 1 註 a（p.313）：A3 的給分點 (3)「Performance data is presented relative to previous periods (trend analysis)」 |
| 「一定要跟過去比」 | 🔧 操作化：Clarkson 只是把「跟過去比」列為加分點之一，沒有說沒比就不算 |

### 第 6 步：SAME AS PREVIOUS（跟前文重複）

| | 內容 |
|---|---|
| 規則 | 跟前文描述同一件事，就不重複計分 `[二手]` |
| 依據 | ✏️〔自訂〕 |
| 相關 | [[cenci-2023]] p.11 也有類似的考量：把前後兩句一起看，避免同一個作為被重複計算 |

### 計分規則

```
score = 1 only if SAME AS PREVIOUS is "N", DIRECTION is GOOD, and at least one of these holds:
  (a) substantive action: STATUS is IMPLEMENTED, SPEC is "Y", and SYMB is NONE;
  (b) performance improvement: STATUS is IMPLEMENTED or RESULT, and CHANGE is "Y".
Otherwise score = 0. ACTION TYPE does not affect the score.
```
`[二手]`：來自先前對話中 v10 全文。

| 部分 | 依據 |
|---|---|
| (a) 實質作為 | 第 1 步＋第 3 步的依據 |
| (b) 績效改善 | 第 5 步的依據 |
| 每句最多 1 分、用「或」結合兩個條件 | ✏️〔自訂〕 |

### 輸入與輸出格式

| 規則 | 依據 |
|---|---|
| 每句附前後各兩句作為上下文 | ✅ [[cenci-2023]] p.11：「Sentences classified as an initiative are then further combined with their preceding and subsequent two sentences」 |
| 輸出 JSON | de Kok (2025, *Management Science*) p.7893 `[二手]`；這本期刊在清單中的分級要請老師確認 |
| 附原文證據（ev 欄） | ✏️〔自訂〕：方便人工核對 |

## 總結：哪裡最需要補強

| 優先 | 項目 | 原因 |
|---|---|---|
| 1 | 定義段、SPEC、SYMB 的依據 | 都引用 [[hadro-2026]]，期刊不在清單上；上表已列出可替換的文獻 |
| 2 | MEASURE_REPORT | 原依據來自結果解讀段落；Clarkson 和 Bothello 對「查證」的看法相反 |
| 3 | COMPLIANCE | Durand et al. 認為遵法可以是實質，可能要拆成兩類 |
| 4 | DIRECTION | Hackston & Milne 還沒建頁、還沒重新核對 |

## 相關頁面

[[symbolic-vs-substantive]]、[[specificity]]、[[hard-vs-soft-disclosure]]、[[open-questions]]、[[journal-list-rule]]
