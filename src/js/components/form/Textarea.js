import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class TextareaInput extends LitWithoutShadowDom {
  static properties = {
    value: {
      type: String,
      reflect: true,
    },
    rows: {
      type: Number,
      reflect: true,
    },
    label: {
      type: String,
      reflect: true,
    },
    name: {
      type: String,
      reflect: true,
    },

    validFeedbackMessage: {
      attribute: 'valid-feedback',
      type: String,
      reflect: true,
    },
    invalidFeedbackMessage: {
      attribute: 'invalid-feedback',
      type: String,
      reflect: true,
    },

    required: {
      type: Boolean,
      reflect: true,
    },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();

    this.rows = 3;
    this.required = false;
    this.validFeedbackMessage = 'Valid';
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('name')) {
      throw new Error(`Atribut "name" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <div class="form-group">
        ${this.label && html`<label>${this.label}</label>`}
        <textarea
          name=${this.name || nothing}
          class="form-control"
          placeholder=${this.label || nothing}
          rows=${this.rows || nothing}
          value=${this.value || nothing}
          ?required=${this.required}
          @input=${(e) => (this.value = e.target.value)}
        ></textarea>

        ${this._validFeedbackTemplate()}
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
        <div></div>
      </div>
    `;
  }

  _validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html` <div class="valid-feedback">${this.validFeedbackMessage}</div> `;
    }

    return html``;
  }
}

customElements.define('form-textarea', TextareaInput);
