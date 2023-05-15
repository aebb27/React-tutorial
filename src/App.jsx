import './App.css'

function Header({ title }) {
  return <h1>{title ? title : 'List'}</h1>
}

export default function App() {
  const names =['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
  
  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )

}
