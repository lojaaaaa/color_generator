import React, { ChangeEvent, FC, MouseEventHandler, useState } from 'react'
import styles from './Card.module.scss'
import { ICard } from '../../App'
import { updateCardsLocalStorage } from '../../utils/localStorageUtils'


interface Props {
  generateRandomColor: () => string,
  color: string,
  isOpened: boolean,
  card: ICard,
  cards: ICard[],
  id: number,
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>,
  removeCard: (card: ICard) => void
}

const Card: FC<Props> = ({generateRandomColor, card, cards, setCards, removeCard}) => {

  const [colorCard, setColorCard] = useState<string>(card.color)
  const [isOpenedCard, setIsOpenedCard] = useState<boolean>(card.isOpened)

  const updateCards = (updatedCard: ICard): void => {
    const updatedCards = cards.map((c) => (c.id === updatedCard.id ? updatedCard : c));
    updateCardsLocalStorage(updatedCards);
    setCards(updatedCards)
  }

  const onClickCard = (event: React.MouseEvent<HTMLDivElement>): void => {
    const newColor = generateRandomColor()
    if(isOpenedCard){

      setColorCard(newColor)
      updateCards({...card, color: newColor})

      // event: React.MouseEvent<HTMLDivElement>
      // event.currentTarget.style.background = newColor
      // console.log(event.target)
      // event.target.style.background = newColor 
    }
  }

  const onClickButton = (): void =>{
    setIsOpenedCard(!isOpenedCard)
    updateCards({...card, isOpened: !isOpenedCard})
  } 

  const copyToСlipboard = (e: React.MouseEvent<HTMLButtonElement>): void => { 
    navigator.clipboard.writeText(e.currentTarget.innerText)
  }

  const onRemoveCard = (): void =>{
    removeCard(card)
  }

  return (

    <div className={styles.card}>
      <div onClick={onClickCard} style={{background: `${colorCard}`}} className={styles.body}>
        <p className={styles.text}>Tap here</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={copyToСlipboard} className={styles.button}>{colorCard}</button>
        <button 
        onClick={onClickButton} 
        className={styles.button}>
          {isOpenedCard ? "Открыто" : "Закрыто"
        }</button>
      </div>
      <button onClick={onRemoveCard} className={styles.remove}>Удалить</button>
    </div>

  )
}

export default Card