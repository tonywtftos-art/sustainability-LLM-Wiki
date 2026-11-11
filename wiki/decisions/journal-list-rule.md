---
type: decision
title: 決策：文獻來源只用期刊清單內的期刊
updated: 2026-11-10
verification: 全文
---

# 決策：文獻來源只用期刊清單內的期刊

## 決定了什麼

可以當 prompt 規則**主要依據**的文獻，只限「科技部推薦期刊」清單（`RA文獻\科技部推薦期刊.pdf`）中：

1. 管理領域打星號（★）的期刊；
2. 會計、財務的 A+ 或 A Tier-1；
3. 經濟的 Excellent；
4. *Nature Communications*（指導老師認可）。

不在清單上的文獻可以當背景或發想，但不能當規則依據。

## 誰決定、何時

使用者決定，2026 年 10 月下旬 `[二手]`。

## 為什麼

- 老師要求研究依據要來自高品質期刊。
- 規則要一致，避免每篇文獻都要重新討論能不能用。

## 本 wiki 文獻的等級 `[全文]`（對照清單 PDF）

| 文獻 | 期刊 | 清單中的等級 |
|---|---|---|
| [[durand-hawn-ioannou-2019]] | Academy of Management Review | ★ |
| [[hawn-ioannou-2016]] | Strategic Management Journal | ★ |
| [[bothello-2023]] | Strategic Management Journal | ★ |
| [[clarkson-2008]] | Accounting, Organizations and Society | A+ |
| [[huang-2023]] | Contemporary Accounting Research | A+ |
| [[bingler-2024]] | Journal of Banking & Finance | A Tier-1（財務） |
| [[cenci-2023]] | Nature Communications | 老師認可 |
| [[hadro-2026]] | Business Strategy and the Environment | **不在清單** |

## 這個決定造成的影響

- [[hadro-2026]] 原本是 prompt v10 的主要定義來源，要逐條換成清單內的文獻，見 [[rule-to-source]]。
- 行銷、生產作業兩張表只有排名、沒有分級，例如 *Management Science*（de Kok 2025）能不能用，要問老師，見 [[open-questions]]。
