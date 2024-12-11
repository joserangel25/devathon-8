import { ILetter } from '../../interface/letter';
import { useLettersStore } from '../../store/letters';
import { useModalStore } from '../../store/modal';

interface ICardProps {
  letter: ILetter;
}

export const CardLetter: React.FC<ICardProps> = ({ letter }) => {
  const setIsModalOpen = useModalStore((state) => state.setIsModalOpen)
  const setSelectedLetter = useLettersStore((state) => state.setSelectedLetter)

  const { titleCard, wasRead, date_read } = letter
  return (
    <div className='w-full bg-green-500 shadow-md rounded-lg p-4'>
      <h2 className='text-lg font-semibold'>{titleCard}</h2>
      <p className='text-gray-600'>{date_read}</p>
      <div>
        <span
          className={`inline-block w-4 h-4 mr-2 rounded-full ${wasRead ? "bg-red-500" : "bg-green-300"}`}
        ></span>
        <span>{wasRead ? "Leido" : "Sin leer"}</span>
      </div>
      <button
        className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        onClick={() => {
          setIsModalOpen(true, 'letters')
          setSelectedLetter(letter)
        }}
      >
        Leer
      </button>
    </div>
  );
};
