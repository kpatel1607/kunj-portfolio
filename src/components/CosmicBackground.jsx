import FloatingOrb from './FloatingOrb.jsx';

function CosmicBackground() {
  return (
    <div className="cosmic-background" aria-hidden="true">
      <FloatingOrb className="cosmic-orb-cyan" />
      <FloatingOrb className="cosmic-orb-violet" />
      <FloatingOrb className="cosmic-orb-emerald" />
      <div className="floating-element floating-element-one" />
      <div className="floating-element floating-element-two" />
      <div className="floating-element floating-element-three" />
      <div className="neural-field" aria-hidden="true">
        <span className="neural-dot neural-dot-one" />
        <span className="neural-dot neural-dot-two" />
        <span className="neural-dot neural-dot-three" />
        <span className="neural-line neural-line-one" />
        <span className="neural-line neural-line-two" />
      </div>
      <div className="cosmic-stars" />
      <div className="cosmic-grid" />
      <div className="cosmic-vignette" />
    </div>
  );
}

export default CosmicBackground;
