import { currentUser } from '@clerk/nextjs'
export default async function Page() {
  const user = await currentUser()
  return (
    <div>
      <h1>Bot Data</h1>
      <p>user: {user && user.firstName}</p>
    </div>
  )
}
