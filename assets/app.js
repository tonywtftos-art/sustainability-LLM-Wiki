/* 永續作為文獻 Wiki — 網站程式
 * 運作方式：
 * 1. 讀取 wiki/index.md，依「## 分類」與「- [[路徑|名稱]]｜摘要」產生左側選單。
 * 2. 網址 #/sources/bingler-2024 會讀取 wiki/sources/bingler-2024.md 並轉成網頁。
 * 3. [[頁名]] 轉成站內連結；[全文] 等查證標記轉成彩色標籤；frontmatter 轉成頁首資訊卡。
 * 新增頁面只要寫 .md 並加進 wiki/index.md，不需要修改這個檔案。
 */
(function () {
  "use strict";

  // 不在 wiki/ 資料夾裡、但網站也要能顯示的檔案
  var SPECIAL = {
    "AGENTS": { url: "AGENTS.md", title: "AGENTS.md：給 AI 的工作規則" },
    "raw": { url: "raw/README.md", title: "原始資料清單" },
    "index": { url: "wiki/index.md", title: "總目錄" }
  };

  // 查證標記 → 標籤樣式
  var TAGS = {
    "[全文]": "tag-full", "[摘要]": "tag-abs", "[二手]": "tag-second",
    "[未讀]": "tag-unread", "[推測]": "tag-guess",
    "〔自訂〕": "tag-custom", "〔操作化〕": "tag-custom", "〔待確認〕": "tag-guess"
  };
  var TAG_RE = /(\[全文\]|\[摘要\]|\[二手\]|\[未讀\]|\[推測\]|〔自訂〕|〔操作化〕|〔待確認〕)/g;

  var TYPE_LABEL = {
    source: "文獻", concept: "概念", prompt: "Prompt", decision: "決策",
    meeting: "會議", result: "試跑結果", pipeline: "流程", overview: "總覽", raw: "原始資料"
  };

  var state = {
    sections: [],     // [{title, items:[{path,label,summary}]}]
    byPath: {},       // "sources/bingler-2024" → item
    byName: {},       // "bingler-2024" → "sources/bingler-2024"
    cache: {},        // path → {meta, body}
    allLoaded: false
  };

  var $ = function (id) { return document.getElementById(id); };

  // ---------- 讀檔 ----------
  function urlFor(path) {
    if (SPECIAL[path]) return SPECIAL[path].url;
    return "wiki/" + path + ".md";
  }

  function fetchPage(path) {
    if (state.cache[path]) return Promise.resolve(state.cache[path]);
    return fetch(urlFor(path), { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error("找不到 " + urlFor(path) + "（HTTP " + r.status + "）");
      return r.text();
    }).then(function (text) {
      var page = parseFrontmatter(text);
      state.cache[path] = page;
      return page;
    });
  }

  function parseFrontmatter(text) {
    text = text.replace(/^﻿/, "");
    var meta = {}, body = text;
    var m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    if (m) {
      body = text.slice(m[0].length);
      m[1].split(/\r?\n/).forEach(function (line) {
        var kv = line.match(/^([A-Za-z_]+)\s*:\s*(.*?)\s*(#.*)?$/);
        if (kv) meta[kv[1]] = kv[2].replace(/^["']|["']$/g, "");
      });
    }
    return { meta: meta, body: body };
  }

  // ---------- 目錄 ----------
  function parseIndex(md) {
    var sections = [], cur = null;
    md.split(/\r?\n/).forEach(function (line) {
      var h = line.match(/^##\s+(.+)/);
      if (h) { cur = { title: h[1].trim(), items: [] }; sections.push(cur); return; }
      var it = line.match(/^\s*[-*]\s+\[\[([^\]|]+)(?:\|([^\]]+))?\]\]\s*(?:[｜|]\s*(.*))?$/);
      if (it && cur) {
        var path = it[1].trim();
        var item = { path: path, label: (it[2] || path).trim(), summary: (it[3] || "").trim() };
        cur.items.push(item);
      }
    });
    return sections;
  }

  function registerPath(path, label) {
    if (!state.byPath[path]) state.byPath[path] = { path: path, label: label || path, summary: "" };
    var name = path.split("/").pop();
    if (!state.byName[name]) state.byName[name] = path;
    state.byName[path] = path;
  }

  function resolve(target) {
    target = target.trim().replace(/\.md$/, "");
    if (state.byName[target]) return state.byName[target];
    if (SPECIAL[target]) return target;
    return null;
  }

  function renderNav(filter) {
    var q = (filter || "").trim().toLowerCase();
    var html = "";
    state.sections.forEach(function (sec) {
      var items = sec.items.filter(function (it) {
        if (!q) return true;
        var hay = (it.label + " " + it.summary + " " + it.path).toLowerCase();
        var page = state.cache[it.path];
        if (page) hay += " " + page.body.toLowerCase();
        return hay.indexOf(q) !== -1;
      });
      if (!items.length) return;
      html += '<div class="nav-sec"><div class="nav-title">' + esc(sec.title) + "</div><ul>";
      items.forEach(function (it) {
        html += '<li><a data-path="' + esc(it.path) + '" href="#/' + esc(it.path) + '">' + esc(it.label) + "</a></li>";
      });
      html += "</ul></div>";
    });
    $("nav").innerHTML = html || '<p class="muted">找不到符合的頁面。</p>';
    markActive();
  }

  function markActive() {
    var cur = currentPath();
    Array.prototype.forEach.call(document.querySelectorAll("#nav a"), function (a) {
      a.classList.toggle("active", a.getAttribute("data-path") === cur);
    });
  }

  // ---------- Markdown 轉換 ----------
  function preprocess(md) {
    // [[路徑|名稱]] 或 [[路徑]] → 站內連結（程式碼區塊內不轉換）
    var parts = md.split(/(```[\s\S]*?```)/g);
    return parts.map(function (chunk) {
      if (chunk.indexOf("```") === 0) return chunk;
      return chunk.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (_, target, label) {
        var p = resolve(target);
        var text = label || (p && state.byPath[p] ? state.byPath[p].label : target);
        if (!p) return '<span class="missing" title="這一頁還沒建立">' + esc(text) + "</span>";
        return "[" + text.replace(/([\[\]])/g, "\\$1") + "](#/" + p + ")";
      });
    }).join("");
  }

  function decorate(root) {
    // 行內程式碼中的查證標記 → 標籤
    Array.prototype.forEach.call(root.querySelectorAll("code"), function (c) {
      if (c.parentNode && c.parentNode.tagName === "PRE") return;
      var t = c.textContent.trim();
      if (TAGS[t]) {
        var s = document.createElement("span");
        s.className = "tag " + TAGS[t];
        s.textContent = t.replace(/[\[\]〔〕]/g, "");
        c.parentNode.replaceChild(s, c);
      }
    });
    // 一般文字中的標記
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) {
      var n = walker.currentNode;
      if (n.parentNode.closest && n.parentNode.closest("pre, code")) continue;
      if (TAG_RE.test(n.nodeValue)) nodes.push(n);
      TAG_RE.lastIndex = 0;
    }
    nodes.forEach(function (n) {
      var frag = document.createDocumentFragment();
      n.nodeValue.split(TAG_RE).forEach(function (piece) {
        if (TAGS[piece]) {
          var s = document.createElement("span");
          s.className = "tag " + TAGS[piece];
          s.textContent = piece.replace(/[\[\]〔〕]/g, "");
          frag.appendChild(s);
        } else if (piece) {
          frag.appendChild(document.createTextNode(piece));
        }
      });
      n.parentNode.replaceChild(frag, n);
    });
    // 外部連結開新分頁
    Array.prototype.forEach.call(root.querySelectorAll("a[href^='http']"), function (a) {
      a.target = "_blank"; a.rel = "noopener";
    });
    // 表格外層加捲動容器（手機）
    Array.prototype.forEach.call(root.querySelectorAll("table"), function (t) {
      var w = document.createElement("div");
      w.className = "table-wrap";
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
    });
    // 標題加錨點 id
    var used = {};
    Array.prototype.forEach.call(root.querySelectorAll("h2, h3"), function (h, i) {
      var id = "h-" + i;
      used[id] = true;
      h.id = id;
    });
  }

  function metaCard(meta, path) {
    var type = meta.type || "";
    var bits = [];
    if (TYPE_LABEL[type]) bits.push('<span class="pill pill-type">' + TYPE_LABEL[type] + "</span>");
    if (meta.tier) {
      var cls = meta.tier === "不在清單" ? "pill-warn" : "pill-tier";
      bits.push('<span class="pill ' + cls + '">' + esc(meta.tier) + "</span>");
    }
    if (meta.verification) {
      var key = "[" + meta.verification + "]";
      bits.push('<span class="tag ' + (TAGS[key] || "tag-guess") + '">' + esc(meta.verification) + "</span>");
    }
    var rows = [];
    if (meta.authors) rows.push(["作者", meta.authors]);
    if (meta.journal) rows.push(["期刊", meta.journal + (meta.year ? "（" + meta.year + "）" : "")]);
    if (meta.source_file) rows.push(["原始檔", meta.source_file]);
    if (meta.updated) rows.push(["最後更新", meta.updated]);
    rows.push(["檔案", urlFor(path)]);
    var html = '<div class="meta"><div class="meta-pills">' + bits.join("") + "</div><dl>";
    rows.forEach(function (r) { html += "<dt>" + r[0] + "</dt><dd>" + esc(r[1]) + "</dd>"; });
    return html + "</dl></div>";
  }

  // ---------- 頁面 ----------
  function currentPath() {
    var h = decodeURIComponent(location.hash.replace(/^#\/?/, "")).split("#")[0];
    return h || "";
  }

  function showPage(path) {
    var content = $("content");
    if (!path) return showHome();
    content.innerHTML = '<p class="muted">載入中…</p>';
    fetchPage(path).then(function (page) {
      var html = metaCard(page.meta, path) + '<article class="md">' + marked.parse(preprocess(page.body)) + "</article>";
      content.innerHTML = html;
      decorate(content);
      buildToc(content);
      appendBacklinks(path);
      document.title = (page.meta.title || path) + "｜永續作為文獻 Wiki";
      window.scrollTo(0, 0);
      markActive();
    }).catch(function (err) { showError(err); });
  }

  function showHome() {
    var content = $("content");
    var html = '<section class="hero">' +
      '<p class="eyebrow">RA 研究筆記 · LLM Wiki</p>' +
      "<h1>公司說的環保，<br>哪些是真的做了？</h1>" +
      "<p>這本 wiki 整理一個研究助理專案的所有知識：用 LLM 逐句判斷台灣企業永續報告書中的環境作為是<strong>實質（substantive）</strong>還是<strong>象徵（symbolic）</strong>。每一條判斷規則，都能在這裡追溯到文獻原文和頁碼。</p>" +
      '<div class="hero-actions"><a class="btn" href="#/overview">專案全貌 →</a><a class="btn btn-ghost" href="#/prompt/rule-to-source">規則依據對照</a></div>' +
      "</section>" +
      '<section class="how"><h2>這本 wiki 怎麼運作</h2><div class="how-grid">' +
      '<div><b>① 原始資料</b><p>文獻 PDF、prompt、試跑結果。只讀不改，不上傳。</p></div>' +
      '<div><b>② Wiki 頁面</b><p>AI 讀完原始資料後整理成一頁一頁的筆記，互相連結。</p></div>' +
      '<div><b>③ 規則（AGENTS.md）</b><p>告訴 AI 頁面怎麼寫、怎麼命名、新資料怎麼整理。</p></div>' +
      "</div></section>";
    state.sections.forEach(function (sec) {
      html += '<section class="cards"><h2>' + esc(sec.title) + '</h2><div class="card-grid">';
      sec.items.forEach(function (it) {
        html += '<a class="card" href="#/' + esc(it.path) + '"><b>' + esc(it.label) + "</b><span>" + esc(it.summary) + "</span></a>";
      });
      html += "</div></section>";
    });
    html += '<section class="legend"><h2>查證標記</h2><p>' +
      '<span class="tag tag-full">全文</span> 讀過原文並核對頁碼　' +
      '<span class="tag tag-abs">摘要</span> 只讀過摘要　' +
      '<span class="tag tag-second">二手</span> 來自其他文獻或先前對話　' +
      '<span class="tag tag-unread">未讀</span> 還沒讀　' +
      '<span class="tag tag-guess">推測</span> AI 的推論　' +
      '<span class="tag tag-custom">自訂</span> 本專案自己定的規則</p></section>';
    content.innerHTML = html;
    $("toc").innerHTML = "";
    document.title = "永續作為文獻 Wiki";
    markActive();
  }

  function buildToc(root) {
    var hs = root.querySelectorAll("article h2");
    if (hs.length < 3) { $("toc").innerHTML = ""; return; }
    var html = '<div class="toc-title">本頁目錄</div><ul>';
    Array.prototype.forEach.call(hs, function (h) {
      html += '<li><a href="javascript:void(0)" data-target="' + h.id + '">' + esc(h.textContent) + "</a></li>";
    });
    $("toc").innerHTML = html + "</ul>";
  }

  function appendBacklinks(path) {
    loadAll().then(function () {
      if (currentPath() !== path) return;
      var name = path.split("/").pop();
      var re = new RegExp("\\[\\[(" + escRe(path) + "|" + escRe(name) + ")(\\||\\]\\])");
      var refs = Object.keys(state.cache).filter(function (p) {
        return p !== path && !SPECIAL[p] && re.test(state.cache[p].body);
      });
      if (!refs.length) return;
      var html = '<section class="backlinks"><h2>連到這一頁的頁面</h2><ul>';
      refs.forEach(function (p) {
        var label = state.byPath[p] ? state.byPath[p].label : p;
        html += '<li><a href="#/' + esc(p) + '">' + esc(label) + "</a></li>";
      });
      $("content").insertAdjacentHTML("beforeend", html + "</ul></section>");
    });
  }

  function loadAll() {
    if (state.allLoaded) return Promise.resolve();
    var paths = Object.keys(state.byPath);
    return Promise.all(paths.map(function (p) {
      return fetchPage(p).catch(function () { return null; });
    })).then(function () { state.allLoaded = true; });
  }

  function showError(err) {
    var local = location.protocol === "file:";
    $("content").innerHTML = '<div class="error"><h2>讀不到頁面</h2><p>' + esc(err.message || String(err)) + "</p>" +
      (local ? "<p>你是直接雙擊 index.html 開啟的。瀏覽器的安全限制不允許網頁讀取本機的 .md 檔。請在這個資料夾開終端機，執行：</p><pre>python -m http.server 8000</pre><p>再用瀏覽器開啟 <code>http://localhost:8000</code>。</p>" : "") +
      "</div>";
  }

  // ---------- 小工具 ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&"); }

  // ---------- 啟動 ----------
  function init() {
    marked.setOptions({ gfm: true, breaks: false });
    fetchPage("index").then(function (page) {
      state.sections = parseIndex(page.body);
      state.sections.forEach(function (sec) {
        sec.items.forEach(function (it) {
          state.byPath[it.path] = it;
          var name = it.path.split("/").pop();
          state.byName[name] = it.path;
          state.byName[it.path] = it.path;
        });
      });
      ["overview", "log", "open-questions"].forEach(function (p) { registerPath(p); });
      renderNav();
      route();
      loadAll().then(function () { if ($("search").value) renderNav($("search").value); });
    }).catch(showError);

    window.addEventListener("hashchange", route);
    $("search").addEventListener("input", function (e) { renderNav(e.target.value); });
    $("menuBtn").addEventListener("click", function () { document.body.classList.toggle("nav-open"); });
    $("nav").addEventListener("click", function () { document.body.classList.remove("nav-open"); });
    $("toc").addEventListener("click", function (e) {
      var t = e.target.getAttribute && e.target.getAttribute("data-target");
      if (t) document.getElementById(t).scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function route() { showPage(currentPath()); }

  init();
})();
