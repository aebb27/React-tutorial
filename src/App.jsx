import { useState } from 'react'
import './App.css'

function Header({ title }) {
  return <h1>{title ? title : 'List'}</h1>
}

export default function App() {
  const [likes, setLikes] = useState(0)
  const names =['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  function handleClick() {
    setLikes(likes + 1)
  }
  
  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like ({likes}) </button>
    </div>
  )

}