import React from "react";
import "./IntegrationCard.css";

function IntegrationCard({ toolName, image, description, webpage, label }) {
  return (
    <div className="intergation_container">
      <a
        href={webpage}
        aria-label={label}
        className="card_container"
        rel="noopener"
      >
        <button>
          <img src={image} alt="PubMed" />
          <h1>{toolName}</h1>
          <p>{description}</p>
        </button>
      </a>
    </div>
  );
}

export default IntegrationCard;
