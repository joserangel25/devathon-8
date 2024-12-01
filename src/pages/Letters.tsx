import { useState } from "react";
import { useFetch } from "../hooks/useFetch"
import Modal from "../utils/Modal";


export const Letters = () => {
  const cartas = useFetch();
  const [open, setOpen] =useState(false)
  
  return (
    <>
    <div className="h-full flex flex-col bg-transparent overflow-scroll">
      <h1 className="text-2xl text-center p-1">Christmas Letters</h1>
      <div className="w-full grid gap-2 grid-cols-3 place-content-between bg-transparent md:max-w-full md:grid-cols-5 ms:grid-cols-2">
        {cartas?.slice(0,20).map( carta => (
          <div className='max-w-md mx-auto bg-gradient-to-r from-cyan-100 from-10% via-sky-100 via-30% to-red-100 to to-90% rounded-xl shadow-md md:max-w-2xl md:flex'> {/*se le quito el */}
            <div key={carta.id} className='p-4'>
              <div  className='tracking-wide text-center text-sm text-indigo-500 font-semibold'>{carta.titleCard}</div>
              <p className='mt-1 text-slate-500'>{carta.date_read}</p>
              <button 
                className='bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-2 rounded'
                onClick={()=>setOpen(true)}>
                Abrir carta
              </button>
              <Modal open={open} onClose={()=>setOpen(false)}>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl">{carta.titleCard}</h2>
                  <p>{carta.content}</p>
                  <hr className="border-t-solid border-1 border-gray"/>
                  <div className="flex flex-row justify-center">
                    <button 
                      className="border border-neutral-300 rounded-lg py-1.5 px-10 bg-blue-500 hover:bg-blue-600 text-white"
                      onClick={()=>setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
