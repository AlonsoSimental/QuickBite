import Container from './Container'

export default function Section({ title, children, className = '' }) {
  return (
    <section className={`py-10 md:py-14 ${className}`}>
      <Container>
        {title ? <h2 className="mb-6 text-2xl font-bold md:text-3xl">{title}</h2> : null}
        {children}
      </Container>
    </section>
  )
}
