import React from 'react'
import fw1 from '../assets/fw1.jpg'
import fw2 from '../assets/fw2.jpg'
import fw3 from '../assets/fw3.jpg'
import fw4 from '../assets/fw4.jpg'

const Footwear = () => {
  return (
    <>
          <h4 className="heading shop">SHOP<span className='foot'>CHI FOOTWEAR</span></h4>
  <div className='shop_img'>
  <div className='shop_img_1'>
    <img src={fw1} alt=''/>
    <p>CHI Footwear Graphene High Tech Foam Insoles for Women</p>
    <p> $109.99</p>
   
   <div className='btn'>
   <button>Select Options</button>
    
   </div>

    </div>
  <div className='shop_img_1'>
    <img src={fw2} alt=''/>
    <p>CHI Footwear Marine Eye Slipper</p>
    <p>$109.99</p>
   
   <div className='btn'>
   <button>Select Options</button>
    
   </div>

    </div>
  <div className='shop_img_1'>
    <img src={fw3} alt=''/>
    <p>CHI Footwear Miel Sandal Avarca</p>
    <p>$109.99</p>
   
   <div className='btn '>
   <button>Select Options</button>
    
   </div>

    </div>
  <div className='shop_img_1'>
    <img src={fw4} alt=''/>
    <p>CHI Footwear Love You Slipper</p>
    <p>$109.99</p>
   
   <div className='btn foots'>
   <button>Select Options</button>
    
   </div>

    </div>

  </div>
    </>
  )
}

export default Footwear