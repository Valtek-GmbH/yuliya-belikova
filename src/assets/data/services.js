import makeupImage from "../makeup.jpg";
import makeupCouchingImage from "../makeup-couching.jpg";
import wedding from "../wedding.jpg";
import creative from "../creative.jpg";
import business_portrait from "../business-portrait.jpg";
import styling from "../styling.jpg";
import gifts from "../gifts.jpg";
import become_model from "../become-model.jpg";


var data = {
    "services":[
        {
            "id": "makeup",
            "name": "Make-Up",
            "foto": makeupImage,
            "linkPortfolio": "/portfolio",
            "linkService": "/services",
            "description": "Professional, beautiful and long-lasting makeup for any occasion."
        },
        {
          "id": "styling",
          "name": "Hair styling",
          "foto": styling,
          "linkPortfolio": "/portfolio",
          "linkService": "/services",
          "description": "A beautiful, elegant hairstyle that will help make any day special."
      },
      {
          "id": "wedding",
          "name": "Wedding styling",
          "foto": wedding,
          "linkPortfolio": "/portfolio",
          "linkService": "/services",
          "description": "Make-up and hairstyle for a special day. Make-up in romantic tones and an up-to-date hairstyle will emphasize the advantages, focus on the best facial features and will be organically combined with your image. If necessary, on the eve of the wedding, we can do a trial makeup and hairstyle to take into account all your wishes. I can also accompany you throughout the wedding day."
      },
      {
        "id": "creative",
        "name": "Creative makeup",
        "foto": creative,
        "linkPortfolio": "/portfolio",
        "linkService": "/services",
        "description": "Unusual makeup for a special occasion. It will emphasize your personality, help you remember or match the moment/event."
    },
    {
            "id": "makeup-couching",
            "name": "Make-Up Coaching",
            "foto": makeupCouchingImage,
            "linkPortfolio": "/portfolio",
            "linkService": "/services",
            "description": "If you want to learn how to make yourself a beautiful make–up, visit the \"Make-up for yourself\" lesson or a three-lesson course to find your style, hone your skills and learn how to create images for different occasions."
        },
        {
            "id": "business-portrait", 
            "name": "Business Portrait",
            "foto": business_portrait,
            "linkPortfolio": "/portfolio",
            "linkService": "/services",
            "description": "Beautiful, personable, imaginative studio photos that reveal you as a specialist or business representative. You will use these photos many times on social media. The service is performed together with the photographer in a modern, beautiful studio in the 2nd district of Vienna."
        },
        {
            "id": "Gifts",
            "name": "Gift certificates",
            "foto": gifts,
            "linkPortfolio": "/portfolio",
            "linkService": "/services",
            "description": "A beautiful and original gift for friends, family, and business partners. Purchase gift certificates for any service in denominations of 50, 100, 150, 250, 400 euros and give attention, inspiration and beauty."
        },
        {
          "id": "become-model", 
          "name": "Become a model",
          "foto": become_model,
          "linkPortfolio": "/portfolio",
          "linkService": "/services",
          "description": "I invite models for makeup and hairstyle to improve the quality of services and practice new techniques. It's free for the model. Condition: willingness to make the proposed image, as well as publish photos in the portfolio and social media networks."
      }
  ]}

  export default data;