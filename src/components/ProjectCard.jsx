function ProjectCard({ title, tech, link, points }) {
  const slug = title.toLowerCase().replaceAll(' ', '-')

  return (
    <article className="project-card">
      <p className="request">
        <span className="method">GET</span> /projects/{slug}
        <span className="status">200 OK</span>
      </p>
      <h3>{title}</h3>
      <ul className="points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <ul className="chips">
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <a href={link} target="_blank" rel="noreferrer" className="btn">
        View code
      </a>
    </article>
  )
}

export default ProjectCard