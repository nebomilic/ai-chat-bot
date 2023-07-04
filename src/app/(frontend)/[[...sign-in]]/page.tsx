import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex flex-wrap align-middle justify-center sm:mt-12">
      <SignIn redirectUrl="/text-data" />
    </div>
  )
}
