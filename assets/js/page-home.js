const root = document.getElementById("page-root");

if (root) {
  root.innerHTML = `
    <div class="agb-home">
      <section class="agb-home-hero agb-reveal">
        <div class="agb-hero-bg" aria-hidden="true">
          <span class="agb-hero-glow"></span>
          <svg class="agb-hero-network agb-hero-network--left" viewBox="0 0 280 400" preserveAspectRatio="xMidYMid meet">
            <line class="agb-hero-net-line" x1="40" y1="320" x2="140" y2="80" />
            <line class="agb-hero-net-line" x1="140" y1="80" x2="220" y2="280" />
            <line class="agb-hero-net-line agb-hero-net-line--faint" x1="80" y1="200" x2="200" y2="160" />
            <circle class="agb-hero-net-node agb-hero-float" cx="140" cy="80" r="5" />
            <circle class="agb-hero-net-node" cx="40" cy="320" r="4" />
            <circle class="agb-hero-net-node agb-hero-float" cx="220" cy="280" r="4.5" />
          </svg>
          <svg class="agb-hero-network agb-hero-network--right" viewBox="0 0 280 400" preserveAspectRatio="xMidYMid meet">
            <line class="agb-hero-net-line" x1="60" y1="300" x2="180" y2="100" />
            <line class="agb-hero-net-line" x1="180" y1="100" x2="240" y2="260" />
            <circle class="agb-hero-net-node agb-hero-float agb-hero-float--delay" cx="180" cy="100" r="5" />
            <circle class="agb-hero-net-node" cx="240" cy="260" r="4" />
            <circle class="agb-hero-net-node agb-hero-float" cx="60" cy="300" r="3.5" />
          </svg>
          <span class="agb-hero-orb agb-hero-orb--1"></span>
          <span class="agb-hero-orb agb-hero-orb--2"></span>
          <span class="agb-hero-orb agb-hero-orb--3"></span>
        </div>
        <div class="container agb-home-container agb-hero-container">
          <div class="agb-hero-grid">
            <div class="agb-hero-copy">
              <h1 class="agb-home-title">Adversarial Graph Benchmark</h1>
              <p class="agb-home-tagline">
                Towards Practical and Fair Evaluation of Adversarial Graph Neural Networks
              </p>
              <p class="agb-home-subtitle">
                Benchmark datasets, attacks, defenses, and evaluators for adversarial graph machine learning
              </p>
              <div class="agb-home-hero-actions">
                <a class="btn btn-lg agb-hero-btn agb-hero-btn--primary" href="/datasets/">
                  <i class="fa fa-compass" aria-hidden="true"></i>
                  Get Started
                </a>
                <a class="btn btn-lg agb-hero-btn agb-hero-btn--glass" href="/leaderboard/">
                  <i class="fa fa-bar-chart" aria-hidden="true"></i>
                  AGB LSC
                </a>
              </div>
              <div class="agb-hero-stats">
                <article class="agb-hero-stat">
                  <p class="agb-hero-stat-value" data-count="437000" data-suffix="+">0</p>
                  <p class="agb-hero-stat-label">Experiments</p>
                </article>
                <article class="agb-hero-stat">
                  <p class="agb-hero-stat-value" data-count="6">0</p>
                  <p class="agb-hero-stat-label">Datasets</p>
                </article>
                <article class="agb-hero-stat">
                  <p class="agb-hero-stat-value" data-count="7">0</p>
                  <p class="agb-hero-stat-label">Attacks</p>
                </article>
                <article class="agb-hero-stat">
                  <p class="agb-hero-stat-value" data-count="8">0</p>
                  <p class="agb-hero-stat-label">Defenses</p>
                </article>
              </div>
            </div>
            <div class="agb-hero-visual">
              <div class="agb-hero-glass agb-hero-glass--float">
                <div class="agb-hero-glass-head">
                  <div class="agb-logo-badge agb-hero-glass-logo">AGB</div>
                  <div>
                    <p class="agb-hero-glass-title">AGB Benchmark</p>
                    <p class="agb-hero-glass-sub">Adversarial graph evaluation</p>
                  </div>
                  <i class="fa fa-shield agb-hero-glass-shield" aria-hidden="true"></i>
                </div>
                <div class="agb-hero-glass-body">
                  <div class="agb-hero-glass-col">
                    <p class="agb-hero-glass-label"><i class="fa fa-database" aria-hidden="true"></i> Datasets</p>
                    <ul class="agb-hero-glass-list">
                      <li>CORA</li>
                      <li>CITESEER</li>
                      <li>PUBMED</li>
                      <li>CHAMELEON</li>
                      <li>SQUIRREL</li>
                      <li>OGB-ARXIV</li>
                    </ul>
                  </div>
                  <div class="agb-hero-glass-col">
                    <p class="agb-hero-glass-label"><i class="fa fa-bolt" aria-hidden="true"></i> Attack Models</p>
                    <ul class="agb-hero-glass-list">
                      <li>Nettack</li>
                      <li>FGA</li>
                      <li>SGA</li>
                      <li>PR-BCD</li>
                    </ul>
                  </div>
                </div>
                <div class="agb-hero-glass-foot">
                  <span><i class="fa fa-line-chart" aria-hidden="true"></i> Leaderboard</span>
                  <span><i class="fa fa-check-circle" aria-hidden="true"></i> Fair evaluation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="agb-home-intro agb-section agb-reveal">
        <div class="agb-home-intro-bg" aria-hidden="true">
          <span class="agb-home-intro-dots agb-home-intro-dots--tr"></span>
          <span class="agb-home-intro-dots agb-home-intro-dots--bl"></span>
          <svg class="agb-home-intro-network agb-home-intro-network--tl" viewBox="0 0 220 220" preserveAspectRatio="xMidYMid meet">
            <line class="agb-home-intro-net-line" x1="24" y1="180" x2="110" y2="48" />
            <line class="agb-home-intro-net-line" x1="110" y1="48" x2="196" y2="160" />
            <line class="agb-home-intro-net-line agb-home-intro-net-line--faint" x1="48" y1="120" x2="168" y2="88" />
            <circle class="agb-home-intro-net-node" cx="110" cy="48" r="3.5" />
            <circle class="agb-home-intro-net-node" cx="24" cy="180" r="3" />
            <circle class="agb-home-intro-net-node" cx="196" cy="160" r="3" />
          </svg>
          <svg class="agb-home-intro-network agb-home-intro-network--br" viewBox="0 0 220 220" preserveAspectRatio="xMidYMid meet">
            <line class="agb-home-intro-net-line" x1="32" y1="168" x2="120" y2="40" />
            <line class="agb-home-intro-net-line" x1="120" y1="40" x2="188" y2="176" />
            <circle class="agb-home-intro-net-node" cx="120" cy="40" r="3.5" />
            <circle class="agb-home-intro-net-node" cx="188" cy="176" r="3" />
          </svg>
          <span class="agb-home-intro-particle agb-home-intro-particle--1"></span>
          <span class="agb-home-intro-particle agb-home-intro-particle--2"></span>
          <span class="agb-home-intro-particle agb-home-intro-particle--3"></span>
          <span class="agb-home-intro-particle agb-home-intro-particle--4"></span>
        </div>
        <div class="container agb-home-container">
          <div class="agb-home-intro-card">
            <div class="agb-home-intro-layout">
              <div class="agb-home-intro-copy">
                <span class="agb-home-intro-badge">ABOUT AGB</span>
                <div class="agb-home-intro-text-wrap">
                  <span class="agb-home-intro-accent" aria-hidden="true"></span>
                  <p class="agb-home-intro-text">
                    The Adversarial Graph Benchmark (AGB) is a collection of realistic, large-scale, and diverse benchmark
                    datasets for evaluating graph neural networks under adversarial attacks. AGB provides standardized datasets,
                    attack settings, defense baselines, and evaluation protocols for reliable comparison of adversarial
                    robustness in graph machine learning.
                  </p>
                </div>
              </div>
              <div class="agb-home-intro-brand">
                <div class="agb-home-intro-visual">
                  <span class="agb-home-intro-glow"></span>
                  <div class="agb-home-intro-orbit" aria-hidden="true">
                    <span class="agb-home-intro-orbit-node agb-home-intro-orbit-node--1"></span>
                    <span class="agb-home-intro-orbit-node agb-home-intro-orbit-node--2"></span>
                    <span class="agb-home-intro-orbit-node agb-home-intro-orbit-node--3"></span>
                    <span class="agb-home-intro-orbit-node agb-home-intro-orbit-node--4"></span>
                  </div>
                  <div class="agb-logo-badge agb-logo-badge--hero agb-home-intro-logo" aria-hidden="true">AGB</div>
                  <span class="agb-home-intro-chip agb-home-intro-chip--1">✓ Benchmark</span>
                  <span class="agb-home-intro-chip agb-home-intro-chip--2">✓ Robustness</span>
                  <span class="agb-home-intro-chip agb-home-intro-chip--3">✓ Evaluation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="agb-section-wave agb-section-wave--bottom" aria-hidden="true">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#f8fbff" />
          </svg>
        </div>
      </section>

      <section class="agb-home-features agb-section agb-reveal">
        <div class="agb-section-wave agb-section-wave--top" aria-hidden="true">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#f8fbff" />
          </svg>
        </div>
        <div class="agb-home-features-bg" aria-hidden="true">
          <span class="agb-home-features-title-glow"></span>
          <svg class="agb-home-features-network agb-home-features-network--tl" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet">
            <line class="agb-home-features-net-line" x1="30" y1="200" x2="120" y2="60" />
            <line class="agb-home-features-net-line" x1="120" y1="60" x2="210" y2="180" />
            <line class="agb-home-features-net-line agb-home-features-net-line--faint" x1="60" y1="140" x2="180" y2="100" />
            <circle class="agb-home-features-net-node" cx="120" cy="60" r="4" />
            <circle class="agb-home-features-net-node" cx="30" cy="200" r="3.5" />
            <circle class="agb-home-features-net-node" cx="210" cy="180" r="3.5" />
          </svg>
          <svg class="agb-home-features-network agb-home-features-network--br" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet">
            <line class="agb-home-features-net-line" x1="40" y1="180" x2="130" y2="50" />
            <line class="agb-home-features-net-line" x1="130" y1="50" x2="200" y2="190" />
            <circle class="agb-home-features-net-node" cx="130" cy="50" r="4" />
            <circle class="agb-home-features-net-node" cx="200" cy="190" r="3.5" />
          </svg>
        </div>
        <div class="container agb-home-container agb-home-features-inner">
          <h2 class="agb-home-section-title agb-home-section-title-center agb-home-section-title--accent">Benchmark Capabilities</h2>
          <div class="row agb-home-features-row">
            <div class="col-md-4 col-sm-12 agb-home-feature-col">
              <article class="agb-home-feature-card">
                <span class="agb-home-feature-icon-wrap">
                  <i class="fa fa-database agb-home-feature-icon" aria-hidden="true"></i>
                </span>
                <h3 class="agb-home-feature-heading">Standardized adversarial datasets</h3>
                <p class="agb-home-feature-text">
                  AGB provides a diverse benchmark suite for evaluating adversarial robustness of graph neural networks
                  across homophilic, heterophilic, and large-scale graph datasets.
                </p>
              </article>
            </div>
            <div class="col-md-4 col-sm-12 agb-home-feature-col">
              <article class="agb-home-feature-card">
                <span class="agb-home-feature-icon-wrap">
                  <i class="fa fa-cogs agb-home-feature-icon" aria-hidden="true"></i>
                </span>
                <h3 class="agb-home-feature-heading">Fair attack evaluation</h3>
                <p class="agb-home-feature-text">
                  AGB evaluates widely used graph attacks under unified poisoning and evasion settings with consistent
                  splits, model selection, target node sampling, and attack budgets.
                </p>
              </article>
            </div>
            <div class="col-md-4 col-sm-12 agb-home-feature-col">
              <article class="agb-home-feature-card">
                <span class="agb-home-feature-icon-wrap">
                  <i class="fa fa-bar-chart agb-home-feature-icon" aria-hidden="true"></i>
                </span>
                <h3 class="agb-home-feature-heading">Unified robustness comparison</h3>
                <p class="agb-home-feature-text">
                  AGB provides reproducible evaluation protocols and leaderboards for comparing vanilla GNNs, defended
                  models, and adversarial attacks under practical and fair settings.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div class="agb-section-wave agb-section-wave--bottom" aria-hidden="true">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,28 C480,0 960,56 1440,28 L1440,56 L0,56 Z" fill="#f8fbff" />
          </svg>
        </div>
      </section>

      <section class="agb-home-about agb-section agb-reveal">
        <div class="container agb-home-container">
          <div class="agb-about-hero-card">
            <div class="agb-about-hero-grid">
              <div class="agb-about-hero-copy">
                <span class="agb-about-badge">ABOUT AGB</span>
                <h2 class="agb-about-heading">
                  Developed by Researchers from<br />
                  <span class="agb-about-highlight">
                    <span class="agb-about-uni">UCF</span> and <span class="agb-about-uni">Virginia Tech</span>
                  </span>
                </h2>
                <div class="agb-about-desc-wrap">
                  <span class="agb-about-desc-accent" aria-hidden="true"></span>
                  <i class="fa fa-user-circle agb-about-desc-icon" aria-hidden="true"></i>
                  <p class="agb-about-desc">
                    AGB is developed as a research benchmark by contributors from the University of Central Florida and
                    Virginia Tech to support reproducible evaluation of adversarial attacks and defenses on graph learning
                    models.
                  </p>
                </div>
              </div>
              <div class="agb-about-visual" aria-hidden="true">
                <svg class="agb-about-network" viewBox="0 0 420 320" preserveAspectRatio="xMidYMid slice">
                  <line class="agb-about-network-line" x1="40" y1="260" x2="180" y2="80" />
                  <line class="agb-about-network-line" x1="180" y1="80" x2="340" y2="240" />
                  <line class="agb-about-network-line agb-about-network-line--light" x1="80" y1="200" x2="300" y2="120" />
                  <line class="agb-about-network-line agb-about-network-line--light" x1="120" y1="280" x2="280" y2="60" />
                  <circle class="agb-about-network-node agb-about-network-node--pulse" cx="180" cy="80" r="5" />
                  <circle class="agb-about-network-node" cx="40" cy="260" r="4" />
                  <circle class="agb-about-network-node agb-about-network-node--pulse" cx="340" cy="240" r="5" />
                  <circle class="agb-about-network-node" cx="300" cy="120" r="3.5" />
                  <circle class="agb-about-network-node" cx="280" cy="60" r="3" />
                </svg>
                <span class="agb-about-dot agb-about-dot--1"></span>
                <span class="agb-about-dot agb-about-dot--2"></span>
                <span class="agb-about-dot agb-about-dot--3"></span>
                <span class="agb-about-glow"></span>
                <div class="agb-about-logos">
                  <div class="agb-about-shield agb-about-shield--ucf agb-about-logo-float">
                    <img src="/assets/img/ucf-logo.svg" alt="University of Central Florida" width="88" height="88" />
                  </div>
                  <div class="agb-about-shield agb-about-shield--vt agb-about-logo-float agb-about-logo-float--delay">
                    <img src="/assets/img/vt-logo.svg" alt="Virginia Tech" width="88" height="88" />
                  </div>
                </div>
              </div>
            </div>
            <div class="agb-about-features">
              <article class="agb-about-feature">
                <i class="fa fa-shield agb-about-feature-icon" aria-hidden="true"></i>
                <h3 class="agb-about-feature-title">Rigorous Evaluation</h3>
                <p class="agb-about-feature-text">Standardized and fair benchmarking protocols</p>
              </article>
              <article class="agb-about-feature">
                <i class="fa fa-bar-chart agb-about-feature-icon" aria-hidden="true"></i>
                <h3 class="agb-about-feature-title">Reproducible Results</h3>
                <p class="agb-about-feature-text">Ensuring consistency across studies</p>
              </article>
              <article class="agb-about-feature">
                <i class="fa fa-check-circle agb-about-feature-icon" aria-hidden="true"></i>
                <h3 class="agb-about-feature-title">Robust Insights</h3>
                <p class="agb-about-feature-text">Reliable comparisons of attacks and defenses</p>
              </article>
              <article class="agb-about-feature">
                <i class="fa fa-sitemap agb-about-feature-icon" aria-hidden="true"></i>
                <h3 class="agb-about-feature-title">Graph Learning Focused</h3>
                <p class="agb-about-feature-text">Tailored for adversarial robustness in GNNs</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="agb-home-stats agb-section agb-reveal">
        <div class="agb-section-wave agb-section-wave--top" aria-hidden="true">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#ffffff" />
          </svg>
        </div>
        <div class="agb-home-stats-bg" aria-hidden="true">
          <span class="agb-home-stats-orb agb-home-stats-orb--left"></span>
          <span class="agb-home-stats-orb agb-home-stats-orb--right"></span>
          <svg class="agb-home-stats-network" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <line class="agb-home-stats-net-line" x1="80" y1="320" x2="240" y2="120" />
            <line class="agb-home-stats-net-line" x1="240" y1="120" x2="480" y2="280" />
            <line class="agb-home-stats-net-line" x1="480" y1="280" x2="720" y2="100" />
            <line class="agb-home-stats-net-line agb-home-stats-net-line--faint" x1="160" y1="240" x2="560" y2="160" />
            <circle class="agb-home-stats-net-node" cx="240" cy="120" r="4" />
            <circle class="agb-home-stats-net-node" cx="480" cy="280" r="4" />
            <circle class="agb-home-stats-net-node" cx="720" cy="100" r="3.5" />
            <circle class="agb-home-stats-net-node" cx="80" cy="320" r="3" />
          </svg>
        </div>
        <div class="container agb-home-container agb-home-stats-inner">
          <h2 class="agb-home-section-title agb-home-section-title-center agb-home-section-title--gradient-line">Benchmark at a Glance</h2>
          <div class="agb-home-stats-row">
            <article class="agb-home-stat-card">
              <span class="agb-home-stat-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v6.763a2 2 0 0 0 .894 1.664l5.812 3.875A2 2 0 0 1 18 16.618V20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3.382a2 2 0 0 1 .894-1.664L11.106 8.763A2 2 0 0 0 12 7.1V2"/><path d="M8 2h8"/><path d="M7 13h10"/></svg>
              </span>
              <p class="agb-home-stat-value" data-count="437000" data-suffix="+">437,000+</p>
              <p class="agb-home-stat-label">Experiments</p>
            </article>
            <article class="agb-home-stat-card">
              <span class="agb-home-stat-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
              </span>
              <p class="agb-home-stat-value" data-count="7">7</p>
              <p class="agb-home-stat-label">Attacks</p>
            </article>
            <article class="agb-home-stat-card">
              <span class="agb-home-stat-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
              </span>
              <p class="agb-home-stat-value" data-count="8">8</p>
              <p class="agb-home-stat-label">Defenses</p>
            </article>
            <article class="agb-home-stat-card">
              <span class="agb-home-stat-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
              </span>
              <p class="agb-home-stat-value" data-count="6">6</p>
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
            if (entry.target.classList.contains("agb-home-hero")) {
              initHeroCounters(entry.target);
            }
            if (entry.target.classList.contains("agb-home-stats")) {
              initGlanceCounters(entry.target);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("agb-reveal-visible"));
    const hero = root.querySelector(".agb-home-hero");
    if (hero) initHeroCounters(hero);
    const stats = root.querySelector(".agb-home-stats");
    if (stats) initGlanceCounters(stats);
  }
}

function formatGlanceCount(value, suffix) {
  return `${Math.round(value).toLocaleString("en-US")}${suffix || ""}`;
}

function initGlanceCounters(sectionEl) {
  const counters = sectionEl.querySelectorAll(".agb-home-stat-value[data-count]");
  counters.forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(target * eased);
      el.textContent = formatGlanceCount(current, suffix);
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}

function formatHeroCount(value, suffix) {
  if (value >= 1000) {
    const k = value / 1000;
    const rounded = k >= 100 ? Math.round(k) : Math.round(k * 10) / 10;
    return `${rounded}K${suffix || ""}`;
  }
  return `${value}${suffix || ""}`;
}

function initHeroCounters(heroEl) {
  const counters = heroEl.querySelectorAll(".agb-hero-stat-value[data-count]");
  counters.forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(target * eased);
      el.textContent = formatHeroCount(current, suffix);
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}
