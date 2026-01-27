// kibuthi_portfolio/src/types/profile.ts
export interface Skill {
  category: string;
  technologies: string[];
  icon: string; // Emoji or icon identifier
}

export interface Experience {
  company: string;
  role: string;
  description: string;
  technologies: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon identifier
}

export interface ProfileConfig {
  name: string;
  tagline: string;
  bio: string;
  skills: Skill[];
  experience: Experience[];
  social: SocialLink[];
  email: string;
  githubUrl: string;
}
