import { html, nothing } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'
import { msg, updateWhenLocaleChanges } from "@lit/localize"

class ImageInput extends LitWithoutShadowDom {
  static properties = {
    name: {
      type: String,
      reflect: true,
    },
    label: {
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
    src: {
      type: String,
    },

    required: {
      type: Boolean,
      reflect: true,
    },
  }

  constructor() {
    super()

    this._checkAvailabilityProperty()
    updateWhenLocaleChanges(this)

    this.src = ''
    this.validFeedbackMessage = msg(`Valid`)
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('name')) {
      throw new Error(`Atribut "name" harus diterapkan pada elemen ${this.localName}`)
    }
  }

  render() {
    return html`
      ${!this.src
        ? html` ${this.label && html`<label>${this.label}</label>`}
            <a @click=${this._chooseFile}>
              <div
                class="bg-primary rounded d-flex align-items-center justify-content-center"
                style="height: 150px"
              >
                <i class="bi bi-plus text-white" style="font-size: 48px"></i>
              </div>
            </a>`
        : html` <a @click=${this._chooseFile}>
            <div class="bg-primary rounded d-flex align-items-center justify-content-center">
              <img src="${this.src}" style="width: 100%" class="rounded shadow" />
            </div>
          </a>`}

      <input
        type="file"
        class="form-control d-none"
        name=${this.name || nothing}
        accept="image/*"
        ?required=${this.required}
        @change=${this._updatePhotoPreview}
      />

      ${this._feedbackTemplate()}
    `
  }

  _chooseFile() {
    const input = document.querySelector(`input[name=${this.name}]`)
    input.click()
  }

  _updatePhotoPreview() {
    const input = document.querySelector(`input[name=${this.name}]`)

    const photo = input.files[0]
    if (!photo) return

    const reader = new FileReader()
    reader.onload = (event) => {
      this.src = event.target.result
    }

    reader.readAsDataURL(photo)
  }

  _feedbackTemplate() {
    console.log(this.invalidFeedbackMessage)
    let validFeedbackTemplate = ''
    let invalidFeedbackTemplate = ''
    if (this.validFeedbackMessage) {
      validFeedbackTemplate = html`
        <div class="valid-feedback">${this.validFeedbackMessage}</div>
      `
    }
    if (this.invalidFeedbackMessage) {
      invalidFeedbackTemplate = html`
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
      `
    }

    return html`${validFeedbackTemplate}${invalidFeedbackTemplate}`
  }
}

customElements.define('form-input-image', ImageInput)
