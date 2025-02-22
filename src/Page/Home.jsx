import React from 'react'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import Section from '../Components/Section/Sections'
import Main from '../Components/Main/Main'
import Pack from '../Components/Pack/Pack'
import Product from '../Components/Product/Product'
import Features from '../Components/Features/Features'
import Segway from '../Components/Segway/Segway'
import Smart from '../Components/Smart/Smart'
import Dual from '../Components/Dual/Dual'
import Led from '../Components/Led/Led'
import Fold from '../Components/Fold/Fold'
import Power from '../Components/Power/Power'
import Fast from '../Components/Fast/Fast'
import Modes from '../Components/Modes/Modes'
import Manual from '../Components/Manual/Manual'
import Compare from '../Components/Compare/Compare'
import Reviews from '../Components/Reviews/Reviews'
import Control from '../Components/Control/Control'
import Other from '../Components/Other/Other'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section/>
      <Main/>
      <Pack/>
      <Product/>
      <Features/>
      <Segway/>
      <Smart/>
      <Dual/>
      <Led/>
      <Fold/>
      <Power/>
      <Fast/>
      <Modes/>
      <Manual/>
      <Compare/>
      <Reviews/>
      <Control/>
      <Section/>
      <Other/>
      <Footer/>
    </div>
  )
}

export default Home