import React from 'react'
import { Card } from '../../interface'

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
    <div className='bg-white shadow-md rounded-lg p-4'>
        <h2 className='text-lg font-semibold'>{titleCard}</h2>
        <p className='text-gray-600'>{date_read}</p>
        <button 
        	className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
					onClick={() => onOpenModal(id)}
				>
            View
        </button>
    </div>
  );
};
