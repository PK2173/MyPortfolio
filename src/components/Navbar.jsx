import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [click, setclick] = useState(false)
    const heandleClick = ()=>setclick(!click)
    const [color, setcolor] = useState(false)
    const changeColor = ()=>{
      if (window.scrollY >= 1) {
        setcolor(true)
      }
      else{
        setcolor(false)
      }
    }

  window.addEventListener("scroll",changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
        <h1>Praveen</h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li><Link to='/' onClick={heandleClick}>Home</Link></li>
            <li><Link to='/projects' onClick={heandleClick}>Projects</Link></li>
            <li><Link to='/about' onClick={heandleClick}>About</Link></li>
            <li><Link to='/contact' onClick={heandleClick}>Contact</Link></li>
        </ul>
        <div className="hamburger" onClick={heandleClick}>
            {click ? <FaTimes size={20} style={{color:"#fff"}}/> 
            :<FaBars size={20} style={{color:"#fff"}}/>}            
        </div>
    </div>
  )
}

export default Navbar


