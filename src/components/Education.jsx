import { education, certifications } from '../data'
import TimelineItem from './TimelineItem'
import SectionTitle from './SectionTitle'

function Education() {
  return (
    <section id="education">
      <SectionTitle path="/education" title="Education" />
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