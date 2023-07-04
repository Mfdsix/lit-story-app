import { html } from 'lit';
import moment from 'moment/moment';
import LitWithoutShadowDom from '../../base/LitWithoutShadowDom';

class FeedStoryItem extends LitWithoutShadowDom {
  static properties = {
    story: {
      type: Object,
      reflect: true,
    },
  };

  render() {
    return html`
      <div class="border-bottom my-5">
        <div>
          <img src="${this.story.photoUrl}" class="w-100 shadow" />
        </div>
        <div class="p-2">
          <h5 class="mb-0">${this.story.name}</h5>
          <span class="text-date text-muted"
            >${moment(this.story.createdAt).format('D MMM YYYY H:m')}</span
          >
          <div class="mt-2">${this.story.description}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('feed-story-item', FeedStoryItem);
