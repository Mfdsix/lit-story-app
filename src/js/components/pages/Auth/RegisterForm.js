import { html, nothing } from 'lit'
import LitWithoutShadowDom from '../../base/LitWithoutShadowDom'
import '../../form'

class RegisterForm extends LitWithoutShadowDom {
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
            <h3 class="mb-0">Daftar</h3>
            <span>isi form dibawah untuk mendaftar</span>
        </div>

        <form id=${
          this.formId || nothing
        } method="POST" class="d-grid gap-3" novalidate>
            <form-input required name="name" label="Nama Lengkap" invalid-feedback="Nama Lengkap Tidak Valid"></form-input>
            <form-input type="email" required name="email" label="Alamat Email" invalid-feedback="Alamat Email Tidak Valid"></form-input>
            <form-input type="password" required name="password" label="Password" invalid-feedback="Password Tidak Valid"></form-input>
            
            <div class="text-center">
                <form-button text="Daftar Sekarang"></form-button>

                <span class="d-block mt-2 text-muted">
                  Sudah Punya Akun ?
                  <a href="/auth/login.html">Cus Login!</a>
                </span>
            </div>
        </div>
        `
  }
}

customElements.define('register-form', RegisterForm)
