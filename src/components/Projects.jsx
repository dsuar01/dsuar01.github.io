import { projects } from '../data'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'

function Projects() {
  return (
    <section id="projects">
      <SectionTitle path="/projects" title="Projects" />
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