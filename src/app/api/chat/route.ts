import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { createClient } from '@supabase/supabase-js'
import { OpenAI } from 'langchain/llms/openai'
import { VectorDBQAChain } from 'langchain/chains'
import { StreamingTextResponse, LangChainStream } from 'ai'
import { CallbackManager } from 'langchain/callbacks'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const auth = {
    detectSessionInUrl: false,
    persistSession: false,
    autoRefreshToken: false,
  }
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth }
  )

  const vectorStore = await SupabaseVectorStore.fromExistingIndex(
    new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
    {
      client,
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

  chain.call({ query: prompt }).catch(console.error)
  return new StreamingTextResponse(stream)
}
