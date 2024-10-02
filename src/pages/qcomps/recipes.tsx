export const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: new Set(["tomatoes", "cucumber", "onion", "olives", "feta"]),
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: new Set([
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ]),
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: new Set([
      "chickpeas",
      "olive oil",
      "garlic cloves",
      "lemon",
      "tahini",
    ]),
  },
];

function IngredientItemList({ ingredients }: { ingredients: Set<string> }) {
  return (
    <ul>
      {Array.from(ingredients).map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
}

export default function RecipeList() {
  const listItems = recipes.map((recipe) => (
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <IngredientItemList ingredients={recipe.ingredients} />
    </div>
  ));
  return (
    <div>
      <h1>Recipes</h1>
      {listItems}
    </div>
  );
}
