import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import { Categories, Drink, Drinks, SearchFilter } from "../types"


export type RecipesSliceTypes ={
    categories: Categories,
    drinks: Drinks,
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceTypes> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
       set({
            categories
       })
    },
    searchRecipes: async (filters: SearchFilter) => {
       const drinks = await getRecipes(filters)
       set({
            drinks
       })
       console.log(drinks)
    },
    selectRecipe: async (id) => {
        console.log('Desde selectRecipe ', id)
    }
})