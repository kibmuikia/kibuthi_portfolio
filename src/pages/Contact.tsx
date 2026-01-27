// kibuthi_portfolio/src/pages/Contact.tsx
import { profileConfig } from '../config/profile';

const Contact = () => {
  return (
    <section className="section" id="contact" style={{ padding: 'var(--space-3xl) 0', textAlign: 'center' }}>
      <div className="container">
        <span className="badge">Get in Touch</span>
        <h1 style={{ marginTop: 'var(--space-md)', fontSize: 'var(--text-4xl)' }}>Let's Build Something <span style={{ color: 'var(--accent-primary)' }}>Exceptional</span></h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: 'var(--space-lg) auto var(--space-2xl)' }}>
          Whether you have a specific project in mind or just want to discuss the latest in tech, 
          I'm always open to new connections.
        </p>
        
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left', border: '1px solid var(--border-accent)' }}>
          <div style={{ marginBottom: 'var(--space-xl)' }}>
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-xs)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: 'var(--text-xs)' }}>Direct Email</h4>
            <a href={`mailto:${profileConfig.email}`} style={{ fontSize: 'var(--text-2xl)', fontWeight: 'bold', color: 'var(--text-primary)', textDecoration: 'none' }}>
              {profileConfig.email}
            </a>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-sm)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: 'var(--text-xs)' }}>Find me on</h4>
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              {profileConfig.social.map(link => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="badge"
                  style={{ textDecoration: 'none', transition: 'all var(--transition-fast)' }}
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
