'use client'

import { PropsWithChildren, useState } from 'react'
import useApplicationStore from '@/app/store'

const buttonStyle =
  'block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-red:outline-indigo-600'
const linkStyle = 'text-red-600 hover:text-red-500'

type DeleteButtonProps = {
  onConfirm?: () => void
  style?: 'button' | 'link'
} & PropsWithChildren

export default function DeleteButton({
  children,
  style = 'button',
  onConfirm,
}: DeleteButtonProps) {
  const setShowConfirmationDialog = useApplicationStore(
    (state) => state.setShowConfirmationDialog
  )
  return (
    <>
      <button
        className={style === 'button' ? buttonStyle : linkStyle}
        onClick={() => setShowConfirmationDialog(true)}
      >
        {children}
      </button>
    </>
  )
}
