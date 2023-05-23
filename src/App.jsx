import { Fragment } from 'react'

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>
        <Fragment key={index}>
          {index > 0 && <hr />} {/* If index > 0 is true then (&&) <hr /> will render, otherwise nothing will render */}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  );
}