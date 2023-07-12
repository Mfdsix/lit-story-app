import { html, nothing } from 'lit'
import LitWithoutShadowDom from '../../base/LitWithoutShadowDom'
import '../../form'
import { msg, updateWhenLocaleChanges } from '@lit/localize'

class PostForm extends LitWithoutShadowDom {
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
        <h3 class="mb-3">${msg(`Upload Story Kamu`)}</h3>

        <form id=${
          this.formId || nothing
        } method="POST" enctype="multipart/form-data" class="d-grid gap-3" novalidate>
            <form-input-image required name="gambar" label="${msg(`Gambar`)}" invalid-feedback="${msg(`Gambar Harus Dipilih`)}"></form-input-image>
            <form-textarea required name="deskripsi" label="${msg(`Deskripsi`)}" invalid-feedback="${msg(`Deskripsi Harus Diisi`)}"></form-textarea>
            <hr/>
            <div class="text-center">
                <form-button text="${msg(`Simpan`)}"></form-button>
            </div>
        </div>
        `
  }
}

customElements.define('post-form', PostForm)
