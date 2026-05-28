import { pageHeader, sectionWrapper } from "./components.js";

const root = document.getElementById("page-root");

if (root) {
  root.innerHTML = `
    ${pageHeader({
      title: "About AGB",
      subtitle: "Why adversarial robustness in graphs is an urgent research direction"
    })}
    ${sectionWrapper({
      title: "Motivation",
      content: `
        <p class="agb-body-text">
          Graph neural networks are widely used in recommender systems, fraud detection, molecule analysis, and citation modeling.
          Despite strong predictive performance, they remain vulnerable to small structural perturbations.
        </p>
        <p class="agb-body-text">
          AGB focuses on topology-aware adversarial analysis. The platform highlights how graph orbit structure and peripheral
          nodes influence misclassification, offering a more interpretable view of attack and defense behavior.
        </p>
        <p class="agb-body-text">
          In security-sensitive settings, robustness is not optional. A small set of adversarial edge edits can manipulate
          ranking systems, fraud signals, or scientific graph predictions with minimal detectable footprint.
        </p>
      `
    })}
    ${sectionWrapper({
      title: "Why Robustness Matters in Practice",
      content: `
        <ul class="agb-list">
          <li><strong>Social platforms:</strong> manipulated graph links can alter influence propagation and recommendation quality.</li>
          <li><strong>Biomedicine:</strong> incorrect graph predictions can affect downstream candidate prioritization.</li>
          <li><strong>Finance:</strong> fraud and risk graphs are sensitive to adversarial connectivity edits.</li>
          <li><strong>System design:</strong> existing defenses often regularize features but under-model topology-specific attacks.</li>
        </ul>
      `
    })}
    ${sectionWrapper({
      title: "AGB as a Benchmark Contribution",
      content: `
        <ul class="agb-list">
          <li>Provides a unified, research-oriented space for topology-aware adversarial evaluation.</li>
          <li>Pairs method-level explanations with data-driven summaries across models and datasets.</li>
          <li>Encourages defense work that explicitly accounts for structural role sensitivity.</li>
        </ul>
      `
    })}
    ${sectionWrapper({
      title: "Key Takeaways",
      content: `
        <ul class="agb-list">
          <li>Topology matters more than previously assumed in adversarial GNN behavior.</li>
          <li>Orbit-based grouping is an efficient and interpretable attack prior.</li>
          <li>Robustness evaluation should move beyond random perturbation toward structure-aware analysis.</li>
        </ul>
      `
    })}
  `;
}
