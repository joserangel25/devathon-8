import React from 'react'

interface CardProps{
    id: number;
    titleCard: string;
    content: string;
    date_read: string;
    wasRead: boolean;
    onOpenModal: (id: number) => void;
}

export const Cards: React.FC<CardProps> = ({id, titleCard, content, date_read, wasRead, onOpenModal}) => {
  return (
    <div className='bg-green-500 shadow-md rounded-lg p-4'>
        <h2 className='text-lg font-semibold'>{titleCard}</h2>
        <p className='text-gray-600'>{date_read}</p>
        <div>
          <span
            className={`inline-block w-4 h-4 mr-2 rounded-full ${wasRead ? "bg-red-500":"bg-green-300"}`}
          ></span>
          <span>{wasRead? "Leido":"Sin leer"}</span>
        </div>
        <button 
        	className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
					onClick={() => onOpenModal(id)}
				>
            Leer
        </button>
    </div>
  );
};
