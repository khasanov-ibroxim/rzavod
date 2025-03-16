import React, { useContext } from 'react'
import './Header.css'
import logo from '../../Assisstents/images/logo_nav.png'
import foto from '../../Assisstents/images/logo_link.png'
import { Context } from '../../App'
import {DataTwo, DataOne, DataIndex} from '../../Constants/index.jsx'
import {useNavigate, useParams} from "react-router-dom";
import {SwiperSlide , Swiper} from "swiper/react";
import {useTranslation} from "react-i18next";



function Header() {
    const { img, setImg } = useContext(Context)
    const {id} = useParams()
    const navigate = useNavigate();
    const matchScreen = window.matchMedia("(max-width: 800px)").matches
    const {t} = useTranslation()

    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <a href="#!"><img src={logo} alt="" className={"nav_logo"}/></a>
                            <div className="right">
                               <a href={"tell:+998712000711"}>{t("contact")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-title">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-3 mb-3">
                            <Swiper
                                slidesPerView={matchScreen ? 4.5 : 6.5}
                                spaceBetween={5}
                            >
                                {DataIndex.map((item, index) => (
                                    <SwiperSlide key={index} className={Number(item.id) === Number(id) ? "active" : ''}>
                                        <div onClick={()=>{navigate(`/`+item.id)}} className="box">
                                            <img src={item.photo} alt=""/>
                                            <p className="product">{item.name}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p className="bottom">{t("deliver_title")}</p>
            </div>
        </header>
    )
}

export default Header