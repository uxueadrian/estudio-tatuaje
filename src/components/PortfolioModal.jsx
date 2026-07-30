import { useEffect, useCallback } from "react"
import { HiX } from "react-icons/hi"

export default function PortfolioModal({ item, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const panel = document.getElementById("modal-panel")
      if (panel) panel.classList.add("scale-100", "opacity-100")
    }, 10)
    return () => clearTimeout(timeout)
  }, [])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles de: ${item.name}`}
    >
      <div
        id="modal-panel"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-dark-gray border border-pure-white/10 transition-all duration-500 scale-95 opacity-0"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-deep-black/80 text-pure-white hover:bg-gold hover:text-deep-black transition-all duration-300"
          aria-label="Cerrar modal"
        >
          <HiX size={20} />
        </button>

        <div className="relative h-80 md:h-96">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-transparent to-transparent" />
        </div>

        <div className="p-6 md:p-8">
          <span className="text-gold text-xs uppercase tracking-[0.3em]">
            {item.category}
          </span>
          <h2 className="font-heading text-2xl md:text-3xl text-pure-white mt-2 mb-4">
            {item.name}
          </h2>
          <p className="text-off-white/70 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  )
}
