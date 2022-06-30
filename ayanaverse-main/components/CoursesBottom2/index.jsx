import React from "react";
import "./CoursesBottom2.css";

function CoursesBottom2(props) {
  const { children } = props;

  return (
    <a href="#courses_page">
      <div className="courses_bottom-3">
        <div className="courses-3 spinnaker-normal-winter-wizard-12px">{children}</div>
      </div>
    </a>
  );
}

export default CoursesBottom2;
