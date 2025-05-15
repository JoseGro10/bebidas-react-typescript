import { z } from 'zod'
import { CategoriesAPIResponse, DrinksAPIResponse, DrinkAPIReponse, SearchFilterSchema, RecipeAPIResponseSchema } from '../utils/recipes-schema'   

export type Categories = z.infer<typeof CategoriesAPIResponse> 
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIReponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>