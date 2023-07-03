import { auth } from '@clerk/nextjs'
import CreateNewTextForm from './CreateNewTextForm'

export default async function Page() {
  // TODO: getting token here means it can expire until we use it to call the backend
  // IMPORTANT: backend should be able to get the token on its own!
  const { getToken } = auth()
  const token = await getToken({ template: 'supabase' })
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center border-b border-gray-200 pb-5">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Create new text
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Explain what this text is about.
          </p>
        </div>
      </div>
      <CreateNewTextForm token={token} />
    </div>
  )
}
