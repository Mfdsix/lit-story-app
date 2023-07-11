import AuthLogin from "./auth/Login"
import AuthRegister from "./auth/Register"

import Home from './Home'
import PostStory from './Story/Post'

const pages = {
  '/': Home,
  '/post.html': PostStory,
  '/auth/register.html': AuthRegister,
  '/auth/login.html': AuthLogin,
}

export default pages
