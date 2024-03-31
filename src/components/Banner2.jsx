import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from 'react-bootstrap';
import './banner2.css'


function Banner2() {
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
    <div>

        <div className='container-fluid m-auto mt-4 mb-4'>
            <h2 id="banner-title" className='mb-5 ms-4'>GRAND GLOBAL BRANDS</h2>
            <Slider {...settings}>
            {

                data.map((data)=>(

                    <div className='bg-white text-black 'style={{height:'300px;'}} >
                    <div className='d-flex justify-content-center align-items-center'>
                       <img src={data.img} alt="d" srcset="" height={'300px'} />
                      </div>
                      <div className='d-flex text-start flex-column'>
                          <p id="title" className=' lh-1 mt-4'>{data.title}</p>
                          <p className='fs-5 fw-bold text-dark lh-1   '>{data.off}</p>
                          
                      </div>
                      <Button variant="outline-secondary" id="btn">Shop Now</Button>{' '}
                </div>
            ))
            }
              </Slider>
        

        </div>
    </div>
  )
}
const data=[
    {
    img:'/image2/Cool&casual.jpg',
    title:'Cool & Casuals',
    off:'MIN.30% OFF'
},
{
    img:'/image2/Everyday-go-to Find.jpg',
    title:'Everyday Go To Find',
    off:'UP TO 60% OFF'
},
{
    img:'/image2/Hottest-pair.jpg',
    title:'Hottest Pair',
    off:'MIN.20% OFF'
},
{
    img:'/image2/Laid-back-style.jpg',
    title:'Laid Back Style',
    off:'FLAT 40% OFF'
},
{
    img:'/image2/Must-have-collection.jpg',
    title:'Must Have Collection',
    off:'UP TO 70% OFF'
},
{
    img:'/image2/Sneakers and More.jpg',
    title:'Sneakers And More',
    off:'UP TO 10% OFF'
},
{
    img:'/image2/stunning-Footwear.jpg',
    title:'Stunning-Footwear',
    off:'UP TO 80% OFF'
},
{
    img:'/image2/stylishfits.jpg',
    title:'Stylish Fits',
    off:'MIN 30% OFF'
},
{
    img:'/image2/trend-forward-collection.jpg',
    title:'Trend Forward Collection',
    off:'FLAT 10% OFF'
},
]
export default Banner2