// Importaciones
import styles from './Experience.module.css'

const Experience = () => {
    const experienceList = [
        {
            id: 1,
            title: "DGES Córdoba – WordPress + PHP Development Internship",
            period: "2025 - Present",
            description: "Contributed to the new institutional portal redesign using WordPress and PHP. Developed and customized plugins to extend site functionality. Improved mobile responsiveness and integrated JavaScript-based interactive components"
        }

    ]

    return (

        <section className={`${styles['experience-container']}`} id='experience'>
            <h2 class={styles["h2-section"]} id="experience" >Professional Experience</h2>
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