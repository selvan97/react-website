import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./AppBar.css";
import img_2 from './Assets/pic_one.jpg'
import img_1 from './Assets/pic_two.jpg'



function AppBar() {
  return (
    <div>
  

      <div className="customize_carousel">
        <div className="">
      <Carousel>
      <Carousel.Item interval={10000}>
        <img
          className=" customize_image"
          src={img_1}
          alt="First slide"
        />
        <div className='customize_caption'>
          <p className="text-capitalize text-secondary">not fried not baked</p>
          <h2 className="text-capitalize text-black slide-in-left">freeze dried fruit </h2>
          <h2 className="text-capitalize text-black slide-in-right ">pineapple cocunut</h2>
          <p className="text-capitalize text-secondary" >free shipping on qualified orders above $35</p>
          <button type="button" class="btn btn-success">SHOP NOW</button>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className=" customize_image"
          src={img_2}
          alt="Second slide"
        />
        <div className='customize_caption '>
        <p className="text-capitalize text-secondary">100% NATURAL</p>
          <h2 className="text-capitalize text-black slide-in-left">Organic Fruits</h2>
          <h2 className="text-capitalize text-black slide-in-right">Summer Drinks</h2>
          <p className="text-capitalize text-secondary " >Fresh New Pack Brusting Fruits</p>
          <button type="button" class="btn btn-success">SHOP NOW</button>
        </div>
      </Carousel.Item>
      </Carousel>
     
      </div>
        
      </div>


    </div>
  );
}

export default AppBar;
