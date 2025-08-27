import styles from "./AboutMe.module.css";
import perfilImg from "../../assets/img/perfil-img.png"

const AboutMe = () => {
  return (
    <section className={` ${styles["about-container"]}  `}>
      <article className={`${styles["about-article"]}`} id="about-me">
        <p>
          Hi! I’m <strong>Francisco Toro</strong>, a Software Developer focused on applying technology to solve real problems and create a positive impact.
        </p>

        <p>
          I specialize in building robust and scalable web applications, working with <strong>React, Angular, and Next.js</strong> on the front-end, and <strong>Django, FastAPI, Node.js, and WordPress</strong> on the back-end. My goal is to understand business needs and translate them into efficient, maintainable, and valuable technical solutions.
        </p>

        <p>
          I enjoy turning ideas into solid products. I strongly believe that <strong>code quality</strong>—clean code, best practices, and solid architecture—is the foundation that allows projects to grow and adapt without friction.
        </p>

        <p>
          Currently, I’m building portfolio projects aimed at solving practical needs, applying my tech stack to create solutions with purpose.
        </p>

        <p>
          I’m a curious and collaborative person, convinced that <strong>clear communication and empathy</strong> are as crucial as technical skills. I’m looking for opportunities where I can contribute my knowledge while growing alongside a team that shares the vision of building technology with purpose.
        </p>

        <p>
          Outside of tech, I’m passionate about football and basketball, and I enjoy a good cup of coffee while discussing ideas or solving problems.
        </p>
      </article>


      <div className={` ${styles["about-img"]} `}>
        <img src={perfilImg} alt="Profile" />
      </div>
    </section>
  );
};

export default AboutMe;
