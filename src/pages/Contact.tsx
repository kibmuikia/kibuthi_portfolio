import { profileConfig } from '../config/profile';

const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Contact Me</h1>
        <p className="text-secondary">Feel free to reach out for collaborations or just a friendly hello!</p>
        
        <div className="card" style={{ maxWidth: '600px', margin: 'var(--space-xl) auto', textAlign: 'left' }}>
          <div style={{ marginBottom: 'var(--space-lg)' }}>
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-xs)' }}>Email</h4>
            <a href={`mailto:${profileConfig.email}`}>{profileConfig.email}</a>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-xs)' }}>Social Media</h4>
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              {profileConfig.social.map(link => (
                <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="badge">
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
