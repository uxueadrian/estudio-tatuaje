import { useEffect, useRef, useState } from "react"

export default function About() {
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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=85"
              alt="Estudio de tatuajes Black Iron"
              className="w-full h-[500px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 hidden md:block" />
          </div>

          <div className="lg:pl-8">
            <span className="text-gold text-sm uppercase tracking-[0.4em]">
              Nuestra historia
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-pure-white mt-4 mb-6 leading-tight">
              Más que tinta
              <br />
              <span className="text-gold">sobre la piel</span>
            </h2>
            <p className="text-off-white/70 leading-relaxed mb-8">
              Black Iron Studio nació en 2018 como un espacio donde el arte del
              tatuaje se eleva a su máxima expresión. Fundado por artistas
              apasionados, nuestro estudio combina técnicas tradicionales con
              innovación constante.
            </p>
            <p className="text-off-white/70 leading-relaxed mb-10">
              Cada diseño es una pieza única, creada en colaboración con
              nuestros clientes. Creemos que un tatuaje no es solo tinta, es una
              historia grabada para siempre.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-gold pl-4">
                <span className="text-gold font-heading text-2xl">8+</span>
                <p className="text-off-white/60 text-sm mt-1">
                  Años de experiencia
                </p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <span className="text-gold font-heading text-2xl">100%</span>
                <p className="text-off-white/60 text-sm mt-1">
                  Higiene y seguridad
                </p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <span className="text-gold font-heading text-2xl">500+</span>
                <p className="text-off-white/60 text-sm mt-1">
                  Diseños únicos
                </p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <span className="text-gold font-heading text-2xl">4.9★</span>
                <p className="text-off-white/60 text-sm mt-1">
                  Calificación
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
