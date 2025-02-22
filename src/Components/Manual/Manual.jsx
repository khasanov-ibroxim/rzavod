import React from 'react'
import './Manual.css'
import manual from '../../Assisstents/img/manual.svg'
import icon1 from '../../Assisstents/img/manualicon1.svg'
import icon2 from '../../Assisstents/img/manualicon2.svg'
import icon3 from '../../Assisstents/img/manualicon3.svg'
import icon4 from '../../Assisstents/img/manualicon4.svg'
function Manual() {
  return (
    <section className='manual'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="box">
              <h1 className="top">
                DOWNLOAD<br />
                manual
              </h1>
              <div className="icon">
                <p className="pIcon">
                  <img src={icon1} alt="" />
                  Assembly and<br />
                  preparation for the trip
                </p>
                <p className="pIcon">
                  <img src={icon2} alt="" />
                  How to charge<br />
                  a scooter
                </p>
                <p className="pIcon">
                  <img src={icon3} alt="" />
                  How to ride<br />
                  properly
                </p>
              </div>
              <button className="bottom">
                Download manual <img src={icon4} alt="" />
              </button>
            </div>
              <div className="foto">
                <img src={manual} alt="" />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Manual