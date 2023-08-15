import React, { FC, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer.tsx/Footer';
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

  const generateRandomColor = (): string => {
    const hexCode: string = '0123456789ABCDEF'
    let color: string = ''
    for (let i = 0; i < 6; i++){
      color += hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    return '#' + color
  }
  
  updateCardsLocalStorage([
    {id: 1, color: '#8EF664', isOpened: true},
    {id: 2, color: '#8EF664', isOpened: true},
    {id: 3, color: '#8EF664', isOpened: true},
    {id: 4, color: '#8EF664', isOpened: false},
    {id: 5, color: '#8EF664', isOpened: true},
  ])

  const [cards, setCards] = useState<ICard[]>([])

  useEffect(()=>{
    const storedCards = localStorage.getItem("taskItems");
    if (storedCards !== null) {
      const parsedCards = JSON.parse(storedCards) as ICard[];
      setCards(parsedCards);
    }
  }, [])


  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
        <div className="main__container container">
          <Routes>
            <Route path='/' element={<Home cards={cards} generateRandomColor={generateRandomColor}/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/info' element={<Info/>}></Route>
            <Route path='/converter' element={<Converter />}></Route>
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
