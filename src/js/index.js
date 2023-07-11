import '../sass/main.scss'
import * as bootstrap from 'bootstrap'

import './components/index'

import pages from './pages'

const detectRoute = () => {
  return pages[window.location.pathname]
}

const initPages = () => {
  const header = document.querySelector('header')
  const main = document.querySelector('main')
  const footer = document.querySelector('footer')

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`
  }else if(main){
    main.style.minHeight = `calc(100vh - ${footer.clientHeight}px)`
    main.style.setProperty('padding-top', '100px', 'important')
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  initPages()

  const route = detectRoute()
  route.init()
})
