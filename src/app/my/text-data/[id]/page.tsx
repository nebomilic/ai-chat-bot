import { TextData } from '@/types'
import Link from 'next/link'
async function getTextDataById(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/text-data/${id}`)
  return res.json()
}
export default async function Page({ params }: { params: { id: string } }) {
  const textData = (await getTextDataById(params.id)) as TextData
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center border-b border-gray-200 pb-5">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {textData.title}
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            href="/my/bot-data/create-new"
            className="block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-red:outline-indigo-600"
          >
            Delete text
          </Link>
        </div>
      </div>
      <div className="sm:mx-0">
        <div className="mt-4">
          <p className="block w-full py-1.5 text-gray-900 sm:text-sm sm:leading-6">
            {textData.text}
          </p>
        </div>
      </div>
    </div>
  )
}
