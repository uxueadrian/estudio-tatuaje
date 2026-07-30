import { useEffect, useRef, useState } from "react"
import { HiChevronDown } from "react-icons/hi"
import { faqItems } from "../data/faq"

function AccordionItem({ item, isOpen, onClick }) {
  const contentRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight)
    }
  }, [isOpen])

  return (
    <div className="border-b border-pure-white/5">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-pure-white group-hover:text-gold transition-colors duration-300 pr-4">
          {item.question}
        </span>
        <HiChevronDown
          size={18}
          className={`text-gold flex-shrink-0 transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? `${maxHeight}px` : "0",
        }}
      >
        <p ref={contentRef} className="text-off-white/60 text-sm pb-5 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openId, setOpenId] = useState(null)
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

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" ref={ref} className="py-24 md:py-32 bg-deep-black">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.4em]">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-pure-white mt-4 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-off-white/60">
            Todo lo que necesitas saber antes de tu primera visita.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onClick={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
