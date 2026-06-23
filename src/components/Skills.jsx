import { motion } from 'framer-motion';
import { Boxes, BrainCircuit, FileSearch, ScanEye, ServerCog } from 'lucide-react';
import { aiCapabilities, skillGroups } from '../data/portfolio.js';
import { fadeUp, revealTransition, sectionViewport } from '../utils/motion.js';
import GlassCard from './GlassCard.jsx';
import SectionTitle from './SectionTitle.jsx';

const capabilityIcons = [FileSearch, BrainCircuit, ScanEye, ServerCog, Boxes];

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionTitle eyebrow="AI capabilities" title="What I Can Build">
        A recruiter-facing view of the systems Kunj can build, grounded in real project examples
        instead of a flat technology list.
      </SectionTitle>

      <div className="grid gap-5 lg:grid-cols-2">
        {aiCapabilities.map((capability, index) => {
          const Icon = capabilityIcons[index];

          return (
            <GlassCard
              key={capability.category}
              as={motion.article}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={fadeUp}
              transition={{ ...revealTransition, delay: index * 0.035 }}
              className="capability-card rounded-2xl p-6 md:p-7"
            >
              <div className="relative">
                <div className="mb-5 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100 shadow-glow">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.26em] text-cyan-100/70">
                      Build Capability
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {capability.category}
                    </h3>
                  </div>
                </div>

                <div className="grid gap-3">
                  {capability.examples.map((example) => (
                    <p
                      key={example}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-300"
                    >
                      {example}
                    </p>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {capability.evidence.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-cyan-200/18 bg-cyan-200/8 px-3.5 py-2 text-sm text-cyan-50 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-200/12 hover:shadow-[0_0_18px_rgba(103,232,249,0.12)]"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      <GlassCard className="mt-6 rounded-3xl p-5 md:p-6">
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-100/70">
            Toolkit powering these systems
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-white">{group.category}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{group.skills.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </section>
  );
}

export default Skills;
