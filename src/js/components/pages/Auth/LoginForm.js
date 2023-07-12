import { html, nothing } from 'lit'
import LitWithoutShadowDom from '../../base/LitWithoutShadowDom'
import '../../form'
import { msg, updateWhenLocaleChanges } from '@lit/localize'

class LoginForm extends LitWithoutShadowDom {
  static properties = {
    formId: {
      attribute: 'form-id',
      type: String,
      reflect: true,
    },
  }

  constructor(){
    super()
    updateWhenLocaleChanges(this)
  }

  render() {
    return html`
        <div class="mb-3">
            <h3 class="mb-0">${msg(`Masuk Story App`)}</h3>
            <span>${msg(`Silahkan masuk ke akun anda`)}</span>
        </div>

        <form id=${
          this.formId || nothing
        } method="POST" class="d-grid gap-3" novalidate>
            <form-input type="email" required name="email" label="${msg(`Alamat Email`)}" invalid-feedback="${msg(`Alamat Email Tidak Valid`)}"></form-input>
            <form-input type="password" required name="password" label="${msg(`Password`)}" invalid-feedback="${msg(`Password Tidak Valid`)}"></form-input>
            
            <div class="text-center">
                <form-button text="${msg(`Masuk`)}"></form-button>

                <span class="d-block mt-2 text-muted">
                ${msg(html`Belum Punya Akun ?
                  <a href="/auth/register.html">Daftar Dulu Yuk!</a>
                `)}
                </span>
            </div>
        </div>
        `
  }
}

customElements.define('login-form', LoginForm)
