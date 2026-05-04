"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

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

const typeLabels: Record<string, string> = {
  kancelar: "Kancelář",
  hala: "Hala",
  prodejna: "Prodejna",
  bydleni: "Bydlení",
};

const typeColors: Record<string, string> = {
  kancelar: "bg-blue-100 text-blue-700",
  hala: "bg-amber-100 text-amber-700",
  prodejna: "bg-purple-100 text-purple-700",
  bydleni: "bg-green-100 text-green-700",
};

const locationLabels: Record<string, string> = {
  chrastava: "Chrastava",
  liberec: "Liberec",
};

export default function PropertyCard({ property }: { property: Property }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  const images = property.images ?? [];
  const hasImages = images.length > 0;

  useEffect(() => { setMounted(true); }, []);

  function prev(e?: React.MouseEvent) {
    e?.preventDefault();
    e?.stopPropagation();
    setImgIdx((i) => (i - 1 + images.length) % images.length);
  }
  function next(e?: React.MouseEvent) {
    e?.preventDefault();
    e?.stopPropagation();
    setImgIdx((i) => (i + 1) % images.length);
  }

  // Klávesnice a zamknutí scrollu při otevřeném lightboxu
  useEffect(() => {
    if (!lightboxOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft")  setImgIdx((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setImgIdx((i) => (i + 1) % images.length);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, images.length]);

  // ── Lightbox portal ──────────────────────────────────────────────────────
  const lightbox =
    mounted && lightboxOpen
      ? createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Horní lišta */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 pointer-events-none">
              <span className="text-white font-semibold text-sm">{property.name}</span>
              <span className="text-white/50 text-sm">{imgIdx + 1} / {images.length}</span>
            </div>

            {/* Zavřít */}
            <button
              className="absolute top-3 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
              aria-label="Zavřít"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Hlavní fotka */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[imgIdx]}
              alt={`${property.name} – foto ${imgIdx + 1}`}
              className="max-h-[78vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Šipky */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  aria-label="Předchozí foto"
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl leading-none transition-colors"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  aria-label="Další foto"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl leading-none transition-colors"
                >
                  ›
                </button>
              </>
            )}

            {/* Miniatury */}
            {images.length > 1 && (
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-2 py-1"
                onClick={(e) => e.stopPropagation()}
              >
                {images.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-all ${
                      i === imgIdx
                        ? "border-white opacity-100 scale-105"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>,
          document.body
        )
      : null;

  // ── Karta ────────────────────────────────────────────────────────────────
  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group">
        {/* Image area */}
        <div className="relative h-52 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
          {hasImages ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[imgIdx]}
                alt={`${property.name} – foto ${imgIdx + 1}`}
                className="w-full h-full object-cover cursor-zoom-in"
                onClick={() => setLightboxOpen(true)}
              />

              {/* Ikona "rozbalit" */}
              <button
                onClick={() => setLightboxOpen(true)}
                aria-label="Zobrazit na celou obrazovku"
                className="absolute top-2 right-2 bg-black/40 hover:bg-black/60 text-white rounded-md w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Předchozí foto"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg leading-none opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    aria-label="Další foto"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg leading-none opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ›
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.preventDefault(); setImgIdx(i); }}
                        aria-label={`Foto ${i + 1}`}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIdx ? "bg-white" : "bg-white/50"}`}
                      />
                    ))}
                  </div>
                  <span className="absolute bottom-2 right-3 text-white/80 text-xs">
                    {imgIdx + 1} / {images.length}
                  </span>
                </>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[property.type] ?? "bg-gray-100 text-gray-700"}`}>
              {typeLabels[property.type] ?? property.type}
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
          <p
            className={`text-sm text-text-muted mb-1 ${descExpanded ? "" : "line-clamp-2"}`}
          >
            {property.description}
          </p>
          <button
            onClick={() => setDescExpanded((v) => !v)}
            className="text-xs text-primary/70 hover:text-primary mb-3 transition-colors"
          >
            {descExpanded ? "Zobrazit méně ↑" : "Zobrazit více ↓"}
          </button>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4 text-sm text-text-muted">
            {property.area > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                {property.area} m²
              </span>
            )}
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {locationLabels[property.locationId]}
            </span>
          </div>

          {/* Features */}
          {property.features.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {property.features.map((f) => (
                <span key={f} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md">
                  {f}
                </span>
              ))}
            </div>
          )}

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              {property.price > 0 ? (
                <>
                  <span className="text-2xl font-bold text-primary">
                    {property.price.toLocaleString("cs-CZ")} Kč
                  </span>
                  <span className="text-sm text-text-muted"> / měsíc</span>
                  {property.priceNote && (
                    <p className="text-xs text-text-muted mt-1 leading-snug max-w-[200px]">
                      {property.priceNote}
                    </p>
                  )}
                </>
              ) : (
                <span className="text-xl font-bold text-primary">Cena na dotaz</span>
              )}
            </div>
            {property.available && (
              <a
                href="#kontakt"
                className="bg-primary hover:bg-primary-light text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shrink-0"
              >
                Mám zájem
              </a>
            )}
          </div>
        </div>
      </div>

      {lightbox}
    </>
  );
}
