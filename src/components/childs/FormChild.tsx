import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Rating } from "./Rating"
// import { CHILDS } from "../../const/childs"
import { ICharacteristic } from "../../interface/child"
import { useChildStore } from "../../store/childs"

const CHARACTERISTICS_INIT: ICharacteristic[] = [
  { name: 'bondad', value: 0 },
  { name: 'paciencia', value: 0 },
  { name: 'respeto', value: 0 },
  { name: 'esfuerzo', value: 0 },
  { name: 'trabajo en equipo', value: 0 }
]

export const FormChild = () => {
  const setChildsList = useChildStore((state) => state.setChildsList)
  const childToEdit = useChildStore((state) => state.childToEdit)
  const editChildDb = useChildStore((state) => state.editChildDb)
  const [characteristics, setCharacteristics] = useState<ICharacteristic[]>(CHARACTERISTICS_INIT)
  const [nameChild, setNameChild] = useState('')

  const resetState = () => {
    setNameChild('')
    setCharacteristics(CHARACTERISTICS_INIT)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!nameChild) {
      toast.error('El nombre del niño es obligatorio')
      return
    }

    if (childToEdit?.idChild) {
      editChildDb({ name: nameChild, idChild: childToEdit.idChild, characteristics })
      resetState()
      return
    }
    setChildsList({ name: nameChild, characteristics })
    toast.success('Niño agregado exitosamente')

    resetState()

  }

  const onChange = ({ name, value }: ICharacteristic) => {
    setCharacteristics((prevState) => {
      return prevState.map((item) => {
        if (item.name === name) {
          return { ...item, value }
        }
        return item
      })
    })
  }

  useEffect(() => {
    if (childToEdit) {
      setNameChild(childToEdit.name)
      setCharacteristics(childToEdit.characteristics)
    }
  }, [childToEdit])


  return (
    <form onSubmit={onSubmit} className="container mt-2 mx-auto flex">
      <div className=" bg-white rounded-lg p-5 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          {childToEdit ? 'Editar niño' : 'Agregar nuevo niño'}
        </h2>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600 font-semibold">Nombre</label>
          <input
            type="name"
            id="name"
            name="name"
            value={nameChild}
            onChange={(e) => setNameChild(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="mb-4">
          {
            characteristics.map(({ name, value }) => (
              <div className="flex gap-3 items-center" key={name}>
                <label
                  className="leading-7 text-sm font-semibold text-gray-600 capitalize lg:min-w-[150px] "
                >{name}</label>
                <Rating
                  characteristic={{ name, value }}
                  onChangeCharacteristic={onChange}
                />
              </div>
            ))
          }
        </div>

        <button
          className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg"
          type="submit"
        >Guardar
        </button>
      </div>
    </form>
  )
}
