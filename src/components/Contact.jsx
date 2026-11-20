import { profile } from '../data'
import SectionTitle from './SectionTitle'

function Contact() {
  return (
    <section id="contact">
      <SectionTitle path="/contact" title="Contact" />
      <p>I'm open to entry-level opportunities. Feel free to reach out!</p>
      <ul>
        <li>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </li>
      </ul>
    </section>
  )
}

export default Contact