import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import { Categories } from "../types"


export type RecipesSliceTypes ={
    categories: Categories,
    fetchCategories: () => Promise<void>
    searchRecipes: () => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceTypes> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
       set({
            categories
       })
    },
    searchRecipes: async () => {
        // Implement search logic here
    }
})