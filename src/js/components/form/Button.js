import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class Button extends LitWithoutShadowDom {
  static properties = {
    text: {
      type: String,
      reflect: true,
    },
    isLoading: {
      type: Boolean,
      reflect: true,
      attribute: 'loading'
    }
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('text')) {
      throw new Error(`Atribut "text" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
    <button
      ?disabled=${this.isLoading}
      class="btn btn-primary text-white btn-block"
      >${this.text}</button> `;
  }
}

customElements.define('form-button', Button);
