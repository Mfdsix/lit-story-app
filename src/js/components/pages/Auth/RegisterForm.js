import { html, nothing } from 'lit'
import LitWithoutShadowDom from '../../base/LitWithoutShadowDom'
import '../../form'
import { msg, updateWhenLocaleChanges } from '@lit/localize'

class RegisterForm extends LitWithoutShadowDom {
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
            <h3 class="mb-0">${msg(`Daftar Story App`)}</h3>
            <span>${msg(`Isi form dibawah untuk mendaftar`)}</span>
        </div>

        <form id=${
          this.formId || nothing
        } method="POST" class="d-grid gap-3" novalidate>
            <form-input required name="name" label="${msg(`Nama Lengkap`)}" invalid-feedback="${msg(`Nama Lengkap Tidak Valid`)}"></form-input>
            <form-input type="email" required name="email" label="${msg(`Alamat Email`)}" invalid-feedback="${msg(`Alamat Email Tidak Valid`)}"></form-input>
            <form-input type="password" required name="password" label="${msg(`Password`)}" invalid-feedback="${msg(`Password Tidak Valid`)}"></form-input>
            
            <div class="text-center">
                <form-button text="${msg(`Daftar Sekarang`)}"></form-button>

                <span class="d-block mt-2 text-muted">
                ${msg(html`Sudah Punya Akun ?
                  <a href="/auth/login.html">Cus Login!</a>
                `)}
                </span>
            </div>
        </div>
        `
  }
}

customElements.define('register-form', RegisterForm)
