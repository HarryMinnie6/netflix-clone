import React, { useEffect, useState } from "react";
import "./NavBar.css";

function NavBar() {

    const[show, handleShow] = useState(false)
    //this is for the scroll effect
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}> 
      <img
        className="nav__logo"
        src={require('./netflix-logo.png')}
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://startupcan.ch/wp-content/uploads/2019/04/profile-pictures-avatars-9.png"
        alt="User Avatar"
      />
    </div>
  );
}

export default NavBar;
