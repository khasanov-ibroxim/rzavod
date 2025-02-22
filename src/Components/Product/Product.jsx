import React from 'react'
import './Product.css'
import { Data1, Data2, Data3 } from '../../Constants/index.jsx'
function Product() {
    return (
        <section className='product'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            ACCESSORIES
                        </h1>
                    </div>
                    <div className="col-lg-12">
                        {Data1.map(({ id, photo, name, title, price }) => {
                            return <div className='boxProduct'>
                                <img src={photo} alt="" />
                                <p className="name">{name}</p>
                                <p className="title">{title}</p>
                                <p className="price">{price}</p>
                                <button className='button'>ADD TO CART</button>
                            </div>
                        })}
                    </div>
                    <div className="col-lg-12">
                        {Data2.map(({ id, photo, name, title, price }) => {
                            return <div className='boxProduct'>
                                <img src={photo} alt="" />
                                <p className="name">{name}</p>
                                <p className="title">{title}</p>
                                <p className="price">{price}</p>
                                <button className='button'>ADD TO CART</button>
                            </div>
                        })}
                    </div>
                    <div className="col-lg-12">
                        {Data3.map(({ id, photo, name, title, price }) => {
                            return <div className='boxProduct'>
                                <img src={photo} alt="" />
                                <p className="name">{name}</p>
                                <p className="title">{title}</p>
                                <p className="price">{price}</p>
                                <button className='button'>ADD TO CART</button>
                            </div>
                        })}
                    </div>
                    <button className="bottom">SEE MORE</button>
                </div>
            </div>
        </section>
    )
}

export default Product