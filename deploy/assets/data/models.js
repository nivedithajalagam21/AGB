export const models = [
  {
    name: "GCN",
    type: "Backbone",
    description: "Graph Convolutional Network performs layer-wise neighborhood averaging (with normalization), then applies a linear transform and nonlinearity. This smooths features across adjacent nodes and is effective when local homophily is strong."
  },
  {
    name: "GIN",
    type: "Backbone",
    description: "Graph Isomorphism Network uses sum aggregation followed by MLP updates, giving strong expressive power for distinguishing neighborhood structures and graph motifs."
  },
  {
    name: "GraphSAGE",
    type: "Backbone",
    description: "GraphSAGE samples neighbors and learns an inductive aggregation function, enabling scalable inference on unseen nodes and large graphs."
  }
];

export const modelVulnerability = [
  "All three architectures depend on local neighborhood composition; adversarial edge edits directly alter this composition.",
  "Message passing amplifies perturbations across layers, so a few topologically strategic changes can propagate widely.",
  "When attacks break homophily assumptions, class evidence becomes noisy and decision boundaries shift."
];
