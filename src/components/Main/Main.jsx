import React from 'react'
import Card from '../Card/Card'

function Main() {
  return (
    <main className='main'>
      <div className="main__container container">
        <h1 className='title'>Карточки</h1>
        <Card/>
      </div>
    </main>
  )
}

export default Main