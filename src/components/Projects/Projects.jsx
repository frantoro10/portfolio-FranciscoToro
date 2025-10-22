import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Automatic E-book Generator with AI',
      img: '/projects/github-logo.webp',
      description: 'This project is a tool that allows you to generate PDF e-books from a topic and target audience. It uses language models to create the index and content of each chapter, and converts them into a clean and well-structured PDF.',
      tec1: "FastAPI",
      tec2: "OpenRouter - Mistral",
      tec3: "Weasyprint",
      github: 'https://github.com/frantoro10/ebook-generator',
      url: 'https://github.com/frantoro10/ebook-generator',
    },
    {
      id: 2,
      title: 'Task manager',
      img: '/projects/task-manager.png',
      description: 'Task Manager is a minimal full-stack application to help you organize your daily tasks efficiently. It features a clean and modern interface built with Next.js, TypeScript, TailwindCSS and a simple Express.js backend. Tasks are stored in a local JSON file, making it ideal for educational purposes or quick demos. For personal or production use, I recommend integrating a proper database for data persistence.',
      tec1: 'TypeScript',
      tec2: 'Next.js',
      tec3: 'Express.js',
      github: 'https://github.com/frantoro10/task-manager',
      url: 'https://task-manager-1y38.vercel.app/',
    },
    {
      id: 3,
      title: 'Mini Business App for Product Management',
      img: '/projects/mini-business-app.jpg',
      description:
        'The app is built with React for the frontend and Firebase for the backend, ensuring a responsive and efficient user experience. It is a system aimed at helping a business owner better visualize their products and have the ability to add or change product prices. It includes filters and a price calculator per product. The owner can use this basic system to also calculate the prices of products requested by customers on the spot. A barcode scanner is planned to be implemented into the system.',
      tec1: "React",
      tec2: "Firebase",
      tec3: "Bootstrap",
      github: 'https://github.com/frantoro10/Kiosco-Familiar',
      url: 'https://mini-business.vercel.app/',
    },
    {
      id: 4,
      title: 'Two automated bots: Binance Futures Trading and World of Warcraft Auction House data analysis',
      img: '/projects/automated_bot.jpg',
      description:
        'A Python project featuring two automation bots: one for algorithmic trading on Binance Futures using technical indicators and risk management, and another for searching and analyzing item deals in the World of Warcraft Auction House via the Blizzard API. Both bots are fully configurable and designed for efficiency and ease of use.',
      tec1: "Python",
      tec2: "Binance API",
      tec3: "Blizzard API",
      github: 'https://github.com/frantoro10/automated-bots-python',
      url: 'https://github.com/frantoro10/automated-bots-python',
    }

  ];

  return (
    <section className={`${styles["project-container"]} `} id="projects">
      <h2 class={styles["h2-section"]}>My Projects</h2>
      {projects.map((project) => (
        <article className={`${styles["card-container"]}`} key={project.id}>

          <div className={`${styles["card-img"]}`}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.img}
                alt={`Screenshot of ${project.title}`}
                className={styles.image}
              />
            </a>
          </div>

          <div className={`${styles["card-details"]}`}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className={`${styles["card-li"]}`}>
              <ul>
                <li>{project.tec1}</li>
                <li>{project.tec2}</li>
                <li>{project.tec3}</li>
              </ul>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              View on GitHub
            </a>

          </div>
        </article>
      ))}

    </section>
  );
};

export default Projects;

