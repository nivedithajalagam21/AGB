import { initPageEffects, pageHeader, pageWrap } from "./components.js";

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: "fa-info-circle",
    body:
      "The Adversarial Graph Benchmark (AGB) provides a standardized benchmark for evaluating adversarial attacks and defenses on graph neural networks. It focuses on fair comparison across homophilic, heterophilic, and large-scale graph datasets under a unified evaluation protocol."
  },
  {
    id: "agb240m",
    title: "AGB240M",
    icon: "fa-database",
    body:
      "AGB240M represents the large-scale challenge direction of AGB. Inspired by large benchmark settings, it emphasizes scalability, practical attack constraints, and evaluation on larger graph data such as OGB-ARXIV. This section can serve as a placeholder for future expanded large-scale AGB tasks."
  },
  {
    id: "robustness-evaluation",
    title: "Robustness Evaluation",
    icon: "fa-shield",
    body:
      "AGB evaluates adversarial robustness using both vanilla and defended GNN models. The benchmark compares attack effectiveness using misclassification rate under consistent model selection, dataset splits, and evaluation settings."
  },
  {
    id: "attack-budgets",
    title: "Attack Budgets",
    icon: "fa-sliders",
    body:
      "Attacks are evaluated under perturbation budgets Δ = 1 to 5. Each budget controls the number of structural perturbations allowed for a target node, enabling comparison of attack strength as perturbation capacity increases."
  },
  {
    id: "rules",
    title: "Rules",
    icon: "fa-clipboard",
    body:
      "All methods should follow the same train/validation/test split protocol, use the same evaluation budgets, report mean ± standard deviation, and evaluate both evasion and poisoning scenarios where applicable."
  },
  {
    id: "leaderboards",
    title: "Leaderboards",
    icon: "fa-trophy",
    body:
      "The AGB leaderboards summarize adversarial attack performance across datasets, victim models, attack settings, and budgets. Higher misclassification rates indicate stronger attack performance.",
    cta: { label: "View Leaderboard", href: "/leaderboard/" }
  },
  {
    id: "agb-paper",
    title: "AGB Paper",
    icon: "fa-file-text-o",
    body:
      "The AGB paper presents a comprehensive re-evaluation of seven widely used attacks and eight recent defenses under poisoning and evasion scenarios across six graph datasets, with more than 437,000 experiments."
  },
  {
    id: "challenge-history",
    title: "Challenge History",
    icon: "fa-history",
    body:
      "AGB is designed to encourage reproducible, fair, and practical evaluation of adversarial graph learning methods. Future versions may expand the benchmark with additional datasets, larger-scale tasks, and updated robustness protocols."
  }
];

const root = document.getElementById("page-root");

if (root) {
  const sectionHtml = sections
    .map(
      (section, index) => `
    <section class="agb-challenge-section${index > 0 ? " agb-challenge-section-divider" : ""} agb-page-reveal" id="${section.id}">
      <h2 class="agb-challenge-section-title agb-section-heading">
        <i class="fa ${section.icon} agb-section-icon" aria-hidden="true"></i>
        <span>${section.title}</span>
      </h2>
      <p class="agb-challenge-section-text">${section.body}</p>
      ${
        section.cta
          ? `<p class="agb-challenge-section-action"><a class="btn btn-lg agb-btn-blue" href="${section.cta.href}">${section.cta.label}</a></p>`
          : ""
      }
    </section>
  `
    )
    .join("");

  root.innerHTML = pageWrap({
    theme: "challenge",
    className: "agb-challenge-page",
    hero: pageHeader({
      theme: "challenge",
      title: "AGB Challenge",
      subtitle: "Fair and standardized evaluation of adversarial graph neural networks"
    }),
    body: `
      <div class="container agb-challenge-shell">
        <div class="agb-challenge-container agb-page-reveal">
          ${sectionHtml}
        </div>
      </div>
    `
  });

  initPageEffects(root);
}
