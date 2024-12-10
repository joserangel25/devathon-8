import { useEffect } from "react"
import { createPortal } from "react-dom"
import { FormChild } from "../components/childs/FormChild"
import { ListChild } from "../components/childs/ListChild"
import { Modal } from "../components/shared/Modal"
import { StactsChilds } from "../components/childs/StactsChilds"
import { useChildStore } from "../store/childs"
import { useModalStore } from "../store/modal"

export const ChildsPage = () => {
  const getAllChilds = useChildStore((state) => state.getAllChilds)
  const isModalOpen = useModalStore((state) => state.isModalOpen)

  useEffect(() => {
    getAllChilds()
  }, [getAllChilds])

  return (
    <>
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-4 pb-12 pt-4 divide-x divide-gray-200">
        <div className="overflow-y-auto">
          <ListChild />
        </div>

        <div className="pl-3">
          <StactsChilds

          />
          <FormChild />
        </div>

      </div>
      {
        isModalOpen && createPortal(
          <Modal />,
          document.getElementById('popup-modal')!
        )
      }

    </>
  )
}
