export const resultsSummary = [
  {
    title: "Experimental Setup",
    value: "Semi-supervised Node Classification",
    description: "Experiments evaluate GCN, GIN, and GraphSAGE on Cora, Citeseer, Pubmed, BlogCatalog, and Polblogs under constrained structural perturbations."
  },
  {
    title: "Primary Metric",
    value: "Misclassification Rate",
    description: "Higher misclassification rate indicates a stronger attack because more previously correct predictions are flipped."
  },
  {
    title: "Aggregate Performance",
    value: "~36/65 Best Cases",
    description: "GOttack obtains the strongest attack outcomes in many model-dataset settings while remaining competitive elsewhere."
  },
  {
    title: "Efficiency",
    value: "~85% Runtime",
    description: "Orbit-based candidate filtering reduces search space and keeps runtime near 85% of the fastest competing baseline."
  }
];

export const methodComparison = [
  {
    name: "Nettack",
    strengths: "Targeted perturbations with strong classical baseline behavior.",
    limitations: "Limited topology-role awareness."
  },
  {
    name: "FGA",
    strengths: "Gradient-guided edge selection and competitive local attack quality.",
    limitations: "Lower structural role modeling."
  },
  {
    name: "SGA",
    strengths: "Scalable attack strategy with practical efficiency.",
    limitations: "Reduced orbit-level interpretability."
  },
  {
    name: "GOttack",
    strengths: "Best overall trade-off across attack strength, transferability, and runtime by explicitly modeling structural roles.",
    limitations: "Requires orbit extraction and topology preprocessing."
  }
];

export const resultsInterpretation = [
  "GOttack succeeds because it exploits how message passing depends on local structural context, not only raw edge count.",
  "Orbit-aware perturbations are systematically more informative than random or purely gradient-local edits.",
  "Performance consistency across GCN, GIN, and GraphSAGE indicates that the vulnerability is architectural-agnostic and topology-driven."
];
