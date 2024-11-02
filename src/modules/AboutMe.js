import React from "react";
import aboutimg from "../assets/about.jpg";

function AboutMe () {
    return(
      <div className="body-section">
        <div className="home-description d-flex flex-row">
          <img className="homeimg" src={aboutimg} alt="service foto"/>
          <div className="home-text">
            <p>My name is Yuliya Belikova, I am a makeup artist and hair stylist. I see the beauty in everyone and in my work I try to emphasize the natural beauty of each client. In the profession since 2019. I am constantly following the trends and new products of the beauty industry.</p> 
            <p>When you come to me, you:</p>
            <ul>
              <li>Get a beautiful, modern, long-lasting makeup and a beautiful hairstyle.</li>
              <li>In individual lessons, you will master the knowledge and skills of actual makeup for yourself. You will be able to make it yourself at home without spending a lot of time.</li>
              <li>Get high-quality service - I use the best products and cosmetics in my work.</li>
              <li>Please yourself and be inspired to make changes in your life.</li>
            </ul>
            <p>Why am I being chosen: </p>
            <ul>
              <li>Professionalism. I am constantly improving my knowledge and introducing the best practices into my practice.</li>
              <li>Neatness and cleanliness. I carefully process the brushes after each client, using disposable tools where necessary.</li>
              <li>Comfort. I am able to hear the wishes of clients and their needs.</li>
            </ul>   
          </div> 
        </div>
      </div>  
    );
}

export default AboutMe;