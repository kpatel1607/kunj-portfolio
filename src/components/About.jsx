import GlassCard from './GlassCard.jsx';
import SectionTitle from './SectionTitle.jsx';

const mentionedProjects = [
  {
    name: 'Lumina AI',
    detail: 'document intelligence platform',
  },
  {
    name: 'MoodLens',
    detail: 'emotion and sarcasm detection',
  },
  {
    name: 'AI Fitness Coach',
    detail: 'real-time pushup analysis',
  },
];

function About() {
  return (
    <section id="about" className="section-shell">
      <SectionTitle eyebrow="About" title="Building practical AI from research curiosity">
        Kunj Patel is a Computer Science and Engineering student interested in Artificial
        Intelligence, Machine Learning, NLP, Computer Vision, and applied AI systems.
      </SectionTitle>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <GlassCard className="rounded-2xl p-6 text-slate-300 md:p-8">
          <div className="relative space-y-5 leading-8">
            <p>
              He enjoys researching how intelligent systems work, then turning those ideas into
              practical applications that solve real problems. His work sits at the intersection of
              model behavior, product thinking, and clean engineering.
            </p>
            <p>
              Kunj is especially drawn to projects where AI is more than a demo: systems that read,
              understand, detect, respond, and give people a useful experience on top of the model.
            </p>
          </div>
        </GlassCard>

        <GlassCard className="rounded-2xl p-6 md:p-8">
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
              Project Direction
            </p>
            <div className="mt-6 space-y-4">
              {mentionedProjects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-200/30 hover:bg-white/8"
                >
                  <h3 className="font-semibold text-white">{project.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{project.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default About;
