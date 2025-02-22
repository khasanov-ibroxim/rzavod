import React from 'react'
import './Page.css'
import img from '../../../Assisstents/img/TwoImg.svg'
function Two() {
    return (
        <section className='page'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="boxs">
                            <p className="top">
                                AFTER SALES <br />
                                SUPPORT <br />
                                <span>If you have any difficulties with your kickscooter, our specialists will <br /> contact you within 15 minutes</span>
                            </p>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Two