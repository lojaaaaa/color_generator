import React, { FC, useState } from 'react'
import ConverterItem from '../../components/ConverterItem/ConverterItem'
import style from './Converter.module.scss'



const Converter: FC = () => {

  function hexToRGB(hex: string, alpha?: string): string {
    let result = ''
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      result = "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      result = "rgb(" + r + ", " + g + ", " + b + ")";
    }
    return !result.includes('NaN') ? result : 'Ошибка ввода' 
}


  return (
  <>
    <div className={style.content}>
      <ConverterItem title='Из HEX в RGB' hexToRGB={hexToRGB}/>
    </div>

  </>
  )
}

export default Converter