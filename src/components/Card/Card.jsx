import React, { useState } from 'react'
import style from './Card.module.scss'

function Card({generateRandomColor}) {

  const [color, setColor] = useState('#8EF664')
  const [isOpened, setIsOpened] = useState(true)

  const onClickCard = (event)=>{
    const color = generateRandomColor()
    if(isOpened){
      setColor(color)
      event.target.style.background = color 
    }
  }



  return (
    <div className={style.card}>
      <div onClick={onClickCard} className={style.body}>
        <p className={style.text}>Tap here</p>
      </div>
      <div className={style.buttons}>
        <button className={style.button}>{color}</button>
        <button onClick={() => setIsOpened(!isOpened)} className={style.button}>{isOpened ? "Открыто" : "Закрыто"}</button>
      </div>
    </div>
  )
}

export default Card