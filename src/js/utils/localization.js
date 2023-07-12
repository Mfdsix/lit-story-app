import { configureLocalization } from '@lit/localize'
import { sourceLocale, targetLocales } from '../../generated/locale-codes'
 
const STORAGE_KEY = "prefered_lang"

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  async loadLocale(locale) {
    return import(`../../generated/locales/${locale}.js`)
  },
})
 
export const setLocaleFromUrl = async () => {
  const source = localStorage.getItem(STORAGE_KEY, sourceLocale)

  const url = new URL(window.location.href)
  const locale = url.searchParams.get('lang') || source
 
  await setLocale(locale)
  localStorage.setItem(STORAGE_KEY, locale)
}

export const getLocaleFlag = () => {
  if(getLocale() == "en"){
    return 'GB'
  }

  return getLocale().toUpperCase()
}
 
export const localeNames = {
  en: 'English',
  id: 'Indonesia',
}