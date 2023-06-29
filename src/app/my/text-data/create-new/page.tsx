export default function Page() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center pb-2">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Create new text
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Explain what this text is about.
          </p>
        </div>
      </div>
      <div className="sm:mx-0">
        <form action="#">
          <div className="mt-4">
            <textarea
              rows={8}
              name="comment"
              id="comment"
              placeholder="Enter your text here"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
              defaultValue={''}
            />
          </div>
        </form>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save new text
        </button>
      </div>
    </div>
  )
}
