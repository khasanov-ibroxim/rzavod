import React, {useState} from 'react'
import './Pack.css'
import foto1 from '../../Assisstents/img/pack.svg'
import foto2 from '../../Assisstents/img/packvideo.svg'
import {CloseOutlined} from "@mui/icons-material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {useTranslation} from "react-i18next";


function Pack() {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();
    return (
        <section className='pack'>
            <div className="container">
                <h1 className="top">{t("pack")}</h1>
                <div className="row">
                    <div className="col-lg-6">

                        <div className=" home_s3_video_box">
                            <img
                                src="https://mixtas.novaworks.net/wp-content/uploads/2023/12/m3_deals_01.jpg"
                                alt="Mixtas Poster"
                                className="w-full h-auto cursor-pointer"
                                onClick={() => setIsOpen(true)}
                            />
                            <button
                                className="home_s3_video_box_play_btn"
                                onClick={() => setIsOpen(true)}
                            >
                                <PlayArrowIcon/>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src={foto1} alt=""/>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="home_s3_modal">
                    <div className="home_s3_modal_content">
                        <button
                            className="home_s3_modal_close"
                            onClick={() => setIsOpen(false)}
                        >
                            <CloseOutlined />
                        </button>
                        <iframe
                            width="70%"
                            height="70%"
                            src="https://www.youtube.com/embed/wII9bv2P9c8?autoplay=1&controls=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Pack