/* ============================================================
   CAREER FLOW + SKILL TOPOLOGY

   Ported from the Astro/d3 originals to vanilla JS and recoloured
   for this site's light surface. Both graphs degrade to a written
   summary if d3 fails to load, and both ship visible labels — the
   aqua slot sits below 3:1 on white, so text relief is required.

   Categorical slots (validated all-pairs on #ffffff):
     blue #2a78d6 · orange #eb6834 · aqua #1baf7a
   ============================================================ */

const GRAPH_COLORS = {
  role: "#2a78d6",
  domain: "#eb6834",
  tool: "#1baf7a",
  Analytics: "#2a78d6",
  Engineering: "#eb6834",
  Strategy: "#1baf7a",
};

const GRAPH_INK = "#52514e";
const GRAPH_INK_STRONG = "#0b0b0b";
const GRAPH_SURFACE = "#ffffff";
const GRAPH_LINE = "#d8dde2";

/* ------------------------------------------------------------
   CAREER FLOW DATA
   Rebuilt from the current resume: roles feed domains, domains
   feed tools. Values are relative weights, not hours or counts.
   ------------------------------------------------------------ */
const careerFlow = {
  nodes: [
    // Roles
    { id: "tdl", name: "Data Analyst @ Together Design Lab", type: "role" },
    { id: "detect", name: "Utility Data Analyst @ Detect Technologies", type: "role" },
    { id: "newroots", name: "Data Analyst @ NewRoots", type: "role" },
    { id: "grid", name: "Project Lead @ Grid Power Energy", type: "role" },
    { id: "brain", name: "Scalable Brain (Trading System)", type: "role" },
    { id: "makerspace", name: "Makerspace Assistant @ NSCC", type: "role" },
    { id: "northwest", name: "Product Supervisor @ Northwest Co.", type: "role" },
    { id: "nscc", name: "Diploma, IT Data Analytics (NSCC)", type: "role" },
    { id: "unn", name: "B.Eng Electrical (UNN)", type: "role" },

    // Domains
    { id: "d_research", name: "Applied Research", type: "domain" },
    { id: "d_etl", name: "ETL & Data Pipelines", type: "domain" },
    { id: "d_viz", name: "Visualization & BI", type: "domain" },
    { id: "d_geo", name: "Geospatial Analysis", type: "domain" },
    { id: "d_ml", name: "Machine Learning", type: "domain" },
    { id: "d_trading", name: "Algorithmic Trading", type: "domain" },
    { id: "d_arch", name: "System Architecture", type: "domain" },
    { id: "d_ops", name: "Operations Analytics", type: "domain" },
    { id: "d_energy", name: "Energy & Policy Analysis", type: "domain" },

    // Tools
    { id: "t_python", name: "Python", type: "tool" },
    { id: "t_r", name: "R", type: "tool" },
    { id: "t_sql", name: "SQL", type: "tool" },
    { id: "t_pandas", name: "Pandas / NumPy", type: "tool" },
    { id: "t_bi", name: "Power BI / Tableau", type: "tool" },
    { id: "t_maps", name: "Leaflet / Folium / Plotly", type: "tool" },
    { id: "t_arcgis", name: "ArcGIS", type: "tool" },
    { id: "t_excel", name: "Excel", type: "tool" },
    { id: "t_ssis", name: "SSIS / SSRS", type: "tool" },
    { id: "t_spark", name: "Apache Spark", type: "tool" },
    { id: "t_docker", name: "Docker", type: "tool" },
    { id: "t_git", name: "Git / GitHub Actions", type: "tool" },
    { id: "t_cloud", name: "AWS / Azure", type: "tool" },
  ],
  links: [
    // Roles -> domains
    { source: "tdl", target: "d_research", value: 4 },
    { source: "tdl", target: "d_etl", value: 3 },
    { source: "tdl", target: "d_geo", value: 3 },
    { source: "tdl", target: "d_viz", value: 2 },
    { source: "detect", target: "d_ops", value: 3 },
    { source: "detect", target: "d_ml", value: 2 },
    { source: "detect", target: "d_viz", value: 1 },
    { source: "newroots", target: "d_research", value: 3 },
    { source: "newroots", target: "d_viz", value: 2 },
    { source: "newroots", target: "d_etl", value: 1 },
    { source: "grid", target: "d_energy", value: 4 },
    { source: "grid", target: "d_etl", value: 2 },
    { source: "grid", target: "d_research", value: 2 },
    { source: "brain", target: "d_trading", value: 4 },
    { source: "brain", target: "d_ml", value: 3 },
    { source: "brain", target: "d_arch", value: 2 },
    { source: "makerspace", target: "d_research", value: 2 },
    { source: "makerspace", target: "d_arch", value: 1 },
    { source: "northwest", target: "d_ops", value: 3 },
    { source: "nscc", target: "d_etl", value: 3 },
    { source: "nscc", target: "d_viz", value: 3 },
    { source: "nscc", target: "d_ml", value: 2 },
    { source: "nscc", target: "d_arch", value: 1 },
    { source: "unn", target: "d_arch", value: 2 },
    { source: "unn", target: "d_energy", value: 2 },

    // Domains -> tools
    { source: "d_research", target: "t_python", value: 4 },
    { source: "d_research", target: "t_r", value: 3 },
    { source: "d_research", target: "t_excel", value: 2 },
    { source: "d_etl", target: "t_python", value: 3 },
    { source: "d_etl", target: "t_sql", value: 3 },
    { source: "d_etl", target: "t_pandas", value: 2 },
    { source: "d_etl", target: "t_ssis", value: 2 },
    { source: "d_etl", target: "t_spark", value: 1 },
    { source: "d_viz", target: "t_bi", value: 4 },
    { source: "d_viz", target: "t_python", value: 2 },
    { source: "d_viz", target: "t_excel", value: 2 },
    { source: "d_geo", target: "t_maps", value: 3 },
    { source: "d_geo", target: "t_arcgis", value: 2 },
    { source: "d_geo", target: "t_python", value: 1 },
    { source: "d_ml", target: "t_python", value: 4 },
    { source: "d_ml", target: "t_pandas", value: 3 },
    { source: "d_trading", target: "t_python", value: 2 },
    { source: "d_trading", target: "t_docker", value: 2 },
    { source: "d_trading", target: "t_sql", value: 1 },
    { source: "d_arch", target: "t_docker", value: 2 },
    { source: "d_arch", target: "t_git", value: 3 },
    { source: "d_arch", target: "t_cloud", value: 2 },
    { source: "d_ops", target: "t_excel", value: 3 },
    { source: "d_ops", target: "t_bi", value: 2 },
    { source: "d_ops", target: "t_sql", value: 1 },
    { source: "d_energy", target: "t_sql", value: 3 },
    { source: "d_energy", target: "t_python", value: 2 },
    { source: "d_energy", target: "t_excel", value: 1 },
  ],
};

