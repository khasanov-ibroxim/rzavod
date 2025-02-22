import React from 'react'
import './Power.css'
import power from '../../Assisstents/img/power.svg'
import shadow from '../../Assisstents/img/powerShadow.svg'
function Power() {
    return (
        <section className='power'>
            <div className="container">
                <div className="col-lg-12">
                    <h1 className="top">Regenerative Brake for <br />Power Recycle
                    </h1>
                    <p className="top">
                        The innovative regenerative brake system turns Ninebot KickScooter MAX <br/>into an electric vehicle powered by electricity and recycled energy from <br/>riding. Energy will be collected from regenerative braking and distributed <br/>when you need a boost.
                    </p>
                </div>
            </div>
            <div className="left">
                <img src={shadow} alt="" />
            </div>
            <div className="right">
                <img src={power} alt="" />
            </div>
        </section>
    )
}

export default Power