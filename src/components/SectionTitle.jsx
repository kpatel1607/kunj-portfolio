function SectionTitle({ eyebrow, title, children, align = 'left' }) {
  const isCentered = align === 'center';

  return (
    <div className={`mb-10 ${isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      <div
        className={`mb-4 flex items-center gap-3 ${isCentered ? 'justify-center' : 'justify-start'}`}
      >
        <span className="h-px w-10 bg-gradient-to-r from-cyan-300 to-violet-300" />
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-100/80">{eyebrow}</p>
      </div>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{children}</p>
      ) : null}
    </div>
  );
}

export default SectionTitle;
