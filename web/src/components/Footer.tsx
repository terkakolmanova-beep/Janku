export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="text-xl font-bold text-white mb-4">
              JANKU<span className="text-accent">.cz</span>
            </div>
            <p className="text-sm leading-relaxed">
              Rodinný pronájem kancelářských, skladových a obytných prostorů
              v Libereckém kraji.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Lokality</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#arealy" className="hover:text-white transition-colors">
                  Areál Chrastava
                </a>
              </li>
              <li>
                <a href="#arealy" className="hover:text-white transition-colors">
                  Nájemní dům Liberec
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Nabídka</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#nabidka" className="hover:text-white transition-colors">
                  Haly
                </a>
              </li>
              <li>
                <a href="#nabidka" className="hover:text-white transition-colors">
                  Kanceláře
                </a>
              </li>
              <li>
                <a href="#nabidka" className="hover:text-white transition-colors">
                  Prodejny
                </a>
              </li>
              <li>
                <a href="#nabidka" className="hover:text-white transition-colors">
                  Bydlení
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white font-medium">JANKU CZ s.r.o.</li>
              <li>
                <a href="mailto:objednavky@jipa.cz" className="hover:text-white transition-colors">
                  objednavky@jipa.cz
                </a>
              </li>
              <li>IČ: 27275124</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          &copy; {new Date().getFullYear()} JANKU CZ. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
}
