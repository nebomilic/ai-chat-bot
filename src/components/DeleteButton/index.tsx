'use client'

import { useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'

const buttonStyle =
  'block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-red:outline-indigo-600'
const linkStyle = 'text-red-600 hover:text-red-500'

type DeleteButtonProps = {
  textId: number
  style?: 'button' | 'link'
} & PropsWithChildren

async function deleteTextData(id: number) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/text-data/${id}`, {
    method: 'DELETE',
  })
}

export default function DeleteButton({
  children,
  style = 'button',
  textId,
}: DeleteButtonProps) {
  const router = useRouter()
  async function handleDelete(id: number) {
    await deleteTextData(id)
    // TODO: handle errors
    // TODO: show success
    // TODO: show loading
    router.push('/text-data')
  }
  return (
    <>
      <button
        className={style === 'button' ? buttonStyle : linkStyle}
        onClick={() => deleteTextData(textId)}
      >
        {children}
      </button>
    </>
  )
}
