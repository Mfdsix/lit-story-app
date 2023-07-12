import AuthUtils from '../../utils/auth'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'
import "./ChooseLanguage"
import { html, nothing } from 'lit'
import { msg, updateWhenLocaleChanges } from "@lit/localize"

class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super()

    updateWhenLocaleChanges(this)
    const {name} = AuthUtils.getAuth()
    this.name = name
  }

  render() {
    return html`
      <ul class="navbar-nav d-flex align-items-center gap-3">
        <li>
          <a href="/post.html">${msg(`Buat Story`)}</a>
        </li>
        <choose-language></choose-language>
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
