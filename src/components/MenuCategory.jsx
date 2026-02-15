import Card from './Card'

export default function MenuCategory({ items }) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.image}>
          <div className="mb-3 rounded-lg bg-black/25 p-2">
            <img src={item.image} alt={item.name} loading="lazy" className="h-44 w-full rounded-md object-cover" />
          </div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="mt-1 text-sm text-brand-muted">{item.description}</p>
        </Card>
      ))}
    </div>
  )
}
