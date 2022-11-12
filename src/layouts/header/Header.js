import React from 'react'

import {Link} from 'react-scroll';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import './Header.css';




export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">A.K</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-2">
        <Link to="/" spy={true} smooth={true} offset={50} duration={1000}>Home</Link>
        </li>
        <li className="nav-item mx-2">
        <Link to="about" spy={true} smooth={true} offset={50} duration={1000}>About</Link>
        </li>
        <li className="nav-item mx-2">
        <Link to="service" spy={true} smooth={true} offset={-20} duration={1000}>Service</Link>
        </li>
        <li className="nav-item mx-2">
        <Link to="portfolio" spy={true} smooth={true} offset={50} duration={1000}>Portfolio</Link>
        </li>
        <li className="nav-item mx-2">
        <Link to="skills" spy={true} smooth={true} offset={50} duration={1000}>Skills</Link>
        </li>
        <li className="nav-item mx-2">
        <Link to="contact" spy={true} smooth={true} offset={50} duration={1000}>Contact</Link>
        </li>
      
      </ul>
      <div className='mysocialIcon'>
    
      <FaFacebookF className='mx-1' />
      <BsTwitter className='mx-1'/>
      <AiFillGithub className='mx-1'/>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
