import React from 'react'
import Heroimg from '../components/Heroimg'
import dataforwork from '../assets/datajson.json'
import WorkCord from '../components/WorkCord'

const Home = () => {
  return (
    <div>
      <Heroimg/>
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
  )
}

export default Home