import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceTypes } from './recipeSlice'
import { createFavoritesSlice, FavoriteSliceType } from './favoriteSlice'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice'
import { AISlice, createAISlice } from './aiSlice'

export const useAppStore = create<RecipesSliceTypes & FavoriteSliceType & NotificationSliceType & AISlice>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
})))