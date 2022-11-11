import React,{ useEffect, useState } from 'react';

// import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from "leaflet";
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../../components/AnimatedLetters'
import './Contact.css'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_7rs6bi1', 'template_9axjgxp', form.current, 'OaCyRObUof02vsl_v')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form text-center">
            <form ref={form} onSubmit={sendEmail}>
              <ul className="listInput">
                <li className="half-left animated fadeInUp">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half-right">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  {/* <input type="submit" className="flat-button" value="SEND" /> */}
                  <button  type="submit" className="flat-button">
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
                </li>
              </ul>
            </form>
          </div>
          </div>
        
        <div className="info-map">
          Anis Khemiri,
          <br />
        Tunisia,
          <br />
         
          Bizerte <br />
          <br />
          <span>aniskhemri99@gmail.com</span>
        </div>
        <div className="map-wrap">


      
          <MapContainer center={[37.2566, 9.8884]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[37.2566, 9.8884]}>
              <Popup>Anis lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
      
      </div>
      
      </div>
      </>

      
   
  )
}
let DefaultIcon = L.icon({
  iconUrl: "/image/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default Contact

