import { useState } from "react"

interface Props {
  addCookies: (quantity: number) => void
}

export const InputCookie: React.FC<Props> = ({ addCookies }) => {

  const [quantityCookies, setQuantityCookie] = useState(0)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addCookies(quantityCookies)
    setQuantityCookie(0)
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto flex gap-2 items-center mt-10">
      <div className="relative z-0 flex-1 group">
        <input
          type="number"
          id="floating_number"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" "
          value={quantityCookies === 0 ? "" : quantityCookies}
          onChange={(e) => setQuantityCookie(Number(e.target.value))}
          required />

        <label htmlFor="floating_number" className="peer-focus:font-medium absolute text-md text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">¿Cuantas galletas comió 🎅?</label>
      </div>

      <button type="submit" className="text-white bg-primary hover:bg-green-900 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Agregar 🍪</button>

      <button
        type="button"
        title="Agregar 1 galleta"
        onClick={() => addCookies(1)}
        className="text-white bg-primary hover:bg-green-900 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">+1</button>
    </form>
  )
}
