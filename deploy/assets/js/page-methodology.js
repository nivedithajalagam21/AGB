import { methodology } from "../data/methodology.js";
import { pageHeader, sectionWrapper, listRenderer } from "./components.js";

const root = document.getElementById("page-root");

if (root) {
  const problemSetupList = methodology.problemSetup
    .map((item) => `<li>${item}</li>`)
    .join("");
  const attackList = methodology.attacks
    .map((item) => `<li>${item}</li>`)
    .join("");
  const graphletList = methodology.graphletsAndOrbits
    .map((item) => `<li>${item}</li>`)
    .join("");
  const govList = methodology.gov
    .map((item) => `<li>${item}</li>`)
    .join("");
  const coreList = methodology.gottackCore
    .map((item) => `<li>${item}</li>`)
    .join("");
  const orbitInsightList = methodology.orbitInsight
    .map((item) => `<li>${item}</li>`)
    .join("");

  root.innerHTML = `
    ${pageHeader({
      title: "Methodology",
      subtitle: "Topology-aware adversarial attack design for graph neural networks"
    })}
    ${sectionWrapper({
      title: "A. Problem Setup",
      content: `
        <ul class="agb-list">${problemSetupList}</ul>
        <p class="agb-body-text">
          Intuitively, if node labels correlate with neighborhood labels (homophily), then changing neighborhood structure
          changes the evidence seen by the classifier. This is the core lever exploited by structural adversarial attacks.
        </p>
      `
    })}
    ${sectionWrapper({
      title: "B. Adversarial Attacks",
      content: `
        <ul class="agb-list">${attackList}</ul>
        <p class="agb-body-text">
          Under a fixed budget Delta, the attacker must decide which edges carry maximal influence. The quality of this selection
          strategy largely determines attack success.
        </p>
      `
    })}
    ${sectionWrapper({
      title: "C. Graphlets and Orbits",
      content: `
        <ul class="agb-list">${graphletList}</ul>
        <p class="agb-body-text">
          Orbit analysis provides a principled way to reason about node role symmetry. Instead of treating all neighbors equally,
          GOttack distinguishes nodes by motif-level function.
        </p>
      `
    })}
    ${sectionWrapper({
      title: "D. Graph Orbit Vector (GOV)",
      content: `
        <ul class="agb-list">${govList}</ul>
      `
    })}
    ${sectionWrapper({
      title: "E. GOttack Core Idea",
      content: `
        <ul class="agb-list">${coreList}</ul>
      `
    })}
    ${sectionWrapper({
      title: "F. Orbit 15 and 18 Insight",
      content: `
        <ul class="agb-list">${orbitInsightList}</ul>
      `
    })}
    ${sectionWrapper({
      title: "Attack Pipeline",
      content: listRenderer(
        methodology.pipeline,
        (step, idx) => `
          <div class="agb-flow-step">${step}</div>
          ${idx < methodology.pipeline.length - 1 ? '<div class="agb-flow-arrow">&#8594;</div>' : ""}
        `,
        "agb-flow"
      )
    })}
  `;
}
