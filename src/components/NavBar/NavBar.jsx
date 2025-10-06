import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import cvEspañol from '../../assets/cv/CV_Francisco_Toro_Español.pdf'
import cvEnglish from '../../assets/cv/CV_Francisco_Toro_English.pdf'

import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <aside className={styles["header-container"]}>
            <section className={styles.socialIcons}>
                <a href="https://www.linkedin.com/in/francisco-toro-goitea-475b71277/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/frantoro10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/franciiscotoro/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href={cvEspañol} download="CV-FranciscoToro-Dev-ES">Res ES</a>
                <a href={cvEnglish} download="CV-FranciscoToro-Dev-EN">Res EN</a>
                
            </section>
            
            <header className={styles["header-info"]}>
                <h1 className={styles["h-color"]}>Francisco Toro</h1>
                <h2 className={styles["h-color"]}>Full-Stack Developer</h2>
                <p className="text-color">Building Web Applications with Purpose.</p>
            </header>


            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="#about-me" className={styles.navLink}>ABOUT</a></li>
                    <li><a href="#" className={styles.navLink}></a>PROFESSIONAL EXPERIENCE</li>
                    <li><a href="#projects" className={styles.navLink}>PROJECTS</a></li>
                    
                </ul>
            </nav>

        </aside>
    );
};

export default NavBar;

