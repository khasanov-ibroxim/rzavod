import React from 'react'
import './Reviews.css'
import Slider from "react-slick";
import img from '../../Assisstents/img/reviewImg.svg'
function Reviews() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <section className='reviews'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            REviews
                        </h1>
                        <Slider {...settings}>
                            <div className="bottom">
                                <div className="box">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="box">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="box">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews