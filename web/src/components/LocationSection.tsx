interface Location {
  id: string;
  name: string;
  description: string;
  address: string;
  mapUrl: string;
  mapEmbed: string;
  benefits: string[];
  image: string;
}

export default function LocationSection({
  locations,
}: {
  locations: Location[];
}) {
  return (
    <section id="arealy" className="py-20 px-4 bg-[#eef0ff]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Naše lokality
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Dva areály, jedna rodina
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Nabízíme prostory ve dvou strategických lokalitách Libereckého kraje
            — v Chrastavě a přímo v centru Liberce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="rounded-2xl overflow-hidden border border-gray-100 bg-bg hover:shadow-lg transition-shadow"
            >
              {/* Map embed */}
              <div className="h-56 relative overflow-hidden">
                <iframe
                  src={loc.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa – ${loc.name}`}
                  className="absolute inset-0 w-full h-full"
                />
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-white text-primary text-sm font-medium px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow z-10"
                >
                  Otevřít mapu ↗
                </a>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {loc.name}
                </h3>
                <p className="text-sm text-text-muted mb-1">{loc.address}</p>
                <p className="text-text-muted mb-5">{loc.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {loc.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
