import CreateNewTextForm from './CreateNewTextForm'

export default async function Page() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center border-b border-gray-200 pb-5">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Create new text
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Chat will use text as the source of information
          </p>
        </div>
      </div>
      <CreateNewTextForm />
    </div>
  )
}
