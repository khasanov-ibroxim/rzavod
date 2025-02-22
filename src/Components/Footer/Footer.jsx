import React from 'react'
import './Footer.css'
import logo from '../../Assisstents/img/footer.svg'
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={logo} alt="" />
                        <div className="text">
                            <a className='last' href="#!">+1 (888) 777-77-77</a>
                            <p className="last">2637 Fairfax Ave Culver City, CA 90232</p>
                            <p className="last">Segway  California © 2017</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer