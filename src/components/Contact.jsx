import { useState } from 'react'
import { profile } from '../data'
import SectionTitle from './SectionTitle'

function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact">
      <SectionTitle path="/contact" title="Contact" />
      <p>I'm open to entry-level opportunities. Feel free to reach out!</p>
      <ul>
        <li>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <button
            type="button"
            onClick={copyEmail}
            className={copied ? 'copy-btn copied' : 'copy-btn'}
          >
            {copied ? '201 Created' : 'Copy'}
          </button>
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