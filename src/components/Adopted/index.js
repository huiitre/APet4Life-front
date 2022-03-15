import "./style.scss";
import Page from "src/components/Page";
import adopted from "../../data/adopted";
import Separator from "src/components/Separator";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import React, { useRef, useState } from "react";

const Adopted = () => {
  const refPicture = useRef([React.createRef(), React.createRef()]);

  const [isOpen, setIsOpen] = useState(false);
  const [currentPicture, setCurrentPicture] = useState();
  const [positionX, setPositionX] = useState();
  const [positionY, setPositionY] = useState();

  const openPicture = (evt) => {
    setIsOpen(true)
    setCurrentPicture(evt.target.src);
    console.log('ouverture', evt.pageY);
    setPositionX(evt.pageX);
    setPositionY(evt.pageY);
  };
  const handleClose = (evt) => {
    setIsOpen(false);
    console.log('close', evt);
    console.log('fermeture', evt.pageY);
    window.scrollTo({
      top: positionY,
      left: 0,
      behavior: 'smooth'
    });
  }
  return (
    <Page className="adopted-page">
      {isOpen && (
        <Lightbox
          mainSrc={currentPicture}
          onCloseRequest={handleClose}
        />
      )}
      {!isOpen && (
        <section className="adopted">
          {adopted.map((item) => {
            return (
              <>
                <div key={item.id} className="element">
                  <div className="element__picture">
                    <img
                      src={require(`../../assets/img/adopted/${item.picture}`)}
                      onClick={openPicture}
                      ref={refPicture}
                    />
                  </div>
                  <div className="element__name">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="element__owner">
                    Adopté par <span className="owner">{item.owner}</span>
                  </div>
                </div>
                <Separator className="" />
              </>
            );
          })}
        </section>
      )}
    </Page>
  );
};

export default Adopted;
