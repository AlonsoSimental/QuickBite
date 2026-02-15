import restaurant from '../content/restaurant.json'
import CTAButton from '../components/CTAButton'
import Section from '../components/Section'
import Badge from '../components/Badge'
import MenuCategory from '../components/MenuCategory'
import Seo from '../seo/Seo'
import { useI18n } from '../i18n/I18nProvider'

export default function HomePage() {
  const { t, lang } = useI18n()
  const aboutLines = restaurant.about[lang]?.length ? restaurant.about[lang] : restaurant.about.de
  return (
    <>
      <Seo title="QuickBite | Fast Casual Burgers in Brugg" description="QuickBite in Brugg: burgers, delivery, takeaway, and dine-in with late-night opening hours." />
      <section className="relative">
        <img src={restaurant.images.hero} alt="QuickBite burger hero" className="h-[55vh] w-full object-cover md:h-[65vh]" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="max-w-xl text-3xl font-bold md:text-5xl">QuickBite</h1>
            <p className="mt-3 max-w-xl text-sm text-white/90 md:text-base">Fast-Casual-Burger in Brugg. Abend- und Nachtservice mit Lieferung und Take-away.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <CTAButton href={restaurant.externalLinks.uberEats}>{t('delivery')}</CTAButton>
              <CTAButton href={`tel:${restaurant.contact.phone}`} variant="secondary">{t('call')}</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <Section title={t('highlights')}>
        <div className="flex flex-wrap gap-2">
          {restaurant.highlights.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Section>

      <Section title={t('featuredDishes')}>
        <MenuCategory items={restaurant.menu.items} />
      </Section>

      <Section title={t('services')}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-brand-surface p-4">
            <h3 className="font-semibold">Service</h3>
            <ul className="mt-2 space-y-1 text-sm text-brand-muted">
              {restaurant.serviceOptions.map((opt) => <li key={opt}>{opt}</li>)}
            </ul>
          </div>
          <div className="rounded-xl bg-brand-surface p-4">
            <h3 className="font-semibold">Payment</h3>
            <ul className="mt-2 space-y-1 text-sm text-brand-muted">
              {restaurant.payments.map((opt) => <li key={opt}>{opt}</li>)}
            </ul>
          </div>
          <div className="rounded-xl bg-brand-surface p-4">
            <h3 className="font-semibold">Atmosphere</h3>
            <p className="mt-2 text-sm text-brand-muted">{restaurant.atmosphere}</p>
          </div>
        </div>
      </Section>

      <Section title={t('about')}>
        <div className="space-y-2 text-brand-muted">
          {aboutLines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
          {lang !== 'de' && restaurant.about[lang]?.length === 0 ? <p>{t('translationPending')}</p> : null}
        </div>
      </Section>
    </>
  )
}
