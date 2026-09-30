import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import CTAButton from './CTAButton';

interface ServiceBlockProps {
  title: string;
  price: string;
  description: string;
  includes: string[];
  timeline: string;
  id: string;
  index?: number;
}

export default function ServiceBlock({ title, price, description, includes, timeline, id, index = 0 }: ServiceBlockProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      className="border border-paper/10 bg-ink-50 p-8 lg:p-10 flex flex-col scroll-mt-28"
    >
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="font-serif text-2xl text-paper">{title}</h3>
        <span className="font-serif text-2xl text-gold">{price}</span>
      </div>
      <p className="text-sm text-paper/60 leading-relaxed mb-6">{description}</p>

      <div className="mb-6">
        <p className="text-xs uppercase tracking-ultra-wide text-paper/40 mb-3">What's Included</p>
        <ul className="space-y-2.5">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-paper/70">
              <Check size={16} className="text-gold mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <p className="text-xs uppercase tracking-ultra-wide text-paper/40 mb-2">Typical Timeline</p>
        <p className="text-sm text-paper/70">{timeline}</p>
      </div>

      <div className="mt-auto">
        <CTAButton to="/contact" variant="secondary" className="w-full justify-center">
          Start a Project
        </CTAButton>
      </div>
    </motion.div>
  );
}
