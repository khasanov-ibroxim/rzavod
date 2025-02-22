import React, { useContext } from 'react'
import './Segway.css'
import left1 from './imgLeft/left1.svg'
import left2 from './imgLeft/left2.svg'
import left3 from './imgLeft/left3.svg'
import left4 from './imgLeft/left4.svg'
import left5 from './imgLeft/left5.svg'
import left6 from './imgLeft/left6.svg'
import left7 from './imgLeft/left7.svg'
import left8 from './imgLeft/left8.svg'

import right1 from './imgRight/right1.svg'
import right2 from './imgRight/right2.svg'
import right3 from './imgRight/right3.svg'
import right4 from './imgRight/right4.svg'
import right5 from './imgRight/right5.svg'
import right6 from './imgRight/right6.svg'
import right7 from './imgRight/right7.svg'
import right8 from './imgRight/right8.svg'
import right9 from './imgRight/right9.svg'
import { DataImg } from '../../Constants/index.jsx'
import { Context } from '../../App'
function Segway() {
    const { img, setImg } = useContext(Context)
    return (
        <section className='segway'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            KickScooter overview <br />SEGWAY Ninebot Kickscooter MAX
                        </h1>
                        <div className="box">
                            {DataImg.map(({ id, foto }) => {
                                if (id == 14) {
                                    <p></p>
                                } else {
                                    return (img === id && <img className='photo' src={foto} />)
                                }
                            })}

                            <div className="left">
                                <div className="foto">
                                    <img src={left1} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={left2} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={left3} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={left4} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={left5} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={left6} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={left7} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={left8} alt="" />
                                </div>
                            </div>
                            <div className="right">
                                <div className="foto">
                                    <img src={right1} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={right2} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={right3} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={right4} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={right5} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={right6} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={right7} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={right8} alt="" />
                                </div>
                                <div className="foto">
                                    <img src={right9} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Segway