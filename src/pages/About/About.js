import React,{ useEffect, useState } from 'react';
import {
  faVuejs,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import myResume from '../../assets/images/myResume.pdf';
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';
import Card from '../../components/Card/Card';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
    <div id="about">
      <h2 className="text-center mb-5">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
          idx={15}
        />
      </h2>
      <div className="myAbout d-flex justify-content-between">
        <div className="aboutInfo ">
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
      
        </div>

        <div className="stage-cube-cont ms-auto">
          <div className="cubespinner mt-3">
            <div className="face1">
              <FontAwesomeIcon icon={faVuejs} color="#3fb984" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

      <div className="Info d-flex justify-content-center align-items-center">
        <Card />
      </div>
      <div className="pdf">
            <a href={myResume} target="_blank" rel="noopener noreferrer">
            <button className="buttonDownload mt-2">Download CV</button>
            </a>
          </div>
      

      </div>
    </>
  );
};

export default About;
