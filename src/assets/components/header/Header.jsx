import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import style from './header.module.css'

function Header() {
    return (
        <>
            <div className={[style.header, style.dFlex].join(" ")}>
                <div className="logo">
                    <h2 className={style.logoTxt}>Freelancer</h2>
                </div>
                <div className="menu">
                    <ul className={[style.dFlex, style.menuList].join(' ')}>
                        <li className={style.menuItem}>Home</li>
                        <li className={style.menuItem}>About</li>
                        <li className={style.menuItem}>Services</li>
                        <li className={style.menuItem}>Contact</li>
                        <li className={style.menuItem}><AiOutlineSearch /></li>
                    </ul>
                </div>
                <div className="icon">
                    <AiOutlineMenu />
                </div>
            </div >

        </>
    )
}

export default Header