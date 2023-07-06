import { createClient } from '@supabase/supabase-js'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { TableName } from '../../types'

export function getAnonymousClient() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
    {
      auth: {
        detectSessionInUrl: false,
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  )
  return supabase
}

export function getVectorStore() {
  const supabase = getAnonymousClient()
  return SupabaseVectorStore.fromExistingIndex(
    new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
    {
      client: supabase,
      tableName: TableName.Documents,
      queryName: 'match_documents',
    }
  )
}

export function saveTextToVector(
  text: string,
  metadata?: { [key: string]: number | string }
) {
  const supabase = getAnonymousClient()
  return SupabaseVectorStore.fromTexts(
    [text],
    [metadata],
    new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
    {
      client: supabase,
      tableName: TableName.Documents,
    }
  )
}
