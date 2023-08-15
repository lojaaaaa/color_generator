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
  id: number
}

const Card: FC<Props> = ({generateRandomColor, color, isOpened, card, cards, id}) => {

  const [colorCard, setColorCard] = useState<string>(color)
  const [isOpenedCard, setIsOpenedCard] = useState<boolean>(isOpened)

  const onClickCard = (event: React.MouseEvent<HTMLDivElement>):void => {
    const newColor = generateRandomColor()
    if(isOpenedCard){
      setColorCard(newColor)
      
      const updateCard = {...card, color: newColor}
      const updateCards = cards.map(card => card.id === id ? updateCard : card)
      updateCardsLocalStorage(updateCards)

      event.currentTarget.style.background = newColor
      // event.target.style.background = color 
    }
  }
  const onClickButton = (): void =>{
    setIsOpenedCard(!isOpenedCard)
    const updateCard = {...card, isOpened: !isOpenedCard}
    const updateCards = cards.map(card => card.id === id ? updateCard : card)
    updateCardsLocalStorage(updateCards)
  } 
  const copyToСlipboard = (e: React.MouseEvent<HTMLButtonElement>): void => { 
    navigator.clipboard.writeText(e.currentTarget.innerText)
  }


  return (

    <div className={styles.card}>
      <div onClick={onClickCard} style={{background: `${color}`}} className={styles.body}>
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
    </div>

  )
}

export default Card