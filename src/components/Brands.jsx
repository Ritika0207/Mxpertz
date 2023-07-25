import React from "react";
import logo from "../assets/logo.webp";

import img2 from '../assets/footwear.webp'
import bi from '../assets/bi.webp'

const Brands = () => {
  return (
    <>
      <h4 className="heading">SHOP OUR <span>  BRANDS</span></h4>
      <div className="brands">
        <div className="brand_1">
          <div className="brand_img"></div>
          <div className="text">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="brand_1">
          <div className="brand_1">
            <div className="brand_img one"></div>
            <div className="text">
              <img src={bi} alt="" />
            </div>
          </div>
        </div>
        <div className="brand_1">
          <div className="brand_1">
            <div className="brand_img two"></div>
            <div className="text">
              <img className="chi" src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
