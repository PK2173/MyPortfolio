import React from 'react'
import "./WorkCord.css"
import { NavLink } from 'react-router-dom';
import SlideShow from './ImagesSlider';

const WorkCord = (props) => {
  return (
    <div className="project-card">
        <SlideShow imgarr={props.imagesar}/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.desc}</p>
            <div className="pro-btns">
                {props.viewURL ? <NavLink to={props.viewURL} target='_blank' className="btn">View</NavLink>:""}
                {props.sourceURL ? <NavLink to={props.sourceURL} target='_blank' className="btn">Source</NavLink>:""}
            </div>
        </div>
    </div>
  )
}

export default WorkCord