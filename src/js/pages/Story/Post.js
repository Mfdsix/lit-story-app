import '../../components/pages/Story/post'
import AuthMiddleware from "../../middlewares/auth"
import StoryRequest from "../../network/story"
import AuthUtils from '../../utils/auth'
import { showErrorMessage, showResponseMessage } from '../../utils/error'

const Post = {
  init() {
    AuthMiddleware.checkLoginState()
    
    const { token } = AuthUtils.getAuth()
    this.token = token

    this._draw()
    this._initializeListener()

  },

  _draw() {
    const form = document.createElement('post-form')
    form.setAttribute('form-id', 'post-form')

    document.querySelector('main').append(form)
  },

  _initializeListener() {
    setTimeout(() => {
      const form = document.querySelector('#post-form')
      form.addEventListener(
        'submit',
        (event) => {
          event.preventDefault()
          event.stopPropagation()

          form.classList.add('was-validated')
          this._sendPost()
        },
        false,
      )
    }, 500)
  },

  async _sendPost() {
    const button = document.querySelector('form-button[type="submit"]')
    const formData = this._getFormData()

    if (this._validateFormData({ ...formData })) {
      try{
        this._showError("")
        button.setAttribute('loading', true)

        const _formData = new FormData()
        _formData.append('photo', formData.image[0])
        _formData.append('description', formData.deskripsi)
        const { data } = await StoryRequest(this.token).create(_formData)

        if(data.error) return showResponseMessage(data)

        window.location.href = "/"
      }catch(e){
        let err = showErrorMessage(e)
        this._showError(err)
      }finally{
        button.removeAttribute('loading')
      }
    }
  },

  _getFormData() {
    const image = document.querySelector('input[name="gambar"]')
    const deskripsi = document.querySelector('textarea[name="deskripsi"]')

    return {
      image: image.files,
      deskripsi: deskripsi.value,
    }
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === '' || item.length == 0 || item == null || item == undefined,
    )

    return formDataFiltered.length === 0
  },

  _showError(message){
    document.querySelector('form-textarea[name="deskripsi"]').setAttribute('invalid-feedback', message)
    document.querySelector('textarea[name="deskripsi"]').setCustomValidity(message)
  }
}

export default Post
