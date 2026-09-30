export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  image: string;
  category: 'SaaS' | 'AI' | 'E-commerce';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'ai-productivity-saas',
    title: 'AI Productivity SaaS',
    description: 'Real-time collaborative workspace with AI-powered transcription and task automation.',
    stack: ['Next.js', 'AssemblyAI', 'Liveblocks', 'Clerk'],
    liveUrl: 'https://example.com/ai-productivity',
    image: 'https://images.pexels.com/photos/5473960/pexels-photo-5473960.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'SaaS',
    featured: true,
  },
  {
    id: 'sleek-ai',
    title: 'Sleek.ai',
    description: 'AI web design agent that generates production-ready landing pages from a single prompt.',
    stack: ['Next.js 16', 'Gemini', 'Claude', 'Instforge'],
    liveUrl: 'https://example.com/sleek-ai',
    image: 'https://images.pexels.com/photos/30547568/pexels-photo-30547568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'AI',
    featured: true,
  },
  {
    id: 'ai-support-chatbot',
    title: 'AI Support Chatbot Builder',
    description: 'No-code platform to build, train, and deploy AI support chatbots with live handoff.',
    stack: ['Next.js 16', 'Neon', 'ScaleKit', 'ZenRows'],
    liveUrl: 'https://example.com/chatbot-builder',
    image: 'https://images.pexels.com/photos/14314636/pexels-photo-14314636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'AI',
    featured: true,
  },
  {
    id: 'ai-product-ads',
    title: 'AI Product Ads Generator',
    description: 'Generate on-brand product ad creatives with AI — copy, imagery, and layout in one click.',
    stack: ['Next.js', 'Firebase', 'TypeScript', 'ImageKit.io'],
    liveUrl: 'https://example.com/ads-generator',
    image: 'https://images.pexels.com/photos/14314638/pexels-photo-14314638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'E-commerce',
  },
  {
    id: 'ai-testing-agent',
    title: 'AI Testing Automation Agent',
    description: 'Autonomous testing agent that writes, runs, and maintains E2E tests from natural language.',
    stack: ['Next.js', 'GitHub', 'Browserbase', 'Neon', 'Drizzle ORM'],
    liveUrl: 'https://example.com/testing-agent',
    image: 'https://images.pexels.com/photos/3520699/pexels-photo-3520699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'SaaS',
  },
];
