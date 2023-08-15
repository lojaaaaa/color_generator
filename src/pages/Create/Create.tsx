import React, { FC, useState } from 'react'
import style from './Create.module.scss'
import { ICard } from '../../App'

interface Props {
  addNewCard: (card: ICard) => void,
  cards: ICard[]
}

const Create: FC<Props> =  ({addNewCard, cards}) => {

  const [color, setColor] = useState<string>('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void=>{
    setColor(event.target.value)
  }
  
  const onClickButton = () =>{
    const card = {
      id: cards.length,
      color: color ? color : '#BEBEBE',
      isOpened: true
    }
    addNewCard(card)
  }

  return (
    <>
      <h1 className='title'>Создать карточку</h1>
      <form onSubmit={(e) => e.preventDefault()} action='' className={style.create}>
        <input 
          value={color} 
          onChange={onChange} 
          className={style.color} 
          type="text" 
          placeholder='#bebebe'/>
        <button onClick={onClickButton} className={style.button}>Создать</button>
      </form>
    </>
  )
}

export default Create