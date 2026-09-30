import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      className="group block"
    >
      <div className="overflow-hidden bg-ink-50 border border-paper/5 transition-colors duration-300 hover:border-gold/30">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-xl text-paper group-hover:text-gold transition-colors duration-300">
              {project.title}
            </h3>
            <ExternalLink size={18} className="text-paper/30 group-hover:text-gold transition-colors duration-300 flex-shrink-0 mt-1" />
          </div>
          <p className="mt-3 text-sm text-paper/60 leading-relaxed">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 bg-ink-200 text-paper/50 tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
