export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

export const revealTransition = {
  duration: 0.48,
  ease: 'easeOut',
};

export const sectionViewport = {
  once: true,
  amount: 0.18,
};

export const cardHover = {
  y: -3,
};
