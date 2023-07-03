import Chat from './Chat'

export default function Page() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center border-b border-gray-200 pb-5">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Bot Integration
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Here you can test how the bot works with the provided data
          </p>
        </div>
      </div>
      <div className="-mx-4 flow-root sm:mx-0 mt-4">
        <Chat />
      </div>
    </div>
  )
}
