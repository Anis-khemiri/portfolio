import React, { useEffect} from 'react'
import { BsCodeSlash } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FaGlobeAsia, FaMoneyBillAlt } from 'react-icons/fa';


import './Counter.css'

export default function Counter() {
  


let nums = document.querySelectorAll(".nums .num");  

  useEffect(()=> {
    
  // console.log(spans[0].dataset.goal)
  
  myposition();

    
  })
  function myposition() {
   
    if (window.scrollY >= 850) {
      console.log("hi");
    
        nums.forEach((num) => startCount(num));
      
   
  
  
    }}
  
  
   
  
  function startCount (el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
          el.textContent++;
          if (el.textContent === goal) {
            clearInterval(count);
          }
        }, 2000 / goal);
      }
      


  
  return (
    <>
    <div className="mysection">
      <div className="nums">
<div className="box align-self-center">
      <BiUser className="myicon fa-2x" />
    <span className="num" data-goal="150">0</span>
    <span className="text">Clients</span>
    </div>
    <div className="box align-self-center">
      <BsCodeSlash className="myicon fa-2x" />
    <span className="num" data-goal="135">0</span>
    <span className="text">Projects</span>
    </div>
    <div className="box align-self-center">
      <FaGlobeAsia className="myicon fa-2x"/>
    <span className="num" data-goal="50">0</span>
    <span className="text">Countries</span>
    </div>
    <div className="box align-self-center">
      <FaMoneyBillAlt className="myicon fa-2x"/>
    <span className="num" data-goal="500">0</span>
    <span className="text">Money</span>
    </div>
    </div>
    </div>
    </>
  )
}

