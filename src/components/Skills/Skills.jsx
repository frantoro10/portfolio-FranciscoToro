import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython, 
  faJs, 
  faReact, 
  faAngular, 
  faDocker, 
  faAws, 
  faGit, 
  faGithub, 
  faPhp, 
  faNode,
  faWordpress 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faTasks, 
  faCloud,
  faCode,
  faServer,
  faTools,
  faFire
} from '@fortawesome/free-solid-svg-icons';
import styles from './Skills.module.css';

const Skills = () => {
  const frontend = [
    { id: 1, name: 'React', icon: faReact },
    { id: 2, name: 'Angular', icon: faAngular },
    { id: 3, name: 'Next.js', icon: faReact },
    { id: 4, name: 'TypeScript', icon: faCode },
    { id: 5, name: 'JavaScript', icon: faJs },
  ];

  const backend = [
    { id: 1, name: 'Django', icon: faPython },
    { id: 2, name: 'FastAPI', icon: faPython },
    { id: 4, name: 'Firebase', icon: faFire },
    { id: 5, name: 'Supabase', icon: faDatabase },
    { id: 6, name: 'Python', icon: faPython },
  ];

  const databases = [
    { id: 1, name: 'PostgreSQL', icon: faDatabase },
    { id: 2, name: 'MySQL', icon: faDatabase },
  ];

  const cloudDevOps = [
    { id: 1, name: 'AWS', icon: faAws },
    { id: 2, name: 'Docker', icon: faDocker },
    { id: 3, name: 'Vercel', icon: faCloud },
    { id: 4, name: 'Cloudinary', icon: faCloud },
  ];

  const toolsMethodologies = [
    { id: 1, name: 'Git', icon: faGit },
    { id: 2, name: 'GitHub', icon: faGithub },
    { id: 3, name: 'Scrum', icon: faTasks },
    { id: 4, name: 'Kanban', icon: faTasks },
  ];

  const cms = [
    { id: 1, name: 'WordPress', icon: faWordpress },
  ];

  const skillCategories = [
    { title: 'Frontend Development', skills: frontend },
    { title: 'Backend Development', skills: backend },
    { title: 'Databases', skills: databases },
    { title: 'Cloud & DevOps', skills: cloudDevOps },
    { title: 'Tools & Methodologies', skills: toolsMethodologies },
    { title: 'CMS', skills: cms },
  ];

  return (
    <section className={styles.skillsContainer} id="skills">
      <h2 className={styles.h2Section}>Skills</h2>

      {skillCategories.map((category, index) => (
        <div key={index} className={styles.skillsCategory}>
          <h3 className={styles.categoryTitle}>{category.title}</h3>
          <div className={styles.skillsGrid}>
            {category.skills.map((skill) => (
              <div key={skill.id} className={styles.skillBadge}>
                <FontAwesomeIcon icon={skill.icon} className={styles.skillIcon} />
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;