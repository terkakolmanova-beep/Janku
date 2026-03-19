interface Tenant {
  name: string;
  quote: string;
}

export default function TestimonialsSection({
  tenants,
}: {
  tenants: Tenant[];
}) {
  return (
    <section id="reference" className="py-20 px-4 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Reference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Co říkají naši nájemci
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tenants.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <svg className="w-8 h-8 text-accent/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {t.name.charAt(0)}
                </div>
                <span className="font-medium text-gray-900 text-sm">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
