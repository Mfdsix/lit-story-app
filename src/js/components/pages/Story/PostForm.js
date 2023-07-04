import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../../base/LitWithoutShadowDom';
import '../../form';

class PostForm extends LitWithoutShadowDom {
  static properties = {
    formId: {
      attribute: 'form-id',
      type: String,
      reflect: true,
    },
  };

  render() {
    return html`
        <h3 class="mb-3">Upload Story Kamu</h3>

        <form id=${
          this.formId || nothing
        } method="POST" enctype="multipart/form-data" class="d-grid gap-3" novalidate>
            <form-input-image required name="gambar" label="Gambar" invalid-feedback="Gambar Harus Dipilih"></form-input-image>
            <form-textarea required name="deskripsi" label="Deskripsi" invalid-feedback="Deskripsi Harus Diisi"></form-textarea>
            <hr/>
            <div class="text-center">
                <form-button text="Simpan"></form-button>
            </div>
        </div>
        `;
  }
}

customElements.define('post-form', PostForm);
