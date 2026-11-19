import { experience } from '../data'
import TimelineItem from './TimelineItem'

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
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