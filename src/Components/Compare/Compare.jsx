import React, { useContext } from 'react'
import './Compare.css'
import Slider from "react-slick";
import { DataCarousel } from '../../Constants/index.jsx';
import { DataImg } from '../../Constants/index.jsx';
import { Context } from '../../App';
function Compare() {
    const { img, setImg } = useContext(Context)
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <section className='compare'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            compare specifications
                        </h1>
                        <p className="top">
                            Add model to compare
                        </p>
                    </div>
                    <div className="col-lg-12">
                        <Slider {...settings}>
                            {DataCarousel.map(({ id, img, name, icon, one, icon1, two, icon2, three, icon3, four, icon4, five, icon5, six, icon6, seven, icon7, eight, icon8, nine, icon9, ten, icon10, eleven, icon11, twelwe, icon12, therteen, price, name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, name11, name12, name13
                            }) => {
                                return <div className='sa'><div className="box">
                                    <img className='foto' src={img} alt="" />
                                    <p className="name">{name}</p>
                                    <p className="icon"><img src={icon} alt="" />{name1}</p>
                                    <hr />
                                    <p className="title">{one}</p>
                                    <p className="icon"><img src={icon1} alt="" />{name2}</p>
                                    <hr />
                                    <p className="title">{two}</p>
                                    <p className="icon"><img src={icon2} alt="" />{name3}</p>
                                    <hr />
                                    <p className="title">{three}</p>
                                    <p className="icon"><img src={icon3} alt="" />{name4}</p>
                                    <hr />
                                    <p className="title">{four}</p>
                                    <p className="icon"><img src={icon4} alt="" />{name5}</p>
                                    <hr />
                                    <p className="title">{five}</p>
                                    <p className="icon"><img src={icon5} alt="" />{name6}</p>
                                    <hr />
                                    <p className="title">{six}</p>
                                    <p className="icon"><img src={icon6} alt="" />{name7}</p>
                                    <hr />
                                    <p className="title">{seven}</p>
                                    <p className="icon"><img src={icon7} alt="" />{name8}</p>
                                    <hr />
                                    <p className="title">{eight}</p>
                                    <p className="icon"><img src={icon8} alt="" />{name9}</p>
                                    <hr />
                                    <p className="title">{nine}</p>
                                    <p className="icon"><img src={icon9} alt="" />{name10}</p>
                                    <hr />
                                    <p className="title">{ten}</p>
                                    <p className="icon"><img src={icon10} alt="" />{name11}</p>
                                    <hr />
                                    <p className="title">{eleven}</p>
                                    <p className="icon"><img src={icon11} alt="" />{name12}</p>
                                    <hr />
                                    <p className="title">{twelwe}</p>
                                    <p className="icon"><img src={icon12} alt="" />{name13}</p>
                                    <hr />
                                    <p className="title">{therteen}</p>
                                    <p className="price">{price}</p>
                                    <button className="bottom">
                                        BUY IT NOW
                                    </button>
                                </div>
                                </div>
                            })}
                        </Slider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bottomBox">
                            {DataImg.map(({ id, foto }) => {
                                return <>{img === id && <img src={foto} alt="" />}</>
                            })}
                            <div className="text">
                                <h2 className="top">
                                    Segway Protective<br />
                                    Gear Set as a gift
                                </h2>
                                <h3 className="top">
                                    The cost of a protection kit when buying<br/>
                                    a scooter is $ 0 instead of $ $29.99
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Compare