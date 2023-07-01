import { NextResponse } from 'next/server'
import { getAuthenticatedClient } from '@/app/api/utils/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'

// /api/text-data - creates new text
export async function POST(req: Request) {
  return new Response(JSON.stringify({ message: 'POST: All is good!' }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}

// /api/text-data - gets all texts
export async function GET(request: NextApiRequest) {
  const supabase = await getAuthenticatedClient(request)
  const { data, error } = await supabase.from('text_data').select()

  return NextResponse.json(data || error)
}
