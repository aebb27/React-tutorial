import './App.css'
import { getImageUrl } from './utils.js'

function Profile({ person, size = 70 }) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img className="avatar" src={getImageUrl(person.imageId)} alt={person.name} width={size} height={size} />
      <ul>
        <li>
          <b>Profession:</b> {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b> ({person.awards.join(', ')})
        </li>
        <li>
          <b>Discovered:</b> {person.discover}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  const people = [
        {name: 'Maria Skłodowska-Curie', imageId:'szV5sdG', profession: 'physicist and chemist', awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'], discover: 'polonium (element)'}, 
    {name: 'Katsuko Saruhashi', imageId: 'YfeOqp2', profession: 'geochemist', awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'], discover: 'a method for measuring carbon dioxide in seawater'}
  ]

  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person={people[0]} />
      <Profile person={people[1]} />
    </div>
  )
}