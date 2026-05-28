import { models, modelVulnerability } from "../data/models.js";
import { pageHeader, sectionWrapper, card, listRenderer } from "./components.js";

const root = document.getElementById("page-root");

if (root) {
  root.innerHTML = `
    ${pageHeader({
      title: "Models",
      subtitle: "Backbone architectures used to evaluate adversarial robustness"
    })}
    ${sectionWrapper({
      title: "Supported GNN Backbones",
      content: listRenderer(
        models,
        (model) =>
          `<div class="col-md-4">${card({
            title: model.name,
            badge: model.type,
            body: model.description
          })}</div>`
      )
    })}
    ${sectionWrapper({
      title: "Why These Models Are Vulnerable",
      content: `
        <ul class="agb-list">
          ${modelVulnerability.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      `
    })}
  `;
}
