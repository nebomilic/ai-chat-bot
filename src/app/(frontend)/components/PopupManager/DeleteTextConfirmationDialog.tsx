import ConfirmationDialog from './ConfirmationDialog'

type ConfirmationDialogProps = {
  onConfirm: () => void
  open: boolean
}
export default function DeleteTextConfirmationDialog({
  onConfirm,
  open,
}: ConfirmationDialogProps) {
  return (
    <ConfirmationDialog
      title="Do you really want to delete this text?"
      text="This action cannot be undone, but you can always create a new text."
      confirmButtonLabel="Delete text"
      onConfirm={onConfirm}
      open={open}
    />
  )
}
