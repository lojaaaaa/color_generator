import React, { ChangeEvent, FC, useState } from 'react'
import style from '../../pages/Converter/Converter.module.scss'

interface Props {
  title: string,
  hexToRGB: (color: string, alfa?: string) => string
}

const ConverterItem: FC<Props> = ({title, hexToRGB}) => {

  const [colorIn, setColorIn] = useState<string>('')
  const [colorOut, setColorOut] = useState<string>('')

  const onClick = (): void =>{
    const hex = hexToRGB(colorIn)
    setColorOut(hex)
    setColorIn('')
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>): void =>{
    setColorIn(e.currentTarget.value)
    setColorOut('')
  }

  return (
    <form className={style.form} onSubmit={(e): void => e.preventDefault()}>
      <h1 className='title'>{title}</h1>
      <div className={style.block}>
        <input
          onChange={onChange} 
          value={colorIn} 
          className={style.color} 
          type="text" 
          placeholder='HEX'/>
        <button onClick={onClick} className={style.button}>Конвертировать</button>
        <input defaultValue={colorOut} className={style.color} type="text" placeholder='RGB'/>
      </div>

    </form>
  )
}

export default ConverterItem