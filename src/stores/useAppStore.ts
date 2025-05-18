import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceTypes } from './recipeSlice'
import { createFavoritesSlice, FavoriteSliceType } from './favoriteSlice'

export const useAppStore = create<RecipesSliceTypes & FavoriteSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a)
})))