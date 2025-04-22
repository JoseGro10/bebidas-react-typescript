import { z } from 'zod'
import { CategoriesAPIResponse, SearchFilterSchema } from '../utils/recipes-schema'   

export type Categories = z.infer<typeof CategoriesAPIResponse> 
export type SearchFilter = z.infer<typeof SearchFilterSchema>