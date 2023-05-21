import { people } from './data.js'
import { getImageUrl } from './utils.js'

function ListPeople ({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              know for {person.accomplishment}
            </p>
          </li>
       )}
      </ul>
    </>
  )
}

export default function List () {
  const chemists = people.filter(person => person.profession === 'chemist'
    )
  
  const everyone = people.filter(person => person.profession !== 'chemist'
  )
  
  return (
    <>
      <article>
        <h1>Scientists</h1>
        <hr/>
        <ListPeople title="Chemists" people={chemists} />
        <ListPeople title="Everyone else" people={everyone} />
      </article>
    </>
  )
}