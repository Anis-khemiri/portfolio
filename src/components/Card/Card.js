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
        <div className='myListInfo  ' >
      <h4><CgProfile className='mx-3 my-3'/>Name: <span>Anis khemiri</span></h4>

<h4><AiOutlineMail className='mx-3' my-3 />Mail: <span>aniskhemiri99@gmail.com</span></h4>

<h4><BsTelephoneForward className='mx-3 my-3'/>Phone: <span>+21697442612</span></h4>

<h4><SiFreelancer className='mx-3 my-3'/>Freelance: <span>available</span></h4>

<h4><CiLocationOn className='mx-3 my-3'/>Aderess: <span>Tunisia</span></h4>

</div>
    </div>
  )
}
