import "../../components/pages/Auth/LoginForm"
import AuthMiddleware from "../../middlewares/auth"
import AuthRequest from "../../network/auth"
import AuthUtils from "../../utils/auth"
import {
  showErrorMessage, showResponseMessage
} from "../../utils/error"

const Login = {
    async init() {
      AuthMiddleware.checkLoginState()
      this.formId = 'login-form'

      this._draw()
      this._initializeListener()
    },

    _draw() {
      const form = document.createElement('login-form')
      form.setAttribute('form-id', this.formId)
  
      document.querySelector('main').append(form)
    },

    _initializeListener() {
      setTimeout(() => {
        const form = document.querySelector(`#${this.formId}`)
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
          button.setAttribute('loading', true)
          const { data } = await AuthRequest.login({
            email: formData.email,
            password: formData.password
          })

          if(data.error || !data.loginResult) return showResponseMessage(data)

          AuthUtils.setAuth(data.loginResult)
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
      const email = document.querySelector('input[name="email"]')
      const password = document.querySelector('input[name="password"]')
  
      return {
        email: email.value,
        password: password.value,
      }
    },
  
    _validateFormData(formData) {
      const formDataFiltered = Object.values(formData).filter(
        (item) => item === '' || item.length == 0 || item == null || item == undefined,
      )
  
      return formDataFiltered.length === 0
    },

    _showError(message){
      document.querySelector('form-input[name="email"]').setAttribute('invalid-feedback', message)
      document.querySelector('input[name="email"]').setCustomValidity(message)
    }
}

export default Login