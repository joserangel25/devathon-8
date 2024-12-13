import { useState } from "react"
import clsx from "clsx"
import { toast } from "react-toastify"
import { ALIGNMENTS_LIST, REINDEERS } from "../../const/reindeers"
import { AlingmentReindeer, IAlignment, IReindeer } from "../../interface/reindeer"



export const AlignmentReinder = () => {
  const [reindeers, setReindeers] = useState<IReindeer[]>(REINDEERS)
  const [alignments, setAlignments] = useState(ALIGNMENTS_LIST)
  const [nameAlignment, setNameAlignment] = useState('')
  const [leftAlingment, setLeftAlingment] = useState<IReindeer[]>([])
  const [rightAlingment, setRightAlingment] = useState<IReindeer[]>([])
  const [alignmentEdit, setAlignmentEdit] = useState<IAlignment | null>(null)

  const handleOnDrag = (e: React.DragEvent, reindeer: IReindeer) => {
    e.dataTransfer.setData('reindeer', JSON.stringify(reindeer))
  }

  const handleOnDrop = (e: React.DragEvent, alignment: AlingmentReindeer) => {
    const reindeer = JSON.parse(e.dataTransfer.getData('reindeer')) as IReindeer

    if (alignment === 'alls') {
      comeBackReindeer(reindeer)
      return
    }

    if (alignment === 'left') {
      if (leftAlingment.length === 4) {
        toast.error('No puedes agregar más de 4 renos')
        return
      }
      setLeftAlingment([reindeer, ...leftAlingment])
      if (rightAlingment.some((reindeerTemp) => reindeerTemp.id === reindeer.id)) {
        setRightAlingment(rightAlingment.filter(reindeerTemp => reindeerTemp.id !== reindeer.id))
      }
    }

    if (alignment === 'right') {
      if (rightAlingment.length === 4) {
        toast.error('No puedes agregar más de 4 renos')
        return
      }
      setRightAlingment([reindeer, ...rightAlingment])
      if (leftAlingment.some((reindeerTemp) => reindeerTemp.id === reindeer.id)) {
        setLeftAlingment(leftAlingment.filter(reindeerTemp => reindeerTemp.id !== reindeer.id))
      }
    }

    setReindeers(reindeers.filter(reindeerTemp => reindeerTemp.id !== reindeer.id))
  }

  const comeBackReindeer = (reindeer: IReindeer) => {
    setReindeers([reindeer, ...reindeers])

    setLeftAlingment(prevState => prevState.filter(reindeerTemp => reindeerTemp.id !== reindeer.id))
    setRightAlingment(prevState => prevState.filter(reindeerTemp => reindeerTemp.id !== reindeer.id))
  }

  const handleDropOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const onSubmitAlignment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!nameAlignment) {
      toast.error('El nombre de la alineación es obligatorio')
      return
    }

    if (!alignmentEdit) {

      setAlignments([
        ...alignments,
        {
          id: Math.floor(Math.random() * 1000),
          name: nameAlignment,
          left: leftAlingment,
          right: rightAlingment
        }
      ])
    } else {
      const alignmentEdited = {
        id: alignmentEdit.id,
        name: nameAlignment,
        left: leftAlingment,
        right: rightAlingment
      }
      setAlignments(prevState => prevState.map((aligmentTemp) => aligmentTemp.id === alignmentEdit.id ? alignmentEdited : aligmentTemp))
    }

    setNameAlignment('')
    setLeftAlingment([])
    setRightAlingment([])
    setReindeers(REINDEERS)
    toast.success('Alineación guardada 🎅', {
      icon: false
    })
  }

  const onEditAligment = (alignment: IAlignment) => {
    setReindeers([])
    setAlignmentEdit(alignment)
    setNameAlignment(alignment.name)
    setLeftAlingment(alignment.left)
    setRightAlingment(alignment.right)
  }

  const onDeleteAligment = (id: number) => {
    setAlignments(prevState => prevState.filter(aligmentTemp => aligmentTemp.id !== id))
    toast.success('Alineación eliminada 🎅', {
      icon: false
    })
  }

  return (
    <div
      className="flex flex-col gap-2 overflow-y-auto"
    >
      <div className="flex gap-1 min-h-20"
        onDrop={(e) => handleOnDrop(e, 'alls')}
        onDragOver={handleDropOver}
      >
        {
          reindeers.map((reindeer, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleOnDrag(e, reindeer)}
              className={clsx(
                "h-[70px] w-[70px] text-white mx-auto self-center  rounded-full grid place-content-center hover:scale-105 transition-all shadow-md",
                {
                  "bg-green-600": index % 2 === 0,
                  "bg-red-600": index % 2 !== 0
                }
              )}>
              <p>{reindeer.name}</p>
            </div>
          ))
        }
        {
          !reindeers.length && (
            <form
              onSubmit={onSubmitAlignment}
              className="fade-in w-full flex gap-2 items-center">
              <div className="relative z-0 flex-1 group">
                <input
                  type="text"
                  id="name_alignment"
                  autoComplete="off"
                  className="block py-2.5 px-0 w-full min-w-[220px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" "
                  value={nameAlignment}
                  onChange={(e) => setNameAlignment(e.target.value)}
                  required />

                <label htmlFor="name_alignment" className="peer-focus:font-medium absolute text-md text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">¿Nombre para esta alineación?</label>
              </div>

              <button
                type="submit"
                className="text-white bg-primary hover:bg-green-900 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:bg-slate-400 disabled:opacity-50 transition-all duration-150"
              >Guardar 🫎</button>
            </form>

          )
        }
      </div>

      <div
        className="w-full  grid grid-cols-2 gap-2"
      >
        <div
          className="w-full border border-primary rounded-md h-full "
          onDrop={(e) => handleOnDrop(e, 'left')}
          onDragOver={handleDropOver}
        >
          <h3 className="text-center my-3 font-bold text-red-600">Izquierdos 🫎</h3>
          <div className="grid grid-cols-4 grid-rows-[80px] ">
            {
              leftAlingment.map((reindeer, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={(e) => handleOnDrag(e, reindeer)}
                  className={clsx(
                    "h-[70px] w-[70px] text-white mx-auto self-center shadow-md rounded-full grid place-content-center hover:scale-105 transition-all",
                    {
                      "bg-green-600": index % 2 === 0,
                      "bg-red-600": index % 2 !== 0
                    }
                  )}>
                  <p>{reindeer.name}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div
          className="w-full border border-primary rounded-md h-full pb-4"
          onDrop={(e) => handleOnDrop(e, 'right')}
          onDragOver={handleDropOver}
        >
          <h3 className="text-center my-3 font-bold text-green-600">Derechos 🫎</h3>
          <div className="grid grid-cols-4 grid-rows-[80px] ">
            {
              rightAlingment.map((reindeer, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={(e) => handleOnDrag(e, reindeer)}
                  className={clsx(
                    "h-[70px] w-[70px] text-white mx-auto self-center  rounded-full grid place-content-center hover:scale-105 transition-all shadow-md",
                    {
                      "bg-green-600": index % 2 === 0,
                      "bg-red-600": index % 2 !== 0
                    }
                  )}>
                  <p>{reindeer.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3 h-full mt-3 rounded-sm">
        {
          alignments.reverse().map((alignment) => (
            <div
              key={alignment.id}
              className="bg-green-800 text-white p-3 rounded-lg self-start"
            >
              <div className="flex justify-between items-center">
                <p className="font-bold text-xl text-yellow-500">{alignment.name}</p>

                <div className="flex gap-1">
                  <button
                    onClick={() => onEditAligment(alignment)}
                    title="Editar alineación"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="text-gray-300"
                      fill="currentColor"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path></svg>
                  </button>

                  <button
                    title="Eliminar alineación"
                    onClick={() => onDeleteAligment(alignment.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="text-red-600"
                      fill="currentColor"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                  </button>
                </div>
              </div>
              <h4 className="font-bold ">Izquierda 🫎🎅:
                <span className="font-normal"> {alignment.left.map(reindeer => reindeer.name).join(', ')}</span>
              </h4>
              <h4 className="font-bold ">Derecha 🫎🎅:
                <span className="font-normal"> {alignment.right.map(reindeer => reindeer.name).join(', ')}</span> </h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}