import "./style.scss";
import Page from "src/components/Page";
import adopted from "../../data/adopted";
import Separator from "src/components/Separator";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import { useState } from "react";

const Adopted = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPicture, setCurrentPicture] = useState();

  const openPicture = (evt) => {
    console.log("open picture", evt.target.src);
    setIsOpen(true)
    setCurrentPicture(evt.target.src);
    
  };
  console.log(currentPicture);
  return (
    <Page className="adopted-page">
      {isOpen && (
        <Lightbox
          mainSrc={currentPicture}
          onCloseRequest={() => setIsOpen(false)}
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
