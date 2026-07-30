export default function PortfolioCard({ item, onClick }) {
  return (
    <article
      onClick={onClick}
      className="group relative overflow-hidden cursor-pointer bg-dark-gray border border-pure-white/5"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-deep-black/0 group-hover:bg-deep-black/60 transition-all duration-500" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <span className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
            {item.category}
          </span>
          <h3 className="text-pure-white font-heading text-xl text-center">
            {item.name}
          </h3>
          <span className="mt-4 text-pure-white/60 text-xs uppercase tracking-[0.2em] border border-gold/50 px-4 py-1.5">
            Ver más
          </span>
        </div>
      </div>

      <div className="p-4">
        <span className="text-gold text-xs uppercase tracking-[0.2em]">
          {item.category}
        </span>
        <h3 className="text-pure-white font-heading text-lg mt-1">
          {item.name}
        </h3>
      </div>
    </article>
  )
}
