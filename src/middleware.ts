import { authMiddleware } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export default authMiddleware({
  publicRoutes: ['/', '/sign-in'],
  afterAuth(auth, req, evt) {
    // always redirect from /my to /my/bot-data
    if (req.nextUrl.pathname === '/my') {
      return NextResponse.redirect(new URL('/my/bot-data', req.url))
    }
  },
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
