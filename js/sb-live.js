/* Scalable Brain strip: a one-line live status at the top of the home page.
   The full view loads only when a visitor asks for it. */
(function () {
  "use strict";

  var DATA_URL = "https://raw.githubusercontent.com/emmanuelebube13/scalablebrain-live/data/status.json";
  var PAGE_URL = "https://emmanuelebube13.github.io/scalablebrain-live/";
  var STALE_MINUTES = 20;
  var POLL_MS = 120000;

  var strip = document.getElementById("sb-live");
  if (!strip) return;
  var stateEl = document.getElementById("sb-live-state");
  var statsEl = document.getElementById("sb-live-stats");
  var dialog = document.getElementById("sb-dialog");
  var frame = document.getElementById("sb-frame");
  var lastFocus = null;

  function compact(n) {
    return n >= 1e6 ? (n / 1e6).toFixed(1) + "M" : Number(n).toLocaleString("en-US");
  }

  function age(minutes) {
    if (minutes < 2) return "just now";
    if (minutes < 90) return Math.round(minutes) + " min ago";
    if (minutes < 2160) return Math.round(minutes / 60) + " h ago";
    return Math.round(minutes / 1440) + " days ago";
  }

  function show(tone, state, stats) {
    strip.setAttribute("data-tone", tone);
    stateEl.textContent = state;
    statsEl.textContent = stats;
  }

  function load() {
    fetch(DATA_URL + "?t=" + Math.floor(Date.now() / 60000), { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("status " + r.status);
        return r.json();
      })
      .then(function (d) {
        var minutes = (Date.now() - Date.parse(d.generated_at)) / 60000;
        var stats = compact(d.data.total_rows) + " rows modelled · " + d.research.trials.total + " registered trials · updated " + age(minutes);
        if (minutes > STALE_MINUTES) {
          show("idle", "Updates paused", stats);
          return;
        }
        var attention = (d.systems || []).some(function (s) {
          return s.status === "fault" || s.status === "warn" || s.status === "unknown";
        });
        var jobIssue = (d.scheduler || []).some(function (j) { return j.status === "warn"; });
        if (attention) show("warn", "Live · a system needs attention", stats);
        else if (jobIssue) show("warn", "Live · a job needs attention", stats);
        else show("ok", "Live · all systems normal", stats);
      })
      .catch(function () {
        show("idle", "Live view", "System health, data model and research record");
      });
  }

  function openViewer() {
    if (!dialog || typeof dialog.showModal !== "function") {
      window.open(PAGE_URL, "_blank", "noopener");
      return;
    }
    lastFocus = document.activeElement;
    if (!frame.getAttribute("src")) frame.setAttribute("src", PAGE_URL + "?embed=1&theme=light");
    dialog.showModal();
    document.documentElement.classList.add("sb-dialog-open");
  }

  document.querySelectorAll("[data-sb-open]").forEach(function (button) {
    button.addEventListener("click", openViewer);
  });

  if (dialog) {
    dialog.querySelector("[data-sb-close]").addEventListener("click", function () {
      dialog.close();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", function () {
      document.documentElement.classList.remove("sb-dialog-open");
      if (lastFocus) lastFocus.focus();
    });
  }

  load();
  setInterval(load, POLL_MS);
})();
