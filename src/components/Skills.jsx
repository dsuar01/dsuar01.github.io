import { skills } from '../data'

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {skills.map((category) => (
        <div key={category.group}>
          <h3>{category.group}</h3>
          <ul>
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