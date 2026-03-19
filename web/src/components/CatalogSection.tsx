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
  available: boolean;
  description: string;
  features: string[];
  image: string;
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

  const available = filtered.filter((p) => p.available);
  const rented = filtered.filter((p) => !p.available);

  return (
    <section id="nabidka" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Nabídka prostorů
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Najděte svůj ideální prostor
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Vybírejte z kanceláří, skladů a bytových jednotek ve dvou lokalitách.
          </p>
        </div>

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
            {available.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {available.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            )}
            {rented.length > 0 && (
              <>
                <h3 className="text-lg font-semibold text-gray-400 mb-4 mt-8">
                  Aktuálně pronajato
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-70">
                  {rented.map((p) => (
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
