import React from 'react';
import {FaDesktop, FaFileCode} from 'react-icons/fa'
import {IoIosApps} from 'react-icons/io'
import Modal from '../../components/Modal';
import {FcApproval} from 'react-icons/fc'


import './Service.css';
export default function Service() {
  return (
    <div className="myService text-center" id="service">
      <div className="brandName">
        <h2>What I Do for My Clients</h2>
      </div>
      <div className="listCart row gap-2">
        <div className="card col-sm-12 col-md-3 col-lg-3 ">
          
          <div className="card-body">
            <div className="iconService">
            <FaDesktop className="fa-5x" />
          </div>
            
        
            <h5 className="card-title">UIX Design</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            View More

</button>
         
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <h2>UIX</h2>
          <ul>
            <li><FcApproval className="fa-2x mx-1" />Redesign and optimize your website.</li>
            <li><FcApproval className="fa-2x mx-1" />Giving your site a refreshing new look.</li>
            <li><FcApproval className="fa-2x mx-1" />Provide your website with the best user experience.</li>
           
          </ul>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
        </div>
        <div className="card  col-sm-12 col-md-3 col-lg-3 ">
          
          <div className="card-body">
          <div className="iconService">
            <IoIosApps className="fa-5x" />
          </div>
            <h5 className="card-title">Frontend</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            View More

</button>
          </div>
          <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <h2>Frontend Developer</h2>
          <ul>
            <li><FcApproval className="fa-2x mx-1" />I develop the user interface.</li>
            <li><FcApproval className="fa-2x mx-1" />Web page development.</li>
            <li><FcApproval className="fa-2x mx-1" />I create ux element interactions.</li>
            <li><FcApproval className="fa-2x mx-1" />Make website responsive to screen sizes and compatible for the different browsers.</li>
           
          </ul>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
        </div>
        <div className="card col-sm-12 col-md-3 col-lg-3">
          
          <div className="card-body">
          <div className="iconService">
            <FaFileCode className="fa-5x"/>
          </div>
            <h5 className="card-title">Web Application</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
            View More

</button>

          </div>
          <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <h2>Web Applications</h2>
          <ul>
            <li><FcApproval className="fa-2x mx-1" />Transform your paper work into effective web application.</li>
            <li><FcApproval className="fa-2x mx-1" />Build user interfaces and single-page applications.</li>
            <li><FcApproval className="fa-2x mx-1" />Develop and interact with web services.</li>
           
          </ul>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
        </div>
      </div>
    </div>
  </div>
        </div>
    
      </div>
      
    </div>
  );
}
