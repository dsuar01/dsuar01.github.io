import { profile } from '../data'
import photo from '../assets/profile.jpg'

function Header() {
  return (
    <header className="hero">
      <p className="request">
        <span className="method">GET</span> /darien
        <span className="status">200 OK</span>
      </p>
      <div className="response">
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