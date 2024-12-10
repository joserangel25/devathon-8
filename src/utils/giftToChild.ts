import { ICharacteristic } from "../interface/child";

export const reciveGift = (characteristics: ICharacteristic[]) => {
  let isWinner = false;

  const totalPoints = characteristics.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);

  if (totalPoints >= 15) {
    isWinner = true;
  }

  return isWinner;
}