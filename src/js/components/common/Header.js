import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import './NavLinks';

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: {
      attribute: 'brand-name',
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brand-name')) {
      throw new Error(`Atribut "brand-name" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-md navbar-dark bg-dark text-white p-3">
        <div class="container">
          <span class="navbar-brand">
            <a href="/">${this.brandName}</a>
          </span>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <nav-links class="ms-auto mb-2 mb-md-0">
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-header', NavApp);
