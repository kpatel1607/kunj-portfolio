import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { journeyPhases, timeline } from '../data/portfolio.js';
import { cardHover, fadeUp, revealTransition, sectionViewport } from '../utils/motion.js';
import GlassCard from './GlassCard.jsx';
import SectionTitle from './SectionTitle.jsx';

function Timeline() {
  return (
    <section id="timeline" className="section-shell">
      <SectionTitle eyebrow="Journey" title="From fundamentals to applied AI systems">
        A concise timeline of Kunj's path through analytics, machine learning, NLP, document
        intelligence, and computer vision.
      </SectionTitle>

      <GlassCard className="journey-os mb-8 rounded-3xl p-5 md:p-7">
        <div className="relative">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-100/70">
                AI Journey Visualization
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Learning to Scaling, one system layer at a time
              </h3>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100 shadow-glow">
              <Rocket size={24} />
            </div>
          </div>

          <div className="journey-phases grid gap-4 lg:grid-cols-4">
            {journeyPhases.map((phase, index) => (
              <motion.article
                key={phase.phase}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                variants={fadeUp}
                transition={{ ...revealTransition, delay: index * 0.035 }}
                className="journey-phase relative rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-bold text-cyan-100">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {index < journeyPhases.length - 1 ? (
                    <ArrowRight className="hidden text-cyan-100/50 lg:block" size={18} />
                  ) : null}
                </div>
                <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-300">{phase.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {phase.steps.map((step) => (
                    <span
                      key={step}
                      className="rounded-full border border-white/10 bg-slate-950/35 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-300"
                    >
                      Step {step}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </GlassCard>

      <div className="timeline-track relative space-y-5 md:space-y-0">
        {timeline.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={fadeUp}
              transition={{ ...revealTransition, delay: index * 0.025 }}
              className={`timeline-item relative md:grid md:grid-cols-[1fr_5rem_1fr] md:items-center md:gap-4 ${
                isEven ? '' : 'md:[&_.timeline-card]:col-start-3'
              }`}
            >
              <GlassCard
                as={motion.article}
                whileHover={cardHover}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="timeline-card rounded-2xl p-6 md:p-7"
              >
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-200">
                    Step {item.step}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
                </div>
              </GlassCard>

              <div className="timeline-marker hidden md:grid">
                <span>{item.step}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Timeline;
