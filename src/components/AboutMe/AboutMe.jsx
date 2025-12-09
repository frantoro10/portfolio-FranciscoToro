import styles from "./AboutMe.module.css";
import perfilImg from "../../assets/img/perfil-img.jpg"

const AboutMe = () => {
  return (
    <section className={` ${styles["about-container"]}`} id="about-me"  >
      <article className={`${styles["about-article"]}`} >
        <p>
          Junior Full Stack Developer specializing in the Python and JavaScript ecosystems. I build end-to-end web solutions using React, Next.js, Angular and FastAPI/Django, focusing on clean code and SOLID principles. I possess practical experience in corporate web restructuring using WordPress/PHP and a strong interest in modernizing applications via AI integrations like RAG and Chatbots. Currently pursuing a Higher Technical Degree in Software Development.
        </p>

        <p>
          I'm a curious and collaborative person, convinced that <strong>clear communication and empathy</strong> are as crucial as technical skills. I'm looking for opportunities to contribute to a forward-thinking team while continuing to grow as a professional.
        </p>

        <p>
          Outside of tech, I'm passionate about football and basketball, and I enjoy a good cup of coffee while discussing ideas or solving problems.
        </p>
      </article>

      <div className={` ${styles["about-img"]} `}>
        <img src={perfilImg} alt="Profile" />
      </div>
    </section>
  );
};

export default AboutMe;
