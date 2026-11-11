---
type: concept
title: 具體性（specificity）
updated: 2026-11-10
verification: 全文
---

# 具體性（specificity）

## 白話版

「我們會努力節能減碳」和「我們 2024 年在高雄廠換了 12 台高效率空壓機，每年省電 380 萬度」都在講節能。
差別是：**第二句讀者可以核對**，知道做了什麼、做了多少；第一句讀者無從判斷減的是 0.5% 還是 50%。（例句為自擬；「0.5% 還是 50%」的說法出自 [[bingler-2024]] p.6）

## 各家定義比較

| 文獻 | 「具體」的定義 | 目標句算什麼 | 等級 |
|---|---|---|---|
| [[bingler-2024]] | 「contains detailed performance information, details of actions, or tangible and verifiable targets」(p.5)；依 IASB 重大性定義 | **具體**（明確可驗證的目標） | A Tier-1 |
| [[clarkson-2008]] | hard＝客觀、難以模仿的數據；同一件事有細節算 hard、沒細節算 soft（註 11，p.313） | **soft**（A5-5 可衡量目標） | A+ |
| [[hadro-2026]] | 實質元素是「specific projects, metrics or KPIs」(p.4364)；象徵是「general statements of intent rather than concrete, verifiable data」(p.4364) | 實質做法包含「specific targets for waste reduction」(p.4364) | 不在清單 |

以上引文皆 `[全文]`。

## 共識

**有數字、有細節、讀者能查證，就算具體。** 三篇都同意「模糊的宣示」不具體。

## 分歧

**目標句是最大的分歧。**

| 例句 | Clarkson | Bingler |
|---|---|---|
| 「2030 年溫室氣體排放比 2020 年減少 25%」 | soft（A5-5） | 具體 |
| 「我們致力於減少排放」 | soft | 不具體 |

理由不同：
- Bingler 只看**寫得具不具體**，不管做了沒有（p.6）`[全文]`。
- Clarkson 看的是**能不能證明績效好**，目標還沒達成，差的公司也能寫，所以算 soft `[推測]`。

## 具體性 ≠ 實質

**具體只是實質的必要條件之一。** 一句話可以很具體，但仍然是象徵，例如：
- 「本公司於 2024 年 3 月加入 RE100」：有時間、有名稱，很具體，但只是加入倡議（Durand et al. 視為象徵順從，pp.309–310）。

所以 prompt 把「具不具體」（SPEC）和「是不是只是訊號」（SYMB）分成兩個欄位判斷，見 [[rule-to-source]]。

## 本專案採用的版本

- SPEC 欄位：具體＝有特定的專案、設備、數字或可查核的細節。
- 目標句的歸類：**待決**，見 [[open-questions]]。
- climate-specificity 模型（Bingler 團隊公開）只用在氣候句上當交叉檢查，**不參與主要判定**，避免出現兩套標準。

## 相關頁面

[[symbolic-vs-substantive]]、[[hard-vs-soft-disclosure]]、[[bingler-2024]]、[[clarkson-2008]]
