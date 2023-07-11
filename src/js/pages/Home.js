import '../components/pages/Home'
import AuthMiddleware from "../middlewares/auth"

const Home = {
  async init() {
    AuthMiddleware.checkLoginState()
    
    await this._draw()
    this._initializeListener()
  },

  async _draw() {
    const stories = await this._initializeData()

    const hightlightedStory = document.createElement('hightlighted-story')
    hightlightedStory.setAttribute('stories', stories)
    const feedStory = document.createElement('feed-story')
    feedStory.setAttribute('stories', stories)
    const modalStory = document.createElement('modal-story')
    modalStory.setAttribute('id', 'storyModal')
    modalStory.setAttribute('class', 'modal fade')

    document.querySelector('main').append(hightlightedStory, feedStory, modalStory)

    this._stories = JSON.parse(stories)
  },

  async _initializeData() {
    try {
      const fetchRecords = await fetch('/api/stories.json')
      return JSON.stringify((await fetchRecords.json()).listStory)
    } catch {
      return JSON.stringify([])
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
