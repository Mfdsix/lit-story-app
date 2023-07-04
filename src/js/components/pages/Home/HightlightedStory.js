import LitWithoutShadowDom from '../../base/LitWithoutShadowDom';
import './HightlightedStoryItem';

class HightlightedStory extends LitWithoutShadowDom {
  static properties = {
    stories: {
      type: Array,
      reflect: true,
    },
  };

  render() {
    const parent = document.createElement('div');
    parent.setAttribute('class', 'd-flex overflow-auto pb-3 parent');

    parent.innerHTML = `
            <a href="/post.html" class="story-item">
                <div class="mx-2 rounded-circle d-flex justify-content-center align-items-center bg-primary p-1">
                    <i class="bi bi-plus text-white" style="font-size: 48px;"></i>
                </div>
            </a>
        `;

    this.stories.map((story) => {
      const item = document.createElement('highlighted-story-item');
      item.setAttribute('story', JSON.stringify(story));

      parent.append(item);
    });

    return parent;
  }
}

customElements.define('hightlighted-story', HightlightedStory);
