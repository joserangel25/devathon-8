import clsx from 'clsx';
import { ILetter } from '../../interface/letter';
import { useLettersStore } from '../../store/letters';
import { useModalStore } from '../../store/modal';

interface ICardProps {
  letter: ILetter;
}

export const CardLetter: React.FC<ICardProps> = ({ letter }) => {
  const setIsModalOpen = useModalStore((state) => state.setIsModalOpen)
  const setSelectedLetter = useLettersStore((state) => state.setSelectedLetter)
  const readLetter = useLettersStore((state) => state.readLetter)

  const { titleCard, wasRead } = letter
  return (
    <div className={
      clsx(
        "w-full  shadow-md rounded-lg p-4",
        {
          "bg-green-500": !wasRead,
          "bg-red-500": wasRead
        }
      )
    }>
      <h2 className='text-lg font-semibold'>{titleCard}</h2>
      <div className='flex gap-2 items-center'>
        <span
          className={`inline-block w-4 h-4  rounded-full ${wasRead ? "bg-red-700" : "bg-green-300"}`}
        ></span>
        <span className=''>{wasRead ? "Leido" : "Sin leer"}</span>
      </div>
      <button
        className={
          clsx(
            "mt-4 transition-colors text-white px-4 py-2 rounded",
            {
              "bg-green-700 hover:bg-green-800": !wasRead,
              "bg-red-700 hover:bg-red-800": wasRead
            }
          )
        }
        onClick={() => {
          setIsModalOpen(true, 'letters')
          setSelectedLetter(letter)

          if (!letter.wasRead) {
            readLetter(letter.id)
          }
        }}
      >
        Leer
      </button>
    </div>
  );
};
