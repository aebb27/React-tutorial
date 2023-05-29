import { useState } from 'react'
import { sculptureList } from './sculpture-data.js'

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  function next() {
    setIndex(index + 1)
  }

  function previous() {
    setIndex(index - 1)
  }

  function handleClick() {
    setShowMore(!showMore)
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
      <button onClick={handleClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  )
}