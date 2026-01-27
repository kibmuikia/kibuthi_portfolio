// kibuthi_portfolio/src/components/sections/Hero.tsx
import { profileConfig } from '../../config/profile';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textSide}>
            <div className={styles.greeting}>
              <span className={styles.dot} />
              <span className={styles.available}>Ready to build your next big idea</span>
            </div>
            <h1 className={styles.title}>
              Engineering <span className={styles.highlight}>Scalable</span> Solutions with Modern Precision.
            </h1>
            <p className={styles.bio}>
              {profileConfig.bio}
            </p>
            <div className={styles.actions}>
              <a href="#contact" className="btn-primary">Let's Connect</a>
              <a href="#skills" className={styles.secondaryBtn}>Explore My Work</a>
            </div>
          </div>
          <div className={styles.imageSide}>
            <div className={styles.illustrationContainer}>
              <img 
                src="/assets/illustrations/purple_hero.png" 
                alt="Purple Modern Hero Illustration" 
                className={styles.illustration}
              />
              <div className={styles.decorativeSolid} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
