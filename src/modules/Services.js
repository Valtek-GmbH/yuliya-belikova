import React from "react";

import makeupImage from "../assets/makeup.jpg";
import makeupCouchingImage from "../assets/makeup-couching.jpg";
import lash from "../assets/lash.jpg";
import curls from "../assets/curls.jpg";
import straightening from "../assets/straightening.jpg";
import styling from "../assets/styling.jpg";
import collaboration from "../assets/collaboration.jpg";

let data = {
  "services":[
      {
          "id": "makeup",
          "name": "Make-Up",
          "foto": makeupImage,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      },
      {
          "id": "makeup-couching",
          "name": "Make-Up Coaching",
          "foto": makeupCouchingImage,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      },
      {
          "id": "lash",
          "name": "Lash application",
          "foto": lash,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      },
      {
          "id": "curls",
          "name": "Winding Curls",
          "foto": curls,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      },
      {
          "id": "straightening", 
          "name": "Hair straightening",
          "foto": straightening,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      },
      {
          "id": "styling",
          "name": "Hairstyle",
          "foto": styling,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      },
      {
          "id": "collaboration",
          "name": "Partnership",
          "foto": collaboration,
          "linkPortfolio": "/portfolio",
          "linkService": "/services"
      }
]}

function Services () {
    let services = data.services.map ((service, index) => {
      let pstn = 'service row';
      if (index % 2 !== 0) {
        pstn = pstn + ' service-odd';
      }; 
      return(
        <div className="container services-container">
        <div className={pstn} key={service.id} id={service.id}>
          <img className="homeimg col-md-4" src={service.foto} alt={service.id}/>
          <div className="home-text col-md-7">
            <h1>{service.name}</h1>
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

            <div>
              <button className="btn btn-primary btn-appointment">APPOINTMENT</button>
              <button className="btn btn-primary btn-appointment">PAYMENT</button>
            </div>
          </div> 
        </div>  
        {/* <div className="splitter"></div> */}
        </div>      
      )
    });

    return(
      <div className="body-section">
        {services}
      </div>
    );
}

export default Services;