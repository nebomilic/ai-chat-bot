import { NextRequest, NextResponse } from 'next/server'
import { getAuthenticatedClient } from '@/app/api/utils/supabase'
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'

// /api/text-data - creates new text
export async function POST(request: NextRequest) {
  const supabase = await getAuthenticatedClient(request)
  const requestData = await request.json()
  const { data, error } = await supabase
    .from('text_data')
    .insert(requestData)
    .select()
    .single()

  if (!data || !data.id) {
    return NextResponse.json(
      { message: 'Error writing to database' },
      { status: 500 }
    )
  }

  await SupabaseVectorStore.fromTexts(
    [requestData.text],
    [{ text_id: data.id }],
    new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
    {
      client: supabase,
      tableName: 'documents',
    }
  )

  return NextResponse.json(data || error)
}

// /api/text-data - gets all texts
export async function GET(request: NextRequest) {
  const supabase = await getAuthenticatedClient(request)
  const { data, error } = await supabase.from('text_data').select()

  return NextResponse.json(data || error)
}
