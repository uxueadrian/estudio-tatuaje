import { useEffect, useState } from "react"
import { scrollToSection } from "../utils/scrollToSection"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=1920&q=85"
          alt="Estudio de tatuajes profesional"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black/90 via-deep-black/70 to-deep-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/30" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-gold text-sm uppercase tracking-[0.4em] mb-6">
            Desde 2018
          </span>
        </div>

        <h1
          className={`font-heading text-5xl md:text-7xl lg:text-8xl text-pure-white leading-tight mb-6 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Black Iron
          <br />
          <span className="text-gold">Studio</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-off-white/80 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Donde el arte se encuentra con la piel. Especialistas en tatuajes
          blackwork, realismo y fine line con los más altos estándares de
          calidad e higiene.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-900 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3.5 bg-gold text-deep-black font-medium uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
          >
            Reservar cita
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="px-8 py-3.5 border border-pure-white/30 text-pure-white uppercase tracking-[0.2em] text-sm hover:bg-pure-white hover:text-deep-black transition-all duration-300"
          >
            Ver trabajos
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-off-white/50 hover:text-gold transition-colors duration-300 group"
          aria-label="Scroll hacia abajo"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-off-white/50 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  )
}
