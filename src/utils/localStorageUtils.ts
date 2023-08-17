import { ICard } from './../App';

export const updateCardsLocalStorage = (tasks: ICard[]): void =>{
  localStorage.setItem("taskItems", JSON.stringify(tasks));
}