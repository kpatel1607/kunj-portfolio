import { siteConfig } from '../data/portfolio.js';

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p className="font-semibold text-white">{siteConfig.name}</p>
        <p className="text-sm text-slate-400">{siteConfig.role}</p>
      </div>
    </footer>
  );
}

export default Footer;
