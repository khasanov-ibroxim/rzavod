import React, { useState } from 'react'
import './Main.css'
import icon1 from '../../Assisstents/img/icon1.svg'
import icon2 from '../../Assisstents/img/icon2.svg'
import icon3 from '../../Assisstents/img/icon3.svg'
import icon4 from '../../Assisstents/img/icon4.svg'
import One from './Page/One'
import Two from './Page/Two'
import Three from './Page/Three'
import Four from './Page/Four'
function Main() {
    const [count, setCount] = useState(1)

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div onClick={() => setCount(1)} className={count == 1 ? 'active' : ''}>
                            <div className="box">
                                <img src={icon1} alt="" />
                                <p className="top">
                                    Delivery within<br />
                                    1 business day
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div onClick={() => setCount(2)} className={count == 2 ? 'active' : ''}>
                            <div className="box">
                                <img src={icon2} alt="" />
                                <p className="top">
                                    Basic 1 year<br />
                                    warranty
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div onClick={() => setCount(3)} className={count == 3 ? 'active' : ''}>
                            <div className="box">
                                <img src={icon3} alt="" />
                                <p className="top">
                                    After Sales<br />
                                    Support
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div onClick={() => setCount(4)} className={count == 4 ? 'active' : ''}>
                            <div className="box">
                             <img src={icon4} alt="" />
                                <p className="top">
                                    Up to 40 miles<br />
                                    per charge
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {count === 1 && <One/>}
            {count === 2 && <Three/>}
            {count === 3 && <Two/>}
            {count === 4 && <Four/>}

        </main>
    )
}

export default Main