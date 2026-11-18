function ProjectCard({ title, tech, link, points }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <ul className="tech-list">
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <a href={link} target="_blank" rel="noreferrer">
        View on GitHub →
      </a>
    </article>
  )
}

export default ProjectCard