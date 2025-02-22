import React from 'react'
import './Modes.css'
import shadow from '../../Assisstents/img/modesShadow.svg'
import modes from '../../Assisstents/img/modes.svg'
function Modes() {
    return (
        <section className='modes'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            3 Riding Modes
                        </h1>
                        <p className="top">
                            Eco, Standard, and Sports modes can be directly<br/> accessed by the intuitive LED dashboard, which also<br/> displays maintenance signals, power levels,<br/> Bluetooth connectivity and more.
                        </p>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={modes} alt="" />
            </div>
            <div className="shadow">
                <img src={shadow} alt="" />
            </div>
        </section>
    )
}

export default Modes