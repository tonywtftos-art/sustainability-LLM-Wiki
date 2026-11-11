# 永續作為文獻 Wiki

> 公司說的環保，哪些是真的做了？
> 一本由 AI 維護、持續更新的研究筆記，整理企業永續揭露中**象徵（symbolic）**與**實質（substantive）**作為的文獻、概念與判斷規則依據。

**網站**：`https://<你的帳號>.github.io/<repository 名稱>/`（開啟 GitHub Pages 後填入）

## 這是什麼

這是政大企研所 RA 專案的知識庫。專案用 LLM 逐句判斷台灣上市公司永續報告書中的環境句，分辨「真的做了、可以查證」和「只是宣示、承諾或表面功夫」。

這本 wiki 參考 Andrej Karpathy 提出的 **LLM Wiki** 做法：

| 層 | 位置 | 誰維護 |
|---|---|---|
| 原始資料 | `raw/`（只放清單；PDF 在本機，不上傳） | 使用者 |
| Wiki 頁面 | `wiki/` | AI 撰寫，使用者審閱 |
| 規則 | `AGENTS.md` | 使用者和 AI 一起 |

AI 每讀一篇新文獻，就把重點整理進既有頁面：更新概念比較、標出矛盾、補上連結。知識只整理一次，之後持續累積，不用每次重新問。

## 怎麼看

- **網站**：開啟上面的網址。左側是目錄，可以搜尋；每頁底下會列出「連到這一頁的頁面」。
- **Obsidian**：用 Obsidian 打開這個資料夾，可以看到頁面之間的連結圖。
- **本機預覽網站**：在資料夾裡執行 `python -m http.server 8000`，開啟 `http://localhost:8000`。

## 怎麼繼續做

把 `AGENTS.md` 交給 AI 代理（Claude Code、Codex 等），然後說：

- 「整理 RA文獻 裡的 `momin.pdf`」→ AI 會依規則建立文獻頁、更新概念頁和目錄
- 「目標句應該算象徵還是實質？」→ AI 會先查 wiki 再回答
- 「檢查 wiki」→ AI 會找出矛盾、過時和缺少依據的地方

## 資料夾結構

```
├── AGENTS.md        給 AI 的工作規則
├── CLAUDE.md        請 Claude 讀 AGENTS.md
├── index.html       網站入口
├── assets/          網站樣式與程式
├── raw/README.md    原始資料清單
└── wiki/
    ├── index.md     總目錄（網站選單的來源）
    ├── log.md       工作日誌
    ├── overview.md  專案全貌
    ├── open-questions.md
    ├── sources/     文獻頁
    ├── concepts/    概念頁
    ├── prompt/      prompt 規則與文獻對照
    └── decisions/   決策紀錄
```

## 注意

- 文獻 PDF 有版權，不放在這個 repository。頁面中只引用短句並附頁碼。
- 內容中標 `[二手]`、`[推測]` 的部分尚未對照原始資料，不能當成研究結論。
