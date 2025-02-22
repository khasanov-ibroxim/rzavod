import React from 'react'
import './Page.css'
import img from '../../../Assisstents/img/ThreeImg.svg'
function Three() {
    return (
        <section className='page'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="boxs">
                            <p className="top">
                                ONE YEAR <br />
                                MANUFACTURER`S WARRANTY<br />
                                <span>The basic warranty is 1 year.<br />
                                    You can also extend the warranty up to 4 years.
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

export default Three