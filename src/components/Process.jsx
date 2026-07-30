import { useEffect, useRef, useState } from "react"
import { processSteps } from "../data/process"

export default function Process() {
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
    <section id="process" ref={ref} className="py-24 md:py-32 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.4em]">
            Proceso
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-pure-white mt-4 mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-off-white/60 max-w-2xl mx-auto">
            Un proceso claro y transparente desde tu primera visita hasta el
            resultado final.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-gold/30 via-gold/20 to-transparent" />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  order: index % 2 === 0 ? index + 1 : index,
                }}
              >
                <div className="flex gap-6 p-6 border border-pure-white/5 bg-dark-gray/50 group hover:border-gold/30 transition-all duration-500">
                  <div className="flex-shrink-0">
                    <span className="block text-4xl font-heading text-gold/30 group-hover:text-gold/60 transition-colors duration-500">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-pure-white mb-2 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-off-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="hidden lg:flex absolute top-6 right-6 w-8 h-8 border border-gold/10 group-hover:border-gold/40 transition-all duration-500" />
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex justify-center absolute -bottom-8 left-0 right-0">
                    <div className="w-6 h-6 border-r-2 border-b-2 border-gold/20 rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
