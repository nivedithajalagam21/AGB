import { pageHeader, sectionWrapper, card, listRenderer } from "./components.js";

const root = document.getElementById("page-root");

if (root) {
  const introCards = [
    {
      title: "Topology-Aware Attack Design",
      body: "GOttack introduces orbit-informed perturbation selection, moving beyond edge-only heuristics toward structural-role-aware attacks."
    },
    {
      title: "Orbit-Based Vulnerability Analysis",
      body: "AGB highlights how orbit identities reveal hidden weak points in graph topology, especially in peripheral structural roles."
    },
    {
      title: "Performance and Efficiency",
      body: "GOttack achieves stronger misclassification rates across tasks while running at roughly 85% of competing runtime."
    }
  ];
  const exploreCards = [
    { title: "Methodology", body: "Understand the attack formulation, orbit reasoning, and GOV pipeline.", href: "/methodology/" },
    { title: "Models", body: "Review victim architectures and why topology perturbations transfer across them.", href: "/models/" },
    { title: "Datasets", body: "Inspect benchmark graph characteristics and homophily-driven attack behavior.", href: "/datasets/" },
    { title: "Results", body: "Analyze standardized performance, efficiency, and cross-model attack strength.", href: "/results/" },
    { title: "Leaderboard", body: "Compare adversarial attack performance across datasets and models.", href: "/leaderboard/" }
  ];

  root.innerHTML = `
    ${pageHeader({
      title: "Adversarial Graph Benchmark (AGB)",
      subtitle: "GOttack: Universal Adversarial Attacks on Graph Neural Networks via Graph Orbits Learning"
    })}
    ${sectionWrapper({
      title: "Abstract-Style Overview",
      content: `
        <p class="agb-body-text">
          Graph neural networks (GNNs) have become a standard approach for node classification because they couple feature learning
          with relational inductive bias from graph structure. However, this same reliance on neighborhood topology introduces a
          critical vulnerability: small adversarial perturbations in edges can propagate through message passing and substantially
          alter node embeddings.
        </p>
        <p class="agb-body-text">
          Existing attack families often focus on local feature perturbation or edge manipulation without explicitly modeling
          topological role equivalence. GOttack addresses this gap by using graph orbits to capture structural roles, then selecting
          attack candidates that are topologically informative rather than brute-force exhaustive.
        </p>
        <div class="agb-link-row">
          <a class="btn btn-primary" href="/methodology/">Explore Method</a>
          <a class="btn btn-default" href="/leaderboard/">View Leaderboard</a>
        </div>
      `
    })}
    ${sectionWrapper({
      title: "Key Contributions",
      content: `
        ${listRenderer(
          introCards,
          (item) => `<div class="col-md-4">${card(item)}</div>`
        )}
      `
    })}
    ${sectionWrapper({
      title: "Explore",
      content: `
        ${listRenderer(
          exploreCards,
          (item) => `<div class="col-md-6 col-lg-4"><a href="${item.href}" class="agb-nav-card-link">${card({ title: item.title, body: item.body })}</a></div>`
        )}
        <div class="agb-link-row">
          <a class="btn btn-primary" href="/methodology/">Methodology</a>
          <a class="btn btn-default" href="/models/">Models</a>
          <a class="btn btn-default" href="/datasets/">Datasets</a>
          <a class="btn btn-default" href="/results/">Results</a>
          <a class="btn btn-default" href="/leaderboard/">Leaderboard</a>
          <a class="btn btn-default" href="/about/">About</a>
        </div>
      `
    })}
  `;
}
