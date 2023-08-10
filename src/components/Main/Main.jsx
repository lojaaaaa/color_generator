import React from 'react'
import Card from '../Card/Card'

function Main({generateRandomColor}) {
  return (
    <main className='main'>
      <div className="main__container container">
        <h1 className='title'>Карточки</h1>
        <div className="cards">
          <Card generateRandomColor={generateRandomColor}/>
          <Card generateRandomColor={generateRandomColor}/>
        </div>

      </div>
    </main>
  )
}

export default Main