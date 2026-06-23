import { motion } from 'framer-motion';
import { BrainCircuit, Code2, GraduationCap, Rocket, ScanEye } from 'lucide-react';
import { fadeUp, revealTransition, sectionViewport } from '../utils/motion.js';
import GlassCard from './GlassCard.jsx';

const profileCards = [
  {
    title: 'AI/ML Developer',
    text: 'Building intelligent systems',
    icon: BrainCircuit,
    accent: 'violet',
  },
  {
    title: 'CS Engineering Student',
    text: 'Learning by building real projects',
    icon: GraduationCap,
    accent: 'blue',
  },
  {
    title: 'NLP + Computer Vision',
    text: 'Working with language and vision AI',
    icon: ScanEye,
    accent: 'cyan',
  },
  {
    title: 'FastAPI Backends',
    text: 'APIs, deployment, and integrations',
    icon: Code2,
    accent: 'mint',
  },
  {
    title: 'Open to AI/ML Internships',
    text: 'Ready to contribute and learn',
    icon: Rocket,
    accent: 'pink',
  },
];

function ProfileSnapshot() {
  return (
    <section className="profile-dashboard-shell section-shell pt-0">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-200/10 px-4 py-2 text-xs font-semibold text-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.75)]" />
            Available for Internships
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            AI profile snapshot for real-world product teams
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            A compact view of the skills, direction, and builder mindset behind Kunj Patel's AI/ML
            portfolio.
          </p>
        </div>

        <div className="profile-card-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {profileCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <GlassCard
                key={card.title}
                as={motion.article}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={fadeUp}
              transition={{ ...revealTransition, delay: index * 0.025 }}
                className={`profile-signal-card profile-signal-${card.accent} rounded-3xl p-5 text-center`}
            >
                <div className="relative">
                  <div className="profile-signal-icon mx-auto grid h-16 w-16 place-items-center rounded-full border text-cyan-100">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-5 text-base font-bold leading-snug text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{card.text}</p>
                  <span className="profile-signal-line mx-auto mt-5 block h-0.5 w-16 rounded-full" />
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProfileSnapshot;
