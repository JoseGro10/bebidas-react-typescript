import { StateCreator } from "zustand"
import AIService from "../services/AIService"

export type AISliceType = {
    recipe: string,
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice : StateCreator<AISliceType, [], [], AISliceType> = (set) => ({
    recipe: '',
    generateRecipe: async (prompt) => {
        console.log('prompt', prompt)
        const data = await AIService.generateRecipe(prompt)
        console.log('data', data)
        for await (const textPart of data){
            console.log('textPart', textPart)
            set((state) => ({
                recipe: state.recipe + textPart,
            }))
        }
    }
})