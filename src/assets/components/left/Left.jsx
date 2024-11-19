import React from 'react'


import style from './left.module.css'
import { AiOutlineDoubleRight } from 'react-icons/ai';

function Left({ heading }) {
  return (
    <>
      <div className={style.box}>
        <h4>{heading}</h4>
        <div className={style.dFlex}>
          <p className={style.pTxt}>Ut enim ad minim veniam, quis nostrud</p>
          <div className="icon"> <AiOutlineDoubleRight /></div>
        </div>
      </div>

    </>
  )
}

export default Left;