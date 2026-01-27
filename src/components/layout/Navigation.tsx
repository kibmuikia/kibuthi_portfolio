import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import { profileConfig } from '../../config/profile';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <Link to="/" className={styles.brand}>
          {profileConfig.name.split(' ')[0]}
        </Link>
        <div className={styles.links}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            Home
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            Contact
          </NavLink>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