/* ------------------------------------------------------------
   SKILL TOPOLOGY DATA
   ------------------------------------------------------------ */
const skillTopology = {
  nodes: [
    { id: "Python", group: "Engineering", size: 10 },
    { id: "SQL", group: "Engineering", size: 8 },
    { id: "ETL Pipelines", group: "Engineering", size: 9 },
    { id: "SSIS / SSRS", group: "Engineering", size: 5 },
    { id: "Apache Spark", group: "Engineering", size: 4 },
    { id: "Web Scraping", group: "Engineering", size: 6 },
    { id: "TypeScript", group: "Engineering", size: 7 },
    { id: "React", group: "Engineering", size: 5 },
    { id: "Streamlit", group: "Engineering", size: 5 },
    { id: "Docker", group: "Engineering", size: 6 },
    { id: "Git / Actions", group: "Engineering", size: 6 },
    { id: "Azure", group: "Engineering", size: 4 },
    { id: "AWS", group: "Engineering", size: 4 },

    { id: "Pandas", group: "Analytics", size: 8 },
    { id: "NumPy", group: "Analytics", size: 7 },
    { id: "Power BI", group: "Analytics", size: 7 },
    { id: "Tableau", group: "Analytics", size: 6 },
    { id: "Excel", group: "Analytics", size: 6 },
    { id: "Matplotlib", group: "Analytics", size: 5 },
    { id: "EDA", group: "Analytics", size: 7 },
    { id: "Data Cleaning", group: "Analytics", size: 8 },
    { id: "R", group: "Analytics", size: 5 },
    { id: "Jupyter", group: "Analytics", size: 5 },
    { id: "ArcGIS", group: "Analytics", size: 6 },
    { id: "Leaflet / Folium", group: "Analytics", size: 7 },
    { id: "Geospatial", group: "Analytics", size: 7 },

    { id: "Machine Learning", group: "Strategy", size: 8 },
    { id: "XGBoost", group: "Strategy", size: 5 },
    { id: "Scikit-learn", group: "Strategy", size: 5 },
    { id: "Backtesting", group: "Strategy", size: 6 },
    { id: "Algorithmic Trading", group: "Strategy", size: 8 },
    { id: "Risk Management", group: "Strategy", size: 6 },
    { id: "System Architecture", group: "Strategy", size: 8 },
    { id: "Data Governance", group: "Strategy", size: 6 },
    { id: "Data Storytelling", group: "Strategy", size: 7 },
    { id: "Applied Research", group: "Strategy", size: 8 },
    { id: "Reproducibility", group: "Strategy", size: 7 },
  ],
  links: [
    ["Python", "Pandas"], ["Python", "NumPy"], ["Python", "Matplotlib"],
    ["Python", "Jupyter"], ["Python", "Scikit-learn"], ["Python", "Streamlit"],
    ["Python", "Web Scraping"], ["Python", "ETL Pipelines"], ["Python", "Leaflet / Folium"],
    ["Pandas", "Data Cleaning"], ["Pandas", "EDA"], ["NumPy", "Machine Learning"],
    ["SQL", "ETL Pipelines"], ["SQL", "SSIS / SSRS"], ["SQL", "Data Governance"],
    ["ETL Pipelines", "Data Cleaning"], ["ETL Pipelines", "Apache Spark"],
    ["ETL Pipelines", "Reproducibility"], ["Data Cleaning", "Reproducibility"],
    ["Data Cleaning", "Data Governance"], ["EDA", "Data Storytelling"],
    ["Power BI", "Data Storytelling"], ["Power BI", "Excel"], ["Tableau", "Data Storytelling"],
    ["Excel", "Data Cleaning"], ["R", "EDA"], ["R", "Machine Learning"],
    ["Matplotlib", "Data Storytelling"], ["Jupyter", "Reproducibility"],
    ["Geospatial", "ArcGIS"], ["Geospatial", "Leaflet / Folium"],
    ["Geospatial", "Applied Research"], ["ArcGIS", "Data Storytelling"],
    ["Machine Learning", "XGBoost"], ["Machine Learning", "Scikit-learn"],
    ["Machine Learning", "Backtesting"], ["Backtesting", "Algorithmic Trading"],
    ["Algorithmic Trading", "Risk Management"], ["Algorithmic Trading", "System Architecture"],
    ["System Architecture", "Docker"], ["System Architecture", "Git / Actions"],
    ["Docker", "AWS"], ["Docker", "Azure"], ["Git / Actions", "Reproducibility"],
    ["TypeScript", "React"], ["TypeScript", "Streamlit"], ["React", "Data Storytelling"],
    ["Web Scraping", "Data Cleaning"], ["Applied Research", "Data Storytelling"],
    ["Applied Research", "Reproducibility"], ["Applied Research", "EDA"],
  ].map(([source, target]) => ({ source, target })),
};

