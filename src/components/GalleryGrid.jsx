export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((src) => (
        <img
          key={src}
          src={src}
          alt="QuickBite gallery"
          loading="lazy"
          className="h-56 w-full rounded-lg object-cover"
        />
      ))}
    </div>
  )
}
