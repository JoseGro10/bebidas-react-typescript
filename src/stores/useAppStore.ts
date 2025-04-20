import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceTypes } from './recipeSlice'

export const useAppStore = create<RecipesSliceTypes>()(devtools((...a) => ({
    ...createRecipesSlice(...a)
})))