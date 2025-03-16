import React from 'react'
import './Product.css'
import {Data1, Data2, Data3} from '../../Constants/index.jsx'
import photo1 from "../../Assisstents/img/product1.svg";
import {useTranslation} from "react-i18next";


function Product() {
    const {t} = useTranslation()
    const Data = [
        {
            id: 1,
            photo: photo1,
            name:t("access.item_1.title"),
            title: t("access.item_1.content"),
            price: t("access.item_1.price"),
        },
        {
            id: 2,
            photo: photo1,
            name:t("access.item_2.title"),
            title: t("access.item_2.content"),
            price: t("access.item_2.price"),
        },
        {
            id: 3,
            photo: photo1,
            name:t("access.item_3.title"),
            title: t("access.item_3.content"),
            price: t("access.item_3.price"),
        },
        {
            id: 4,
            photo: photo1,
            name:t("access.item_4.title"),
            title: t("access.item_4.content"),
            price: t("access.item_4.price"),
        },
        {
            id: 5,
            photo: photo1,
            name:t("access.item_5.title"),
            title: t("access.item_5.content"),
            price: t("access.item_5.price"),
        },
        {
            id: 6,
            photo: photo1,
            name:t("access.item_6.title"),
            title: t("access.item_6.content"),
            price: t("access.item_6.price"),
        },
    ]
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
                        {Data.slice(0,3).map(({id, photo, name, title, price}) => {
                            return <div className='boxProduct'>
                                <img src={photo} alt=""/>
                                <p className="name">{name}</p>
                                <p className="title">{title}</p>
                                <p className="price">{price}</p>
                                <button className='button'>{t("add_to_cart")}</button>
                            </div>
                        })}
                    </div>
                    <div className="col-lg-12">
                        {Data.slice(3).map(({id, photo, name, title, price}) => {
                            return <div className='boxProduct'>
                                <img src={photo} alt=""/>
                                <p className="name">{name}</p>
                                <p className="title">{title}</p>
                                <p className="price">{price}</p>
                                <button className='button'>{t("add_to_cart")}</button>
                            </div>
                        })}
                    </div>

                    {/*<button className="bottom">SEE MORE</button>*/}
                </div>
            </div>
        </section>
    )
}

export default Product