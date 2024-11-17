import React from "react";

function FotosPortfolio (props) {
    let fotoPortfolio = props.fotos.map ((foto) => {
        return(
          <div className="portfolio-foto col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <img className="portfolio-image" src={foto.preview} alt="foto" onClick={(e) => props.onClick(e, foto.foto)} />
          </div>                
        );            
    });
    return (
        <div className="row row-gap-3 portfolio-tile">
            {fotoPortfolio}
        </div>
    );
}

export default FotosPortfolio;