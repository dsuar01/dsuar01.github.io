import { skills } from '../data'
import SectionTitle from './SectionTitle'

function Skills() {
  return (
    <section id="skills">
      <SectionTitle path="/skills" title="Skills" />
      {skills.map((category) => (
        <div key={category.group}>
          <h3>{category.group}</h3>
          <ul className="chips">
            {category.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Skills