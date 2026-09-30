import { Search, Hammer, Rocket, LifeBuoy } from 'lucide-react';
import ServiceBlock from '@/components/ServiceBlock';
import FadeIn from '@/components/FadeIn';
import CTAButton from '@/components/CTAButton';

const services = [
  {
    id: 'automation',
    title: 'Automation',
    price: '$800+',
    description: 'Eliminate repetitive operations with custom workflows, integrations, and AI-powered pipelines.',
    includes: [
      'Workflow audit & mapping',
      'Custom automation scripts',
      'Third-party API integration',
      'AI-powered task routing',
      'Monitoring & error handling',
    ],
    timeline: '1–3 weeks',
  },
  {
    id: 'saas-dev',
    title: 'SaaS Development',
    price: '$1,000+',
    description: 'Full-stack SaaS products with auth, billing, real-time, and admin — production-ready from day one.',
    includes: [
      'Full-stack application build',
      'Authentication & user management',
      'Subscription billing integration',
      'Real-time features & dashboards',
      'CI/CD pipeline setup',
    ],
    timeline: '3–8 weeks',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    price: '$800+',
    description: 'Conversion-focused storefronts with integrated payments, inventory, and fulfillment.',
    includes: [
      'Storefront design & build',
      'Payment gateway integration',
      'Inventory & order management',
      'SEO & performance optimization',
      'Analytics & conversion tracking',
    ],
    timeline: '1–4 weeks',
  },
  {
    id: 'lms',
    title: 'LMS Website & App',
    price: '$1,000+',
    description: 'Learning management systems with course delivery, progress tracking, and student engagement.',
    includes: [
      'Course catalog & delivery',
      'Student progress tracking',
      'Payment & enrollment flow',
      'Content management system',
      'Mobile-responsive design',
    ],
    timeline: '3–6 weeks',
  },
  {
    id: 'hourly',
    title: 'Hourly',
    price: '$45/hr',
    description: 'Flexible engineering support for ongoing maintenance, feature additions, or consulting.',
    includes: [
      'Bug fixes & maintenance',
      'Feature development',
      'Code review & refactoring',
      'Technical consulting',
      'Architecture guidance',
    ],
    timeline: 'On-demand',
  },
];

const processSteps = [
  { icon: Search, title: 'Discovery', description: 'We map the problem, define scope, and agree on deliverables. No surprises later.' },
  { icon: Hammer, title: 'Build', description: 'Iterative development with weekly check-ins. You see progress as it happens.' },
  { icon: Rocket, title: 'Launch', description: 'Deployment, testing, and handoff. Production-ready, not demo-ready.' },
  { icon: LifeBuoy, title: 'Support', description: 'Post-launch support and documentation. I do not disappear after deploy.' },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-ultra-wide text-gold mb-4">Services</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">How I can help.</h1>
          <p className="text-lg text-paper/60 max-w-2xl leading-relaxed">
            Five engagement models, one standard. Every project ships to production with documentation and post-launch support.
          </p>
        </FadeIn>

        {/* Service blocks */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceBlock key={service.id} {...service} index={i} />
          ))}
        </div>

        {/* Process timeline */}
        <div className="mt-32">
          <FadeIn>
            <p className="text-xs uppercase tracking-ultra-wide text-gold mb-4">Process</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-16">How it works.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1}>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif text-3xl text-gold/40">0{i + 1}</span>
                    <step.icon size={24} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-paper mb-2">{step.title}</h3>
                  <p className="text-sm text-paper/60 leading-relaxed">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-paper/10" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <FadeIn>
          <div className="mt-24 border border-paper/10 bg-ink-50 p-8 lg:p-12 text-center">
            <p className="text-paper/60 leading-relaxed max-w-2xl mx-auto">
              <span className="text-gold">Final quote depends on scope</span> — book a call for an estimate. No pressure, no boilerplate templates.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton to="/contact">Book a Call</CTAButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
