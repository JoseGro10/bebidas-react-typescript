import { create } from 'zustand';
import { createRecipesSlice, RecipesSliceTypes } from './recipeSlice';

export const useAppStore = create<RecipesSliceTypes>((...a) => ({
    ...createRecipesSlice(...a)
}))