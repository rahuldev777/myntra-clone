import React from 'react'
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';
import "/node_modules/jquery/dist/jquery.min.js";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";


function Header() {
  return (
    <>
      <Navbar expand="lg" className="p-4 sticky-top "  style={{ boxShadow:" 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <Container>
        <Navbar.Brand href="#home" className=''>
            <img src="https://aartisto.com/wp-content/uploads/2020/11/myntra-1200x900.png"  style={{width:'60px',marginLeft:'-25px'}} alt="" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className=" ">
            <Nav.Link href="#home"className='fw-bold' style={{fontSize:"15px"}} >MEN</Nav.Link>
            <Nav.Link href="#link"className='fw-bold' style={{fontSize:"15px"}} >WOMEN</Nav.Link>
            <Nav.Link href="#home"className='fw-bold'  style={{fontSize:"15px"}} >KIDS</Nav.Link>
            <Nav.Link href="#link" className='fw-bold' style={{fontSize:"15px"}} >BEAUTY</Nav.Link>
            <Nav.Link href="#link" className='fw-bold' style={{fontSize:"15px"}}  >STUDIO</Nav.Link>
            <NavDropdown title="Dropdown" className='fw-bold' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

           
          </Nav>
          <Nav className="ms-auto"> 
          <Form.Control
          style={{width:'400px',borderRadius:'5px',marginRight:"20px",border:"none"}}
              type="text"
              placeholder="Search for products,brands and more"
              className="search mr-sm-2 "
            />
            <Nav.Link href="#home"  style={{fontSize:"13px"}}  className='icon-user  text-center fw-bold' ><br/><span>Profile</span></Nav.Link>
            <Nav.Link href="#link"style={{fontSize:"13px"}}   className='icon-heart text-center fw-bold'><br/><span>Wishlist</span></Nav.Link>
            <Nav.Link href="#home" style={{fontSize:"13px"}} className='icon-bag text-center fw-bold'><br /><span>Bag</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     

     
    </>
  )
}

export default Header