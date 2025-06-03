import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
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
      id: 2,
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
        id: 3,
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

