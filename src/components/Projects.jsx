import { motion } from 'framer-motion';
import { CheckCircle2, Code2, Cpu, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import { asset } from '../utils/assets.js';
import { cardHover, fadeUp, revealTransition, sectionViewport } from '../utils/motion.js';
import GlassCard from './GlassCard.jsx';
import MotionGraphic from './MotionGraphic.jsx';
import SectionTitle from './SectionTitle.jsx';

const projectBriefFields = [
  ['Problem', 'problem'],
  ['My Role', 'role'],
  ['What I Built', 'built'],
  ['Technical Interest', 'technical'],
  ['Impact / Status', 'status'],
];

const projectMotionSources = {
  'Lumina AI - Intelligent Document Processing Platform': asset(
    '/animations/document-intelligence.lottie',
  ),
  'MoodLens - Emotion & Sarcasm Detection Platform': asset('/animations/transformer-nlp.lottie'),
  'AI Fitness Coach - Real-Time Pushup Analysis': asset('/animations/computer-vision.lottie'),
};

function Projects() {
  const renderProjectAction = (href, label, Icon, fallbackLabel) => {
    if (!href) {
      return (
        <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-4 py-2.5 text-sm font-semibold text-slate-400">
          <Icon size={16} />
          {fallbackLabel}
        </span>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-slate-950/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:bg-cyan-200/10"
        aria-label={`${label} for project`}
      >
        <Icon size={16} />
        {label}
      </a>
    );
  };

  return (
    <section id="projects" className="section-shell">
      <SectionTitle eyebrow="Featured projects" title="Applied AI systems with product depth">
        Three core projects that connect model development, backend APIs, authentication,
        deployment thinking, and real user workflows.
      </SectionTitle>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => {
          const codeLink =
            project.codeUrl || project.githubUrl || project.repoUrl || project.sourceUrl;
          const demoLink = project.demoUrl || project.liveUrl || project.appUrl;

          return (
            <GlassCard
              key={project.title}
              as={motion.article}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={fadeUp}
              transition={{ ...revealTransition, delay: index * 0.035 }}
              whileHover={{
                ...cardHover,
                rotateX: 1.2,
                rotateY: index === 1 ? 0 : index === 0 ? -1 : 1,
              }}
              className="project-card flex h-full flex-col rounded-3xl p-6 md:p-7"
            >
              <MotionGraphic
                src={projectMotionSources[project.title]}
                className="project-motion-graphic"
                loop
                autoplay
              />
              <div className="relative">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100 shadow-glow">
                    <Cpu size={24} />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
              </div>

              <div className="relative mt-6">
                <div className="grid gap-3">
                  {projectBriefFields.map(([label, key]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-cyan-100/70">
                        {label}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-slate-300">{project[key]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/70">
                  Key pieces
                </p>
                <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                  {project.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-200" size={16} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-100/70">
                  Tech stack
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-cyan-50 transition duration-200 hover:border-cyan-200/35 hover:bg-cyan-200/10 hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-auto flex flex-wrap gap-3 pt-7">
                {renderProjectAction(codeLink, 'Code', Code2, 'Code soon')}
                {renderProjectAction(demoLink, 'Demo', ExternalLink, 'Demo soon')}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
