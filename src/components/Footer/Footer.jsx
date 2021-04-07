import React from 'react'
import GitHub from '../../images/GitHub64.png'
import Twitter from '../../images/Twitter64.png'
import Linkedin from '../../images/Linkedin64.png'
import CodePen from '../../images/CodePen64.png'
import Image from '../Image/Image'
import './styles.css'

const Footer = () => (
  <footer className="footer">
    <ul className="footer-logos">
      <li>
        <a href="https://www.linkedin.com/in/slavi-svec-262949204/">
          <Image src={Linkedin} />
        </a>
      </li>
      <li>
        <a href="https://mobile.twitter.com/SlaviSvec">
          <Image src={Twitter} />
        </a>
      </li>
      <li>
        <a href="https://github.com/Slavi-Svec">
          <Image src={GitHub} />
        </a>
      </li>
      <li>
        <a href="https://codepen.io/slavi-svec">
          <Image className="footer-logo" src={CodePen} />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
