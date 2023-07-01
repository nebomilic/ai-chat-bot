import { createClient } from '@supabase/supabase-js'
import { getToken } from 'next-auth/jwt'
import { NextApiRequest } from 'next'

export async function getAuthenticatedClient(request: NextApiRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.CLERK_SECRET_KEY!,
    raw: true,
  })
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
    {
      auth: {
        persistSession: false,
      },
      global: { headers: { Authorization: `Bearer ${token}` } },
    }
  )

  return supabase
}
