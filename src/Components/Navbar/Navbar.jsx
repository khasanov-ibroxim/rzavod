import React, { useState } from 'react'
import './Navbar.css'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import {useLocation} from "react-router-dom";
import {useLanguage} from "../../lang/LangContext.jsx";
import {useTranslation} from "react-i18next";
import {languages} from "../../lang/langs.jsx";
import {Dropdown, Space} from "antd";



function Navbar({onlyIcon = true}) {
    const [show, setShow] = useState(true)
    const location = useLocation();

    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const {t} = useTranslation();
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={show ? 'box' : 'null'}>
                            <ul>

                                <li className={"nav_dropdown"}>
                                    <Dropdown
                                        menu={{
                                            items: languages,
                                            onClick: handleLanguageChange,
                                        }}
                                        style={{zIndex: 9999, cursor: "pointer"}}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                {onlyIcon ? (
                                                    <span style={{
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center"
                                                    }}>{selectedLanguage.icon} <p>{selectedLanguage.label} </p></span>
                                                ) : (
                                                    <>
                                                        {selectedLanguage.icon} {selectedLanguage.label} <DownOutlined/>
                                                    </>
                                                )}
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </li>
                            </ul>
                            <div className="right">
                                <TelegramIcon/>
                                <InstagramIcon/>
                                <a href="tel:" className="number">+1 (888) 888-88-88</a>
                            </div>
                        </div>
                    </div>
                    {!show}
                    <i onClick={() => setShow(!show)} className="bars fa-solid fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar