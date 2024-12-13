import { useLettersStore } from "../../../store/letters";
import { useModalStore } from "../../../store/modal";

export const ModalLetters = () => {

  const setIsModalOpen = useModalStore((state) => state.setIsModalOpen)
  const selectedLetter = useLettersStore((state) => state.selectedLetter)
  const setSelectedLetter = useLettersStore((state) => state.setSelectedLetter)

  if (!selectedLetter) return null

  const { titleCard, content } = selectedLetter

  const handleOpenModal = () => {
    setIsModalOpen(false, null)
    setSelectedLetter(null)
  }
  return (
    <div className="relative p-4 w-full max-w-md max-h-full">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={handleOpenModal}
        >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only" >Cerrar</span>
        </button>
        <div className="p-4 md:p-5">

          <h2 className="text-2xl text-yellow-600 font-bold mb-4">{titleCard}</h2>
          <p className="text-slate-50">{content}</p>

          <button
            type="button" className="mt-4 ml-0 py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={handleOpenModal}
          >Cerrar</button>
        </div>
      </div>
    </div>
  )
}
