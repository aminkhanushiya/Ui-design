import React from 'react'

import style from './right.module.css'
function Right() {
  return (
    <>
      <div className={style.right}>
        <h1 className={style.heading}>I am
          Freelancer.</h1>
        <p className={style.rhTxt}>Ut enim ad minim veniam, quis nostrud <br />exercitation ullamco laboris nisi</p>

        <div className={style.btnTxt}>
          <button className={style.btn}>Reach Out</button>
          <p className={style.txt}>Click For Demo...</p>
        </div>

        <div className={style.lastTxt}>
          <p>Fb</p>
          <p>In</p>
          <p>Tw</p>
        </div>
      </div>
    </>
  )
}

export default Right;