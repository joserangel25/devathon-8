import {Card} from "../interface/index";

const cardsURL = "https://673b2441339a4ce4451ad0d8.mockapi.io/cards"
/*https://vivacious-elegance-production.up.railway.app/api/v1/christmas-cards*/

export const getCardsData = async () => {
	const data = await fetch(cardsURL)
	const cards:Card[] = await data.json()
	console.log(cards)
  return cards
}
