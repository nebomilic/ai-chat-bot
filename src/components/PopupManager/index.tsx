'use client'

import useApplicationStore from '@/app/(frontend)/store'
import DeleteTextConfirmationDialog from './DeleteTextConfirmationDialog'

export default function PopupManager() {
  const showConfirmationDialog = useApplicationStore(
    (state) => state.showConfirmationDialog
  )
  return (
    <>
      <DeleteTextConfirmationDialog
        open={showConfirmationDialog}
        onConfirm={() => alert('This is still not implemented')}
      />
    </>
  )
}
