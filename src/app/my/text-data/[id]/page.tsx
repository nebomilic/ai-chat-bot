import { TextData } from '@/types'
import Link from 'next/link'
import { autheticatedFetch } from '../../utils'
import DeleteButton from '@/components/DeleteButton'
async function getTextDataById(id: string) {
  const res = await autheticatedFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/text-data/${id}`,
    { cache: 'no-store' }
  )

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
          <DeleteButton>Delete text</DeleteButton>
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
