import { create } from "zustand"

type TypeModal = 'childs' | 'letters' | null

interface IModalStore {
  isModalOpen: boolean,
  typeModal: TypeModal
  setIsModalOpen: (isModalOpen: boolean, type: TypeModal) => void,
}

export const useModalStore = create<IModalStore>((set) => ({
  isModalOpen: false,
  typeModal: null,
  setIsModalOpen: (isModalOpen: boolean, type: TypeModal) => {
    set({ isModalOpen, typeModal: type })
  }
}))