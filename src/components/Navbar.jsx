import { useState, useEffect } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { navLinks } from "../data/navigation"
import { useScrollPosition } from "../hooks/useScrollPosition"
import { scrollToSection } from "../utils/scrollToSection"

export default function Navbar() {
  const { isScrolled } = useScrollPosition()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false)
    scrollToSection(href.replace("#", ""))
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-deep-black/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-pure-white font-heading text-2xl tracking-wider hover:text-gold transition-colors duration-300"
            aria-label="Ir al inicio"
          >
            BLACK IRON
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm uppercase tracking-[0.2em] text-off-white/70 hover:text-gold transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="ml-4 px-6 py-2.5 border border-gold text-gold text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-deep-black transition-all duration-300"
            >
              Reservar
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-pure-white hover:text-gold transition-colors duration-300"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-deep-black/98 backdrop-blur-xl transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } lg:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-2xl uppercase tracking-[0.3em] text-off-white/80 hover:text-gold transition-all duration-300"
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 80}ms` : "0ms",
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="mt-4 px-8 py-3 border border-gold text-gold text-lg uppercase tracking-[0.3em] hover:bg-gold hover:text-deep-black transition-all duration-300"
          >
            Reservar cita
          </button>
        </div>
      </div>
    </nav>
  )
}
