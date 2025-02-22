import React from 'react'
import './Smart.css'
import foto1 from '../../Assisstents/img/smartshadow.png'
import foto2 from '../../Assisstents/img/smart.svg'
function Smart() {
    return (
        <section className='smart'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            Smart battery<br />
                            Management system <br />
                            (Smart-BMS)<br />
                        </h1>
                        <p className="top">
                            The Smart-BMS closely monitors the battery status with multiple<br />protection mechanisms to ensure the battery durability
                        </p>
                    </div>
                </div>
            </div>
            <div className="left">
                <img src={foto1} alt="" />
            </div>
            <div className="right">
                <img src={foto2} alt="" />
            </div>
        </section>
    )
}

export default Smart