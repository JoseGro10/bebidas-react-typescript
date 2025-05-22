import { streamText } from "ai"
import { openRouter } from "../lib/ai"

export default {
    async generateRecipe(prompt: string){
        const result = streamText({
            model: openRouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt,
            system: 'Eres un bartender experto en cocteles. Tu tarea es crear recetas de cocteles a partir de los ingredientes que te doy. Si no puedes crear una receta, di que no puedes.',
            temperature: 0.7,
        })
        return result.textStream
    }
}