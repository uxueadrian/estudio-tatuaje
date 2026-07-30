import { useEffect, useRef, useState } from "react"
import { portfolioItems } from "../data/portfolio"
import { useModal } from "../hooks/useModal"
import PortfolioCard from "./PortfolioCard"
import PortfolioModal from "./PortfolioModal"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const { isOpen, open, close } = useModal()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleCardClick = (item) => {
    setSelectedItem(item)
    open()
  }

  const handleClose = () => {
    close()
    setTimeout(() => setSelectedItem(null), 300)
  }

  return (
    <section id="portfolio" ref={ref} className="py-24 md:py-32 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.4em]">
            Portafolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-pure-white mt-4 mb-4">
            Trabajos recientes
          </h2>
          <p className="text-off-white/60 max-w-2xl mx-auto">
            Cada pieza es única. Explora nuestra galería de trabajos realizados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <PortfolioCard
                item={item}
                onClick={() => handleCardClick(item)}
              />
            </div>
          ))}
        </div>
      </div>

      {isOpen && selectedItem && (
        <PortfolioModal item={selectedItem} onClose={handleClose} />
      )}
    </section>
  )
}
