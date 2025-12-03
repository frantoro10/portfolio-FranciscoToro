import styles from "./AboutMe.module.css";
import perfilImg from "../../assets/img/perfil-img.jpg"

const AboutMe = () => {
  return (
    <section className={` ${styles["about-container"]}`} id="about-me"  >
      <article className={`${styles["about-article"]}`} >
    <p>
      Hi! I’m <strong>Francisco Toro</strong>, a Software Developer passionate about building end-to-end web solutions using the <strong>Python and JavaScript ecosystems</strong>.
    </p>

    <p>
      Unlike traditional development, I focus on bridging the gap between robust backends and dynamic user interfaces, integrating <strong>Artificial Intelligence</strong> to create smarter applications. My goal is to translate business needs into scalable technical realities using tools like <strong>FastAPI, React, NextJS, etc</strong>.
    </p>

    <p>
      I strongly believe that <strong>code quality</strong>—clean code, SOLID principles, and modular architecture— is the foundation that allows projects to grow without friction. I don't just write code; I build maintainable products.
    </p>

    <p>
      Currently, I’m building portfolio projects that explore the intersection of <strong>Web Development and AI</strong> (such as RAG implementations), applying my tech stack to solve practical problems.
    </p>

    <p>
      I’m a curious and collaborative person, convinced that <strong>clear communication and empathy</strong> are as crucial as technical skills. I’m looking for opportunities to contribute to a forward-thinking team while continuing to grow as a professional.
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
