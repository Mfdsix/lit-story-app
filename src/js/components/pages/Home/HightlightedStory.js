import LitWithoutShadowDom from '../../base/LitWithoutShadowDom'
import './HightlightedStoryItem'
import { html } from 'lit'

class HightlightedStory extends LitWithoutShadowDom {
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
  }

  render() {

    if(this.isLoading){
      return html`
      <div class="d-flex placeholder-glow">
        ${this._addStory()}
        ${[0,1,2,3,4].map(() => html`<div class="placeholder d-inline-block rounded-circle mx-2" style="height: 87px; width: 87px"></div>`)}
      </div>
      `
    }else if(this.error){
      return html`
      <div class="text-center">
        <b class="text-danger">${this.error}</b>
      </div>
      `
    }else{
      return html`
      <div class="d-flex overflow-auto pb-3 parent">
        ${this._addStory()}
          ${this.stories.map((story) => html`<highlighted-story-item story="${JSON.stringify(story)}"></highlighted-story-item>`)}
      </div>
      `
    }
  }

  _addStory(){
    return html`
      <a href="/post.html" class="story-item">
        <div class="mx-2 rounded-circle d-flex justify-content-center align-items-center bg-primary p-1">
            <i class="bi bi-plus text-white" style="font-size: 48px"></i>
        </div>
      </a>
    `
  }
}

customElements.define('hightlighted-story', HightlightedStory)
