import React from 'react'
import './Page.css'
import img from '../../../Assisstents/img/OneImg.svg'
function One() {
    return (
        <section className='page'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="boxs">
                            <p className="top">
                                WE ARE IN <br />
                                LOS ANGELES, CA<br />
                                <span>
                                    Free California 1 day shipping.<br />
                                    US Free Shipping 3-5 Days
                                </span>
                            </p>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default One