// Importaciones
import styles from './Experience.module.css'

const Experience = () => {
    const experienceList = [
        {
            id: 1,
            title: "DGES Córdoba – WordPress + PHP Development Internship",
            period: "2025 - Present",
            description: "Collaborated in the development of a new institutional portal version. Implemented features in WordPress with PHP and improved responsive design (Plugins). Implemented features in WordPress with PHP and improved responsive design."
        }

    ]

    return (
        <section id={`${styles['experience-container']}`}>
            <h2 class={styles["h2-section"]} >Professional Experience</h2>
            {experienceList.map(experience => {
                return (
                    <article key={experience.id} className={styles['experience-card']}>
                        <h3>{experience.title}</h3>
                        <p><strong>Period:</strong> {experience.period}</p>
                        <p>{experience.description}</p>
                    </article>
                )
            })}
        </section>
    );
};


export default Experience;