import React, { useEffect, useState } from 'react'

import AnimatedLetters from '../../components/AnimatedLetters'
import Counter from '../../components/Counter/Counter';

import './Skills.css'







export default function Skills() {
    const [letterclassName, setLetterclassName] = useState('text-animate');
 
      
    useEffect(() => {
      setTimeout(() => {
        setLetterclassName('text-animate-hover');
      }, 3000);
    }, []);

 


useEffect(()=> {
  let section = document.querySelector(".three");
let spans = document.querySelectorAll(".progress span");
// console.log(spans[0].dataset.goal)


window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {

    
    
      spans.forEach((span) => {
        span.style.width = span.dataset.goal + "%";
      });
 
    }





    }
  }
)


  return (
    <>
  
    <div className='mySkills'>
      <h2>
      <AnimatedLetters
          letterclassName={letterclassName}
          strArray={['S', 'k', 'i', 'l', 'l', 's']}
          idx={15}
        />
      </h2>
      <p>I Work Hard to Improve My Skills Regularly</p>





<div className="three">
  <div className="skills">
    <h3>HTML</h3>
    <div className="progress">
      <span style={{width: 0}} data-goal = "50"></span>
    </div>
    <h3>CSS</h3>
    <div className="progress">
      <span style={{width: 0}} data-goal = "90" ></span>
    </div>
    <h3>Javascript</h3>
    <div className="progress">
      <span style={{width: 0}}  data-goal = "70"></span>
    </div>
    <h3>React</h3>
    <div className="progress">
      <span style={{width: 0}}  data-goal = "80"></span>
    </div>
 


  </div>
 
</div>

    </div>
    <Counter />
    </>
  
  )
}
