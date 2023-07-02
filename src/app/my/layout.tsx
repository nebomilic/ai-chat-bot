import { RedirectToSignIn, currentUser } from '@clerk/nextjs'
import { PropsWithChildren } from 'react'
import Navigation from '@/components/Navigation'
import PopupManager from '@/components/PopupManager'

export default async function Layout({ children }: PropsWithChildren) {
  const user = await currentUser()
  if (!user) {
    return <RedirectToSignIn />
  }
  return (
    <>
      <Navigation />
      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        <PopupManager />
      </main>
    </>
  )
}
