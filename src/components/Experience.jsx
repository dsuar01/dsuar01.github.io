import { experience } from '../data'
import TimelineItem from './TimelineItem'
import SectionTitle from './SectionTitle'

function Experience() {
  return (
    <section id="experience">
      <SectionTitle path="/experience" title="Experience" />
      {experience.map((job) => (
        <TimelineItem
          key={job.company}
          title={job.role}
          subtitle={job.company}
          place={job.place}
          date={job.date}
          points={job.points}
        />
      ))}
    </section>
  )
}

export default Experience