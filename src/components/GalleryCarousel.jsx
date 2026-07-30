import { useEffect, useRef, useState } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { galleryImages } from "../data/gallery"
import { useCarousel } from "../hooks/useCarousel"

export default function GalleryCarousel() {
  const { currentIndex, goNext, goPrev, goTo, isPaused, pause, resume } =
    useCarousel(galleryImages, { autoplayInterval: 5000 })
  const [isVisible, setIsVisible] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
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

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    const touch = e.touches[0]
    setTouchEnd(null)
    setTouchStart(touch.clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) goNext()
      else goPrev()
    }
  }

  return (
    <section
      ref={ref}
      className="py-24 bg-deep-black"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div className="text-center mb-12">
          <span className="text-gold text-sm uppercase tracking-[0.4em]">
            Galería
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-pure-white mt-4">
            Inspiración visual
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div
            className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {galleryImages.map((img, index) => (
              <div
                key={img.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                aria-hidden={index !== currentIndex}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-deep-black/30 to-transparent pointer-events-none" />
          </div>

          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-deep-black/60 border border-pure-white/10 text-pure-white hover:bg-gold hover:text-deep-black hover:border-gold transition-all duration-300 backdrop-blur-sm"
            aria-label="Imagen anterior"
          >
            <HiChevronLeft size={22} />
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-deep-black/60 border border-pure-white/10 text-pure-white hover:bg-gold hover:text-deep-black hover:border-gold transition-all duration-300 backdrop-blur-sm"
            aria-label="Siguiente imagen"
          >
            <HiChevronRight size={22} />
          </button>

          <div
            className="flex justify-center gap-2 mt-6"
            role="tablist"
            aria-label="Indicadores de imagen"
          >
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gold w-8"
                    : "bg-pure-white/20 hover:bg-pure-white/40"
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
