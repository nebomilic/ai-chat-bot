import { NextRequest, NextResponse } from 'next/server'
import {
  getAnonymousClient,
  saveTextToVector,
} from '@/app/(backend)/api/utils/supabase'
import { TableName } from '../../types'

// /api/text-data - creates new text
export async function POST(request: NextRequest) {
  const supabase = await getAnonymousClient()
  const requestData = await request.json()
  const { data, error } = await supabase
    .from(TableName.TextData)
    .insert(requestData)
    .select()
    .single()

  if (!data || !data.id) {
    return NextResponse.json({
      message: 'Error writing to database',
      status: 500,
    })
  }

  await saveTextToVector(requestData.text, { text_id: data.id })

  return NextResponse.json(data || error)
}

// /api/text-data - gets all texts
export async function GET(request: NextRequest) {
  const supabase = await getAnonymousClient()
  const { data, error } = await supabase.from(TableName.TextData).select()

  return NextResponse.json(data || error)
}
