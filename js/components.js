/* MammothShift Labs — Shared Components */

class MslHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header>
  <nav class="ml-nav">
    <a href="index.html" class="ml-nav-logo">
      <img src="img/mammothshift-labs.png" alt="MammothShift Labs">
      <span class="ml-nav-wordmark">MammothShift Labs</span>
    </a>
    <ul class="ml-nav-links">
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <button class="ml-nav-burger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="ml-mobile-nav">
    <a href="contact.html" class="ml-mobile-nav__link">Contact</a>
  </div>
</header>`;
  }
}

class MslFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="ml-footer">
  <div class="ml-footer-inner">
    <div class="ml-footer-copy"><img src="img/mammothshift-labs.png" alt="MammothShift Labs" class="ml-footer-logo"> MammothShift Labs</div>
    <ul class="ml-footer-links">
      <li><a href="contact.html">Contact</a></li>
      <li><a href="privacy.html">Privacy</a></li>
    </ul>
  </div>
</footer>`;
  }
}

customElements.define('msl-header', MslHeader);
customElements.define('msl-footer', MslFooter);
