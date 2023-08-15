export const updateCardsLocalStorage = (tasks: any[]) =>{
  localStorage.setItem("taskItems", JSON.stringify(tasks));
}