import Reveal from './Reveal';
import { audience } from '@/config/product';

export default function ForWhom() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto max-w-content section-padding py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl">
              À QUI S&rsquo;ADRESSE L&rsquo;OUTIL COMPLET DU PASTEUR&nbsp;?
            </h2>
            <div className="mx-auto my-8 gold-rule" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-3">
            {audience.map((role) => (
              <span
                key={role}
                className="rounded-full border border-leather-700/25 bg-cream-100 px-5 py-2.5 text-sm font-medium text-forest-800 transition-colors hover:border-gold-500/60 hover:bg-gold-500/5"
              >
                {role}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-900/60">
            Le pack est principalement conçu pour les pasteurs, mais plusieurs
            ressources peuvent également être utiles à leurs collaborateurs
            dans les différents ministères de l&rsquo;église.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
