import Reveal from './Reveal';
import { journeySteps } from '@/config/product';

export default function Journey() {
  return (
    <section className="bg-forest-950">
      <div className="mx-auto max-w-content section-padding py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="kicker-light mb-5">Le parcours</p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-cream-50 sm:text-4xl">
              UN SEUL OUTIL. DE NOMBREUSES RESSOURCES.
            </h2>
            <div className="mx-auto my-8 gold-rule" />
            <p className="text-base leading-relaxed text-cream-200/75">
              Que vous soyez au début de votre ministère, en pleine
              implantation ou déjà à la tête d&rsquo;une assemblée, l&rsquo;Outil
              complet du pasteur vous permet de retrouver au même endroit des
              ressources correspondant à de nombreuses responsabilités
              pastorales.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-y-6">
            {journeySteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <span className="rounded-sm border border-gold-500/30 bg-forest-900/60 px-4 py-2.5 text-xs font-semibold tracking-[0.15em] text-gold-400 sm:text-sm">
                  {step}
                </span>
                {i < journeySteps.length - 1 && (
                  <span className="mx-2 h-px w-6 bg-gold-500/30 sm:w-8" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
