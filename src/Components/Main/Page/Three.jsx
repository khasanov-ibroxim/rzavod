import React from 'react'
import './Page.css'
import img from '../../../Assisstents/img/ThreeImg.svg'
import {useTranslation} from "react-i18next";
function Three() {
    const {t} = useTranslation()
    return (
        <section className='page'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="boxs">
                            <p className="top">
                                {t("main.two.title_content")} <br/>
                                <span>{t("main.two.content")}</span>
                            </p>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Three