import { leaderboardData } from "/data/leaderboard.js";
import { pageHeader } from "/assets/js/components.js";

const root = document.getElementById("page-root");

function sortAndRank(entries) {
  return [...entries]
    .sort((a, b) => b.score - a.score)
    .map((entry, idx) => ({ ...entry, rank: idx + 1 }));
}

function uniqueValues(key) {
  return [...new Set(leaderboardData.map((row) => row[key]))];
}

function options(values, selected) {
  return values
    .map((value) => `<option value="${value}" ${selected === value ? "selected" : ""}>${value}</option>`)
    .join("");
}

function renderTable(group) {
  const ranked = sortAndRank(group.entries);
  const bestMethod = ranked.length ? ranked[0].method : "";

  return `
    <section class="agb-leaderboard-group">
      <div class="agb-leaderboard-group-head">
        <h3>${group.dataset} &middot; ${group.setting} &middot; ${group.victim}</h3>
      </div>
      <div class="agb-leaderboard-table-wrap">
        <table class="agb-leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Method</th>
              <th>Score (%)</th>
            </tr>
          </thead>
          <tbody>
            ${ranked
              .map(
                (entry) => `
              <tr class="${entry.method === bestMethod ? "is-best" : ""}">
                <td>#${entry.rank}</td>
                <td>${entry.method}</td>
                <td>${entry.score.toFixed(2)}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderSection(sectionName, groups) {
  return `
    <section class="agb-leaderboard-section">
      <h2>${sectionName}</h2>
      ${groups.map(renderTable).join("")}
    </section>
  `;
}

if (root) {
  const datasetOptions = ["All", ...uniqueValues("dataset")];
  const settingOptions = ["All", ...uniqueValues("setting")];
  const victimOptions = ["All", ...uniqueValues("victim")];

  root.innerHTML = `
    ${pageHeader({
      title: "Leaderboard",
      subtitle: "Standardized attack comparison under fair and consistent evaluation protocols"
    })}
    <section class="agb-section">
      <div class="container">
        <div class="agb-panel">
          <p class="agb-body-text">
            This leaderboard is derived from standardized evaluation of adversarial attacks on GNNs. Results are based on
            misclassification rate, where higher values indicate stronger attack performance under fair and consistent
            evaluation settings. Scores aggregate comparable setups across multiple splits to reduce reporting bias.
          </p>
        </div>
        <div class="agb-leaderboard-filters">
          <label>
            Dataset
            <select id="filter-dataset">${options(datasetOptions, "All")}</select>
          </label>
          <label>
            Setting
            <select id="filter-setting">${options(settingOptions, "All")}</select>
          </label>
          <label>
            Victim model
            <select id="filter-victim">${options(victimOptions, "All")}</select>
          </label>
        </div>
        <div id="leaderboard-results"></div>
      </div>
    </section>
  `;

  const datasetSelect = document.getElementById("filter-dataset");
  const settingSelect = document.getElementById("filter-setting");
  const victimSelect = document.getElementById("filter-victim");
  const resultsContainer = document.getElementById("leaderboard-results");

  function applyFilters() {
    const dataset = datasetSelect.value;
    const setting = settingSelect.value;
    const victim = victimSelect.value;

    const filtered = leaderboardData.filter((row) => {
      const matchDataset = dataset === "All" || row.dataset === dataset;
      const matchSetting = setting === "All" || row.setting === setting;
      const matchVictim = victim === "All" || row.victim === victim;
      return matchDataset && matchSetting && matchVictim;
    });

    if (!filtered.length) {
      resultsContainer.innerHTML = `<div class="agb-panel"><p class="agb-body-text">No entries match the current filter selection.</p></div>`;
      return;
    }

    const sections = [...new Set(filtered.map((row) => row.section))];
    resultsContainer.innerHTML = sections
      .map((section) => {
        const groups = filtered.filter((row) => row.section === section);
        return renderSection(section, groups);
      })
      .join("");
  }

  datasetSelect.addEventListener("change", applyFilters);
  settingSelect.addEventListener("change", applyFilters);
  victimSelect.addEventListener("change", applyFilters);
  applyFilters();
}
