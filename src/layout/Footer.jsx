import restaurant from '../content/restaurant.json'
import Container from '../components/Container'
import { useI18n } from '../i18n/I18nProvider'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="mt-12 border-t border-white/10 py-8">
      <Container className="grid grid-cols-1 gap-6 text-sm text-brand-muted md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="mb-2 font-semibold text-white">QuickBite</h3>
          <p>{restaurant.contact.address.street}</p>
          <p>
            {restaurant.contact.address.postalCode} {restaurant.contact.address.city}
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-white">{t('footerHours')}</h3>
          <p>Mo, Di, Do-So: 18:30-03:00</p>
          <p>Mi: Geschlossen</p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-white">{t('footerLinks')}</h3>
          <a className="block hover:text-white" href={restaurant.externalLinks.uberEats} target="_blank" rel="noreferrer">Uber Eats</a>
          <a className="block hover:text-white" href={restaurant.externalLinks.restaurantGuru} target="_blank" rel="noreferrer">Restaurant Guru</a>
        </div>
      </Container>
      <Container className="mt-6 text-xs text-brand-muted">© {new Date().getFullYear()} QuickBite</Container>
    </footer>
  )
}
