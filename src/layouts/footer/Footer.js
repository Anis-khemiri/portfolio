import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import myLogo from "../../assets/images/myLogo.png" ;
import "./Footer.css"
export default function Footer() {
  return (
    <div>
<footer className="container-fluid d-flex justify-content-between pt-4">
  <div className="myBrand ">
  <img src={myLogo} alt="" />
  </div>
  <div className="mySociaIcon">
    <ul className="mySociaIconList d-flex justify-content-center list-unstyled">
      <li className="myfacebook rounded-circle"><FaFacebookF /></li>
      <li className="mygithub"><AiFillGithub /></li>
      <li className="mytwitter"><BsTwitter /></li>
      <li className="mylinkedin"><AiFillLinkedin /></li>
     
    </ul>
  </div>
  <div className="myCopyRight">
    <p>Copyright © 2022 Anis Khemiri.<br></br>
      All Rights Reserved.</p>
  </div>
</footer>
    </div>
  )
}
