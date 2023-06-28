import { RedirectToSignIn, SignOutButton, currentUser } from '@clerk/nextjs'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export default async function Layout({ children }: PropsWithChildren) {
  const user = await currentUser()
  if (!user) {
    return <RedirectToSignIn />
  }
  return (
    <div className="flex flex-wrap align-middle justify-center sm:mt-12">
      <nav>
        <ul>
          <Link href="/my/bot-data">Bot Data</Link>
        </ul>
        <ul>
          <Link href="/my/bot-integration">Bot Integration</Link>
        </ul>
        <ul>
          <Link href="/my/bot-settings">Settings</Link>
        </ul>
        <ul>
          <SignOutButton>Log out</SignOutButton>
        </ul>
      </nav>
      {children}
    </div>
  )
}
