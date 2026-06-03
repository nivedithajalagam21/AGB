import {
  agbDatasets,
  datasetCategories,
  datasetsHero
} from "../data/datasets.js";
import {
  initPageEffects,
  pageHeader,
  pageWrap
} from "./components.js";

function formatCount(n) {
  return typeof n === "number" ? n.toLocaleString() : "—";
}

function filterDatasets(type) {
  return agbDatasets.filter((row) => row.type === type);
}

function renderSectionTitle(title, icon, extraClass = "") {
  return `
    <h2 class="agb-datasets-section-title agb-section-heading ${extraClass}">
      <i class="fa ${icon} agb-section-icon" aria-hidden="true"></i>
      <span>${title}</span>
    </h2>
  `;
}

function renderDatasetCards(rows) {
  return `
    <div class="row agb-datasets-card-row">
      ${rows
        .map(
          (row) => `
        <div class="col-md-4 col-sm-6 agb-datasets-card-col">
          <article class="agb-datasets-dataset-card agb-datasets-dataset-card--${row.type.toLowerCase().replace(/\s+/g, "-")}">
            <h3 class="agb-datasets-dataset-card-title">${row.name}</h3>
            <p class="agb-datasets-dataset-card-type">${row.type}</p>
            <dl class="agb-datasets-dataset-card-stats">
              <div><dt>Nodes</dt><dd>${formatCount(row.nodes)}</dd></div>
              <div><dt>Edges</dt><dd>${formatCount(row.edges)}</dd></div>
              <div><dt>Features</dt><dd>${formatCount(row.features)}</dd></div>
              <div><dt>Labels</dt><dd>${formatCount(row.labels)}</dd></div>
            </dl>
          </article>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

function renderDatasetsTable(rows) {
  const head = `
    <thead>
      <tr>
        <th scope="col">Dataset</th>
        <th scope="col">Type</th>
        <th scope="col" class="agb-datasets-num">Nodes</th>
        <th scope="col" class="agb-datasets-num">Edges</th>
        <th scope="col" class="agb-datasets-num">Features</th>
        <th scope="col" class="agb-datasets-num">Labels</th>
      </tr>
    </thead>
  `;

  const body = rows
    .map(
      (row) => `
    <tr>
      <th scope="row" class="agb-datasets-name">${row.name}</th>
      <td><span class="agb-datasets-type agb-datasets-type--${row.type.toLowerCase().replace(/\s+/g, "-")}">${row.type}</span></td>
      <td class="agb-datasets-num">${formatCount(row.nodes)}</td>
      <td class="agb-datasets-num">${formatCount(row.edges)}</td>
      <td class="agb-datasets-num">${formatCount(row.features)}</td>
      <td class="agb-datasets-num">${formatCount(row.labels)}</td>
    </tr>
  `
    )
    .join("");

  return `
    <div class="agb-datasets-table-wrap agb-table-wrap" role="region" aria-label="AGB benchmark graph datasets">
      <table class="agb-datasets-table">
        ${head}
        <tbody>${body}</tbody>
      </table>
    </div>
  `;
}

const categorySections = [
  {
    id: "homophilic",
    type: "Homophilic",
    icon: "fa-share-alt",
    title: datasetCategories[0].title,
    lead: datasetCategories[0].text,
    datasetsLabel: datasetCategories[0].datasets
  },
  {
    id: "heterophilic",
    type: "Heterophilic",
    icon: "fa-random",
    title: datasetCategories[1].title,
    lead: datasetCategories[1].text,
    datasetsLabel: datasetCategories[1].datasets
  },
  {
    id: "large-scale",
    type: "Large-scale",
    icon: "fa-database",
    title: datasetCategories[2].title,
    lead: datasetCategories[2].text,
    datasetsLabel: datasetCategories[2].datasets
  }
];

const root = document.getElementById("page-root");

if (root) {
  const categoryHtml = categorySections
    .map((section) => {
      const rows = filterDatasets(section.type);
      return `
    <section class="agb-datasets-section agb-datasets-section-divider agb-page-reveal" id="${section.id}">
      ${renderSectionTitle(section.title, section.icon)}
      <p class="agb-datasets-section-lead">${section.lead}</p>
      <p class="agb-datasets-section-datasets">${section.datasetsLabel}</p>
      ${renderDatasetCards(rows)}
      ${renderDatasetsTable(rows)}
    </section>
  `;
    })
    .join("");

  root.innerHTML = pageWrap({
    theme: "datasets",
    className: "agb-datasets-page",
    hero: pageHeader({
      theme: "datasets",
      title: datasetsHero.title,
      subtitle: datasetsHero.subtitle
    }),
    body: `
      <div class="container agb-page-shell">
        <div class="agb-content-card agb-content-card--sections agb-page-reveal">
          <section class="agb-datasets-section" id="overview">
            ${renderSectionTitle("Overview", "fa-info-circle")}
            <p class="agb-datasets-section-lead">${datasetsHero.paragraph}</p>
            ${renderSectionTitle("Benchmark Graph Datasets", "fa-table", "agb-datasets-subsection-title")}
            <p class="agb-datasets-section-lead agb-datasets-section-lead--compact">
              Summary statistics for all six datasets evaluated in AGB (from the paper).
            </p>
            ${renderDatasetsTable(agbDatasets)}
          </section>
          ${categoryHtml}
        </div>
      </div>
    `
  });

  initPageEffects(root);
}
