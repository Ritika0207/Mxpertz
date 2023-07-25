import React from 'react'
import shop1 from '../assets/shop1.webp'
import shop2 from '../assets/shop2.webp'
import shop3 from '../assets/shop3.webp'
import shop4 from '../assets/shop4.jpg'

const Shop = () => {
  return (
   <>
      <h4 className="heading shop">SHOP<span>CHI</span></h4>

    <div className='shop_img'>
        <div className='shop_img_1'>
        <img src={shop1}/>
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
        <img src={shop2}/>
        <p>CHI x Barbie On The Go Kit – Totally Hair</p>
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
        <img src={shop3}/>
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
        <img src={shop4}/>
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

export default Shop