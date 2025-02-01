import React from "react";
import { Modal } from "react-bootstrap";
import download from "../assets/file-download.svg";

const Documentcard = function (props) {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = function(e, foto) {
        setShow(true);
      }
    const handleDownload = (e, link) => {
      e.preventDefault();
      var element = document.createElement('a');
      element.setAttribute('href', link);
      element.setAttribute('download', link);
      element.setAttribute('target', '_blank');
      element.style.display = 'none';
      document.body.appendChild(element);
      // Происходит клик, словно совершил его сам программирующий ниндзя
      element.click();
      document.body.removeChild(element);
    }

    return(
      <div className="home-service text-center col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <img className="portfolio-image" src={props.preview} alt={props.name}  onClick={handleShow} />
        <button type="button" onClick={(e) => handleDownload(e, props.link)} className="btn btn-outline-primary btn-download">
          <img src={download} width={24} height={24} alt="download"/>
        </button>
        <Modal size="xl" show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body className="d-flex">
              <img id="bigfoto" src={props.preview} className="big-foto" alt="bigfoto"/>
            </Modal.Body>
          </Modal>
      </div>
    );
}

export default Documentcard;