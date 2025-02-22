import React from 'react'
import './Pack.css'
import foto1 from '../../Assisstents/img/pack.svg'
import foto2 from '../../Assisstents/img/packvideo.svg'
function Pack() {
    return (
        <section className='pack'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="top">Packing List</h1>
                        <img src={foto2} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <img src={foto1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pack