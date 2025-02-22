import React from 'react'
import './Control.css'
import foto from '../../Assisstents/img/controlImg.svg'
import Appstore from '../../Assisstents/img/AppStore.svg'
import Playmarket from '../../Assisstents/img/Play.svg'
import { ControlImg } from '../../Constants/index.jsx'
function Control() {
  return (
    <section className='control'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="top">
              Control from your smartphone
            </h1>
            <p className="top">
              You can easily control your Segway electric scooter with your smartphone via Bluetooth. Not being the<br /> key to the kickscooter, it will give a signal in case of an attempt to steal. Check the current speed, data<br /> on the status of the device's systems or set the speed limit with a few touches.<br />
              And the skating training program is indispensable for beginners.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="box">
              {ControlImg.map(({ id, foto, name }) => {
                return <div className='cardImg'>
                  <img src={foto} alt="" />
                  <p className="name">{name}</p>
                </div>
              })}
            </div>
            <div className="bottom">
              <img className='app' src={Appstore} alt="" />
              <img className='app' src={Playmarket} alt="" />
            </div>
          </div>
        </div>
      </div>
            <div className="foto">
              <img src={foto} alt="" />
            </div>
    </section>
  )
}

export default Control