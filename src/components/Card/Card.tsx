import React, { ChangeEvent, FC, MouseEventHandler, useState } from 'react'
import styles from './Card.module.scss'
import { ICard } from '../../App'


interface Props {
  generateRandomColor: () => string,
  color: string,
  isOpened: boolean,
  card: ICard
}

const Card: FC<Props> = ({generateRandomColor, color, isOpened, card}) => {

  const [colorCard, setColorCard] = useState<string>(color)
  const [isOpenedCard, setIsOpenedCard] = useState<boolean>(isOpened)

  const onClickCard = (event: React.MouseEvent<HTMLDivElement>):void => {
    const newColor = generateRandomColor()
    if(isOpenedCard){
      setColorCard(newColor)
      card.color = newColor
      event.currentTarget.style.background = card.color
      // event.target.style.background = color 
    }
  }
  const onClickButton = (): void =>{
    setIsOpenedCard(!isOpenedCard)
    card.isOpened = isOpenedCard
  } 

  return (

    <div className={styles.card}>
      <div onClick={onClickCard} className={styles.body}>
        <p className={styles.text}>Tap here</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>{colorCard}</button>
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