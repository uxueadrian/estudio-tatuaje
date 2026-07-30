import { useEffect, useRef, useState } from "react"
import { HiStar } from "react-icons/hi"
import { testimonials } from "../data/testimonials"

function Rating({ value }) {
  return (
    <div className="flex gap-1" aria-label={`Calificación: ${value} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <HiStar
          key={i}
          size={14}
          className={i < value ? "text-gold" : "text-pure-white/10"}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
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
    <section
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-dark-gray to-deep-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.4em]">
            Testimonios
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-pure-white mt-4 mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <article
              key={item.id}
              className={`p-6 border border-pure-white/5 bg-dark-gray/30 transition-all duration-700 hover:border-gold/20 hover:bg-dark-gray/50 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h3 className="text-pure-white font-medium">{item.name}</h3>
                  <p className="text-off-white/40 text-xs uppercase tracking-[0.1em]">
                    {item.role}
                  </p>
                </div>
              </div>

              <Rating value={item.rating} />

              <p className="text-off-white/70 text-sm leading-relaxed mt-4 italic">
                &ldquo;{item.comment}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
