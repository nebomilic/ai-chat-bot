import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { OpenAI } from 'langchain/llms/openai'
import { VectorDBQAChain } from 'langchain/chains'
import { StreamingTextResponse, LangChainStream } from 'ai'
import { CallbackManager } from 'langchain/callbacks'
import { getAnonymousClient } from '../utils/supabase'

const promptInstruction = ''

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const optimizedPrompt = `${promptInstruction}${prompt}`
  const supabase = getAnonymousClient()

  const vectorStore = await SupabaseVectorStore.fromExistingIndex(
    new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
    {
      client: supabase,
      tableName: 'documents',
      queryName: 'match_documents',
    }
  )

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
