import { profileConfig } from '../../config/profile';
import styles from './ExperienceSummary.module.css';

const ExperienceSummary = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span className={styles.label}>Previous Chapters</span>
            <div className={styles.line} />
          </div>

          <div className={styles.list}>
            {profileConfig.experience.map((exp) => (
              <div key={`${exp.company}-${exp.role}`} className={styles.item}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.separator}>@</span>
                <span className={styles.company}>{exp.company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSummary;
