import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephoneForward} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
import {SiFreelancer} from 'react-icons/si'

import './Card.css'
export default function Card() {
  return (
    <div className='card'>
        <ul className='myListInfo ' >
      <li><CgProfile />name</li>
<span>Anis khemiri</span>
<li><AiOutlineMail />Mail</li>
<span>aniskhemiri99@gmail.com</span>
<li><BsTelephoneForward />Phone</li>
<span>+21697442612</span>
<li><SiFreelancer />Freelance</li>
<span>available</span>
<li><CiLocationOn />Aderess</li>
<span>Tunisia</span>
</ul>
    </div>
  )
}
