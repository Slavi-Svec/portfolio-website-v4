import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Image from "../Image/Image";
import avatarOne from "../../images/AvatarLogo-1.png";
import "./styles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [navbarText, setNavbarText] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //  show hamburger menu button on mobile device
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  //  change background from transparent to blue when scroll down the page
  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  //   chage text color in the navbar when scroll down the page
  const changeText = () => {
    if (window.scrollY >= 20) {
      setNavbarText(true);
    } else {
      setNavbarText(false);
    }
  };

  window.addEventListener("scroll", changeText);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <Image className="logo" src={avatarOne} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={navbarText ? "navbarText active" : "navbarText"}>
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className={navbarText ? "navbarText active" : "navbarText"}>
              <Link to="/work" className="nav-links" onClick={closeMobileMenu}>
                Work
              </Link>
            </li>
            <li className={navbarText ? "navbarText active" : "navbarText"}>
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
