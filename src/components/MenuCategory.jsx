import Card from './Card'

export default function MenuCategory({ items }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.image}>
          <img src={item.image} alt={item.name} loading="lazy" className="mb-3 h-44 w-full rounded-lg object-cover" />
          <h3 className="font-semibold">{item.name}</h3>
          <p className="mt-1 text-sm text-brand-muted">{item.description}</p>
        </Card>
      ))}
    </div>
  )
}
