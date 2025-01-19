import React from "react";
import { Modal } from "react-bootstrap";
import FotosPortfolio from "./FotosPortfolio";

function Portfolio () {
  const countFoto = 42;

    let fotoArray = [
    ];

    for (var i = 1; i <= countFoto; i++) {
      let fotoToAdd = {foto: require("../assets/portfolio/portfolio"+i+".jpg"), preview: require("../assets/portfolio/portfolio"+i+"-preview.jpg")};
      fotoArray.push(fotoToAdd);
    };

    const [show, setShow] = React.useState(false);
    const [portfolio, setPortfolio] = React.useState();

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