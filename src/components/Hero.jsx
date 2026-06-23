import { motion } from 'framer-motion';
import {
  ArrowDownToLine,
  ArrowRight,
  BadgeCheck,
  Code2,
  Mail,
  Sparkles,
} from 'lucide-react';
import { commandCenter, siteConfig } from '../data/portfolio.js';
import { asset } from '../utils/assets.js';
import { fadeUp, revealTransition } from '../utils/motion.js';
import GlassCard from './GlassCard.jsx';
import MotionGraphic from './MotionGraphic.jsx';

const socialLinks = [
  {
    label: 'GitHub',
    href: siteConfig.links.github,
    icon: Code2,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.links.linkedin,
    icon: BadgeCheck,
  },
];

function Hero() {
  return (
    <section id="home" className="section-shell grid min-h-[calc(100vh-73px)] items-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={revealTransition}
        className="grid w-full min-w-0 items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <GlassCard className="hero-card ai-command-shell w-full max-w-full min-w-0 rounded-[1.75rem] p-6 md:p-9 lg:p-10">
          <div className="relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...revealTransition, delay: 0.03 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
            >
              <Sparkles size={16} />
              Personal AI workspace
            </motion.div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...revealTransition, delay: 0.08 }}
              className="text-sm font-semibold uppercase tracking-[0.38em] text-slate-400"
            >
              {siteConfig.name}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...revealTransition, delay: 0.13 }}
              className="mt-4 max-w-full break-words text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              <span className="block">AI/ML Developer</span>
              <span className="block">building</span>
              <span className="text-gradient block">real-world AI products</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...revealTransition, delay: 0.18 }}
              className="mt-6 max-w-2xl break-words text-base leading-8 text-slate-300 md:text-lg"
            >
              {siteConfig.subheadline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...revealTransition, delay: 0.22 }}
              className="ai-command-center mt-8 rounded-3xl border border-cyan-200/18 bg-slate-950/35 p-4 shadow-[0_0_42px_rgba(103,232,249,0.08)] backdrop-blur-xl md:p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-100/70">
                    AI Command Center
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">{commandCenter.name}</h2>
                  <p className="mt-1 text-sm text-slate-300">{commandCenter.role}</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-200/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-200 shadow-[0_0_12px_rgba(254,205,211,0.8)]" />
                  {commandCenter.status}
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-cyan-100/65">
                    Focus Areas
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {commandCenter.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-cyan-200/18 bg-cyan-200/8 px-3 py-1.5 text-xs font-semibold text-cyan-50"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-violet-100/65">
                      Current Project
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {commandCenter.currentProject}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-emerald-100/65">
                      Current Goal
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {commandCenter.currentGoal}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...revealTransition, delay: 0.27 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={siteConfig.links.projects}
                className="lab-button magnetic-action inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-200 px-5 py-3 font-semibold text-slate-950 transition hover:bg-white sm:w-auto"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="magnetic-action inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100 sm:w-auto"
              >
                Email Me <Mail size={18} />
              </a>
              <a
                href={siteConfig.resumePath}
                download
                className="magnetic-action inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 font-semibold text-white backdrop-blur transition hover:border-cyan-200/70 hover:bg-white/12 hover:text-cyan-100 sm:w-auto"
              >
                Download Resume <ArrowDownToLine size={18} />
              </a>
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-action inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/12 bg-slate-950/30 px-5 py-3 font-semibold text-slate-100 transition hover:border-violet-200/60 hover:bg-white/10 sm:flex-none"
                  >
                    <Icon size={18} />
                    {link.label}
                  </a>
                );
              })}
            </motion.div>

            <motion.a
              href={`mailto:${siteConfig.email}`}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ ...revealTransition, delay: 0.32 }}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-cyan-100"
            >
              <Mail size={16} />
              {siteConfig.email}
            </motion.a>
          </div>
        </GlassCard>

        <div className="relative mx-auto grid aspect-square w-full min-w-0 max-w-[24rem] place-items-center lg:max-w-[28rem]">
          <MotionGraphic
            src={asset('/animations/ai-orbit.lottie')}
            className="hero-motion-graphic"
            loop
            autoplay
          />
          <div className="hero-orbit hero-orbit-outer" />
          <div className="hero-orbit hero-orbit-middle" />
          <div className="hero-orbit hero-orbit-inner" />
          <div className="hero-node hero-node-top" />
          <div className="hero-node hero-node-right" />
          <div className="hero-node hero-node-bottom" />
          <GlassCard className="hero-core rounded-full p-8 text-center">
            <div className="relative mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl border border-cyan-200/25 bg-cyan-200/10 text-cyan-100 shadow-glow">
              <Sparkles size={28} />
            </div>
            <p className="relative text-xs font-bold uppercase tracking-[0.3em] text-cyan-100/80">
              Research Lab
            </p>
            <p className="relative mt-3 text-2xl font-bold text-white">AI Product Systems</p>
            <p className="relative mt-3 text-sm leading-6 text-slate-300">
              NLP, vision, GenAI, APIs, and applied ML workflows.
            </p>
          </GlassCard>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;

