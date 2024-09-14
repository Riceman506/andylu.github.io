import styles from './ProjectsStyles.module.css';
import starwars from '../../assets/StarWars.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 id="projectsTitle" className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={starwars} link="https://github.com/Riceman506/StarWars" h3="Star Wars Movie Picker" p="Utilizing an API, this website shows you the various ways that you can watch the Star Wars trilogies."/>
        </div>
    </section>
  )
}

export default Projects