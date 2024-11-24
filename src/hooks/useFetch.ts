
import { useEffect, useState } from 'react';
import { getCardsData } from '../utils/getCardsData';
import { Card } from '../interface';

export const useFetch = () => {
	interface AppState{
		cardsState: Card[];
	}

	const [cards, setCards] = useState<AppState["cardsState"]>([]);

	useEffect(()=> {
		const data =async () =>{
			const cards = await getCardsData();
			setCards(cards);
		};
		data();
	},  []);
  return cards;
};
