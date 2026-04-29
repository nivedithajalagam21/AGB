import { resultsSummary, methodComparison, resultsInterpretation } from "/data/results.js";
import { pageHeader, sectionWrapper, card, listRenderer } from "/assets/js/components.js";

const root = document.getElementById("page-root");

if (root) {
  root.innerHTML = `
    ${pageHeader({
      title: "Results",
      subtitle: "Performance profile of GOttack across models and attack baselines"
    })}
    ${sectionWrapper({
      title: "A-B. Experimental Setup and Metric",
      content: listRenderer(
        resultsSummary,
        (result) =>
          `<div class="col-md-4">${card({
            title: result.title,
            badge: result.value,
            body: result.description
          })}</div>`
      )
    })}
    ${sectionWrapper({
      title: "C. Comparative Performance Across Baselines",
      content: listRenderer(
        methodComparison,
        (method) =>
          `<div class="col-md-6">${card({
            title: method.name,
            body: `<strong>Strengths:</strong> ${method.strengths}<br><strong>Limitations:</strong> ${method.limitations}`
          })}</div>`
      )
    })}
    ${sectionWrapper({
      title: "D-E. Efficiency and Interpretation",
      content: `
        <ul class="agb-list">
          ${resultsInterpretation.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      `
    })}
  `;
}
