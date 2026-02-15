import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LocationHoursPage from './pages/LocationHoursPage'
import ContactPage from './pages/ContactPage'
import MenuPage from './pages/MenuPage'
import NotFoundPage from './pages/NotFoundPage'
import SiteLayout from './layout/SiteLayout'
import { useI18n } from './i18n/I18nProvider'

export default function App() {
  const { t } = useI18n()

  const navItems = [
    { to: '/', label: t('navHome') },
    { to: '/menu', label: t('navMenu') },
    { to: '/location-hours', label: t('navLocationHours') },
    { to: '/contact', label: t('navContact') },
  ]

  return (
    <SiteLayout navItems={navItems}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/location-hours" element={<LocationHoursPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  )
}
