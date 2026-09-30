import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, Github } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { supabase } from '@/lib/supabase';

const projectTypes = ['Automation', 'SaaS Development', 'E-commerce', 'LMS Website & App', 'Hourly / Consulting'];
const budgetRanges = ['< $1,000', '$1,000 – $3,000', '$3,000 – $5,000', '$5,000+'];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      project_type: formData.get('projectType') as string,
      budget_range: formData.get('budgetRange') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase.from('contact_submissions').insert(data);
      if (error) throw error;
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-ultra-wide text-gold mb-4">Contact</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Let's talk.</h1>
          <p className="text-lg text-paper/60 max-w-xl leading-relaxed">
            Tell me about your project. I reply within 24 hours.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="border border-gold/30 bg-ink-50 p-10 text-center"
              >
                <CheckCircle size={40} className="text-gold mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-paper mb-2">Message sent.</h3>
                <p className="text-sm text-paper/60">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-gold hover:text-gold-50 transition-colors duration-300"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-ultra-wide text-paper/40 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-paper/15 px-0 py-3 text-paper focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-paper/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-ultra-wide text-paper/40 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-paper/15 px-0 py-3 text-paper focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-paper/20"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-xs uppercase tracking-ultra-wide text-paper/40 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      defaultValue=""
                      className="w-full bg-transparent border-b border-paper/15 px-0 py-3 text-paper focus:outline-none focus:border-gold transition-colors duration-300"
                    >
                      <option value="" disabled className="bg-ink">Select a type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-ink">{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budgetRange" className="block text-xs uppercase tracking-ultra-wide text-paper/40 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      required
                      defaultValue=""
                      className="w-full bg-transparent border-b border-paper/15 px-0 py-3 text-paper focus:outline-none focus:border-gold transition-colors duration-300"
                    >
                      <option value="" disabled className="bg-ink">Select a range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-ink">{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-ultra-wide text-paper/40 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-paper/15 px-0 py-3 text-paper focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-paper/20 resize-none"
                    placeholder="Tell me about your project — what you're building, timeline, and any specific requirements."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle size={16} />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide bg-gold text-ink hover:bg-gold-50 transition-all duration-300 active:scale-[0.97] disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-ultra-wide text-paper/40 mb-4">Direct</p>
                <a
                  href="mailto:hello@subhrajit.pro"
                  className="inline-flex items-center gap-3 text-paper/70 hover:text-gold transition-colors duration-300"
                >
                  <Mail size={18} strokeWidth={1.5} />
                  hello@subhrajit.pro
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-ultra-wide text-paper/40 mb-4">GitHub</p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-paper/70 hover:text-gold transition-colors duration-300"
                >
                  <Github size={18} strokeWidth={1.5} />
                  github.com/subhrajit
                </a>
              </div>

              <div className="pt-8 border-t border-paper/5">
                <p className="text-sm text-paper/50 leading-relaxed">
                  Prefer email? Reach out directly and I'll respond within 24 hours. For project inquiries, the form above helps me prepare before our call.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
