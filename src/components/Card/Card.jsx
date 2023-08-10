import React from 'react'
import style from './Card.module.scss'

function Card() {
  return (
    <div className={style.card}>
      <div className={style.body}>
        <p className={style.text}>Tap here</p>
      </div>
      <div className={style.buttons}>
        <button className={style.button}>#8EF664</button>
        <button className={style.button}>Закрыть</button>
      </div>
    </div>
  )
}

export default Card