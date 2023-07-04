import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type ApplicationState = {
  showConfirmationDialog: boolean
  setShowConfirmationDialog: (show: boolean) => void
}

const useApplicationStore = create<ApplicationState>()(
  devtools((set) => ({
    showConfirmationDialog: false,
    setShowConfirmationDialog: (show: boolean) =>
      set({ showConfirmationDialog: show }),
  }))
)

export default useApplicationStore
