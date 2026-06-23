import { useEffect, useState } from 'react';

const RIPPLE_DURATION = 620;

function ClickRipple() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reduceMotion.matches) {
      return undefined;
    }

    const handleClick = (event) => {
      const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      const ripple = {
        id,
        x: event.clientX,
        y: event.clientY,
      };

      setRipples((current) => [...current.slice(-5), ripple]);

      window.setTimeout(() => {
        setRipples((current) => current.filter((item) => item.id !== id));
      }, RIPPLE_DURATION);
    };

    window.addEventListener('click', handleClick, { passive: true });

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="click-ripple-layer" aria-hidden="true">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="click-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </div>
  );
}

export default ClickRipple;
