import React from "react";
import { Modal } from "react-bootstrap";
import FotosPortfolio from "./FotosPortfolio";

import portfolio1 from "../assets/portfolio1.jpg";
import portfolio1Preview from "../assets/portfolio1-preview.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio2Preview from "../assets/portfolio2-preview.jpg";
import portfolio3 from "../assets/portfolio3.jpg";
import portfolio3Preview from "../assets/portfolio3-preview.jpg";
import portfolio4 from "../assets/portfolio4.jpg";
import portfolio4Preview from "../assets/portfolio4-preview.jpg";
import portfolio5 from "../assets/portfolio5.jpg";
import portfolio5Preview from "../assets/portfolio5-preview.jpg";
import portfolio6 from "../assets/portfolio6.jpg";
import portfolio6Preview from "../assets/portfolio6-preview.jpg";
import portfolio7 from "../assets/portfolio7.jpg";
import portfolio7Preview from "../assets/portfolio7-preview.jpg";
import portfolio8 from "../assets/portfolio8.jpg";
import portfolio8Preview from "../assets/portfolio8-preview.jpg";
import portfolio9 from "../assets/portfolio9.jpg";
import portfolio9Preview from "../assets/portfolio9-preview.jpg";
import portfolio10 from "../assets/portfolio10.jpg";
import portfolio10Preview from "../assets/portfolio10-preview.jpg";
import portfolio11 from "../assets/portfolio11.jpg";
import portfolio11Preview from "../assets/portfolio11-preview.jpg";
import portfolio12 from "../assets/portfolio12.jpg";
import portfolio12Preview from "../assets/portfolio12-preview.jpg";
import portfolio13 from "../assets/portfolio13.jpg";
import portfolio13Preview from "../assets/portfolio13-preview.jpg";
import portfolio14 from "../assets/portfolio14.jpg";
import portfolio14Preview from "../assets/portfolio14-preview.jpg";
import portfolio15 from "../assets/portfolio15.jpg";
import portfolio15Preview from "../assets/portfolio15-preview.jpg";
import portfolio16 from "../assets/portfolio16.jpg";
import portfolio16Preview from "../assets/portfolio16-preview.jpg";
import portfolio17 from "../assets/portfolio17.jpg";
import portfolio17Preview from "../assets/portfolio17-preview.jpg";
import portfolio18 from "../assets/portfolio18.jpg";
import portfolio18Preview from "../assets/portfolio18-preview.jpg";
import portfolio19 from "../assets/portfolio19.jpg";
import portfolio19Preview from "../assets/portfolio19-preview.jpg";
import portfolio20 from "../assets/portfolio20.jpg";
import portfolio20Preview from "../assets/portfolio20-preview.jpg";
import portfolio21 from "../assets/portfolio21.jpg";
import portfolio21Preview from "../assets/portfolio21-preview.jpg";
import portfolio22 from "../assets/portfolio22.jpg";
import portfolio22Preview from "../assets/portfolio22-preview.jpg";
import portfolio23 from "../assets/portfolio23.jpg";
import portfolio23Preview from "../assets/portfolio23-preview.jpg";
import portfolio24 from "../assets/portfolio24.jpg";
import portfolio24Preview from "../assets/portfolio24-preview.jpg";
import portfolio25 from "../assets/portfolio25.jpg";
import portfolio25Preview from "../assets/portfolio25-preview.jpg";
import portfolio26 from "../assets/portfolio26.jpg";
import portfolio26Preview from "../assets/portfolio26-preview.jpg";
import portfolio27 from "../assets/portfolio27.jpg";
import portfolio27Preview from "../assets/portfolio27-preview.jpg";
import portfolio28 from "../assets/portfolio28.jpg";
import portfolio28Preview from "../assets/portfolio28-preview.jpg";
import portfolio29 from "../assets/portfolio29.jpg";
import portfolio29Preview from "../assets/portfolio29-preview.jpg";
import portfolio30 from "../assets/portfolio30.jpg";
import portfolio30Preview from "../assets/portfolio30-preview.jpg";
import portfolio31 from "../assets/portfolio31.jpg";
import portfolio31Preview from "../assets/portfolio31-preview.jpg";
import portfolio32 from "../assets/portfolio32.jpg";
import portfolio32Preview from "../assets/portfolio32-preview.jpg";
import portfolio33 from "../assets/portfolio33.jpg";
import portfolio33Preview from "../assets/portfolio33-preview.jpg";

function Portfolio () {
    let fotoArray = [{foto: portfolio1, preview: portfolio1Preview}, {foto: portfolio2, preview: portfolio2Preview}, {foto: portfolio3, preview: portfolio3Preview}, {foto: portfolio4, preview: portfolio4Preview}, 
      {foto: portfolio5, preview: portfolio5Preview}, {foto: portfolio6, preview: portfolio6Preview}, {foto: portfolio7, preview: portfolio7Preview}, {foto: portfolio8, preview: portfolio8Preview}, 
      {foto: portfolio9, preview: portfolio9Preview}, {foto: portfolio10, preview: portfolio10Preview}, {foto: portfolio11, preview: portfolio11Preview}, {foto: portfolio12, preview: portfolio12Preview}, 
      {foto: portfolio13, preview: portfolio13Preview}, {foto: portfolio14, preview: portfolio14Preview}, {foto: portfolio15, preview: portfolio15Preview}, {foto: portfolio16, preview: portfolio16Preview}, 
      {foto:  portfolio17, preview: portfolio17Preview}, {foto: portfolio18, preview: portfolio18Preview}, {foto: portfolio19, preview: portfolio19Preview}, {foto: portfolio20, preview: portfolio20Preview}, 
      {foto: portfolio21, preview: portfolio21Preview}, {foto: portfolio22, preview: portfolio22Preview}, {foto: portfolio23, preview: portfolio23Preview}, {foto: portfolio24, preview: portfolio24Preview}, 
      {foto: portfolio25, preview: portfolio25Preview}, {foto: portfolio26, preview: portfolio26Preview}, {foto: portfolio27, preview: portfolio27Preview}, {foto: portfolio28, preview: portfolio28Preview}, 
      {foto: portfolio29, preview: portfolio29Preview}, {foto: portfolio30, preview: portfolio30Preview}, {foto: portfolio31, preview: portfolio31Preview}, {foto: portfolio32, preview: portfolio32Preview}, 
      {foto: portfolio33, preview: portfolio33Preview}
    ];
    const [show, setShow] = React.useState(false);
    const [portfolio, setPortfolio] = React.useState(portfolio1);

    const handleClose = () => setShow(false);
    const handleShow = function(e, foto) {
      setPortfolio(foto);
      setShow(true);
    }

    return(
      <div className="body-section">
        <div className="portfolio container">
          <FotosPortfolio fotos={fotoArray} onClick={handleShow} />
          <Modal size="xl" show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body className="d-flex">
              <img id="bigfoto" src={portfolio} className="big-foto" alt="bigfoto"/>
            </Modal.Body>
          </Modal>
        </div>
      </div>  
    );
}

export default Portfolio;