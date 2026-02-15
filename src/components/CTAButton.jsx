export default function CTAButton({ href, children, variant = 'primary', className = '' }) {
  const styles =
    variant === 'secondary'
      ? 'border border-white/30 bg-transparent hover:bg-white/10'
      : 'bg-brand-accent text-black hover:brightness-110'

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </a>
  )
}
