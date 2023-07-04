import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { html } from 'lit';

class FooterApp extends LitWithoutShadowDom {
  render() {
    return html`
      <p class="text-center text-white mb-0 bg-secondary p-3">Dibuat dengan ❤ oleh Mfdsix</p>
    `;
  }
}

customElements.define('app-footer', FooterApp);
