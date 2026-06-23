import { motion } from 'framer-motion';
import { ArrowDownToLine, BadgeCheck, Code2, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../data/portfolio.js';
import { fadeUp, revealTransition, sectionViewport } from '../utils/motion.js';
import GlassCard from './GlassCard.jsx';
import SectionTitle from './SectionTitle.jsx';

const contactLinks = [
  {
    label: 'Email Me',
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    variant: 'primary',
  },
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
  {
    label: 'Download Resume',
    href: siteConfig.resumePath,
    icon: ArrowDownToLine,
    download: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="section-shell">
      <SectionTitle eyebrow="Contact" title="Let's build applied AI systems">
        Open to AI/ML, NLP, Computer Vision, Generative AI, Applied AI, and Data Analytics
        internship opportunities.
      </SectionTitle>

      <GlassCard
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={fadeUp}
        transition={revealTransition}
        className="rounded-3xl p-6 md:p-8"
      >
        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-5">
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Mail className="mt-1 shrink-0 text-cyan-200" size={20} />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block font-medium text-white transition hover:text-cyan-100"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <MapPin className="mt-1 shrink-0 text-violet-200" size={20} />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Location
                </p>
                <p className="mt-1 font-medium text-white">{siteConfig.location}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              I am interested in internship roles where I can work on practical AI products,
              research-driven model development, backend APIs, and user-facing intelligent systems.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const isPrimary = link.variant === 'primary';

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    download={link.download}
                    className={
                      isPrimary
                        ? 'lab-button inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100'
                        : 'inline-flex items-center gap-2 rounded-full border border-white/12 bg-slate-950/35 px-5 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/10 hover:text-cyan-100'
                    }
                  >
                    <Icon size={18} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}

export default Contact;
