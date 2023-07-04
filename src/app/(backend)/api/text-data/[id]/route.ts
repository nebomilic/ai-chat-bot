import { NextRequest, NextResponse } from 'next/server'
import { getAnonymousClient } from '@/app/(backend)/api/utils/supabase'

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
    .from('text_data')
    .select()
    .eq('id', id)
    .single()

  return NextResponse.json(data || error)
}

// /api/text-data/:id  deletes text by id
export async function DELETE(request: NextRequest, context: Context) {
  const { id } = context.params
  console.log('==> id', id)
  return NextResponse.json(
    { message: 'GET: All is good!' },
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}
