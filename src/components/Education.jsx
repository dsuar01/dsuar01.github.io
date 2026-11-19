import { education, certifications } from '../data'
import TimelineItem from './TimelineItem'

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      {education.map((school) => (
        <TimelineItem
          key={school.school}
          title={school.degree}
          subtitle={school.school}
          place={school.place}
          date={school.date}
          details={school.details}
        />
      ))}

      <h3>Certifications</h3>
      <ul>
        {certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    </section>
  )
}

export default Education