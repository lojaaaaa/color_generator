import React, { FC } from 'react'
import Card from '../../components/Card/Card'
import { ICard } from '../../App'

interface Props {
  generateRandomColor: () => string,
  cards: ICard[]
}

const Home: FC<Props> = ({generateRandomColor, cards}) => {
  return (
    <>
        <h1 className='title'>Карточки</h1>
        <div className="cards">
          {cards.map(card => <Card 
            key={card.id} 
            color={card.color}
            card={card}
            isOpened={card.isOpened}
            generateRandomColor={generateRandomColor}/>)}
        </div>
    </>
  )
}

export default Home