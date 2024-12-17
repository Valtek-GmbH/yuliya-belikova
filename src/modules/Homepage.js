import React from "react";

import homeimg from "../assets/home.jpg";
import HomepageServices from "./HomepageServices";

import data from "../assets/data/services";

function Homepage () {
  return(
    <div className="container body-section">
      <div className="row d-flex flex-row home-description">
        <img className="homeimg col-md-6" src={homeimg} alt="service foto"/>
        <div className="home-text col-md-6">
          <p>If you need a beautiful, modern makeup and hairstyle, you are in the right place!</p>
          <p>The principles of my work are to emphasize your strengths, to charge you with self-love and self-confidence throughout the day. To provide a high-quality service for a comfortable time and optimal cost.</p>
          <p>To inspire you to further transform.</p>
        </div> 
      </div>
      <HomepageServices services={data.services} />
    </div>
  );
}

export default Homepage;