import { useEffect, useState } from 'react';
import { BrainCircuit } from 'lucide-react';
import { navItems, siteConfig } from '../data/portfolio.js';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ['home', ...navItems.map((item) => item.href.replace('#', ''))];
    let animationFrame = 0;

    const updateScrolledState = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 12);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-18% 0px -68% 0px',
        threshold: [0.08, 0.18, 0.32],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    updateScrolledState();
    window.addEventListener('scroll', updateScrolledState, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener('scroll', updateScrolledState);
    };
  }, []);

  return (
    <header
      className={`fixed left-1/2 z-50 w-[min(1120px,calc(100%-1.5rem))] origin-top rounded-full border transition-[top,transform,background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? 'top-3 -translate-x-1/2 scale-[0.985] border-rose-300/20 bg-slate-950/58 shadow-lg shadow-rose-500/10 backdrop-blur-xl'
          : 'top-4 -translate-x-1/2 scale-100 border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(2,6,23,0.22)] backdrop-blur-md'
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className={`mx-auto flex max-w-full flex-col gap-3 px-4 transition-[padding,gap] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex-row md:items-center md:justify-between ${
          isScrolled ? 'py-2.5 md:px-5' : 'py-3.5 md:px-6 md:py-4'
        }`}
      >
        <a href="#home" className="flex items-center gap-3 font-semibold text-white">
          <span className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-2 text-cyan-200 shadow-glow">
            <BrainCircuit size={20} />
          </span>
          <span>{siteConfig.name}</span>
        </a>
        <div className="flex max-w-full gap-1 overflow-x-auto pb-1 text-xs text-slate-300 sm:gap-2 sm:text-sm md:items-center md:gap-3 md:overflow-visible md:pb-0">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-full px-2.5 py-2 transition duration-200 hover:bg-white/7 hover:text-cyan-100 sm:px-3 ${
                activeSection === item.href.replace('#', '')
                  ? 'border border-cyan-200/25 bg-cyan-200/10 text-cyan-100 shadow-glow'
                  : 'border border-transparent'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
