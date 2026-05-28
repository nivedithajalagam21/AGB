import { datasets, homophilyNote } from "../data/datasets.js";
import { pageHeader, sectionWrapper, card, listRenderer } from "./components.js";

const root = document.getElementById("page-root");

if (root) {
  root.innerHTML = `
    ${pageHeader({
      title: "Datasets",
      subtitle: "Graph benchmarks used for evaluating attack transfer and robustness"
    })}
    ${sectionWrapper({
      title: "Evaluation Corpora",
      content: listRenderer(
        datasets,
        (dataset) =>
          `<div class="col-md-6 col-lg-4">${card({
            title: dataset.name,
            body: `${dataset.description}<br><strong>Nodes:</strong> ${dataset.nodes.toLocaleString()}<br><strong>Edges:</strong> ${dataset.edges.toLocaleString()}`
          })}</div>`
      )
    })}
    ${sectionWrapper({
      title: "Why Homophily Variation Matters",
      content: `<p class="agb-body-text">${homophilyNote}</p>`
    })}
  `;
}
