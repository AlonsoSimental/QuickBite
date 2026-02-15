import { Link } from 'react-router-dom'
import Section from '../components/Section'
import { useI18n } from '../i18n/I18nProvider'
import Seo from '../seo/Seo'

export default function NotFoundPage() {
  const { t } = useI18n()
  return (
    <>
      <Seo title="404 | QuickBite" description="Page not found." />
      <Section>
        <h1 className="text-3xl font-bold">404</h1>
        <p className="mt-2 text-brand-muted">{t('notFound')}</p>
        <Link to="/" className="mt-4 inline-block rounded bg-brand-accent px-4 py-2 font-semibold text-black">
          {t('backHome')}
        </Link>
      </Section>
    </>
  )
}
