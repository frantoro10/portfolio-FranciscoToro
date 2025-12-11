import styles from './Education.module.css';

const Education = () => {
  const educationList = [
    {
      id: 1,
      title: "Higher Technical Degree in Software Development",
      institution: "Instituto Superior Politécnico Córdoba (ISPC)",
      period: "2023 - Present",
      status: "In Progress",
      description: "Comprehensive program covering full-stack development, software architecture, databases, and modern development methodologies.",
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "WordPress + PHP Development",
      issuer: "DGES Córdoba",
      date: "2025",
      certificateUrl: "/certificates/certificated-dges-intership.pdf"
    }
  ];

  return (
    <section className={styles.educationContainer} id="education">
      <h2 className={styles.h2Section}>Education & Certificates</h2>
      
      <div className={styles.educationCategory}>
        <h3 className={styles.categoryTitle}>Education</h3>
        {educationList.map((education) => (
          <article key={education.id} className={styles.educationCard}>
            <div className={styles.cardHeader}>
              <h4 className={styles.cardTitle}>{education.title}</h4>
              <span className={styles.statusBadge}>{education.status}</span>
            </div>
            <p className={styles.institution}>{education.institution}</p>
            <p className={styles.period}>{education.period}</p>
            <p className={styles.description}>{education.description}</p>
          </article>
        ))}
      </div>

      <div className={styles.educationCategory}>
        <h3 className={styles.categoryTitle}>Certifications</h3>
        {certifications.map((cert) => (
          <article key={cert.id} className={styles.certCard}>
            <div className={styles.certContent}>
              <h4 className={styles.certTitle}>{cert.title}</h4>
              <p className={styles.certIssuer}>{cert.issuer} • {cert.date}</p>
            </div>
            <a 
              href={cert.certificateUrl} 
              download 
              className={styles.downloadLink}
            >
              Download Certificate
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;