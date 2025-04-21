import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import { Categories, SearchFilter } from "../types"


export type RecipesSliceTypes ={
    categories: Categories,
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
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
    searchRecipes: async (filters: SearchFilter) => {
        // Implement search logic here
       await getRecipes(filters)
    }
})