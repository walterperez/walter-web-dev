import React from "react";

export default function Project({ icon, title, description }) {
  return (
    <div className="projects-container">
      <div className="projects-icon">
        <img src={icon} alt="chating icon" />
      </div>
      <div className="projects-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
