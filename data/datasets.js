export const datasets = [
  {
    name: "Cora",
    nodes: 2485,
    edges: 5069,
    description: "Citation network with relatively high homophily; a strong setting for testing whether attacks can break label-consistent neighborhoods."
  },
  {
    name: "Citeseer",
    nodes: 2110,
    edges: 3668,
    description: "Sparse citation graph with noisier connectivity, useful for measuring attack transfer under weaker local consistency."
  },
  {
    name: "Pubmed",
    nodes: 19717,
    edges: 44324,
    description: "Large-scale biomedical citation graph that stress-tests scalability of topology-aware attacks."
  },
  {
    name: "BlogCatalog",
    nodes: 5196,
    edges: 171743,
    description: "Social graph with lower homophily and heterogeneous communities, exposing robustness under weak label alignment."
  },
  {
    name: "Polblogs",
    nodes: 1490,
    edges: 19090,
    description: "Political hyperlink graph with strong ideological clustering, informative for studying perturbations around polarized communities."
  }
];

export const homophilyNote = "Homophily level changes attack behavior: high-homophily graphs can be disrupted by breaking a few consistent links, while lower-homophily graphs require topology-aware candidate selection to find structurally critical perturbation points.";
