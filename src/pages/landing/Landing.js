import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/AnimatedLetters.js';
import './Landing.css';
import avatar from '../../assets/images/avatar.png';
import Particles from '../../components/Particles';

const Landing = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = [
    ' ',
    'A',
    'n',
    'i',
    's',
    '',
    'K',
    'h',
    'e',
    'm',
    'i',
    'r',
    'i',
  ];
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    ' ',
    'E',
    'n',
    'd',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="mylanding d-flex justify-content-between">
      <div className="myProfile">
        <div className="">
          <h1 className="tada">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <button
            type="button"
            className="btn btn-warning btn-lg rounded-pill mt-3"
          >
            <a href="" to="/contact" className="flat-button">
              CONTACT ME
            </a>
          </button>
        </div>

       

      </div>
      <div className="myAvatar ms-auto">
      <Particles className="myParticles" id="tsparticles" />
        <img src={avatar} alt="" />
      </div>

      
      <Loader type="pacman" />
    </div>
     
  );
};

export default Landing;
