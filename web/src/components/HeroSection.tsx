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
        <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
          Sklady, kanceláře a bydlení s osobním přístupem. Dva areály, jedna
          rodina, desítky spokojených nájemců.
        </p>
      </div>
    </section>
  );
}
