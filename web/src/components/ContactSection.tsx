"use client";
import { useState, type FormEvent } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="py-20 px-4 bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="text-white">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
              Kontakt
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ozvěte se nám
            </h2>
            <p className="text-blue-100 leading-relaxed mb-10">
              Máte zájem o pronájem nebo se chcete na něco zeptat? Napište nám
              nebo zavolejte — rádi vám poradíme a domluvíme prohlídku.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">E-mail</div>
                  <a href="mailto:objednavky@jipa.cz" className="text-blue-200 hover:text-white transition-colors">
                    objednavky@jipa.cz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">JANKU CZ s.r.o.</div>
                  <div className="text-blue-200">IČ: 27275124</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Děkujeme za zprávu!
                </h3>
                <p className="text-text-muted">
                  Ozveme se vám co nejdříve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jméno
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Vaše jméno"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="vas@email.cz"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="+420"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    O jaký prostor máte zájem?
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-gray-600">
                    <option value="">Vyberte typ</option>
                    <option value="hala">Hala</option>
                    <option value="kancelar">Kancelář</option>
                    <option value="prodejna">Prodejna</option>
                    <option value="bydleni">Bydlení</option>
                    <option value="jine">Jiné / nevím</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Zpráva
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Napište nám..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Odeslat zprávu
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
