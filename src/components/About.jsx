import { profile } from '../data'

function About() {
  return (
    <section id="about">
      <h2>About me</h2>
      <p>{profile.summary}</p>
    </section>
  )
}

export default About