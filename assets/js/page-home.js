const root = document.getElementById("page-root");

if (root) {
  root.innerHTML = `
    <div class="agb-home">
      <section class="agb-home-hero">
        <div class="container agb-home-container">
          <h1 class="agb-home-title">
            Adversarial Graph Benchmark <span class="agb-home-title-abbr">(AGB)</span>
          </h1>
          <p class="agb-home-tagline">
            Towards Practical and Fair Evaluation of Adversarial Graph Neural Networks
          </p>
          <p class="agb-home-subtitle">
            Benchmark datasets, attacks, defenses, and evaluators for adversarial graph machine learning
          </p>
          <div class="agb-home-hero-actions">
            <a class="btn btn-lg agb-btn-orange" href="/datasets/">Get Started</a>
            <a class="btn btn-lg agb-btn-blue" href="/leaderboard/">AGB LSC</a>
          </div>
        </div>
      </section>

      <section class="agb-home-intro agb-section agb-reveal">
        <div class="container agb-home-container">
          <div class="agb-home-intro-layout">
            <div class="agb-home-intro-copy">
              <p class="agb-home-intro-text">
                The Adversarial Graph Benchmark (AGB) is a collection of realistic, large-scale, and diverse benchmark
                datasets for evaluating graph neural networks under adversarial attacks. AGB provides standardized datasets,
                attack settings, defense baselines, and evaluation protocols for reliable comparison of adversarial
                robustness in graph machine learning.
              </p>
            </div>
            <div class="agb-home-intro-brand">
              <div class="agb-logo-badge agb-logo-badge--hero" aria-hidden="true">AGB</div>
            </div>
          </div>
        </div>
      </section>

      <section class="agb-home-features agb-section agb-reveal">
        <div class="container agb-home-container">
          <h2 class="agb-home-section-title">Benchmark Capabilities</h2>
          <div class="row agb-home-features-row">
            <div class="col-md-4 col-sm-12 agb-home-feature-col">
              <article class="agb-home-feature-card">
                <i class="fa fa-database agb-home-feature-icon" aria-hidden="true"></i>
                <h3 class="agb-home-feature-heading">Standardized adversarial datasets</h3>
                <p class="agb-home-feature-text">
                  AGB provides a diverse benchmark suite for evaluating adversarial robustness of graph neural networks
                  across homophilic, heterophilic, and large-scale graph datasets.
                </p>
              </article>
            </div>
            <div class="col-md-4 col-sm-12 agb-home-feature-col">
              <article class="agb-home-feature-card">
                <i class="fa fa-cogs agb-home-feature-icon" aria-hidden="true"></i>
                <h3 class="agb-home-feature-heading">Fair attack evaluation</h3>
                <p class="agb-home-feature-text">
                  AGB evaluates widely used graph attacks under unified poisoning and evasion settings with consistent
                  splits, model selection, target node sampling, and attack budgets.
                </p>
              </article>
            </div>
            <div class="col-md-4 col-sm-12 agb-home-feature-col">
              <article class="agb-home-feature-card">
                <i class="fa fa-bar-chart agb-home-feature-icon" aria-hidden="true"></i>
                <h3 class="agb-home-feature-heading">Unified robustness comparison</h3>
                <p class="agb-home-feature-text">
                  AGB provides reproducible evaluation protocols and leaderboards for comparing vanilla GNNs, defended
                  models, and adversarial attacks under practical and fair settings.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="agb-home-affiliation agb-section agb-section-alt agb-reveal">
        <div class="container agb-home-container">
          <div class="agb-home-affiliation-card">
            <div class="agb-home-affiliation-accent agb-home-affiliation-accent-ucf" aria-hidden="true"></div>
            <div class="agb-home-affiliation-accent agb-home-affiliation-accent-vt" aria-hidden="true"></div>
            <h2 class="agb-home-affiliation-title">
              Developed by Researchers from UCF and Virginia Tech
            </h2>
            <p class="agb-home-affiliation-text">
              AGB is developed as a research benchmark by contributors from the University of Central Florida and
              Virginia Tech to support reproducible evaluation of adversarial attacks and defenses on graph learning
              models.
            </p>
          </div>
        </div>
      </section>

      <section class="agb-home-stats agb-section agb-reveal">
        <div class="container agb-home-container">
          <h2 class="agb-home-section-title agb-home-section-title-center">Benchmark at a Glance</h2>
          <div class="agb-home-stats-row">
            <article class="agb-home-stat-card">
              <p class="agb-home-stat-value">437,000+</p>
              <p class="agb-home-stat-label">Experiments</p>
            </article>
            <article class="agb-home-stat-card">
              <p class="agb-home-stat-value">7</p>
              <p class="agb-home-stat-label">Attacks</p>
            </article>
            <article class="agb-home-stat-card">
              <p class="agb-home-stat-value">8</p>
              <p class="agb-home-stat-label">Defenses</p>
            </article>
            <article class="agb-home-stat-card">
              <p class="agb-home-stat-value">6</p>
              <p class="agb-home-stat-label">Datasets</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  `;

  const revealEls = root.querySelectorAll(".agb-reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("agb-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("agb-reveal-visible"));
  }
}
