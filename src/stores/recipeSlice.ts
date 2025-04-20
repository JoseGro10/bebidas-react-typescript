import { StateCreator } from "zustand"

type Category = {}

export type RecipesSliceTypes ={
    categories: Category[]
}

export const createRecipesSlice : StateCreator<RecipesSliceTypes> = () => ({
    categories: []
})