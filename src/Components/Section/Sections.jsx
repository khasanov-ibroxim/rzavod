import React, {useContext, useState} from 'react'
import './Section.css'
import logos from '../../Assisstents/img/Способы оплаты.svg'
import logo from '../../Assisstents/img/Logo.svg'
import {DataImg, DataIndex} from '../../Constants/index.jsx'
import {Context} from '../../App'
import {useParams} from "react-router-dom";

function Sections() {
    const {img, setImg} = useContext(Context)
    const {id} = useParams()
    const currentItem = DataIndex.find(item => item.id === Number(id));

    return (
        <section className='section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <button className="top">
                            In stock
                        </button>
                        <h1 className="top">
                            {currentItem.name}
                        </h1>
                        <div className="box">
                            <p className="top">
                                Add an extended warranty from <span>Extend</span>
                            </p>
                            <div className="oneBox">
                                <p className="one">
                                    10m x 10m
                                </p>
                                <p className="one">
                                    10 - den
                                </p>
                                <p className="one">
                                    neon
                                </p>
                            </div>
                            <div className="title">
                                <div className="text">
                                    <p className="two">
                                        100 000 so'm za metr
                                    </p>
                                    <p className="t-two">
                                        50 000 so'm
                                    </p>
                                </div>

                                <img className={"section_img_small"} src={currentItem.photo} alt=""/>
                            </div>
                            <div className="btnBox">
                                <button className="but">BUY IT Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={currentItem.photo} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sections