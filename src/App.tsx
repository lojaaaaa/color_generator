import React, { FC } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer.tsx/Footer';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/Create/Create';
import Info from './pages/Info/Info';
import Converter from './pages/Converter/Converter';


const App: FC = () => {

  const generateRandomColor = (): string => {
    const hexCode: string = '0123456789ABCDEF'
    let color: string = ''
    for (let i = 0; i < 6; i++){
      color += hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    return '#' + color
}

  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
        <div className="main__container container">
          <Routes>
            <Route path='/' element={<Home generateRandomColor={generateRandomColor}/>}></Route>
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
