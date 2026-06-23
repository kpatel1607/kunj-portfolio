import { CheckCircle2 } from 'lucide-react';
import { hireReasons } from '../data/portfolio.js';
import GlassCard from './GlassCard.jsx';
import SectionTitle from './SectionTitle.jsx';

function WhyHireMe() {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Why hire me" title="I am strongest where AI meets execution">
        I am still learning and improving, but I care about building real systems and understanding
        the pieces behind them.
      </SectionTitle>

      <GlassCard className="rounded-3xl p-6 md:p-8">
        <div className="relative grid gap-4 md:grid-cols-2">
          {hireReasons.map((reason) => (
            <div key={reason} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <CheckCircle2 className="mt-1 shrink-0 text-emerald-200" size={18} />
              <p className="text-sm leading-7 text-slate-300">{reason}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}

export default WhyHireMe;
