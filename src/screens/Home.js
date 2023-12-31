import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./Home.css";
import { NavLink } from "react-router-dom";

const search = new URL ("../../images/Retroviruses-cuate.png", import.meta.url);
function Home() {
  return (
    <div className="home_container">
      <div className="home_text_container">
        <h1>
          Easily find resources for
          <br />
          your research
        </h1>

        <h5>
          Join thousands of resources and individuals who <br />
          kickstart reseacrh projects using resFinder.
        </h5>

        <NavLink to="tools" aria-label="Explore Tools" className="explore">
          <button>
            Explore Tools <FaArrowRight />
          </button>
        </NavLink>
      </div>

      <div className="home_img_container">
        <img src={search} alt="resFinder" />
      </div>
    </div>
  );
}

export default Home;
