import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-soft',
  secondary:
    'bg-white text-ink border border-border hover:border-primary/40 hover:text-primary',
  ghost:
    'bg-transparent text-primary hover:bg-primary-light',
  onDark:
    'bg-white text-primary hover:bg-surface',
};

const sizes = {
  md: 'text-[15px] px-5 py-3',
  lg: 'text-[15px] px-6 py-3.5',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  icon: Icon,
  disabled = false,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-all duration-200 ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-50 pointer-events-none' : ''
  } ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon size={17} strokeWidth={2.25} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
