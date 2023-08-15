import React, { FC } from 'react'
import style from './Create.module.scss'

interface Props {

}

const Create: FC<Props> =  ({}) => {
  return (
    <>
      <h1 className='title'>Создать карточку</h1>
      <form onSubmit={(e) => e.preventDefault()} action='' className={style.create}>
        <input className={style.color} type="text" placeholder='#ffffff'/>
        <button className={style.button}>Создать</button>
      </form>
    </>
  )
}

export default Create