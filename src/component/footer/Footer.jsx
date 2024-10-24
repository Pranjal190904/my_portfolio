import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        PRANJAL
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; PRANJAL.All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
