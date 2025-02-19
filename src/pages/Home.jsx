import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/banner.jpg"
function Home() {
  return (
    <div className='home'  style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>PIZZA TOCO</h1>
        <p>"The best of both worlds!"<br/> Only at PIZZA TOCO</p>
        <Link to="/menu">
        <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home