import { useEffect } from "react";
import { CardLetter } from "../components/letters/CardLetter";
import { useLettersStore } from "../store/letters";

export const Letters = () => {
  const lettersList = useLettersStore((state) => state.lettersList)
  const getAllLetterList = useLettersStore((state) => state.getAllLetterList)

  useEffect(() => {
    getAllLetterList()
  }, [getAllLetterList])

  return (
    <div className="w-full h-full pt-2 pb-12">
      <h1 className="text-2xl text-center font-bold mb-2">Correo de <span className="text-primary">Santa 🎅</span></h1>
      <div
        className="h-[calc(100%-35px)] grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden overflow-y-auto">
        {lettersList.map(letter => (
          <CardLetter
            key={letter.id}
            letter={letter}
          />
        ))}
      </div>
    </div>
  )
}
