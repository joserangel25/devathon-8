import { useModalStore } from "../../../store/modal"
import { ModalChilds } from "./ModalChild"
import { ModalLetters } from "./ModalLetter"

export const ModalWrapped = () => {
  const typeModal = useModalStore((state) => state.typeModal)

  if (!typeModal) return null
  return (
    <div
      className="fade-in overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-screen h-screen max-h-full bg-slate-800 bg-opacity-80 grid place-items-center">
      {
        typeModal === 'childs' && <ModalChilds />
      }
      {
        typeModal === 'letters' && <ModalLetters />
      }
    </div>
  )
}
