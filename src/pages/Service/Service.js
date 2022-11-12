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
          <div className="iconService">
            <FaDesktop fa-2x />
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
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
            <IoIosApps fa-2x />
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
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
            <FaFileCode />
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
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
            <FaDesktop />
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
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
            <FaDesktop />
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
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
            <FaDesktop />
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
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
