import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
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
      id: 2,
      title: 'Two automated bots: Binance Futures Tranding and World of Warcraft Auction House data analysis', 
      img: '/projects/automated_bot.jpg',
      description:
        'A Python project featuring two automation bots: one for algorithmic trading on Binance Futures using technical indicators and risk management, and another for searching and analyzing item deals in the World of Warcraft Auction House via the Blizzard API. Both bots are fully configurable and designed for efficiency and ease of use.',
      tec1: "Python",
      tec2: "Binance API",
      tec3: "Blizzard API",  
      github: 'https://github.com/frantoro10/automated-bots-python',
      url: 'https://github.com/frantoro10/automated-bots-python',
    }, 

    {
      id: 3,
      title: 'E-commerce',
      img: '/projects/ecommerce-react.jpg',
      description:
        'Simulation of a nearly complete E-commerce from the visual side. The user can browse, view, and filter products, as well as add them to the cart. They can also view product details with an image gallery and see prices with their corresponding promotional options for different payment methods (installments, etc.).',
      tec1: "React",
      tec2: "Firebase",
      tec3: "Bootstrap",  
      github: 'https://github.com/frantoro10/Ecommerce-ReactJS',
      url: 'https://ecommerce-react-js-umber.vercel.app/',
    },
    {
      id: 4,
      title: 'Mini Business System',
      img: '/projects/mini-business-app.jpg',
      description:
        'Test system aimed at helping a business owner better visualize their products and have the ability to add or change product prices. It includes filters and a price calculator per product. The owner can use this basic system to also calculate the prices of products requested by customers on the spot. A barcode scanner is planned to be implemented into the system.',
      tec1: "React",
      tec2: "Firebase",
      tec3: "Bootstrap",  
      github: 'https://github.com/frantoro10/Kiosco-Familiar',
      url: 'https://mini-business.vercel.app/',
    },
    {
      id: 5,
      title: 'investment application ',
      img: '/projects/github-logo.webp',
      description: 'ARGBroker is a console-based stock investment application that allows users to simulate buying and selling stocks, visualize their portfolio, and manage user accounts in a simple, educational environment.',
      tec1: "Python",
      tec2: "MySQL",
      tec3: "DAO",
      github: 'https://github.com/frantoro10/project-tecnicatura-argbroker',
      url: 'https://github.com/frantoro10/project-tecnicatura-argbroker',
    }
  ];

  return (
    <section className={`${styles["project-container"]} `} id="projects">
      
      
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

