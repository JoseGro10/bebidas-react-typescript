import { streamText } from "ai"
import { openRouter } from "../lib/ai"

export default {
    async generateRecipe(prompt: string){
        console.log('prompt AI Service', prompt)
        const result = streamText({
            model: openRouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt,
        })
        console.log('result', result)
        return result.textStream
    }
}