import LitWithoutShadowDom from '../../base/LitWithoutShadowDom';
import { html } from 'lit';

class ModalStory extends LitWithoutShadowDom {
  static properties = {
    story: {
      type: Object,
      reflect: true,
    },
  };

  render() {
    return html`
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content bg-dark">
          <div class="modal-body text-white">
            ${this.story &&
            html`
              <img src="${this.story.photoUrl}" class="w-100" />
              <h5 class="mt-3 text-center">${this.story.name}</h5>
            `}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('modal-story', ModalStory);
