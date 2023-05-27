function Item({ name, isPacked }) {
  return (
    <li>{name} {isPacked && ' ✔'}</li> {/* This is read as If isPacked then render the checkmark, otherwise, render nothing */}
  )
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  )
}