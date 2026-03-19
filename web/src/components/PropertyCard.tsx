interface Property {
  id: string;
  locationId: string;
  type: string;
  name: string;
  area: number;
  price: number;
  available: boolean;
  description: string;
  features: string[];
  image: string;
}

const typeLabels: Record<string, string> = {
  kancelar: "Kancelář",
  sklad: "Sklad",
  bydleni: "Bydlení",
};

const typeColors: Record<string, string> = {
  kancelar: "bg-blue-100 text-blue-700",
  sklad: "bg-amber-100 text-amber-700",
  bydleni: "bg-green-100 text-green-700",
};

const locationLabels: Record<string, string> = {
  chrastava: "Chrastava",
  liberec: "Liberec",
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group">
      {/* Image placeholder */}
      <div className="relative h-52 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[property.type] || "bg-gray-100 text-gray-700"}`}>
            {typeLabels[property.type] || property.type}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-700">
            {locationLabels[property.locationId]}
          </span>
        </div>

        {!property.available && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold text-sm">
              Pronajato
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {property.name}
        </h3>
        <p className="text-sm text-text-muted mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-text-muted">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {property.area} m²
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {locationLabels[property.locationId]}
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {property.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md"
            >
              {f}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="text-xs text-text-muted px-2.5 py-1">
              +{property.features.length - 3}
            </span>
          )}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-primary">
              {property.price.toLocaleString("cs-CZ")} Kč
            </span>
            <span className="text-sm text-text-muted"> / měsíc</span>
          </div>
          {property.available && (
            <a
              href="#kontakt"
              className="bg-primary hover:bg-primary-light text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Mám zájem
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
