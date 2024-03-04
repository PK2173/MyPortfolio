import React from 'react'
import "./Footer.css"
import {FaGithub, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaSearchLocation, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="locaation">
                    <FaHome size={30} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    <div>
                        <p>S 18 Ground floor Sriniwas Puri </p>
                        <p>New Delhi 110065</p>
                    </div>
                </div>
                <div className="Phone">
                    <FaPhone size={30} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    <div>
                        <h4><p>9599334028</p></h4>
                    </div>
                </div>
                <div className="email">
                    <FaMailBulk size={30} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    <div>
                        <h4><a href="mailto:praveen21@navgurukul.org" target="_blank"><p>praveen21@navgurukul.org</p></a></h4>
                    </div>
                </div>
                <div className="currentlocation">
                    <FaSearchLocation size={30} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    <div>
                        <h4><a rel="noopener noreferrer" href="https://maps.google.com/maps?q=28.5630042%2C77.2607&amp;z=17&amp;hl=en" target="_blank" aria-label="Open map location">Open map location</a></h4>
                    </div>
                </div>
            </div>
            <div className="right">
                <h4>About us</h4>
                <p>Hello, I'm Praveen Kumar, a skilled MERN stack developer with a strong foundation in MongoDB, Express, React, and Node.js – the powerful technologies that form the backbone of modern web development.</p>
                <div className="social">
                    <a href="https://wa.me/9599334028" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} style={{color:"#fff" ,marginRight:"1rem"}}/></a>
                    <a href="https://www.linkedin.com/in/praveen-kumar-a92612232/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={30} style={{color:"#fff" ,marginRight:"1rem"}}/></a>
                    <a href="https://github.com/PK2173?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithub size={30} style={{color:"#fff" ,marginRight:"1rem"}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer