import { motion } from 'framer-motion';
import { recruiterScorecard } from '../data/portfolio.js';
import { fadeUp, revealTransition, sectionViewport } from '../utils/motion.js';
import GlassCard from './GlassCard.jsx';
import SectionTitle from './SectionTitle.jsx';

function RecruiterScorecard() {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Recruiter scorecard" title="Signals that map directly to AI internship work">
        A quick evidence view of where my projects and skills are strongest.
      </SectionTitle>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recruiterScorecard.map((item, index) => (
          <GlassCard
            key={item.label}
            as={motion.article}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            transition={{ ...revealTransition, delay: index * 0.03 }}
            className="rounded-2xl p-5"
          >
            <div className="relative">
              <p className="text-lg font-semibold text-white">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.evidence}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default RecruiterScorecard;
