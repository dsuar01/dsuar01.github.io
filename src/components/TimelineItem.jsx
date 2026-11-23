function TimelineItem({ title, subtitle, place, date, details, points }) {
  return (
    <div className="timeline-item">
      <span className="timeline-date">{date}</span>
      <h3>{title}</h3>
      <p className="timeline-subtitle">
        {subtitle} · {place}
      </p>
      {details && <p className="timeline-details">{details}</p>}
      {points && (
        <ul className="points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TimelineItem