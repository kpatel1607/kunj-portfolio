import { motion } from 'framer-motion';
import { Boxes, BrainCircuit, ScanSearch } from 'lucide-react';
import { buildFocus } from '../data/portfolio.js';
import { fadeUp, revealTransition, sectionViewport } from '../utils/motion.js';
import GlassCard from './GlassCard.jsx';
import SectionTitle from './SectionTitle.jsx';

const icons = [ScanSearch, BrainCircuit, Boxes];

function WhatIBuild() {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="What I build" title="AI work that connects models to usable products">
        I like working on systems where the model is only one part of the product. The API,
        workflow, and user experience matter too.
      </SectionTitle>

      <div className="grid gap-5 md:grid-cols-3">
        {buildFocus.map((item, index) => {
          const Icon = icons[index];

          return (
            <GlassCard
              key={item.title}
              as={motion.article}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={fadeUp}
              transition={{ ...revealTransition, delay: index * 0.035 }}
              className="rounded-2xl p-6 md:p-7"
            >
              <div className="relative">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100 shadow-glow">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}

export default WhatIBuild;
