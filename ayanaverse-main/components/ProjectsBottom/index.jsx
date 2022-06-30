import React from "react";
import "./ProjectsBottom.css";

function ProjectsBottom(props) {
  const { className } = props;

  return (
    <a href="#projects_page">
      <div className={`projects_bottom ${className || ""}`}>
        <div className="projects spinnaker-normal-winter-wizard-14px">PROJECTS</div>
      </div>
    </a>
  );
}

export default ProjectsBottom;
