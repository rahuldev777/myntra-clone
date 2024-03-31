import React from 'react'

import Button from 'react-bootstrap/Button';
import Slider from "react-slick";
import './carousal.css';


function Carousal() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      }
    ]
  };
  

  return (
    <div className='container-fluid mt-5 '>

<Slider {...settings}>
      <div className='d-flex justify-content-between w-100 d-block'>
        
      <img
        className="d-block   "
        src="./b-3.jpg"
        alt="First slide"
        width={'1000px'}
        height={'400px'}
        style={{height:'50px;'}}
      /> 
       <div className=' flex-column d-flex justify-content-center align-items: center mx-auto'>
       
       <h1>HANDBAGS</h1>
       <h3>50%-70% Off</h3><br />
       <Button variant="outline-dark">+Explore</Button>

      </div>

      </div>
      <div className='d-flex justify-content-between w-100 d-block '>
       
      <img
        className="d-block  "
        src="./components/b-2.jpg"
        alt="Second slide"
        width={'1000px'}
        height={'400px'}
        style={{height:'50px;'}}
      />
       <div className=' flex-column d-flex justify-content-center align-items: center mx-auto'>
       
       <h1>HANDBAGS</h1>
       <h3>50%-70% Off</h3><br />
       <Button variant="outline-dark">+Explore</Button>

      </div>


      </div>
      <div className='w-100  d-block d-flex justify-content-between bg-light'>
     
      <img
        className="d-block "
        src="../src/components/b-4.jpg"
        alt="Third slide"
        width={'1000px'}
        height={'400px'}
        style={{height:'50px;'}}
      />
      <div className='flex-column d-flex justify-content-center align-items: center mx-auto'>

      <h1>HANDBAGS</h1>
       <h3>50%-70% Off</h3><br />
       <Button variant="outline-dark">+Explore</Button>
       

     
      </div>


      </div>
    </Slider>







    
  


   
    </div>
  )
}

export default Carousal