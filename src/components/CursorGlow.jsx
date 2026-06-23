import { useEffect, useRef } from 'react';

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const mediaQuery = window.matchMedia(
      '(pointer: fine) and (min-width: 769px) and (prefers-reduced-motion: no-preference)',
    );

    if (!glow || !mediaQuery.matches) {
      return undefined;
    }

    let animationFrame = 0;
    let x = -999;
    let y = -999;

    const updateGlow = () => {
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      animationFrame = 0;
    };

    const handlePointerMove = (event) => {
      x = event.clientX;
      y = event.clientY;

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(updateGlow);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}

export default CursorGlow;
