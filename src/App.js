import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  
  const RecipeDelete = (indexToDelete) => {
    const filteredList = recipes.filter(
    (recipe, index) => index !== indexToDelete)
      setRecipes(filteredList)
  }
  
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} RecipeDelete={RecipeDelete} />
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}

export default App;
