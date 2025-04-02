import React from 'react'

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
                    <img src="/src/assets/amazon.png" alt="amazon" />
                    <img src="/src/assets/flipkart.png" alt="flipkart" />
                </div>
            </div>
        </div>
        <div className='hero-image'>
            <img src="/src/assets/hero-image.png" alt="nike" />
        </div>
    </main>
  )
}

export default Hero