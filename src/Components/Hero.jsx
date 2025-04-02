import React from 'react'
import amazon from '../assets/amazon.png'
import flipkart from '../assets/flipkart.png'
import nike from '../assets/hero-image.png'

const Hero = () => {
  return (
    <main className='hero'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
            OUR MISSION IS TO PROVIDE YOU WITH THE BEST SHOES, AT THE BEST PRICE.
            </p>
            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>

            <div className='shooping'>
                <p>Also Avaliable On</p>
                <div className='brand-icons'>
                    <img src={amazon} alt="amazon" />
                    <img src={flipkart} alt="flipkart" />
                </div>
            </div>
        </div>
        <div className='hero-image'>
            <img src={nike} alt="nike" />
        </div>
    </main>
  )
}

export default Hero