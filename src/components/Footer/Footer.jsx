import React from "react";
import GitHub from "../../images/GitHub64.png";
import Twitter from "../../images/Twitter64.png";
import Linkedin from "../../images/Linkedin64.png";
import CodePen from "../../images/CodePen64.png";
import Medium from "../../images/Medium-large1.png";
import Image from "../Image/Image";
import "./styles.css";

const Footer = () => (
  <footer className="footer">
    <ul className="footer-logos">
      <li>
        <a
          href="https://www.linkedin.com/in/slavi-svec-262949204/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="footer-logo" src={Linkedin} />
        </a>
      </li>
      <li>
        <a
          href="https://www.medium.com/@slavi.svec"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="footer-logo" src={Medium} />
        </a>
      </li>
      <li>
        <a
          href="https://mobile.twitter.com/SlaviSvec"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="footer-logo" src={Twitter} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Slavi-Svec"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="footer-logo" src={GitHub} />
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/slavi-svec"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="footer-logo" src={CodePen} />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
