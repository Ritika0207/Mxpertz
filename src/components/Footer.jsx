import React from 'react'
import img from '../assets/chi-1.webp'
import img2 from '../assets/CHI-Footwear-Logo-Stack-50-1.webp'
import img3 from '../assets/biosilk-1.webp'
import img4 from '../assets/Beyond.webp'
import footerimg1 from '../assets/footerimg1.webp'
import footer2 from '../assets/footer2.webp'

const Footer = () => {
  return (
  <>
     <footer>
    <ul>
    <h5>SUPPORT & HELP</h5>
        <li>Contact Us</li>
        <li>Shipping</li>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
        <li>Warranty and Returns</li>
        <li>Disclaimer</li>
        <li>CHI Rewards Program</li>
        <li>CHI Affiliate Program</li>
        <li>Professional Program</li>
        <li>Stylist Affiliate Program</li>
        <li>Club CHI Rewards</li>
        <li>Frequently Asked Questions</li>
        <li>Zip</li>
        <li>Login</li>
        <li>Register</li>
        <li>My Account</li>
        <li>Logout</li>
    </ul>

    <div className='email'>
        <h5>UNLOCK 10% OFF YOUR FIRST ORDER</h5>
        <p> Save on your first order and get email only offers when you join.</p>
        <input type='email' placeholder='Email'/>
        <button>Sign Up</button>
    </div>

    <ul>
       <h5>PRODUCT TYPE</h5>
        <li>Flat Irons</li>
        <li>Curling Irons & Wands</li>
        <li>Shampoo & Conditioner</li>
        <li>Thermal Protection</li>
        <li>Skincare</li>
        <li>Leave-In</li>
        <li>Masques + Treatments</li>
        <li>Cremes + Gels + Oils</li>
        <li>Sprays + Mousses + Stylers</li>
        <li>Essential Oils</li>
        <li>Hair Dryers</li>
        <li>Clippers and Trimmers</li>
        <li>Pre-Stylers</li>
        <li>Waxes + Pomades</li>
        <li>Colors & Lighteners</li>
        <li>Brushes</li>
        <li>Combs</li>
        <li>Gift Sets</li>
        <li>Travel</li>
    </ul>

    <ul className='list'>
    <h5>HAIR CONCERNS</h5>
        <li>Anti-Frizz</li>
        <li>Curl Care</li>
        <li>Color Protection</li>
        <li>Scalp Care</li>
        <li>Repair + Rebuild</li>
        <li>Thermal Protection</li>
        <li>Volume</li>
        <li>Hydrate</li>
        <li>Primer</li>
        <li>Shine</li>
        <li>Paraben Free</li>
        <li>Gluten Free</li>
        <li>Sulfate Free</li>
    </ul>
   </footer>

   <div className='last'>
    <h4>OUR FAMILY</h4>
    <div className='last_img'>
        <img src={img} alt=''/>
        <img src={img2} alt=''/>
        <img src={img3} alt=''/>
        <img src={img4} alt=''/>
    </div>
    <h5>FOLLOW US ON</h5>
    <div className='icons'>
    <i class="bi bi-facebook"></i>
    <i class="bi bi-instagram"></i>
    <i class="bi bi-pinterest"></i>
    <i class="bi bi-youtube"></i>
    <i class="bi bi-linkedin"></i>
    <i class="bi bi-twitter"></i>
    </div>
    <div className='line'></div>

    <div className='footer_img'>
    <img src={footerimg1} alt=''/>
    <img src={footer2} alt=''/>

    </div>

    <p>©2023 Farouk Systems International</p>
   </div>
  </>
  )
}

export default Footer