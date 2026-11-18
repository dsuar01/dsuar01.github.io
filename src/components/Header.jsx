import { profile } from '../data'

function Header() {
  return (
    <header>
      <h1>{profile.name}</h1>
      <p>{profile.role}</p>
    </header>
  )
}

export default Header