const reduceMotion = () =>
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============================================================
   CAREER FLOW — d3-sankey
   ============================================================ */
function initCareerFlow() {
  const inner = document.getElementById("career-flow-inner");
  if (!inner) return;
  const tooltip = document.getElementById("career-flow-tooltip");
  const fallback = document.getElementById("career-flow-fallback");

  if (typeof d3 === "undefined" || typeof d3.sankey === "undefined") {
    console.warn("career-flow: d3 / d3-sankey unavailable, keeping written summary");
    return;
  }

  // Below this the sankey shows less than half of itself; the written
  // summary communicates more than a diagram you have to drag.
  if (window.innerWidth < 700) {
    const note = document.getElementById("career-flow-mobile-note");
    if (note) note.removeAttribute("hidden");
    const hint = document.querySelector(".graph-scroll-hint");
    if (hint) hint.setAttribute("hidden", "");
    const scroll = document.querySelector("#career-flow .graph-scroll");
    if (scroll) scroll.setAttribute("hidden", "");
    return;
  }

  const HEIGHT = 620;
  const MIN_WIDTH = 760;
  const CHAR_W = 6.4;
  const WRAP_AT = 26;

  const adjacency = new Map();
  careerFlow.nodes.forEach((n) => adjacency.set(n.id, new Set([n.id])));
  careerFlow.links.forEach((l) => {
    adjacency.get(l.source)?.add(l.target);
    adjacency.get(l.target)?.add(l.source);
  });

  const padFor = (names, maxLen) =>
    Math.min(
      Math.max(...names.map((n) => Math.min(String(n).length, maxLen))) * CHAR_W + 16,
      210
    );
  const leftPad = padFor(careerFlow.nodes.filter((n) => n.type === "role").map((n) => n.name), WRAP_AT);
  const rightPad = padFor(careerFlow.nodes.filter((n) => n.type === "tool").map((n) => n.name), Infinity);

  function wrapLabel(selection, maxChars) {
    selection.each(function (d) {
      const text = d3.select(this);
      const words = String(d.name).split(" ");
      const lines = [""];
      for (const w of words) {
        const cur = lines[lines.length - 1];
        if (cur && (cur + " " + w).length > maxChars) lines.push(w);
        else lines[lines.length - 1] = cur ? cur + " " + w : w;
      }
      const shown = lines.slice(0, 2);
      if (lines.length > 2) shown[1] = shown[1] + " …";
      const x = text.attr("x");
      text.text(null);
      shown.forEach((line, i) => {
        text
          .append("tspan")
          .attr("x", x)
          .attr("dy", i === 0 ? (shown.length > 1 ? "-0.1em" : "0.35em") : "1.15em")
          .text(line);
      });
    });
  }

  function positionTooltip(event) {
    if (!tooltip) return;
    const rect = inner.getBoundingClientRect();
    const tw = tooltip.offsetWidth || 200;
    const x = event.clientX - rect.left + 14;
    const y = event.clientY - rect.top + 14;
    tooltip.style.left = Math.max(4, Math.min(x, rect.width - tw - 8)) + "px";
    tooltip.style.top = Math.max(4, y) + "px";
  }

  function render() {
    const width = Math.max(inner.clientWidth || MIN_WIDTH, MIN_WIDTH);
    inner.querySelectorAll("svg").forEach((s) => s.remove());

    const graph = d3
      .sankey()
      .nodeId((d) => d.id)
      .nodeWidth(13)
      .nodePadding(13)
      .extent([
        [leftPad, 8],
        [width - rightPad, HEIGHT - 8],
      ])({
      nodes: careerFlow.nodes.map((d) => ({ ...d })),
      links: careerFlow.links.map((d) => ({ ...d })),
    });

    const maxDepth = Math.max(...graph.nodes.map((d) => d.depth ?? 0));

    const svg = d3
      .select(inner)
      .append("svg")
      .attr("width", width)
      .attr("height", HEIGHT)
      .attr("viewBox", `0 0 ${width} ${HEIGHT}`)
      .attr("role", "img")
      .attr(
        "aria-label",
        "Sankey diagram: career roles flow into domains, and domains flow into tools. The same information is in the summary below."
      );

    const linkSel = svg
      .append("g")
      .selectAll("path")
      .data(graph.links)
      .join("path")
      .attr("class", "cf-link")
      .attr("d", d3.sankeyLinkHorizontal())
      .attr("stroke", (d) => GRAPH_COLORS[d.source.type] || "#8a9ba8")
      .attr("stroke-width", (d) => Math.max(1, d.width || 0))
      .attr("stroke-opacity", 0.42);

    const nodeSel = svg
      .append("g")
      .selectAll("g")
      .data(graph.nodes)
      .join("g")
      .attr("class", "cf-node")
      .attr("tabindex", 0)
      .attr("role", "button")
      .attr("aria-label", (d) => `${d.name}, ${d.type}`);

    nodeSel
      .append("rect")
      .attr("x", (d) => d.x0)
      .attr("y", (d) => d.y0)
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => Math.max(1, d.y1 - d.y0))
      .attr("rx", 2)
      .attr("fill", (d) => GRAPH_COLORS[d.type] || "#8a9ba8");

    // Labels wear ink, never the series color.
    nodeSel
      .append("text")
      .attr("x", (d) => (d.depth === 0 ? d.x0 - 8 : d.x1 + 8))
      .attr("y", (d) => (d.y0 + d.y1) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", (d) => (d.depth === 0 ? "end" : "start"))
      .attr("class", (d) => (d.depth === maxDepth ? "cf-tool-label" : null))
      .attr("fill", GRAPH_INK)
      .text((d) => d.name)
      .call(wrapLabel, WRAP_AT);

    function focus(d, event) {
      const neighbors = adjacency.get(d.id) || new Set([d.id]);
      linkSel.attr("stroke-opacity", (l) =>
        l.source.id === d.id || l.target.id === d.id ? 0.88 : 0.08
      );
      nodeSel.attr("opacity", (n) => (neighbors.has(n.id) ? 1 : 0.22));
      if (tooltip) {
        const inFlow = (d.targetLinks || []).reduce((s, l) => s + l.value, 0);
        const outFlow = (d.sourceLinks || []).reduce((s, l) => s + l.value, 0);
        tooltip.innerHTML =
          `<span class="cf-tip-name">${d.name}</span>` +
          `<span class="cf-tip-dim">${d.type} · connected weight ${inFlow + outFlow}</span>`;
        tooltip.style.display = "block";
        if (event) positionTooltip(event);
      }
    }

    function blur() {
      linkSel.attr("stroke-opacity", 0.42);
      nodeSel.attr("opacity", 1);
      if (tooltip) tooltip.style.display = "none";
    }

    let tapped = null;

    nodeSel
      .on("mouseenter", (event, d) => { if (tapped === null) focus(d, event); })
      .on("mousemove", (event) => { if (tapped === null) positionTooltip(event); })
      .on("mouseleave", () => { if (tapped === null) blur(); })
      .on("focus", (event, d) => focus(d, null))
      .on("blur", () => { if (tapped === null) blur(); })
      // Touch selects and holds; a second tap or a tap away clears it.
      .on("click", (event, d) => {
        event.stopPropagation();
        if (tapped === d.id) {
          tapped = null;
          blur();
        } else {
          tapped = d.id;
          focus(d, event);
        }
      });

    svg.on("click", () => {
      tapped = null;
      blur();
    });
  }

  render();
  // The summary stays in the DOM as the diagram's text equivalent; it is
  // collapsed rather than removed.
  if (fallback) fallback.classList.add("is-collapsed");

  let t;
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(render, 160);
  });
}

