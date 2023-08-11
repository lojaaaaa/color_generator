import React from 'react'
import Card from '../components/Card/Card'

function Home({generateRandomColor}) {
  return (
    <>
        <h1 className='title'>Карточки</h1>
        <div className="cards">
          <Card generateRandomColor={generateRandomColor}/>
          <Card generateRandomColor={generateRandomColor}/>
          <Card generateRandomColor={generateRandomColor}/>
          <Card generateRandomColor={generateRandomColor}/>
        </div>
    </>
  )
}

export default Home