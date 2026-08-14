export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Full-Stack' | 'AI / Machine Learning' | 'Browser Extension';
  layoutType: 'featured' | 'split' | 'browser' | 'medical';
  technologies: string[];
  metrics?: { label: string; value: string }[];
  highlights: string[];
  problem?: string;
  solution?: string;
  architecture?: string[];
  challenges?: string[];
  outcome?: string;
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
  accentGradient: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  location?: string;
}

export interface Education {
  institution: string;
  degree: string;
  grade: string;
  period: string;
  details?: string[];
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI / Data' | 'Database / Tools';
  description: string;
  proficiency: string;
  iconName: string;
  color: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext?: string;
  icon?: string;
}
