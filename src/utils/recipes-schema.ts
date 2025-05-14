import { z } from 'zod'

export const CategoriesAPIResponse = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string(),
        })
    )
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string(),
})

export const DrinkAPIReponse = z.object({
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    idDrink: z.string(),
})

export const DrinksAPIResponse = z.object({
    drinks: z.array(DrinkAPIReponse)
}) 
