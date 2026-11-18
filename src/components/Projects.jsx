import { projects } from '../data'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          tech={project.tech}
          link={project.link}
          points={project.points}
        />
      ))}
    </section>
  )
}

export default Projects