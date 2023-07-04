import LitWithoutShadowDom from '../../base/LitWithoutShadowDom';
import { html } from 'lit';
import './FeedStoryItem';

class FeedStory extends LitWithoutShadowDom {
  static properties = {
    stories: {
      type: Array,
      reflect: true,
    },
  };

  render() {
    const parent = document.createElement('div');
    parent.setAttribute('class', 'my-3');

    this.stories.forEach((story) => {
      const item = document.createElement('feed-story-item');
      item.setAttribute('story', JSON.stringify(story));

      parent.append(item);
    });

    return parent;
  }
}

customElements.define('feed-story', FeedStory);
