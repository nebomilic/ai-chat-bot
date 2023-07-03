'use client'

import { useRouter } from 'next/navigation'

type Payload = {
  title: string
  text: string
}
async function postTextData(data: Payload, token: string | null) {
  if (!token) {
    return
  }
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/text-data`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
}

export default function CreateNewTextForm({ token }: { token: string | null }) {
  const router = useRouter()
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = {
      title: (event.target as any).title.value,
      text: (event.target as any).text.value,
    }
    const JSONdata = JSON.stringify(data)
    await postTextData(data, token)
    // TODO: handle errors
    // TODO: show success
    // TODO: show loading
    router.push('/my/text-data')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Title
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
            placeholder="Title is used only for your reference"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <label
          htmlFor="text"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Text
        </label>
        <div className="mt-2">
          <textarea
            rows={4}
            name="text"
            id="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
            placeholder="The chat bot will use this text to answer questions, make it as detailed as possible"
            required
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save new text
        </button>
      </div>
    </form>
  )
}
