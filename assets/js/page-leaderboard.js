import { leaderboardData } from "../data/leaderboard.js";
import { initPageEffects, pageDashboardHeader, pageWrap } from "./components.js";
import { prepareLeaderboardGroups, renderLeaderboardTable } from "./leaderboard-table.js";

const LEADERBOARD_SUBTITLE =
  "Standardized attack comparison under fair and consistent evaluation protocols";

function uniqueValues(groups, key) {
  return [...new Set(groups.map((row) => row[key]))];
}

function options(values, selected) {
  return values
    .map((value) => `<option value="${value}" ${selected === value ? "selected" : ""}>${value}</option>`)
    .join("");
}

function renderTable(group) {
  const caption = `${group.dataset} · ${group.setting} · ${group.victim}`;
  return `
    <section class="agb-leaderboard-group agb-page-reveal">
      <div class="agb-leaderboard-group-head">
        <h3>${caption}</h3>
      </div>
      ${renderLeaderboardTable(group.entries, { caption })}
    </section>
  `;
}

function sectionAnchor(sectionName) {
  if (sectionName.includes("Homophily")) return "homophily";
  if (sectionName.includes("Heterophily")) return "heterophily";
  if (sectionName.includes("Large-Scale")) return "large-scale";
  return "";
}

const sectionIcons = {
  homophily: "fa-line-chart",
  heterophily: "fa-random",
  "large-scale": "fa-database"
};

function renderSection(sectionName, groups) {
  const idAttr = sectionAnchor(sectionName);
  const icon = sectionIcons[idAttr] || "fa-bar-chart";
  return `
    <section class="agb-leaderboard-section agb-page-reveal"${idAttr ? ` id="${idAttr}"` : ""}>
      <h2 class="agb-section-heading">
        <i class="fa ${icon} agb-section-icon" aria-hidden="true"></i>
        <span>${sectionName}</span>
      </h2>
      ${groups.map(renderTable).join("")}
    </section>
  `;
}

function renderLeaderboardShell(mainContent) {
  return pageWrap({
    theme: "leaderboard",
    className: "agb-leaderboard-page-wrap",
    body: `
      <div class="container agb-page-shell agb-leaderboard-dashboard">
        ${pageDashboardHeader({ title: "Leaderboard", subtitle: LEADERBOARD_SUBTITLE })}
        ${mainContent}
      </div>
    `
  });
}

function showError(root, message) {
  root.innerHTML = renderLeaderboardShell(`
    <div class="agb-leaderboard-dashboard-body agb-page-reveal">
      <div class="agb-panel agb-leaderboard-error" role="alert">
        <p class="agb-body-text"><strong>Unable to load leaderboard.</strong> ${message}</p>
      </div>
    </div>
  `);
  initPageEffects(root);
}

function initLeaderboard() {
  const root = document.getElementById("page-root");
  if (!root) return;

  let preparedGroups;
  try {
    if (!Array.isArray(leaderboardData) || !leaderboardData.length) {
      throw new Error("Leaderboard data is empty or missing.");
    }
    preparedGroups = prepareLeaderboardGroups(leaderboardData);
    if (!preparedGroups.length) {
      throw new Error("No leaderboard groups available.");
    }
  } catch (err) {
    showError(root, err.message || String(err));
    return;
  }

  const datasetOptions = ["All", ...uniqueValues(preparedGroups, "dataset")];
  const settingOptions = ["All", ...uniqueValues(preparedGroups, "setting")];
  const victimOptions = ["All", ...uniqueValues(preparedGroups, "victim")];

  root.innerHTML = renderLeaderboardShell(`
    <div class="agb-leaderboard-dashboard-body agb-page-reveal">
      <div class="agb-leaderboard-filters">
        <label class="agb-lb-filter">
          <span class="agb-lb-filter-label">Dataset</span>
          <span class="agb-lb-filter-field">
            <select id="filter-dataset">${options(datasetOptions, "All")}</select>
            <i class="fa fa-chevron-down agb-lb-filter-chevron" aria-hidden="true"></i>
          </span>
        </label>
        <label class="agb-lb-filter">
          <span class="agb-lb-filter-label">Setting</span>
          <span class="agb-lb-filter-field">
            <select id="filter-setting">${options(settingOptions, "All")}</select>
            <i class="fa fa-chevron-down agb-lb-filter-chevron" aria-hidden="true"></i>
          </span>
        </label>
        <label class="agb-lb-filter">
          <span class="agb-lb-filter-label">Victim model</span>
          <span class="agb-lb-filter-field">
            <select id="filter-victim">${options(victimOptions, "All")}</select>
            <i class="fa fa-chevron-down agb-lb-filter-chevron" aria-hidden="true"></i>
          </span>
        </label>
      </div>
      <div id="leaderboard-results" class="agb-leaderboard-results" aria-live="polite"></div>
      <div class="agb-panel agb-info-panel agb-info-panel--footnote">
        <p class="agb-body-text">
          <i class="fa fa-info-circle agb-panel-icon" aria-hidden="true"></i>
          This leaderboard is derived from standardized evaluation of adversarial attacks on GNNs. Results are reported
          across five perturbation budgets; higher values indicate stronger attack performance. Attack time reflects
          end-to-end runtime for the full evaluation protocol.
        </p>
      </div>
    </div>
  `);

  initPageEffects(root);

  const datasetSelect = document.getElementById("filter-dataset");
  const settingSelect = document.getElementById("filter-setting");
  const victimSelect = document.getElementById("filter-victim");
  const resultsContainer = document.getElementById("leaderboard-results");

  if (!datasetSelect || !settingSelect || !victimSelect || !resultsContainer) {
    showError(root, "Leaderboard UI failed to initialize.");
    return;
  }

  function applyFilters() {
    const dataset = datasetSelect.value;
    const setting = settingSelect.value;
    const victim = victimSelect.value;

    const filtered = preparedGroups.filter((row) => {
      const matchDataset = dataset === "All" || row.dataset === dataset;
      const matchSetting = setting === "All" || row.setting === setting;
      const matchVictim = victim === "All" || row.victim === victim;
      return matchDataset && matchSetting && matchVictim;
    });

    if (!filtered.length) {
      resultsContainer.innerHTML =
        '<div class="agb-panel"><p class="agb-body-text">No entries match the current filter selection.</p></div>';
      return;
    }

    const sections = [...new Set(filtered.map((row) => row.section))];
    resultsContainer.innerHTML = sections
      .map((section) => {
        const groups = filtered.filter((row) => row.section === section);
        return renderSection(section, groups);
      })
      .join("");
    initPageEffects(resultsContainer);
  }

  datasetSelect.addEventListener("change", applyFilters);
  settingSelect.addEventListener("change", applyFilters);
  victimSelect.addEventListener("change", applyFilters);
  applyFilters();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLeaderboard);
} else {
  initLeaderboard();
}
