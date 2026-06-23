import { motion } from 'framer-motion';
import { fadeUp, revealTransition, sectionViewport } from '../utils/motion.js';

function AnimatedSection({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={fadeUp}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
