import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faReact, faAngular, faDocker, faAws, faGit, faGithub, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import styles from './Skills.module.css';

const Skills = () => {
  const mainStack = [
    { id: 1, name: 'Angular', icon: faAngular },
    { id: 2, name: 'React', icon: faReact },
    { id: 3, name: 'Django', icon: faDatabase },
    { id: 4, name: 'PostgreSQL', icon: faDatabase },
  ];

  const complementary = [
    { id: 1, name: 'FastAPI', icon: faPython },
    { id: 2, name: 'Next.js', icon: faReact },
    { id: 3, name: 'WordPress (PHP)', icon: faPhp },
    { id: 4, name: 'MySQL', icon: faDatabase },
    { id: 5, name: 'AWS (basic)', icon: faAws },
    { id: 6, name: 'Docker (basic)', icon: faDocker },
  ];

  const methodologies = [
    { id: 1, name: 'Scrum', icon: faGit },
    { id: 2, name: 'Kanban', icon: faGit },
    { id: 3, name: 'Git', icon: faGit },
    { id: 4, name: 'GitHub', icon: faGithub },
  ];

  return (
    <section className={styles.skillsContainer} id="skills">
      <h2 className={styles.h2Section}>Skills</h2>

      <div className={styles.skillsCategory}>
        <h3>Main Stack</h3>
        <ul className={styles.skillsList}>
          {mainStack.map((skill) => (
            <li key={skill.id} className={styles.skillItem}>
              <FontAwesomeIcon icon={skill.icon} className={styles.skillIcon} />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.skillsCategory}>
        <h3>Complementary</h3>
        <ul className={styles.skillsList}>
          {complementary.map((skill) => (
            <li key={skill.id} className={styles.skillItem}>
              <FontAwesomeIcon icon={skill.icon} className={styles.skillIcon} />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.skillsCategory}>
        <h3>Methodologies & Version Control</h3>
        <ul className={styles.skillsList}>
          {methodologies.map((skill) => (
            <li key={skill.id} className={styles.skillItem}>
              <FontAwesomeIcon icon={skill.icon} className={styles.skillIcon} />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;