/* ============================================================
   SKILL TOPOLOGY — d3-force
   ============================================================ */
function initSkillTopology() {
  const mount = document.getElementById("skill-topology-graph");
  if (!mount) return;
  const fallback = document.getElementById("skill-topology-fallback");

  if (typeof d3 === "undefined" || typeof d3.forceSimulation === "undefined") {
    console.warn("skill-topology: d3 unavailable, keeping written summary");
    return;
  }

  // Dragging and tap-to-isolate do not work well on a phone, and 37 nodes in
  // a narrow viewport are unreadable. Keep the grouped list there instead.
  if (window.innerWidth < 700) {
    const note = document.getElementById("topology-mobile-note");
    if (note) note.removeAttribute("hidden");
    const reset = document.getElementById("topology-reset");
    if (reset) reset.setAttribute("hidden", "");
    return;
  }

  const nodes = skillTopology.nodes.map((d) => ({ ...d }));
  const links = skillTopology.links.map((d) => ({ ...d }));

  const adjacency = new Map();
  skillTopology.nodes.forEach((n) => adjacency.set(n.id, new Set([n.id])));
  skillTopology.links.forEach((l) => {
    adjacency.get(l.source)?.add(l.target);
    adjacency.get(l.target)?.add(l.source);
  });

  const width = 1180;
  const height = 640;
  const radius = (d) => d.size * 2.1;

  const groupCenter = {
    Analytics: { x: width * 0.27, y: height * 0.36 },
    Engineering: { x: width * 0.73, y: height * 0.38 },
    Strategy: { x: width * 0.5, y: height * 0.79 },
  };

  const svg = d3
    .select(mount)
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("class", "topology-svg")
    .attr("role", "img")
    .attr(
      "aria-label",
      "Force-directed graph of skills grouped into Analytics, Engineering and Strategy. The same skills are listed in the summary below."
    );

  svg
    .append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "transparent")
    .on("click", () => resetFocus());

  const simulation = d3
    .forceSimulation(nodes)
    .force("link", d3.forceLink(links).id((d) => d.id).distance(72))
    .force("charge", d3.forceManyBody().strength(-190))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide((d) => radius(d) + 15))
    .force("x", d3.forceX((d) => groupCenter[d.group].x).strength(0.07))
    .force("y", d3.forceY((d) => groupCenter[d.group].y).strength(0.07));

  const link = svg
    .append("g")
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke", GRAPH_LINE)
    .attr("stroke-opacity", 0.9)
    .attr("stroke-width", 1.2);

  const node = svg
    .append("g")
    .selectAll("g")
    .data(nodes)
    .join("g")
    .attr("class", "topo-node")
    .attr("tabindex", 0)
    .attr("role", "button")
    .attr("aria-label", (d) => `${d.id}, ${d.group}`)
    .call(
      d3
        .drag()
        .clickDistance(4)
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.25).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event) => {
          if (!event.active) simulation.alphaTarget(0);
        })
    );

  const circle = node
    .append("circle")
    .attr("r", radius)
    .attr("fill", (d) => GRAPH_COLORS[d.group])
    .attr("fill-opacity", 0.92)
    .attr("stroke", GRAPH_SURFACE)
    .attr("stroke-width", 2);

  // Bigger nodes keep a permanent label; the rest reveal on hover/focus.
  const baseLabelOpacity = (d) => (d.size >= 7 ? 1 : 0);
  node
    .append("text")
    .text((d) => d.id)
    .attr("x", (d) => radius(d) + 6)
    .attr("y", 4)
    .attr("font-size", (d) => (d.size >= 7 ? 12 : 11))
    .attr("fill", GRAPH_INK_STRONG)
    .attr("stroke", GRAPH_SURFACE)
    .attr("stroke-width", 3)
    .attr("stroke-linejoin", "round")
    .attr("paint-order", "stroke fill")
    .attr("pointer-events", "none")
    .attr("opacity", baseLabelOpacity);

  let focusedId = null;

  function applyFocus(id) {
    focusedId = id;
    const keep = adjacency.get(id) || new Set([id]);
    node.attr("opacity", (d) => (keep.has(d.id) ? 1 : 0.1));
    link.attr("stroke-opacity", (l) =>
      keep.has(l.source.id) && keep.has(l.target.id) ? 1 : 0.08
    );
    circle
      .attr("stroke", (d) => (d.id === id ? GRAPH_INK_STRONG : GRAPH_SURFACE))
      .attr("stroke-width", (d) => (d.id === id ? 2.5 : 2));
  }

  function resetFocus() {
    focusedId = null;
    node.attr("opacity", 1);
    link.attr("stroke-opacity", 0.9);
    circle.attr("stroke", GRAPH_SURFACE).attr("stroke-width", 2);
  }

  node
    .on("mouseenter", (event) => {
      d3.select(event.currentTarget).select("text").attr("opacity", 1);
    })
    .on("mouseleave", (event, d) => {
      d3.select(event.currentTarget).select("text").attr("opacity", baseLabelOpacity(d));
    })
    .on("focus", (event, d) => {
      d3.select(event.currentTarget).select("text").attr("opacity", 1);
    })
    .on("blur", (event, d) => {
      d3.select(event.currentTarget).select("text").attr("opacity", baseLabelOpacity(d));
    })
    .on("click", (event, d) => {
      event.stopPropagation();
      if (focusedId === d.id) resetFocus();
      else applyFocus(d.id);
    })
    .on("keydown", (event, d) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (focusedId === d.id) resetFocus();
        else applyFocus(d.id);
      } else if (event.key === "Escape") {
        resetFocus();
      }
    })
    .on("dblclick", (event, d) => {
      event.stopPropagation();
      d.fx = null;
      d.fy = null;
      simulation.alpha(0.2).restart();
    });

  simulation.on("tick", () => {
    link
      .attr("x1", (d) => d.source.x ?? 0)
      .attr("y1", (d) => d.source.y ?? 0)
      .attr("x2", (d) => d.target.x ?? 0)
      .attr("y2", (d) => d.target.y ?? 0);
    node.attr("transform", (d) => `translate(${d.x ?? 0},${d.y ?? 0})`);
  });

  // Reduced motion: settle the layout immediately rather than animating it in.
  if (reduceMotion()) {
    simulation.stop();
    for (let i = 0; i < 300; i++) simulation.tick();
    simulation.on("tick")();
  }

  const reset = document.getElementById("topology-reset");
  if (reset) reset.addEventListener("click", () => {
    resetFocus();
    nodes.forEach((n) => {
      n.fx = null;
      n.fy = null;
    });
    simulation.alpha(0.5).restart();
  });

  if (fallback) fallback.classList.add("is-collapsed");
}

document.addEventListener("DOMContentLoaded", () => {
  initCareerFlow();
  initSkillTopology();
});
