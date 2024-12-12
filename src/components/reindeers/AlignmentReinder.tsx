import { useState } from "react"
import clsx from "clsx"
import { toast } from "react-toastify"
import { ALIGNMENTS, REINDEERS } from "../../const/reindeers"
import { AlingmentReindeer, IReindeer } from "../../interface/reindeer"



export const AlignmentReinder = () => {
  const [reindeers, setReindeers] = useState<IReindeer[]>(REINDEERS)
  const [leftAlingment, setLeftAlingment] = useState<IReindeer[]>([])
  const [rightAlingment, setRightAlingment] = useState<IReindeer[]>([])

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

  return (
    <div
      className="flex flex-col gap-2 0"
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
              // onSubmit={onSubmit} 
              className="fade-in w-full flex gap-2 items-center">
              <div className="relative z-0 flex-1 group">
                <input
                  type="text"
                  id="name_alignment"
                  autoComplete="off"
                  className="block py-2.5 px-0 w-full min-w-[220px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" "
                  // value={quantityCookies === 0 ? "" : quantityCookies}
                  // onChange={(e) => setQuantityCookie(Number(e.target.value))}
                  required />

                <label htmlFor="name_alignment" className="peer-focus:font-medium absolute text-md text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">¿Nombre para esta alineación?</label>
              </div>

              <button
                type="submit"
                className="text-white bg-primary hover:bg-green-900 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:bg-slate-400 disabled:opacity-50 transition-all duration-150"
              // disabled={(maxAllowedCookies === cookies && cookies !== 0)}
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
          ALIGNMENTS.map((alignment) => (
            <div
              key={alignment.id}
              className="bg-green-800 text-white p-3 rounded-lg self-start"
            >
              <div className="flex justify-between items-center">
                <p className="font-bold text-xl text-yellow-500">{alignment.name}</p>

                <button>Edit</button>
              </div>
              <h4 className="font-bold ">Izquierda 🫎🎅:
                <span className="font-normal"> {alignment.left.map(reindeer => reindeer).join(', ')}</span>
              </h4>
              <h4 className="font-bold ">Derecha 🫎🎅:
                <span className="font-normal"> {alignment.right.map(reindeer => reindeer).join(', ')}</span> </h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}