import React from 'react'
import './footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
     <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
         
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-dark fs-7'>
                <MDBIcon icon="gem" className="me-3" />
                Registered Office Address
              </h6>
              <p>
              Buildings Alyssa,<br />
Begonia and Clover situated in Embassy Tech Village,<br />
Outer Ring Road,<br />
Devarabeesanahalli Village,<br />
Varthur Hobli,<br />
Bengaluru – 560103, India
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-dark'>CUSTOMER POLICIES</h6>
              <p>
                <a href='#!' className='text-reset'>
                Contact Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  T&C
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Terms for Use
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Track Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
             Shipping
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
             Cancellation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
             Privacy Policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto '>
              <h6 className='text-uppercase fw-bold  text-dark'>Experiance Myntra App on Mobile</h6>
              <p>
                <a href='#!' className='text-reset '>
                 <img  src="https://logowik.com/content/uploads/images/google-play-badge-catalan-disponible-a-google-play9401.logowik.com.webp" height={140} alt="d" srcset="" />
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset '>
                <img style={{margin:"-65px"}} src="https://target.scene7.com/is/image/Target/M_App_appstore219084-200226_1582755861890?wid=668&qlt=80&fmt=pjpeg" alt="" height={80} srcset="" />
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            
              <p>
                <MDBIcon icon="home" className="me-1 p-1" />
                <img src="https://toppng.com/uploads/preview/100-original-product-11551060534qbq11de3xz.png" alt="" height={70} srcset="" style={{float:"left"}} /><span style={{fontWeight:"bolder",color:"black"}}>100% ORIGINAL</span> guarantee for all products at myntra.com
              </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
       
      </div>
    </MDBFooter>
        </>
  )
}

export default Footer