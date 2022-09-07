import React from "react";




function ProjectItem({ name, about, technologies }) {
  const techArr = technologies.map((techStr, index) => { 
    console.log(techStr)
    return <span key={index}>{techStr}</span>
  })
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* <span>{technologies}</span> */}
       {techArr}
      </div>
    </div>
  );
}

export default ProjectItem;
