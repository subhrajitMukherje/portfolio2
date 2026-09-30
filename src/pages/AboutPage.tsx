import FadeIn from '@/components/FadeIn';
import CTAButton from '@/components/CTAButton';

const primarySkills = ['Go', 'React', 'Next.js', 'Node.js'];
const secondarySkills = ['C', 'PHP', 'JavaScript'];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-ultra-wide text-gold mb-4">About</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-12">The short version.</h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-6 text-lg text-paper/70 leading-relaxed">
            <p>
              I'm a full-stack engineer who ships. Over the past several years I've delivered automation systems, SaaS products, and e-commerce platforms — each one live in production, each one end to end.
            </p>
            <p>
              My work sits at the intersection of infrastructure and interface. I'm comfortable wiring up a database, building an API, and crafting the UI that sits on top — because products that stop at "prototype" don't solve problems.
            </p>
            <p>
              I work with founders, operators, and teams who need things built properly and shipped on time. Async-first, outcome-oriented, no hand-waving.
            </p>
          </div>
        </FadeIn>

        {/* Skills */}
        <FadeIn delay={0.2}>
          <div className="mt-20">
            <p className="text-xs uppercase tracking-ultra-wide text-gold mb-8">Skills</p>

            <div className="mb-10">
              <p className="text-sm text-paper/40 mb-4">Primary</p>
              <div className="flex flex-wrap gap-3">
                {primarySkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 border border-gold/30 text-paper font-medium tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-paper/40 mb-4">Secondary</p>
              <div className="flex flex-wrap gap-3">
                {secondarySkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 border border-paper/15 text-paper/60 tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-24 border-t border-paper/5 pt-12">
            <h2 className="font-serif text-3xl text-balance">
              Want to talk about a project?
            </h2>
            <p className="mt-4 text-paper/60">I reply within 24 hours.</p>
            <div className="mt-8">
              <CTAButton to="/contact">Get in Touch</CTAButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
