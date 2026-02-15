import restaurant from '../content/restaurant.json'
import MenuCategory from '../components/MenuCategory'
import Section from '../components/Section'
import Seo from '../seo/Seo'

export default function MenuPage() {
  return (
    <>
      <Seo title="Selection | QuickBite" description="Photo-based dish selection from available local assets." />
      <Section title="Auswahl basierend auf verfügbaren Fotos">
        <p className="mb-4 text-sm text-brand-muted">Kein offizielles Menü oder bestätigte Preise verfügbar. Diese Auswahl basiert nur auf vorhandenen Bildern.</p>
        <MenuCategory items={restaurant.menu.items} />
        <p className="mt-6 text-sm text-brand-muted">Hinweis: Für aktuelle Auswahl bitte Uber Eats nutzen oder direkt anrufen.</p>
      </Section>
    </>
  )
}
