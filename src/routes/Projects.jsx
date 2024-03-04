import React from "react";
import Heroimg2 from "../components/Heroimg2";
import WorkCord from "../components/WorkCord";
import dataforwork from '../assets/datajson.json'

const Projects = () => {
  return (
    <div>
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
      <div className='work-container'>
        <h1 className="project-heading">Projects</h1>
        <div className='work-container'>
        <div className="project-container">
        {dataforwork.map((val,ind)=>{
          return(
            <WorkCord viewURL={val.viewURL} sourceURL={val.sourceURL} imagesar={val.imgarr}
            title={val.title} desc={val.desc} key={ind}/>
            )
          })}
          </div></div>
      </div>
    </div>
  );
};

export default Projects;
