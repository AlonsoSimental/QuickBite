import restaurant from '../content/restaurant.json'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import Seo from '../seo/Seo'
import { useI18n } from '../i18n/I18nProvider'

export default function LocationHoursPage() {
  const { t } = useI18n()
  return (
    <>
      <Seo title="Location & Hours | QuickBite" description="Find QuickBite in Brugg and view all opening hours." />
      <Section title={t('address')}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-xl bg-brand-surface p-5">
            <p>{restaurant.contact.address.street}</p>
            <p>
              {restaurant.contact.address.postalCode} {restaurant.contact.address.city}, {restaurant.contact.address.region}
            </p>
            <p>{restaurant.contact.address.country}</p>
            <div className="mt-4">
              <CTAButton href={restaurant.contact.mapsUrl}>{t('openMaps')}</CTAButton>
            </div>
          </div>
          <img src={restaurant.images.venue[0]} alt="QuickBite venue exterior" className="h-64 w-full rounded-xl object-cover" loading="lazy" />
        </div>
      </Section>

      <Section title={t('hours')}>
        <div className="overflow-hidden rounded-xl border border-white/10">
          {restaurant.hours.map((item) => (
            <div key={item.day} className="flex items-center justify-between border-b border-white/10 px-4 py-3 last:border-b-0">
              <span>{item.day}</span>
              <span className="text-brand-muted">{item.hours}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
