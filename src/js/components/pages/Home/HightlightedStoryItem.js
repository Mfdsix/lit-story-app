import { html } from 'lit';
import LitWithoutShadowDom from '../../base/LitWithoutShadowDom';

class HighlightedStoryItem extends LitWithoutShadowDom {
  static properties = {
    story: {
      type: Object,
      reflect: true,
    },
  };

  render() {
    return html`
      <a
        class="story-item"
        data-bs-toggle="modal"
        data-bs-target="#storyModal"
        data-record-id="${this.story.id}"
      >
        <div
          class="mx-2 rounded-circle d-flex justify-content-center align-items-center bg-primary p-1"
        >
          <img
            alt="${this.story.name}"
            class="rounded-circle object-cover"
            src="${this.story.photoUrl}"
          />
        </div>
      </a>
    `;
  }
}

customElements.define('highlighted-story-item', HighlightedStoryItem);
