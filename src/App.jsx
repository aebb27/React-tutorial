import { recipes } from './recipes-data.js'

function ListIngredients({ recipe }) {
  const { name, ingredients } = recipe
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
        <ListIngredients key={recipe.id} recipe={recipe} />
      )}
    </div>
  )
}