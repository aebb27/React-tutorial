import { people } from './data.js'
import { getImageUrl } from './utils.js'


export default function List () {
  const chemists = people.filter(person => person.profession === 'chemist')

  const listItems = chemists.map(chemist => 
      <li key={chemist.id}>
        <img
          src={getImageUrl(chemist)}
          alt={chemist.name}
        />
        <p>
          <b>{chemist.name}</b>
          {' ' + chemist.profession + ' '}
          known for {chemist.accomplishment}
        </p>
      </li>
  )
  return <ul>{listItems}</ul> 
}