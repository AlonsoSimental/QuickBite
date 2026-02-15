export default function Card({ children, className = '' }) {
  return <article className={`rounded-xl bg-brand-surface p-4 shadow-sm ${className}`}>{children}</article>
}
