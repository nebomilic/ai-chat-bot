// /api/text-data - creates new text

import { allTextDataMock } from './mock'

//
export async function POST(req: Request) {
  return new Response(JSON.stringify({ message: 'POST: All is good!' }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}

// /api/text-data - gets all texts
export async function GET(req: Request) {
  return new Response(JSON.stringify(allTextDataMock), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}
