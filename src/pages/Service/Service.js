import React from 'react';
import {FaDesktop, FaFileCode} from 'react-icons/fa'
import {IoIosApps} from 'react-icons/io'


import './Service.css';
export default function Service() {
  return (
    <div className="myService text-center" id="service">
      <div className="brandName">
        <h2>What I Do for My Clients</h2>
      </div>
      <div className="listCart row">
        <div className="card col-sm-10 col-md-6 col-lg-4">
          
          <div className="card-body">
            <div className="iconService">
            <FaDesktop className="fa-5x" />
          </div>
            
        
            <h5 className="card-title">UIX Design</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
         
        </div>
        </div>
        <div className="card  col-sm-10 col-md-6 col-lg-4 ">
          <div className="iconService">
            <IoIosApps className="fa-5x" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Frontend</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card  col-sm-10 col-md-6 col-lg-4">
          <div className="iconService">
            <FaFileCode className="fa-5x"/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Web Application</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
    
      </div>
    </div>
  );
}
