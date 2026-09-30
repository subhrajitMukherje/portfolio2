import { motion } from 'framer-motion';
import { Workflow, Code, ShoppingBag, ArrowRight, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '@/components/CTAButton';
import ProjectCard from '@/components/ProjectCard';
import FadeIn from '@/components/FadeIn';
import { projects } from '@/data/projects';

const whatIDo = [
  {
    icon: Workflow,
    title: 'Automation',
    description: 'Replace manual busywork with systems that run themselves — from lead capture to fulfillment.',
    anchor: 'automation',
  },
  {
    icon: Code,
    title: 'SaaS Development',
    description: 'Full-stack SaaS products built with modern tooling — auth, real-time, billing, the works.',
    anchor: 'saas-dev',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Get selling online fast with conversion-focused storefronts and integrated payments.',
    anchor: 'ecommerce',
  },
];

const techLogos = ['Next.js', 'React', 'Go', 'Node.js', 'Supabase', 'Neon', 'Clerk', 'Stripe'];

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xs uppercase tracking-ultra-wide text-gold mb-8"
          >
            Full-Stack Engineer & Automation Specialist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-balance"
          >
            I build systems that automate operations, launch products, and get businesses selling online.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 text-lg text-paper/60 max-w-2xl mx-auto leading-relaxed"
          >
            End to end, not prototypes. From first commit to production — automation, SaaS, and e-commerce, delivered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton to="/work">View Work</CTAButton>
            <CTAButton to="/contact" variant="secondary">Book a Call</CTAButton>
          </motion.div>
        </div>
      </section>

      {/* What I Do */}
      <section className="px-6 lg:px-12 py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-xs uppercase tracking-ultra-wide text-gold mb-4">What I Do</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-16 max-w-2xl">Three disciplines, one delivery standard.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatIDo.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <Link
                  to={`/services#${item.anchor}`}
                  className="group block border border-paper/10 bg-ink-50 p-8 h-full transition-colors duration-300 hover:border-gold/30"
                >
                  <item.icon size={28} className="text-gold mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-paper mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-paper/60 leading-relaxed">{item.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-paper/40 group-hover:text-gold transition-colors duration-300">
                    Learn more <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-6 lg:px-12 py-32 border-t border-paper/5">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
              <div>
                <p className="text-xs uppercase tracking-ultra-wide text-gold mb-4">Featured Work</p>
                <h2 className="font-serif text-4xl md:text-5xl">Selected projects.</h2>
              </div>
              <Link to="/work" className="group inline-flex items-center gap-2 text-sm text-paper/60 hover:text-gold transition-colors duration-300">
                View all work <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="px-6 lg:px-12 py-24 border-t border-paper/5">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-ultra-wide text-gold mb-4">Reach</p>
                <h2 className="font-serif text-3xl md:text-4xl mb-4">Working across time zones.</h2>
                <p className="text-paper/60 leading-relaxed">
                  Clients across North America, Europe, and South Asia. Async-first communication, delivery-focused execution.
                </p>
                <div className="mt-6 flex items-center gap-3 text-paper/40">
                  <Globe size={20} strokeWidth={1.5} />
                  <span className="text-sm">3 continents · 6+ time zones</span>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-ultra-wide text-gold mb-6">Core Stack</p>
                <div className="flex flex-wrap gap-3">
                  {techLogos.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 px-4 py-2.5 border border-paper/10 text-sm text-paper/60 hover:text-gold hover:border-gold/30 transition-colors duration-300"
                    >
                      <Cpu size={14} strokeWidth={1.5} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 lg:px-12 py-32 border-t border-paper/5">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Have a project in mind? Let's scope it together.
            </h2>
            <p className="mt-6 text-paper/60 text-lg max-w-xl mx-auto">
              Book a call and walk away with a clear plan — timeline, scope, and cost. No obligation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/contact">Book a Call</CTAButton>
              <CTAButton to="/services" variant="secondary">View Services</CTAButton>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
