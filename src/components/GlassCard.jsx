function GlassCard({ as: Component = 'div', className = '', children, ...props }) {
  return (
    <Component className={`glass-card ${className}`} {...props}>
      <div className="glass-card-shine" />
      {children}
    </Component>
  );
}

export default GlassCard;
