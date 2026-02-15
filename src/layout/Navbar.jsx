import { Link, NavLink } from 'react-router-dom'
import restaurant from '../content/restaurant.json'
import { useI18n } from '../i18n/I18nProvider'

export default function Navbar({ navItems }) {
  const { t, lang, setLang, available } = useI18n()

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img src={restaurant.images.logo} alt="QuickBite provisional logo" className="h-8 w-8 rounded-full object-cover" />
          <span>QuickBite</span>
        </Link>

        <nav aria-label="Main navigation" className="ml-auto flex flex-wrap items-center gap-2 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded px-2 py-1 ${isActive ? 'bg-white/15' : 'hover:bg-white/10'}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <select
            aria-label="Language selector"
            className="rounded bg-white/10 px-2 py-1"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            {available.map((code) => (
              <option key={code} value={code}>
                {code.toUpperCase()}
              </option>
            ))}
          </select>

          <a className="rounded bg-brand-accent px-2 py-1 font-semibold text-black" href={`tel:${restaurant.contact.phone}`}>
            {t('call')}
          </a>
          <a className="rounded bg-white/10 px-2 py-1" href={restaurant.contact.mapsUrl} target="_blank" rel="noreferrer">
            {t('directions')}
          </a>
          <a className="rounded bg-white/10 px-2 py-1" href={`tel:${restaurant.contact.phone}`}>
            {t('reservePhone')}
          </a>
          <a className="rounded bg-white/10 px-2 py-1" href={restaurant.externalLinks.uberEats} target="_blank" rel="noreferrer">
            {t('delivery')}
          </a>
        </nav>
      </div>
    </header>
  )
}
