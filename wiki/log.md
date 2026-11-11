---
type: overview
title: 工作日誌
updated: 2026-11-10
---

# 工作日誌

> 新的放最上面。每筆開頭格式固定：`## [日期] 類型 | 標題`
> 類型：setup、ingest、query、lint、decision、meeting、result

## [2026-11-10] ingest | 第一批 8 篇文獻
- 重新開啟 PDF 核對頁碼與原文，新增：
  - [[bingler-2024]]、[[clarkson-2008]]、[[durand-hawn-ioannou-2019]]、[[hawn-ioannou-2016]]
  - [[bothello-2023]]、[[cenci-2023]]、[[hadro-2026]]、[[huang-2023]]
- 新增概念頁：[[symbolic-vs-substantive]]、[[hard-vs-soft-disclosure]]、[[specificity]]、[[decoupling]]
- 新增 [[rule-to-source]]：prompt 規則內容來自先前對話 `[二手]`，文獻頁碼已核對
- 新增 [[journal-list-rule]]、[[open-questions]]
- 發現：
  - Clarkson 表 1 註 a 的給分點 (3)「跟過去年度比」，可以當 CHANGE 規則的清單內依據
  - Clarkson A7-6（社區參與）算 soft，可以當 OUTSIDE 的依據
  - Cenci p.11「前後兩句」是上下文視窗的依據

## [2026-11-10] setup | 建立 wiki
- 參考 Karpathy 的 LLM Wiki 概念，建立三層架構：原始資料（`raw/`）、wiki（`wiki/`）、規則（`AGENTS.md`）
- 原始資料不複製，只在 `raw/README.md` 記錄位置
- 建立網站：`index.html` 讀取 `wiki/index.md` 產生選單，可用 GitHub Pages 公開
