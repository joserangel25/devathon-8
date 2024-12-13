import { Characteristic } from "./Characteristic"
import { useChildStore } from "../../store/childs"
import { reciveGift } from "../../utils/giftToChild"
import type { IChild } from "../../interface/child"
import { useModalStore } from "../../store/modal"

interface Props {
  child: IChild
}

export const CardChild: React.FC<Props> = ({ child }) => {
  const setChildToEdit = useChildStore((state) => state.setChildToEdit)
  const setDeleteChildId = useChildStore((state) => state.setDeleteChildId)
  const setIsModalOpen = useModalStore((state) => state.setIsModalOpen)
  return (
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-3">
        <div className="flex-1 truncate">
          <div className="flex items-center">
            <h3 className="truncate font-medium text-gray-900 capitalize">{child.name}</h3>
          </div>
          <p className="truncate font-semibold text-gray-500">
            {reciveGift(child.characteristics) ? 'Obtiene regalo 😉' : 'No obtiene regalo 😐'}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => setChildToEdit(child)}
            title="Editar niño"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="text-gray-600"
              fill="currentColor"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path></svg>
          </button>
          <button
            title="Eliminar niño"
            onClick={() => {
              setDeleteChildId(child.idChild!)
              setIsModalOpen(true, 'childs')
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="text-red-700"
              fill="currentColor"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
          </button>
        </div>
      </div>
      <div>
        <div className="-mt-px flex flex-wrap gap-2 p-2">
          {
            child.characteristics.map((characteristic, index) => (
              <Characteristic key={index} characteristic={characteristic} />
            ))
          }
        </div>
      </div>
    </li>
  )
}
