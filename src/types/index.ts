import { z } from 'zod'
import { CategoriesAPIResponse, DrinksAPIResponse, SearchFilterSchema } from '../utils/recipes-schema'   

export type Categories = z.infer<typeof CategoriesAPIResponse> 
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>