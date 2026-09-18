import Reveal from './Reveal';

export default function Problem() {
  return (
    <section className="bg-cream-50 paper-texture">
      <div className="mx-auto max-w-content section-padding py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker mb-5">Le constat</p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl">
              ÊTRE PASTEUR, C&rsquo;EST BIEN PLUS QUE PRÊCHER.
            </h2>
            <div className="mx-auto my-8 gold-rule" />
            <p className="text-lg leading-relaxed text-ink-900/80">
              Le pasteur doit enseigner, évangéliser, accompagner les nouveaux
              convertis, former les ouvriers, organiser l&rsquo;église, encadrer
              les différents ministères et faire face à de nombreuses
              responsabilités.
            </p>
            <p className="mt-6 font-serif text-xl italic leading-relaxed text-leather-700">
              Mais dispose-t-il toujours des ressources nécessaires pour chacune
              de ces missions&nbsp;?
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
