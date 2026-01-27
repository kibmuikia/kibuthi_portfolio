import type { ProfileConfig } from '../types/profile';

export const profileConfig: ProfileConfig = {
  name: 'Allan Kibuthi Muikia',
  tagline: 'Full Stack Software Engineer',
  bio: 'Accomplished Full Stack Software Engineer specializing in high-performance mobile ecosystems (Flutter, Native Android/iOS) and scalable web solutions. Expert at bridging the gap between technical scalability and user-centric product goals, with extensive experience in mission-critical applications across various sectors including fintech and payments.',
  email: 'muikiaa@gmail.com',
  githubUrl: 'https://github.com/kibmuikia',
  skills: [
    {
      category: 'Mobile Development',
      technologies: ['Flutter (Dart)', 'Native Android (Kotlin, Java)', 'Native iOS (Swift)', 'KMM', 'React Native'],
      icon: '📱',
    },
    {
      category: 'Web Development',
      technologies: ['React.js', 'Angular', 'Vue.js', 'Vite', 'TypeScript', 'Responsive Design', 'PWA'],
      icon: '💻',
    },
    {
      category: 'Backend & Cloud',
      technologies: ['Laravel (PHP)', 'Python', 'Go', 'SQL (MySQL, PostgreSQL)', 'Firebase', 'Firestore'],
      icon: '☁️',
    },
    {
      category: 'Architecture',
      technologies: ['Clean Architecture', 'MVVM', 'RESTful APIs', 'Microservices', 'Domain-Driven Design'],
      icon: '🏗️',
    },
    {
      category: 'DevOps & Tools',
      technologies: ['Git/GitHub', 'CI/CD Pipelines', 'Docker', 'Firebase Analytics', 'Crashlytics'],
      icon: '🛠️',
    },
    {
      category: 'Payment Integration',
      technologies: ['M-Pesa API', 'Digital Wallets', 'Transaction Reconciliation', 'Payment SDKs'],
      icon: '💳',
    },
  ],
  experience: [
    {
      company: 'Chpter',
      role: 'Senior Software Engineer',
      description: 'Spearheading development of an AI-powered conversational commerce platform. Architecting WhatsApp/Instagram commerce integrations and establishing best practices for clean architecture and cross-platform scalability.',
      technologies: ['Flutter', 'WhatsApp Business API', 'Clean Architecture', 'CI/CD'],
    },
    {
      company: 'MarketForce Technologies Inc.',
      role: 'Android Engineer',
      description: 'Engineered core features for B2B marketplace applications. Implemented offline-first architectures and optimized data usage for 15,000+ merchants in low-connectivity zones.',
      technologies: ['Kotlin', 'Java', 'Room', 'Coroutines', 'M-Pesa API'],
    },
    {
      company: 'Hava Net Limited',
      role: 'Android Developer',
      description: 'Developed high-traffic ride-hailing and logistics applications. Managed dual-app ecosystem for riders and drivers with real-time tracking and engaging engagement systems.',
      technologies: ['Android SDK', 'Google Maps API', 'Firebase Cloud Messaging', 'SQLite'],
    },
  ],
  social: [
    {
      platform: 'GitHub',
      url: 'https://github.com/kibmuikia',
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muikia-allan/',
      icon: 'linkedin',
    },
  ],
};
