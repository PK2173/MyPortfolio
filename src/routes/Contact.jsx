import React from 'react'
import './Contact.css'
import Heroimg2 from '../components/Heroimg2'

const Contact = () => {
  return (
    <div>
      <Heroimg2 heading="CONTACT." 
      text="Lets have a chat"/>
      <div className="form">
        <form>
          <label>Your Name</label>
          <input type='text'></input>
          <label>Email</label>
          <input type='email'></input>
          <label>Subject</label>
          <input type='text'></input>
          <label>Message</label>
          <textarea cols="30" rows="10" placeholder='Type your message here'></textarea>
          <button className='btn'><a href="https://wa.me/9599334028" target="_blank" rel="noopener noreferrer">Submit</a></button>
        </form>
      </div>
    </div>
  )
}

export default Contact