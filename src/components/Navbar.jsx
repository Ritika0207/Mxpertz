import React from 'react'
import img from '../assets/chi-1.webp'
import img2 from '../assets/CHI-Footwear-Logo-Stack-50-1.webp'
import img3 from '../assets/biosilk-1.webp'
import img4 from '../assets/Beyond.webp'

const Navbar = () => {
  return (
  
    <nav>
    <div className='shipping'>
        <p>FREE STANDARD SHIPPING FOR ORDERS OVER $100.
        <a href='#'> LEARN MORE</a>
        </p>
    </div>

    <div className='nav_bar'>
        <div className='nav_img'>
            <img src={img} alt=''/>
            <img src={img3} alt=''/>
            <img className='img_1' src={img2} alt=''/>
            <img className='img_2' src={img4} alt=''/>
        </div>

        <div className='nav_text'>
            <p>Login/Register</p>
        </div>
    </div>
    </nav>

    
  
  )
}

export default Navbar