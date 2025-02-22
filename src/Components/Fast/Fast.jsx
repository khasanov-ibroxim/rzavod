import React from 'react'
import './Fast.css'
import fast from '../../Assisstents/img/fast.svg'
function Fast() {
    return (
        <section className='fast'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            Easy One Cord<br/>
                            Fast Charging
                        </h1>
                        <p className="top">
                        The built-in charger lets riders recharge it easily <br/>when on the go without having to carry along a<br/> bulky charging adapter. 3A fast charge will give <br/>Ninebot KickScooter MAX a full charge in 6 hours.

                        </p>
                    </div>
                </div>
            </div>
            <div className="foto">
                <img src={fast} alt="" />
            </div>
        </section>
    )
}

export default Fast