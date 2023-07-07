import { authMiddleware } from '@clerk/nextjs'
import { Route } from './app/types'

export default authMiddleware({
  publicRoutes: [Route.SignIn],
  debug: true,
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
