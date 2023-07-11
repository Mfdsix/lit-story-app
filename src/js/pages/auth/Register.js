import "../../components/pages/Auth/RegisterForm"
import AuthMiddleware from "../../middlewares/auth"
import AuthRequest from "../../network/auth"

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
  
    async _sendPost() {
      const formData = this._getFormData()
      const button = document.querySelector('form-button[type="submit"]')
  
      if (this._validateFormData({ ...formData })) {
        try{
          button.setAttribute('loading', true)
          const { data } = await AuthRequest.register({
            name: formData.name,
            email: formData.email,
            password: formData.password
          })

          if(data.error) return showResponseMessage(data)

          alert(data.message)
          window.location.href = "/auth/login.html"
        }catch(e){
          let err = showErrorMessage(e)
          this._showError(err)
        }finally{
          button.removeAttribute('loading')
        }
      }
    },
  
    _getFormData() {
      const name = document.querySelector('input[name="name"]')
      const email = document.querySelector('input[name="email"]')
      const password = document.querySelector('input[name="password"]')
  
      return {
        name: name.value,
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
      document.querySelector('form-input[name="name"]').setAttribute('invalid-feedback', message)
      document.querySelector('input[name="name"]').setCustomValidity(message)
    }
}

export default Login