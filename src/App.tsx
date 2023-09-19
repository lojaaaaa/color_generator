import React, { FC, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/Create/Create';
import Info from './pages/Info/Info';
import Converter from './pages/Converter/Converter';
import { updateCardsLocalStorage } from './utils/localStorageUtils';

export interface ICard {
  id: number;
  color: string;
  isOpened: boolean;
}

const App: FC = () => {

  const [cards, setCards] = useState<ICard[]>([])

  useEffect(() : void => {
    const storedCards = localStorage.getItem("taskItems");
    if (storedCards !== null) {
      const parsedCards = JSON.parse(storedCards) as ICard[];
      setCards(parsedCards);
    }
  }, [])

  const generateRandomColor = (): string => {
    const hexCode = '0123456789ABCDEF'
    let color: string = ''
    for (let i = 0; i < 6; i++){
      color += hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    return '#' + color
  }

  const addNewCard = (card: ICard): void =>{
    setCards([...cards, card])
    updateCardsLocalStorage([...cards, card])
  }

  const removeCard = (card: ICard): void =>{
    const updateCards = cards.filter(c => c.id !== card.id)
    setCards(updateCards)
    updateCardsLocalStorage(updateCards)
  }


  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
        <div className="main__container container">
          <Routes>
            <Route 
              path='/' 
              element=
              {<Home 
                cards={cards} 
                setCards={setCards} 
                removeCard={removeCard}
                generateRandomColor={generateRandomColor}/>}>
            </Route>
            <Route path='/create' element={<Create cards={cards} addNewCard={addNewCard}/>}></Route>
            <Route path='/info' element={<Info/>}></Route>
            <Route path='/converter' element={<Converter/>}></Route>
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
