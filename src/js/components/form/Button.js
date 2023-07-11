import { html, nothing } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

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
    },
    type: {
      reflect: true,
      type: String
    }
  }

  constructor() {
    super()
    this._checkAvailabilityProperty()
    this.type = 'submit'
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('text')) {
      throw new Error(`Atribut "text" harus diterapkan pada elemen ${this.localName}`)
    }
  }

  render() {
    return html`
    <button
      ?disabled=${this.isLoading}
      type="${this.type}"
      class="btn btn-primary text-white btn-block"
      >
      ${this.isLoading ? 'loading ...'  : this.text}
    </button> `
  }
}

customElements.define('form-button', Button)
