import React from 'react'
import './Fold.css'
import fold from '../../Assisstents/img/fold.svg'
function Fold() {
    return (
        <section className='fold'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            One-step Folding Mechanism
                        </h1>
                        <p className="top">
                        Ninebot KickScooter MAX can be easily folded and carried around in 3 seconds.
                        </p>
                        <img src={fold} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fold