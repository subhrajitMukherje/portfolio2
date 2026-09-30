import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  className?: string;
}

export default function CTAButton({ to, children, variant = 'primary', external = false, className = '' }: CTAButtonProps) {
  const base = 'inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 active:scale-[0.97]';
  const styles = variant === 'primary'
    ? 'bg-gold text-ink hover:bg-gold-50'
    : 'border border-paper/20 text-paper hover:border-gold hover:text-gold';

  const content = (
    <>
      {children}
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${base} ${styles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={`group ${base} ${styles} ${className}`}>
      {content}
    </Link>
  );
}
