import React from 'react'
import './HeroimgStyles.css'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img src={IntroImg} alt="IntroImg" className="into-img" />
        </div>
        <div className="content">
            <p>HI, I'M A MERN STACK DEVELOPER</p>
            <h1>MERN Developer.</h1>
            <div>
                <Link to='/projects' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg