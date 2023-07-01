import { NextResponse } from 'next/server'
import { getAuthenticatedClient } from '@/app/api/utils/supabase'
import { NextApiRequest } from 'next'

// /api/text-data/:id - gets text by id
type Context = {
  params: {
    id: string
  }
}
export async function GET(request: NextApiRequest, context: Context) {
  const { id } = context.params
  const supabase = await getAuthenticatedClient(request)
  const { data, error } = await supabase
    .from('text_data')
    .select()
    .eq('id', id)
    .single()

  return NextResponse.json(data || error)
}

// /api/text-data/:id  deletes text by id
export async function DELETE(req: Request) {
  return new Response(JSON.stringify({ message: 'GET: All is good!' }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}
