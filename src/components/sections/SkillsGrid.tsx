// kibuthi_portfolio/src/components/sections/SkillsGrid.tsx
import { profileConfig } from '../../config/profile';
import styles from './SkillsGrid.module.css';

const SkillsGrid = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className={styles.header}>
          <span className="badge">Technical Arsenal</span>
          <h2 className={styles.title}>Crafting with <span className={styles.highlight}>Modern</span> Tools</h2>
        </div>

        <div className={styles.bentoGrid}>
          {/* Main Large Card - Mobile */}
          <div className={`${styles.bentoItem} ${styles.large}`}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>📱</div>
              <h3 className={styles.itemTitle}>{profileConfig.skills[0].category}</h3>
              <div className={styles.tagCloud}>
                {profileConfig.skills[0].technologies.map(tech => (
                  <span key={tech} className={styles.tag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className={`${styles.bentoItem} ${styles.medium}`}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>💻</div>
              <h3 className={styles.itemTitle}>{profileConfig.skills[1].category}</h3>
              <div className={styles.tagCloud}>
                {profileConfig.skills[1].technologies.map(tech => (
                  <span key={tech} className={styles.tag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Illustration Bento */}
          {/* <div className={`${styles.bentoItem} ${styles.illustrationItem}`}>
            <img 
              src="/assets/illustrations/purple_skills.png" 
              alt="Skills Stack" 
              className={styles.skillImage}
            />
          </div> */}

          {/* Backend & Cloud */}
          <div className={`${styles.bentoItem} ${styles.small}`}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>☁️</div>
              <h3 className={styles.itemTitle}>{profileConfig.skills[2].category}</h3>
              <p className={styles.itemDesc}>{profileConfig.skills[2].technologies.join(', ')}</p>
            </div>
          </div>

          {/* Architecture/DevOps Combined Small */}
          <div className={`${styles.bentoItem} ${styles.small}`}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>🏗️</div>
              <h3 className={styles.itemTitle}>Architecting Success</h3>
              <p className={styles.itemDesc}>Focused on Clean Architecture, CI/CD, and Scalable Microservices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
