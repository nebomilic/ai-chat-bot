import { OpenAI } from 'langchain/llms/openai'
import { VectorDBQAChain } from 'langchain/chains'
import { StreamingTextResponse, LangChainStream } from 'ai'
import { CallbackManager } from 'langchain/callbacks'
import { getVectorStore } from '../utils/supabase'

const promptInstruction = ''

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const optimizedPrompt = `${promptInstruction}${prompt}`

  const vectorStore = await getVectorStore()

  const { stream, handlers } = LangChainStream()

  const model = new OpenAI({
    streaming: true,
    modelName: 'gpt-3.5-turbo-16k',
    openAIApiKey: process.env.OPENAI_API_KEY,
    callbackManager: CallbackManager.fromHandlers(handlers),
  })

  const chain = VectorDBQAChain.fromLLM(model, vectorStore, {
    k: 1,
    returnSourceDocuments: false,
  })

  chain.call({ query: optimizedPrompt }).catch(console.error)
  return new StreamingTextResponse(stream)
}
