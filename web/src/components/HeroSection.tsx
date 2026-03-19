export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-90" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-accent font-medium text-sm tracking-widest uppercase mb-6">
          Rodinné pronájmy v Libereckém kraji
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Pomáháme firmám růst díky{" "}
          <span className="text-accent">flexibilním prostorům</span>
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Sklady, kanceláře a bydlení s osobním přístupem. Dva areály, jedna
          rodina, desítky spokojených nájemců.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#nabidka"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Prohlédnout prostory
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Kontaktujte nás
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80h1440V30c-240 30-480 50-720 50S240 60 0 30v50z"
            fill="var(--color-bg)"
          />
        </svg>
      </div>
    </section>
  );
}
