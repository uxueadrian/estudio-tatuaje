import { useEffect, useRef, useState } from "react"
import { services } from "../data/services"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.4em]">
            Especialidades
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-pure-white mt-4 mb-4">
            Nuestras disciplinas
          </h2>
          <p className="text-off-white/60 max-w-2xl mx-auto">
            Dominamos diversas técnicas para ofrecerte exactamente lo que
            buscas, desde lo clásico hasta lo más vanguardista.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group relative bg-dark-gray border border-pure-white/5 overflow-hidden transition-all duration-700"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0)"
                  : "translateY(30px)",
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl text-pure-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-off-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
