import { lookingFor } from '../data/portfolio.js';
import GlassCard from './GlassCard.jsx';
import SectionTitle from './SectionTitle.jsx';

function CurrentlyLookingFor() {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Currently looking for" title="Internship roles where I can contribute and learn">
        I am interested in teams building applied AI, data products, model-backed APIs, and user
        facing ML systems.
      </SectionTitle>

      <GlassCard className="rounded-3xl p-6 md:p-8">
        <div className="relative flex flex-wrap gap-3">
          {lookingFor.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-200/20 bg-cyan-200/8 px-4 py-2.5 text-sm font-semibold text-cyan-50 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-200/12"
            >
              {item}
            </span>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}

export default CurrentlyLookingFor;
