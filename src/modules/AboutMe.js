import React from "react";
import { FormattedMessage } from "react-intl";

import aboutimg from "../assets/about.jpg";
import Documents from "./Documents";

function AboutMe () {
    return(
      <div className="container body-section">
        <div className="row d-flex flex-row home-description">
          <img className="homeimg col-md-4" src={aboutimg} alt="service foto"/>
          <div className="about-text col-md-7">
            <p> <FormattedMessage id="about.text.p1" defaultMessage="My name is Yuliya Belikova, I am a makeup artist and hair stylist. I see the beauty in everyone and in my work I try to emphasize the natural beauty of each client. In the profession since 2019. I am constantly following the trends and new products of the beauty industry." /> </p> 
            <p> <FormattedMessage id="about.text.ul1caption" defaultMessage="When you come to me, you:" /> </p>
            <ul>
              <li> <FormattedMessage id="about.text.li1_1" defaultMessage="Get a beautiful, modern, long-lasting makeup and a beautiful hairstyle." /> </li>
              <li> <FormattedMessage id="about.text.li1_2" defaultMessage="In individual lessons, you will master the knowledge and skills of actual makeup for yourself. You will be able to make it yourself at home without spending a lot of time." /> </li>
              <li> <FormattedMessage id="about.text.li1_3" defaultMessage="Get high-quality service - I use the best products and cosmetics in my work." /> </li>
              <li> <FormattedMessage id="about.text.li1_4" defaultMessage="Please yourself and be inspired to make changes in your life." /> </li>
            </ul>
            <p> <FormattedMessage id="about.text.ul2caption" defaultMessage="Why am I being chosen:" /> </p>
            <ul>
              <li> <FormattedMessage id="about.text.li2_1" defaultMessage="Professionalism. I am constantly improving my knowledge and introducing the best practices into my practice." /> </li>
              <li> <FormattedMessage id="about.text.li2_2" defaultMessage="Neatness and cleanliness. I carefully process the brushes after each client, using disposable tools where necessary." /> </li>
              <li> <FormattedMessage id="about.text.li2_3" defaultMessage="Comfort. I am able to hear the wishes of clients and their needs." /> </li>
            </ul>   
          </div> 
        </div>
        <Documents />
      </div>  
    );
}

export default AboutMe;