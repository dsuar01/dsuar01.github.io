function SectionTitle({ path, title }) {
  return (
    <div className="section-title">
      <p className="request">
        <span className="method">GET</span> {path}
        <span className="status">200 OK</span>
      </p>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionTitle