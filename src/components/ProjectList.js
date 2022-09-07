import React from "react";
import ProjectItem from "./ProjectItem";



function ProjectList({ projects }) {
  console.log(projects);
  const projArr = projects.map(( obj ) => {
      console.log(obj)
      return (
          <ProjectItem 
            key={obj.id}
            name={obj.name} 
            about={obj.about} 
            technologies={obj.technologies}
           />
          // <span key={obj}></span>
      )}
    )
 
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <span>{projArr}</span>
       
      </div>
    </div>
  );
}

export default ProjectList;
