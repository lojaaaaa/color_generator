import React, { ChangeEvent, FC, MouseEventHandler, useState } from 'react'
import styles from './Card.module.scss'


interface Props {
  generateRandomColor: () => string
}

const Card: FC<Props> = ({generateRandomColor}) => {

  const [color, setColor] = useState<string>('#8EF664')
  const [isOpened, setIsOpened] = useState<boolean>(true)

  const onClickCard = (event: React.MouseEvent<HTMLDivElement>):void => {
    const color = generateRandomColor()
    if(isOpened){
      setColor(color)
      event.currentTarget.style.background = color
      // event.target.style.background = color 
    }
  }

  return (

    <div className={styles.card}>
      <div onClick={onClickCard} className={styles.body}>
        <p className={styles.text}>Tap here</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>{color}</button>
        <button 
        onClick={() => setIsOpened(!isOpened)} 
        className={styles.button}>
          {isOpened ? "Открыто" : "Закрыто"
        }</button>
      </div>
    </div>

  )
}

export default Card