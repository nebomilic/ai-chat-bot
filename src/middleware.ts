import { authMiddleware } from '@clerk/nextjs'
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export default authMiddleware({
  publicRoutes: ['/', '/sign-in', '/api/text-data', '/api/text-data/:id'], // api is public since we do authenticaton in the middleware (afterAuth)
  // since clerk authentication doesn't seem to work in the backend,
  // we pass the jwt in every call and validate it here
  async afterAuth(_auth, request, _event) {
    if (request.nextUrl.pathname.startsWith('/api')) {
      const token = await getToken({
        req: request,
        secret: process.env.CLERK_SECRET_KEY!,
        raw: true,
      })

      if (!token) {
        return new NextResponse(
          JSON.stringify({ success: false, message: 'authentication failed' }),
          { status: 401, headers: { 'content-type': 'application/json' } }
        )
      }
    }
  },
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
