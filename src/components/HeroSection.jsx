import React from 'react'
import logo from '../assets/logo.webp'
import banner1 from '../assets/banner1.webp'
import banner2 from '../assets/banner2.jpg'

const HeroSection = () => {
  return (
 <>
       <section className='hero'>
    <div className='hero_image'>
        <img src={logo} alt=''/>
        <div className='input'> 
        <input type='text' placeholder='Product search...'/>
        <p><i class="bi bi-search"></i></p>
        </div>

    </div>

    <ul>
        <li>Shop <i class="bi bi-chevron-down"></i></li>
        <li>Video Gallery</li>
        <li>Trending Now</li>
        <li>Education <i class="bi bi-chevron-down"></i></li>
        <li>New</li>
        <li>Sales</li>
        
    </ul>
    </section>

    <div className='image_section'>
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  
    <div class="carousel-item">
      <img src={banner2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
 </>
  )
}

export default HeroSection