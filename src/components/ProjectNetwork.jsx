import { useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Network } from 'lucide-react';
import { projects, siteConfig } from '../data/portfolio.js';
import { cardHover } from '../utils/motion.js';
import GlassCard from './GlassCard.jsx';
import SectionTitle from './SectionTitle.jsx';

function shortTitle(title) {
  return title.split(' - ')[0];
}

function ProjectNetwork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section id="project-network" className="section-shell">
      <SectionTitle eyebrow="AI project network" title="A connected map of Kunj's AI systems">
        Each project connects to the same operating system: model thinking, backend APIs, product
        integration, and useful feedback loops.
      </SectionTitle>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
        <GlassCard className="project-network-card rounded-3xl p-5 md:p-7">
          <div className="relative grid min-h-[25rem] place-items-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950/30 p-4">
            <div className="network-rings" aria-hidden="true" />
            <div className="network-line network-line-one" aria-hidden="true" />
            <div className="network-line network-line-two" aria-hidden="true" />
            <div className="network-line network-line-three" aria-hidden="true" />

            <div className="network-node network-node-center">
              <BrainCircuit size={22} />
              <span>{siteConfig.name}</span>
            </div>

            {projects.map((project, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={project.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  whileHover={cardHover}
                  whileTap={{ scale: 0.98 }}
                  aria-pressed={isActive}
                  className={`network-node network-node-project network-node-${index + 1} ${
                    isActive ? 'network-node-active' : ''
                  }`}
                >
                  <Cpu size={18} />
                  <span>{shortTitle(project.title)}</span>
                </motion.button>
              );
            })}
          </div>
        </GlassCard>

        <GlassCard className="rounded-3xl p-6 md:p-7">
          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100/80">
              <Network size={15} />
              Active Node
            </div>
            <h3 className="text-2xl font-bold leading-tight text-white">{activeProject.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{activeProject.description}</p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-cyan-100/70">
                  What it solves
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{activeProject.problem}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-violet-100/70">
                  System contribution
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{activeProject.built}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {activeProject.highlights.slice(0, 5).map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-cyan-200/18 bg-cyan-200/8 px-3 py-1.5 text-xs font-semibold text-cyan-50"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default ProjectNetwork;
