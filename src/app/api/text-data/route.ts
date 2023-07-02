import { NextRequest, NextResponse } from 'next/server'
import { getAuthenticatedClient } from '@/app/api/utils/supabase'

// /api/text-data - creates new text
export async function POST(request: NextRequest) {
  const supabase = await getAuthenticatedClient(request)
  const requestData = await request.json()
  const { data, error } = await supabase.from('text_data').insert(requestData)
  // TODO:
  // get inserted data id
  // send text to chat gpt to create embeddings
  // save embeddings to db, reference them by text id

  return NextResponse.json(data || error)
}

// /api/text-data - gets all texts
export async function GET(request: NextRequest) {
  const supabase = await getAuthenticatedClient(request)
  const { data, error } = await supabase.from('text_data').select()

  return NextResponse.json(data || error)
}
