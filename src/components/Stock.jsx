import React from 'react'
import silk1 from '../assets/silk1.webp'
import silk2 from '../assets/silk2.jpg'
import silk3 from '../assets/silk3.webp'
import silk4 from '../assets/silk4.webp'

const Stock = () => {
  return (
    <>
        <h4 className="heading shop">SHOP<span className='span'>BIOSILK</span></h4>

<div className='shop_img'>
    <div className='shop_img_1'>
    <img src={silk1}/>
    <p>1.25″ Ceramic Hairstyling Iron – Totally Hair</p>
    <p>$109.99</p>
    <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
    </select>
   <div className='btn'>
   <button>Add to Cart</button>
    <button>Buy Now</button>
   </div>

    </div>

    <div className='shop_img_1'>
    <img src={silk2}/>
    <p>CHI x Barbie On The Go Kit – Totally Hair</p>
    <p>$109.99</p>
   
   <div className='btn'>
   <button>Add to Cart</button>
    
   </div>

    </div>

    <div className='shop_img_1'>
    <img src={silk3}/>
    <p>1.25″ Titanium Triple Barrel Deep Waver – Totally Hair
</p>
    <p>$109.99</p>
    <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
    </select>
   <div className='btn'>
   <button>Add to Cart</button>
    <button>Buy Now</button>
   </div>

    </div>

    <div className='shop_img_1'>
    <img src={silk4}/>
    <p>SO Smooth Hari Dryer</p>
    <p>$109.99</p>
    <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
    </select>
   <div className='btn new'>
   <button>Add to Cart</button>
    <button>Buy Now</button>
   </div>

    </div>
</div>
    </>
  )
}

export default Stock