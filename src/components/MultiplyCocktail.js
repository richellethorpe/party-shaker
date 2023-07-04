import React from "react";

function NewMultiplyCocktailForm() {
  function handleNewMultiplyCocktailForm(event){
    event.preventDefault();

  }

  return (
    <>
    <form onSubmit={handleNewMultiplyCocktailForm}>
      <input
        type='text'
        name="ingredient-1"
        placeholder="ingredient 1" />
      <input
        type='number'
        name="ingredient-1-oz"
        placeholder="ounces" />
        <br></br>
      <input
        type='text'
        name="ingredient-2"
        placeholder="ingredient 2" />
      <input
        type='number'
        name="ingredient-2-oz"
        placeholder="ounces" />
      <br></br>
      <input
        type='int'
        name="ingredient-3"
        placeholder="ingredient 3" />
      <input
        type='number'
        name="ingredient-3-oz"
        placeholder="ounces" />
      <br></br>
      <input
        type='text'
        name="ingredient-4"
        placeholder="ingredient 4" />
      <input
        type='number'
        name="ingredient-4-oz"
        placeholder="ounces" />
      <br></br>
      <button type='submit'>Multiply Me</button>
    </form>
    </>
  );
}

export default NewMultiplyCocktailForm;