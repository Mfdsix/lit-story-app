import { html } from 'lit'
import { allLocales } from '../../../generated/locale-codes'
import { updateWhenLocaleChanges } from '@lit/localize'
import { getLocale, getLocaleFlag, localeNames, setLocaleFromUrl } from '../../utils/localization'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

class ChooseLanguage extends LitWithoutShadowDom {
    constructor() {
        super()
        updateWhenLocaleChanges(this)
        setLocaleFromUrl()
    }
    
    render() {
        return html`
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
                src="https://www.countryflagicons.com/FLAT/64/${getLocaleFlag()}.png"
              />
            </div>
          </a>
          <ul class="dropdown-menu">
            ${allLocales.map((lang) => html`
              <li>
                  <a href="javascript:void(0)" @click="${() => this._localeChanged(lang)}" class="dropdown-item">${localeNames[lang]}</a>
              </li>
            `)}
          </ul>
        </li>
        `
    }
    
    _localeChanged(newLocale) {
        if (newLocale !== getLocale()) {
            const url = new URL(window.location.href)
            url.searchParams.set('lang', newLocale)
            
            window.history.pushState(null, '', url.toString())
            setLocaleFromUrl()
        }
    }
}

customElements.define('choose-language', ChooseLanguage)