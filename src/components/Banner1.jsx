import React from 'react'
import './banner1.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';

function Banner1() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
   
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
           
           
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
           
           
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
           
           
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
           
           
          }
        },
       
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
           
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
           
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
  };

  return (
    
    <div className='container-fluid m-auto mt-5 mb-5'>
      <h2 id="banner-title" className='mb-5 ms-4'>MEDAL WORTHY BRANDS TO BAG</h2>
 <div>
 <Slider {...settings}>
  {
    data.map((d)=>(
<>
<div className='bg-white text-black 'style={{height:'300px;'}} >
    <div className='d-flex justify-content-center align-items-center'>
       <img src={d.img} alt="d" srcset="" height={'300px'} />
      </div>
      <div className='d-flex text-start flex-column   '>
          <p id="title" className=' lh-1 mt-4'>{d.title}</p>
          <p className='fs-5 fw-bold text-dark lh-1   '>{d.offer}</p>
          
      </div>
      <Button variant="outline-secondary" id="btn">Shop Now</Button>{' '}
</div>
    
      </>
    ))}
    </Slider>
  

 </div>




      </div>



    
  )
}

const data=[
  {
    img:'./image/creulty.jpg',
    title:"Creulty-Free personal Care",
    offer:'FLAT 50%-70% OFF',
    logo:''
  },
  {
    img:'./image/Bst-selling-csuals.jpg',
    title:"Best-selling Casuals",
    offer:'Min 50%-70% OFF',
    logo:''
  },
  {
    img:'./image/Work-ready.jpg',
    title:"Work-Ready Casuals",
    offer:'Min 50%-70% OFF',
    logo:''
  },
  {
    img:'./image/Laid-backs.jpg',
    title:"Laid-Backs picks",
    offer:'Min 50%-70% OFF',
    logo:''
  },
  {
    img:'./image/Trending-footwear.jpg',
    title:"Trending Footwears",
    offer:'Min 50%-70% OFF',
    logo:''
  },
  {
    img:'./image/Trolley-bags.jpg',
    title:"Trolley Bags",
    offer:'Min 50%-70% OFF',
    logo:''
  },
  {
    img:'./image/Saree.jpg',
    title:"Designers Saree",
    offer:'Min 50%-70% OFF',
    logo:''
  },
  {
    img:'./image/Best-selling-formals.jpg',
    title:"Best-selling Formals",
    offer:'Min 50%-70% OFF',
    logo:''
  },
  {
    img:'./image/stylish-footwear.jpg',
    title:"stylish Footwears",
    offer:'Min 50%-70% OFF',
    logo:''
  },

  {
    img:'./image/elvtd-picks.jpg',
    title:"Elaveted-picks",
    offer:'Min 50%-70% OFF',
    logo:''
  },

]

export default Banner1