import '../components/pages/Home'
import AuthMiddleware from "../middlewares/auth"
import StoryRequest from '../network/story'
import AuthUtils from '../utils/auth'
import { showErrorMessage } from '../utils/error'

const Home = {
  async init() {
    AuthMiddleware.checkLoginState()
    
    await this._draw()
    this._initializeListener()
  },

  async _draw() {
    
    const hightlightedStory = document.createElement('hightlighted-story')
    const feedStory = document.createElement('feed-story')
    const modalStory = document.createElement('modal-story')
    modalStory.setAttribute('id', 'storyModal')
    modalStory.setAttribute('class', 'modal fade')
    
    document.querySelector('main').append(hightlightedStory, feedStory, modalStory)
    
    await this._initializeData()
  },

  async _initializeData() {
    const { token } = AuthUtils.getAuth()
    this.token = token
    this.page = 1
    this._stories = []

    this._loadStory()
  },

  async _loadStory(){
    const hightlightedStory = document.querySelector("hightlighted-story")
    const feedStory = document.querySelector("feed-story")

    try {
      hightlightedStory.setAttribute('loading', true)
      feedStory.setAttribute('loading', true)

      const { data } = await StoryRequest(this.token).getAll()

      if(data.error || !data.listStory) return showResponseMessage(data)

      const stories = data.listStory
      hightlightedStory.setAttribute("stories", JSON.stringify(stories.slice(0, 15)))
      feedStory.setAttribute("stories", JSON.stringify(stories))

      this._stories = stories
    } catch(e) {
      const err = showErrorMessage(e, false)
      hightlightedStory.setAttribute('error', err)
      feedStory.setAttribute('error', err)
    }finally{
      hightlightedStory.removeAttribute('loading')
      feedStory.removeAttribute('loading')
    }
  },

  _initializeListener() {
    const storyModal = document.getElementById('storyModal')
    storyModal.addEventListener('show.bs.modal', (event) => {
      const button = event.relatedTarget
      const dataRecord = this._stories.find((item) => {
        return item.id == button.dataset.recordId
      })

      storyModal.setAttribute('story', JSON.stringify(dataRecord))
    })
  },
}

export default Home
