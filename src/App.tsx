import React, { FC } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer.tsx/Footer';

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
          <Home generateRandomColor={generateRandomColor}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
