import { Box, Sparkles, Target, Users, Zap } from 'lucide-react';
import GlassCard from './GlassCard.jsx';

const opportunityTraits = [
  { label: 'Problem Solver', icon: Target },
  { label: 'Fast Learner', icon: Zap },
  { label: 'Builder at Heart', icon: Box },
  { label: 'Impact Focused', icon: Users },
];

function Title() {
  return (
    <section className="opportunity-dashboard-shell section-shell">
      <GlassCard className="opportunity-dashboard rounded-3xl p-5 md:p-7">
        <div className="opportunity-orb opportunity-orb-one" aria-hidden="true" />
        <div className="opportunity-orb opportunity-orb-two" aria-hidden="true" />

        <div className="relative grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="flex items-center gap-4 lg:block lg:text-center">
            <div className="opportunity-visual grid h-24 w-24 shrink-0 place-items-center rounded-full border border-violet-200/25 bg-violet-300/10 text-violet-100 md:h-28 md:w-28">
              <Sparkles size={34} />
            </div>
            <div className="lg:mt-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-200/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Available for Internships
              </span>
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-100/70">
              Open to Opportunities
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Seeking internship roles where AI research becomes useful products.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              I&apos;m actively seeking{' '}
              <span className="text-gradient font-bold">AI/ML, NLP, Computer Vision</span>,{' '}
              <span className="text-gradient font-bold">Generative AI</span>, Applied AI, and{' '}
              <span className="text-gradient font-bold">Data Analytics</span> internship
              opportunities where I can learn, contribute, and build real-world AI products.
            </p>
          </div>

          <div className="opportunity-traits grid gap-3 border-white/10 lg:min-w-56 lg:border-l lg:pl-7">
            {opportunityTraits.map((trait) => {
              const Icon = trait.icon;

              return (
                <div key={trait.label} className="flex items-center gap-3 text-slate-200">
                  <Icon className="shrink-0 text-cyan-100" size={18} />
                  <span className="text-sm font-medium md:text-base">{trait.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </GlassCard>
    </section>
  );
}

export default Title;
