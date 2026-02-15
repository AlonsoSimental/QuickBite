import { createContext, useContext, useMemo, useState } from 'react'
import restaurant from '../content/restaurant.json'
import { translations } from './translations'

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(restaurant.languages.idiomaPrincipal)

  const value = useMemo(() => {
    const t = (key) => translations[lang]?.[key] ?? translations.de[key] ?? key
    return { lang, setLang, t, available: restaurant.languages.disponibles }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
