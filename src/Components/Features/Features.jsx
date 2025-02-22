import React from 'react'
import './Features.css'
import foto from '../../Assisstents/img/bigImg.svg'
import { Features1, Features2 } from '../../Constants/index.jsx'
function Features() {
    return (
        <section className='features'>
            <img className='top-foto' src={foto} alt="" />
            <div className="featuresTitle">
                <div className="container">
                    <div className="row">

                        <h1 className="top">
                            IMPRESSIVE FEATURES
                        </h1>

                        <div className="col-lg-12">
                            {Features1.map(({ img, name, title }) => {
                                return <div className="box">
                                    <img src={img} alt="" />
                                    <p className="name">{name}</p>
                                    <p className="title">{title}</p>
                                </div>
                            })}
                        </div>
                        <div className="col-lg-12">
                            {Features2.map(({ img, name, title }) => {
                                return <div className="box">
                                    <img src={img} alt="" />
                                    <p className="name">{name}</p>
                                    <p className="title">{title}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features