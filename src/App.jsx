import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import NavBar from './components/NavBar/NavBar';
import Experience from './components/Experience/Experencie'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className={`container-fluid  `} >
      <div className={`row`}>
        <div className={` col-sm-12 col-lg-4  `}>
        <NavBar />
        </div>
        <div className={` col-sm-12 col-lg-8  `}>
          <AboutMe />
          <Skills />
          <Education />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App