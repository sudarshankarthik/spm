import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../assets/icons/board.png'
import {
  MDBNavbar,
  MDBNavbarItem,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav
} from 'mdb-react-ui-kit';
import { Link,useLocation } from 'react-router-dom';



const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  
  const location = useLocation();
  useEffect(() => {
    setActiveItem(location.pathname.startsWith('/') ? location.pathname : '');
  }, [location,activeItem]);

  return (
    <header>
    <MDBNavbar expand='lg' fixed='top' dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand tag={Link} to='/'><img src={logo} alt='Software Project Management' height='30' loading='lazy'/>  </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem> <MDBNavbarLink  active={activeItem === '/intro'} aria-current='page' tag={Link} to='/intro'> Intro </MDBNavbarLink> </MDBNavbarItem>
            <MDBNavbarItem> <MDBNavbarLink  active={activeItem === '/blog'} tag={Link} to='/blog'>Blog</MDBNavbarLink> </MDBNavbarItem>
            <MDBNavbarItem> <MDBNavbarLink  active={activeItem === '/theory'}tag={Link} to='/theory'>Theory</MDBNavbarLink> </MDBNavbarItem>
            <MDBNavbarItem> <MDBNavbarLink  active={activeItem === '/caculator'} tag={Link} to='/caculator'>Caculator</MDBNavbarLink> </MDBNavbarItem>
            <MDBNavbarItem> <MDBNavbarLink  active={activeItem === '/about'} tag={Link} to='/about'>About</MDBNavbarLink> </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </header>
  )
}

export default Header