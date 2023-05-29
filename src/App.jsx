import { useState } from 'react'
import { sculptureList } from './sculpture-data.js'

export default function Gallery() {
  const [index, setIndex] = useState(0)

  function next() {
    setIndex(index + 1)
  }

  function previous() {
    setIndex(index - 1)
  }

  let sculpture = sculptureList[index]

  return (
    <>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
      <h2>
        <i>{sculpture.name} </i> by {sculpture.artist}
      </h2>
      <h3>({index + 1} of {sculptureList.length})</h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>{sculpture.description}</p>
    </>
  )
}