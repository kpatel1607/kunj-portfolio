import { motion } from 'framer-motion';
import { Blocks, BrainCircuit, Microscope, Radar } from 'lucide-react';
import { researchTopics } from '../data/portfolio.js';
import { asset } from '../utils/assets.js';
import { cardHover, fadeUp, revealTransition, sectionViewport } from '../utils/motion.js';
import GlassCard from './GlassCard.jsx';
import MotionGraphic from './MotionGraphic.jsx';
import SectionTitle from './SectionTitle.jsx';

const mindsetPoints = [
  {
    icon: Microscope,
    title: 'Understand the why',
    text: 'I like understanding why models work, where they fail, and how to make the output useful in a real product flow.',
  },
  {
    icon: BrainCircuit,
    title: 'Follow the frontier',
    text: 'I follow LLMs, computer vision, and personalized agents with a practical question in mind: what can this help a user do better?',
  },
  {
    icon: Blocks,
    title: 'Build the whole system',
    text: 'I prefer systems where models, APIs, deployment, and user experience work together instead of stopping at an isolated notebook.',
  },
];

function ResearchMindset() {
  return (
    <section className="section-shell" id="research">
      <SectionTitle eyebrow="Research explorer" title="A research board for applied intelligence">
        My approach is simple: study the model deeply, test it honestly, then shape it into a
        product people can actually use.
      </SectionTitle>

      <GlassCard className="research-motion-panel mb-6 rounded-3xl p-5 md:p-6">
        <div className="relative grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <MotionGraphic
            src={asset('/animations/neural-network.lottie')}
            className="research-motion-graphic"
            loop
            autoplay
          />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-100/70">
              Neural research layer
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              A subtle motion layer for LLM systems, AI agents, NLP, vision, and personalized AI
              research themes.
            </p>
          </div>
        </div>
      </GlassCard>

      <div className="research-board mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {researchTopics.map((topic, index) => (
          <GlassCard
            key={topic.title}
            as={motion.article}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            transition={{ ...revealTransition, delay: index * 0.025 }}
            whileHover={cardHover}
            tabIndex={0}
            className="research-card rounded-2xl p-5"
          >
            <div className="relative">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100">
                  <Radar size={22} />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Topic {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{topic.detail}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {mindsetPoints.map((point) => {
          const Icon = point.icon;

          return (
            <GlassCard key={point.title} className="rounded-2xl p-6 md:p-7">
              <div className="relative">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{point.text}</p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}

export default ResearchMindset;
