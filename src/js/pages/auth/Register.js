import "../../components/pages/Auth/RegisterForm"
import AuthMiddleware from "../../middlewares/auth"

const Login = {
    async init() {
      AuthMiddleware.checkLoginState()
      this.formId = 'register-form'

      this._draw()
      this._initializeListener()
    },

    _draw() {
      const form = document.createElement('register-form')
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
  
    _sendPost() {
      const formData = this._getFormData()
  
      if (this._validateFormData({ ...formData })) {
        
      }
    },
  
    _getFormData() {
      const username = document.querySelector('input[name="username"]')
      const email = document.querySelector('input[name="email"]')
      const password = document.querySelector('input[name="password"]')
  
      return {
        username: username.value,
        email: email.value,
        password: password.value,
      }
    },
  
    _validateFormData(formData) {
      const formDataFiltered = Object.values(formData).filter(
        (item) => item === '' || item.length == 0 || item == null || item == undefined,
      )
  
      return formDataFiltered.length === 0
    }
}

export default Login