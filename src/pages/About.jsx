import React from 'react'
import BannerImage from "../assets/banner.jpg"


function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}>
      </div>
      <div className='aboutBottom'>
        <h1>Welcome to PIZZA TOCO</h1>
        <p>
          At PIZZA TOCO, we believe in crafting the perfect pizza experience with fresh ingredients,
          bold flavors, and a passion for quality. From our hand-tossed dough to our signature sauces
          and premium toppings, every bite is a celebration of taste. Whether you love classic flavors
          or adventurous toppings, we've got something for every pizza lover!
        </p>
      </div>
    </div>
  )
}

export default About