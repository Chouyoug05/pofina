// À inclure au début du <body> : affiche le chargement Poufa et expose PoufaSplash.show / hide / leaf.
(() => {
  const leaf = (cls = "") => `<span class="pf-leaf ${cls}"><svg viewBox="2.5 2 20 20" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19C5 11 10 5 20 5C20 14 15 19 7 19"/><path d="M5 19C8 14 11 11 15 9"/></svg><svg class="pf-star" viewBox="0 0 10 10" aria-hidden="true"><path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4Z" fill="#fff"/></svg></span>`;
  const el = document.createElement("div");
  el.className = "pf-splash";
  el.setAttribute("role", "status");
  el.innerHTML = `${leaf()}<b class="pf-word">Poufa</b><small class="pf-msg">Chargement…</small>`;
  document.body.appendChild(el);
  window.PoufaSplash = {
    leaf,
    show(message = "Chargement…", ms) {
      el.querySelector(".pf-msg").textContent = message;
      el.classList.remove("done");
      if (ms) return new Promise((done) => setTimeout(() => { this.hide(); done(); }, ms));
    },
    hide: () => el.classList.add("done"),
  };
})();
