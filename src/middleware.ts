import { authMiddleware } from '@clerk/nextjs'
import { Route } from './types'

export default authMiddleware({
  publicRoutes: [Route.SignIn, `${Route.Api}/(.*)`],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
