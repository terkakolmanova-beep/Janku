"use client";
import { useState, type FormEvent } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name:     (form.elements.namedItem("name")     as HTMLInputElement).value,
      email:    (form.elements.namedItem("email")    as HTMLInputElement).value,
      phone:    (form.elements.namedItem("phone")    as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
      message:  (form.elements.namedItem("message")  as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Odeslání se nezdařilo. Zkuste to prosím znovu nebo nás kontaktujte přímo na objednavky@jipa.cz.");
      }
    } catch {
      setError("Odeslání se nezdařilo. Zkuste to prosím znovu nebo nás kontaktujte přímo na objednavky@jipa.cz.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="kontakt" className="py-20 px-4 bg-primary border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 text-white">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Kontakt
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ozvěte se nám
          </h2>
          <p className="text-blue-100 leading-relaxed">
            Máte zájem o pronájem nebo se chcete na něco zeptat? Napište nám
            — rádi vám poradíme a domluvíme prohlídku.
          </p>
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
                    name="name"
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
                    name="email"
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
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="+420"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    O jaký prostor máte zájem?
                  </label>
                  <select
                    name="interest"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-gray-600"
                  >
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
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Napište nám..."
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Odesílám…" : "Odeslat zprávu"}
                </button>
              </form>
            )}
          </div>
      </div>
    </section>
  );
}
