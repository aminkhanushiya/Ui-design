import React from 'react'
import footerimg from './footer.png';
import style from './footer.module.css'
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { BsFillDatabaseFill } from 'react-icons/bs';
function Footer() {
    return (
        <>
            <div className={[style.footer, style.fdFlex].join(' ')}>

                <div className={style.dFlex}>
                    <img className={style.fooImg} src={footerimg} alt="" />
                    <di v className={style.dFlex}>
                        <div className={style.box}>
                            <h4>This is the demo our resent project</h4>

                            <p className={style.pTxt}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                        <div className={style.box}>
                            <h4>Our last second project</h4>

                            <p className={style.pTxt}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                        <div className={style.boxT}>
                            <AiOutlineDoubleRight />
                        </div>
                    </di>
                </div>

                <div className={style.fooIcon}>
                    <BsFillDatabaseFill />
                </div>
            </div>

        </>
    )
}

export default Footer