import { html, nothing } from 'lit'
import LitWithoutShadowDom from '../../base/LitWithoutShadowDom'
import '../../form'

class LoginForm extends LitWithoutShadowDom {
  static properties = {
    formId: {
      attribute: 'form-id',
      type: String,
      reflect: true,
    },
  }

  render() {
    return html`
        <div class="mb-3">
            <h3 class="mb-0">Login</h3>
            <span>silahkan login ke akun anda</span>
        </div>

        <form id=${
          this.formId || nothing
        } method="POST" class="d-grid gap-3" novalidate>
            <form-input type="email" required name="email" label="Alamat Email" invalid-feedback="Alamat Email Tidak Valid"></form-input>
            <form-input type="password" required name="password" label="Password" invalid-feedback="Password Tidak Valid"></form-input>
            
            <div class="text-center">
                <form-button text="Login"></form-button>

                <span class="d-block mt-2 text-muted">
                  Belum Punya Akun ?
                  <a href="/auth/register.html">Daftar Dulu Yuk!</a>
                </span>
            </div>
        </div>
        `
  }
}

customElements.define('login-form', LoginForm)
