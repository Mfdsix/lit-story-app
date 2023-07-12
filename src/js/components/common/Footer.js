import LitWithoutShadowDom from '../base/LitWithoutShadowDom'
import { html } from 'lit'
import { msg, updateWhenLocaleChanges } from "@lit/localize"

class FooterApp extends LitWithoutShadowDom {
  constructor(){
    super()
    updateWhenLocaleChanges(this)
  }

  render() {
    return html`
      <p class="text-center text-white mb-0 bg-secondary p-3">${msg(`Dibuat dengan ❤ oleh Mfdsix`)}</p>
    `
  }
}

customElements.define('app-footer', FooterApp)
