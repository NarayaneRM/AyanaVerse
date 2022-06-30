import React from "react";
import "./CoursesBottom.css";

function CoursesBottom(props) {
  const { className } = props;

  return (
    <a href="#courses_page">
      <div className={`courses_bottom ${className || ""}`}>
        <div className="courses spinnaker-normal-winter-wizard-14px">COURSES</div>
      </div>
    </a>
  );
}

export default CoursesBottom;
