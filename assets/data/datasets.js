/** AGB benchmark datasets (statistics from the AGB paper). */
export const agbDatasets = [
  {
    name: "CORA",
    type: "Homophilic",
    nodes: 2708,
    edges: 5069,
    features: 1432,
    labels: 7
  },
  {
    name: "CITESEER",
    type: "Homophilic",
    nodes: 3327,
    edges: 3668,
    features: 3703,
    labels: 6
  },
  {
    name: "PUBMED",
    type: "Homophilic",
    nodes: 19717,
    edges: 44325,
    features: 500,
    labels: 3
  },
  {
    name: "CHAMELEON",
    type: "Heterophilic",
    nodes: 2277,
    edges: 36101,
    features: 3132,
    labels: 5
  },
  {
    name: "SQUIRREL",
    type: "Heterophilic",
    nodes: 5201,
    edges: 217073,
    features: 3148,
    labels: 5
  },
  {
    name: "OGB-ARXIV",
    type: "Large-scale",
    nodes: 169343,
    edges: 1166243,
    features: 128,
    labels: 40
  }
];

export const datasetsHero = {
  title: "Datasets",
  subtitle:
    "AGB provides benchmark datasets for fair and standardized evaluation of adversarial graph neural networks.",
  paragraph:
    "AGB evaluates adversarial attacks and defenses across homophilic, heterophilic, and large-scale graph datasets. The benchmark uses standardized splits, target node selection, attack budgets, and evaluation protocols to enable reliable comparison across graph learning models."
};

export const datasetCategories = [
  {
    title: "Homophilic Graphs",
    datasets: "CORA, CITESEER, PUBMED",
    text: "Citation and co-authorship style graphs where connected nodes often share similar labels."
  },
  {
    title: "Heterophilic Graphs",
    datasets: "CHAMELEON, SQUIRREL",
    text: "Webpage networks where connected nodes may belong to different classes, making robustness evaluation more challenging."
  },
  {
    title: "Large-Scale Graph",
    datasets: "OGB-ARXIV",
    text: "A large citation network used to test scalability of adversarial attacks and defenses."
  }
];

export const evaluationSetting = [
  { label: "Task", value: "Semi-supervised node classification" },
  { label: "Splits", value: "Train / validation / test = 10% / 10% / 80%" },
  { label: "Random splits", value: "K = 5" },
  { label: "Risk assessment runs", value: "R = 3" },
  { label: "Attack budgets", value: "Δ = 1 to 5" },
  { label: "Scenarios", value: "Evasion and poisoning" }
];

/** @deprecated Use agbDatasets */
export const datasets = agbDatasets;

export const homophilyNote =
  "Homophily level changes attack behavior: high-homophily graphs can be disrupted by breaking a few consistent links, while lower-homophily graphs require topology-aware candidate selection to find structurally critical perturbation points.";
