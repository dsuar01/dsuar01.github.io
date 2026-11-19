function TimelineItem({ title, subtitle, place, date, details, points }) {
  return (
    <div className="timeline-item">
      <div className="timeline-header">
        <h3>{title}</h3>
        <span className="timeline-date">{date}</span>
      </div>
      <p className="timeline-subtitle">
        {subtitle} · {place}
      </p>
      {details && <p>{details}</p>}
      {points && (
        <ul>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TimelineItem