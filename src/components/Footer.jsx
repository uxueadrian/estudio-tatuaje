import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa"
import { contactInfo } from "../data/contact"
import { scrollToSection } from "../utils/scrollToSection"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-deep-black border-t border-pure-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-pure-white font-heading text-2xl tracking-wider hover:text-gold transition-colors duration-300"
            >
              BLACK IRON
            </button>
            <p className="text-off-white/50 text-sm mt-4 max-w-md leading-relaxed">
              Estudio de tatuajes profesional. Arte sobre piel con los más altos
              estándares de calidad, higiene y creatividad.
            </p>
          </div>

          <div>
            <h3 className="text-pure-white text-sm uppercase tracking-[0.2em] mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {["Inicio", "Estudio", "Especialidades", "Trabajos", "Contacto"].map(
                (label) => (
                  <li key={label}>
                    <button
                      onClick={() => {
                        const map = {
                          Inicio: "hero",
                          Estudio: "about",
                          Especialidades: "services",
                          Trabajos: "portfolio",
                          Contacto: "contact",
                        }
                        scrollToSection(map[label])
                      }}
                      className="text-off-white/50 text-sm hover:text-gold transition-colors duration-300"
                    >
                      {label}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-pure-white text-sm uppercase tracking-[0.2em] mb-4">
              Redes
            </h3>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-pure-white/10 text-off-white/60 hover:bg-gold hover:text-deep-black hover:border-gold transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={15} />
              </a>
              <a
                href={`https://instagram.com/${contactInfo.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-pure-white/10 text-off-white/60 hover:bg-gold hover:text-deep-black hover:border-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href={`https://facebook.com/${contactInfo.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-pure-white/10 text-off-white/60 hover:bg-gold hover:text-deep-black hover:border-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-pure-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-off-white/40 text-xs">
            &copy; {year} Black Iron Studio. Todos los derechos reservados.
          </p>
          <p className="text-off-white/30 text-xs">
            Diseñado con dedicación para el arte del tatuaje.
          </p>
        </div>
      </div>
    </footer>
  )
}
