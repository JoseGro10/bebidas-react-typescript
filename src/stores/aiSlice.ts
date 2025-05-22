import { StateCreator } from "zustand"
import AIService from "../services/AIService"

export type AISliceType = {
    recipe: string,
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice : StateCreator<AISliceType, [], [], AISliceType> = (set) => ({
    recipe: '',
    generateRecipe: async (prompt) => {
        const data = await AIService.generateRecipe(prompt)
        for await (const textPart of data){
            set((state) => ({
                recipe: state.recipe + textPart,
            }))
        }
    }
})