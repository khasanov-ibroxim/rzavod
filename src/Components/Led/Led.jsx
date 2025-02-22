import React from 'react'
import './Led.css'
import shadow from '../../Assisstents/img/ledShadow.svg'
import foto from '../../Assisstents/img/led.svg'
function Led() {
    return (
        <section className='led'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            Built-In Front <br />
                            LED Light
                        </h1>
                        <p className="top">
                            Front-facing lights are designed with 2.5w high-brightness LED light to<br /> illuminate the path ahead of you and increase your visibility to others <br />around you.
                        </p>
                        <p className="bottom">
                            *Disclaimer: for your safety, please try not to ride at night
                        </p>
                    </div>
                </div>
            </div>
            <div className="left">
                <img src={shadow} alt="" />
            </div>
            <div className="right">
                <img src={foto} alt="" />
            </div>
        </section>
    )
}

export default Led