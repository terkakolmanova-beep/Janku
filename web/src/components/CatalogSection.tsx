"use client";
import { useState } from "react";
import FilterBar from "./FilterBar";
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  locationId: string;
  type: string;
  name: string;
  area: number;
  price: number;
  priceNote?: string;
  available: boolean;
  description: string;
  features: string[];
  images: string[];
}

export default function CatalogSection({
  properties,
}: {
  properties: Property[];
}) {
  const [type, setType] = useState("all");
  const [location, setLocation] = useState("all");

  const filtered = properties.filter((p) => {
    if (type !== "all" && p.type !== type) return false;
    if (location !== "all" && p.locationId !== location) return false;
    return true;
  });

  const withPrice = filtered.filter((p) => p.price > 0);
  const onRequest = filtered.filter((p) => p.price === 0);

  return (
    <section id="nabidka" className="pt-4 pb-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <FilterBar
            activeType={type}
            activeLocation={location}
            onTypeChange={setType}
            onLocationChange={setLocation}
          />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-text-muted">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-lg font-medium">
              Pro zvolené filtry nemáme žádné prostory.
            </p>
            <p className="text-sm mt-1">Zkuste změnit parametry hledání.</p>
          </div>
        ) : (
          <>
            {withPrice.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {withPrice.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            )}
            {onRequest.length > 0 && (
              <>
                {withPrice.length > 0 && (
                  <h3 className="text-lg font-semibold text-gray-400 mb-4 mt-8">
                    Cena na dotaz
                  </h3>
                )}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {onRequest.map((p) => (
                    <PropertyCard key={p.id} property={p} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
