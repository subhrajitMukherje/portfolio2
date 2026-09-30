import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import FadeIn from '@/components/FadeIn';
import { projects } from '@/data/projects';

const categories = ['All', 'SaaS', 'AI', 'E-commerce'] as const;

export default function WorkPage() {
  const [filter, setFilter] = useState<string>('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-32 pb-20 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-ultra-wide text-gold mb-4">Work</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Things I've built.</h1>
          <p className="text-lg text-paper/60 max-w-2xl leading-relaxed">
            A selection of shipped products — AI tools, SaaS platforms, and commerce systems. Each one live, each one end to end.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-sm tracking-wide transition-all duration-300 active:scale-[0.97] ${
                  filter === cat
                    ? 'bg-gold text-ink'
                    : 'border border-paper/15 text-paper/60 hover:text-paper hover:border-paper/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
