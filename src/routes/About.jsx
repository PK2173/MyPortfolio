import React from 'react'
import Heroimg2 from '../components/Heroimg2'
import { Link } from 'react-router-dom'
import "./about.css"
// import SlideShow from "../components/ImagesSlider"
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"

const About = () => {
  return (
    <div>
      <Heroimg2 heading="ABOUT." text="I'm a friendly Front-End Developer. "/>
      <div className="about">
        <div className="left">
          <h1>Who Am I</h1>
          <p>Im a MERN stack Developer. I create responsive secure websites</p>
        <Link to="https://docs.google.com/document/d/1uZrKkh_A4QpnPrrXLA8drBizS_YZl0QF/edit?usp=sharing&ouid=100732184994567043442&rtpof=true&sd=true" target='_blank'><button className='btn'>Get My Resume</button></Link>
        </div>
        <Link to="../contact"><button className='btn'>Contact</button></Link>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={React1} className='img' alt="true" />
              {/* <SlideShow imgarr={["./imgarr/react1.jpg", "./imgarr/react2.webp"]}/> */}
            </div>
            <div className="img-stack bottom">
              <img src={React2} className='img' alt="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About