import {Card} from "../interface/index";

const cardsURL = "https://673b2441339a4ce4451ad0d8.mockapi.io/cards"
/*"http://localhost:8080/api/v1/christmas-cards/all";*/

export const getCardsData = async () => {
	const data = await fetch(cardsURL)
	const cards:Card[] = await data.json()
	console.log(cards)
  return cards
}
