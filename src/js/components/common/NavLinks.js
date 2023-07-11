import AuthUtils from '../../utils/auth'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'
import { html, nothing } from 'lit'

class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super()
    
    const {name} = AuthUtils.getAuth()
    this.name = name
  }

  render() {
    return html`
      <ul class="navbar-nav d-flex align-items-center gap-3">
        <li>
          <a href="/post.html">Buat Story</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-nowrap"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div class="me-2 d-inline-block">
              <img
                id="imgUserLogged"
                style="width: 30px;height: 30px"
                class="img-fluid rounded-pill"
                src="https://ui-avatars.com/api/?name=${this.name}&background=random"
                alt=${this.name || nothing}
              />
            </div>
            <span id="nameUserLogged">${this.name}</span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" id="userLogOut" @click=${this._userLogOut}>Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    `
  }

  _userLogOut(){
    AuthUtils.destroyAuth()
    window.location.href = "/auth/login.html"
  }
}

customElements.define('nav-links', NavLinks)
