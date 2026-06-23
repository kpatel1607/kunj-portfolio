import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrame = 0;

    const updateVisibility = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 350);
        animationFrame = 0;
      });
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.88, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 12 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="back-to-top-button fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-rose-300/25 bg-slate-950/55 text-rose-100 shadow-lg shadow-rose-500/10 backdrop-blur-xl transition hover:border-rose-200/50 hover:bg-rose-300/10 md:bottom-7 md:right-7"
        >
          <ArrowUp size={20} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export default BackToTop;
