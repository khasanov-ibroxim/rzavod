import React, { useState } from 'react'
import './Other.css'
import { DataOther } from '../../Constants/index.jsx'

function Other() {
    const [act, setAct] = useState(0)
    return (
        <section className='other'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            OTHER MODELS
                        </h1>
                        <p className="top">
                            Check out the entire line of Segway scooters
                        </p>
                    </div>
                    <div className="col-lg-12">
                        {DataOther.map(({ id, foto, name, price }) => {
                            return <div className="box">
                                <img src={foto} alt="" />
                                <p className="name">{name}</p>
                                <p className="price">{price}</p>
                                <button onClick={() => setAct(id)} className={act === id ? "active" : 'B'}>SEE MORE</button>
                            </div>
                        })}
                        <div className="bottom">
                            <h2 className="top">
                                DIDN'T FIND<br />
                                A MODEL?
                            </h2>
                            <h3 className="top">
                                Leave your contact details<br />
                                and we will help you with<br />
                                the choice
                            </h3>
                            <form action="">
                                <input type="text" placeholder='+7 (___) ___-__-__' />
                            </form>
                            <button onClick={() => setAct(8)} className={act === 8 ? "active" : 'B'}>SEE MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Other