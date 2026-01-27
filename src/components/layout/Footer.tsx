// kibuthi_portfolio/src/components/layout/Footer.tsx
import { profileConfig } from '../../config/profile';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p>© {new Date().getFullYear()} {profileConfig.name}</p>
          <div className={styles.socials}>
            {profileConfig.social.map(link => (
              <a 
                key={link.platform} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
