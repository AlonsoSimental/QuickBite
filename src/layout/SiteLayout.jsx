import Navbar from './Navbar'
import Footer from './Footer'

export default function SiteLayout({ navItems, children }) {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-black focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Navbar navItems={navItems} />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
