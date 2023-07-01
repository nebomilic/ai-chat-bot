import { auth } from '@clerk/nextjs'
export async function autheticatedFetch(url: string, options?: RequestInit) {
  const { getToken } = auth()
  const token = await getToken({ template: 'supabase' })
  return fetch(url, {
    ...options,
    headers: { Authorization: `Bearer ${token}` },
  })
}
