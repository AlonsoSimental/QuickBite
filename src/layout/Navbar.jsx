import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import restaurant from '../content/restaurant.json'
import { useI18n } from '../i18n/I18nProvider'

export default function Navbar({ navItems }) {
  const { t, lang, setLang, available } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = 'mobile-nav-drawer'

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img src={restaurant.images.logo} alt="QuickBite provisional logo" className="h-8 w-8 rounded-full object-cover" />
          <span>QuickBite</span>
        </Link>
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <a className="rounded bg-brand-accent px-3 py-2 text-sm font-semibold text-black" href={`tel:${restaurant.contact.phone}`}>
            {t('call')}
          </a>
          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/20 bg-white/5 hover:bg-white/10"
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">Menü</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className="h-0.5 w-full bg-white" />
              <span className="h-0.5 w-full bg-white" />
              <span className="h-0.5 w-full bg-white" />
            </span>
          </button>
        </div>

        <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-3 text-sm md:flex">
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
          <span className="h-5 w-px bg-white/20" />
          <a className="rounded border border-white/20 px-2 py-1 hover:bg-white/10" href={restaurant.contact.mapsUrl} target="_blank" rel="noreferrer">
            {t('directions')}
          </a>
          <a className="rounded border border-white/20 px-2 py-1 hover:bg-white/10" href={`tel:${restaurant.contact.phone}`}>
            {t('reservePhone')}
          </a>
          <a className="rounded border border-white/20 px-2 py-1 hover:bg-white/10" href={restaurant.externalLinks.uberEats} target="_blank" rel="noreferrer">
            {t('delivery')}
          </a>

          <select
            aria-label="Language selector"
            className="rounded bg-white/10 px-2 py-1"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            {available.map((code) => (
              <option key={code} value={code} disabled={code !== restaurant.languages.idiomaPrincipal}>
                {code.toUpperCase()}{code !== restaurant.languages.idiomaPrincipal ? ' (Bald)' : ''}
              </option>
            ))}
          </select>
          <a className="rounded bg-brand-accent px-2 py-1 font-semibold text-black" href={`tel:${restaurant.contact.phone}`}>
            {t('call')}
          </a>
        </nav>
      </div>
      {menuOpen ? (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="presentation"
          onKeyDown={(event) => event.key === 'Escape' && closeMenu()}
        >
          <button type="button" aria-label="Menü schließen" className="absolute inset-0 bg-black/70" onClick={closeMenu} />
          <aside
            id={menuId}
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-full max-w-xs border-l border-white/10 bg-brand-bg p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="font-semibold">Menü</span>
              <button type="button" aria-label="Schließen" className="rounded border border-white/20 px-3 py-1.5" onClick={closeMenu}>
                X
              </button>
            </div>

            <nav className="space-y-2" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  autoFocus={index === 0}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded px-3 py-2 ${isActive ? 'bg-white/15' : 'hover:bg-white/10'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
              <a className="block rounded bg-brand-accent px-3 py-2 text-center font-semibold text-black" href={`tel:${restaurant.contact.phone}`} onClick={closeMenu}>{t('call')}</a>
              <a className="block rounded border border-white/20 px-3 py-2 text-center" href={restaurant.contact.mapsUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>{t('directions')}</a>
              <a className="block rounded border border-white/20 px-3 py-2 text-center" href={`tel:${restaurant.contact.phone}`} onClick={closeMenu}>{t('reservePhone')}</a>
              <a className="block rounded border border-white/20 px-3 py-2 text-center" href={restaurant.externalLinks.uberEats} target="_blank" rel="noreferrer" onClick={closeMenu}>{t('delivery')}</a>
            </div>
            <div className="mt-5">
              <label htmlFor="mobile-language" className="mb-2 block text-sm text-brand-muted">Sprache</label>
              <select
                id="mobile-language"
                aria-label="Language selector"
                className="w-full rounded bg-white/10 px-3 py-2"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
              >
                {available.map((code) => (
                  <option key={code} value={code} disabled={code !== restaurant.languages.idiomaPrincipal}>
                    {code.toUpperCase()}{code !== restaurant.languages.idiomaPrincipal ? ' (Bald)' : ''}
                  </option>
                ))}
              </select>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  )
}
