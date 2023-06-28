import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>My public page home</h1>
      <p>
        <Link href="/my/bot-data">Go to app</Link>
      </p>
    </div>
  )
}
