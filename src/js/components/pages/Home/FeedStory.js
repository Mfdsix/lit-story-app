import LitWithoutShadowDom from '../../base/LitWithoutShadowDom';
import { html } from 'lit';
import './FeedStoryItem';

class FeedStory extends LitWithoutShadowDom {
  static properties = {
    stories: {
      type: Array,
      reflect: true,
    },
    isLoading: {
      type: Boolean,
      reflect: true,
      attribute: 'loading'
    },
    error: {
      type: String,
      reflect: true,
    },
  };

  render() {
    if(this.isLoading){
      return html`
      <div>
        ${[0,1,2,3,4].map(() => html`
        <div class="my-3 placeholder-glow">
          <div class="placeholder w-100" style="height: 250px"></div>
          <div class="placeholder w-25 my-2" style="height: 30px"></div>
          <div class="placeholder w-75" style="height: 50"></div>
          <div class="placeholder w-100 my-1" style="height: 50"></div>
          <div class="placeholder w-75" style="height: 50"></div>
        </div>
        `)}
      </div>
      `
    }else if(this.error){
      return html`
      <div class="text-center">
        <b class="text-danger">${this.error}</b>
      </div>
      `
    }else{
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
}

customElements.define('feed-story', FeedStory);
