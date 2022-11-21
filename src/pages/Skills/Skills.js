import React,{ useEffect, useState } from 'react'




import './Skills.css'
import AnimatedLetters from './../../components/AnimatedLetters';






const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
 


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
  



  return (
    <>
  
    <div id="skills" className="mySkills mt-3" >
    <h2 className="text-center mb-5">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['S', 'k', 'i', 'l', 'l', 's']}
          idx={15}
        />
      </h2>
      <p>I Work Hard to Improve My Skills Regularly</p>





<div className="three">
  <div className="skills">
    <h2>SKILLS</h2>
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
 
  <div className="libraire">
    <h2>LIBRARIES</h2>
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
  
    </>
  
  );
};
export default Skills