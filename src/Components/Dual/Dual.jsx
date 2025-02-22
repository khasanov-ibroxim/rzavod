import React from 'react'
import './Dual.css'
import foto from '../../Assisstents/img/dual.svg'
function Dual() {
  return (
    <section className='dual'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="top">
              Dual Braking<br />
              System
            </h1>
            <p className="top">
              Simultaneous mechanical front drum brake <br />and regenerative electric back brake provide <br />both stability and steerability.
            </p>
            <p className="bottom">
              *IPX5 water resistance
            </p>
          </div>
        </div>
      </div>
      <div className="foto">
        <img src={foto} alt="" />
      </div>
    </section>
  )
}

export default Dual