import styles from "./AboutMe.module.css";
import perfilImg from "../../assets/img/perfil-img.jpg"

const AboutMe = () => {
  return (
    <section className={` ${styles["about-container"]}  `}>
      <article className={`${styles["about-article"]}`} id="about-me">
        <p>
         I'm a developer with experience in <strong>Front-End</strong> (JavaScript, TypeScript, React, NextJS) and <strong>Back-End</strong> (Python, Node.js, FastAPI, Django (Learning)), as well as <strong>databases</strong> such as MySQL, PostgreSQL, and Firebase. I'm currently studying Software Development at ISPC, where I continue to acquire valuable skills for my professional growth.
        </p>

        <p>
          Technology fuels my passion. I'm driven by a constant desire to improve and expand my knowledge, with a focus on <strong>Full-Stack Development</strong>. This is the career path I've chosen and the one I continue to explore and deepen year after year.
        </p>

        <p>
          I also enjoy learning languages and practice English daily to sharpen my communication skills. Currently, I have a <strong>B2</strong> level in Listening and Speaking, and a C2 in Reading.{" "}
          <a
            href="https://cert.efset.org/m8aPVz"
            target="_blank"
            rel="noopener noreferrer"
          >
            EF SET Certificate
          </a>
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
