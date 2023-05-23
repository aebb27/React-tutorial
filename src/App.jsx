import { recipes } from './recipes-data.js'

function Recipe({ id, name, ingredients }) {
  return (
    <article>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(({id, name}) =>
          <li key={id}>{name}</li>
        )}
      </ul>
    </article>
  )
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe key={recipe.id} {...recipe} />
      )}
    </div>
  )
}