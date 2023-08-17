import React, { FC } from 'react'
import Card from '../../components/Card/Card'
import { ICard } from '../../App'

interface Props {
  generateRandomColor: () => string,
  cards: ICard[],
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>,
  removeCard: (card: ICard) => void
}

const Home: FC<Props> = ({generateRandomColor, cards, setCards, removeCard}) => {
  return (
    <>
        <h1 className='title'>Карточки</h1>
        <div className="cards">
          {cards.map(card => <Card 
            key={card.id} 
            id={card.id}
            cards={cards}
            color={card.color}
            card={card}
            isOpened={card.isOpened}
            setCards={setCards}
            removeCard={removeCard}
            generateRandomColor={generateRandomColor}/>)}
        </div>
    </>
  )
}

export default Home