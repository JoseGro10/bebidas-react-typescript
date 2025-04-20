import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category = {}

export type RecipesSliceTypes ={
    categories: Category[]
    fetchCategories: () => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceTypes> = () => ({
    categories: [],
    fetchCategories: async () => {
        console.log("Fetching categories...")
        getCategories()
    }
})