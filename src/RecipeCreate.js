import React, { useState } from "react";
//passed {recipes, setRecipes} to RecipeCreate
function RecipeCreate({recipes, setRecipes}) {

  //starting with the initialFormState
  //The app will display a recipe's name, cuisine, photo, ingredients, preparation instructions and action buttons (edit and delete).  so i'll start with those first five
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  //Now to add handlers
   // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const [form, setForm] = useState({...initialFormState});
  
  const handleChange = ({target}) => {
    setForm({...form, 
            [target.name]: target.value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setRecipes([...recipes, form])
    setForm({...initialFormState})
  }
  
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  //i added the onSubmit attribute to the <form> element
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="row">
            <td>
              <label htmlFor="name"></label>
              <input 
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required={true}
              onChange={handleChange}
              value={form.name}
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required={true}
                onChange={handleChange}
                value={form.cuisine}
                />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={form.photo}
                />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                required={true}
                onChange={handleChange}
                value={form.ingredients}
                autoFocus="on"
                />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea 
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                required={true}
                onChange={handleChange}
                value={form.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
