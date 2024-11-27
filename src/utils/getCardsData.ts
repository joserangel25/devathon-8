import {Card} from "../interface/index";

const cardsURL = "https://vivacious-elegance-production.up.railway.app/api/v1/christmas-cards"
/*"http://localhost:8080/api/v1/christmas-cards/all";*/

export const getCardsData = async () => {
	const data = await fetch(cardsURL)
	const cards:Card[] = await data.json()
	console.log(cards)
  return cards
}
