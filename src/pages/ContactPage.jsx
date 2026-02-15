import restaurant from '../content/restaurant.json'
import CTAButton from '../components/CTAButton'
import Section from '../components/Section'
import Seo from '../seo/Seo'
import { useI18n } from '../i18n/I18nProvider'

export default function ContactPage() {
  const { t } = useI18n()
  return (
    <>
      <Seo title="Contact | QuickBite" description="Call QuickBite, open directions, or order via Uber Eats." />
      <Section title={t('navContact')}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-brand-surface p-4">
            <h3 className="font-semibold">Telefon</h3>
            <p className="mt-2 text-brand-muted">{restaurant.contact.phone}</p>
            <CTAButton className="mt-4 w-full" href={`tel:${restaurant.contact.phone}`}>{t('call')}</CTAButton>
          </div>
          <div className="rounded-xl bg-brand-surface p-4">
            <h3 className="font-semibold">Maps</h3>
            <p className="mt-2 text-brand-muted">{restaurant.contact.address.street}</p>
            <CTAButton className="mt-4 w-full" href={restaurant.contact.mapsUrl}>{t('directions')}</CTAButton>
          </div>
          <div className="rounded-xl bg-brand-surface p-4">
            <h3 className="font-semibold">Delivery</h3>
            <p className="mt-2 text-brand-muted">Uber Eats</p>
            <CTAButton className="mt-4 w-full" href={restaurant.externalLinks.uberEats}>{t('delivery')}</CTAButton>
          </div>
        </div>
      </Section>
    </>
  )
}
