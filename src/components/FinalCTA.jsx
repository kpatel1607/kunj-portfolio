import { ArrowDownToLine, BadgeCheck, Code2, Mail } from 'lucide-react';
import { siteConfig } from '../data/portfolio.js';
import GlassCard from './GlassCard.jsx';

const finalLinks = [
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail, primary: true },
  { label: 'LinkedIn', href: siteConfig.links.linkedin, icon: BadgeCheck },
  { label: 'GitHub', href: siteConfig.links.github, icon: Code2 },
  { label: 'Resume Download', href: siteConfig.resumePath, icon: ArrowDownToLine, download: true },
];

function FinalCTA() {
  return (
    <section className="section-shell">
      <GlassCard className="rounded-3xl p-6 text-center md:p-10">
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-100/75">Final CTA</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">Let's Build Something Intelligent</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Open to internship conversations where I can contribute to practical AI products,
            model-backed APIs, and real user workflows.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {finalLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  download={link.download}
                  className={
                    link.primary
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
      </GlassCard>
    </section>
  );
}

export default FinalCTA;
