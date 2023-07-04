import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class Button extends LitWithoutShadowDom {
  static properties = {
    text: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();

    this.rows = 3;
    this.required = false;
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('text')) {
      throw new Error(`Atribut "text" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html` <button class="btn btn-primary btn-block">${this.text}</button> `;
  }
}

customElements.define('form-button', Button);
