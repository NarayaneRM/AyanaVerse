import React from "react";
import "./ProjectsBottom2.css";

function ProjectsBottom2(props) {
  const { children } = props;

  return (
    <a href="#projects_page">
      <div className="projects_bottom-3">
        <div className="projects-3 spinnaker-normal-winter-wizard-12px">{children}</div>
      </div>
    </a>
  );
}

export default ProjectsBottom2;
