export default function HeroSection() {
  return (
    <section className="relative py-20 sm:py-28 flex items-center justify-center bg-bg overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #27187e 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <p className="text-accent font-semibold text-xl sm:text-2xl tracking-wide mb-6">
          Rodinné pronájmy v Libereckém kraji
        </p>
        <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
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
            className="inline-flex items-center justify-center border-2 border-primary/30 hover:border-primary text-primary font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Kontaktujte nás
          </a>
        </div>
      </div>
    </section>
  );
}
