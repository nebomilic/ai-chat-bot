import { TextData } from '@/types'
import Link from 'next/link'
import { autheticatedFetch } from '../utils'
import DeleteButton from '@/components/DeleteButton'
async function getTextData() {
  const res = await autheticatedFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/text-data`,
    {
      cache: 'no-store',
    }
  )

  return res.json()
}
export default async function Page() {
  const textData = (await getTextData()) as TextData[]

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center border-b border-gray-200 pb-5">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Textual Data
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Texts that the bot uses as the source of information.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            href="/my/text-data/create-new"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add text
          </Link>
        </div>
      </div>
      <div className="-mx-4 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
          </colgroup>
          <tbody>
            {textData.map((data) => (
              <tr key={data.id} className="border-b border-gray-200">
                <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-900">
                    {
                      <a
                        className="text-indigo-600 hover:text-indigo-500"
                        href={`/my/text-data/${data.id}`}
                      >
                        {data.title}
                      </a>
                    }
                  </div>
                  <div className="mt-1 truncate text-gray-500">{data.text}</div>
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <DeleteButton style="link">Delete</DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
