import Reveal from './Reveal';

const pillars = [
  'APPRENDRE',
  'ORGANISER',
  'FORMER',
  'ENSEIGNER',
  'DIRIGER',
  'DÉVELOPPER',
];

export default function Solution() {
  return (
    <section className="bg-forest-900">
      <div className="mx-auto max-w-content section-padding py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker-light mb-5">La réponse</p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-cream-50 sm:text-4xl">
              VOICI L&rsquo;OUTIL COMPLET DU PASTEUR
            </h2>
            <div className="mx-auto my-8 gold-rule" />
            <p className="text-lg leading-relaxed text-cream-200/80">
              Nous avons réuni dans une seule collection des formations
              pratiques et des ressources documentaires permettant au pasteur
              de disposer d&rsquo;outils utiles pour les différentes étapes et
              responsabilités de son ministère.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {pillars.map((word, i) => (
              <div key={word} className="text-center">
                <p className="font-serif text-2xl font-semibold tracking-wide text-gold-400 sm:text-3xl">
                  {word}
                </p>
                {i < pillars.length && (
                  <span className="mx-auto mt-3 block h-px w-10 bg-gold-500/40" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
