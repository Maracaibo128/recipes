import React from "react";

  // TODO: Create at least one additional component that is used by this component.


function RecipeView({recipe, RecipeDelete}) {
  return (
      <tr className="row">
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td className="photoGoesHere">
          <img src={recipe.photo} alt="" className="photoGoesHere"/>
      </td>
      <td className="contenttd">
        <p>{(recipe.ingredients)}</p>
      </td>
      <td className="contenttd">
        <p>{(recipe.preparation)}</p>
      </td>
      <td>
      <button name="delete" onClick={RecipeDelete}>Delete</button>
      </td>
      </tr>
  )
}


//changed it from RecipeList() to RecipeList({recipes, RecipeDelete})
function RecipeList({recipes, RecipeDelete}) {
  // TODO: Display the list of recipes using the structure of table that is provided.

  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  
  const rows = recipes.map((recipe, index) => (
  <RecipeView
    key={index}
    recipe={recipe}
    RecipeDelete={() => RecipeDelete(index)}
  />
  )
                          )
  
  
  //so that the user can actually read the list of recipes
  //i gave the table row in the table head the className of theader, and then since it only had Name and Actions in it, i went ahead and added Cuisine, Photo, Ingredients, and Preparation
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="theader">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="trows">
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
