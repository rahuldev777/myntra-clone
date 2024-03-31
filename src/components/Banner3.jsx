import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './banner3.css'


function Banner3() {
  return (
    <div>
      <div className='container-fluid mt-5'>
        <h2 className='ms-4'>SHOP BY CATEGORY</h2>
        <div className=' my-5'>
          <Row className='m-3 d-flex justify-content-center align-items-center'>
            {
              data.map((data)=>(
              
                <Col className='cards text-center' md={2}>
                  
                  <a href="http://"><img src={data.img} alt="" srcset="" height={300} className='my-3' /></a>

                </Col>
              ))
            }
          </Row>
          </div>

        </div>

      </div>
    
  )
}
const data=[{
  img:'./image3/1.jpg'
},
{
  img:'./image3/2.jpg'
},
{
  img:'./image3/3.jpg'
},
{
  img:'./image3/4.jpg'
},
{
  img:'./image3/5.jpg'
},
{
  img:'./image3/6.jpg'
},
{
  img:'./image3/7.jpg'
},
{
  img:'./image3/8.jpg'
},
{
  img:'./image3/9.jpg'
},
{
  img:'./image3/10.jpg'
},
{
  img:'./image3/11.jpg'
},
{
  img:'./image3/12.jpg'
},
{
  img:'./image3/13.jpg'
},
{
  img:'./image3/14.jpg'
},
{
  img:'./image3/15.jpg'
},
{
  img:'./image3/16.jpg'
},{
  img:'./image3/17.jpg'
},{
  img:'./image3/18.jpg'
},
{
  img:'./image3/19.jpg'
},
{
  img:'./image3/20.jpg'
},
{
  img:'./image3/22.jpg'
},
]

export default Banner3