import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])

      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                {/* calculator types */}
                <Nav.Link href="#calculators" className={activeLink === 'calculators' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('calculators')}>BMI</Nav.Link>
                <Nav.Link href="#calculators" className={activeLink === 'calculators' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('calculators')}>Calculator</Nav.Link>
                <Nav.Link href="#calculators" className={activeLink === 'calculators' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('calculators')}>BMR</Nav.Link>

                <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                <button className="login"><span>login/signUp</span></button>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
}
