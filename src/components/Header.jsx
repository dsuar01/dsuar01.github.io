import { useEffect, useState } from 'react'
import { profile } from '../data'
import photo from '../assets/profile.jpg'

const REQUEST = '/darien'

function Header() {
  const [typed, setTyped] = useState('')
  const done = typed === REQUEST

  useEffect(() => {
    if (done) return
    const timer = setTimeout(() => {
      setTyped(REQUEST.slice(0, typed.length + 1))
    }, 90)
    return () => clearTimeout(timer)
  }, [typed, done])

  return (
    <header className="hero">
      <p className="request">
        <span className="method">GET</span> {typed}
        {done && <span className="status">200 OK</span>}
      </p>
      <div className={done ? 'response show' : 'response'}>
        <img src={photo} alt={profile.name} className="avatar" />
        <div>
          <h1>{profile.name}</h1>
          <p>{profile.role}</p>
          <p className="location">{profile.location}</p>
        </div>
      </div>
    </header>
  )
}

export default Header