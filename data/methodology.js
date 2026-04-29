export const methodology = {
  problemSetup: [
    "We represent each graph as G = (V, E, X), where V denotes nodes, E denotes edges, and X denotes node attributes.",
    "For node classification, a GNN learns a function f_theta(v_i, G) -> y_i by aggregating features from local neighborhoods.",
    "Homophily describes the tendency of connected nodes to share labels; many benchmark GNNs implicitly rely on this signal.",
    "Because message passing repeatedly mixes neighbor information, prediction quality is highly sensitive to neighborhood topology."
  ],
  attacks: [
    "Feature attacks modify node attributes; structural attacks modify E by inserting or deleting edges.",
    "Targeted attacks force a specific node to a chosen wrong label; non-targeted attacks increase generic error.",
    "Attack budget Delta constrains the number of perturbations to keep edits sparse and realistic.",
    "Even a small Delta can be effective when perturbations alter high-leverage structural positions."
  ],
  graphletsAndOrbits: [
    "Graphlets are small induced subgraphs that capture local motif structure beyond simple degree statistics.",
    "Automorphisms map a graphlet to itself while preserving adjacency, defining node-level equivalence classes.",
    "Each equivalence class is an orbit: nodes in the same orbit play the same structural role inside the graphlet.",
    "For graphlets up to 5 nodes, orbit decomposition yields 73 distinct orbit identities."
  ],
  gov: [
    "The Graph Orbit Vector (GOV) is a 73-dimensional vector where each dimension counts node participation in one orbit.",
    "GOV encodes how a node is embedded in local topology, not only how many neighbors it has.",
    "This representation helps distinguish structurally central, bridge-like, and peripheral nodes."
  ],
  gottackCore: [
    "GOttack groups nodes by orbit-level structural similarity before selecting perturbation candidates.",
    "Orbit grouping reduces combinatorial search compared with brute-force edge evaluation.",
    "Candidate ranking is topology-aware: edits are prioritized by structural impact on message passing.",
    "The result is a universal attack strategy that transfers across multiple GNN architectures."
  ],
  orbitInsight: [
    "Orbit 15 and orbit 18 often correspond to periphery-like structural roles.",
    "Periphery nodes typically have weaker label-consistent neighborhoods and lower local redundancy.",
    "Connecting such nodes to distant or label-inconsistent regions disrupts homophily signals.",
    "This makes orbit-15/18-guided perturbations especially effective at inducing misclassification."
  ],
  pipeline: [
    "Graph",
    "Orbit Detection",
    "Candidate Selection",
    "Edge Perturbation",
    "Misclassification"
  ]
};
