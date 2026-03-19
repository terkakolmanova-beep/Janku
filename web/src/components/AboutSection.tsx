export default function AboutSection() {
  return (
    <section id="o-nas" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
              O nás
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Rodina Janků — stabilita a osobní přístup
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Jsme rodinná firma s dlouholetou tradicí v Libereckém kraji.
                Naše nemovitosti spravujeme s péčí a zodpovědností, protože
                víme, že kvalitní prostory jsou základem úspěšného podnikání
                i pohodlného bydlení.
              </p>
              <p>
                Ke každému nájemci přistupujeme individuálně. Nejsme anonymní
                korporace — jsme sousedé, kteří vám rádi pomohou a poradí.
                Budujeme komunitu lidí, kteří se v našich prostorech cítí jako
                doma.
              </p>
              <p>
                Naším cílem je dlouhodobá spolupráce založená na důvěře,
                férovosti a vzájemném respektu.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-10">
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-text-muted mt-1">
                  let zkušeností
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2</div>
                <div className="text-sm text-text-muted mt-1">
                  areály
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-text-muted mt-1">
                  spokojených nájemců
                </div>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-20 h-20 text-primary/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-primary/30 mt-2 text-sm font-medium">
                  Fotografie rodiny Janků
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
