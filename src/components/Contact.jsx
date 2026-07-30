import { useEffect, useRef, useState } from "react"
import { HiMail, HiLocationMarker, HiClock } from "react-icons/hi"
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa"
import { contactInfo } from "../data/contact"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.4em]">
            Contacto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-pure-white mt-4">
            Hagamos realidad tu idea
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-[0.2em] text-off-white/60 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-deep-black border border-pure-white/10 px-4 py-3 text-pure-white placeholder-off-white/30 focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-[0.2em] text-off-white/60 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-deep-black border border-pure-white/10 px-4 py-3 text-pure-white placeholder-off-white/30 focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-[0.2em] text-off-white/60 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-deep-black border border-pure-white/10 px-4 py-3 text-pure-white placeholder-off-white/30 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                  placeholder="Cuéntanos sobre tu idea..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-deep-black font-medium uppercase tracking-[0.2em] text-sm py-3.5 hover:bg-gold-light transition-all duration-300"
              >
                {isSubmitted ? "¡Mensaje enviado!" : "Enviar mensaje"}
              </button>
            </form>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <HiLocationMarker size={20} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-pure-white font-medium mb-1">Ubicación</h3>
                  <p className="text-off-white/60 text-sm">{contactInfo.address}</p>
                  <p className="text-off-white/60 text-sm">{contactInfo.city}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HiMail size={20} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-pure-white font-medium mb-1">Correo</h3>
                  <p className="text-off-white/60 text-sm">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HiClock size={20} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-pure-white font-medium mb-1">Horario</h3>
                  {contactInfo.schedule.map((s) => (
                    <p key={s.day} className="text-off-white/60 text-sm">
                      {s.day}: <span className="text-pure-white/80">{s.hours}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-pure-white/10 text-pure-white hover:bg-gold hover:text-deep-black hover:border-gold transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href={`https://instagram.com/${contactInfo.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-pure-white/10 text-pure-white hover:bg-gold hover:text-deep-black hover:border-gold transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href={`https://facebook.com/${contactInfo.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-pure-white/10 text-pure-white hover:bg-gold hover:text-deep-black hover:border-gold transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
              </div>

              <div className="h-48 bg-deep-black border border-pure-white/5 flex items-center justify-center">
                <div className="text-center">
                  <HiLocationMarker size={24} className="text-gold mx-auto mb-2" />
                  <p className="text-off-white/40 text-sm">
                    Mapa interactivo aquí
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
