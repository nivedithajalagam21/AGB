export function pageHeader({ title, subtitle }) {
  return `
    <section class="agb-page-header">
      <div class="container">
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
    </section>
  `;
}

export function sectionWrapper({ title, content }) {
  return `
    <section class="agb-section">
      <div class="container">
        <h2>${title}</h2>
        ${content}
      </div>
    </section>
  `;
}

export function card({ title, body, badge = "" }) {
  const badgeHtml = badge ? `<p class="agb-card-badge">${badge}</p>` : "";
  return `
    <article class="agb-card">
      ${badgeHtml}
      <h3>${title}</h3>
      <p>${body}</p>
    </article>
  `;
}

export function listRenderer(items, renderItem, containerClass = "row") {
  return `<div class="${containerClass}">${items.map(renderItem).join("")}</div>`;
}
