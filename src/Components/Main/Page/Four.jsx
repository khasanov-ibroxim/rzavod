import React from 'react'
import './Page.css'
import img from '../../../Assisstents/img/FourImg.svg'
function Four() {
    return (
        <section className='page'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="boxs">
                            <p className="top">
                                Up to 40 miles of range <br />
                                on a single charge<br />
                                <span>
                                    With a range of up to 40 miles, the longest range on the market,<br /> and a 20˚uphill climbing angle, the KickScooter MAX allows you to<br /> ride from San Francisco Bay Area to Palo Alto on a single charge.
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

export default Four