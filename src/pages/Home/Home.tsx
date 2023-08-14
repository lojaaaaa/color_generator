import React, { FC } from 'react'
import Card from '../../components/Card/Card'

interface Props {
  generateRandomColor: () => string
}

const Home: FC<Props> = ({generateRandomColor}) => {
  return (
    <>
        <h1 className='title'>Карточки</h1>
        <div className="cards">
          <Card generateRandomColor={generateRandomColor}/>
          <Card generateRandomColor={generateRandomColor}/>
          <Card generateRandomColor={generateRandomColor}/>
          <Card generateRandomColor={generateRandomColor}/>
          <Card generateRandomColor={generateRandomColor}/>
          <Card generateRandomColor={generateRandomColor}/>
          <Card generateRandomColor={generateRandomColor}/>
          <Card generateRandomColor={generateRandomColor}/>
        </div>
    </>
  )
}

export default Home