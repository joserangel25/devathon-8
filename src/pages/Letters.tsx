import { useState } from "react";
import { useFetch } from "../hooks/useFetch"
import Modal from "../utils/Modal";
import { Cards } from "../components/cards/Cards";


export const Letters = () => {
  const cartas = useFetch();
  const [selectCard, setSelectCard] = useState <{
    id: number;
    titleCard: string;
    content: string;
    date_read: string;
    wasRead: boolean;
  } | null>(null);

  const handlOpenModal = (id: number) => {
    const card = cartas.find((card) => card.id === id);
    if (card) setSelectCard(card);
  };

  const handleCloseModal =() => {setSelectCard(null)};

  const handleToggleCheck = () => {
    if (selectCard) {
      const updateCard = cartas.map((card) => 
      card.id === selectCard.id ? {...card, wasRead: !card.wasRead } : card);
      cartas(updateCard); //aqui es donde debe mandar la actualizacion al campo wasRead
      setSelectCard({ ...selectCard, wasRead: !selectCard.wasRead});
    }
  }

  //const [open, setOpen] =useState(false)
  
  return (
    <>
    <div className="h-full flex flex-col bg-transparent overflow-scroll">
      <h1 className="text-2xl text-center p-1">Cartas de Navidad</h1>
      <div className="w-full grid gap-2 grid-cols-3 place-content-between bg-transparent md:max-w-full md:grid-cols-5 ms:grid-cols-2">
        {cartas?.slice(0,20).map( card => (
          <Cards
            key={card.id}
            id={card.id}
            titleCard={card.titleCard}
            date_read={card.date_read}
            content={card.content}
            wasRead={card.wasRead}
            onOpenModal={handlOpenModal}
          />
        ))}
      </div>
      {selectCard && (
        <Modal
          isOpen = {!!selectCard}
          title={selectCard.titleCard}
          description={selectCard.content}
          checked={selectCard.wasRead}
          onToggleCheck={handleToggleCheck}
          onClose={handleCloseModal}
        />
      )}
    </div>
    </>
  )
}
