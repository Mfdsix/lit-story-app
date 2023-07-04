import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { html } from 'lit';

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`
      <ul class="navbar-nav d-flex align-items-center gap-3">
        <li>
          <a href="/">List Story</a>
        </li>
        <li>
          <a href="/post.html">Buat Story</a>
        </li>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);
