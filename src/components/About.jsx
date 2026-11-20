import { profile } from '../data'
import SectionTitle from './SectionTitle'

function About() {
  return (
    <section id="about">
      <SectionTitle path="/about" title="About me" />      <p>{profile.summary}</p>
    </section>
  )
}

export default About