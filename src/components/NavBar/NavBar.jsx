import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import resumeEnglish from '../../assets/cv/resume-franciscotoro.pdf'

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
                <a href="https://api.whatsapp.com/send/?phone=3521405097" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp />
                </a>
                <a
                    href="mailto:torofrancisco13@gmail.com"
                    aria-label="Email"
                >
                    <FaEnvelope/>
                </a>
                <a href={resumeEnglish} download="CV-FranciscoToro-Dev-EN">Resume</a>

            </section>

            <header className={styles["header-info"]}>
                <h1 className={styles["h-color"]}>Francisco Toro</h1>
                <h2 className={styles["h-color"]}>Junior Full Stack Developer</h2>
                <p className="text-color">Building Applications with Purpose.</p>
            </header>


            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="#about-me" className={styles.navLink}>ABOUT</a></li>
                    <li><a href="#skills" className={styles.navLink}>SKILLS</a></li>
                    <li><a href="#education" className={styles.navLink}>EDUCATION</a></li>
                    <li><a href="#experience" className={styles.navLink}>PROFESSIONAL EXPERIENCE</a></li>
                    <li><a href="#projects" className={styles.navLink}>PROJECTS</a></li>

                </ul>
            </nav>

        </aside>
    );
};

export default NavBar;

