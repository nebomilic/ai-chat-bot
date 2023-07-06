import { NextRequest, NextResponse } from 'next/server'
import { getAnonymousClient } from '@/app/(backend)/api/utils/supabase'
import { TableName } from '@/app/(backend)/types'

// /api/text-data/:id - gets text by id
type Context = {
  params: {
    id: string
  }
}
export async function GET(request: NextRequest, context: Context) {
  const { id } = context.params
  const supabase = await getAnonymousClient()
  const { data, error } = await supabase
    .from(TableName.TextData)
    .select()
    .eq('id', id)
    .single()

  return NextResponse.json(data || error)
}

// /api/text-data/:id  deletes text by id
export async function DELETE(request: NextRequest, context: Context) {
  const { id } = context.params
  const supabase = await getAnonymousClient()
  const { data: textData, error: textError } = await supabase
    .from(TableName.TextData)
    .delete()
    .eq('id', id)

  const { data: metadataData, error: metadataError } = await supabase
    .from(TableName.Documents)
    .delete()
    .eq('metadata->text_id', id)

  return !metadataError && !textData
    ? NextResponse.json({
        status: 204,
      })
    : NextResponse.json({
        message: 'Error deleting text data from the database',
        status: 500,
      })
}
