import { allTextDataMock } from '../mock'
// /api/text-data/:id - gets text by id
type Context = {
  params: {
    id: string
  }
}
export async function GET(req: Request, context: Context) {
  const { id } = context.params
  const textData = allTextDataMock.find(
    (textData) => textData.id === Number(id)
  )
  return new Response(JSON.stringify(textData), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
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
