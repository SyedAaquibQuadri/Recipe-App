import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("") 
    const [recipeShown, setRecipeShown] = React.useState(false)

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        console.log("Fetched Recipe:", recipeMarkdown)
        setRecipe(recipeMarkdown)        
        setRecipeShown(true)              
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                ingredients={ingredients}
                getRecipe={getRecipe}
                />
            }

            {/* Render ClaudeRecipe with recipe content */}
            {recipeShown && <ClaudeRecipe content={recipe} />}
        </main>
    )
}
