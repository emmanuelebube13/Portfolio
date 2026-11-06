/* Scalable Brain on the home page: a live status line, real figures and a small
   schema drawn from the public status file. The full view is a button away and
   loads only when a visitor asks for it. Delete this file and the #scalable-brain
   markup to replace the section. */
(function () {
  "use strict";

  var DATA_URL = "https://raw.githubusercontent.com/emmanuelebube13/scalablebrain-live/data/status.json";
  var PAGE_URL = "https://emmanuelebube13.github.io/scalablebrain-live/";
  var STALE_MINUTES = 20;
  var POLL_MS = 120000;

  var panel = document.getElementById("scalable-brain");
  var dialog = document.getElementById("sb-dialog");
  var frame = document.getElementById("sb-frame");
  var newTab = document.getElementById("sb-newtab");
  var lastFocus = null;

  /* ---------- Status ---------- */
  function compact(n) {
    return n >= 1e6 ? (n / 1e6).toFixed(1) + "M" : n >= 1e4 ? Math.round(n / 1e3) + "K" : Number(n).toLocaleString("en-US");
  }
  function age(minutes) {
    if (minutes < 2) return "just now";
    if (minutes < 90) return Math.round(minutes) + " min ago";
    if (minutes < 2160) return Math.round(minutes / 60) + " h ago";
    return Math.round(minutes / 1440) + " days ago";
  }
  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }
  var MARKS = { ok: "●", warn: "▲", fault: "✕", idle: "○" };
  function show(tone, state, when) {
    panel.setAttribute("data-tone", tone);
    setText("sb-state-mark", MARKS[tone]);
    setText("sb-state-text", state);
    setText("sb-state-age", when || "");
  }

  /* Calm, literal wording. Each phrase states only what the file reports. */
  function describe(d) {
    var systems = d.systems || [], jobs = d.scheduler || [];
    var faults = systems.filter(function (s) { return s.status === "fault"; }).length;
    var warns = systems.filter(function (s) { return s.status === "warn" || s.status === "unknown"; }).length;
    var jobIssues = jobs.filter(function (j) { return j.status !== "ok"; }).length;
    if (faults) return ["fault", faults === 1 ? "A system has a fault" : faults + " systems have faults"];
    if (warns) return ["warn", warns === 1 ? "A system needs attention" : warns + " systems need attention"];
    if (jobIssues) return ["warn", jobIssues === 1 ? "Running. One scheduled job needs attention" : "Running. " + jobIssues + " scheduled jobs need attention"];
    return ["ok", d.market && d.market.open === false ? "Running normally. Market closed" : "Running normally"];
  }

  /* ---------- Schema: fact and dimension tables, with live row counts ---------- */
  var FALLBACK = [
    ["fact_market_prices", ["dim_asset"]], ["fact_market_regime_v2", ["dim_asset"]],
    ["fact_signals", ["dim_asset", "dim_strategy_registry"]], ["fact_trade_outcomes", ["dim_asset", "dim_strategy_registry"]],
    ["fact_live_trades", ["dim_asset", "dim_strategy_registry"]]
  ];
  function esc(v) {
    return String(v).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function drawSchema(tables) {
    var host = document.getElementById("sb-schema-host");
    if (!host) return;
    var rows = {};
    var facts = FALLBACK;
    if (tables && tables.length) {
      tables.forEach(function (t) { rows[t.name] = t.rows; });
      var live = tables.filter(function (t) { return /^fact_/.test(t.name) && (t.links || []).length; })
        .map(function (t) { return [t.name, t.links]; });
      if (live.length) facts = live;
    }
    var dims = [];
    facts.forEach(function (f) { f[1].forEach(function (d) { if (dims.indexOf(d) === -1) dims.push(d); }); });
    var H = 30, GAP = 6, W = 640, boxW = 262, dimW = 216, dimX = W - dimW;
    var total = facts.length * (H + GAP) - GAP;
    var dimTop = Math.max(0, (total - (dims.length * (H + 18) - 18)) / 2);
    var dimY = {};
    dims.forEach(function (d, i) { dimY[d] = dimTop + i * (H + 18) + H / 2; });
    var out = "";
    facts.forEach(function (f, i) {
      var y = i * (H + GAP);
      f[1].forEach(function (d, k) {
        var y1 = y + H / 2 + (f[1].length > 1 ? (k ? 6 : -6) : 0), y2 = dimY[d] + (k ? 4 : -4) * 0 , x1 = boxW, x2 = dimX;
        out += '<path class="edge" d="M' + x1 + " " + y1 + "C" + (x1 + 70) + " " + y1 + "," + (x2 - 70) + " " + y2 + "," + x2 + " " + y2 +
          "M" + (x1 + 10) + " " + y1 + "L" + x1 + " " + (y1 - 5) + "M" + (x1 + 10) + " " + y1 + "L" + x1 + " " + (y1 + 5) + '"/>';
      });
    });
    dims.forEach(function (d) { out += '<path class="edge" d="M' + (dimX - 6) + " " + (dimY[d] - 6) + "V" + (dimY[d] + 6) + '"/>'; });
    facts.forEach(function (f, i) {
      var y = i * (H + GAP);
      out += '<rect class="box" x="0.5" y="' + (y + 0.5) + '" width="' + (boxW - 1) + '" height="' + (H - 1) + '" rx="4"/>' +
        '<text x="10" y="' + (y + 19) + '">' + esc(f[0]) + "</text>" +
        (rows[f[0]] !== undefined ? '<text class="count" x="' + (boxW - 10) + '" y="' + (y + 19) + '" text-anchor="end">' + esc(compact(rows[f[0]])) + "</text>" : "");
    });
    dims.forEach(function (d) {
      var y = dimY[d] - H / 2;
      out += '<rect class="box box-dim" x="' + (dimX + 0.5) + '" y="' + (y + 0.5) + '" width="' + (dimW - 1) + '" height="' + (H - 1) + '" rx="4"/>' +
        '<text x="' + (dimX + 10) + '" y="' + (y + 19) + '">' + esc(d) + "</text>" +
        (rows[d] !== undefined ? '<text class="count" x="' + (W - 10) + '" y="' + (y + 19) + '" text-anchor="end">' + esc(compact(rows[d])) + "</text>" : "");
    });
    host.innerHTML = '<svg class="sb-schema-svg" viewBox="0 0 ' + W + " " + total + '" aria-hidden="true">' + out + "</svg>";
  }

  /* ---------- Data ---------- */
  function load() {
    return fetch(DATA_URL + "?t=" + Math.floor(Date.now() / 60000), { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("status " + r.status);
        return r.json();
      })
      .then(function (d) {
        var minutes = (Date.now() - Date.parse(d.generated_at)) / 60000;
        var data = d.data || {}, trials = (d.research && d.research.trials) || {};
        setText("sb-rows", data.total_rows === undefined ? "—" : compact(data.total_rows));
        setText("sb-tables", (data.tables || []).length || "—");
        setText("sb-trials", trials.total === undefined ? "—" : trials.total);
        setText("sb-passed", trials.pass === undefined ? "—" : trials.pass);
        drawSchema(data.tables);
        if (minutes > STALE_MINUTES) {
          show("idle", "Updates paused", "Last update " + age(minutes));
          return;
        }
        var v = describe(d);
        show(v[0], v[1], "Updated " + age(minutes));
      })
      .catch(function () {
        show("idle", "Live status could not be loaded just now", "");
        drawSchema(null);
      });
  }

  /* ---------- Viewer ---------- */
  function openViewer(view) {
    var hash = view ? "#" + view : "";
    if (newTab) newTab.setAttribute("href", PAGE_URL + hash);
    lastFocus = document.activeElement;
    var url = PAGE_URL + "?embed=1&theme=dark" + hash;
    if (frame.getAttribute("src") !== url) frame.setAttribute("src", url);
    dialog.showModal();
    document.documentElement.classList.add("sb-dialog-open");
  }

  document.querySelectorAll("[data-sb-open]").forEach(function (el) {
    el.addEventListener("click", function (event) {
      /* Modified clicks and browsers without <dialog> follow the real link. */
      if (event.ctrlKey || event.metaKey || event.shiftKey || !dialog || typeof dialog.showModal !== "function") return;
      event.preventDefault();
      openViewer(el.getAttribute("data-sb-open"));
    });
  });

  if (dialog) {
    dialog.querySelector("[data-sb-close]").addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (event) { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("close", function () {
      document.documentElement.classList.remove("sb-dialog-open");
      if (lastFocus) lastFocus.focus();
    });
  }

  if (panel) {
    drawSchema(null);
    load();
    setInterval(load, POLL_MS);
  }
})();
